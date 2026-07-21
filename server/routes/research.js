const express = require("express");
const router = express.Router();
const db = require("../config/db");
const multer = require("multer");
const xlsx = require("xlsx");
const fs = require("fs");


// ================= FILE UPLOAD CONFIG =================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""));
  },
});

const upload = multer({ storage });


// ================= CREATE (MANUAL ENTRY) =================
router.post("/", (req, res) => {
  const { name, department, category, supervisor } = req.body;

  const sql = `INSERT INTO research_students (name, department, category, supervisor) VALUES (?, ?, ?, ?)`;

  db.query(sql, [name, department, category, supervisor], (err) => {
    if (err) { console.error(err); return res.status(500).send("Database error"); }
    res.send("Record added successfully");
  });
});


// ================= GET ALL DATA =================
router.get("/", (req, res) => {
  db.query("SELECT * FROM research_students ORDER BY id ASC", (err, result) => {
    if (err) { console.error(err); return res.status(500).send("Database error"); }
    res.json(result);
  });
});


// ================= UPLOAD EXCEL =================
router.post("/upload-excel", upload.single("file"), (req, res) => {
  try {
    if (!req.file) return res.status(400).send("No file uploaded");

    const workbook = xlsx.readFile(req.file.path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    // Read as raw array rows - skip header row
    const rows = xlsx.utils.sheet_to_json(sheet, { header: 1 });
    console.log("Raw rows sample:", rows.slice(0, 3));

    // Excel columns: Sr No | Name | Batch/Category | Department | Supervisor
    // Skip header row (index 0), skip Sr No (col 0)
    const values = rows.slice(1)
      .filter(row => row.length > 0 && row[1])
      .map(row => [
        row[1] || "",  // Name (col B)
        row[3] || "",  // Department (col D)
        row[2] || "",  // Category/Batch (col C)
        row[4] || "",  // Supervisor (col E)
      ]);

    console.log("Mapped values count:", values.length);

    if (values.length === 0) return res.status(400).send("No valid data found in Excel");

    const sql = `INSERT INTO research_students (name, department, category, supervisor) VALUES ?`;

    db.query(sql, [values], (err) => {
      if (err) { console.error(err); return res.status(500).send("Insert error: " + err.sqlMessage); }
      fs.unlinkSync(req.file.path);
      res.send("Excel uploaded successfully");
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error processing Excel file: " + err.message);
  }
});


// ================= UPDATE =================
router.put("/:id", (req, res) => {
  const { name, department, category, supervisor } = req.body;
  const sql = `UPDATE research_students SET name=?, department=?, category=?, supervisor=? WHERE id=?`;
  db.query(sql, [name, department, category, supervisor, req.params.id], (err) => {
    if (err) return res.status(500).send("Update error");
    res.send("Updated successfully");
  });
});


// ================= DELETE =================
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM research_students WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).send("Delete error");
    res.send("Deleted successfully");
  });
});

module.exports = router;