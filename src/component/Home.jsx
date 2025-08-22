import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black via-[#301934] to-black text-center px-6"
    >
      {/* Social Media Bar */}
      <div
        className="
          absolute 
          bottom-28 left-1/2 md:left-12 md:bottom-0
          -translate-x-1/2 md:translate-x-0 
          md:-translate-y-1/2 
          flex md:flex-col gap-6 text-3xl text-gray-400
        "
      >
        <a
          href="https://github.com/Sivanim20"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/m-sivani-9308b222a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/_sivani_.m_?utm_source=ig_web_button_share_sheet&igsh=a3Yyem9icHdtNThj"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sivanimanju2003@gmail.com"
          className="hover:text-cyan-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          M Sivani
        </span>
      </h1>

      {/* Subtitle */}
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
          href="#about"
          className="border border-purple-500 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent px-6 py-3 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition"
        >
          About Me
        </a>
      </div>
    </section>
  );
};

export default Home;
