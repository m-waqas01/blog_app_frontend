import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const API_URL =
  process.env.REACT_APP_API_BASE_URL ||
  "https://waqas-blog-app-backend.vercel.app/api";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", text: "" });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API_URL}/contact`, formData);

      setAlert({ type: "success", text: "Message sent successfully!" });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setAlert({
        type: "error",
        text: error.response?.data?.message || "Something went wrong!",
      });
    }

    setLoading(false);

    setTimeout(() => {
      setAlert({ type: "", text: "" });
    }, 3000);
  };

  return (
    <div className="bg-[#e3dac9] font-serif">
      {/* Alert */}
      {alert.text && (
        <div
          className={`text-center py-3 ${
            alert.type === "success" ? "bg-green-600" : "bg-red-600"
          } text-white`}
        >
          {alert.text}
        </div>
      )}

      {/* ===================== HERO SECTION ===================== */}
      <div className="py-20 px-6 sm:px-10 md:px-20">
        <h1 className="text-[#8a795d] text-5xl text-center font-bold mb-10">
          Say Hello!
        </h1>

        {/* Profile Image */}
        <div className="flex justify-center mb-12">
          <img
            src="./img/contact-profile.png"
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover shadow-md"
            data-aos="zoom-in-up"
          />
        </div>

        {/* ===================== CONTACT FORM ===================== */}
        <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#8a795d] text-lg mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-[#8a795d] bg-[#e3dac9] rounded-md py-3 px-4 text-[#8a795d] placeholder-[#8a795d]/60 focus:outline-none focus:ring-2 focus:ring-[#8a795d]"
              />
            </div>

            <div>
              <label className="block text-[#8a795d] text-lg mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-[#8a795d] bg-[#e3dac9] rounded-md py-3 px-4 text-[#8a795d] placeholder-[#8a795d]/60 focus:outline-none focus:ring-2 focus:ring-[#8a795d]"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-[#8a795d] text-lg mb-2 font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border border-[#8a795d] bg-[#e3dac9] rounded-md py-3 px-4 text-[#8a795d] placeholder-[#8a795d]/60 focus:outline-none focus:ring-2 focus:ring-[#8a795d]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-[#8a795d] text-lg mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-[#8a795d] bg-[#e3dac9] rounded-md py-3 px-4 text-[#8a795d] placeholder-[#8a795d]/60 focus:outline-none focus:ring-2 focus:ring-[#8a795d]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="uppercase tracking-[0.2em] text-white py-3 px-10 font-medium mt-6 bg-[#8a795d] hover:bg-[#856d4d] transition duration-300 rounded-md shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>

      {/* ===================== INFO SECTION ===================== */}
      <div className="bg-[#d1bea8] p-10 md:p-16">
        <div
          className="
            flex flex-col sm:divide-y md:flex-row md:divide-x md:divide-y-0 
            divide-[#8a795d] text-center mb-20
        "
        >
          {/* Email */}
          <div className="flex-1 px-6 py-6">
            <h1 className="uppercase tracking-wide text-lg font-semibold text-gray-800">
              My Email
            </h1>
            <p className="mt-4 text-[#8a795d] text-lg">info@myblogs.com</p>
          </div>

          {/* Social Media */}
          <div className="flex-1 px-6 py-6">
            <h1 className="uppercase tracking-wide text-lg font-semibold text-gray-800">
              Follow Me
            </h1>
            <div className="flex justify-center space-x-6 text-2xl mt-4">
              {[FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter].map(
                (Icon, i) => (
                  <Link
                    key={i}
                    to={"/"}
                    className="text-[#8a795d] hover:opacity-70 transition"
                  >
                    <Icon />
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ===================== INSTAGRAM SECTION ===================== */}
      <div className="mt-32">
        <h1 className="uppercase text-center font-serif font-medium text-2xl">
          Follow me on Instagram
        </h1>

        {/* Gallery */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-10 gap-5">
          {["01", "02", "03", "04"].map((num) => (
            <img
              key={num}
              src={`./img/footer-${num}.jpg`}
              alt=""
              className="rounded-md shadow-sm hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
