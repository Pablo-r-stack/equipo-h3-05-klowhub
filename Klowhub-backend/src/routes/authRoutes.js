import express from "express";
import { getAvatars, login, register } from "../controllers/authController.js";
import { getUserProfile } from "../controllers/userController.js"; // Asegúrate de importar el controlador de usuario
import verifyToken from "../middlewares/verifyToken.js";
import logger from "../utils/logger.js";

const router = express.Router();

/**
 * @swagger
 * /auth/register:
 *    post:
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
 *                 example: Contraseña123!
 *               avatarUrl:
 *                 type: string
 *                 example: avatar1.png
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
router.post("/register", async (req, res) => {
  try {
    logger.info("Endpoint de registro accedido");
    await register(req, res);
  } catch (error) {
    logger.error("Error en la ruta /register:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Iniciar sesión para un usuario
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "juan.perez@example.com"
 *               password:
 *                 type: string
 *                 example: "Contraseña123!"
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       401:
 *         description: Credenciales inválidas
 */
router.post("/login", async (req, res) => {
  try {
    logger.info("Endpoint de inicio de sesión accedido");
    await login(req, res);
  } catch (error) {
    logger.error("Error en la ruta /login:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

/**
 * @swagger
 * /auth/avatars:
 *   get:
 *     summary: Obtener la lista de avatares disponibles
 *     tags: [Autenticación]
 *     responses:
 *       200:
 *         description: Lista de avatares disponibles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   file:
 *                     type: string
 */
router.get("/avatars", (req, res) => {
  try {
    logger.info("Endpoint de avatares accedido");
    getAvatars(req, res);
  } catch (error) {
    logger.error("Error en la ruta /avatars:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

/**
 * @swagger
 * /auth/protected:
 *   get:
 *     summary: Acceso a una ruta protegida
 *     tags: [Autenticación]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Acceso concedido
 *       401:
 *         description: No autorizado
 */
router.get("/protected", verifyToken, (req, res) => {
  try {
    logger.info("Ruta protegida accedida", { user: req.user });
    res.json({ message: "Acceso concedido.", user: req.user });
  } catch (error) {
    logger.error("Error en la ruta /protected:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: Obtener el perfil del usuario actual
 *     tags: [Autenticación]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Información del perfil del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 email:
 *                   type: string
 *                 avatar:
 *                   type: string
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/me", verifyToken, async (req, res) => {
  try {
    logger.info("Ruta /me accedida por el usuario", { user: req.user });
    await getUserProfile(req, res); // Llamar al controlador de perfil
  } catch (error) {
    logger.error("Error en la ruta /me:", error);
    res.status(500).json({ error: "Error al obtener el perfil del usuario." });
  }
});

export default router;
