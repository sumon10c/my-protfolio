import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaCode,
  FaTimes,
  FaRocket,
  FaExclamationTriangle,
  FaGithub,
  FaArrowRight,
  FaCheckCircle,
  FaLayerGroup,
} from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "01",
      title: "LoanLink",
      subtitle: "Microloan Tracker",
      description:
        "A full-stack microloan approval platform featuring secure authentication, loan management, real-time tracking, and a clean financial dashboard.",
      image: "https://i.ibb.co.com/GSWSg9C/112shots-so.png",
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
      id: "02",
      title: "KrishiLink",
      subtitle: "MERN E-Commerce",
      description:
        "A comprehensive agricultural marketplace connecting farmers and customers through a modern marketplace experience with secure authentication and scalable architecture.",
      image: "https://i.ibb.co.com/B54Wn2tp/182-1x-shots-so.png",
      tech: ["MongoDB", "Express", "React", "Node.js", "Firebase"],
      live: "https://krishilink-baae3.web.app/",
      githubClient: "https://github.com/sumon10c/KrishiLink-client-site.git",
      githubServer: "https://github.com/sumon10c/KrishiLink-server-site.git",
      challenges:
        "Managing inventory for multi-vendor farmers and integrating a reliable payment gateway with low latency.",
      improvements:
        "Adding a weather-based crop suggestion feature for farmers and a multi-language support system.",
    },

    {
      id: "03",
      title: "GameStore",
      subtitle: "Next.js Gaming Marketplace",
      description:
        "A high-performance gaming platform where users can explore trending titles, watch trailers, and discover the latest games through an immersive UI/UX.",
      image:
        "https://i.ibb.co.com/RpQ1JVpn/525-1x-shots-so.png",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "NextAuth.js",
        "MongoDB",
        "Framer Motion",
      ],
      live: "https://game-store-beta-eight.vercel.app/",
      githubClient: "https://github.com/sumon10c/game-store",
      githubServer: "https://github.com/sumon10c/game-store",
      challenges:
        "Implementing dynamic routing for game details and managing state for a smooth, immersive user experience across all devices.",
      improvements:
        "Integrating a community review system and a real-time Game News API to keep users updated on latest releases.",
    },
  ];

  /* ==========================================================
     ESC KEY → CLOSE MODAL
  ========================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* ==========================================================
     ANIMATIONS
  ========================================================== */

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-base-100
        px-4
        py-24
        sm:px-6
        md:px-10
        lg:px-16
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            top-20
            h-[400px]
            w-[400px]
            rounded-full
            bg-primary/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-secondary/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)]
            [background-size:50px_50px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-16 text-center"
        >
          {/* Small Label */}

          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-primary/20
              bg-primary/5
              px-4
              py-2
              text-xs
              font-black
              uppercase
              tracking-widest
              text-primary
            "
          >
            <FaLayerGroup size={12} />
            My Recent Work
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              sm:text-5xl
              md:text-6xl
            "
          >
            Featured{" "}
            <span
              className="
                bg-gradient-to-r
                from-primary
                via-purple-500
                to-secondary
                bg-clip-text
                text-transparent
              "
            >
              Projects
            </span>
          </h2>

          {/* Divider */}

          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-primary" />
            <span className="h-1 w-16 rounded-full bg-primary/30" />
            <span className="h-1 w-8 rounded-full bg-secondary" />
          </div>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-base-content/60
              sm:text-lg
            "
          >
            A selection of projects where I combine clean design, modern
            technologies, and practical problem-solving to create meaningful
            digital experiences.
          </p>
        </motion.div>

        {/* ===================================================
            PROJECT GRID
        =================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            grid
            grid-cols-1
            gap-7
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                flex
                min-h-[570px]
                flex-col
                overflow-hidden
                rounded-[2rem]
                border
                border-base-content/10
                bg-base-200/70
                shadow-lg
                backdrop-blur-md
                transition-all
                duration-500
                hover:border-primary/30
                hover:shadow-2xl
                hover:shadow-primary/10
              "
            >
              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="relative h-56 overflow-hidden sm:h-60">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Gradient */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/10
                    to-transparent
                  "
                />

                {/* Project Number */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/20
                    bg-black/30
                    text-xs
                    font-black
                    text-white
                    backdrop-blur-md
                  "
                >
                  {project.id}
                </div>

                {/* Live Badge */}

                <div
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-black/30
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-white
                    backdrop-blur-md
                  "
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                  Live
                </div>

                {/* Bottom Image Text */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                  "
                >
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-primary-content
                    "
                  >
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* =================================================
                  CARD BODY
              ================================================= */}

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                {/* Title */}

                <div className="mb-4">
                  <h3
                    className="
                      text-2xl
                      font-black
                      transition-colors
                      duration-300
                      group-hover:text-primary
                    "
                  >
                    {project.title}
                  </h3>

                  <div
                    className="
                      mt-2
                      h-1
                      w-8
                      rounded-full
                      bg-gradient-to-r
                      from-primary
                      to-secondary
                      transition-all
                      duration-300
                      group-hover:w-16
                    "
                  />
                </div>

                {/* Description */}

                <p
                  className="
                    line-clamp-4
                    text-sm
                    leading-7
                    text-base-content/55
                  "
                >
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="mt-6">
                  <div className="mb-3 flex items-center gap-2">
                    <FaCode size={11} className="text-primary" />

                    <span
                      className="
                        text-[10px]
                        font-black
                        uppercase
                        tracking-widest
                        text-base-content/40
                      "
                    >
                      Tech Stack
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-lg
                          border
                          border-base-content/10
                          bg-base-100
                          px-2.5
                          py-1.5
                          text-[10px]
                          font-bold
                          text-base-content/60
                          shadow-sm
                          transition-all
                          duration-300
                          hover:border-primary/20
                          hover:text-primary
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Buttons */}

                <div className="mt-auto pt-7">
                  <div className="mb-4 h-px bg-base-content/10" />

                  <div className="flex items-center gap-3">
                    {/* Details */}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="
                        group/button
                        flex
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-primary
                        px-4
                        py-3
                        text-sm
                        font-bold
                        text-white
                        shadow-lg
                        shadow-primary/20
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-xl
                      "
                    >
                      View Details
                      <FaArrowRight
                        size={11}
                        className="
                          transition-transform
                          duration-300
                          group-hover/button:translate-x-1
                        "
                      />
                    </button>

                    {/* Live */}

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live website`}
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-base-content/10
                        bg-base-100
                        text-base-content/60
                        transition-all
                        duration-300
                        hover:border-primary/30
                        hover:bg-primary/10
                        hover:text-primary
                      "
                    >
                      <FaExternalLinkAlt size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-16 text-center"
        >
          <div
            className="
              mx-auto
              max-w-3xl
              rounded-3xl
              border
              border-primary/10
              bg-gradient-to-r
              from-primary/5
              via-base-200/60
              to-secondary/5
              p-8
              shadow-lg
              backdrop-blur-md
              sm:p-10
            "
          >
            <FaRocket className="mx-auto mb-4 text-primary" size={24} />

            <h3
              className="
                text-2xl
                font-black
                sm:text-3xl
              "
            >
              Have an idea in mind?
            </h3>

            <p
              className="
                mx-auto
                mt-3
                max-w-xl
                text-sm
                leading-7
                text-base-content/55
              "
            >
              I'm always interested in working on challenging projects and
              turning creative ideas into functional digital products.
            </p>

            <a
              href="#contact"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-primary
                to-secondary
                px-6
                py-3
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-primary/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Let's Work Together
              <FaArrowRight size={12} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          PROJECT MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelectedProject(null)}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              overflow-y-auto
              bg-black/70
              p-4
              backdrop-blur-md
              sm:p-6
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                my-8
                max-h-[92vh]
                w-full
                max-w-4xl
                overflow-y-auto
                rounded-[2rem]
                border
                border-base-content/10
                bg-base-100
                shadow-2xl
              "
            >
              {/* Close Button */}

              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/50
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:rotate-90
                  hover:bg-primary
                "
              >
                <FaTimes size={15} />
              </button>

              {/* Modal Image */}

              <div className="relative h-56 overflow-hidden sm:h-80">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} project`}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                    sm:left-8
                    sm:right-8
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-primary
                    "
                  >
                    {selectedProject.subtitle}
                  </span>

                  <h3
                    className="
                      mt-2
                      text-3xl
                      font-black
                      text-white
                      sm:text-4xl
                    "
                  >
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}

              <div className="p-6 sm:p-8 lg:p-10">
                {/* Tech + Links */}

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-8
                    lg:grid-cols-2
                  "
                >
                  {/* Tech Stack */}

                  <div>
                    <div className="mb-4 flex items-center gap-2">
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-xl
                          bg-primary/10
                          text-primary
                        "
                      >
                        <FaCode size={14} />
                      </div>

                      <h4 className="font-black">Technology Stack</h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-xl
                            border
                            border-primary/10
                            bg-primary/5
                            px-3
                            py-2
                            text-xs
                            font-bold
                            text-primary
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}

                  <div>
                    <div className="mb-4 flex items-center gap-2">
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-xl
                          bg-secondary/10
                          text-secondary
                        "
                      >
                        <FaExternalLinkAlt size={13} />
                      </div>

                      <h4 className="font-black">Project Links</h4>
                    </div>

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          bg-primary
                          px-4
                          py-3
                          text-xs
                          font-bold
                          text-white
                          transition-all
                          hover:-translate-y-0.5
                        "
                      >
                        <FaExternalLinkAlt size={11} />
                        Live
                      </a>

                      <a
                        href={selectedProject.githubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          border
                          border-base-content/10
                          bg-base-200
                          px-4
                          py-3
                          text-xs
                          font-bold
                          transition-all
                          hover:border-primary/20
                          hover:text-primary
                        "
                      >
                        <FaGithub size={13} />
                        Client
                      </a>

                      <a
                        href={selectedProject.githubServer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          border
                          border-base-content/10
                          bg-base-200
                          px-4
                          py-3
                          text-xs
                          font-bold
                          transition-all
                          hover:border-primary/20
                          hover:text-primary
                        "
                      >
                        <FaGithub size={13} />
                        Server
                      </a>
                    </div>
                  </div>
                </div>

                {/* Description */}

                <div className="mt-10">
                  <h4 className="mb-3 text-xl font-black">
                    About This Project
                  </h4>

                  <p
                    className="
                      text-sm
                      leading-7
                      text-base-content/60
                      sm:text-base
                    "
                  >
                    {selectedProject.description}
                  </p>
                </div>

                {/* Challenges + Improvements */}

                <div
                  className="
                    mt-8
                    grid
                    grid-cols-1
                    gap-5
                    md:grid-cols-2
                  "
                >
                  {/* Challenge */}

                  <div
                    className="
                      rounded-2xl
                      border
                      border-warning/10
                      bg-warning/5
                      p-5
                    "
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-xl
                          bg-warning/10
                          text-warning
                        "
                      >
                        <FaExclamationTriangle size={14} />
                      </div>

                      <h4 className="font-black">Key Challenge</h4>
                    </div>

                    <p
                      className="
                        text-sm
                        leading-7
                        text-base-content/60
                      "
                    >
                      {selectedProject.challenges}
                    </p>
                  </div>

                  {/* Future */}

                  <div
                    className="
                      rounded-2xl
                      border
                      border-success/10
                      bg-success/5
                      p-5
                    "
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-xl
                          bg-success/10
                          text-success
                        "
                      >
                        <FaRocket size={14} />
                      </div>

                      <h4 className="font-black">Future Improvements</h4>
                    </div>

                    <p
                      className="
                        text-sm
                        leading-7
                        text-base-content/60
                      "
                    >
                      {selectedProject.improvements}
                    </p>
                  </div>
                </div>

                {/* Bottom */}

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-bold
                    text-success
                  "
                >
                  <FaCheckCircle />
                  Project completed with modern development practices.
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
