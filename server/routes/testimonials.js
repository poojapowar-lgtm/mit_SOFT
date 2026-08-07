const express = require("express");
const router = express.Router();
const db = require("../config/db");
const auth = require("../middleware/auth");
const multer = require("multer");

// ================= STORAGE =================
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/testimonials/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, "")),
});

const upload = multer({ storage }).single("video");

// ================= HELPER =================
const generateText = (input) => {
  if (!input) return null;

  let name = input;

  if (input.startsWith("http")) {
    name = input.split("/").pop();
  }

  return name
    .replace(/^\d+-/, "")
    .split(".")[0]
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

// ================= CREATE =================
router.post("/", auth, upload, (req, res) => {
  let { title, video_url, alt_tag } = req.body;
  let video_path = null;

  if (req.file) {
    video_path = `/uploads/testimonials/${req.file.filename}`;
  }

  if (!video_path && !video_url) {
    return res.status(400).send("Video file or URL is required");
  }

  const source = video_path || video_url;

  // Auto-generate if empty
  if (!title) {
    title = generateText(source);
  }

  if (!alt_tag) {
    alt_tag = generateText(source);
  }

  db.query(
    `INSERT INTO testimonials (title, video_path, video_url, alt_tag)
     VALUES (?, ?, ?, ?)`,
    [title || null, video_path, video_url || null, alt_tag || null],
    (err) => {
      if (err) return res.status(500).send(err.message);
      res.send("Testimonial Added Successfully");
    }
  );
});

// ================= GET ALL =================
router.get("/", (req, res) => {
  db.query(
    "SELECT * FROM testimonials ORDER BY id DESC",
    (err, result) => {
      if (err) return res.status(500).send(err.message);
      res.json(result);
    }
  );
});

// ================= UPDATE =================
router.put("/:id", auth, upload, (req, res) => {
  let { title, video_url, alt_tag } = req.body;
  let video_path = req.body.video_path || null;

  if (req.file) {
    video_path = `/uploads/testimonials/${req.file.filename}`;
  }

  if (!video_path && !video_url) {
    return res.status(400).send("Video file or URL is required");
  }

  const source = video_path || video_url;

  if (!title) {
    title = generateText(source);
  }

  if (!alt_tag) {
    alt_tag = generateText(source);
  }

  db.query(
    `UPDATE testimonials
     SET title=?, video_path=?, video_url=?, alt_tag=?
     WHERE id=?`,
    [title || null, video_path, video_url || null, alt_tag || null, req.params.id],
    (err) => {
      if (err) return res.status(500).send(err.message);
      res.send("Testimonial Updated Successfully");
    }
  );
});

// ================= DELETE =================
router.delete("/:id", auth, (req, res) => {
  db.query(
    "DELETE FROM testimonials WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).send(err.message);
      res.send("Deleted Successfully");
    }
  );
});

module.exports = router;