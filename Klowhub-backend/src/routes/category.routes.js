
import { Router } from 'express';
import { categoryController } from '../controllers/categoryController.js';

const router = Router();
/**
 * @swagger
 * /category:
 *   get:
 *     summary: Obtiene todas las categorias listadas
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: Lista de categorias
 *       404:
 *         description: No se encontraron categorias
 *       401:
 *         description: No autorizado
 */
router.get("/", categoryController.getAllCategories);

export default router;