import { Router } from "express";
import { register } from "../controllers/register.controller";
import { requireAuth } from "../middleware/auth.middleware";

const router = Router();

//Ruta protegida
router.post("/register", requireAuth, register);

export default router;
