// server/routes/admin.js
const express = require("express");
const router = express.Router();
const db = require("../config/db");
const auth = require("../middleware/auth");

// DASHBOARD API
router.get("/dashboard", auth, (req, res) => {
  const queries = [
    "SELECT COUNT(*) AS total FROM news",
    "SELECT COUNT(*) AS total FROM events",
    "SELECT COUNT(*) AS total FROM enquiries",
    "SELECT COUNT(*) AS total FROM members",
    "SELECT COUNT(*) AS total FROM student_speak",
    "SELECT COUNT(*) AS total FROM recruiters",
    "SELECT COUNT(*) AS total FROM faculty",
    "SELECT COUNT(*) AS total FROM research_students",
    "SELECT COUNT(*) AS total FROM mou",
    "SELECT COUNT(*) AS total FROM placed_students",
    "SELECT COUNT(*) AS total FROM alumni_startups",
  ];

  const keys = ["news", "events", "enquiries", "members", "studentSpeak", "recruiters", "faculty", "research", "mou", "placedStudents", "alumniStartup"];
  const data = {};
  let completed = 0;

  queries.forEach((sql, i) => {
    db.query(sql, (err, result) => {
      if (err) return res.status(500).send(err);
      data[keys[i]] = result[0].total;
      completed++;
      if (completed === queries.length) {
        res.json(data);
      }
    });
  });
});

module.exports = router;