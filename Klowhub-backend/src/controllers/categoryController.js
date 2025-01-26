import { categoryService } from '../services/categoryService.js';

export const categoryController = {
/**
 * @swagger
 * /category:
 *  get:
 *      summary: Obtener todas las categories
 *      tags: [Category]
 *      responses:
 *          200:
 *              description: Lista de categorias
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Category'
 *          400:
 *              description: Error en la solicitud
 */
  getAllCategories: async (req, res) => {
    try {
      const categories = await categoryService.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
