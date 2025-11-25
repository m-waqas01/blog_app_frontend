import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL ||
    "https://waqas-blog-app-backend.vercel.app/api";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      console.log("Login response:", res.data);

      const { accessToken, refreshToken, user } = res.data;
      if (accessToken && refreshToken) {
        localStorage.setItem("token", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(user));

        alert("✅ Login successful!");
        navigate("/bloglist");
        window.location.reload();
      } else {
        alert("❌ No token received from server");
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#e3dac9]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#d1bea8] p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#918151]">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border border-[#8a795d] bg-[#c3b091] rounded-md p-3 mb-3 text-[#8a795d] placeholder-[#8a795d]/60 focus:outline-none focus:ring-2 focus:ring-[#8a795d]"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border border-[#8a795d] bg-[#c3b091] rounded-md p-3 mb-3 text-[#8a795d] placeholder-[#8a795d]/60 focus:outline-none focus:ring-2 focus:ring-[#8a795d]"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-[#918151] border border-[#918151] font-serif px-4 py-2 rounded hover:bg-[#856d4d] hover:text-gray-200 text-white text-center transition duration-700 ease-in-out"
        >
          Login
        </button>
        <p className="mt-4 text-center">
          Don't already have an account,{" "}
          <Link
            to={"/signup"}
            className="text-[#918151] hover:text-[#856d4d] underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
