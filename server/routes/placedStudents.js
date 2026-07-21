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

// ✅ FILE FILTER (only images)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG, JPEG, PNG allowed"), false);
  }
};

// ✅ LIMIT FILE SIZE (500KB)
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 500 * 1024 },
});

// multer for excel (no file type restriction)
const uploadExcel = multer({ storage });

// ================= CREATE =================
router.post("/", upload.single("photo"), (req, res) => {
  const { name, discipline, organization, package_lpa } = req.body;

  const photo = req.file ? req.file.filename : null;

  const sql = `
    INSERT INTO placed_students (name, discipline, organization, package_lpa, photo)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, discipline, organization, package_lpa, photo],
    (err) => {
      if (err) return res.status(500).send("Database error");
      res.send("Placed student added successfully");
    }
  );
});

// ================= GET ALL =================
router.get("/", (req, res) => {
  db.query("SELECT * FROM placed_students ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).send("Database error");
    res.json(result);
  });
});

// ================= UPLOAD EXCEL =================
router.post("/upload-excel", uploadExcel.single("file"), (req, res) => {
  try {
    if (!req.file) return res.status(400).send("No file uploaded");

    const workbook = xlsx.readFile(req.file.path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json(sheet, { header: 1 });

    const values = rows.slice(1)
      .filter(row => row.length > 0 && row[0])
      .map(row => [
        row[0] || "",  // Name
        row[1] || "",  // Discipline
        row[2] || "",  // Organization
        row[3] || 0    // Package
      ]);

    if (values.length === 0)
      return res.status(400).send("No valid data");

    const sql = `
      INSERT INTO placed_students (name, discipline, organization, package_lpa)
      VALUES ?
    `;

    db.query(sql, [values], (err) => {
      if (err) return res.status(500).send(err.sqlMessage);
      fs.unlinkSync(req.file.path);
      res.send("Excel uploaded successfully");
    });

  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ================= UPDATE =================
router.put("/:id", upload.single("photo"), (req, res) => {
  const { name, discipline, organization, package_lpa } = req.body;

  let sql;
  let params;

  if (req.file) {
    sql = `
      UPDATE placed_students
      SET name=?, discipline=?, organization=?, package_lpa=?, photo=?
      WHERE id=?
    `;
    params = [
      name,
      discipline,
      organization,
      package_lpa,
      req.file.filename,
      req.params.id,
    ];
  } else {
    sql = `
      UPDATE placed_students
      SET name=?, discipline=?, organization=?, package_lpa=?
      WHERE id=?
    `;
    params = [
      name,
      discipline,
      organization,
      package_lpa,
      req.params.id,
    ];
  }

  db.query(sql, params, (err) => {
    if (err) return res.status(500).send("Update error");
    res.send("Updated successfully");
  });
});

// ================= DELETE =================
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM placed_students WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).send("Delete error");
    res.send("Deleted successfully");
  });
});

// ================= ERROR HANDLER =================
router.use((err, req, res, next) => {
  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).send("File size must be less than 500KB");
  }
  res.status(400).send(err.message);
});

module.exports = router;