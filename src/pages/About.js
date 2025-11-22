import React from "react";

const About = () => {
  return (
    <>
      {/* About Hero Section */}
      <div className="bg-[#e3dac9]">
        <div className="text-center px-6 py-20 sm:px-12 md:px-24 lg:px-32 xl:px-40 font-sans">
          <p className="uppercase flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Solid"
              viewBox="0 0 64 64"
              width="30"
              height="30"
              className="fill-[#8a795d]"
            >
              <path d="M60,28.5H45.062L58,21.03a3.5,3.5,0,0,0,1.281-4.78h0a3.5,3.5,0,0,0-4.78-1.281L41.562,22.438,49.031,9.5a3.5,3.5,0,0,0-1.281-4.78h0A3.5,3.5,0,0,0,42.969,6L35.5,18.938V4A3.5,3.5,0,0,0,32,.5h0A3.5,3.5,0,0,0,28.5,4V18.938L21.031,6a3.5,3.5,0,0,0-4.78-1.281h0A3.5,3.5,0,0,0,14.969,9.5l7.468,12.937L9.5,14.969A3.5,3.5,0,0,0,4.72,16.25h0A3.5,3.5,0,0,0,6,21.03L18.938,28.5H4A3.5,3.5,0,0,0,.5,32v0A3.5,3.5,0,0,0,4,35.5H18.938L6,42.97A3.5,3.5,0,0,0,4.72,47.75h0A3.5,3.5,0,0,0,9.5,49.031l12.937-7.468L14.969,54.5a3.5,3.5,0,0,0,1.281,4.78h0A3.5,3.5,0,0,0,21.031,58L28.5,45.063V60A3.5,3.5,0,0,0,32,63.5h0A3.5,3.5,0,0,0,35.5,60V45.063L42.969,58a3.5,3.5,0,0,0,4.78,1.281h0a3.5,3.5,0,0,0,1.281-4.78L41.562,41.563,54.5,49.031a3.5,3.5,0,0,0,4.78-1.281h0A3.5,3.5,0,0,0,58,42.97L45.062,35.5H60A3.5,3.5,0,0,0,63.5,32v0A3.5,3.5,0,0,0,60,28.5Z"></path>
            </svg>
            About me
          </p>

          <div className="text-3xl sm:text-4xl md:text-7xl font-serif mt-6 mx-auto max-w-4xl space-y-40 text-center">
            <h1>From Marketing Maven to</h1>
            <span>World Explorer</span>
          </div>

          <p className="mt-6 text-sm sm:text-base md:text-lg mx-auto max-w-4xl">
            Hi there! I’m Sophia Ellis, a marketing professional with a zest for
            life and an insatiable curiosity for the world. This blog is where
            my love for storytelling, discovery, and personal growth converge.
            Here, I aim to share my journey with you.
          </p>
        </div>
        <div className="grid md:grid-cols-[2fr_1fr] sm:grid-cols-1 gap-10 p-10 items-center">
          <img
            src="./img/about-hero-01.jpg"
            alt="About Hero 1"
            className="w-full h-[400px] object-cover rounded-2xl shadow-md"
          />
          <img
            src="./img/about-hero-02.jpg"
            alt="About Hero 2"
            className="w-auto h-auto max-h-[400px] rounded-2xl shadow-md justify-self-center"
          />
        </div>
        <div className="font-serif p-10 md:p-16  bg-[#d1bea8] -mt-48">
          <div
            className="
    flex flex-col sm:divide-y-[1px] sm:divide-[#8a795d]
    md:flex-row md:divide-x-[1px] md:divide-y-0 md:divide-[#8a795d]
    text-center md:text-center sm:text-left mb-20 mt-52
  "
          >
            <div className="flex-1 px-6 py-6">
              <h1 className="text-4xl text-[#8a795d] font-bold">15</h1>
              <p className="mt-4">Countries Explored</p>
            </div>

            <div className="flex-1 px-6 py-6">
              <h1 className="text-4xl text-[#8a795d] font-bold">10+</h1>
              <p className="mt-4">Years in Marketing</p>
            </div>

            <div className="flex-1 px-6 py-6">
              <h1 className="text-4xl text-[#8a795d] font-bold">200</h1>
              <p className="mt-4">Blog Posts Published</p>
            </div>

            <div className="flex-1 px-6 py-6">
              <h1 className="text-4xl text-[#8a795d] font-bold">30</h1>
              <p className="mt-4">Books Read Annually</p>
            </div>

            <div className="flex-1 px-6 py-6">
              <h1 className="text-4xl text-[#8a795d] font-bold">3</h1>
              <p className="mt-4">Languages Spoken</p>
            </div>
          </div>
        </div>
        {/* My Story Section */}
        <div>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 p-10 items-center font-serif mt-20">
            {/* Left Title Section */}
            <div className="text-5xl font-medium mt-10 leading-[1.5em] md:ml-10 sm:text-center md:text-left">
              <h1>
                My <span className="text-[#8a795d]">Story</span>
              </h1>
              <p className="text-5xl md:ml-20 sm:ml-0">So Far</p>
            </div>

            {/* Middle Image */}
            <div className="flex justify-center md:justify-start">
              <img
                src="./img/my-story.jpg"
                alt="My Story"
                className="rounded-lg w-[90%] md:w-[400px] object-cover md:-ml-10"
              />
            </div>

            {/* Right Text Section */}
            <div className="text-sm leading-relaxed sm:text-center md:text-left md:-ml-10">
              <p>
                Fueled by a lifelong fascination with storytelling, my marketing
                career began in a dynamic agency where I mastered the art of
                digital strategy and branding. Over the past decade, I’ve
                crafted narratives that connect and inspire, working with
                diverse clients across industries.
              </p>

              <p className="mt-6">
                As I traveled and connected with different cultures, my
                perspective evolved. I began weaving global experiences into my
                professional journey, blending creativity with cultural
                storytelling.
              </p>

              <p className="mt-6">
                Today, I share insights and experiences through my blog,
                inspiring others to see the world — and their stories — in a
                whole new light.
              </p>
            </div>
          </div>
        </div>
        {/* Blog's Mission Section */}
        <div className="mt-32">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div>
              <img src="./img/blogs-mission.jpg" alt="" />
            </div>

            <div className="bg-[#d1bea8] p-10 font-serif">
              {/* Right side Text section */}
              <h1 className="text-5xl  font-bold  mt-6">
                My Blog’s <span className="text-[#8a795d]">Mission</span>
              </h1>
              <p className="mt-4 text-sm">
                At the heart of this blog is a simple mission: to inspire,
                educate, and connect. As a marketing professional with a passion
                for travel, technology, and wellness, I aim to share valuable
                insights and personal stories that resonate with you.
              </p>
              <p className="mt-4 text-sm">
                Join me in this journey of discovery as we explore the world,
                embrace change, and strive for a balanced, fulfilling life.
              </p>

              <button className="uppercase font-serif tracking-[0.2em] text-white py-3 px-8 font-medium mt-8 bg-[#8a795d] hover:bg-[#856d4d] transition duration-300">
                Get Inspired
              </button>
            </div>
          </div>
        </div>
        {/* Journey Section */}
        <div className="font-serif mt-32 px-6 md:px-10">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 items-center">
            {/* LEFT TEXT SECTION */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-medium leading-snug">
                A Journey Through{" "}
                <span className="text-[#8a795d]">Flavors</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed">
                The kitchen is my creative sanctuary. Whether I’m experimenting
                with new recipes or recreating family favorites, cooking allows
                me to express my creativity and share love through food.
              </p>
              <p className="mt-6 text-lg leading-relaxed">
                These passions are more than just hobbies—they’re integral to
                who I am and what I bring to the table. Through this blog, I
                hope to inspire you to explore your own interests and find joy
                in the journey.
              </p>
            </div>

            {/* RIGHT IMAGE SECTION */}
            <div className="relative w-full flex justify-center md:justify-end">
              {/* Background Image */}
              <img
                src="./img/flavours-02.jpg"
                alt="Flavors background"
                className="w-full md:w-[90%] rounded-lg object-cover"
              />

              {/* Overlapping Image */}
              <img
                src="./img/flavours-01.jpg"
                alt="Flavors overlay"
                className="absolute w-1/2 sm:w-2/3 md:w-1/2 rounded-lg shadow-lg 
                   bottom-[-20px] right-4 sm:right-10 md:-bottom-10 md:-right-10"
              />
            </div>
          </div>
        </div>

        {/* Wandarlust Section */}
        <div className="mt-32 font-serif px-4 md:px-10">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center">
            {/* LEFT IMAGE SECTION */}
            <div className="flex justify-center md:justify-start">
              <img
                src="./img/wanderlust.jpg"
                alt="Wanderlust"
                className="w-full max-w-[600px] rounded-lg object-cover shadow-md"
              />
            </div>

            {/* RIGHT TEXT SECTION */}
            <div className="bg-[#d1bea8] p-8 md:p-10 rounded-lg text-[#3d3d3d]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-4">
                Wanderlust: <span className="text-[#8a795d]">Why I Travel</span>
              </h1>

              <p className="mt-8 text-base sm:text-lg leading-relaxed">
                Traveling is more than just a hobby—it’s a way of life that
                shapes my perspective and enriches my soul. Each journey offers
                a new adventure, a chance to step out of my comfort zone and
                immerse myself in diverse cultures and landscapes.
              </p>

              <p className="mt-8 text-base sm:text-lg leading-relaxed">
                I travel to see the world through different eyes, to learn from
                the stories and traditions of others, and to appreciate the
                beauty and diversity that our planet offers.
              </p>

              <button className="uppercase font-serif tracking-[0.2em] text-white py-3 px-8 font-medium mt-10 bg-[#8a795d] hover:bg-[#856d4d] transition duration-300 rounded-md">
                Get Inspired
              </button>
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

export default About;
