// src/index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const setupSwagger = require("./swagger");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/user", userRoutes); // User-related routes

setupSwagger(app);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on http://localhost:5000");
});
