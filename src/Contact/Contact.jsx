import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Web3Forms Access Key
    formData.append("access_key", "d931d584-c023-4f6d-9128-61664b401583");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully to Sumon!",
        icon: "success",
        confirmButtonColor: "#3b82f6",
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      Swal.fire({
        title: "Error!",
        text: data.message,
        icon: "error",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-base-100 px-6 md:px-12 overflow-hidden"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, x: -100 }} // বাম দিক থেকে আসবে
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono tracking-widest uppercase text-sm mb-2 font-bold">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Let's Work <span className="text-primary">Together</span>
          </h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-secondary mb-6 font-sans">
              Contact Information
            </h3>
            <p className="opacity-70 text-lg max-w-md leading-relaxed">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              {/* Email Card */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-2xl text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs font-bold opacity-50 uppercase tracking-widest">
                    Email Me
                  </p>
                  <a
                    href="mailto:sumonchakrobarty9466@gmail.com"
                    className="text-xl font-bold hover:text-primary transition-colors"
                  >
                    sumonchakrobarty9466@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-success/10 flex items-center justify-center rounded-2xl text-success text-2xl group-hover:bg-success group-hover:text-white transition-all duration-300 shadow-sm">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-xs font-bold opacity-50 uppercase tracking-widest">
                    WhatsApp / Call
                  </p>
                  <a
                    href="https://wa.me/8801300271491"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl font-bold hover:text-success transition-colors"
                  >
                    +880 1300-271491
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center rounded-2xl text-secondary text-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs font-bold opacity-50 uppercase tracking-widest">
                    Location
                  </p>
                  <p className="text-xl font-bold">Jashore, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-base-200 p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-base-300">
            <form onSubmit={onSubmit} className="space-y-5">
              {/* Optional: Email Subject */}
              <input
                type="hidden"
                name="subject"
                value="New Submission from Portfolio"
              />

              <div className="form-control w-full">
                <label className="label font-bold opacity-70">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="input input-bordered w-full rounded-xl focus:outline-primary border-none bg-base-100"
                />
              </div>

              <div className="form-control w-full">
                <label className="label font-bold opacity-70">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="input input-bordered w-full rounded-xl focus:outline-primary border-none bg-base-100"
                />
              </div>

              <div className="form-control w-full">
                <label className="label font-bold opacity-70">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Your Message..."
                  className="textarea textarea-bordered w-full rounded-xl focus:outline-primary border-none bg-base-100"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full rounded-xl font-black text-lg gap-3 mt-4 group"
              >
                Send Message
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
