import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { moduleController } from "../controllers/module.controller.js";

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Modules
 *   description: Gestión de modulos
 */

/**
 * @swagger
 * /modules/{id}:
 *   get:
 *     summary: Obtiene un módulo según su ID
 *     tags: [Modules]  # Cambié "Courses" a "Modules" para que esté más relacionado con el recurso
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del módulo
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Módulo encontrado con su información relacionada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: "Conceptos básicos"
 *                 course:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     title:
 *                       type: string
 *                       example: "Introducción a Prisma"
 *                 classes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       title:
 *                         type: string
 *                         example: "Clase introductoria"
 *                       videoUrl:
 *                         type: string
 *                         example: "https://watchThisExample.com.ar"
 *                       thumbnail:
 *                         type: string
 *                         example: "https://imagesource.org"
 *                       material:
 *                         type: string
 *                         example: "Here are the author notes"
 *       400:
 *         description: Error en la solicitud. La solicitud no se pudo procesar.
 *       404:
 *         description: No se encontró el módulo con el ID proporcionado.
 */
router.get("/:id", moduleController.getModuleById);

/**
 * @swagger
 * /modules/createNew/{courseId}:
 *   post:
 *     summary: Crear un nuevo módulo
 *     tags: [Modules]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         description: ID del curso donde se creará el módulo
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título del módulo
 *                 example: "Introducción"
 *     responses:
 *       201:
 *         description: Módulo creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: "Conceptos básicos"
 *                 course:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     title:
 *                       type: string
 *                       example: "Introducción a Prisma"
 *                 classes:
 *                   type: array
 *                   items:
 *                     type: object
 *                   example: []
 *       400:
 *         description: Error en la solicitud
 */
router.post("/createNew/:courseId",requireAuth, moduleController.creteNewModule);

export default router;