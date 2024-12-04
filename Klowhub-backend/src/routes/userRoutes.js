import express from "express";
import {
  getUserProfile,
  updateAvatar,
  getAllUsers,
  getUserById,
  deleteUser,
} from "../controllers/userController.js";
import verifyToken from "../middlewares/verifyToken.js";
import logger from "../utils/logger.js";

const router = express.Router();

/**
 * @swagger
 * /user/me:
 *   get:
 *     summary: Obtener el perfil del usuario actual
 *     tags: [Usuario]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil del usuario obtenido exitosamente
 *       401:
 *         description: No autorizado
 */
router.get("/me", verifyToken, async (req, res) => {
  try {
    logger.info("Obteniendo perfil de usuario", { userId: req.user.id });
    await getUserProfile(req, res);
  } catch (error) {
    logger.error("Error en la ruta /me:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

/**
 * @swagger
 * /user/me/avatar:
 *   put:
 *     summary: Actualizar el avatar del usuario
 *     tags: [Usuario]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *             required:
 *               - avatar
 *     responses:
 *       200:
 *         description: Avatar actualizado exitosamente
 *       400:
 *         description: Selección de avatar inválida
 */
router.put("/me/avatar", verifyToken, async (req, res) => {
  try {
    logger.info("Actualizando avatar", { userId: req.user.id });
    await updateAvatar(req, res);
  } catch (error) {
    logger.error("Error en la ruta /me/avatar:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags:
 *       - Usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 *                   lastName:
 *                     type: string
 *                   email:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 */
router.get("/users", getAllUsers);

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 email:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Usuario no encontrado.
 */
router.get("/user/:id", getUserById);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Eliminar un usuario
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                     name:
 *                       type: string
 */
router.delete("/user/:id", deleteUser);

export default router;
