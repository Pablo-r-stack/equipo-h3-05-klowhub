import { Router } from "express";
import { courseController } from "../controllers/course.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: Gestión de cursos
 */

/**
 * @swagger
 * /courses/create:
 *   post:
 *     summary: Crear un nuevo curso
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título del curso
 *                 example: "Introducción a Prisma"
 *               description:
 *                 type: string
 *                 description: Descripción del curso
 *                 example: "Este curso enseña los fundamentos de Prisma."
 *               price:
 *                 type: number
 *                 description: Precio del curso
 *                 example: 100
 *               categoryId:
 *                 type: number
 *                 description: ID de la categoría del curso
 *                 example: 1
 *               sellerId:
 *                 type: number
 *                 description: ID del creador del curso
 *                 example: 1
 *               thumbnail:
 *                 type: string
 *                 description: URL de la imagen miniatura del curso
 *                 example: "https://example.com/imagen.png"
 *     responses:
 *       201:
 *         description: Curso creado exitosamente
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
 *                   example: "Introducción a Prisma"
 *                 description:
 *                   type: string
 *                   example: "Este curso enseña los fundamentos de Prisma."
 *                 price:
 *                   type: number
 *                   example: 99.99
 *                 categoryId:
 *                   type: number
 *                   example: 1
 *                 sellerId:
 *                   type: number
 *                   example: 42
 *                 thumbnail:
 *                   type: string
 *                   example: "https://example.com/imagen.png"
 *                 modules:
 *                   type: array
 *                   description: Lista de módulos asociados al curso
 *                   items:
 *                     type: object
 *                   example: []
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-01-01T00:00:00Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-01-01T00:00:00Z"
 *       400:
 *         description: Error en la solicitud
 */
router.post("/create", requireAuth, courseController.createCourse);

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Obtener todos los cursos
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: Lista de cursos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   title:
 *                     type: string
 *                     example: "Introducción a Prisma"
 *                   description:
 *                     type: string
 *                     example: "Este curso enseña los fundamentos de Prisma."
 *                   price:
 *                     type: number
 *                     example: 100
 *                   categoryId:
 *                     type: integer
 *                     example: 1
 *                   thumbnail:
 *                     type: string
 *                     example: "https://example.com/imagen.png"
 *                   sellerId:
 *                     type: integer
 *                     example: 4
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-01-27T00:23:46.664Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-01-27T00:23:46.664Z"
 *                   seller:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 4
 *                       name:
 *                         type: string
 *                         example: "Pepe"
 *                       lastName:
 *                         type: string
 *                         example: "Pérez"
 *                       avatarUrl:
 *                         type: string
 *                         example: "avatar1.png"
 *                   modules:
 *                     type: array
 *                     items:
 *                       type: object
 *                     example: []
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: No se encontraron cursos
 */
router.get("/", courseController.getAllCourses);
/**
 * @swagger
 * /courses/my-courses:
 *   get:
 *     summary: Obtener los cursos creados por el usuario autenticado
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de cursos del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 *       400:
 *         description: Error en la solicitud
 */

/**
 * @swagger
 * /courses/course/{id}:
 *   get:
 *     summary: Obtener un curso por ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del curso
 *     responses:
 *       200:
 *         description: Información del curso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       404:
 *         description: Curso no encontrado
 *       400:
 *         description: Error en la solicitud
 */

/**
 * @swagger
 * /courses/update-course/{id}:
 *   put:
 *     summary: Actualizar un curso
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del curso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Curso actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       403:
 *         description: Usuario no autorizado
 *       404:
 *         description: Curso no encontrado
 *       400:
 *         description: Error en la solicitud
 */

/**
 * @swagger
 * /courses/delete-course/{id}:
 *   delete:
 *     summary: Eliminar un curso
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del curso
 *     responses:
 *       204:
 *         description: Curso eliminado exitosamente
 *       403:
 *         description: Usuario no autorizado
 *       404:
 *         description: Curso no encontrado
 *       400:
 *         description: Error en la solicitud
 */

//to do -> refactor and check validity of the endpoints from below
router.get("/my-courses", requireAuth, courseController.getMyCourses);
router.get("course/:id", courseController.getCourse);
router.put("update-course/:id", requireAuth, courseController.updateCourse);
router.delete("delete-course/:id", requireAuth, courseController.deleteCourse);

export default router;
