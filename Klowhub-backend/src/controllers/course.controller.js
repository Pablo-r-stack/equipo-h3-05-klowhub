import { courseService } from "../services/course.service";

export const courseController = {
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

  getAllCourses: async (req, res) => {
    try {
      const courses = await courseService.getAllCourses();
      res.json(courses);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

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

  getMyCourses: async (req, res) => {
    try {
      const courses = await courseService.getCoursesBySeller(req.user.id);
      res.json(courses);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
