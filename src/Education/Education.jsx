import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaUniversity,
  FaAward,
} from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Arts (Honours)",
      subject: "Bengali Literature",
      institution: "Jashore Govt. City College, Jashore",
      duration: "2021 - Present (4th Year)",
      description:
        "Currently pursuing my final year of undergraduate studies. While my academic focus is on literature, I am deeply passionate about modern web technologies and building scalable applications.",
      status: "In Progress",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      subject: "Humanities",
      institution: "Keshabpur Govt. Degree College",
      duration: "2018 - 2020",
      description:
        "Successfully completed higher secondary education with a strong academic record, building a solid foundation for higher studies.",
      status: "Completed",
    },
  ];

  return (
    <section id="education" className="py-24 bg-base-100 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono tracking-widest uppercase text-sm mb-2 font-bold">
            Academic Background
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Education <span className="text-primary">Timeline</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-dashed border-primary/40 ml-4 md:ml-10">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="mb-16 ml-10 relative"
            >
              {/* Timeline Indicator Icon */}
              <div className="absolute -left-[54px] top-0 bg-base-100 p-1 rounded-full border-2 border-primary/50 shadow-xl z-10">
                <div className="bg-primary p-2 rounded-full">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
              </div>

              {/* Content Card */}
              <div className="bg-base-200/50 backdrop-blur-sm p-8 md:p-10 rounded-[2.5rem] border border-base-300 hover:border-primary/40 transition-all duration-500 group shadow-sm hover:shadow-2xl hover:shadow-primary/5">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-secondary group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-primary font-bold uppercase text-xs tracking-widest">
                      <FaAward className="text-sm" />
                      {item.subject}
                    </div>
                  </div>

                  <span
                    className={`px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter border shadow-sm ${
                      item.status === "In Progress"
                        ? "bg-primary/10 text-primary border-primary/20"
                        : "bg-base-300 text-base-content/60 border-base-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 text-sm font-semibold opacity-70">
                    <FaUniversity className="text-primary text-lg" />
                    {item.institution}
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold opacity-70">
                    <FaCalendarAlt className="text-primary text-lg" />
                    {item.duration}
                  </div>
                </div>

                <p className="text-sm md:text-base opacity-70 leading-relaxed max-w-3xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
