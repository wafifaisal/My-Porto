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
    <div className="w-full h-auto flex flex-col items-center justify-center relative z-10 text-center">
      <motion.div
        variants={slideInFromTop}
        className="py-3 px-6 rounded-2xl bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 backdrop-blur-md"
      >
        <div className="flex items-center justify-center gap-3">
          <SparklesIcon className="text-white h-6 w-6 animate-pulse" />
          <h1 className="text-white font-semibold text-base sm:text-lg">
            Powered by Next.js 14 and Framer Motion
          </h1>
        </div>
      </motion.div>

      <motion.h2
        variants={slideInFromLeft(0.5)}
        className="text-[32px] sm:text-[40px] font-extrabold mt-6 drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a00] via-[#ee0979] to-[#ff6a00]"
      >
        Building vibrant, responsive, and expressive websites
      </motion.h2>

      <motion.p
        variants={slideInFromRight(0.5)}
        className="text-[18px] sm:text-[22px] text-gray-700 font-medium italic mt-4 mb-12 max-w-2xl drop-shadow-md"
      >
        Fusing design and development to create immersive digital experiences
        that pop with personality.
      </motion.p>
    </div>
  );
};

export default SkillText;
