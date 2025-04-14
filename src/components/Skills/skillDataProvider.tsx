"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const animationDelay = 0.2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        delay: index * animationDelay,
        duration: 0.5,
        ease: "easeOut",
      }}
      className="rounded-xl p-3 bg-white/80 shadow-lg backdrop-blur-md border border-white/30 hover:scale-105 transition-transform duration-300"
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="skill image"
        className="rounded-md object-contain"
      />
    </motion.div>
  );
};

export default SkillDataProvider;
