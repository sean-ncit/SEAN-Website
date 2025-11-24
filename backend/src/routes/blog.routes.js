import { Router } from "express";
import { createBlog } from "../controllers/blog.controllers.js";

const router = Router();

router.route("/").post(createBlog);

export default router;
