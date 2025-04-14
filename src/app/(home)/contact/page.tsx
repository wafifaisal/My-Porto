"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaRocket,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaStar,
} from "react-icons/fa";
import Navbar from "@/components/Navbar/Navbar";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const controls = useAnimation();

  // Stars background logic
  const [stars, setStars] = useState<
    Array<{ x: number; y: number; size: number; opacity: number }>
  >([]);

  useEffect(() => {
    // Generate random stars for the background
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
      setStars(newStars);
    };

    generateStars();

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const xPos = (e.clientX / window.innerWidth) * 10;
      const yPos = (e.clientY / window.innerHeight) * 10;

      if (formRef.current) {
        formRef.current.style.setProperty("--x-offset", `${xPos}px`);
        formRef.current.style.setProperty("--y-offset", `${yPos}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    controls.start({ scale: [1, 0.95, 1] });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Trigger confetti effect on success
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
        });

        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Send message error:", error);
      alert("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputFocus = (field: string) => {
    setActiveInput(field);
    controls.start({ scale: 1.02, transition: { duration: 0.2 } });
  };

  const handleInputBlur = () => {
    setActiveInput(null);
    controls.start({ scale: 1, transition: { duration: 0.2 } });
  };

  // Text typing animation for form placeholders
  const getPlaceholder = (field: string) => {
    if (activeInput === field) return "";

    switch (field) {
      case "name":
        return "Your name goes here...";
      case "email":
        return "Where can I reach you...";
      case "message":
        return "Tell me about your ideas...";
      default:
        return "";
    }
  };

  return (
    <div className="overflow-hidden">
      <Navbar />

      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 z-0">
        {/* Animated stars in background */}
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.5, star.opacity],
              scale: [1, star.size > 2 ? 1.5 : 1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + Math.random() * 3,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="min-h-screen relative z-10 px-6 py-10 flex flex-col gap-12 items-center justify-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Floating objects */}
        <motion.div
          className="absolute top-20 left-10 text-purple-300 opacity-30"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{ repeat: Infinity, duration: 8 }}
        >
          <FaStar size={40} />
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-20 text-blue-300 opacity-30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -10, 0, 10, 0],
          }}
          transition={{ repeat: Infinity, duration: 10, delay: 1 }}
        >
          <FaRocket size={50} />
        </motion.div>

        {/* Contact Card with Glassmorphism */}
        <motion.div
          className="backdrop-blur-xl bg-white/10 shadow-2xl rounded-3xl p-10 md:p-16 max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border border-white/20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.4)" }}
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Let&apos;s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  Connect
                </span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-3" />
            </motion.div>

            <motion.p
              className="text-gray-200 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I&apos;m always open to exciting opportunities and meaningful
              collaborations. Reach out and let&apos;s create something{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                extraordinary
              </span>{" "}
              together!
            </motion.p>

            <motion.div
              className="space-y-5 text-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                {
                  icon: <FaEnvelope className="text-purple-400 text-xl" />,
                  text: "wafifaisal19@gmail.com",
                  delay: 0,
                },
                {
                  icon: <FaPhone className="text-blue-400 text-xl" />,
                  text: "+62 813-2482-8388",
                  delay: 0.1,
                },
                {
                  icon: <FaMapMarkerAlt className="text-pink-400 text-xl" />,
                  text: "Bandung, Indonesia",
                  delay: 0.2,
                },
                {
                  icon: <FaLinkedin className="text-indigo-400 text-xl" />,
                  text: (
                    <a
                      href="https://www.linkedin.com/in/wafi-faisal-falah-695b5021b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-indigo-300 transition"
                    >
                      LinkedIn Profile
                    </a>
                  ),
                  delay: 0.3,
                },
                {
                  icon: <FaGithub className="text-purple-400 text-xl" />,
                  text: (
                    <a
                      href="https://github.com/wafifaisal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-indigo-300 transition"
                    >
                      GitHub Profile
                    </a>
                  ),
                  delay: 0.4,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 group"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + item.delay }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Animated Rocket Scene */}
          <motion.div
            className="w-full h-64 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <div className="relative">
              {/* Orbiting planets */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute rounded-full ${
                    i === 0
                      ? "bg-purple-500"
                      : i === 1
                      ? "bg-blue-500"
                      : "bg-pink-500"
                  }`}
                  style={{
                    width: `${(3 - i) * 10}px`,
                    height: `${(3 - i) * 10}px`,
                    boxShadow: `0 0 ${(3 - i) * 5}px ${
                      i === 0
                        ? "rgba(168, 85, 247, 0.5)"
                        : i === 1
                        ? "rgba(59, 130, 246, 0.5)"
                        : "rgba(236, 72, 153, 0.5)"
                    }`,
                  }}
                  animate={{
                    x: [0, Math.cos((i * Math.PI) / 1.5) * (i + 1) * 40, 0],
                    y: [0, Math.sin((i * Math.PI) / 1.5) * (i + 1) * 40, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + i * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Rocket */}
              <motion.div
                className="relative z-10"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaRocket className="text-[8rem] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                </motion.div>

                {/* Rocket flame */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-16 bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent rounded-b-full"
                  animate={{
                    height: [16, 24, 16],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                />
              </motion.div>

              {/* Star field around rocket */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    left: `${Math.random() * 200 - 100}px`,
                    top: `${Math.random() * 200 - 100}px`,
                    opacity: Math.random() * 0.7 + 0.3,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1 + Math.random() * 2,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Email Form with Interactive Elements */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 md:p-14 w-full max-w-4xl space-y-6"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{
            transform:
              "translate3d(calc(var(--x-offset, 0) / -20), calc(var(--y-offset, 0) / -20), 0)",
          }}
        >
          <AnimatePresence>
            {success ? (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-md bg-indigo-900/50 rounded-3xl z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <motion.div
                  className="text-6xl mb-4"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  🚀
                </motion.div>
                <motion.h3
                  className="text-3xl font-bold text-white mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Message Sent Successfully!
                </motion.h3>
                <motion.p
                  className="text-indigo-200 text-center max-w-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Thanks for reaching out. I&apos;ll get back to you as soon as
                  possible!
                </motion.p>
                <motion.button
                  type="button"
                  className="mt-6 px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors"
                  onClick={() => setSuccess(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Close
                </motion.button>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <motion.div
            className="flex items-center justify-center mb-2"
            animate={controls}
          >
            <motion.div
              className="text-5xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              ✉️
            </motion.div>
          </motion.div>

          <motion.h3
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 mb-6 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Send Me a Message
          </motion.h3>

          {/* Animated input fields */}
          {[
            { field: "name", icon: "👋" },
            { field: "email", icon: "📧" },
            { field: "message", icon: "💭" },
          ].map((item, idx) => (
            <motion.div
              key={item.field}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + idx * 0.15 }}
              className="relative"
            >
              <motion.div
                className={`absolute left-4 top-4 transition-all duration-300 ${
                  activeInput === item.field ? "scale-125 -translate-x-1" : ""
                }`}
              >
                {item.icon}
              </motion.div>

              {item.field === "message" ? (
                <textarea
                  name={item.field}
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={getPlaceholder(item.field)}
                  required
                  onFocus={() => handleInputFocus(item.field)}
                  onBlur={handleInputBlur}
                  className="w-full p-4 pl-12 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-400 text-white"
                />
              ) : (
                <input
                  type={item.field === "email" ? "email" : "text"}
                  name={item.field}
                  value={formData[item.field as "name" | "email"]}
                  onChange={(e) =>
                    setFormData({ ...formData, [item.field]: e.target.value })
                  }
                  placeholder={getPlaceholder(item.field)}
                  required
                  onFocus={() => handleInputFocus(item.field)}
                  onBlur={handleInputBlur}
                  className="w-full p-4 pl-12 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-400 text-white"
                />
              )}

              {/* Animated border effect on focus */}
              <AnimatePresence>
                {activeInput === item.field && (
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="h-full w-1 bg-gradient-to-b from-purple-500 to-indigo-500 absolute top-0 left-0 rounded-l-xl"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      exit={{ scaleY: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          <motion.button
            type="submit"
            disabled={loading}
            className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 w-full font-semibold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {/* Button inner glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            />

            <div className="flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <motion.div
                    className="h-5 w-5 rounded-full border-2 border-t-transparent border-white"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "linear",
                    }}
                  />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
                  >
                    <FaPaperPlane className="text-lg" />
                  </motion.div>
                  <span>Send Message</span>
                </>
              )}
            </div>
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
