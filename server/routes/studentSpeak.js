const express = require("express");
const router = express.Router();
const db = require("../config/db");
const auth = require("../middleware/auth");
const multer = require("multer");

// FILE UPLOAD (MULTER)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""));
  },
});

const upload = multer({ storage });

/* CREATE STUDENT SPEAK */
router.post("/", auth, upload.single("image"), (req, res) => {
  const {
    name,
    degree_specialization,
    year_of_passing,
    designation,
    company,
    message,
  } = req.body;

  const image = req.file ? req.file.filename : null;

  if (!name || !message) {
    return res.status(400).send("Name and Message are required");
  }

  // ✅ AUTO GENERATE TITLE & ALT
  const image_title = `${name} - ${degree_specialization || ""}`;
  const image_alt = `Photo of ${name}, ${designation || ""} at ${company || ""}`;

  const sql = `
    INSERT INTO student_speak 
    (name, degree_specialization, year_of_passing, designation, company, message, image, image_title, image_alt) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      name,
      degree_specialization,
      year_of_passing,
      designation,
      company,
      message,
      image,
      image_title,
      image_alt,
    ],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Database error");
      }
      res.send("Student Speak added successfully");
    }
  );
});

/* GET ALL */
router.get("/", (req, res) => {
  const sql = "SELECT * FROM student_speak ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) return res.status(500).send("Database error");
    res.json(results);
  });
});

/* GET SINGLE */
router.get("/:id", (req, res) => {
  const sql = "SELECT * FROM student_speak WHERE id = ?";

  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).send("Database error");
    res.json(result[0]);
  });
});

/* UPDATE */
router.put("/:id", auth, upload.single("image"), (req, res) => {
  const {
    name,
    degree_specialization,
    year_of_passing,
    designation,
    company,
    message,
  } = req.body;

  const newImage = req.file ? req.file.filename : null;

  db.query(
    "SELECT image FROM student_speak WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).send("Database error");

      const oldImage = result[0]?.image;
      const finalImage = newImage || oldImage;

      // ✅ AUTO GENERATE TITLE & ALT (UPDATE)
      const image_title = `${name} - ${degree_specialization || ""}`;
      const image_alt = `Photo of ${name}, ${designation || ""} at ${company || ""}`;

      const sql = `
        UPDATE student_speak 
        SET name=?, degree_specialization=?, year_of_passing=?, designation=?, company=?, message=?, image=?, image_title=?, image_alt=? 
        WHERE id=?
      `;

      db.query(
        sql,
        [
          name,
          degree_specialization,
          year_of_passing,
          designation,
          company,
          message,
          finalImage,
          image_title,
          image_alt,
          req.params.id,
        ],
        (err) => {
          if (err) return res.status(500).send("Update failed");
          res.send("Updated successfully");
        }
      );
    }
  );
});

/* DELETE */
router.delete("/:id", auth, (req, res) => {
  const sql = "DELETE FROM student_speak WHERE id = ?";

  db.query(sql, [req.params.id], (err) => {
    if (err) return res.status(500).send("Delete failed");
    res.send("Deleted successfully");
  });
});

module.exports = router;