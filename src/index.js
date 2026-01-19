// src/index.js
// Import necessary modules
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
// Load environment variables from .env file
dotenv.config();
// Connect to the database
connectDB();
// Initialize Express app
const app = express();
// Middleware to parse JSON requests
app.use(express.json());
// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "API Key Service is running" });
});
// Start the server
const PORT = process.env.PORT || 4000;
// Listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
