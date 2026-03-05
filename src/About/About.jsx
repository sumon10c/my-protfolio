import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaPalette, FaRunning } from "react-icons/fa";

const About = () => {
  // সাধারণ ফেড-ইন অ্যানিমেশন (টাইটেলের জন্য)
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // কার্ডের জন্য জুম এবং হোভার অ্যানিমেশন
  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const hobbyCards = [
    {
      icon: <FaCode className="text-4xl text-primary mb-2" />,
      title: "Work Style",
      desc: "I believe in writing clean, maintainable code and building user-centric designs.",
      color: "hover:border-primary/50 hover:shadow-primary/20",
    },
    {
      icon: <FaRunning className="text-4xl text-secondary mb-2" />,
      title: "Sports",
      desc: "Beyond coding, I love playing football and staying active through running.",
      color: "hover:border-secondary/50 hover:shadow-secondary/20",
    },
    {
      icon: <FaPalette className="text-4xl text-accent mb-2" />,
      title: "Creative Art",
      desc: "I find peace in painting, which helps me maintain a creative perspective.",
      color: "hover:border-accent/50 hover:shadow-accent/20",
    },
    {
      icon: <FaLightbulb className="text-4xl text-info mb-2" />,
      title: "Tech Enthusiast",
      desc: "I am deeply interested in exploring new gadgets and emerging technologies.",
      color: "hover:border-info/50 hover:shadow-info/20",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-base-100 px-4 md:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-secondary">Who am I?</h3>
            <p className="text-lg leading-relaxed opacity-80">
              I'm <span className="font-bold text-primary">Sumon</span>, a
              passionate Full Stack Web Developer. I thrive on the challenge of
              turning complex problems into elegant, functional solutions.
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              Specializing in the <span className="font-bold">MERN Stack</span>{" "}
              and <span className="font-bold text-secondary">Next.js</span>, I
              focus on building high-performance web applications.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="badge badge-primary badge-outline p-4 gap-2 text-sm font-semibold">
                <FaCode /> Full-time Coder
              </div>
              <div className="badge badge-secondary badge-outline p-4 gap-2 text-sm font-semibold">
                <FaLightbulb /> Problem Solver
              </div>
            </div>
          </motion.div>

          {/* Right Side: Animated Cards (Coming from Left) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hobbyCards.map((card, index) => (
              <motion.div
                key={index}
                // কার্ডগুলো বাম পাশ থেকে স্লাইড হয়ে আসবে
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15, // Stagger effect: একটির পর একটি আসবে
                  ease: "easeOut",
                }}
                variants={cardHover}
                whileHover="hover"
                className={`card bg-base-200 shadow-xl border border-transparent transition-colors cursor-default ${card.color}`}
              >
                <div className="card-body items-center text-center p-6">
                  {card.icon}
                  <h4 className="card-title text-sm uppercase tracking-widest font-bold">
                    {card.title}
                  </h4>
                  <p className="text-sm opacity-70">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
