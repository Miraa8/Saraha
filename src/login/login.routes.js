import { Router } from "express";
import { handleLogin, loginController } from "./login.controller.js";
const router = Router();
router.get("/login",loginController)
router.post("/handleLogin",handleLogin)

export default router;