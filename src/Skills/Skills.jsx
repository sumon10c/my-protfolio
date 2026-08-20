import React from "react";
import { motion } from "framer-motion";
import {
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
} from "react-icons/si";
import {
  FaRobot,
  FaCode,
  FaServer,
  FaDatabase,
  FaArrowRight,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      name: "Next.js",
      level: 85,
      icon: SiNextdotjs,
      iconClass: "text-base-content",
      accent: "bg-base-content",
      border: "hover:border-base-content/30",
      glow: "group-hover:shadow-base-content/10",
    },
    {
      name: "React.js",
      level: 92,
      icon: SiReact,
      iconClass: "text-[#61DAFB]",
      accent: "bg-[#61DAFB]",
      border: "hover:border-[#61DAFB]/40",
      glow: "group-hover:shadow-[#61DAFB]/10",
    },
    {
      name: "JavaScript",
      level: 90,
      icon: SiJavascript,
      iconClass: "text-[#F7DF1E]",
      accent: "bg-[#F7DF1E]",
      border: "hover:border-[#F7DF1E]/40",
      glow: "group-hover:shadow-[#F7DF1E]/10",
    },
    {
      name: "Tailwind CSS",
      level: 95,
      icon: SiTailwindcss,
      iconClass: "text-[#38BDF8]",
      accent: "bg-[#38BDF8]",
      border: "hover:border-[#38BDF8]/40",
      glow: "group-hover:shadow-[#38BDF8]/10",
    },
    {
      name: "Node.js",
      level: 80,
      icon: SiNodedotjs,
      iconClass: "text-[#68A063]",
      accent: "bg-[#68A063]",
      border: "hover:border-[#68A063]/40",
      glow: "group-hover:shadow-[#68A063]/10",
    },
    {
      name: "MongoDB",
      level: 82,
      icon: SiMongodb,
      iconClass: "text-[#47A248]",
      accent: "bg-[#47A248]",
      border: "hover:border-[#47A248]/40",
      glow: "group-hover:shadow-[#47A248]/10",
    },
    {
      name: "Firebase",
      level: 88,
      icon: SiFirebase,
      iconClass: "text-[#FFCA28]",
      accent: "bg-[#FFCA28]",
      border: "hover:border-[#FFCA28]/40",
      glow: "group-hover:shadow-[#FFCA28]/10",
    },
    {
      name: "AI Integration",
      level: 75,
      icon: FaRobot,
      iconClass: "text-purple-500",
      accent: "bg-purple-500",
      border: "hover:border-purple-500/40",
      glow: "group-hover:shadow-purple-500/10",
    },
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 35,
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay: index * 0.08,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="skills"
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
        {/* Top Right Glow */}
        <div
          className="
            absolute
            -right-40
            -top-40
            h-[450px]
            w-[450px]
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
            h-[450px]
            w-[450px]
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

        {/* Decorative dots */}
        <div className="absolute left-[8%] top-[25%] h-2 w-2 rounded-full bg-primary/30" />
        <div className="absolute right-[10%] top-[45%] h-3 w-3 rounded-full bg-secondary/30" />
        <div className="absolute bottom-[20%] left-[15%] h-2 w-2 rounded-full bg-accent/30" />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
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
            <FaCode size={12} />
            My Tech Stack
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
            Technical{" "}
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
              Skills
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
            Technologies and tools I use to transform ideas into modern,
            scalable, and high-performance web applications.
          </p>
        </motion.div>

        {/* ===================================================
            TOP STATS
        =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={fadeUp}
          className="
            mb-12
            grid
            grid-cols-2
            gap-4
            md:grid-cols-4
          "
        >
          {/* Frontend */}

          <div
            className="
              rounded-2xl
              border
              border-base-content/10
              bg-base-200/60
              p-5
              text-center
              shadow-sm
              backdrop-blur-md
            "
          >
            <FaCode className="mx-auto mb-3 text-primary" size={22} />

            <p className="text-2xl font-black">04+</p>

            <p className="mt-1 text-xs font-medium text-base-content/50">
              Frontend Tools
            </p>
          </div>

          {/* Backend */}

          <div
            className="
              rounded-2xl
              border
              border-base-content/10
              bg-base-200/60
              p-5
              text-center
              shadow-sm
              backdrop-blur-md
            "
          >
            <FaServer className="mx-auto mb-3 text-secondary" size={22} />

            <p className="text-2xl font-black">02+</p>

            <p className="mt-1 text-xs font-medium text-base-content/50">
              Backend Tools
            </p>
          </div>

          {/* Database */}

          <div
            className="
              rounded-2xl
              border
              border-base-content/10
              bg-base-200/60
              p-5
              text-center
              shadow-sm
              backdrop-blur-md
            "
          >
            <FaDatabase className="mx-auto mb-3 text-accent" size={22} />

            <p className="text-2xl font-black">02+</p>

            <p className="mt-1 text-xs font-medium text-base-content/50">
              Database Tools
            </p>
          </div>

          {/* Technologies */}

          <div
            className="
              rounded-2xl
              border
              border-base-content/10
              bg-base-200/60
              p-5
              text-center
              shadow-sm
              backdrop-blur-md
            "
          >
            <FaRobot className="mx-auto mb-3 text-purple-500" size={22} />

            <p className="text-2xl font-black">08+</p>

            <p className="mt-1 text-xs font-medium text-base-content/50">
              Core Technologies
            </p>
          </div>
        </motion.div>

        {/* ===================================================
            SKILL GRID
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                whileHover={{
                  y: -8,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-base-content/10
                  bg-base-200/70
                  p-6
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  duration-300
                  ${skill.border}
                  ${skill.glow}
                  hover:shadow-2xl
                `}
              >
                {/* Top Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-28
                    w-28
                    rounded-full
                    bg-primary/5
                    blur-2xl
                    transition-all
                    duration-500
                    group-hover:scale-150
                  "
                />

                {/* Card Content */}

                <div className="relative z-10">
                  {/* Icon + Number */}

                  <div className="mb-5 flex items-start justify-between">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-base-100
                        text-4xl
                        shadow-inner
                        transition-all
                        duration-300
                        group-hover:shadow-lg
                      "
                    >
                      <Icon className={skill.iconClass} />
                    </motion.div>

                    <span
                      className="
                        rounded-full
                        bg-base-100
                        px-3
                        py-1
                        text-[11px]
                        font-black
                        text-base-content/30
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Name */}

                  <h3 className="text-xl font-black">{skill.name}</h3>

                  {/* Level */}

                  <div className="mb-4 mt-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-base-content/45">
                      Proficiency
                    </span>

                    <span className="text-sm font-black text-primary">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress */}

                  <div
                    className="
                      h-2
                      w-full
                      overflow-hidden
                      rounded-full
                      bg-base-300
                    "
                  >
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1.2,
                        delay: 0.25 + index * 0.05,
                        ease: "easeOut",
                      }}
                      className={`
                        h-full
                        rounded-full
                        ${skill.accent}
                      `}
                    />
                  </div>

                  {/* Bottom */}

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-base-content/35">
                      Experience & Practice
                    </span>

                    <FaArrowRight
                      size={11}
                      className="
                        text-base-content/20
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-primary
                      "
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

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
          className="
            mt-16
            rounded-3xl
            border
            border-primary/10
            bg-gradient-to-r
            from-primary/5
            via-base-200/70
            to-secondary/5
            p-7
            text-center
            shadow-lg
            backdrop-blur-md
            sm:p-10
          "
        >
          <div className="mx-auto max-w-2xl">
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-primary
              "
            >
              Always Learning
            </p>

            <h3
              className="
                mt-3
                text-2xl
                font-black
                sm:text-3xl
              "
            >
              Technology never stops evolving.
            </h3>

            <p
              className="
                mx-auto
                mt-3
                max-w-xl
                text-sm
                leading-7
                text-base-content/55
                sm:text-base
              "
            >
              I'm continuously learning new technologies, improving my
              development workflow, and exploring better ways to build powerful
              digital experiences.
            </p>

            <a
              href="#projects"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-primary
                to-secondary
                px-6
                py-3
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
              Explore My Work
              <FaArrowRight
                size={13}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
