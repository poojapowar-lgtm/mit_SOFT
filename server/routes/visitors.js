const express = require("express");
const router = express.Router();
const db = require("../config/db");

// POST /api/visitors/track — increment and return count
router.post("/track", (req, res) => {
  db.query("UPDATE visitors SET count = count + 1 WHERE id = 1", (err) => {
    if (err) return res.status(500).json({ success: false });

    db.query("SELECT count FROM visitors WHERE id = 1", (err, results) => {
      if (err) return res.status(500).json({ success: false });
      res.json({ success: true, count: results[0].count });
    });
  });
});

// GET /api/visitors — return current count without incrementing
router.get("/", (req, res) => {
  db.query("SELECT count FROM visitors WHERE id = 1", (err, results) => {
    if (err) return res.status(500).json({ success: false });
    res.json({ success: true, count: results[0].count });
  });
});

module.exports = router;
