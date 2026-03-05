import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Hero = () => {
  // বাম পাশ থেকে টেক্সট আসার অ্যানিমেশন
  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  // ডান পাশ থেকে ছবি আসার অ্যানিমেশন
  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id="home"
      className="hero min-h-screen bg-base-200 px-4 md:px-10 py-10 overflow-hidden"
    >
      <div className="hero-content flex-col lg:flex-row gap-12 lg:gap-20">
        {/* টেক্সট সেকশন - বাম পাশ থেকে আসবে */}
        <motion.div
          className="flex-1 text-center lg:text-left order-2 lg:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <p className="text-lg md:text-xl font-medium text-primary">
              Hello there!
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              I'm <span className="text-primary">Sumon</span>
            </h1>

            {/* ডেজিগনেশন আপডেট করা হয়েছে */}
            <p className="py-2 text-2xl md:text-3xl font-semibold text-secondary opacity-90">
              Full Stack Web Developer
            </p>

            {/* টেক্সট ডিসক্রিপশন আপডেট করা হয়েছে আপনার স্কিল অনুযায়ী */}
            <p className="py-2 opacity-80 leading-relaxed max-w-lg mx-auto lg:mx-0 text-md md:text-lg">
              I specialize in building scalable web applications using the
              <span className="text-primary font-bold"> MERN Stack</span> and
              <span className="text-primary font-bold"> Next.js</span>. I love
              creating seamless user experiences backed by robust server-side
              logic.
            </p>
          </motion.div>

          {/* সোশ্যাল লিঙ্ক */}
          <motion.div
            className="flex justify-center lg:justify-start gap-4 py-8 mt-4"
            variants={itemVariants}
          >
            {[
              { icon: FaGithub, link: "https://github.com/yourusername" },
              {
                icon: FaLinkedin,
                link: "https://linkedin.com/in/yourusername",
              },
              { icon: FaTwitter, link: "https://twitter.com/yourusername" },
              { icon: FaFacebook, link: "https://facebook.com/yourusername" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-circle btn-md hover:btn-primary hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* রেজুমে বাটন */}
          <motion.div className="mt-2" variants={itemVariants}>
            <motion.a
              href="/resume.pdf" // এখানে আপনার রেজুমে ফাইলের সঠিক নাম দিন
              download
              className="btn btn-primary lg:btn-lg px-10 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ফটো সেকশন - ট্রান্সপারেন্ট ছবির জন্য আপডেট */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <div className="relative group">
            {/* ছবির সাইজ এবং কন্টেইনার স্টাইল */}
            <div className="w-72 md:w-96 lg:w-[480px] transition-all duration-500">
              <motion.img
                src="https://i.ibb.co.com/7d50Gpdx/1772650177831-removebg-preview.png"
                alt="Sumon"
                className="w-full h-auto drop-shadow-2xl" // ট্রান্সপারেন্ট ছবিতে শ্যাডো দেওয়ার জন্য drop-shadow ভালো কাজ করে
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
