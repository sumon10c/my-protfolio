import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLightbulb,
  FaRocket,
  FaRunning,
  FaUserGraduate,
  FaArrowRight,
} from "react-icons/fa";

const About = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
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

  const cards = [
    {
      icon: FaCode,
      title: "Development Philosophy",
      desc: "I don't just write code; I build digital experiences. My focus is on clean, scalable, and maintainable architectures using the MERN stack. I enjoy solving complex problems and optimizing performance.",
      color: "primary",
    },
    {
      icon: FaUserGraduate,
      title: "Academic Background",
      desc: "Currently pursuing my Honours in Bengali at Jashore Govt. City College. My academic journey has strengthened my analytical thinking and communication skills, which I bring into my development work.",
      color: "secondary",
    },
    {
      icon: FaRocket,
      title: "Future Vision",
      desc: "I'm continuously growing as a Full Stack Developer. My goal is to work on global projects, build innovative solutions, and explore Next.js and advanced backend technologies.",
      color: "accent",
    },
    {
      icon: FaRunning,
      title: "Life Outside Coding",
      desc: "When I'm away from the screen, I enjoy football, running, and painting. These activities keep me creative, energetic, and help me maintain a healthy balance.",
      color: "info",
    },
  ];

  return (
    <section
      id="about"
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
          BACKGROUND DECORATIONS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Right Glow */}
        <div
          className="
            absolute
            -right-40
            -top-40
            h-[400px]
            w-[400px]
            rounded-full
            bg-primary/10
            blur-3xl
          "
        />

        {/* Bottom Left Glow */}
        <div
          className="
            absolute
            -bottom-40
            -left-40
            h-[400px]
            w-[400px]
            rounded-full
            bg-secondary/10
            blur-3xl
          "
        />

        {/* Grid */}
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          {/* Small Label */}

          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-primary/20
              bg-primary/5
              px-4
              py-2
              text-sm
              font-bold
              text-primary
            "
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            Get To Know Me
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
            About{" "}
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
              Me
            </span>
          </h2>

          {/* Divider */}

          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-primary" />
            <span className="h-1 w-16 rounded-full bg-primary/30" />
            <span className="h-1 w-8 rounded-full bg-secondary" />
          </div>

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
            A little insight into my journey, mindset, creativity, and ambitions
            as a developer.
          </p>
        </motion.div>

        {/* ===================================================
            INTRODUCTION
        =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="
            mb-16
            grid
            items-center
            gap-10
            lg:grid-cols-[1fr_auto_1fr]
          "
        >
          {/* Left */}

          <div className="text-center lg:text-right">
            <p
              className="
                text-lg
                leading-8
                text-base-content/65
                sm:text-xl
              "
            >
              Hello! I'm <span className="font-bold text-primary">Sumon</span>,
              a dedicated Full Stack Web Developer based in Bangladesh. My
              journey started with a curiosity about how things work on the
              internet.
            </p>
          </div>

          {/* Center Icon */}

          <div className="flex justify-center">
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.08,
              }}
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-3xl
                bg-gradient-to-br
                from-primary
                to-secondary
                text-3xl
                text-white
                shadow-2xl
                shadow-primary/20
              "
            >
              <FaCode />
            </motion.div>
          </div>

          {/* Right */}

          <div className="text-center lg:text-left">
            <p
              className="
                text-lg
                leading-8
                text-base-content/65
                sm:text-xl
              "
            >
              I specialize in building robust applications using{" "}
              <span className="font-bold text-primary">
                MongoDB, Express, React, and Node.js
              </span>
              , while combining creativity with clean and efficient code.
            </p>
          </div>
        </motion.div>

        {/* ===================================================
            STORY CARD
        =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="
            relative
            mb-20
            overflow-hidden
            rounded-3xl
            border
            border-base-content/10
            bg-base-200/60
            p-6
            shadow-xl
            backdrop-blur-xl
            sm:p-8
            lg:p-10
          "
        >
          {/* Decorative Gradient */}

          <div
            className="
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-primary/10
              blur-3xl
            "
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:gap-14">
            {/* Story */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary/10
                    text-primary
                  "
                >
                  <FaLightbulb />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">
                    My Story
                  </p>

                  <h3 className="text-2xl font-black">Code Meets Creativity</h3>
                </div>
              </div>

              <p className="text-base leading-8 text-base-content/65 sm:text-lg">
                As a student of Bengali Literature, I bring a unique perspective
                to development. I believe technology is not only about
                functionality—it's also about communication, emotion,
                storytelling, and creating meaningful experiences.
              </p>
            </div>

            {/* Philosophy */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-secondary/10
                    text-secondary
                  "
                >
                  <FaRocket />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                    My Philosophy
                  </p>

                  <h3 className="text-2xl font-black">
                    Build. Learn. Improve.
                  </h3>
                </div>
              </div>

              <p className="text-base leading-8 text-base-content/65 sm:text-lg">
                I continuously learn new technologies and improve my development
                workflow. My goal is to write better code, understand users
                better, and create products that are fast, reliable, accessible,
                and enjoyable to use.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            SKILL BADGES
        =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-20 flex flex-wrap justify-center gap-4"
        >
          <div
            className="
              flex
              items-center
              gap-3
              rounded-full
              border
              border-primary/20
              bg-primary/5
              px-5
              py-3
              font-bold
              text-primary
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <FaCode />
            Full Stack Developer
          </div>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-full
              border
              border-secondary/20
              bg-secondary/5
              px-5
              py-3
              font-bold
              text-secondary
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <FaLightbulb />
            Creative Thinker
          </div>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-full
              border
              border-accent/20
              bg-accent/5
              px-5
              py-3
              font-bold
              text-accent
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <FaRocket />
            Problem Solver
          </div>
        </motion.div>

        {/* ===================================================
            CARDS
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
          "
        >
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-base-content/10
                  bg-base-200/60
                  p-7
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:shadow-2xl
                "
              >
                {/* Hover Glow */}

                <div
                  className={`
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-${card.color}/10
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  `}
                />

                <div className="relative z-10">
                  {/* Icon */}

                  <div className="mb-6 flex items-center justify-between">
                    <div
                      className={`
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-${card.color}/10
                        text-${card.color}
                        shadow-inner
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:rotate-3
                      `}
                    >
                      <Icon size={25} />
                    </div>

                    <span
                      className="
                        text-sm
                        font-bold
                        text-base-content/20
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mb-4
                      text-xl
                      font-black
                      sm:text-2xl
                    "
                  >
                    {card.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      text-sm
                      leading-7
                      text-base-content/60
                      sm:text-base
                    "
                  >
                    {card.desc}
                  </p>

                  {/* Bottom Accent */}

                  <div
                    className={`
                      mt-7
                      h-1
                      w-10
                      rounded-full
                      bg-${card.color}
                      transition-all
                      duration-300
                      group-hover:w-20
                    `}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="
            mt-20
            text-center
          "
        >
          <p className="mb-5 text-base text-base-content/50">
            Interested in working together?
          </p>

          <a
            href="#contact"
            className="
              group
              inline-flex
              items-center
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
              hover:-translate-y-1
              hover:shadow-2xl
              hover:shadow-primary/30
            "
          >
            Let's Work Together
            <FaArrowRight
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
