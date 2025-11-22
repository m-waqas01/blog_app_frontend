import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/blog";

const BlogEditModal = ({ blog, close, refresh }) => {
  const [form, setForm] = useState({
    title: blog.title,
    content: blog.content,
    image: blog.image || "",
  });

  const handleUpdate = async (e) => {
    e.preventDefault();

    await axios.put(
      `${API_URL}/${blog._id}`, // ✅ Correct endpoint
      form,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // if protected
        },
      }
    );

    refresh();
    close();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Edit Blog</h2>

        <form onSubmit={handleUpdate}>
          <input
            type="text"
            className="w-full p-2 border rounded mb-3"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <textarea
            className="w-full p-2 border rounded mb-3"
            rows="5"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          ></textarea>

          <input
            type="text"
            className="w-full p-2 border rounded mb-3"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />

          <div className="flex justify-between mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Update
            </button>

            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded"
              onClick={close}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogEditModal;
