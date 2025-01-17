"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function About() {
  const [openItem, setOpenItem] = useState<number | null>(null); // Track open "See More" item
  const [scrollHeight, setScrollHeight] = useState(0); // Track scroll position

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current scroll position
      const documentHeight = document.documentElement.scrollHeight; // Total document height
      const viewportHeight = window.innerHeight; // Height of the viewport
      const maxScrollableHeight = documentHeight - viewportHeight;

      // Calculate percentage scrolled
      const scrolled = (scrollTop / maxScrollableHeight) * 100;
      setScrollHeight(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleOpen = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const journeyData = [
    {
      year: "2018",
      title: "Started My Engineering Journey",
      description:
        "Embarked on my path to becoming an engineer, focusing on mechatronics and electronics.",
      details:
        "During this time, I explored mechanical systems, programming, and electronics in-depth. It shaped my passion for innovation and design.",
      image: "/images/engineering.jpg", // Replace with your image URL
      icon: "🎓",
    },
    {
      year: "2020",
      title: "First Internship",
      description:
        "Gained practical experience working on automation projects and robotics.",
      details:
        "I worked on designing automated systems for factories and learned about practical engineering challenges.",
      image: "/images/internship.jpg", // Replace with your image URL
      icon: "💼",
    },
    {
      year: "2022",
      title: "Final Year Project",
      description:
        "Developed an automatic self-checkout system utilizing computer vision.",
      details:
        "This project combined AI, computer vision, and IoT to deliver a real-world solution for self-checkout systems.",
      image: "/images/final-project.jpg", // Replace with your image URL
      icon: "🔬",
    },
    {
      year: "2024",
      title: "Freelancing & New Ventures",
      description:
        "Exploring web development and launching personal projects in tech and design.",
      details:
        "Currently working on building interactive web experiences and crocheting innovative product designs.",
      image: "/images/freelancing.jpg", // Replace with your image URL
      icon: "🌟",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20 px-8 text-center relative">
        <h1 className="text-5xl lg:text-7xl font-bold">About Me</h1>
        <p className="text-lg lg:text-2xl mt-4 max-w-2xl mx-auto">
          A passionate individual always curious about technology, innovation,
          and creativity.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-gray-100">
        <h2 className="text-4xl text-center font-bold mb-12">My Journey</h2>
        <div className="max-w-5xl mx-auto relative">
          {/* Dynamic Vertical Line */}
          <motion.div
            className="absolute left-8 top-0 w-1 z-10 bg-gradient-to-b from-blue-500 to-purple-600"
            style={{
              height: `${scrollHeight}%`, // Dynamic height based on scroll position
            }}
            transition={{
              duration: 0.2, // Smooth transition for the height
            }}
          />

          {/* Zig-zag Pattern Over Line */}
          <div className="absolute left-8 top-0 h-full w-1 z-20 bg-no-repeat bg-center bg-[url('/images/zigzag-pattern.svg')]" />

          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`mb-12 flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Timeline Icon */}
              <div
                className={`w-16 h-16 rounded-full ${
                  openItem === index ? "bg-purple-600" : "bg-blue-500"
                } text-white flex items-center justify-center text-2xl font-bold`}
              >
                {item.icon}
              </div>

              {/* Timeline Content */}
              <div className="max-w-md bg-white p-6 shadow-lg rounded-lg ml-6">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-sm text-gray-400 mt-2">{item.year}</p>

                {/* See More Button */}
                <button
                  className="mt-4 text-blue-500 hover:underline focus:outline-none"
                  onClick={() => toggleOpen(index)}
                >
                  {openItem === index ? "See Less" : "See More"}
                </button>

                {/* Expanded Details */}
                {openItem === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4"
                  >
                    <p className="text-gray-600">{item.details}</p>
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="mt-4 w-full rounded-lg shadow-lg"
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
