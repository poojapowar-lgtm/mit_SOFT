const express = require("express");
const router = express.Router();
const db = require("../config/db");
const auth = require("../middleware/auth"); // using auth

// GET MEMBERS (FILTER BY TYPE)
router.get("/", (req, res) => {
  const { type } = req.query;

  let sql = "SELECT * FROM members";
  let values = [];

  if (type) {
    sql += " WHERE member_type = ?";
    values.push(type);
  }

  sql += " ORDER BY id DESC";

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(result);
  });
});


// ADD MEMBER
router.post("/", auth, (req, res) => {
  const { name, designation, member_type } = req.body;

  if (!name || !designation || !member_type) {
    return res.status(400).json({ error: "All fields required" });
  }

  const sql =
    "INSERT INTO members (name, designation, member_type) VALUES (?, ?, ?)";

  db.query(sql, [name, designation, member_type], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Insert failed" });
    }

    res.json({ message: "Member added successfully" });
  });
});


// UPDATE MEMBER
router.put("/:id", auth, (req, res) => {
  const { name, designation, member_type } = req.body;

  const sql =
    "UPDATE members SET name=?, designation=?, member_type=? WHERE id=?";

  db.query(
    sql,
    [name, designation, member_type, req.params.id],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Update failed" });
      }

      res.json({ message: "Member updated successfully" });
    }
  );
});


// DELETE MEMBER
router.delete("/:id", auth, (req, res) => {
  const sql = "DELETE FROM members WHERE id=?";

  db.query(sql, [req.params.id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Delete failed" });
    }

    res.json({ message: "Member deleted successfully" });
  });
});

module.exports = router;