import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);
router.delete("/user/:id", deleteUser);

export default router;
