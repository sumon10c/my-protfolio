import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaServer,
  FaCode,
  FaTimes,
  FaRocket,
  FaExclamationTriangle,
} from "react-icons/fa";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null); // Modal এর জন্য

  const projects = [
    {
      title: "LoanLink",
      subtitle: "Microloan Tracker",
      description:
        "A full-stack Microloan approval platform featuring real-time tracking, secure user authentication, and a financial dashboard.",
      image: "https://i.ibb.co.com/q3mjrzRT/Screenshot-2026-03-05-131355.png",
      tech: ["React", "Firebase", "Express", "Node.js", "MongoDB"],
      live: "https://loan-link-4d8e2.web.app/",
      githubClient: "https://github.com/sumon10c/Microloan-client-site.git",
      githubServer: "https://github.com/sumon10c/Loan-link-server.git",
      challenges:
        "Implementing real-time loan status updates while maintaining high security for financial data was the biggest hurdle.",
      improvements:
        "Plan to integrate an automated credit scoring system using AI and a mobile app version for easier access.",
    },
    {
      title: "KrishiLink",
      subtitle: "MERN E-Commerce",
      description:
        "A comprehensive agricultural marketplace with payment integration, advanced admin dashboard, and secure authentication.",
      image: "https://i.ibb.co.com/Z6Q81Tmr/Screenshot-2026-03-05-131853.png",
      tech: ["MongoDB", "Express", "React", "Node.js", "Firebase"],
      live: "https://krishilink-baae3.web.app/",
      githubClient: "https://github.com/sumon10c/KrishiLink-client-site.git",
      githubServer: "https://github.com/sumon10c/KrishiLink-server-site.git",
      challenges:
        "Managing inventory for multi-vendor farmers and integrating a reliable payment gateway with low latency.",
      improvements:
        "Adding a weather-based crop suggestion feature for farmers and a multi-language support system.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-base-100 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black mb-3 tracking-tight">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-base-200 rounded-3xl overflow-hidden border border-base-300 shadow-lg flex flex-col w-full max-w-[340px] h-[480px]"
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-secondary uppercase">
                  {project.title}
                </h3>
                <span className="text-[10px] font-semibold text-primary/80 uppercase mb-3 tracking-widest">
                  {project.subtitle}
                </span>
                <p className="text-xs opacity-75 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-base-300/50">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[9px] font-medium bg-base-300 text-secondary rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[9px] opacity-50">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-primary btn-sm rounded-xl w-full font-bold"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-base-100 max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative p-6 md:p-10 text-base-content"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-2xl hover:text-primary transition-colors"
              >
                <FaTimes />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-2xl mb-6 shadow-md"
              />

              <h3 className="text-3xl font-black mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-primary font-bold mb-6 italic">
                {selectedProject.subtitle}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col gap-4">
                  <h4 className="font-bold flex items-center gap-2 border-b border-base-300 pb-2">
                    <FaCode className="text-primary" /> Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="badge badge-outline badge-primary font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="font-bold flex items-center gap-2 border-b border-base-300 pb-2">
                    <FaExternalLinkAlt className="text-primary" /> Links
                  </h4>
                  <div className="flex flex-col gap-2">
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      className="btn btn-xs btn-primary rounded-lg text-white"
                    >
                      Live Preview
                    </a>
                    <div className="flex gap-2">
                      <a
                        href={selectedProject.githubClient}
                        target="_blank"
                        className="btn btn-xs btn-neutral flex-1 rounded-lg"
                      >
                        Client Code
                      </a>
                      <a
                        href={selectedProject.githubServer}
                        target="_blank"
                        className="btn btn-xs btn-neutral flex-1 rounded-lg"
                      >
                        Server Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <FaExclamationTriangle className="text-warning" /> Key
                    Challenges
                  </h4>
                  <p className="text-sm opacity-80 leading-relaxed bg-base-200 p-4 rounded-xl">
                    {selectedProject.challenges}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <FaRocket className="text-success" /> Future Improvements
                  </h4>
                  <p className="text-sm opacity-80 leading-relaxed bg-base-200 p-4 rounded-xl">
                    {selectedProject.improvements}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
