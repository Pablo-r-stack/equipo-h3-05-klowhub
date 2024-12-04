import { PrismaClient } from "@prisma/client";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import passport from "passport";
import "./config/passport.js";

// Rutas
import authRoutes from "./routes/authRoutes.js";
import registerRoutes from "./routes/register.routes.js";
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

// Archivos estáticos
app.use("/uploads", express.static("uploads"));

// Rutas principales
app.use("/api/auth", authRoutes); 
app.use("/api/user", userRoutes); 
app.use("/api/register", registerRoutes); 
app.use("/api/users", userRoutes); 
app.use("/api/clases", claseRoutes); 
app.use("/api/courses", courseRoutes);

// Documentación Swagger
setupSwagger(app);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export { prisma };
