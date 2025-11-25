import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* About Hero Section */}
      <div className="bg-[#e3dac9] overflow-x-hidden">
        <div className="text-center px-6 py-20 sm:px-12 md:px-24 lg:px-32 xl:px-40 font-sans">
          <p className="uppercase flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="30"
              height="30"
              className="fill-[#8a795d]"
            >
              <path d="M60,28.5H45.062L58,21.03a3.5,3.5,0,0,0,1.281-4.78h0a3.5,3.5,0,0,0-4.78-1.281L41.562,22.438,49.031,9.5a3.5,3.5,0,0,0-1.281-4.78h0A3.5,3.5,0,0,0,42.969,6L35.5,18.938V4A3.5,3.5,0,0,0,32,.5h0A3.5,3.5,0,0,0,28.5,4V18.938L21.031,6a3.5,3.5,0,0,0-4.78-1.281h0A3.5,3.5,0,0,0,14.969,9.5l7.468,12.937L9.5,14.969A3.5,3.5,0,0,0,4.72,16.25h0A3.5,3.5,0,0,0,6,21.03L18.938,28.5H4A3.5,3.5,0,0,0,.5,32v0A3.5,3.5,0,0,0,4,35.5H18.938L6,42.97A3.5,3.5,0,0,0,4.72,47.75h0A3.5,3.5,0,0,0,9.5,49.031l12.937-7.468L14.969,54.5a3.5,3.5,0,0,0,1.281,4.78h0A3.5,3.5,0,0,0,21.031,58L28.5,45.063V60A3.5,3.5,0,0,0,32,63.5h0A3.5,3.5,0,0,0,35.5,60V45.063L42.969,58a3.5,3.5,0,0,0,4.78,1.281h0a3.5,3.5,0,0,0,1.281-4.78L41.562,41.563,54.5,49.031a3.5,3.5,0,0,0,4.78-1.281h0A3.5,3.5,0,0,0,58,42.97L45.062,35.5H60A3.5,3.5,0,0,0,63.5,32v0A3.5,3.5,0,0,0,60,28.5Z"></path>
            </svg>
            About me
          </p>

          <div className="text-3xl sm:text-4xl md:text-7xl font-serif mt-6 mx-auto max-w-4xl">
            <h1>From Marketing Maven to</h1>
            <span>World Explorer</span>
          </div>

          <p className="mt-6 text-sm sm:text-base md:text-lg mx-auto max-w-4xl">
            Hi there! I’m Sophia Ellis, a marketing professional with a zest for
            life and an insatiable curiosity for the world.
          </p>
        </div>

        {/* HERO IMAGES */}
        <div className="grid md:grid-cols-[2fr_1fr] sm:grid-cols-1 gap-10 p-5 md:p-10 items-center">
          <img
            src="./img/about-hero-01.jpg"
            alt=""
            className="w-full h-[350px] md:h-[400px] object-cover rounded-2xl shadow-md"
            data-aos="fade-right"
          />
          <img
            src="./img/about-hero-02.jpg"
            alt=""
            className="w-full max-w-[350px] h-auto rounded-2xl shadow-md mx-auto"
            data-aos="fade-left"
          />
        </div>

        {/* EXPERIENCE SECTION */}
        <div className="font-serif p-10 md:p-16 bg-[#d1bea8] mt-10">
          <div className="flex flex-wrap justify-center text-center gap-8">
            {[
              ["15", "Countries Explored"],
              ["10+", "Years in Marketing"],
              ["200", "Blog Posts"],
              ["30", "Books Annually"],
              ["3", "Languages Spoken"],
            ].map(([num, label], i) => (
              <div key={i} className="flex-1 min-w-[120px]">
                <h1 className="text-4xl text-[#8a795d] font-bold">{num}</h1>
                <p className="mt-4">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MY STORY SECTION */}
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 p-5 md:p-10 font-serif mt-20">
          <div className="text-5xl font-medium leading-[1.3em] text-center md:text-left">
            <h1>
              My <span className="text-[#8a795d]">Story</span>
            </h1>
            <p className="text-5xl md:ml-6">So Far</p>
          </div>

          <div className="flex justify-center">
            <img
              src="./img/my-story.jpg"
              alt=""
              className="rounded-lg w-[90%] max-w-[400px]"
              data-aos="fade-up"
            />
          </div>

          <div className="text-sm leading-relaxed text-center md:text-left">
            <p>Fueled by a lifelong fascination with storytelling...</p>
            <p className="mt-6">
              As I traveled and connected with different cultures...
            </p>
            <p className="mt-6">
              Today, I share insights and experiences through my blog...
            </p>
          </div>
        </div>

        {/* BLOG MISSION */}
        <div className="mt-32">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <img
              src="./img/blogs-mission.jpg"
              alt=""
              data-aos="fade-right"
              className="w-full h-full object-cover"
            />

            <div className="bg-[#d1bea8] p-10 font-serif">
              <h1 className="text-5xl font-bold mt-6">
                My Blog’s <span className="text-[#8a795d]">Mission</span>
              </h1>
              <p className="mt-4 text-sm">
                At the heart of this blog is a simple mission: to inspire...
              </p>

              <button className="uppercase text-white py-3 px-8 mt-8 bg-[#8a795d] rounded-md">
                Get Inspired
              </button>
            </div>
          </div>
        </div>

        {/* JOURNEY SECTION */}
        <div className="font-serif mt-32 px-4 md:px-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* LEFT TEXT */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-medium">
                A Journey Through{" "}
                <span className="text-[#8a795d]">Flavors</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed">
                The kitchen is my creative sanctuary...
              </p>
            </div>

            {/* RIGHT IMAGES */}
            <div className="relative w-full flex justify-center md:justify-end">
              <img
                src="./img/flavours-02.jpg"
                alt=""
                className="w-full md:w-[90%] rounded-lg object-cover"
                data-aos="fade-up"
              />
              <img
                src="./img/flavours-01.jpg"
                alt=""
                className="absolute w-1/2 sm:w-2/3 md:w-1/2 rounded-lg shadow-lg bottom-[-10px] right-4 md:-right-10"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>

        {/* WANDERLUST */}
        <div className="mt-32 font-serif px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="./img/wanderlust.jpg"
                alt="/"
                className="w-full max-w-[600px] rounded-lg shadow-md"
                data-aos="fade-right"
              />
            </div>

            <div className="bg-[#d1bea8] p-8 rounded-lg">
              <h1 className="text-4xl font-bold">
                Wanderlust: <span className="text-[#8a795d]">Why I Travel</span>
              </h1>

              <p className="mt-6 leading-relaxed text-lg">
                Traveling is more than just a hobby...
              </p>

              <button className="uppercase text-white py-3 px-8 mt-10 bg-[#8a795d] rounded-md">
                Get Inspired
              </button>
            </div>
          </div>
        </div>

        {/* INSTAGRAM + CONTACT */}
        <div className="mt-32">
          <h1 className="uppercase text-center text-2xl font-serif">
            follow me on Instagram
          </h1>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-10 gap-4">
            {["01", "02", "03", "04"].map((num) => (
              <img
                key={num}
                src={`./img/footer-${num}.jpg`}
                alt="/"
                className="w-full"
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 p-6 mt-20">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-serif leading-snug">
                Let’s learn, explore, and thrive together!
              </h1>
            </div>

            <div>
              <input
                type="text"
                placeholder="Add your email"
                className="py-3 px-3 w-full bg-[#e3dac9] border border-[#8a795d] rounded-md"
              />
              <button className="w-full uppercase text-white py-3 px-8 mt-6 bg-[#8a795d] rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
