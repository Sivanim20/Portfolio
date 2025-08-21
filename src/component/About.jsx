import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-gray-200 py-16 px-6"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-50 mb-12">
        About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
      </h2>

      {/* Intro */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-800/20 to-purple-950/25 rounded-xl p-6 md:p-10 shadow-lg">
        <p className="text-lg leading-relaxed text-gray-300 mb-8">
          I'm a passionate Computer Science Engineering student dedicated to
          building user-friendly and responsive web applications. With a strong
          interest in problem-solving and software development, I enjoy learning
          new technologies and applying them to create impactful projects.
        </p>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-8">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold text-cyan-300/70 mb-4">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Tailwind CSS",
                "Python"
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

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold text-cyan-300/70 mb-4">
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express.js",
                "MongoDB",
                "SQL"
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
      </div>
    </section>
  );
};

export default About;
