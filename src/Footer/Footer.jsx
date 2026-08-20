import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
  FaCode,
  FaHeart,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      link: "https://github.com/sumon10c",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/sumon-chakrabarty-sc/",
    },
    {
      icon: FaFacebook,
      name: "Facebook",
      link: "https://facebook.com/yourusername",
    },
  ];

  const navLinks = [
    {
      name: "About",
      id: "about",
    },
    {
      name: "Skills",
      id: "skills",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Education",
      id: "education",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-base-300 px-5 pt-20 pb-8 sm:px-8 lg:px-12">
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Primary Glow */}
        <div
          className="
            absolute
            -left-40
            -top-40
            h-[400px]
            w-[400px]
            rounded-full
            bg-primary/10
            blur-3xl
          "
        />

        {/* Secondary Glow */}
        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-secondary/10
            blur-3xl
          "
        />

        {/* Subtle Grid */}
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
            TOP FOOTER CONTENT
        =================================================== */}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* =================================================
              BRAND
          ================================================= */}

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
            className="text-center md:text-left"
          >
            {/* Logo */}

            <button
              onClick={scrollToTop}
              className="
                group
                inline-flex
                items-center
                gap-1
                text-3xl
                font-black
                tracking-tighter
              "
            >
              SUMON
              <span
                className="
                  text-primary
                  transition-transform
                  duration-300
                  group-hover:scale-125
                "
              >
                .
              </span>
            </button>

            {/* Tagline */}

            <p
              className="
                mt-4
                max-w-sm
                text-sm
                leading-7
                text-base-content/55
                md:text-base
              "
            >
              Crafting clean, modern and functional digital experiences with
              passion, creativity and code.
            </p>

            {/* Developer Badge */}

            <div
              className="
                mt-6
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
                font-bold
                text-primary
              "
            >
              <FaCode size={12} />
              Full Stack Web Developer
            </div>

            {/* Availability */}

            <div
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
                text-xs
                font-semibold
                text-success
                md:justify-start
              "
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
              Available for new projects
            </div>
          </motion.div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

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
              delay: 0.15,
            }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-black">Quick Links</h3>

            <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3 md:justify-start">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="
                    group
                    relative
                    text-sm
                    font-semibold
                    text-base-content/55
                    transition-colors
                    duration-300
                    hover:text-primary
                  "
                >
                  {link.name}

                  <span
                    className="
                      absolute
                      -bottom-1
                      left-0
                      h-[2px]
                      w-0
                      rounded-full
                      bg-primary
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </button>
              ))}
            </div>

            {/* Email */}

            <a
              href="mailto:sumonchakrobarty9466@gmail.com"
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-base-content/10
                bg-base-100/50
                px-4
                py-3
                text-sm
                font-semibold
                text-base-content/60
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/30
                hover:text-primary
                hover:shadow-lg
              "
            >
              <FaEnvelope className="text-primary" />

              <span className="break-all">sumonchakrobarty9466@gmail.com</span>
            </a>
          </motion.div>

          {/* =================================================
              SOCIAL LINKS
          ================================================= */}

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
              delay: 0.3,
            }}
            className="text-center lg:text-right"
          >
            <h3 className="text-lg font-black">Let's Connect</h3>

            <p
              className="
                mx-auto
                mt-3
                max-w-xs
                text-sm
                leading-6
                text-base-content/50
                lg:ml-auto
                lg:mr-0
              "
            >
              Follow my work and connect with me on social platforms.
            </p>

            <div className="mt-6 flex justify-center gap-3 lg:justify-end">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.4 + index * 0.1,
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-base-content/10
                      bg-base-100
                      text-lg
                      text-base-content/60
                      shadow-sm
                      transition-colors
                      duration-300
                      hover:border-primary
                      hover:bg-primary
                      hover:text-white
                      hover:shadow-lg
                      hover:shadow-primary/20
                    "
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>

            <p
              className="
                mt-5
                text-xs
                font-medium
                text-base-content/40
              "
            >
              Open to freelance & collaboration
            </p>
          </motion.div>
        </div>

        {/* ===================================================
            DIVIDER
        =================================================== */}

        <div className="my-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-base-content/10" />

          <div
            className="
              h-2
              w-2
              rotate-45
              bg-primary
            "
          />

          <div className="h-px flex-1 bg-base-content/10" />
        </div>

        {/* ===================================================
            BOTTOM AREA
        =================================================== */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-5
            text-center
            sm:flex-row
            sm:text-left
          "
        >
          {/* Copyright */}

          <p
            className="
              text-xs
              font-medium
              text-base-content/45
              sm:text-sm
            "
          >
            © 2026{" "}
            <span className="font-bold text-base-content/70">
              Sumon Chakrobarty
            </span>
            . All rights reserved.
          </p>

          {/* Made With */}

          <p
            className="
              flex
              items-center
              gap-1.5
              text-xs
              font-medium
              text-base-content/40
              sm:text-sm
            "
          >
            Built with
            <FaHeart className="text-red-500" size={11} />& code
          </p>

          {/* Back To Top */}

          <motion.button
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.92,
            }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              group
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-primary
              text-white
              shadow-lg
              shadow-primary/20
              transition-all
              duration-300
              hover:shadow-xl
              hover:shadow-primary/30
            "
          >
            <FaArrowUp
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
