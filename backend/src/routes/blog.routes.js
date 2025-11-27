import { Router } from "express";
import { createBlog, getAllBlogs, updateBlog, deleteBlog } from "../controllers/blog.controllers.js";

const router = Router();

router.route("/").post(createBlog);
router.route("/filter").get(getAllBlogs);
router.route("/:id").put(updateBlog).delete(deleteBlog);

export default router;
