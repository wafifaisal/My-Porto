"use client";

import {
  Backend_skill,
  Database_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
} from "@/data/skill";
import React, { useEffect, useState } from "react";
import SkillDataProvider from "./skillDataProvider";
import SkillText from "./skillText";
import { motion } from "framer-motion";

const skillSections = [
  {
    title: "Frontend",
    data: Frontend_skill,
    gradient: "from-purple-600 to-blue-500",
    icon: "💻",
  },
  {
    title: "Backend",
    data: Backend_skill,
    gradient: "from-rose-500 to-orange-500",
    icon: "⚙️",
  },
  {
    title: "Databases",
    data: Database_skill,
    gradient: "from-rose-500 to-fuchsia-400",
    icon: "📊",
  },
  {
    title: "DevOps",
    data: Full_stack,
    gradient: "from-amber-500 to-yellow-300",
    icon: "🔄",
  },
  {
    title: "Others",
    data: Other_skill,
    gradient: "from-violet-500 to-fuchsia-400",
    icon: "🛠️",
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const staggerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-900 dark:to-purple-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-300 to-orange-300 dark:from-yellow-900 dark:to-orange-900 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <motion.span className="inline-block text-sm font-bold tracking-wider uppercase mb-2 py-1 px-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-full">
            Programming Language
          </motion.span>

          <motion.h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-300 dark:to-violet-300">
            My Toolbox
          </motion.h2>

          <SkillText />
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skillSections.map((section, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveTab(idx)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2
                ${
                  activeTab === idx
                    ? `bg-gradient-to-r ${section.gradient} text-white shadow-lg`
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow"
                }`}
            >
              <span>{section.icon}</span>
              <span>{section.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid - Animated */}
        {skillSections.map((section, idx) => (
          <motion.div
            key={idx}
            className={`${activeTab === idx ? "block" : "hidden"}`}
            initial="hidden"
            animate={isInView && activeTab === idx ? "visible" : "hidden"}
            variants={staggerAnimation}
          >
            <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {section.data.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={childAnimation}
                  whileHover={{
                    scale: 1.08,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="relative group"
                >
                  <div
                    className={`rounded-2xl p-5 h-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg transform transition-all hover:border-transparent overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>

                    <div className="flex items-center justify-center h-full">
                      <SkillDataProvider
                        src={skill.Image}
                        width={skill.width}
                        height={skill.height}
                        index={index}
                      />
                    </div>
                  </div>

                  {/* Skill name tooltip */}
                  <div className="absolute inset-x-0 -bottom-2 flex justify-center">
                    <span
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r ${section.gradient} text-white shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10 whitespace-nowrap`}
                    >
                      {skill.skill_name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}

        {/* Section transition indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
