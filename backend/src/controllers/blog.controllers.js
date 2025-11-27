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
    .json(ApiResponse.data(200, blog, "blog created successfully"));
});

const getAllBlogs = asyncHandler(async (req, res) => {
  // Extract pagination parameters from query
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  const [blogs, totalBlogs] = await Promise.all([
    Blog.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Blog.countDocuments(),
  ]);

  const hasNext = page * limit < totalBlogs;

  return res
    .status(200)
    .json(
      ApiResponse.pagination(
        200,
        blogs,
        totalBlogs,
        hasNext,
        "blogs fetched successfully"
      )
    );
});

const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, slug, content } = req.body;

  if (!id) {
    throw new ApiError(400, "Blog ID is required");
  }

  // Check if blog exists and if slug already exists (if being updated)
  const [existingBlog, slugExists] = await Promise.all([
    Blog.findById(id),
    slug ? Blog.findOne({ slug, _id: { $ne: id } }) : Promise.resolve(null)
  ]);

  if (!existingBlog) {
    throw new ApiError(404, "Blog not found");
  }

  if (slug && slugExists) {
    throw new ApiError(409, "A blog with this slug already exists");
  }

  // Prepare update object with only provided fields
  const updateFields = {};
  if (title !== undefined) updateFields.title = title.trim();
  if (slug !== undefined) updateFields.slug = slug.trim();
  if (content !== undefined) updateFields.content = content.trim();

  const updatedBlog = await Blog.findByIdAndUpdate(
    id,
    updateFields,
    {
      new: true,
      runValidators: true,
    }
  );

  return res
    .status(200)
    .json(ApiResponse.data(200, updatedBlog, "Blog updated successfully"));
});

const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(400, "Blog ID is required");
  }

  const deletedBlog = await Blog.findByIdAndDelete(id);

  if (!deletedBlog) {
    throw new ApiError(404, "Blog not found");
  }

  return res
    .status(200)
    .json(ApiResponse.message(200, "Blog deleted successfully"));
});

export { createBlog, getAllBlogs, updateBlog, deleteBlog };
