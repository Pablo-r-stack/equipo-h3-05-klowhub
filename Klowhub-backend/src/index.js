// src/index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes); // Mount the auth routes

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on http://localhost:5000");
});
