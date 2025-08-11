import db from "../../db/db.js";

// Obtener cursos por teacher_id
export const getCourses = async (req, res) => {
  const { teacher_id } = req.params;

  if (!teacher_id) {
    return res.status(400).json({ message: "Falta el teacher_id" });
  }

  try {
    const connection = await db;

    const [courses] = await connection.execute(
      "SELECT id, teacher_id, username, description FROM Courses WHERE teacher_id = ?",
      [teacher_id]
    );

    if (courses.length === 0) {
      return res
        .status(404)
        .json({ message: "No hay cursos para este docente" });
    }

    return res.status(200).json(courses);
  } catch (error) {
    console.error("Error obteniendo cursos:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Crear un curso
export const createCourse = async (req, res) => {
  const { teacher_id, username, description } = req.body;

  if (!teacher_id || !username) {
    return res.status(400).json({ message: "Faltan campos obligatorios" });
  }

  try {
    const connection = await db;

    // Verificar que el docente existe
    const [existingTeacher] = await connection.execute(
      "SELECT id FROM Teachers WHERE id = ?",
      [teacher_id]
    );

    if (existingTeacher.length === 0) {
      return res.status(404).json({ message: "El docente no existe" });
    }

    const [result] = await connection.execute(
      `INSERT INTO Courses (teacher_id, username, description) VALUES (?, ?, ?)`,
      [teacher_id, username, description || null]
    );

    return res.status(201).json({
      message: "Curso creado correctamente",
      courseId: result.insertId,
    });
  } catch (error) {
    console.error("Error creando curso:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
