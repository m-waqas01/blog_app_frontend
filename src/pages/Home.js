import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
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
            I'm Waqas
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mt-6 mx-auto max-w-3xl">
            Welcome to My Journey of Discovery and Growth
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg mx-auto max-w-2xl">
            A marketing professional passionate about exploring the world,
            embracing technology, enhancing personal growth, and nurturing
            wellness.
          </p>

          <button className="uppercase font-serif tracking-[0.2em] text-white py-3 px-8 font-medium mt-8 bg-[#8a795d] hover:bg-[#856d4d] transition duration-300">
            Get Inspired
          </button>
        </div>
        {/* My Network Section */}
        <div className="p-6 sm:p-8">
          {/* Images */}
          <div className="grid md:grid-cols-3 sm:grid-cols-1 sm:flex-row justify-center items-center gap-5">
            <img
              src="./img/hero-img-01.jpg"
              alt=""
              className=" sm:w-[300px] md:w-[350px] lg:w-[400px] h-64 sm:h-80 object-cover rounded-md"
            />
            <img
              src="./img/hero-img-02.jpg"
              alt=""
              className=" sm:w-[300px] md:w-[380px] lg:w-[400px] h-72 sm:h-96 object-cover rounded-md"
            />
            <img
              src="./img/hero-img-03.jpg"
              alt=""
              className=" sm:w-[300px] md:w-[350px] lg:w-[400px] h-64 sm:h-80 object-cover rounded-md"
            />
          </div>

          {/* Networks section */}
          <div className="mt-10">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center lg:text-left leading-[50px] max-w-md">
                Over 30K people in my{" "}
                <span className="text-[#8a795d]">Network</span>
              </h1>

              <div className="flex flex-wrap justify-center gap-10  mt-16">
                {/* Instagram */}
                <div className="flex flex-col items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="50"
                    height="50"
                    className="fill-[#8a795d]"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                  <span className="font-medium font-serif text-xl mt-2">
                    12K+
                  </span>
                </div>

                {/* Eye */}
                <div className="flex flex-col items-center">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 640 512"
                    width="50"
                    height="50"
                    className="fill-[#8a795d]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path>
                  </svg>
                  <span className="font-medium font-serif text-xl mt-2">
                    08K+
                  </span>
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col items-center">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 448 512"
                    width="50"
                    height="50"
                    className="fill-[#8a795d]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                  <span className="font-medium font-serif text-xl mt-2">
                    13K+
                  </span>
                </div>

                {/* Pinterest */}
                <div className="flex flex-col items-center">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 384 512"
                    width="50"
                    height="50"
                    className="fill-[#8a795d]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>
                  </svg>
                  <span className="font-medium font-serif text-xl mt-2">
                    09K+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* My Featured Blog Section */}
        <div>
          <h1 className="text-5xl font-serif text-center mt-32 mb-8">
            My Featured <span className="text-[#8a795d]">Blogs</span>
          </h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 p-10">
            {/* Card 1 */}
            <div className=" border border-[#856d4d] ">
              <img src="./img/post-free-01.jpg" alt="" />
              <div className="text-center">
                <h1 className="font-semibold font-serif mt-8 ml-8 mr-8">
                  The Future of Wearable Tech: Innovations Shaping Our Lives
                </h1>
                <p className="text-[#8a795d] font-semibold font-serif mt-8 mb-8 ml-8 mr-8">
                  READ ME
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className=" border border-[#856d4d] ">
              <img src="./img/post-free-02.jpg" alt="" />
              <div className="text-center">
                <h1 className="font-semibold font-serif mt-8 ml-8 mr-8">
                  Unplugged Adventures: How Digital Detoxing Transformed My
                  Travels
                </h1>
                <p className="text-[#8a795d] font-semibold font-serif mt-8 mb-8 ml-8 mr-8">
                  READ ME
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className=" border border-[#856d4d] ">
              <img src="./img/post-free-03.jpg" alt="" />
              <div className="text-center">
                <h1 className="font-semibold font-serif mt-8 ml-8 mr-8">
                  From Burnout to Balance: My Journey to Wellness and
                  Productivity
                </h1>
                <p className="text-[#8a795d] font-semibold font-serif mt-8 mb-8 ml-8 mr-8">
                  READ ME
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Explore My Passion Section */}
        <div className=" bg-[#d1bea8]">
          <div>
            <img src="./img/shapes-bg-01.png" alt="" />
            <h1 className="text-5xl font-serif text-center lg:-mt-96">
              Explore My{" "}
              <span className="text-[#8a795d] font-serif">Passion</span>
            </h1>
            {/* Cards */}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-10 mt-20 gap-10">
              {/* Card 1 */}
              <div className="">
                <div className="bg-[#e3dac9] text-center p-6 font-serif relative ">
                  {/* Circle Icon */}
                  <div className="w-28 h-28 mx-auto bg-[#e3dac9] -mt-20 rounded-full border border-[#8a795d] flex items-center justify-center">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 640 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-[#8a795d] w-20 h-20 bg-[#a99a86] rounded-full p-4"
                    >
                      <path d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z"></path>
                    </svg>
                  </div>

                  {/* Text Section */}
                  <div className="mt-5">
                    {" "}
                    {/* Added margin-top to move text down */}
                    <h1 className="font-medium text-2xl">Marketing</h1>
                    <p>
                      Elevate your skills with expert strategies and industry
                      secrets.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#e3dac9] text-center p-6 font-serif relative ">
                {/* Circle Icon */}
                <div className="w-28 h-28 mx-auto bg-[#e3dac9] -mt-20 rounded-full border border-[#8a795d] flex items-center justify-center">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-[#8a795d] w-20 h-20 bg-[#a99a86] rounded-full p-4"
                  >
                    <path d="m13.002 25.301c-.029-.721.25-1.429.764-1.942l.526-.527c.487-.486 1.156-.765 1.838-.765.281 0 .557.046.822.136l.432.147.863-.935-2.206-1.883c-.534-.457-.855-1.123-.883-1.828-.028-.719.251-1.425.764-1.937l.589-.589c.599-.6 1.423-.943 2.261-.943.496 0 .989.12 1.426.348l2.949 1.536 1.091-1.176c.742-.803 1.681-1.378 2.699-1.686-.624-6.32-5.953-11.257-12.437-11.257-6.904 0-12.5 5.596-12.5 12.5 0 6.644 5.187 12.062 11.731 12.461-.434-.444-.703-1.031-.729-1.66zm-2.608-4.908-.565 1.978c-.127.444-.351.838-.635 1.179-2.505-1.472-4.349-3.946-4.966-6.878.108-.027.212-.065.324-.081l2.247-.321c1.016-.145 2.041.197 2.767.922.837.837 1.155 2.063.83 3.201zm1.965-9.851c-.214.857-.984 1.458-1.868 1.458-1.915 0-3.751-.769-5.094-2.135-.072-.073-.126-.161-.195-.237 1.756-3.344 5.258-5.629 9.297-5.629 1.938 0 3.748.534 5.306 1.45.047 1.432-.493 2.83-1.517 3.853-.545.545-1.361.712-2.076.426l-1.271-.508c-1.083-.433-2.3.189-2.583 1.321z"></path>
                    <path d="m27.818 27.665.59-.59c.366-.366.462-.914.236-1.348l-2.241-4.302 2.293-2.129c.939-.868 1.418-2.118 1.28-3.341-.057-.503-.429-.876-.932-.932-1.223-.138-2.473.341-3.341 1.28l-2.129 2.293-4.302-2.241c-.434-.226-.982-.13-1.348.236l-.59.59c-.24.24-.238.621.005.829l3.787 3.234-3.156 3.42-1.663-.568c-.205-.07-.439-.012-.6.149l-.529.529c-.241.241-.238.623.006.83l1.634 1.387c.429.364.827.762 1.191 1.191l1.387 1.634c.207.244.589.247.83.006l.529-.529c.161-.161.219-.395.149-.6l-.568-1.663 3.42-3.156 3.234 3.787c.207.243.589.245.829.005z"></path>
                  </svg>
                </div>

                {/* Text Section */}
                <div className="mt-5">
                  {" "}
                  {/* Added margin-top to move text down */}
                  <h1 className="font-medium text-2xl">Travel</h1>
                  <p>
                    Uncover hidden gems and travel tips for your next adventure.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-[#e3dac9] text-center p-6 font-serif relative">
                {/* Circle Icon */}
                <div className="w-28 h-28 mx-auto bg-[#e3dac9] -mt-20 rounded-full border border-[#8a795d] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 53 53"
                    className="fill-[#8a795d] w-20 h-20 bg-[#a99a86] rounded-full p-4"
                  >
                    <path d="M21.57 19.21c1.41.94 3.1 1.49 4.92 1.49 1.83 0 3.53-.55 4.94-1.49 2.43-1.6 4.04-4.36 4.04-7.49 0-4.95-4.02-8.97-8.98-8.97-4.94 0-8.96 4.02-8.96 8.97 0 3.13 1.61 5.89 4.04 7.49zM33.44 19.55c-.37.33-.77.63-1.19.91-1.7 1.14-3.69 1.74-5.76 1.74-2.05 0-4.04-.6-5.75-1.74-.42-.28-.82-.58-1.18-.91-3.77 1.06-6.57 4.46-6.72 8.53h27.32c-.15-4.07-2.95-7.47-6.72-8.53zM44.97 48.75h-1.79l1.76-16.1a2.98 2.98 0 0 0-.69-2.15 2.88 2.88 0 0 0-2.06-.92H10.83a2.88 2.88 0 0 0-2.06.92 2.98 2.98 0 0 0-.69 2.15l1.76 16.1H8.04a.75.75 0 1 0 0 1.5h37.92a.75.75 0 1 0 0-1.5zM26.5 34.58a5.34 5.34 0 1 1 0 10.67 5.34 5.34 0 0 1 0-10.67z" />
                  </svg>
                </div>

                {/* Text Section */}
                <div className="mt-5">
                  {" "}
                  {/* Added margin-top to move text down */}
                  <h1 className="font-medium text-2xl">Technology</h1>
                  <p>Stay ahead with the latest tech trends and insights.</p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-[#e3dac9] text-center p-6 font-serif relative">
                {/* Circle Icon */}
                {/* Circle Icon */}
                <div className="w-28 h-28 mx-auto bg-[#e3dac9] -mt-20 rounded-full border border-[#8a795d] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="fill-[#8a795d] w-20 h-20 bg-[#a99a86] rounded-full p-4"
                  >
                    <path d="M91 345v14.14l14.12.83c65.286 3.857 118.725-36.812 150.88-94.11 31.822 56.704 85.074 97.976 150.88 94.11l14.12-.83v-14.14c0-92.22-43.04-123.13-77.62-147.97-8.74-6.27-16.71-12.01-23.33-18.25-18.44 20.29-40.58 31.22-64.05 31.22-23.45 0-45.58-10.93-64.02-31.24-6.63 6.25-14.61 11.99-23.36 18.27-34.58 24.84-77.62 55.75-77.62 147.97z" />
                    <path d="M256 180c44.026 0 75-65.503 75-105 0-41.355-33.645-75-75-75s-75 33.645-75 75c0 39.538 31.089 105 75 105z" />
                    <path d="M482 255c0 29.568-5.643 58.303-16.771 85.404l27.752 11.395c12.621-30.735 19.019-63.303 19.019-96.799 0-92.679-50.402-178.192-131.537-223.169l-14.545 26.238c71.602 39.692 116.082 115.152 116.082 196.931z" />
                    <path d="M46.771 340.404c-11.128-27.101-16.771-55.836-16.771-85.404 0-81.779 44.48-157.239 116.082-196.931l-14.545-26.238C50.402 76.808 0 162.321 0 255c0 33.496 6.399 66.064 19.019 96.799z" />
                    <path d="M482.984 394.177c-2.739.334-134.662-30.993-226.972 78.451-93.014-110.7-223.215-77.99-226.996-78.451.106.23 2.787 52.558 40.217 87.823H0v30h512v-30h-70.049c39.11-35.267 39.131-80.868 41.033-87.823z" />
                    <path d="M256 317.61c-22.62 26.687-44.449 46.271-77.08 59.63-.32.64-.65 1.27-.99 1.9 26.312 10.313 54.017 27.423 78.15 49.99 24.264-22.519 52.675-39.794 78.2-49.58-.4-.76-.81-1.53-1.2-2.31-32.435-13.279-54.347-32.767-77.08-59.63z" />
                  </svg>
                </div>

                {/* Text Section */}
                <div className="mt-5">
                  {" "}
                  {/* Added margin-top to move text down */}
                  <h1 className="font-medium text-2xl">Wellness</h1>
                  <p>Embrace health and balance in your everyday life.</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="mb-32 uppercase font-serif tracking-[0.2em] text-white py-3 px-8 font-medium mt-8 bg-[#8a795d] hover:bg-[#856d4d] transition duration-300">
                View all Blogs
              </button>
            </div>
          </div>
        </div>
        {/* Latest Blogs Section */}
        <div className="mt-72">
          <div>
            <h1 className="text-5xl font-serif text-center -mt-40">
              Latest
              <span className="text-[#8a795d] font-serif"> Blogs</span>
            </h1>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 p-10">
              {/* Card 1 */}
              <div className=" border border-[#856d4d] ">
                <img src="./img/post-free-01.jpg" alt="" />
                <div className="text-center">
                  <h1 className="font-semibold font-serif mt-8 ml-8 mr-8">
                    The Future of Wearable Tech: Innovations Shaping Our Lives
                  </h1>
                  <p className="text-[#8a795d] font-semibold font-serif mt-8 mb-8 ml-8 mr-8">
                    READ ME
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className=" border border-[#856d4d] ">
                <img src="./img/post-free-02.jpg" alt="" />
                <div className="text-center">
                  <h1 className="font-semibold font-serif mt-8 ml-8 mr-8">
                    Unplugged Adventures: How Digital Detoxing Transformed My
                    Travels
                  </h1>
                  <p className="text-[#8a795d] font-semibold font-serif mt-8 mb-8 ml-8 mr-8">
                    READ ME
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className=" border border-[#856d4d] ">
                <img src="./img/post-free-03.jpg" alt="" />
                <div className="text-center">
                  <h1 className="font-semibold font-serif mt-8 ml-8 mr-8">
                    From Burnout to Balance: My Journey to Wellness and
                    Productivity
                  </h1>
                  <p className="text-[#8a795d] font-semibold font-serif mt-8 mb-8 ml-8 mr-8">
                    READ ME
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 p-10">
              {/* Card 4 */}
              <div className=" border border-[#856d4d] ">
                <img src="./img/post-free-12.jpg" alt="" />
                <div className="text-center">
                  <h1 className="font-semibold font-serif mt-8 ml-8 mr-8">
                    The Future of Wearable Tech: Innovations Shaping Our Lives
                  </h1>
                  <p className="text-[#8a795d] font-semibold font-serif mt-8 mb-8 ml-8 mr-8">
                    READ ME
                  </p>
                </div>
              </div>
              {/* Card 5 */}
              <div className=" border border-[#856d4d] ">
                <img src="./img/post-free-11.jpg" alt="" />
                <div className="text-center">
                  <h1 className="font-semibold font-serif mt-8 ml-8 mr-8">
                    Unplugged Adventures: How Digital Detoxing Transformed My
                    Travels
                  </h1>
                  <p className="text-[#8a795d] font-semibold font-serif mt-8 mb-8 ml-8 mr-8">
                    READ ME
                  </p>
                </div>
              </div>
              {/* Card 6 */}
              <div className=" border border-[#856d4d] ">
                <img src="./img/post-free-09.jpg" alt="" />
                <div className="text-center">
                  <h1 className="font-semibold font-serif mt-8 ml-8 mr-8">
                    From Burnout to Balance: My Journey to Wellness and
                    Productivity
                  </h1>
                  <p className="text-[#8a795d] font-semibold font-serif mt-8 mb-8 ml-8 mr-8">
                    READ ME
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="mb-32 uppercase font-serif tracking-[0.2em] text-white py-3 px-8 font-medium mt-8 bg-[#8a795d] hover:bg-[#856d4d] transition duration-300">
                All Blogs
              </button>
            </div>
          </div>
        </div>
        {/* What Readers Say SEction */}
        <div className="text-center px-6 py-20 sm:px-12 md:px-24 lg:px-32 xl:px-40 font-sans bg-[#d1bea8]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Solid"
            viewBox="0 0 64 64"
            width="150"
            height="150"
            className="fill-[#8a795d] mt-20 lg:ml-[450px] md:ml-[250px] ml-20"
          >
            <path d="m6.59998 19.23999c-.65998 1.65997-1.69996 3.29999-3.08997 4.88001-.44.5-.5 1.21997-.14001 1.77997.28003.44.73999.67999 1.23999.67999.14001 0 .28003-.00995.42004-.06 2.93994-.85999 9.81-3.90997 10-13.69.06995-3.76996-2.69-7.00995-6.28003-7.37995-1.98999-.20001-3.96997.44995-5.44 1.76996-1.46997 1.33002-2.31 3.23004-2.31 5.21002 0 3.29999 2.34003 6.19001 5.59998 6.81z"></path>
            <path d="m24.71002 5.45001c-1.98004-.20001-3.96002.44995-5.42999 1.76996-1.47003 1.33002-2.31006 3.23004-2.31006 5.21002 0 3.29999 2.34003 6.19 5.60004 6.81-.66003 1.65997-1.70001 3.29999-3.09003 4.88-.44.5-.5 1.21997-.13995 1.77997.27997.44.73999.67999 1.23999.67999.13995 0 .27997-.00995.41998-.06 2.94-.85999 9.81-3.90997 10-13.69v-.13995c0-3.71002-2.72998-6.86999-6.28998-7.23999z"></path>
          </svg>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mx-auto max-w-3xl -mt-8">
            What Readers <span className="text-[#8a795d]">Say</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-sm mx-auto max-w-2xl">
            "Sophia's blog is a treasure trove of inspiration and insight. Her
            travel stories transport you to new worlds, while her tech tips and
            wellness advice have genuinely improved my daily routine. I always
            look forward to her latest posts. It's like getting a dose of
            motivation straight to my inbox!"
          </p>

          <p className=" font-serif py-3 px-8 font-medium mt-4 ">
            Emily Thompson
          </p>
        </div>
        {/* About Section */}
        <div className="mt-32">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div>
              <img src="./img/who-am-img.jpg" alt="" />
            </div>

            <div className="bg-[#d1bea8] p-10">
              {/* Right side Text section */}
              <h1 className="text-5xl text-[#8a795d] font-bold font-serif mt-10">
                hi!
              </h1>
              <p className="mt-4">
                I’m Sophia Ellis—a marketing professional passionate about
                exploring the world, embracing technology, enhancing personal
                growth, and nurturing wellness. Here, I share my adventures,
                insights, and tips to inspire and empower you. Whether you’re
                seeking travel inspiration, tech updates, self-improvement
                strategies, or wellness advice, you’re in the right place.
              </p>
              <p className="mt-4">
                Technology is another realm I’m deeply fascinated by. I enjoy
                diving into the latest innovations and understanding how they
                shape our lives and industries. Through my writing, I aim to
                demystify tech trends and provide practical insights that can
                enhance your daily life and career.
              </p>
              <p className="mt-4">
                This blog is more than just a collection of thoughts—it’s a
                community. Whether you’re here for travel tips, tech knowledge,
                or wellness advice, you’ll find a space that welcomes curiosity
                and encourages growth.
              </p>
              <p className="uppercase text-[#8a795d] font-sans font-medium mt-8">
                More about me
              </p>
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

export default Home;
