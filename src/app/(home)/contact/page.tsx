"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaRocket,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import Navbar from "@/components/Navbar/Navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("❌ Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <div>
      <Navbar />

      <motion.div
        className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-100 px-6 py-10 flex flex-col gap-12 items-center justify-start relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Contact Card */}
        <motion.div
          className="backdrop-blur-md bg-white/70 shadow-2xl rounded-3xl p-10 md:p-16 max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border border-white/30"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Let&apos;s <span className="text-indigo-600">Connect</span>
            </h2>
            <p className="text-gray-700 text-lg">
              I&apos;m always open to exciting opportunities and meaningful
              collaborations. Reach out and let&apos;s create something awesome
              together!
            </p>

            <div className="space-y-5 text-gray-800 text-md">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-500 text-xl" />
                <span>wafifaisal19@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-green-500 text-xl" />
                <span>+62 813-2482-8388</span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-red-500 text-xl" />
                <span>Bandung, Indonesia</span>
              </div>
              <div className="flex items-center gap-4">
                <FaLinkedin className="text-indigo-500 text-xl" />
                <a
                  href="https://www.linkedin.com/in/wafi-faisal-falah-695b5021b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-indigo-800 transition"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaGithub className="text-indigo-500 text-xl" />
                <a
                  href="https://github.com/wafifaisal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-indigo-800 transition"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Right Animated Icon */}
          <motion.div
            className="w-full flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              className="relative w-64 h-64 flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <FaRocket className="text-[7rem] text-indigo-500 drop-shadow-lg" />
              <motion.div
                className="absolute w-full h-full border-2 border-dashed border-blue-300 rounded-full animate-spin-slow"
                style={{ animationDuration: "6s" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Email Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          className="relative backdrop-blur-xl bg-white/70 border border-white/30 rounded-3xl shadow-2xl p-10 md:p-14 w-full max-w-4xl space-y-6"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.h3
            className="text-3xl font-bold text-gray-900 mb-4 text-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            ✉️ Send Me a Message
          </motion.h3>

          {["name", "email", "message"].map((field, idx) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
            >
              {field === "message" ? (
                <textarea
                  name={field}
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your Message"
                  required
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 placeholder:text-gray-400"
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field as "name" | "email"]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  placeholder={
                    field === "name"
                      ? "Your Name"
                      : field === "email"
                      ? "Your Email"
                      : ""
                  }
                  required
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 placeholder:text-gray-400"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 transition-all duration-300 w-full font-semibold"
          >
            {loading ? "Sending..." : "🚀 Send Message"}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
