import { Router } from "express";
import { courseController } from "../controllers/course.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/create", requireAuth, courseController.createCourse);
router.get("/cursos", courseController.getAllCourses);
router.get("/mis-cursos", requireAuth, courseController.getMyCourses);
router.get("curso/:id", courseController.getCourse);
router.put("actualizar-curso/:id", requireAuth, courseController.updateCourse);
router.delete("eliminar-curso/:id", requireAuth, courseController.deleteCourse);

// router.post("/register", requireAuth, register);

export default router;
