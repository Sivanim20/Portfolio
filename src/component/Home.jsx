import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center  bg-gradient-to-r from-black via-[#230825] to-black text-center px-6"
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">M Sivani</span>
      </h1>

      {/* Subtitle / About */}
      <p className="text-gray-300 max-w-2xl mb-8 leading-relaxed">
        I'm M Sivani — a Computer Science enthusiast passionate about 
        creating innovative web applications, solving real-world problems 
        with technology, and continuously exploring new tools in the world 
        of software development.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-gradient-to-r from-cyan-600 to-purple-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-600 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-purple-500 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent px-6 py-3 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;
