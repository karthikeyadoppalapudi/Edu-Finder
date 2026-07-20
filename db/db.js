require("dotenv").config();
const mysql = require("mysql2/promise");

// 🔍 Debug line
console.log("ENV PASSWORD:", process.env.DB_PASSWORD);

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "dbms_project",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test connection
db.getConnection()
  .then((conn) => {
    console.log("Connected to MySQL Database ✅");
    conn.release();
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });

module.exports = db;
