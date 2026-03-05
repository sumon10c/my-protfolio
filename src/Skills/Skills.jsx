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
import { FaRobot } from "react-icons/fa";

const Skills = () => {
  const skillSets = [
    {
      name: "Next.js",
      level: "85%",
      icon: <SiNextdotjs />,
      color: "hover:border-black hover:shadow-black/10",
    },
    {
      name: "React.js",
      level: "92%",
      icon: <SiReact className="text-blue-400" />,
      color: "hover:border-blue-400 hover:shadow-blue-400/10",
    },
    {
      name: "JavaScript",
      level: "90%",
      icon: <SiJavascript className="text-yellow-400" />,
      color: "hover:border-yellow-400 hover:shadow-yellow-400/10",
    },
    {
      name: "Tailwind CSS",
      level: "95%",
      icon: <SiTailwindcss className="text-cyan-400" />,
      color: "hover:border-cyan-400 hover:shadow-cyan-400/10",
    },
    {
      name: "Node.js",
      level: "80%",
      icon: <SiNodedotjs className="text-green-600" />,
      color: "hover:border-green-600 hover:shadow-green-600/10",
    },
    {
      name: "MongoDB",
      level: "82%",
      icon: <SiMongodb className="text-green-500" />,
      color: "hover:border-green-500 hover:shadow-green-500/10",
    },
    {
      name: "Firebase",
      level: "88%",
      icon: <SiFirebase className="text-orange-500" />,
      color: "hover:border-orange-500 hover:shadow-orange-500/10",
    },
    {
      name: "AI Integration",
      level: "75%",
      icon: <FaRobot className="text-purple-500" />,
      color: "hover:border-purple-500 hover:shadow-purple-500/10",
    },
  ];

  // বাম দিক থেকে আসার এনিমেশন ভেরিয়েন্ট
  const cardVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // প্রতিটি কার্ডের মধ্যে ডিলয়
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="skills"
      className="py-24 bg-base-100 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillSets.map((skill, index) => (
            <motion.div
              key={index}
              custom={index} // ইন্ডেক্স পাস করা হচ্ছে ডিলয়ের জন্য
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`bg-base-200 p-6 rounded-3xl border-2 border-transparent transition-all duration-300 shadow-sm ${skill.color}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl mb-4 p-4 bg-base-100 rounded-2xl shadow-inner">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                <span className="text-primary font-mono font-black text-sm mb-4">
                  {skill.level}
                </span>

                {/* Progress Bar */}
                <div className="w-full bg-base-300 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: 0.5,
                      ease: "anticipate",
                    }}
                    className="h-full bg-primary"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
