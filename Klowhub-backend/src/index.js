// src/index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const setupSwagger = require("./swagger");

import { PrismaClient } from "@prisma/client";
import passport from "passport";
import register from "../Klowhub-backend/src/routes/register.routes.js";
import "./config/passport.js";
import {
  default as deleteUserRoute,
  default as userRoute,
  default as usersRoute,
} from "./routes/user.routes.js";

dotenv.config();
const app = express();

const prisma = new PrismaClient();

app.use(passport.initialize());

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/user", userRoutes); // User-related routes

//register route
app.use("/api", register);

//User routes
app.use("/api", usersRoute);
app.use("/api", userRoute);
app.use("/api", deleteUserRoute);

setupSwagger(app);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on http://localhost:5000");
});
export { prisma };
