import { Router } from "express";
import { register } from "../controllers/register.controller.js";

const router = Router();

//Ejemplo de Ruta protegida
// router.post("/register", requireAuth, register);

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Registro de un nuevo usuario
 *     description: Crea un nuevo usuario con los datos proporcionados.
 *     tags:
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Juan
 *               lastName:
 *                 type: string
 *                 example: Pérez
 *               email:
 *                 type: string
 *                 example: juan.perez@example.com
 *               password:
 *                 type: string
 *                 example: contraseña123
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario creado
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                     name:
 *                       type: string
 *                     lastName:
 *                       type: string
 *                     email:
 *                       type: string
 *                     password:
 *                       type: string
 *                 token:
 *                   type: string
 *       400:
 *         description: Error en los datos proporcionados.
 */

router.post("/register", register);

export default router;
