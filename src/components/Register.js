import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // Automatically switch between local and deployed backend
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_BASE_URL}/auth/register`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // required if using cookies for refresh token
      });

      // Destructure safely
      const { accessToken, refreshToken, user } = res.data || {};

      console.log("Register Response:", res.data);

      if (accessToken) {
        // Save tokens and user info
        localStorage.setItem("token", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(user));

        alert("✅ Registration successful!");
        navigate("/login");
      } else {
        console.log("No token in response:", res.data);
        alert("❌ No token received from server");
      }
    } catch (err) {
      console.error("Register Error:", err);
      alert(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700 transition"
        >
          Register
        </button>
        <p className="mt-4 text-center">
          Already have an account,{" "}
          <Link
            to={"/login"}
            className="hover:text-[#918151] text-[#856d4d] underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
