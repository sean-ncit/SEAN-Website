import { Router } from "express";
import { createBlog, getAllBlogs, updateBlog, deleteBlog } from "../controllers/blog.controllers.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/").post(createBlog);
router.route("/filter").get(getAllBlogs);
router.route("/:id").put(authMiddleware, updateBlog);
router.route("/:id").delete(authMiddleware, deleteBlog);

export default router;