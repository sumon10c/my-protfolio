"use client";

import React from "react";
import { Menu, ArrowUpRight, Sparkles } from "lucide-react";

const Navbar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarOffset = 85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Close mobile dropdown
    const activeElement = document.activeElement;

    if (activeElement && typeof activeElement.blur === "function") {
      activeElement.blur();
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const activeElement = document.activeElement;

    if (activeElement && typeof activeElement.blur === "function") {
      activeElement.blur();
    }
  };

  const navLinks = (
    <>
      <li>
        <a
          href="#about"
          onClick={(e) => handleScroll(e, "about")}
          className="group relative rounded-full px-4 py-2 text-sm font-semibold text-base-content/70 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
        >
          About Me
          <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 group-hover:w-6" />
        </a>
      </li>

      <li>
        <a
          href="#skills"
          onClick={(e) => handleScroll(e, "skills")}
          className="group relative rounded-full px-4 py-2 text-sm font-semibold text-base-content/70 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
        >
          Skills
          <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 group-hover:w-6" />
        </a>
      </li>

      <li>
        <a
          href="#projects"
          onClick={(e) => handleScroll(e, "projects")}
          className="group relative rounded-full px-4 py-2 text-sm font-semibold text-base-content/70 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
        >
          Projects
          <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 group-hover:w-6" />
        </a>
      </li>

      <li>
        <a
          href="#education"
          onClick={(e) => handleScroll(e, "education")}
          className="group relative rounded-full px-4 py-2 text-sm font-semibold text-base-content/70 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
        >
          Education
          <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 group-hover:w-6" />
        </a>
      </li>

      <li>
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
          className="group relative rounded-full px-4 py-2 text-sm font-semibold text-base-content/70 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
        >
          Contact
          <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 group-hover:w-6" />
        </a>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-5 lg:px-8">
      <nav
        className="
          mx-auto
          max-w-7xl
          rounded-2xl
          border
          border-base-content/10
          bg-base-100/75
          px-3
          shadow-xl
          shadow-black/5
          backdrop-blur-xl
          transition-all
          duration-300
          sm:px-5
          lg:px-6
        "
      >
        <div className="navbar min-h-[68px] p-0">
          {/* ================= LOGO ================= */}
          <div className="navbar-start">
            <a
              href="#"
              onClick={handleLogoClick}
              className="
                group
                flex
                cursor-pointer
                items-center
                gap-2
                rounded-xl
                px-2
                py-2
                transition-all
                duration-300
                hover:bg-base-content/5
              "
            >
              {/* Logo Icon */}
              {/* <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-primary
                  to-secondary
                  text-white
                  shadow-lg
                  shadow-primary/20
                  transition-all
                  duration-300
                  group-hover:rotate-6
                  group-hover:scale-105
                "
              >
                <Sparkles size={18} strokeWidth={2.5} />
              </div> */}

              {/* Logo Text */}
              <div className="flex flex-col leading-none">
                <span className="text-lg font-black tracking-tight sm:text-xl">
                  SUMON<span className="text-primary">.</span>
                </span>

                <span className="mt-0.5 hidden text-[9px] font-medium uppercase tracking-[0.25em] text-base-content/45 sm:block">
                  Web Developer
                </span>
              </div>
            </a>
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="navbar-center hidden lg:flex">
            <ul
              className="
                menu
                menu-horizontal
                items-center
                gap-1
                rounded-full
                border
                border-base-content/5
                bg-base-content/[0.03]
                px-1.5
                py-1.5
              "
            >
              {navLinks}
            </ul>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="navbar-end gap-2">
            {/* Availability Badge */}
           

            {/* Hire Me */}
            <button
              onClick={(e) => handleScroll(e, "contact")}
              className="
                group
                relative
                hidden
                overflow-hidden
                rounded-full
                border-0
                bg-gradient-to-r
                from-primary
                to-secondary
                px-6
                font-bold
                text-white
                shadow-lg
                shadow-primary/20
                transition-all
                py-2
                duration-300
                hover:-translate-y-0.5
                hover:shadow-xl
                hover:shadow-primary/30
                active:scale-95
                sm:flex
              "
            >
              <span className="relative z-10 flex items-center gap-2">
                Hire Me
                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>

              {/* Shine */}
              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />
            </button>

            {/* ================= MOBILE MENU ================= */}
            <div className="dropdown dropdown-end lg:hidden">
              <button
                tabIndex={0}
                type="button"
                aria-label="Open navigation menu"
                className="
                  btn
                  btn-ghost
                  h-11
                  min-h-11
                  w-11
                  rounded-xl
                  border
                  border-base-content/10
                  bg-base-content/5
                  p-0
                  transition-all
                  duration-300
                  hover:bg-primary/10
                  hover:text-primary
                "
              >
                <Menu size={21} strokeWidth={2.3} />
              </button>

              <ul
                tabIndex={0}
                className="
                  menu
                  dropdown-content
                  z-[100]
                  mt-3
                  w-64
                  rounded-2xl
                  border
                  border-base-content/10
                  bg-base-100/95
                  p-3
                  shadow-2xl
                  backdrop-blur-xl
                "
              >
                <li className="mb-2 px-3 py-2">
                  <span className="pointer-events-none flex items-center gap-2 px-0 text-xs font-bold uppercase tracking-[0.18em] text-base-content/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Navigation
                  </span>
                </li>

                {navLinks}

                {/* Mobile Hire Button */}
                <li className="mt-2 border-t border-base-content/10 pt-2">
                  <button
                    onClick={(e) => handleScroll(e, "contact")}
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-primary
                      to-secondary
                      py-3
                      font-bold
                      text-white
                      shadow-lg
                      shadow-primary/20
                    "
                  >
                    Hire Me
                    <ArrowUpRight size={17} />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
