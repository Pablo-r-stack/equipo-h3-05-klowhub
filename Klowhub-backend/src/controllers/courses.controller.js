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
};
