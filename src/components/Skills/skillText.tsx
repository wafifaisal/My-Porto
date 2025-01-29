"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[12px] px-[15px] border-2 border-[#7042f88b] bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-500 opacity-90 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
      >
        <div className="flex items-center justify-center space-x-3">
          <SparklesIcon className="text-[#b49bff] h-6 w-6 animate-pulse" />
          <h1 className="Welcome-text text-white text-lg font-semibold">
            Think better with Next.js 14
          </h1>
        </div>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[36px] text-white font-bold mt-6 text-center mb-4"
      >
        Making websites with modern technologies
      </motion.div>

      {/* Subheading */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[24px] text-gray-200 mb-12 mt-6 text-center"
      >
        Never miss a task, deadline, or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
