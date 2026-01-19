const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Create user (TEMP – no hashing yet)
router.post("/users", async (req, res) => {
  const { username, password } = req.body;

  try {
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ username, password });
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all users (for testing)
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
