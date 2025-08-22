import React from "react";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-r from-black via-[#301934] to-black text-gray-200 py-16 px-6"
    >
      {/* Heading */}
      <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-50 mb-12">
        About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
      </h2>

      {/* Intro */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-800/30 to-purple-950/35 rounded-xl p-6 md:p-10 shadow-lg">
        <p className="text-lg leading-relaxed text-gray-300 mb-8">
          I'm a passionate Computer Science Engineering graduate dedicated to
          building user-friendly and responsive web applications. With a strong
          interest in problem-solving and software development, I enjoy learning
          new technologies and applying them to create impactful projects.
        </p>

        {/* Skills Section */}
        <h3 className="text-2xl font-semibold text-blue-300 mb-4 pl-2">
              Skills
            </h3>
        <div className="grid md:grid-cols-2 gap-10 mb-8">
          <div className="border-[1px] border-cyan-600/20 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-cyan-300/70 mb-4">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Javascript",
                "Python",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-cyan-700/40 to-purple-800/45 text-white rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="border-[1px] border-cyan-600/20 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-cyan-300/70 mb-4">
              Libraries & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "Express.js",
                "Node.js",
                "Tailwind CSS",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-cyan-700/40 to-purple-800/45 text-white rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="border-[1px] border-cyan-600/20 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-cyan-300/70 mb-4">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Git & GitHub",
                "VSCode",
                "Postman",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-cyan-700/40 to-purple-800/45 text-white rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="border-[1px] border-cyan-600/20 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-cyan-300/70 mb-4">
              Databases
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "MongoDB",
                "SQL",
                "Firebase",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-cyan-700/60 to-purple-800/65 text-white rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-300 mb-2">
            Education
          </h3>
          <p className="text-gray-300">
            <span className="font-bold">B.Tech Computer Science Engineering</span> – LBS Institute of Technology for Women, Poojappura <br />
            <span className="text-sm text-gray-400">(2021 - 2025)</span>
          </p>
        </div>
        <div className="flex mt-10">
        <a
          href="https://drive.google.com/file/d/136G5qGw7VsocJQSuWEllbj7sxDH0nam1/view?usp=sharing"
          download
          className="flex gap-2 bg-gradient-to-r from-cyan-600 to-purple-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-600 transition"
        >
          <FaDownload /> Download CV
        </a>
      </div>
      </div>
    </section>
  );
};

export default About;
