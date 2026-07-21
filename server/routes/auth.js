console.log("Auth route loaded ✅");

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

//  LOGIN API (HARD CODED ADMIN)
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  //  Hardcoded admin credentials
  const ADMIN_EMAIL = "admin@soft.com";
  const ADMIN_PASSWORD = "soft@123";

  // check credentials
  if (email !== ADMIN_EMAIL) {
    return res.status(400).send("User not found");
  }

  if (password !== ADMIN_PASSWORD) {
    return res.status(400).send("Wrong password");
  }

  // generate token
  const token = jwt.sign(
    { role: "admin", email: ADMIN_EMAIL },
    "secretkey",
    { expiresIn: "1d" }
  );

  res.json({ token, email: ADMIN_EMAIL });
});

module.exports = router;