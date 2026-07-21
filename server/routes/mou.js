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
  const { company_name, address, mou_date, purpose, activities } = req.body;

  const sql = `
    INSERT INTO mou 
    (company_name, address, mou_date, purpose, activities) 
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [company_name, address, mou_date, purpose, activities], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database error");
    }
    res.send("MOU record added successfully");
  });
});


// ================= GET ALL =================
router.get("/", (req, res) => {
  db.query("SELECT * FROM mou ORDER BY id ASC", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database error");
    }

    const excelSerialToDate = (val) => {
      if (!val) return "";
      const num = Number(val);
      if (!isNaN(num) && num > 1000) {
        // Excel serial number
        const date = xlsx.SSF.parse_date_code(num);
        return `${String(date.d).padStart(2,"0")}-${String(date.m).padStart(2,"0")}-${date.y}`;
      }
      if (typeof val === "string") {
        const parts = val.split("-");
        if (parts.length === 3 && parts[0].length === 4)
          return `${parts[2]}-${parts[1]}-${parts[0]}`; // YYYY-MM-DD → DD-MM-YYYY
      }
      return val; // already DD-MM-YYYY
    };

    const formatted = result.map(row => ({
      ...row,
      mou_date: excelSerialToDate(row.mou_date)
    }));

    res.json(formatted);
  });
});


// ================= UPLOAD EXCEL =================
router.post("/upload-excel", upload.single("file"), (req, res) => {
  try {
    if (!req.file) return res.status(400).send("No file uploaded");

    const workbook = xlsx.readFile(req.file.path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const rows = xlsx.utils.sheet_to_json(sheet, { header: 1 });

    // Excel columns:
    // Sr No | Company Name | Address | Date | Purpose | Activities

    const excelDateToStr = (val) => {
      if (!val) return "";
      if (typeof val === "number") {
        const date = xlsx.SSF.parse_date_code(val);
        return `${String(date.d).padStart(2,"0")}-${String(date.m).padStart(2,"0")}-${date.y}`;
      }
      if (typeof val === "string") {
        const parts = val.split("-");
        if (parts.length === 3 && parts[0].length === 4)
          return `${parts[2]}-${parts[1]}-${parts[0]}`; // YYYY-MM-DD → DD-MM-YYYY
        return val;
      }
      return String(val);
    };

    const values = rows.slice(1)
      .filter(row => row.length > 0 && row[1])
      .map(row => [
        row[1] || "",
        row[2] || "",
        excelDateToStr(row[3]),
        row[4] || "",
        row[5] || "",
      ]);

    if (values.length === 0)
      return res.status(400).send("No valid data found in Excel");

    const sql = `
      INSERT INTO mou 
      (company_name, address, mou_date, purpose, activities) 
      VALUES ?
    `;

    db.query(sql, [values], (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Insert error: " + err.sqlMessage);
      }
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
  const { company_name, address, mou_date, purpose, activities } = req.body;

  const sql = `
    UPDATE mou 
    SET company_name=?, address=?, mou_date=?, purpose=?, activities=? 
    WHERE id=?
  `;

  db.query(sql, [company_name, address, mou_date, purpose, activities, req.params.id], (err) => {
    if (err) return res.status(500).send("Update error");
    res.send("Updated successfully");
  });
});


// ================= DELETE =================
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM mou WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).send("Delete error");
    res.send("Deleted successfully");
  });
});

module.exports = router;