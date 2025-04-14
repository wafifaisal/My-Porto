import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCube, FaCode, FaLaptopCode } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animations for the title letters
  const titleText = "Projects I Create";
  const titleArray = titleText.split("");

  // Animations for the floating objects
  const floatingIcons = [
    { Icon: FaCube, color: "text-blue-400", delay: 0 },
    { Icon: FaCode, color: "text-purple-400", delay: 0.2 },
    { Icon: HiSparkles, color: "text-pink-400", delay: 0.4 },
    { Icon: FaLaptopCode, color: "text-indigo-400", delay: 0.6 },
  ];

  return (
    <motion.div
      className="relative mx-auto py-28 md:py-40 px-4 w-full z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuMiI+PHBhdGggZD0iTTMwIDFWNTlNMSAzMEg1OSIvPjwvZz48L3N2Zz4=')]" />

        {/* Floating elements */}
        <div className="hidden md:block">
          {floatingIcons.map(({ Icon, color, delay }, index) => (
            <motion.div
              key={index}
              className={`absolute ${color} opacity-60`}
              initial={{
                x: Math.random() * 200 - 100,
                y: Math.random() * 100 - 50,
                scale: 0,
              }}
              animate={{
                x: [
                  Math.random() * 200 - 100,
                  Math.random() * 200 - 100,
                  Math.random() * 200 - 100,
                ],
                y: [
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50,
                ],
                scale: 1,
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 20,
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatType: "reverse",
                delay: delay,
              }}
              style={{
                top: `${20 + index * 15}%`,
                left: index % 2 === 0 ? "10%" : "85%",
              }}
            >
              <Icon className="text-3xl md:text-5xl" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Animated title */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-4xl md:text-7xl font-bold text-center inline-block leading-tight"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {titleArray.map((letter, index) => (
              <motion.span
                key={index}
                className={letter === " " ? "mr-2" : "inline-block"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 * index,
                  ease: "easeOut",
                }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400">
                  {letter}
                </span>
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Subtitle with animated underline */}
        <motion.div
          className="relative mt-8 md:mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-base md:text-xl text-gray-200 leading-relaxed">
            Building modern, scalable web applications with a focus on clean
            design and optimal user experiences.
          </p>

          {/* Animated underline */}
          <motion.div
            className="h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-3 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.div>

        {/* Button area */}
        <motion.div
          className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        ></motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollY < 100 ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-8 h-12 rounded-full border-2 border-gray-500 flex justify-center pt-2"
            animate={{
              boxShadow: [
                "0 0 0 rgba(167, 139, 250, 0)",
                "0 0 10px rgba(167, 139, 250, 0.5)",
                "0 0 0 rgba(167, 139, 250, 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 bg-purple-500 rounded-full"
              animate={{ y: [0, 13, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <p className="text-xs text-gray-400 mt-2 text-center">
            Scroll to explore
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
