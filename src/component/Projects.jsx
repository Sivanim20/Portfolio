import React from "react";
import { motion } from "framer-motion";

const projects = [
   {
    title: "Certimate",
    desc: "A web app that allows users to customize templates, add text, upload images, and generate personalized certificates or documents in image/PDF format.",
    tech: ["HTML5", "CSS3", "JavaScript", "Python", "Flask", "ReportLab", "jspdf", "PIL (Pillow)", "Werkzeug", "xlsx","Firebase"],
    link: "https://nandanajm2003.github.io/certimate/",
  },
  {
    title: "Task Manager",
    desc: "A productivity web app built with React that allows users to add, delete, and organize tasks efficiently.",
    tech: ["Html", "CSS", "Javascript"],
    link: "https://sivanim20.github.io/task-management-website/",
  },
  // {
  //   title: "Portfolio Website",
  //   desc: "Personal portfolio website built with Vite + React + TailwindCSS, showcasing projects and skills.",
  //   tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
  //   link: "#",
  // },
  {
    title: "estate-ginistack",
    desc: "Real estate website built with React, featuring property listings, images, and responsive design.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    link: "https://sivanim20.github.io/estate-ginistack/",
  },
 
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-black via-[#301934] to-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-left mb-12 text-white">
          Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-purple-950/10 to-cyan-900/10 border border-cyan-900 rounded-2xl p-6 shadow-lg hover:shadow-purple-400/30 transition"
            >
              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-white mb-3">
                {p.title}
              </h3>

              {/*Description */}
              <p className="text-gray-300 mb-4">{p.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-900/30 text-cyan-400 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline font-medium"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
