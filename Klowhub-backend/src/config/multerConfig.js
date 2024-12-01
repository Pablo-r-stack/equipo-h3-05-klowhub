import multer from "multer";
import path from "path";

// Configuración de almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "uploads")); // Carpeta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

// Configuración del middleware de multer
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // Validar tipo de archivo
    const allowedTypes = [
      "video/mp4",
      "image/jpeg",
      "image/png",
      "application/pdf",
    ];
    if (!allowedTypes.includes(file.mimetype)) {
      cb(new Error("Tipo de archivo no permitido"), false);
    } else {
      cb(null, true);
    }
  },
});

export default upload;
