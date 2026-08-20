import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaUniversity,
  FaAward,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      id: "01",
      title: "Bachelor of Arts (Honours)",
      subject: "Bengali Literature",
      institution: "Jashore Govt. City College, Jashore",
      duration: "2021 - Present",
      year: "4th Year",
      description:
        "Currently pursuing my undergraduate studies in Bengali Literature. Alongside my academic journey, I am deeply passionate about modern web technologies and building scalable, user-focused applications.",
      status: "In Progress",
      icon: FaGraduationCap,
    },
    {
      id: "02",
      title: "Higher Secondary Certificate",
      subject: "Humanities",
      institution: "Keshabpur Govt. Degree College",
      duration: "2018 - 2020",
      year: "Completed",
      description:
        "Successfully completed higher secondary education in Humanities, developing a strong foundation in communication, critical thinking, and academic learning.",
      status: "Completed",
      icon: FaBookOpen,
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

  return (
    <section
      id="education"
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
          BACKGROUND DECORATION
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
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">
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
          className="mb-20 text-center"
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
            <FaGraduationCap size={14} />
            Academic Background
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
            My{" "}
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
              Education
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
            My academic journey has helped me develop analytical thinking,
            communication skills, and a strong foundation for continuous
            learning.
          </p>
        </motion.div>

        {/* ===================================================
            TIMELINE
        =================================================== */}

        <div className="relative">
          {/* Main Timeline Line */}

          <div
            className="
              absolute
              bottom-0
              left-6
              top-0
              w-px
              bg-gradient-to-b
              from-primary
              via-primary/30
              to-transparent
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {/* Timeline Items */}

          <div className="space-y-16 md:space-y-24">
            {educationData.map((item, index) => {
              const Icon = item.icon;

              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -60 : 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  className="
                    relative
                    md:grid
                    md:grid-cols-2
                    md:gap-16
                  "
                >
                  {/* =================================================
                      TIMELINE DOT
                  ================================================= */}

                  <div
                    className="
                      absolute
                      left-6
                      top-7
                      z-20
                      -translate-x-1/2
                      md:left-1/2
                    "
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.15,
                      }}
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border-4
                        border-base-100
                        bg-gradient-to-br
                        from-primary
                        to-secondary
                        text-lg
                        text-white
                        shadow-xl
                        shadow-primary/20
                      "
                    >
                      <Icon />
                    </motion.div>
                  </div>

                  {/* =================================================
                      YEAR BADGE
                  ================================================= */}

                  <div
                    className={`
                      mb-5
                      ml-16
                      md:mb-0
                      md:ml-0
                      ${
                        isLeft
                          ? "md:pr-16 md:text-right"
                          : "md:col-start-2 md:row-start-1 md:pl-16"
                      }
                    `}
                  >
                    <div
                      className={`
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
                        tracking-wider
                        text-primary
                      `}
                    >
                      <FaCalendarAlt size={11} />

                      {item.duration}
                    </div>
                  </div>

                  {/* =================================================
                      CARD
                  ================================================= */}

                  <div
                    className={`
                      ml-16
                      md:ml-0
                      ${
                        isLeft
                          ? "md:col-start-1 md:row-start-2 md:pr-16"
                          : "md:col-start-2 md:row-start-1 md:pl-16"
                      }
                    `}
                  >
                    <motion.div
                      whileHover={{
                        y: -7,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
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
                        hover:border-primary/30
                        hover:shadow-2xl
                        hover:shadow-primary/10
                        sm:p-8
                      "
                    >
                      {/* Card Glow */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-16
                          -top-16
                          h-40
                          w-40
                          rounded-full
                          bg-primary/10
                          blur-3xl
                          transition-all
                          duration-500
                          group-hover:scale-150
                        "
                      />

                      <div className="relative z-10">
                        {/* Card Top */}

                        <div
                          className="
                            mb-6
                            flex
                            items-start
                            justify-between
                            gap-4
                          "
                        >
                          {/* Icon */}

                          <div
                            className="
                              flex
                              h-14
                              w-14
                              flex-shrink-0
                              items-center
                              justify-center
                              rounded-2xl
                              bg-primary/10
                              text-primary
                              transition-all
                              duration-300
                              group-hover:scale-110
                              group-hover:rotate-3
                            "
                          >
                            <Icon size={24} />
                          </div>

                          {/* Number */}

                          <span
                            className="
                              text-4xl
                              font-black
                              text-base-content/10
                            "
                          >
                            {item.id}
                          </span>
                        </div>

                        {/* Title */}

                        <h3
                          className="
                            text-2xl
                            font-black
                            leading-tight
                            transition-colors
                            duration-300
                            group-hover:text-primary
                            sm:text-3xl
                          "
                        >
                          {item.title}
                        </h3>

                        {/* Subject */}

                        <div
                          className="
                            mt-3
                            flex
                            items-center
                            gap-2
                            text-sm
                            font-bold
                            uppercase
                            tracking-wider
                            text-primary
                          "
                        >
                          <FaAward size={13} />

                          {item.subject}
                        </div>

                        {/* Status */}

                        <div className="mt-5">
                          <span
                            className={`
                              inline-flex
                              items-center
                              gap-2
                              rounded-full
                              border
                              px-4
                              py-1.5
                              text-[10px]
                              font-black
                              uppercase
                              tracking-widest
                              ${
                                item.status === "In Progress"
                                  ? "border-primary/20 bg-primary/10 text-primary"
                                  : "border-base-content/10 bg-base-300 text-base-content/60"
                              }
                            `}
                          >
                            <span
                              className={`
                                h-1.5
                                w-1.5
                                rounded-full
                                ${
                                  item.status === "In Progress"
                                    ? "animate-pulse bg-primary"
                                    : "bg-base-content/30"
                                }
                              `}
                            />

                            {item.status}
                          </span>
                        </div>

                        {/* Divider */}

                        <div className="my-6 h-px bg-base-content/10" />

                        {/* Institution */}

                        <div className="mb-4 flex items-start gap-3">
                          <div
                            className="
                              mt-0.5
                              flex
                              h-9
                              w-9
                              flex-shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              bg-base-100
                              text-primary
                              shadow-sm
                            "
                          >
                            <FaUniversity size={15} />
                          </div>

                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-base-content/35">
                              Institution
                            </p>

                            <p
                              className="
                                mt-1
                                text-sm
                                font-bold
                                leading-6
                                text-base-content/70
                              "
                            >
                              {item.institution}
                            </p>
                          </div>
                        </div>

                        {/* Duration */}

                        <div className="mb-6 flex items-start gap-3">
                          <div
                            className="
                              mt-0.5
                              flex
                              h-9
                              w-9
                              flex-shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              bg-base-100
                              text-primary
                              shadow-sm
                            "
                          >
                            <FaCalendarAlt size={15} />
                          </div>

                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-base-content/35">
                              Academic Period
                            </p>

                            <p className="mt-1 text-sm font-bold text-base-content/70">
                              {item.duration} • {item.year}
                            </p>
                          </div>
                        </div>

                        {/* Description */}

                        <p
                          className="
                            text-sm
                            leading-7
                            text-base-content/55
                            sm:text-base
                          "
                        >
                          {item.description}
                        </p>

                        {/* Bottom Accent */}

                        <div className="mt-7 flex items-center justify-between">
                          <div
                            className="
                              h-1
                              w-10
                              rounded-full
                              bg-gradient-to-r
                              from-primary
                              to-secondary
                              transition-all
                              duration-300
                              group-hover:w-20
                            "
                          />

                          <FaArrowRight
                            size={12}
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
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            BOTTOM MESSAGE
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
            mt-20
            text-center
          "
        >
          <div
            className="
              mx-auto
              max-w-2xl
              rounded-3xl
              border
              border-primary/10
              bg-gradient-to-r
              from-primary/5
              via-base-200/60
              to-secondary/5
              p-7
              shadow-lg
              backdrop-blur-md
              sm:p-10
            "
          >
            <div
              className="
                mx-auto
                mb-4
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-primary/10
                text-primary
              "
            >
              <FaGraduationCap size={22} />
            </div>

            <h3 className="text-2xl font-black sm:text-3xl">
              Learning Never Stops
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
              My academic background is only one part of my learning journey. I
              continuously explore new technologies and improve my skills
              through practical projects and real-world development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
