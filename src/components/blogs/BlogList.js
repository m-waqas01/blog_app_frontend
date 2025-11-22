// src/components/blogs/BlogList.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogForm from "./BlogForm";
import BlogEditModal from "./BlogEditModel";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null); // Detail modal
  const [editBlog, setEditBlog] = useState(null); // Edit modal
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch blogs from backend
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/blog`);
      setBlogs(res.data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  // Delete blog
  const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure to delete this blog?")) return;

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in to delete a blog.");
        return;
      }

      await axios.delete(`${API_URL}/blog/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Blog deleted successfully!");
      fetchBlogs();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to delete blog");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Prevent body scroll when any modal is open
  useEffect(() => {
    if (selectedBlog || editBlog) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedBlog, editBlog]);

  return (
    <div className="p-10 mx-auto bg-[#e3dac9]">
      {/* Heading */}
      <h1 className="text-5xl font-serif text-center mt-10 mb-12">
        Blog <span className="text-[#8a795d]">Management</span>
      </h1>

      {/* Add Blog Form */}
      <BlogForm refresh={fetchBlogs} />

      <h1 className="text-4xl font-serif text-center mt-32 mb-12">
        My <span className="text-[#8a795d]">Blogs</span>
      </h1>

      {/* Loader/Error */}
      {loading && <p className="text-center mt-8">Loading blogs...</p>}
      {error && <p className="text-red-600 text-center mt-4">{error}</p>}

      {/* Blog Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="border border-[#856d4d] rounded-lg shadow hover:shadow-lg transition"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 md:h-64 object-cover rounded-t-lg"
              />
            )}

            <div className="p-4 text-center">
              <h2 className="font-serif font-semibold text-lg line-clamp-2">
                {blog.title}
              </h2>
              <button
                onClick={() => setSelectedBlog(blog)}
                className="mt-4 text-[#8a795d] font-semibold font-serif hover:underline"
              >
                READ ME
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedBlog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          aria-modal="true"
          role="dialog"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setSelectedBlog(null)}
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl flex flex-col max-h-[90vh]">
              {/* Header */}
              <div className="flex items-start justify-between p-4 border-b">
                <h3 className="text-xl font-serif font-bold">
                  {selectedBlog.title}
                </h3>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="text-xl font-bold ml-2 hover:text-red-500"
                  aria-label="Close"
                >
                  ✖
                </button>
              </div>

              {/* Body */}
              <div className="p-4 overflow-y-auto max-h-[70vh]">
                {selectedBlog.image && (
                  <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    className="w-full h-64 md:h-80 object-cover rounded-md mb-4"
                  />
                )}
                <p className="text-sm text-gray-600 mt-2">
                  By:{" "}
                  <span className="font-semibold">
                    {selectedBlog.author?.name}
                  </span>
                </p>
                <div className="text-gray-700 text-sm md:text-base">
                  {selectedBlog.content?.split("\n").map((para, idx) => (
                    <p key={idx} className="mb-3">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-3 p-4 border-t">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => {
                    setEditBlog(selectedBlog);
                    setSelectedBlog(null);
                  }}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={() => {
                    deleteBlog(selectedBlog._id);
                    setSelectedBlog(null);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editBlog && (
        <BlogEditModal
          blog={editBlog}
          close={() => setEditBlog(null)}
          refresh={fetchBlogs}
        />
      )}
    </div>
  );
};

export default BlogList;
