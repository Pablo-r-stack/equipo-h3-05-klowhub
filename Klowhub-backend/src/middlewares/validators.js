import { body } from "express-validator";

export const validateUploadRequest = [
  body("courseId")
    .notEmpty()
    .withMessage("El ID del curso es requerido")
    .isUUID()
    .withMessage("El ID del curso debe ser un UUID válido"),

  body("title")
    .notEmpty()
    .withMessage("El título es requerido")
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage("El título debe tener entre 3 y 100 caracteres"),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("La descripción no puede exceder los 500 caracteres"),
];
