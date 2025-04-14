"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";

interface Education {
  university: string;
  degree: string;
  field: string;
  year: string;
  description: string;
  logoUrl: string;
  color: string;
  courses: string[];
}

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  logoUrl: string;
  color: string;
  technologies: string[];
}

const EducationAndExperiencePage: React.FC = () => {
  const [activeEduIndex, setActiveEduIndex] = useState<number | null>(null);
  const [activeExpIndex, setActiveExpIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<
    "education" | "experience"
  >("education");

  const educationData: Education[] = [
    {
      university: "Universitas Katolik Parahyangan",
      degree: "Bachelor of Engineering",
      field: "Electrical Engineering - Mechatronics",
      year: "2018 - 2024",
      description:
        "Studied electronics, mechanics, control systems, and informatics with a focus on IoT and robotics. Developed an AI-powered self-checkout system as a patented final project.",
      logoUrl: "/unpar.jpg", // Ganti dengan logo Unpar jika ada
      color: "from-blue-600 to-indigo-600",
      courses: [
        "Microcontroller Systems",
        "Digital Electronics",
        "Control Systems",
        "Computer Vision & AI",
        "IoT Application Development",
      ],
    },
    {
      university: "Purwadhika Digital Technology School",
      degree: "Certificate",
      field: "Full Stack Web Development",
      year: "2024-2025",
      description:
        "Completed an intensive 6-month bootcamp focusing on building responsive and modern web applications using TypeScript, React, Next.js, and Node.js.",
      logoUrl: "/pwdk.png", // Ganti dengan logo Purwadhika jika ada
      color: "from-pink-500 to-purple-600",
      courses: [
        "Frontend Development with React & Next.js",
        "Backend Development with Node.js & Express",
        "Database Design with Prisma & PostgreSQL",
        "API Integration & Authentication",
        "Full-Stack Deployment & CI/CD",
      ],
    },
  ];

  const workExperienceData: WorkExperience[] = [
    {
      company: "PT Daya Indonesia Bakti",
      position: "Junior Electrical Engineer",
      duration: "Feb 2024 - Mei 2024",
      description:
        "Worked on the development and deployment of automated systems and data logging for a microbial fuel cell project using IoT technology. Involved in both electrical panel wiring and system integration.",
      logoUrl: "/dib.png", // Ganti dengan logo perusahaan jika ada
      color: "from-green-600 to-emerald-500",
      achievements: [
        "Implemented IoT-based data logging for real-time monitoring",
        "Designed and wired electrical panels for fuel cell automation",
        "Ensured seamless integration across electrical and control systems",
      ],
      technologies: [
        "AutoCAD Electrical",
        "PLC Programming",
        "IoT",
        "Wiring",
        "Instrumentation",
      ],
    },
    {
      company: "Universitas Katolik Parahyangan (UNPAR)",
      position: "Student Laboratory Assistant",
      duration: "Sep 2023 - Jan 2024",
      description:
        "Served as Head Assistant in Mechatronics 1 practicum. Led team operations and assisted students in programming microcontrollers, building circuits, and conducting experiments.",
      logoUrl: "/unpar.jpg",
      color: "from-yellow-500 to-orange-500",
      achievements: [
        "Created and revised technical lab modules",
        "Supervised practicum sessions and provided hands-on mentoring",
        "Taught Python and circuit-building fundamentals to junior students",
      ],
      technologies: [
        "Python",
        "ESP32",
        "Arduino",
        "Soldering",
        "Circuit Design",
      ],
    },
    {
      company: "PT. Pindad Enjiniring",
      position: "Intern",
      duration: "Sep 2021 - Des 2021",
      description:
        "Assisted in sensor calibration and PCB design for an innovative chicken apartment project. Participated in mechanical assembly and system installation from prototype to deployment.",
      logoUrl: "/pindad.png",
      color: "from-gray-700 to-slate-600",
      achievements: [
        "Calibrated sensors to ensure accurate readings in field testing",
        "Designed and fabricated PCBs for automated control systems",
        "Supported panel box wiring and mechanical integration",
      ],
      technologies: [
        "PCB Design",
        "Sensor Calibration",
        "Mechanical Assembly",
        "Wiring",
        "AutoCAD",
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const expandableContentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
      },
    },
  };

  const tabVariants = {
    inactive: { y: 0 },
    active: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white py-12 px-4 md:px-8 perspective-1000">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              My Journey
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my academic and professional path through education and
              work experiences.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center mb-12"
            variants={itemVariants}
          >
            <div className="bg-gray-800 rounded-full p-1 flex items-center">
              <motion.button
                className={`px-8 py-3 rounded-full font-medium transition-colors ${
                  activeSection === "education"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "text-gray-300"
                }`}
                onClick={() => setActiveSection("education")}
                variants={tabVariants}
                animate={activeSection === "education" ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Education
              </motion.button>
              <motion.button
                className={`px-8 py-3 rounded-full font-medium transition-colors ${
                  activeSection === "experience"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "text-gray-300"
                }`}
                onClick={() => setActiveSection("experience")}
                variants={tabVariants}
                animate={activeSection === "experience" ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Experience
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            key={activeSection}
            custom={activeSection === "education" ? -1 : 1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {activeSection === "education" ? (
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                variants={containerVariants}
              >
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 rounded-2xl overflow-hidden transform-gpu transition-all duration-300 cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                    whileHover={{
                      scale: 1.02,
                      rotateY: 5,
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    onClick={() =>
                      setActiveEduIndex(activeEduIndex === index ? null : index)
                    }
                    variants={itemVariants}
                  >
                    <div className={`h-16 bg-gradient-to-r ${edu.color}`}></div>
                    <div className="p-6 relative">
                      <motion.div
                        className="absolute -top-12 left-8 bg-gray-800 p-2 rounded-xl shadow-lg"
                        whileHover={{ rotate: 5 }}
                      >
                        <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                          <motion.img
                            src={edu.logoUrl}
                            alt={`${edu.university} logo`}
                            className="w-14 h-14 object-contain"
                            whileHover={{ scale: 1.1 }}
                          />
                        </div>
                      </motion.div>

                      <div className="pt-6">
                        <h3 className="text-2xl font-bold mt-4">
                          {edu.university}
                        </h3>
                        <div className="flex items-center mt-2">
                          <span className="text-lg font-semibold text-purple-400">
                            {edu.degree}
                          </span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-lg text-gray-300">
                            {edu.field}
                          </span>
                        </div>
                        <div className="mt-1 text-gray-400">{edu.year}</div>
                        <p className="mt-4 text-gray-300">{edu.description}</p>

                        <motion.div
                          className="mt-4"
                          initial="hidden"
                          animate={
                            activeEduIndex === index ? "visible" : "hidden"
                          }
                          variants={expandableContentVariants}
                        >
                          <h4 className="font-semibold text-lg mb-2 text-blue-300">
                            Key Courses
                          </h4>
                          <ul className="pl-5 space-y-1">
                            {edu.courses.map((course, idx) => (
                              <motion.li
                                key={idx}
                                className="text-gray-300 list-disc"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                {course}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          className="mt-4 text-blue-400 flex items-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <span>
                            {activeEduIndex === index
                              ? "Hide Courses"
                              : "Show Courses"}
                          </span>
                          <svg
                            className={`w-5 h-5 ml-1 transition-transform duration-300 ${
                              activeEduIndex === index ? "rotate-180" : ""
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div className="space-y-10" variants={containerVariants}>
                {workExperienceData.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 rounded-2xl overflow-hidden transform-gpu transition-all duration-300"
                    style={{ transformStyle: "preserve-3d" }}
                    whileHover={{
                      scale: 1.01,
                      rotateX: 2,
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    variants={itemVariants}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div
                        className={`w-full md:w-1/4 bg-gradient-to-br ${exp.color} p-6 flex flex-col justify-between`}
                      >
                        <div>
                          <div className="w-16 h-16 rounded-full bg-white p-2 flex items-center justify-center overflow-hidden shadow-lg">
                            <motion.img
                              src={exp.logoUrl}
                              alt={`${exp.company} logo`}
                              className="w-12 h-12 object-contain"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            />
                          </div>
                          <h3 className="text-2xl font-bold mt-4 text-white">
                            {exp.company}
                          </h3>
                          <div className="text-lg text-white opacity-90 mt-1">
                            {exp.position}
                          </div>
                          <div className="text-sm text-white opacity-75 mt-1">
                            {exp.duration}
                          </div>
                        </div>

                        <motion.button
                          className="mt-4 text-white flex items-center self-start"
                          onClick={() =>
                            setActiveExpIndex(
                              activeExpIndex === index ? null : index
                            )
                          }
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>
                            {activeExpIndex === index
                              ? "Hide Details"
                              : "View Details"}
                          </span>
                          <svg
                            className={`w-5 h-5 ml-1 transition-transform duration-300 ${
                              activeExpIndex === index ? "rotate-180" : ""
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </motion.button>
                      </div>

                      <div className="w-full md:w-3/4 p-6">
                        <p className="text-gray-300">{exp.description}</p>

                        <motion.div
                          className="mt-6"
                          initial="hidden"
                          animate={
                            activeExpIndex === index ? "visible" : "hidden"
                          }
                          variants={expandableContentVariants}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-lg mb-3 text-blue-300">
                                Key Achievements
                              </h4>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, idx) => (
                                  <motion.li
                                    key={idx}
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                  >
                                    <svg
                                      className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                    <span className="text-gray-300">
                                      {achievement}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold text-lg mb-3 text-blue-300">
                                Technologies Used
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, idx) => (
                                  <motion.span
                                    key={idx}
                                    className={`px-3 py-1 rounded-full text-sm bg-opacity-20 bg-gradient-to-r ${exp.color} text-white`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                  >
                                    {tech}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-px rounded-2xl">
              <div className="bg-gray-800 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-4 text-center">
                  Let&apos;s Connect
                </h2>
                <p className="text-center text-gray-300 mb-6">
                  Interested in working together? I&apos;m always open to new
                  opportunities and collaborations.
                </p>
                <div className="flex justify-center gap-4">
                  {/* Download CV */}
                  <motion.a
                    href="/CV_Wafi_ATS.pdf" // Pastikan file CV disimpan di public folder
                    download
                    className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-medium text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download CV
                  </motion.a>

                  {/* Contact Me */}
                  <Link href="/contact" passHref>
                    <motion.button
                      className="px-8 py-3 bg-gray-700 rounded-xl font-medium text-white"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Me
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationAndExperiencePage;
