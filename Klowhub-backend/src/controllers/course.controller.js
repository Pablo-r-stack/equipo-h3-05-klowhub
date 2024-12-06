/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: Gestión de cursos
 */

import { courseService } from "../services/course.service.js";

export const courseController = {
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
  createCourse: async (req, res) => {
    try {
      const courseData = {
        ...req.body,
        sellerId: req.user.id,
      };

      const course = await courseService.createCourse(courseData);
      res.status(201).json(course);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
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
  getCourse: async (req, res) => {
    try {
      const course = await courseService.getCourseById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: "Curso no encontrado" });
      }
      res.json(course);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

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

  getAllCourses: async (req, res) => {
    try {
      const courses = await courseService.getAllCourses();
      res.json(courses);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

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
  updateCourse: async (req, res) => {
    try {
      const course = await courseService.getCourseById(req.params.id);

      if (!course) {
        return res.status(404).json({ message: "Curso no encontrado" });
      }

      if (course.sellerId !== req.user.id) {
        return res
          .status(403)
          .json({ message: "No tienes permiso para actualizar este curso" });
      }

      const updateCourse = await courseService.updateCourse(
        req.params.id,
        req.body
      );
      res.json(updateCourse);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

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

  deleteCourse: async (req, res) => {
    try {
      const course = await courseService.getCourseById(req.params.id);

      if (!course) {
        return res.status(404).json({ message: "Curso no encontrado" });
      }

      if (course.sellerId !== req.user.id) {
        return res
          .status(403)
          .json({ message: "No tienes permiso para eliminar este curso" });
      }

      await courseService.deleteCourse(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

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

  getMyCourses: async (req, res) => {
    try {
      const courses = await courseService.getCoursesBySeller(req.user.id);
      res.json(courses);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
