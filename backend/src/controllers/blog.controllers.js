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

const getAllBlogs = asyncHandler(async (req, res) => {
  // Extract pagination parameters from query string
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  // Calculate skip value
  const skip = (page - 1) * limit;

  // Fetch blogs with pagination
  const blogs = await Blog.find({})
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  // Get total count for pagination info
  const totalBlogs = await Blog.countDocuments();
  const totalPages = Math.ceil(totalBlogs / limit);

  // Prepare pagination metadata
  const paginationData = {
    blogs,
    pagination: {
      currentPage: page,
      totalPages,
      totalBlogs,
      limit,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1
    }
  };

  return res
    .status(200)
    .json(new ApiResponse(200, paginationData, "Blogs fetched successfully"));
});

export { createBlog, getAllBlogs };
