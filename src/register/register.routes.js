import { Router } from "express";
import { registerController } from "./register.controller.js";
const router = Router();
router.get("/register",registerController)

export default router;