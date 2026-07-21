const express = require("express");
const router = express.Router();
const db = require("../config/db");
const auth = require("../middleware/auth");
const multer = require("multer");

//  FILE UPLOAD 
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

//  CREATE NEWS 
router.post("/", auth, upload.single("file"), (req, res) => {
  const { title, date, link_text, link_url, category } = req.body;

  const file_path = req.file ? "/uploads/" + req.file.filename : null;

  db.query(
    "INSERT INTO news (title, date, file_path, link_text, link_url, category) VALUES (?, ?, ?, ?, ?, ?)",
    [title, date, file_path, link_text, link_url, category],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "News Added" });
    }
  );
});
// ================= GET NEWS =================
router.get("/", (req, res) => {
  const { type } = req.query;

  let query = "SELECT * FROM news";

  if (type) {
    query += " WHERE category = ?";
    db.query(query + " ORDER BY id DESC", [type], (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  } else {
    db.query(query + " ORDER BY id DESC", (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  }
});

// ================= UPDATE NEWS =================
router.put("/:id", auth, upload.single("file"), (req, res) => {
  const { title, date, link_text, link_url } = req.body;

  let file_path = null;

  if (req.file) {
    file_path = "/uploads/" + req.file.filename;

    db.query(
      "UPDATE news SET title=?, date=?, file_path=?, link_text=?, link_url=? WHERE id=?",
      [title, date, file_path, link_text, link_url, req.params.id],
      (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Updated" });
      }
    );
  } else {
    db.query(
      "UPDATE news SET title=?, date=?, link_text=?, link_url=? WHERE id=?",
      [title, date, link_text, link_url, req.params.id],
      (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Updated" });
      }
    );
  }
});

//  DELETE NEWS 
router.delete("/:id", auth, (req, res) => {
  db.query("DELETE FROM news WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Deleted" });
  });
});

module.exports = router;