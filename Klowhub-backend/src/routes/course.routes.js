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
 *               description:
 *                 type: string
 *                 description: Descripción del curso
 *               price:
 *                 type: number
 *                 description: Precio del curso
 *     responses:
 *       201:
 *         description: Curso creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       400:
 *         description: Error en la solicitud
 */

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
 *                 $ref: '#/components/schemas/Course'
 *       400:
 *         description: Error en la solicitud
 */

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

router.post("/create", requireAuth, courseController.createCourse);
router.get("/courses", courseController.getAllCourses);
router.get("/my-courses", requireAuth, courseController.getMyCourses);
router.get("course/:id", courseController.getCourse);
router.put("update-course/:id", requireAuth, courseController.updateCourse);
router.delete("delete-course/:id", requireAuth, courseController.deleteCourse);

export default router;
