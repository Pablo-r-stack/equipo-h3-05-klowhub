import express from "express";
import { register, login, getAvatars } from "../controllers/authController.js";
import { getUserProfile, updateAvatar } from "../controllers/userController.js"; // Asegúrate de importar el controlador de usuario
import verifyToken from "../middlewares/verifyToken.js";
import logger from "../utils/logger.js";

const router = express.Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: Datos inválidos
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
 *               password:
 *                 type: string
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
