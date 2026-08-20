import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

const Hero = () => {
  // ================= ANIMATIONS =================

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const textVariants = {
    hidden: {
      x: -60,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      x: 70,
      opacity: 0,
      scale: 0.96,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/sumon10c",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/sumon-chakrabarty-sc/",
      label: "LinkedIn",
    },
    {
      icon: FaFacebook,
      link: "https://facebook.com/yourusername",
      label: "Facebook",
    },
  ];

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-base-200
        px-4
        py-20
        sm:px-6
        md:px-10
        lg:px-12
        xl:px-16
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Right Glow */}
        <div
          className="
            absolute
            -right-40
            -top-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-primary/15
            blur-3xl
          "
        />

        {/* Bottom Left Glow */}
        <div
          className="
            absolute
            -bottom-40
            -left-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-secondary/10
            blur-3xl
          "
        />

        {/* Center Glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/5
            blur-3xl
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)]
            [background-size:50px_50px]
          "
        />

        {/* Floating Dot 1 */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[7%]
            top-[22%]
            hidden
            h-4
            w-4
            rounded-full
            bg-primary/40
            shadow-lg
            shadow-primary/30
            lg:block
          "
        />

        {/* Floating Dot 2 */}
        <motion.div
          animate={{
            y: [0, 18, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[8%]
            top-[28%]
            hidden
            h-3
            w-3
            rounded-full
            bg-secondary/50
            shadow-lg
            shadow-secondary/30
            lg:block
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-10rem)]
          max-w-7xl
          items-center
        "
      >
        <div
          className="
            grid
            w-full
            min-w-0
            items-center
            gap-14
            lg:grid-cols-2
            lg:gap-10
            xl:gap-14
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={containerVariants}
            className="
              order-2
              min-w-0
              text-center
              lg:order-1
              lg:text-left
            "
          >
            {/* ================= AVAILABLE BADGE ================= */}

            <motion.div variants={textVariants}>
             
            </motion.div>

            {/* ================= GREETING ================= */}

            <motion.p
              variants={textVariants}
              className="
                mb-3
                text-lg
                font-bold
                text-primary
                sm:text-xl
              "
            >
              Hello, I'm
            </motion.p>

            {/* =================================================
                NAME
                FIXED RESPONSIVE SIZE
            ================================================= */}

            <motion.h1
              variants={textVariants}
              className="
                min-w-0
                font-black
                leading-[0.95]
                tracking-[-0.045em]
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-6xl
                xl:text-7xl
                2xl:text-8xl
              "
            >
              {/* First Name */}
              <span className="block whitespace-nowrap">
                Sumon
              </span>

              {/* Last Name */}
              <span
                className="
                  block
                  whitespace-nowrap
                  bg-gradient-to-r
                  from-primary
                  via-purple-500
                  to-secondary
                  bg-clip-text
                  text-transparent
                "
              >
                Chakrabarty
              </span>
            </motion.h1>

            {/* ================= ROLE ================= */}

            <motion.div
              variants={textVariants}
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-3
                lg:justify-start
              "
            >
              <span
                className="
                  h-[2px]
                  w-8
                  rounded-full
                  bg-primary
                  sm:w-10
                "
              />

              <p
                className="
                  text-lg
                  font-bold
                  text-base-content/80
                  sm:text-xl
                  md:text-2xl
                "
              >
                Full Stack Web Developer
              </p>
            </motion.div>

            {/* ================= DESCRIPTION ================= */}

            <motion.p
              variants={textVariants}
              className="
                mx-auto
                mt-6
                max-w-xl
                text-base
                leading-7
                text-base-content/65
                sm:text-lg
                sm:leading-8
                lg:mx-0
              "
            >
              I build modern, scalable, and high-performance web applications
              using{" "}
              <span className="font-bold text-primary">
                MERN Stack
              </span>{" "}
              and{" "}
              <span className="font-bold text-primary">
                Next.js
              </span>
              . I focus on creating beautiful interfaces with clean code and
              seamless user experiences.
            </motion.p>

            {/* ================= CTA BUTTONS ================= */}

            <motion.div
              variants={textVariants}
              className="
                mt-8
                flex
                flex-col
                items-center
                gap-3
                sm:flex-row
                sm:justify-center
                lg:justify-start
              "
            >
              {/* View Projects */}

              <motion.a
                href="#projects"
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-primary
                  to-secondary
                  px-7
                  py-3.5
                  font-bold
                  text-white
                  shadow-xl
                  shadow-primary/20
                  transition-all
                  duration-300
                  hover:shadow-2xl
                  hover:shadow-primary/30
                  sm:w-auto
                "
              >
                View My Projects

                <FaArrowRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.a>

              {/* Resume */}

              <motion.a
                href="https://docs.google.com/document/d/107dVeR5EFPpx-NMwN4nFsj1Hej5iK1r8Cu7HhcWkcKc/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-base-content/15
                  bg-base-100/60
                  px-7
                  py-3.5
                  font-bold
                  text-base-content
                  shadow-sm
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-primary
                  hover:text-primary
                  hover:shadow-lg
                  sm:w-auto
                "
              >
                <FaDownload size={14} />

                My Resume
              </motion.a>
            </motion.div>

            {/* ================= SOCIAL LINKS ================= */}

            <motion.div
              variants={textVariants}
              className="
                mt-8
                flex
                items-center
                justify-center
                gap-3
                lg:justify-start
              "
            >
              <span
                className="
                  mr-1
                  text-sm
                  font-medium
                  text-base-content/40
                "
              >
                Follow me
              </span>

              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{
                      y: -5,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-base-content/10
                      bg-base-100/60
                      text-base-content/60
                      shadow-sm
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:border-primary
                      hover:bg-primary
                      hover:text-white
                      hover:shadow-lg
                      hover:shadow-primary/20
                    "
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={imageVariants}
            className="
              order-1
              flex
              min-w-0
              justify-center
              lg:order-2
              lg:justify-end
            "
          >
            <div className="relative">
              {/* ================= OUTER GLOW ================= */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.25, 0.45, 0.25],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-10
                  rounded-full
                  bg-primary/30
                  blur-3xl
                "
              />

              {/* ================= OUTER RING ================= */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  -inset-4
                  rounded-full
                  border
                  border-dashed
                  border-primary/20
                  sm:-inset-5
                "
              />

              {/* ================= SECOND RING ================= */}

              <div
                className="
                  absolute
                  -inset-1
                  rounded-full
                  border
                  border-primary/10
                "
              />

              {/* ================= IMAGE CONTAINER ================= */}

              <div
                className="
                  relative
                  flex
                  h-64
                  w-64
                  items-end
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-primary/20
                  bg-gradient-to-br
                  from-primary/10
                  via-base-100
                  to-secondary/10
                  shadow-2xl
                  shadow-primary/10
                  sm:h-72
                  sm:w-72
                  md:h-80
                  md:w-80
                  lg:h-[390px]
                  lg:w-[390px]
                  xl:h-[430px]
                  xl:w-[430px]
                "
              >
                {/* Inner Ring */}

                <div
                  className="
                    absolute
                    inset-4
                    rounded-full
                    border
                    border-base-content/5
                    sm:inset-5
                  "
                />

                {/* Image */}

                <motion.img
                  src="https://i.ibb.co.com/fzj7h7gt/776130030-899772699483047-2992819233909665251-n-1-removebg-preview.png"
                  alt="Sumon Chakrabarty - Full Stack Web Developer"
                  className="
                    relative
                    z-10
                    w-[91%]
                    max-w-none
                    object-contain
                    drop-shadow-2xl
                  "
                  whileHover={{
                    scale: 1.035,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                />
              </div>

              {/* =================================================
                  FLOATING CARD - SPECIALIZED
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -bottom-3
                  -left-3
                  hidden
                  rounded-2xl
                  border
                  border-base-content/10
                  bg-base-100/85
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur-xl
                  sm:block
                  lg:-left-8
                  lg:bottom-8
                "
              >
                <p className="text-[11px] font-medium text-base-content/45">
                  Specialized in
                </p>

                <p className="mt-1 text-sm font-bold text-primary">
                  MERN + Next.js
                </p>
              </motion.div>

              {/* =================================================
                  FLOATING CARD - BUILD
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -right-2
                  top-6
                  hidden
                  rounded-2xl
                  border
                  border-base-content/10
                  bg-base-100/85
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur-xl
                  sm:block
                  lg:-right-8
                  lg:top-12
                "
              >
                <div className="flex items-center gap-2">
                  <span
                    className="
                      relative
                      flex
                      h-2.5
                      w-2.5
                    "
                  >
                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-success
                        opacity-50
                      "
                    />

                    <span
                      className="
                        relative
                        inline-flex
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-success
                      "
                    />
                  </span>

                  <p className="text-xs font-bold sm:text-sm">
                    Let's build something
                  </p>
                </div>

                <p className="mt-1 text-[11px] text-base-content/50">
                  Amazing together 🚀
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.div
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-5
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-base-content/30
          md:flex
        "
      >
        <span
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.3em]
          "
        >
          Scroll
        </span>

        <div
          className="
            flex
            h-8
            w-5
            justify-center
            rounded-full
            border
            border-base-content/20
            p-1
          "
        >
          <div
            className="
              h-1.5
              w-1
              rounded-full
              bg-primary
            "
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

