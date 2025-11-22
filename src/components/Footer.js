import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 font-sans  text-gray-800  bg-[#d1bea8] ">
      <div className="container mx-auto max-w-[1200px] flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Link to={"/"}>
            <h1 className="font-bold">
              My <span className="text-[#918151] ">Blog's</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 ">
          <Link to={"/"} className="hover:text-[#918151]">
            Home
          </Link>
          <Link to={"/blog"} className="hover:text-[#918151]">
            Blog
          </Link>
          <Link to={"/about"} className="text-[#918151] hover:text-[#918151]">
            About
          </Link>
          <Link to={"/contact"} className="hover:text-[#918151]">
            Contact
          </Link>
        </nav>

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
            to="/"
            className=" font-medium px-4 py-2  bg-[#8a795d] hover:bg-[#856d4d] transition duration-300 rounded-md text-center flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="57 35.171 26 16.043"
              width="26"
              height="16.043"
              className="fill-white rotate-180"
            >
              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
            </svg>
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
            <Link to={"/blog"} className="hover:text-[#918151]">
              Blog
            </Link>
            <Link to={"/about"} className="text-[#918151] hover:text-[#918151]">
              About
            </Link>
            <Link to={"/contact"} className="hover:text-[#918151]">
              Contact
            </Link>
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
              to="/"
              className=" bg-[#b38b6d] font-medium px-4 py-2 rounded hover:bg-[#856d4d] text-center flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="57 35.171 26 16.043"
                width="26"
                height="16.043"
                className="fill-[#918151] rotate-180"
              >
                <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
              </svg>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Footer;
