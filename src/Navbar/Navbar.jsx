import React from "react";

const Navbar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 80; // স্টিকি নববারের উচ্চতা অনুযায়ী অ্যাডজাস্ট করা হয়েছে
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // ড্রপডাউন মেনু বন্ধ করার জন্য ব্লাার ব্যবহার
    const elem = document.activeElement;
    if (elem) {
      elem.blur();
    }
  };

  const navLinks = (
    <>
      <li>
        <a href="#about" onClick={(e) => handleScroll(e, "about")}>
          About Me
        </a>
      </li>
      <li>
        <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
          Skills
        </a>
      </li>
      <li>
        <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
          Projects
        </a>
      </li>
      <li>
        <a href="#education" onClick={(e) => handleScroll(e, "education")}>
          Education
        </a>
      </li>
      <li>
        <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md shadow-md sticky top-0 z-50 px-4 md:px-10 transition-all duration-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            {navLinks}
          </ul>
        </div>
        <a
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-black tracking-tighter cursor-pointer"
        >
          SUMON<span className="text-primary">.</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold gap-2">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        {/* Hire Me Button - এটি ক্লিক করলে Contact সেকশনে স্ক্রল করবে */}
        <button
          onClick={(e) => handleScroll(e, "contact")}
          className="btn btn-primary text-white rounded-full px-8 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all font-bold"
        >
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
