const express = require("express");
const router = express.Router();
const db = require("../config/db");
const auth = require("../middleware/auth");


// ADD CONTACT (Public)
router.post("/", (req, res) => {
  const { name, email, mobile, course } = req.body;

  if (!name || !email || !mobile || !course) {
    return res.status(400).json("All fields are required");
  }

  db.query(
    "INSERT INTO contacts (name, email, mobile, course) VALUES (?, ?, ?, ?)",
    [name, email, mobile, course],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json("Database error");
      }
      res.json("Contact submitted successfully ✅");
    }
  );
});


// GET ALL CONTACTS (Admin Protected)
router.get("/", auth, (req, res) => {
  db.query(
    "SELECT * FROM contacts ORDER BY id DESC",
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
});


// GET SINGLE CONTACT
router.get("/:id", auth, (req, res) => {
  db.query(
    "SELECT * FROM contacts WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      if (result.length === 0) return res.status(404).json("Not found");

      res.json(result[0]);
    }
  );
});


// DELETE CONTACT
router.delete("/:id", auth, (req, res) => {
  db.query(
    "DELETE FROM contacts WHERE id = ?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json("Contact deleted successfully 🗑️");
    }
  );
});


module.exports = router;