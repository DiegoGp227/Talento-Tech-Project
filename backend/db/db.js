import mysql from "mysql2/promise";

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};

let db;

try {
    db = await mysql.createConnection(dbConfig);
    console.log("✅ Conexión a la base de datos establecida");
} catch (err) {
    console.error("❌ Error al conectar con la base de datos:", err.message);
}

export default db;
