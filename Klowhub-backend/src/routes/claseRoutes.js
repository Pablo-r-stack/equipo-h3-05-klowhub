import express from "express";
import upload from "../config/multerConfig.js";
import { createClase } from "../controllers/claseController.js";

const router = express.Router();

// Ruta para subir archivos (video, imagen, material)
router.post("/upload", upload.single("file"), (req, res) => {
  try {
    const filePath = `/uploads/${req.file.filename}`;
    res.status(200).json({ message: "Archivo subido correctamente", filePath });
  } catch (error) {
    res.status(500).json({ error: "Error al subir el archivo" });
  }
});

// Ruta para crear una clase (con video e imagen ya subidos)
router.post("/", createClase);

export default router;
