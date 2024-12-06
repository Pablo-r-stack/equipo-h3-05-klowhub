import multer from "multer";
import { storage } from "../config/cloudinary.js";

const fileFilter = (req, file, cb) => {
  const allowedMimes = [
    "video/mp4",
    "video/webm",
    "video/quicktime",
    "image/jpeg",
    "image/png",
  ];

  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Tipo de archivo no permitido"), false);
  }
};

const limits = {
  fileSize: process.env.MAX_FILE_SIZE || 100 * 1024 * 1024, // 100MB default
  files: 1,
};

const upload = multer({
  storage,
  fileFilter,
  limits,
});

export default upload;
