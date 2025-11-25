import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check login status
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <header className="relative z-50 font-sans text-gray-800 shadow-md bg-[#e3dac9]">
      <div className="container mx-auto max-w-[1200px] flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Link to={"/"}>
            <h1 className="font-medium font-serif text-2xl">
              Blog <span className="text-[#918151]">Sphere</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to={"/"} className="hover:text-[#918151]">
            Home
          </Link>

          <Link to={"/about"} className=" hover:text-[#918151]">
            About
          </Link>
          <Link to={"/contact"} className="hover:text-[#918151]">
            Contact
          </Link>

          {/* Show only if logged in */}
          {isAuthenticated && (
            <>
              <Link to={"/bloglist"} className="hover:text-[#918151]">
                Blog Management
              </Link>
              <Link
                to="/"
                onClick={handleLogout}
                className="hover:text-red-600 font-medium"
              >
                Logout
              </Link>
            </>
          )}

          {/* Show login/register if not authenticated */}
          {!isAuthenticated && (
            <>
              <Link to={"/login"} className="hover:text-[#918151]">
                Login
              </Link>
              <Link to={"/signup"} className="hover:text-[#918151]">
                Register
              </Link>
            </>
          )}
        </nav>

        {/* Desktop Social & Subscribe */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-4 text-xl">
            <Link to={"/"} className="text-[#918151] hover:opacity-80">
              <FaInstagram />
            </Link>
            <Link to={"/"} className="text-[#918151] hover:opacity-80">
              <FaFacebookF />
            </Link>
            <Link to={"/"} className="text-[#918151] hover:opacity-80">
              <FaLinkedinIn />
            </Link>
            <Link to={"/"} className="text-[#918151] hover:opacity-80">
              <FaTwitter />
            </Link>
          </div>

          <Link
            to={"/signup"}
            className=" border border-[#918151] font-serif px-4 py-2 rounded hover:bg-[#856d4d] hover:text-white text-center transition duration-700 ease-in-out"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <span className="text-2xl">{mobileMenuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <nav className="flex flex-col space-y-2 py-4 px-6 font-medium">
            <Link to={"/"} className="hover:text-[#918151]">
              Home
            </Link>

            <Link to={"/about"} className=" hover:text-[#918151]">
              About
            </Link>
            <Link to={"/contact"} className="hover:text-[#918151]">
              Contact
            </Link>

            {isAuthenticated && (
              <>
                <Link to={"/bloglist"} className="hover:text-[#918151]">
                  Blogs Management
                </Link>
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="hover:text-red-600 font-medium"
                >
                  Logout
                </Link>
              </>
            )}

            {!isAuthenticated && (
              <>
                <Link to={"/login"} className="hover:text-[#918151]">
                  Login
                </Link>
                <Link to={"/signup"} className="hover:text-[#918151]">
                  Register
                </Link>
              </>
            )}

            <div className="flex space-x-2 mt-4">
              <Link to={"/"} className="text-[#918151] hover:opacity-80">
                <FaInstagram />
              </Link>
              <Link to={"/"} className="text-[#918151] hover:opacity-80">
                <FaFacebookF />
              </Link>
              <Link to={"/"} className="text-[#918151] hover:opacity-80">
                <FaLinkedinIn />
              </Link>
              <Link to={"/"} className="text-[#918151] hover:opacity-80">
                <FaTwitter />
              </Link>
            </div>
            <Link
              to={"/signup"}
              className="mt-4 bg-[#b38b6d] font-medium px-4 py-2 rounded hover:bg-[#856d4d] text-center transition duration-700 ease-in-out"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
