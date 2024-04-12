import { Router } from "express";
import { handleRegister, registerController } from "./register.controller.js";
const router = Router();
router.get("/register", registerController);
router.post("/handleRegister", handleRegister);

export default router;
