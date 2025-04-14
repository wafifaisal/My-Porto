import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  thumbnail: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  technologies: string[];
  github: string;
  link: string;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const difficultyColor = {
    Beginner: "bg-green-600/30 text-green-400 border-green-500/40",
    Intermediate: "bg-yellow-600/30 text-yellow-400 border-yellow-500/40",
    Advanced: "bg-red-600/30 text-red-400 border-red-500/40",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-xl bg-gray-900/80 backdrop-blur-sm border border-gray-800 h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

        <div className="absolute top-4 right-4">
          <div
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
              difficultyColor[project.difficulty]
            } border`}
          >
            {project.difficulty}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium rounded-md bg-gray-800 text-gray-300 border border-gray-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaGithub className="text-lg" />
            <span className="text-sm">GitHub</span>
          </a>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-all"
          >
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "HYPETIX (Event Ticket Management Web App)",
      description:
        "A cutting-edge ticketing platform developed with React and TypeScript, utilizing both Server-Side Rendering and Static Site Generation (SSG) approaches. The backend is powered by Node.js and Express, with PostgreSQL for data storage.",
      thumbnail: "/images/projects/etix.jpg",
      difficulty: "Advanced",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Prisma ORM",
        "Express.js",
        "Vercel",
      ],
      github: "https://github.com/username/etix",
      link: "https://etix-demo.vercel.app",
    },
    {
      title: "Dominoes",
      description:
        "An interactive web application offering a seamless domino-playing experience directly in your browser. Leveraging technologies like React, Vue, and CSS, this project ensures a responsive and user-friendly gaming platform.",
      thumbnail: "/images/projects/dominoes.jpg",
      difficulty: "Beginner",
      technologies: ["React", "Vue", "CSS"],
      github: "https://github.com/username/dominoes",
      link: "https://dominoes-game.vercel.app",
    },
    {
      title: "Purwadhika Portfolio",
      description:
        "A modern portfolio website showcasing projects and skills. Built with responsive design principles and optimized for all devices.",
      thumbnail: "/images/projects/portfolio.jpg",
      difficulty: "Intermediate",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "GitHub"],
      github: "https://github.com/username/portfolio",
      link: "https://portfolio-demo.vercel.app",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#050505] -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90" />

        {/* Purple falling particles */}
        {Array.from({ length: 15 }).map((_, index) => (
          <motion.div
            key={index}
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
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400">
              Website Development
            </span>
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Showcasing my expertise in creating modern, responsive, and
            feature-rich web applications.
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View more projects button */}
        <div className="text-center mt-12">
          <motion.a
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};
