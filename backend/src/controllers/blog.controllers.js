import { Blog } from "../models/blog.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createBlog = asyncHandler(async (req, res) => {
  const { title, slug, content } = req.body;
  if (title == "") {
    return new ApiError(400, "Title is required");
  }
  if (slug == "") {
    return new ApiError(400, "Slug is required");
  }
  if (content == "") {
    return new ApiError(400, "Content is required");
  }
  const blog = await Blog.create({
    title,
    slug,
    content,
  });
  if (!blog) {
    throw new ApiError(500, "Error creating blog");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, blog, "Blog created successfully"));
});

export { createBlog };
