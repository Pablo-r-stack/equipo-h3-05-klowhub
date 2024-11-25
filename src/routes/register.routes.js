import { Router } from "express";
import { register } from "../controllers/register.controller.js";

const router = Router();

//Ejemplo de Ruta protegida
// router.post("/register", requireAuth, register);

router.post("/register", register);

export default router;
