import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { uploadController } from "../controllers/uploadController.js";
import { validateUploadRequest } from "../middlewares/validators.js";

const router = express.Router();

router.post("/",
    requireAuth,
  validateUploadRequest,
  upload.single("file"),
  uploadController.uploadFile
);

router.delete("/:fileId",
    requireAuth,
  uploadController.deleteFile
);

export default router;
