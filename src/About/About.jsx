import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLightbulb,
  FaPalette,
  FaRunning,
  FaRocket,
  FaUserGraduate,
} from "react-icons/fa";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const hobbyCards = [
    {
      icon: <FaCode className="text-5xl text-primary mb-4" />,
      title: "Development Philosophy",
      desc: "I don't just write code; I build digital experiences. My focus is on creating clean, scalable, and maintainable architectures using the MERN stack. I love solving complex logic and optimizing performance for the best user experience.",
      color: "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20",
    },
    {
      icon: <FaUserGraduate className="text-5xl text-secondary mb-4" />,
      title: "Academic Background",
      desc: "Currently, I am pursuing my Honours in Bengali at Jashore Govt. City College. This academic journey has sharpened my analytical thinking and communication skills, which I bridge with my technical expertise in software development.",
      color:
        "hover:border-secondary/50 hover:shadow-2xl hover:shadow-secondary/20",
    },
    {
      icon: <FaRocket className="text-5xl text-accent mb-4" />,
      title: "Future Vision",
      desc: "I am constantly evolving as a Full Stack Developer. My goal is to work on global projects and contribute to innovative tech solutions. I am particularly interested in exploring Next.js and advanced backend systems to stay ahead in the industry.",
      color: "hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20",
    },
    {
      icon: <FaRunning className="text-5xl text-info mb-4" />,
      title: "Life Outside Coding",
      desc: "When I'm not in front of a screen, you'll find me on the football field or enjoying a long run. I also have a creative side that loves painting. These activities keep me energized and help maintain a healthy work-life balance.",
      color: "hover:border-info/50 hover:shadow-2xl hover:shadow-info/20",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-base-100 px-4 md:px-10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-2 w-24 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Vertical Layout Grid */}
        <div className="grid grid-cols-1 gap-20">
          {/* Detailed Text Content */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center"
          >
            <h3 className="text-4xl font-bold text-secondary">
              A Bit More About Myself
            </h3>
            <div className="space-y-6 text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
              <p>
                Hello! I'm <span className="font-bold text-primary">Sumon</span>
                , a dedicated Full Stack Web Developer based in Bangladesh. My
                journey in the tech world started with a deep curiosity for how
                things work on the internet, and today, I specialize in building
                robust applications using{" "}
                <span className="font-bold">
                  MongoDB, Express, React, and Node.js
                </span>
                .
              </p>
              <p>
                As a student of Bengali Literature, I bring a unique perspective
                to my development work—blending the art of storytelling with the
                precision of code. I believe that every website has a story to
                tell, and I make sure it's told through a seamless and engaging
                interface.
              </p>
            </div>

            <div className="flex justify-center flex-wrap gap-6 pt-6">
              <div className="badge badge-primary badge-outline p-6 gap-3 text-lg font-bold shadow-md">
                <FaCode /> Full Stack Developer
              </div>
              <div className="badge badge-secondary badge-outline p-6 gap-3 text-lg font-bold shadow-md">
                <FaLightbulb /> Creative Thinker
              </div>
            </div>
          </motion.div>

          {/* Large Vertical Cards */}
          <div className="grid grid-cols-1 gap-12 w-full">
            {hobbyCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                whileHover="hover"
                variants={cardHover}
                className={`card bg-base-200 shadow-xl border-2 border-transparent transition-all min-h-[250px] flex items-center justify-center ${card.color}`}
              >
                <div className="card-body flex-col md:flex-row items-center gap-10 p-10 md:p-14 text-center md:text-left w-full">
                  <div className="flex-shrink-0 bg-base-300 p-8 rounded-2xl shadow-inner">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-extrabold mb-4 text-secondary">
                      {card.title}
                    </h4>
                    <p className="text-lg md:text-xl opacity-80 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
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
