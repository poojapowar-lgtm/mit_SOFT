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
        cb(
            null,
            Date.now() + "-" + file.originalname.replace(/\s/g, "")
        );
    },
});

const upload = multer({ storage });

/* CREATE FACULTY */
router.post("/", auth, upload.single("image"), (req, res) => {
    const { name, designation, area_of_expertise } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!name || !designation) {
        return res.status(400).send("Name and Designation are required");
    }

    const sql =
        "INSERT INTO faculty (name, designation, area_of_expertise, image) VALUES (?, ?, ?, ?)";

    db.query(
        sql,
        [name, designation, area_of_expertise, image],
        (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Database error");
            }
            res.send("Faculty added successfully");
        }
    );
});

/* GET ALL FACULTY */
router.get("/", (req, res) => {
    const sql = "SELECT * FROM faculty ORDER BY id DESC";

    db.query(sql, (err, results) => {
        if (err) return res.status(500).send("Database error");
        res.json(results);
    });
});

/* GET SINGLE FACULTY */
router.get("/:id", (req, res) => {
    const sql = "SELECT * FROM faculty WHERE id = ?";

    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).send("Database error");
        res.json(result[0]);
    });
});

/* UPDATE FACULTY */
router.put("/:id", auth, upload.single("image"), (req, res) => {
    const { name, designation, area_of_expertise } = req.body;
    const newImage = req.file ? req.file.filename : null;

    db.query(
        "SELECT image FROM faculty WHERE id = ?",
        [req.params.id],
        (err, result) => {
            if (err) return res.status(500).send("Database error");

            const oldImage = result[0]?.image;
            const finalImage = newImage || oldImage;

            const sql =
                "UPDATE faculty SET name=?, designation=?, area_of_expertise=?, image=? WHERE id=?";

            db.query(
                sql,
                [
                    name,
                    designation,
                    area_of_expertise,
                    finalImage,
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

/* DELETE FACULTY */
router.delete("/:id", auth, (req, res) => {
    const sql = "DELETE FROM faculty WHERE id = ?";

    db.query(sql, [req.params.id], (err) => {
        if (err) return res.status(500).send("Delete failed");
        res.send("Deleted successfully");
    });
});

module.exports = router;