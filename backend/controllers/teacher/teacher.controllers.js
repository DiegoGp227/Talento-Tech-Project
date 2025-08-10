import bcryptjs from "bcryptjs";
import db from "../../db/db.js";

export const getTeacher = async (req, res) => {
  const { institution_id } = req.params;

  if (!institution_id) {
    return res.status(400).json({ message: "Falta el institution_id" });
  }

  try {
    const connection = await db;

    const [teachers] = await connection.execute(
      "SELECT id, institution_id, username, subject, email FROM teachers WHERE institution_id = ?",
      [institution_id]
    );

    if (teachers.length === 0) {
      return res
        .status(404)
        .json({ message: "No hay docentes para esta institución" });
    }

    return res.status(200).json(teachers);
  } catch (error) {
    console.error("Error obteniendo docentes:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const createTeacher = async (req, res) => {
  const { institution_id, username, subject, email, password } = req.body;

  if (!institution_id || !username || !subject || !email || !password) {
    return res.status(400).json({ message: "Faltan campos obligatorios" });
  }

  try {
    const connection = await db;

    const [existingTeacher] = await connection.execute(
      "SELECT id FROM teachers WHERE email = ?",
      [email]
    );

    if (existingTeacher.length > 0) {
      return res.status(409).json({ message: "El email ya está registrado" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const [result] = await connection.execute(
      `INSERT INTO teachers (institution_id, username, subject, email, password) VALUES (?, ?, ?, ?, ?)`,
      [institution_id, username, subject, email, hashedPassword]
    );

    return res.status(201).json({
      message: "Docente creado correctamente",
      teacherId: result.insertId,
    });
  } catch (error) {
    console.error("Error creando docente:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
