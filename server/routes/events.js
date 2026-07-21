const express = require("express");
const router = express.Router();
const db = require("../config/db");
const auth = require("../middleware/auth");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, "")),
});

const upload = multer({ storage }).fields([
  { name: "files", maxCount: 10 },
  { name: "doc", maxCount: 1 },
]);

// CREATE
router.post("/", auth, upload, (req, res) => {
  const { title, date, description, link_text, link_url } = req.body;
  const file_path = req.files?.files?.length > 0
    ? JSON.stringify(req.files.files.map(f => `/uploads/${f.filename}`))
    : null;
  const doc_path = req.files?.doc?.length > 0 ? `/uploads/${req.files.doc[0].filename}` : null;

  db.query(
    `INSERT INTO events (title, date, description, file_path, doc_path, link_text, link_url) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [title, date, description, file_path, doc_path, link_text, link_url],
    (err) => {
      if (err) return res.status(500).send(err.message);
      res.send("Event Added Successfully");
    }
  );
});

// GET ALL
router.get("/", (req, res) => {
  db.query("SELECT * FROM events ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).send(err.message);
    res.json(result);
  });
});

// UPDATE
router.put("/:id", auth, upload, (req, res) => {
  const { title, date, description, link_text, link_url } = req.body;

  const file_path = req.files?.files?.length > 0
    ? JSON.stringify(req.files.files.map(f => `/uploads/${f.filename}`))
    : (req.body.file_path || null);

  const doc_path = req.files?.doc?.length > 0
    ? `/uploads/${req.files.doc[0].filename}`
    : (req.body.doc_path || null);

  db.query(
    `UPDATE events SET title=?, date=?, description=?, file_path=?, doc_path=?, link_text=?, link_url=? WHERE id=?`,
    [title, date, description, file_path, doc_path, link_text, link_url, req.params.id],
    (err) => {
      if (err) return res.status(500).send(err.message);
      res.send("Event Updated Successfully");
    }
  );
});

// DELETE
router.delete("/:id", auth, (req, res) => {
  db.query("DELETE FROM events WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).send(err.message);
    res.send("Deleted Successfully");
  });
});

module.exports = router;
