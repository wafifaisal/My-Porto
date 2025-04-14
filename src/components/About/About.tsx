"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Timeline } from "./Timeline";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGamepad,
  FaMusic,
  FaCamera,
  FaBook,
  FaMountain,
  FaCode,
} from "react-icons/fa";

export function TimelineDemo() {
  // Original timeline data (unchanged)
  const data = [
    {
      title: "2018",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started my undergraduate journey in Electrical Engineering majoring
            in Mechatronics at Universitas Katolik Parahyangan. Excited to learn
            about electronics, mechanics, and software systems.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/foto1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/foto2.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/foto3.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/foto4.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Graduated from Universitas Katolik Parahyangan with a
            Bachelor&apos;s degree in Mechatronics Engineering. My final project
            involved building an automated self-checkout system using computer
            vision and deep learning.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/foto5.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/foto6.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/foto7.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/foto8.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Completed my professional fullstack web development education at
            Purwadhika Digital Technology School. I gained skills in TypeScript,
            React, Next.js, and modern backend development.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/foto9.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/foto10.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/foto11.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/foto12.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  // 3D Rotating Card components for the About Me section
  const RotatingCard = ({
    front,
    back,
  }: {
    front: React.ReactNode;
    back: React.ReactNode;
    rotationSpeed?: number;
  }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    return (
      <div
        className="perspective-1000 relative h-full w-full cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        ref={cardRef}
      >
        <motion.div
          className="w-full h-full relative preserve-3d transition-all duration-500"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front of card */}
          <div
            className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            {front}
          </div>

          {/* Back of card */}
          <div
            className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {back}
          </div>
        </motion.div>
      </div>
    );
  };

  // For 3D cube
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const mouseMoveRef = useRef<HTMLDivElement>(null);

  // Update mouse position for the 3D cube effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseMoveRef.current) return;

      const rect = mouseMoveRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      setMouseX(x);
      setMouseY(y);
    };

    const element = mouseMoveRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      return () => element.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Hobby cards data for the cube faces
  const hobbies = [
    {
      icon: <FaGamepad className="text-white text-3xl" />,
      title: "Gaming",
      description: "Strategy games & RPGs",
      color: "bg-blue-600",
    },
    {
      icon: <FaMusic className="text-white text-3xl" />,
      title: "Music",
      description: "Electronic production",
      color: "bg-purple-600",
    },
    {
      icon: <FaCamera className="text-white text-3xl" />,
      title: "Photography",
      description: "Street & architecture",
      color: "bg-pink-600",
    },
    {
      icon: <FaBook className="text-white text-3xl" />,
      title: "Reading",
      description: "Sci-fi & technical books",
      color: "bg-green-600",
    },
    {
      icon: <FaMountain className="text-white text-3xl" />,
      title: "Hiking",
      description: "Nature exploration",
      color: "bg-amber-600",
    },
    {
      icon: <FaCode className="text-white text-3xl" />,
      title: "Coding",
      description: "Side projects",
      color: "bg-indigo-600",
    },
  ];

  // Animation for floating elements
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const skills = [
    { name: "React", level: 90, color: "from-blue-500 to-cyan-400" },
    { name: "TypeScript", level: 85, color: "from-blue-600 to-indigo-500" },
    { name: "Next.js", level: 80, color: "from-rose-800 to-rose-600" },
    { name: "Node.js", level: 75, color: "from-green-500 to-emerald-400" },
    { name: "Tailwind CSS", level: 92, color: "from-cyan-500 to-blue-400" },
    { name: "Python", level: 70, color: "from-yellow-500 to-yellow-400" },
  ];

  return (
    <div className="w-full">
      {/* Original Timeline component (unchanged) */}
      <Timeline data={data} />

      {/* New About Me Section with 3D effects */}
      <div className="py-20 relative overflow-hidden">
        {/* Background particles */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#131328] to-[#1a1a2e] opacity-90" />

          {/* Animated particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-500/40 w-1 h-5"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-50px`,
              }}
              animate={{
                y: ["0vh", "100vh"],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">
                About Me
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              The passions and interests that shape who I am
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* 3D Profile Card */}
            <div className="h-[400px]">
              <RotatingCard
                front={
                  <div className="h-full w-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-purple-900/80 p-6 flex flex-col items-center justify-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-purple-500/30 shadow-lg">
                      <Image
                        src="/fotoo.jpg"
                        alt="Profile"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Wafi Faisal Falah
                    </h3>
                    <p className="text-purple-200 mb-4">
                      Fullstack Developer & Mechatronics Engineer
                    </p>
                    <p className="text-sm text-gray-300">
                      Click to learn more about me
                    </p>
                  </div>
                }
                back={
                  <div className="h-full w-full bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-indigo-900/80 p-6 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-4">
                      About Me
                    </h3>
                    <p className="text-gray-300 text-sm flex-grow">
                      I&apos;m a passionate developer with a background in
                      mechatronics engineering and a love for creating elegant
                      solutions through code. My journey from hardware to
                      software has given me a unique perspective on
                      problem-solving. When I&apos;m not coding, I enjoy
                      exploring various hobbies that keep my creativity flowing
                      and my mind sharp.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full">
                        React
                      </span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">
                        TypeScript
                      </span>
                      <span className="px-2 py-1 bg-green-900/50 text-green-300 text-xs rounded-full">
                        Node.js
                      </span>
                      <span className="px-2 py-1 bg-yellow-900/50 text-yellow-300 text-xs rounded-full">
                        Python
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-4 text-center">
                      Click to flip back
                    </p>
                  </div>
                }
              />
            </div>

            {/* 3D Interactive Galaxy of Interests */}
            <div
              className="h-[400px] flex items-center justify-center perspective-1000 relative"
              ref={mouseMoveRef}
            >
              {/* Galaxy background with stars */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                      width: Math.random() * 3 + 1 + "px",
                      height: Math.random() * 3 + 1 + "px",
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.7 + 0.3,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: Math.random() * 5,
                    }}
                  />
                ))}
              </div>

              {/* Central sun/core */}
              <motion.div
                className="absolute z-10 rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500"
                style={{
                  width: "80px",
                  height: "80px",
                }}
                animate={{
                  boxShadow: [
                    "0 0 20px 5px rgba(255, 214, 0, 0.5)",
                    "0 0 30px 10px rgba(255, 214, 0, 0.7)",
                    "0 0 20px 5px rgba(255, 214, 0, 0.5)",
                  ],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-yellow-500 opacity-80">
                    {/* Solar flares animation */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-full h-full bg-gradient-to-r from-transparent via-yellow-200 to-transparent"
                        style={{
                          transform: `rotate(${i * 45}deg)`,
                          opacity: 0.4,
                          transformOrigin: "center",
                        }}
                        animate={{
                          rotate: [`${i * 45}deg`, `${i * 45 + 360}deg`],
                        }}
                        transition={{
                          duration: 10 + i * 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Orbiting planets (hobbies) */}
              {hobbies.map((hobby, index) => {
                // Calculate orbital parameters
                const orbitRadius = 150; // Base radius
                const orbitSpeed = 20 + index * 5; // Different speeds for each planet
                const orbitDelay = index * 0.8; // Staggered start
                const orbitAngle = (360 / hobbies.length) * index; // Distribute evenly
                const orbitSize = 50 - index * 3; // Slightly different sizes

                return (
                  <motion.div
                    key={index}
                    className={`absolute rounded-full ${hobby.color} flex items-center justify-center shadow-lg border border-white/10 z-20`}
                    style={{
                      width: orbitSize,
                      height: orbitSize,
                    }}
                    initial={{
                      x: Math.cos((orbitAngle * Math.PI) / 180) * orbitRadius,
                      y: Math.sin((orbitAngle * Math.PI) / 180) * orbitRadius,
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x:
                        mouseX * 20 +
                        Math.cos(((orbitAngle + 360) * Math.PI) / 180) *
                          orbitRadius,
                      y:
                        mouseY * 20 +
                        Math.sin(((orbitAngle + 360) * Math.PI) / 180) *
                          orbitRadius,
                      rotateX: mouseY * 30,
                      rotateY: mouseX * -30,
                    }}
                    whileHover={{
                      scale: 1.3,
                      zIndex: 30,
                      boxShadow: "0 0 20px 5px rgba(255, 255, 255, 0.3)",
                    }}
                    transition={{
                      default: {
                        duration: orbitSpeed,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        delay: orbitDelay,
                      },
                      scale: {
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    }}
                  >
                    <div className="p-2">{hobby.icon}</div>

                    {/* Hover tooltip */}
                    <AnimatePresence>
                      <motion.div
                        className="absolute left-1/2 transform -translate-x-1/2 -bottom-14 bg-black/80 text-white px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 border border-white/10"
                        animate={{
                          opacity: [0, 0.9, 0],
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: index,
                        }}
                      >
                        <p className="text-xs font-medium">{hobby.title}</p>
                        <p className="text-xs opacity-80">
                          {hobby.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    {/* Orbital trail */}
                    <div
                      className="absolute rounded-full border border-dashed border-white/5"
                      style={{
                        width: orbitRadius * 2,
                        height: orbitRadius * 2,
                        left: -orbitRadius + orbitSize / 2,
                        top: -orbitRadius + orbitSize / 2,
                        transform: `rotate(${index * 10}deg)`,
                      }}
                    />
                  </motion.div>
                );
              })}

              {/* Particle effects - comets */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`comet-${i}`}
                  className="absolute h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"
                  style={{
                    width: Math.random() * 40 + 20,
                    zIndex: 5,
                  }}
                  initial={{
                    x: -200,
                    y: Math.random() * 300 - 150,
                    rotate: Math.random() * 45 - 22.5,
                    opacity: 0,
                  }}
                  animate={{
                    x: 400,
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: Math.random() * 2 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 10,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Interactive prompt */}
              <p className="absolute -bottom-12 text-gray-400 text-sm text-center w-full">
                Move your mouse to navigate the galaxy of my interests
              </p>
            </div>

            {/* Skills with 3D effect */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-8 text-center">
                Skills & Expertise
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="relative bg-gray-900/60 rounded-xl p-6 border border-gray-800/50 overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    onClick={() =>
                      setActiveSkill(activeSkill === index ? null : index)
                    }
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-bold text-white">{skill.name}</h4>
                      <span className="bg-gray-800 px-2 py-1 rounded-md text-xs font-medium text-white">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>

                    <AnimatePresence>
                      {activeSkill === index && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm p-6 flex flex-col items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h4 className="font-bold text-xl text-white mb-2">
                            {skill.name}
                          </h4>
                          <p className="text-gray-300 text-sm mb-4 text-center">
                            {skill.name === "React" &&
                              "Building interactive UIs with reusable components"}
                            {skill.name === "TypeScript" &&
                              "Type-safe development for more reliable code"}
                            {skill.name === "Next.js" &&
                              "Creating optimized, server-rendered applications"}
                            {skill.name === "Node.js" &&
                              "Backend development with JavaScript runtime"}
                            {skill.name === "Tailwind CSS" &&
                              "Utility-first approach to rapid styling"}
                            {skill.name === "Python" &&
                              "Data processing and automation scripting"}
                          </p>
                          <div
                            className={`w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}
                          >
                            <span className="text-white font-bold text-xl">
                              {skill.level}%
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fun facts with flip animation */}
            <motion.div
              className="bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-indigo-900/30 rounded-xl p-8 backdrop-blur-sm border border-purple-800/30 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Fun Facts
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Built a 3D printer from scratch—now it prints better than my handwriting.",
                  "Started with cat litter automation, ended up debugging React at 2 AM. Life escalated quickly.",
                  "My coffee consumption has a direct correlation with the number of Chrome tabs open.",
                  "I thought ‘npm install’ would fix my life. It didn’t, but it did break my project.",
                ].map((fact, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900/60 rounded-lg p-4 border border-gray-800/50 hover:border-purple-500/40 hover:bg-gray-900/80 transition-all"
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      z: 20,
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <p className="text-gray-300 font-medium">{fact}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 3D Floating Spheres with Quotes */}
            <div className="relative h-[400px] my-16">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-8 text-center">
                My Guiding Principles
              </h3>

              {/* 3D Orbiting Spheres */}
              <div className="absolute inset-0 perspective-1000 flex items-center justify-center overflow-hidden">
                {[
                  {
                    quote: "Learn by building",
                    color: "from-blue-500 to-indigo-500",
                  },
                  {
                    quote: "Simplicity over complexity",
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    quote: "Details matter",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    quote: "Always be curious",
                    color: "from-orange-500 to-amber-500",
                  },
                ].map((quote, i) => {
                  const orbitRadius = 180; // Radius of orbit
                  const angle = (i / 4) * Math.PI * 2; // Distribute evenly in a circle
                  const delay = i * 0.5; // Stagger animation starts

                  return (
                    <motion.div
                      key={i}
                      className={`absolute w-32 h-32 rounded-full bg-gradient-to-br ${quote.color} flex items-center justify-center shadow-xl border border-white/10 p-2 text-center`}
                      initial={{
                        x: Math.cos(angle) * orbitRadius,
                        y: Math.sin(angle) * orbitRadius,
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={{
                        x: [
                          Math.cos(angle) * orbitRadius,
                          Math.cos(angle + Math.PI) * orbitRadius,
                          Math.cos(angle + Math.PI * 2) * orbitRadius,
                        ],
                        y: [
                          Math.sin(angle) * orbitRadius,
                          Math.sin(angle + Math.PI) * orbitRadius,
                          Math.sin(angle + Math.PI * 2) * orbitRadius,
                        ],
                        scale: 1,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 20,
                        times: [0, 0.5, 1],
                        repeat: Infinity,
                        delay: delay,
                        ease: "linear",
                      }}
                      whileHover={{
                        scale: 1.2,
                        boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      <span className="text-white font-medium text-sm">
                        {quote.quote}
                      </span>
                    </motion.div>
                  );
                })}

                {/* Central Sphere */}
                <motion.div
                  className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 flex items-center justify-center shadow-2xl border border-white/20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: 1,
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <span className="text-white font-bold text-lg px-4 text-center">
                    Passion Drives Excellence
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Call to action */}
            <motion.div
              className="text-center mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.a
                href="/contact"
                className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-medium shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Let&apos;s Connect
              </motion.a>
              <p className="text-gray-400 mt-4">
                Interested in working together? Reach out to discuss your
                project
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
