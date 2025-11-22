import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="bg-[#e3dac9]">
        <div className="py-20 px-6 sm:px-10 md:px-20 font-serif">
          {/* Heading */}
          <h1 className="text-[#8a795d] text-5xl text-center font-bold mb-10">
            Say Hello!
          </h1>

          {/* Profile Image */}
          <div className="flex justify-center mb-12">
            <img
              src="./img/contact-profile.png"
              alt="Profile"
              className="rounded-full w-32 h-32 object-cover"
            />
          </div>

          {/* Contact Form */}
          <form className="max-w-2xl mx-auto space-y-6">
            {/* Name & Email in 2 Columns (Responsive) */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#8a795d] text-lg mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full border border-[#8a795d] bg-[#e3dac9] rounded-md py-3 px-4 text-[#8a795d] focus:outline-none focus:ring-2 focus:ring-[#8a795d]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#8a795d] text-lg mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border border-[#8a795d] bg-[#e3dac9] rounded-md py-3 px-4 text-[#8a795d] focus:outline-none focus:ring-2 focus:ring-[#8a795d]"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-[#8a795d] text-lg mb-2 font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full border border-[#8a795d] bg-[#e3dac9] rounded-md py-3 px-4 text-[#8a795d] focus:outline-none focus:ring-2 focus:ring-[#8a795d]"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-[#8a795d] text-lg mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-[#8a795d] bg-[#e3dac9] rounded-md py-3 px-4 text-[#8a795d] focus:outline-none focus:ring-2 focus:ring-[#8a795d]"
              ></textarea>
            </div>

            {/* Button */}
            <div className="text-center">
              <button
                type="submit"
                className="uppercase tracking-[0.2em] text-white py-3 px-10 font-medium mt-6 bg-[#8a795d] hover:bg-[#856d4d] transition duration-300 rounded-md"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="font-serif p-10 md:p-16 bg-[#d1bea8]">
          <div
            className="
      flex flex-col sm:divide-y-[1px] sm:divide-[#8a795d]
      md:flex-row md:divide-x-[1px] md:divide-y-0 md:divide-[#8a795d]
      text-center md:text-center sm:text-left mb-20
    "
          >
            {/* My Email Section */}
            <div className="flex-1 px-6 py-6">
              <h1 className="uppercase tracking-wide text-lg font-semibold text-gray-800">
                My Email
              </h1>
              <p className="mt-4 text-[#8a795d] text-lg">info@myblogs.com</p>
            </div>

            {/* Follow Me Section */}
            <div className="flex-1 px-6 py-6">
              <h1 className="uppercase tracking-wide text-lg font-semibold text-gray-800">
                Follow Me
              </h1>
              <div
                className="
          flex justify-center md:justify-center sm:justify-start 
          space-x-6 text-2xl mt-4
        "
              >
                <Link
                  to={"/"}
                  className="text-[#8a795d] hover:opacity-80 transition duration-200"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to={"/"}
                  className="text-[#8a795d] hover:opacity-80 transition duration-200"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to={"/"}
                  className="text-[#8a795d] hover:opacity-80 transition duration-200"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  to={"/"}
                  className="text-[#8a795d] hover:opacity-80 transition duration-200"
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Sectoin */}
        <div className="mt-32">
          <div>
            <h1 className="uppercase text-center font-serif font-medium text-2xl">
              follow me on Instagram
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-10">
              <img src="./img/footer-01.jpg" alt="" />
              <img src="./img/footer-02.jpg" alt="" />
              <img src="./img/footer-03.jpg" alt="" />
              <img src="./img/footer-04.jpg" alt="" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 p-6 sm:p-10 mt-20">
              {/* Left Text Section */}
              <div className="flex flex-col justify-center text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium leading-snug sm:leading-[1.3em]">
                  Let’s learn, explore, and thrive together!
                </h1>
                <p className="mt-4 font-serif text-sm sm:text-base md:text-lg mb-20">
                  Connect with 4000+ like-minded individuals and be part of a
                  community that values growth, curiosity, and empowerment.
                </p>
              </div>

              {/* Right Form Section */}
              <div className="flex flex-col items-center md:items-start mb-20">
                <input
                  type="text"
                  placeholder="Add your email"
                  className="py-3 sm:py-4 px-3 w-full max-w-sm bg-[#e3dac9] text-[#8a795d] border border-[#8a795d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a795d] transition"
                />
                <button className="w-full max-w-sm uppercase font-serif tracking-[0.2em] text-white py-3 px-8 font-medium mt-6 bg-[#8a795d] hover:bg-[#856d4d] transition duration-300 rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
