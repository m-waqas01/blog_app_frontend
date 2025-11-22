import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dqd0zi2xd/upload";
const CLOUDINARY_UPLOAD_PRESET = "mern-preset";

const BlogForm = ({ refresh }) => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    image: "", // manual image URL
  });
  const [file, setFile] = useState(null); // local file upload
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("You must be logged in to create a blog.");
        setLoading(false);
        return;
      }

      let imageUrl = form.image;

      // Upload local file to Cloudinary if selected
      if (file) {
        const cloudData = new FormData();
        cloudData.append("file", file);
        cloudData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

        const cloudRes = await axios.post(CLOUDINARY_URL, cloudData);
        imageUrl = cloudRes.data.secure_url;
      }

      // Send blog data to backend
      await axios.post(
        `${API_URL}/blog`,
        { title: form.title, content: form.content, image: imageUrl },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setSuccess("✅ Blog created successfully!");
      setForm({ title: "", content: "", image: "" });
      setFile(null);
      refresh();

      // Remove success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-xl font-semibold mb-4">Create Blog</h2>

      {error && <p className="text-red-600 font-medium mb-3">{error}</p>}
      {success && <p className="text-green-600 font-medium mb-3">{success}</p>}

      <input
        type="text"
        placeholder="Blog Title"
        className="w-full border border-[#8a795d] bg-[#e3dac9] rounded-md py-3 px-4 text-[#8a795d] focus:outline-none focus:ring-2 focus:ring-[#8a795d]"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />

      <textarea
        placeholder="Blog Content"
        className="w-full border border-[#8a795d] bg-[#e3dac9] rounded-md py-3 px-4 text-[#8a795d] focus:outline-none focus:ring-2 focus:ring-[#8a795d]"
        rows="5"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
        required
      ></textarea>

      <input
        type="text"
        placeholder="Image URL (Optional)"
        className="w-full border border-[#8a795d] bg-[#e3dac9] rounded-md py-3 px-4 text-[#8a795d] focus:outline-none focus:ring-2 focus:ring-[#8a795d]"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />

      <p className="text-[#8a795d] mb-2">OR upload from device:</p>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 text-[#918151]"
      />

      <button
        disabled={loading}
        className={`mt-4 px-4 py-2 rounded text-[#918151] hover:text-white text-center transition duration-700 ease-in-out ${
          loading
            ? "bg-gray-500"
            : " hover:bg-[#856d4d] border border-[#b38b6d]"
        }`}
      >
        {loading ? "Creating..." : "Create Blog"}
      </button>
    </form>
  );
};

export default BlogForm;
