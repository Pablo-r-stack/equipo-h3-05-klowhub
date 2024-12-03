import { Router } from "express";
import { courseController } from "../controllers/course.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/create", requireAuth, courseController.createCourse);
router.get("/courses", courseController.getAllCourses);
router.get("/my-courses", requireAuth, courseController.getMyCourses);
router.get("course/:id", courseController.getCourse);
router.put("update-course/:id", requireAuth, courseController.updateCourse);
router.delete("delete-course/:id", requireAuth, courseController.deleteCourse);

export default router;
