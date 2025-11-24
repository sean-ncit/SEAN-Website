import { Router } from "express";
import { createBlog, getAllBlogs } from "../controllers/blog.controllers.js";

const router = Router();

router.route("/").post(createBlog).get(getAllBlogs);

export default router;
