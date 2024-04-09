import { Router } from "express";
import { messageController } from "./message.controller.js";
const router = Router();
router.get("/message",messageController)

export default router;