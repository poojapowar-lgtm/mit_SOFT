const express = require("express");
const router = express.Router();
const db = require("../config/db");
const auth = require("../middleware/auth");


// ADD ENQUIRY (Public - from website form)
router.post("/", (req, res) => {
  const { name, email, mobile, course } = req.body;

  if (!name || !email || !mobile || !course) {
    return res.status(400).json("All fields are required");
  }

  db.query(
    "INSERT INTO enquiries (name, email, mobile, course) VALUES (?, ?, ?, ?)",
    [name, email, mobile, course],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json("Database error");
      }
      res.json("Enquiry submitted successfully");
    }
  );
});


// GET ALL ENQUIRIES (Admin Protected)
router.get("/", auth, (req, res) => {
  db.query(
    "SELECT * FROM enquiries ORDER BY id DESC",
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
});


// GET SINGLE ENQUIRY
router.get("/:id", auth, (req, res) => {
  db.query(
    "SELECT * FROM enquiries WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      if (result.length === 0) return res.status(404).json("Not found");

      res.json(result[0]);
    }
  );
});


// DELETE ENQUIRY
router.delete("/:id", auth, (req, res) => {
  db.query(
    "DELETE FROM enquiries WHERE id = ?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json("Enquiry deleted successfully");
    }
  );
});


module.exports = router;