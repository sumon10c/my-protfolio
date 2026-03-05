import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-base-300 pt-16 pb-8 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* নাম এবং ব্র্যান্ডিং */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-black tracking-tighter">
              SUMON<span className="text-primary">.</span>
            </h2>
            <p className="text-sm opacity-60 mt-2 font-medium italic">
              Crafting clean and functional digital experiences.
            </p>
          </motion.div>

          {/* সোশ্যাল মিডিয়া লিঙ্ক */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-5"
          >
            {[
              { icon: <FaGithub />, link: "https://github.com/sumon10c" },
              { icon: <FaLinkedin />, link: "#" },
              { icon: <FaFacebook />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-base-100 flex items-center justify-center rounded-2xl text-xl shadow-sm hover:bg-primary hover:text-white hover:-translate-y-2 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          {/* উপরে যাওয়ার বাটন */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="btn btn-primary btn-circle btn-lg shadow-lg"
          >
            <FaArrowUp />
          </motion.button>
        </div>

        {/* নিচের লাইন */}
        <div className="h-px w-full bg-base-content/10 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70 font-medium text-center">
          <p>© 2026 Sumon Chakrobarty. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
