import express from "express";
import { createClase, uploadToken } from "../controllers/claseController.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Clases
 *   description: Gestión de clases
 */

// This route will create a leson based on a complete url form.
router.post("/", createClase);


/**
 * @swagger
 * /clases/upload:
 *   get:
 *     summary: Obtiene un token firmado para carga multimedia
 *     description: Este endpoint devuelve un token firmado para autenticar la carga de videos a Cloudinary.
 *     tags: [Clases]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token firmado generado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 signature:
 *                   type: string
 *                   example: "a1b2c3d4e5f6g7h8i9j0"
 *                 timestamp:
 *                   type: integer
 *                   example: 1706985600
 *                 cloudName:
 *                   type: string
 *                   example: "tu-cloud-name"
 *                 apiKey:
 *                   type: string
 *                   example: "123456789012345"
 *       400:
 *         description: Error en la solicitud. La solicitud no se pudo procesar.
 *       401:
 *         description: No autorizado. El usuario debe autenticarse.
 */

//This endpoint will send a signed cloudinary token to the client for video uploading services auth
router.get("/upload", verifyToken, uploadToken);

export default router;
