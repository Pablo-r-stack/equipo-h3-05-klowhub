import { PrismaClient } from "@prisma/client";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import passport from "passport";
import "./config/passport.js"; // Configuración de Passport

// Rutas
import authRoutes from "./routes/authRoutes.js";
import registerRoutes from "./routes/register.routes.js";

import userRoute from "./routes/user.routes.js";
import userRoutes from "./routes/userRoutes.js";

import courseRoutes from "./routes/course.routes.js";

import claseRoutes from "./routes/claseRoutes.js";
import setupSwagger from "./swagger.js";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Servir archivos estáticos desde la carpeta "uploads"
app.use("/uploads", express.static("uploads"));

// Rutas principales
app.use("/api/auth", authRoutes); // Rutas de autenticación
app.use("/api/user", userRoutes); // Rutas relacionadas con usuarios

// Rutas adicionales
app.use("/api", registerRoutes); // Rutas para registro
app.use("/api/users", userRoute); // Rutas generales relacionadas con usuarios
app.use("/api/clases", claseRoutes); // Rutas relacionadas con clases
app.use("/api/courses", courseRoutes);

setupSwagger(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export { prisma };
