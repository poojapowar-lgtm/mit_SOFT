const express = require("express");
const router = express.Router();
const db = require("../config/db");
const multer = require("multer");
const xlsx = require("xlsx");
const fs = require("fs");

// ================= FILE UPLOAD CONFIG =================
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""));
  },
});

const upload = multer({ storage });

// ================= CREATE =================
router.post("/", upload.single("certificate"), (req, res) => {
  const {
    name,
    passing_year,
    startup_name,
    contact_number,
    email,
    certificate_link,
  } = req.body;

  const certificate_file = req.file ? req.file.filename : null;

  const sql = `
    INSERT INTO alumni_startups 
    (name, passing_year, startup_name, contact_number, email, certificate_file, certificate_link)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      name,
      passing_year,
      startup_name,
      contact_number,
      email,
      certificate_file,
      certificate_link,
    ],
    (err) => {
      if (err) return res.status(500).send("Database error");
      res.send("Record added successfully");
    }
  );
});

// ================= GET ALL =================
router.get("/", (req, res) => {
  db.query("SELECT * FROM alumni_startups ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).send("Database error");
    res.json(result);
  });
});

// ================= EXCEL UPLOAD =================
router.post("/upload-excel", upload.single("file"), (req, res) => {
  try {
    if (!req.file) return res.status(400).send("No file uploaded");

    const workbook = xlsx.readFile(req.file.path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const rows = xlsx.utils.sheet_to_json(sheet, { header: 1 });

    // Excel Format:
    // Sr No | Name | Year | Startup | Contact | Email | Certificate Link
    const values = rows.slice(1)
      .filter(row => row.length > 0 && row[1])
      .map(row => [
        row[1] || "",  // Name
        row[2] || null, // Year
        row[3] || "",  // Startup Name
        row[4] || "",  // Contact
        row[5] || "",  // Email
        null,          // certificate_file
        row[6] || ""   // certificate_link
      ]);

    if (values.length === 0)
      return res.status(400).send("No valid data in Excel");

    const sql = `
      INSERT INTO alumni_startups
      (name, passing_year, startup_name, contact_number, email, certificate_file, certificate_link)
      VALUES ?
    `;

    db.query(sql, [values], (err) => {
      if (err) return res.status(500).send("Insert error: " + err.sqlMessage);

      fs.unlinkSync(req.file.path);
      res.send("Excel uploaded successfully");
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Error processing Excel: " + err.message);
  }
});

// ================= UPDATE =================
router.put("/:id", upload.single("certificate"), (req, res) => {
  const {
    name,
    passing_year,
    startup_name,
    contact_number,
    email,
    certificate_link,
  } = req.body;

  const certificate_file = req.file ? req.file.filename : null;

  let sql = `
    UPDATE alumni_startups
    SET name=?, passing_year=?, startup_name=?, contact_number=?, email=?, certificate_link=?
  `;

  let values = [
    name,
    passing_year,
    startup_name,
    contact_number,
    email,
    certificate_link,
  ];

  if (certificate_file) {
    sql += ", certificate_file=?";
    values.push(certificate_file);
  }

  sql += " WHERE id=?";
  values.push(req.params.id);

  db.query(sql, values, (err) => {
    if (err) return res.status(500).send("Update error");
    res.send("Updated successfully");
  });
});

// ================= DELETE =================
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM alumni_startups WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).send("Delete error");
    res.send("Deleted successfully");
  });
});

module.exports = router;