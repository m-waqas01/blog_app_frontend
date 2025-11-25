import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogForm from "./BlogForm";
import BlogEditModal from "./BlogEditModel";
import AOS from "aos";
import "aos/dist/aos.css";

const API_URL =
  process.env.REACT_APP_API_BASE_URL ||
  "https://waqas-blog-app-backend.vercel.app/api";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [editBlog, setEditBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch blogs
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

  // Delete Blog
  const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first");
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

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedBlog || editBlog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedBlog, editBlog]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="px-4 md:px-10 py-10 bg-[#e3dac9] min-h-screen">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-serif text-center mt-10 mb-10">
        Blog <span className="text-[#8a795d]">Management</span>
      </h1>

      {/* Add Blog Form */}
      <BlogForm refresh={fetchBlogs} />

      <h1 className="text-3xl md:text-4xl font-serif text-center mt-20 mb-10">
        My <span className="text-[#8a795d]">Blogs</span>
      </h1>

      {/* Loader/Error */}
      {loading && <p className="text-center mt-6">Loading blogs...</p>}
      {error && <p className="text-red-600 text-center mt-4">{error}</p>}

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="border border-[#856d4d] rounded-lg shadow hover:shadow-xl transition duration-300 "
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 md:h-64 object-cover rounded-t-lg"
                data-aos="fade-up"
              />
            )}

            <div className="p-4 text-center">
              <h2 className="font-serif font-semibold text-lg line-clamp-2">
                {blog.title}
              </h2>
              <button
                onClick={() => setSelectedBlog(blog)}
                className="mt-3 text-[#8a795d] font-semibold hover:underline"
              >
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedBlog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-y-auto"
          aria-modal="true"
        >
          <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-serif font-bold">
                {selectedBlog.title}
              </h3>
              <button
                onClick={() => setSelectedBlog(null)}
                className="text-xl hover:text-red-500"
              >
                ✖
              </button>
            </div>

            {/* Body */}
            <div className="p-4 max-h-[70vh] overflow-y-auto">
              {selectedBlog.image && (
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-64 md:h-80 object-cover rounded mb-4"
                />
              )}

              <p className="text-sm text-gray-600 mb-2">
                Author:{" "}
                <span className="font-semibold">
                  {selectedBlog.author?.name}
                </span>
              </p>

              <div className="text-gray-700 leading-relaxed">
                {selectedBlog.content.split("\n").map((para, idx) => (
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
