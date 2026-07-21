const express = require("express");
const router = express.Router();
const db = require("../config/db");
const auth = require("../middleware/auth");
const multer = require("multer");
const path = require("path");

// FILE UPLOAD (MULTER)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(
            null,
            Date.now() + "-" + file.originalname.replace(/\s/g, "")
        );
    },
});

const upload = multer({ storage });

/* CREATE STUDENT SPEAK */
router.post("/", auth, upload.single("image"), (req, res) => {
    const { name, year, message } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!name || !message) {
        return res.status(400).send("Name and Message are required");
    }

    const sql =
        "INSERT INTO student_speak (name, year, message, image) VALUES (?, ?, ?, ?)";

    db.query(sql, [name, year, message, image], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Database error");
        }
        res.send("Student Speak added successfully");
    });
});

/*GET ALL STUDENT SPEAK */
router.get("/", (req, res) => {
    const sql = "SELECT * FROM student_speak ORDER BY id DESC";

    db.query(sql, (err, results) => {
        if (err) return res.status(500).send("Database error");
        res.json(results);
    });
});

/* GET SINGLE RECORD */
router.get("/:id", (req, res) => {
    const sql = "SELECT * FROM student_speak WHERE id = ?";

    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).send("Database error");
        res.json(result[0]);
    });
});

/* UPDATE STUDENT SPEAK */
router.put("/:id", auth, upload.single("image"), (req, res) => {
    const { name, year, message } = req.body;
    const newImage = req.file ? req.file.filename : null;

    // First get existing image
    db.query(
        "SELECT image FROM student_speak WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) return res.status(500).send("Database error");

            const oldImage = result[0]?.image;
            const finalImage = newImage || oldImage;

            const sql =
                "UPDATE student_speak SET name=?, year=?, message=?, image=? WHERE id=?";

            db.query(
                sql,
                [name, year, message, finalImage, req.params.id],
                (err) => {
                    if (err) return res.status(500).send("Update failed");
                    res.send("Updated successfully");
                }
            );
        }
    );
});

/*DELETE STUDENT SPEAK */
router.delete("/:id", auth, (req, res) => {
    const sql = "DELETE FROM student_speak WHERE id = ?";

    db.query(sql, [req.params.id], (err) => {
        if (err) return res.status(500).send("Delete failed");
        res.send("Deleted successfully");
    });
});

module.exports = router;