import { Router } from "express";
import { handleUser, userController } from "./user.controller.js";
const router = Router();
router.get("/user/:id", userController);
router.post("/handleUser/:id", handleUser);

export default router;
