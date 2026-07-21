const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test@2025", 
  database: "mit_admin"
});

db.connect((err) => {
  if (err) {
    console.error("DB Connection Error:", err);
    return;
  }
  console.log("MySQL Connected...");
});

module.exports = db;