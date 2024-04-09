import { Router } from "express";
import { homeController } from "./home.controller.js";
const router = Router();
router.get("/",homeController)

export default router;