import { Router } from "express";
import express from "express";
import { messageController, profilePic } from "./message.controller.js";
import { fileUpload } from "../utils/multer.js";
const router = Router();
router.get("/message", messageController);
router.post(
  "/profilePic",
  express.urlencoded({ extended: true }),
  fileUpload().single("pic"),
  profilePic
);
export default router;
