const express = require("express");
const router = express.Router();
const db = require("../config/db");
const auth = require("../middleware/auth");
const multer = require("multer");

// upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, "")),
});
const upload = multer({ storage });

// CREATE
router.post("/", auth, upload.single("logo"), (req, res) => {
  const { company_name, display_order } = req.body;
  const logo = req.file ? req.file.filename : null;
  const order = display_order !== "" ? parseInt(display_order) : 0;

  const sql =
    "INSERT INTO recruiters (company_name, logo, display_order) VALUES (?, ?, ?)";

  db.query(sql, [company_name, logo, order], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err.sqlMessage || "Database error");
    }
    res.send("Added");
  });
});

// GET
router.get("/", (req, res) => {
  db.query(
    "SELECT * FROM recruiters ORDER BY display_order ASC",
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

// DELETE
router.delete("/:id", auth, (req, res) => {
  db.query("DELETE FROM recruiters WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Deleted");
  });
});

module.exports = router;