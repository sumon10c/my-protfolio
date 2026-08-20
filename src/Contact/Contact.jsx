import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaComments,
} from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "d931d584-c023-4f6d-9128-61664b401583");

    setIsSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        await Swal.fire({
          title: "Message Sent!",
          text: "Thanks for reaching out. I'll get back to you as soon as possible.",
          icon: "success",
          confirmButtonText: "Great!",
          confirmButtonColor: "#3b82f6",
          background: "var(--fallback-b1, oklch(var(--b1)))",
        });

        form.reset();
      } else {
        throw new Error(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Contact form error:", error);

      Swal.fire({
        title: "Oops!",
        text: error.message || "Unable to send your message. Please try again.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setIsSending(false);
    }
  };

  const contactItems = [
    {
      icon: FaEnvelope,
      label: "Email Me",
      value: "sumonchakrobarty9466@gmail.com",
      href: "mailto:sumonchakrobarty9466@gmail.com",
      color: "primary",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp / Call",
      value: "+880 1300-271491",
      href: "https://wa.me/8801300271491",
      color: "success",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Jashore, Bangladesh",
      href: null,
      color: "secondary",
    },
  ];

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-base-100
        px-4
        py-24
        sm:px-6
        md:px-10
        lg:px-16
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-primary/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-secondary/10
            blur-3xl
          "
        />

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
            HEADER
        =================================================== */}

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
          className="mb-16 text-center"
        >
          <div
            className="
              mb-5
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
              font-black
              uppercase
              tracking-widest
              text-primary
            "
          >
            <FaComments size={12} />
            Get In Touch
          </div>

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              sm:text-5xl
              md:text-6xl
            "
          >
            Let's Work{" "}
            <span
              className="
                bg-gradient-to-r
                from-primary
                via-purple-500
                to-secondary
                bg-clip-text
                text-transparent
              "
            >
              Together
            </span>
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-primary" />
            <span className="h-1 w-16 rounded-full bg-primary/30" />
            <span className="h-1 w-8 rounded-full bg-secondary" />
          </div>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-base-content/60
              sm:text-lg
            "
          >
            Have a project in mind, need a website, or simply want to say hello?
            Feel free to reach out. I'm always happy to discuss new ideas and
            opportunities.
          </p>
        </motion.div>

        {/* ===================================================
            CONTACT GRID
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-12
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-base-content/10
              bg-base-200/70
              p-7
              shadow-xl
              backdrop-blur-md
              sm:p-9
            "
          >
            {/* Decorative circle */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-primary/10
                blur-3xl
              "
            />

            <div className="relative z-10">
              {/* Heading */}

              <div className="mb-8">
                <div
                  className="
                    mb-4
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                  "
                >
                  <FaComments size={20} />
                </div>

                <h3
                  className="
                    text-2xl
                    font-black
                    sm:text-3xl
                  "
                >
                  Contact Information
                </h3>

                <p
                  className="
                    mt-3
                    max-w-md
                    text-sm
                    leading-7
                    text-base-content/55
                    sm:text-base
                  "
                >
                  I'm always open to discussing new projects, creative ideas,
                  freelance opportunities, or potential collaborations.
                </p>
              </div>

              {/* Contact Items */}

              <div className="space-y-4">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;

                  const content = (
                    <div
                      className="
                        group
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-base-content/10
                        bg-base-100/70
                        p-4
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-primary/20
                        hover:shadow-lg
                      "
                    >
                      <div
                        className={`
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          text-xl
                          transition-all
                          duration-300
                          ${
                            item.color === "primary"
                              ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                              : item.color === "success"
                              ? "bg-success/10 text-success group-hover:bg-success group-hover:text-white"
                              : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white"
                          }
                        `}
                      >
                        <Icon />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="
                            mb-1
                            text-[10px]
                            font-black
                            uppercase
                            tracking-[0.15em]
                            text-base-content/40
                          "
                        >
                          {item.label}
                        </p>

                        <p
                          className="
                            truncate
                            text-sm
                            font-bold
                            transition-colors
                            duration-300
                            group-hover:text-primary
                            sm:text-base
                          "
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>

              {/* Availability */}

              <div
                className="
                  mt-8
                  rounded-2xl
                  border
                  border-success/10
                  bg-success/5
                  p-5
                "
              >
                <div className="flex items-start gap-4">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-success/10
                      text-success
                    "
                  >
                    <FaClock size={15} />
                  </div>

                  <div>
                    <p className="font-black">Available for new projects</p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-6
                        text-base-content/50
                      "
                    >
                      I'm currently open to freelance projects, collaborations,
                      and exciting opportunities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Small bottom text */}

              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-success">
                <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
                Usually responds within 24 hours
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE — FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-base-content/10
              bg-base-200/70
              p-7
              shadow-xl
              backdrop-blur-md
              sm:p-9
            "
          >
            {/* Top Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-secondary/10
                blur-3xl
              "
            />

            <div className="relative z-10">
              {/* Form Header */}

              <div className="mb-8">
                <p
                  className="
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-primary
                  "
                >
                  Send a Message
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-black
                    sm:text-3xl
                  "
                >
                  Tell me about your project
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-base-content/50
                  "
                >
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>
              </div>

              {/* Form */}

              <form onSubmit={onSubmit} className="space-y-5">
                <input
                  type="hidden"
                  name="subject"
                  value="New Submission from Portfolio"
                  readOnly
                />

                {/* Name */}

                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-xs
                      font-black
                      uppercase
                      tracking-wider
                      text-base-content/60
                    "
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="
                      h-14
                      w-full
                      rounded-xl
                      border
                      border-base-content/10
                      bg-base-100
                      px-4
                      text-sm
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-base-content/30
                      focus:border-primary/40
                      focus:ring-4
                      focus:ring-primary/10
                    "
                  />
                </div>

                {/* Email */}

                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-xs
                      font-black
                      uppercase
                      tracking-wider
                      text-base-content/60
                    "
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="
                      h-14
                      w-full
                      rounded-xl
                      border
                      border-base-content/10
                      bg-base-100
                      px-4
                      text-sm
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-base-content/30
                      focus:border-primary/40
                      focus:ring-4
                      focus:ring-primary/10
                    "
                  />
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-xs
                      font-black
                      uppercase
                      tracking-wider
                      text-base-content/60
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    placeholder="Tell me a little about your project..."
                    className="
                      min-h-[150px]
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-base-content/10
                      bg-base-100
                      p-4
                      text-sm
                      leading-7
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-base-content/30
                      focus:border-primary/40
                      focus:ring-4
                      focus:ring-primary/10
                    "
                  />
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  disabled={isSending}
                  className="
                    group
                    flex
                    h-14
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-gradient-to-r
                    from-primary
                    to-secondary
                    px-6
                    text-sm
                    font-black
                    text-white
                    shadow-lg
                    shadow-primary/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    hover:shadow-primary/25
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    sm:text-base
                  "
                >
                  {isSending ? (
                    <>
                      <span
                        className="
                          h-5
                          w-5
                          animate-spin
                          rounded-full
                          border-2
                          border-white/30
                          border-t-white
                        "
                      />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane
                        className="
                          transition-transform
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                        "
                      />
                    </>
                  )}
                </button>

                {/* Privacy note */}

                <div className="flex items-start gap-2 pt-1">
                  <FaCheckCircle
                    className="mt-0.5 shrink-0 text-success"
                    size={13}
                  />

                  <p
                    className="
                      text-[11px]
                      leading-5
                      text-base-content/40
                    "
                  >
                    Your information is only used to respond to your message. I
                    don't share your contact details with third parties.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

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
          className="mt-12 text-center"
        >
          <a
            href="mailto:sumonchakrobarty9466@gmail.com"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              text-base-content/50
              transition-colors
              duration-300
              hover:text-primary
            "
          >
            Prefer email?
            <span className="text-primary">Let's talk directly</span>
            <FaArrowRight
              size={11}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
