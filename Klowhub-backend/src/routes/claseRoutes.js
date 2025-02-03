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

/**
 * @swagger
 * /clases:
 *   post:
 *     summary: Crea una nueva clase asociada a un módulo
 *     description: Este endpoint crea una nueva clase para un módulo existente, con los datos proporcionados.
 *     tags: [Clases]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               moduleId:
 *                 type: integer
 *                 description: ID del módulo al que se asociará la clase.
 *                 example: 1
 *               classNumber:
 *                 type: integer
 *                 description: Número de la clase dentro del módulo.
 *                 example: 1
 *               title:
 *                 type: string
 *                 description: Título de la clase.
 *                 example: "Introducción a JavaScript"
 *               videoUrl:
 *                 type: string
 *                 description: URL del video de la clase.
 *                 example: "https://video-url.com/video.mp4"
 *               thumbnail:
 *                 type: string
 *                 description: URL de la miniatura de la clase.
 *                 example: "https://image-url.com/thumbnail.jpg"
 *               material:
 *                 type: string
 *                 description: URL o enlace de los materiales adicionales de la clase.
 *                 example: "Aqui van las notas del autor"
 *     responses:
 *       201:
 *         description: Clase creada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Clase creada correctamente"
 *                 clase:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     moduleId:
 *                       type: integer
 *                       example: 1
 *                     classNumber:
 *                       type: integer
 *                       example: 1
 *                     title:
 *                       type: string
 *                       example: "Introducción a JavaScript"
 *                     videoUrl:
 *                       type: string
 *                       example: "https://video-url.com/video.mp4"
 *                     thumbnail:
 *                       type: string
 *                       example: "https://image-url.com/thumbnail.jpg"
 *                     material:
 *                       type: string
 *                       example: "https://example.com/materials.zip"
 *       400:
 *         description: Datos inválidos en la solicitud.
 *       401:
 *         description: No autorizado. El usuario debe autenticarse.
 *       500:
 *         description: Error interno del servidor.
 */
router.post("/", verifyToken, createClase);


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
