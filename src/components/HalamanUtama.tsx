"use client";

import ProfileGrid from "@/components/Grid/Profile";
import { ThreeDQuestionMark } from "./3D-Card";
import Image from "next/image";
import styles from "../style/3D.module.css";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  Variants,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { CardItem } from "@/types/types";

interface EnhancedCardItem extends CardItem {
  glow: string;
}

// Enhanced card data with richer visuals and descriptions
const cardsTop: EnhancedCardItem[] = [
  {
    href: "/about",
    title: "ABOUT",
    image: "/keyboard.png",
    width: 300,
    gradient: {
      default: "linear-gradient(135deg, #ff512f, #dd2476)",
      hover: "linear-gradient(135deg, #ff7043, #dd2476)",
    },
    glow: "#ff512f",
    description:
      "Passionate, dedicated, and always curious— let me share my story.",
  },
  {
    href: "/portofolio",
    title: "PORTOFOLIO",
    image: "/space-ship.png",
    width: 250,
    gradient: {
      default: "linear-gradient(135deg, #1e3a8a, #9333ea)",
      hover: "linear-gradient(135deg, #2980b9, #8e44ad)",
    },
    glow: "#9333ea",
    description: "Take a closer look at what I've created and accomplished.",
  },
];

const cardsBottom: EnhancedCardItem[] = [
  {
    href: "/education",
    title: "EDUCATION",
    image: "/graduated.png",
    width: 250,
    gradient: {
      default: "linear-gradient(135deg, #0C63E7, #03045e)",
      hover: "linear-gradient(135deg, #4e73df, #56ccf2)",
    },
    glow: "#0C63E7",
    description: "A journey of learning and growth that shaped my expertise.",
  },
  {
    href: "/skills",
    title: "SKILLS",
    image: "/typescript.png",
    width: 250,
    gradient: {
      default: "linear-gradient(135deg, #f7a800, #ff4e50)",
      hover: "linear-gradient(135deg, #ff6347, #ff9966)",
    },
    glow: "#f7a800",
    description:
      "Here's what I bring to the table, skills that turn ideas into reality.",
  },
  {
    href: "/contact",
    title: "CONTACT",
    image: "/mail.png",
    width: 250,
    gradient: {
      default: "linear-gradient(135deg, #40916c, #1b4332)",
      hover: "linear-gradient(135deg, #40916c, #52b788)",
    },
    glow: "#40916c",
    description:
      "Let's stay connected! Feel free to reach out and start a conversation.",
  },
];

// Enhanced animations
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.04, 0.62, 0.23, 0.98],
      delay: i * 0.1,
    },
  }),
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

interface SparkleProps {
  id: string;
  size: number;
  style: React.CSSProperties;
}

// Magic sparkle effect component
function Sparkles({ children }: { children: React.ReactNode }) {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const sparkle = generateSparkle();
      setSparkles((sparkles) => [...sparkles, sparkle]);
      setTimeout(() => {
        setSparkles((sparkles) => sparkles.filter((s) => s.id !== sparkle.id));
      }, 500);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  const generateSparkle = (): SparkleProps => ({
    id: String(Date.now()),
    size: Math.random() * 15 + 10,
    style: {
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      opacity: Math.random() + 0.5,
      transform: `rotate(${Math.random() * 360}deg)`,
      color: `hsl(${Math.random() * 360}, 100%, 65%)`,
    },
  });

  return (
    <span className="relative inline-block">
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="absolute pointer-events-none select-none z-[1]"
          style={sparkle.style}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          ✨
        </motion.span>
      ))}
      <span className="relative z-[2]">{children}</span>
    </span>
  );
}

interface EnhancedCardProps {
  card: EnhancedCardItem;
  index: number;
  delayFactor?: number;
}

// Enhanced 3D mouse tracking card
function EnhancedCard({ card, index, delayFactor = 0 }: EnhancedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.div
      ref={cardRef}
      className="relative flex items-center justify-center text-start overflow-hidden rounded-3xl perspective-1000 group transform-gpu"
      style={{
        transformStyle: "preserve-3d",
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      variants={fadeInUp}
      custom={index + delayFactor}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 20px 30px -10px rgba(0, 0, 0, 0.2), 0 0 25px 5px rgba(${parseInt(
          card.glow.slice(1, 3),
          16
        )}, ${parseInt(card.glow.slice(3, 5), 16)}, ${parseInt(
          card.glow.slice(5, 7),
          16
        )}, 0.1)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        resetPosition();
      }}
    >
      <ThreeDQuestionMark
        text={card.title}
        defaultBackground={card.gradient.default}
        hoverBackground={card.gradient.hover}
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-6">
          <motion.div
            className="relative -my-10"
            animate={{
              y: hovered ? [-3, 3, -3] : 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full filter blur-xl opacity-50"
              style={{
                background: card.gradient.default,
                transform: "translateZ(-50px)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <Image
              src={card.image}
              alt={card.title}
              width={card.width}
              height={card.width}
              className="max-w-full h-auto relative drop-shadow-2xl"
              style={{ transform: "translateZ(20px)" }}
            />
          </motion.div>

          <motion.h2
            className={`${styles.cardText} text-xl lg:text-2xl font-bold tracking-wider mt-4 backdrop-blur-sm px-4 py-1 rounded-full `}
            style={{ transform: "translateZ(40px)" }}
          >
            {card.title}
          </motion.h2>

          <motion.div
            className="border-b-2 border-white/60 w-[90%] my-3"
            style={{ transform: "translateZ(30px)" }}
            animate={{
              width: hovered ? "95%" : "50%",
              opacity: hovered ? 1 : 0.6,
            }}
            transition={{ duration: 0.4 }}
          />

          <motion.p
            className="text-white/90 font-sans text-sm lg:text-base text-center px-2 leading-relaxed"
            style={{ transform: "translateZ(30px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: hovered ? 1 : 0.7,
              y: hovered ? 0 : 10,
            }}
            transition={{ duration: 0.4 }}
          >
            {card.description}
          </motion.p>
        </div>
      </ThreeDQuestionMark>

      {/* Interactive corner elements */}
      <motion.div
        className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/60 rounded-tr-md"
        style={{ transform: "translateZ(35px)" }}
        animate={{ opacity: hovered ? 1 : 0.3 }}
      />
      <motion.div
        className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/60 rounded-bl-md"
        style={{ transform: "translateZ(35px)" }}
        animate={{ opacity: hovered ? 1 : 0.3 }}
      />
    </motion.div>
  );

  return card.href ? (
    <Link key={index} href={card.href} className="block h-full">
      {content}
    </Link>
  ) : (
    content
  );
}

interface LetterItem {
  char: string;
  color: string;
}

function GeometricWafiLoader() {
  const letters: LetterItem[] = [
    { char: "W", color: "#FF6B6B" },
    { char: "A", color: "#FFD93D" },
    { char: "F", color: "#6BCB77" },
    { char: "I", color: "#4D96FF" },
  ];

  const text = "Welcome to my Portofolio";

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center z-[9999] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] },
      }}
    >
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 blur-md"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      <Sparkles>
        <motion.h1
          className="text-3xl lg:text-5xl font-bold text-center text-white mb-12 tracking-wider"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {text.split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mx-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </Sparkles>

      <div className="relative grid grid-cols-4 gap-8 mt-8 items-center justify-center">
        {letters.map((item, i) => (
          <motion.div
            key={i}
            className="relative flex items-center justify-center cursor-pointer"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.4, duration: 1, type: "spring" }}
          >
            <motion.div
              className="absolute w-40 h-40 rounded-full bg-opacity-40 backdrop-blur-lg shadow-xl"
              style={{
                backgroundColor: item.color,
                filter: "blur(50px) saturate(1.8)",
              }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.6, opacity: 0.35 }}
              transition={{
                delay: i * 0.3,
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <motion.div
              className="text-7xl font-black tracking-widest relative z-10 bg-white/10 border border-white/50 rounded-2xl shadow-lg backdrop-blur-xl text-center px-8 py-4"
              style={{ color: item.color }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.4 + 0.2, duration: 0.6 }}
              whileHover={{
                scale: 1.1,
                rotate: i % 2 === 0 ? 5 : -5,
                boxShadow: `0 0 30px ${item.color}`,
              }}
            >
              {item.char}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="h-2 w-32 bg-white/20 rounded-full overflow-hidden"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 3.5,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Main component
export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <GeometricWafiLoader />
      ) : (
        <motion.div
          key="content"
          className="min-h-screen py-10 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-100 via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-gray-900 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient orbs */}
            <motion.div
              className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-blue-400/20 dark:bg-blue-500/10 blur-[80px]"
              animate={{
                x: [0, 30, 0],
                y: [0, -30, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] rounded-full bg-purple-400/10 dark:bg-purple-500/10 blur-[60px]"
              animate={{
                x: [0, -20, 0],
                y: [0, 20, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzBoMnYyaC0ydi0yem0wLTEyaDJ2MmgtMnYtMnptMTIgMGgydjJoLTJ2LTJ6bTAgMTJoMnYyaC0ydi0yem0tMi0xMmgydjJoLTJ2LTJ6bTAgMTJoMnYyaC0ydi0yek0xMiAzMGgydjJoLTJ2LTJ6bTAtMTJoMnYyaC0ydi0yem0xMiAwaDJ2MmgtMnYtMnptMCAxMmgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 dark:opacity-20" />

            {/* Mouse follower */}
            <motion.div
              className="pointer-events-none absolute w-[300px] h-[300px] rounded-full hidden md:block"
              style={{
                background:
                  "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(59,130,246,0) 70%)",
                x: mousePosition.x - 150,
                y: mousePosition.y - 150,
              }}
              transition={{ type: "spring", damping: 20 }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Header text */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Sparkles>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-400">
                  Wafi&apos;s Portofolio
                </h1>
              </Sparkles>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Explore my world of creativity, skills, and achievements
              </p>
            </motion.div>

            {/* Top row with profile and cards */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[300px]"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeInUp} custom={0} className="h-full">
                <ProfileGrid />
              </motion.div>

              {cardsTop.map((card, index) => (
                <EnhancedCard
                  card={card}
                  index={index}
                  key={index}
                  delayFactor={1}
                />
              ))}
            </motion.div>

            {/* Bottom row of cards */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 min-h-[300px]"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {cardsBottom.map((card, index) => (
                <EnhancedCard
                  card={card}
                  index={index}
                  key={index}
                  delayFactor={2}
                />
              ))}
            </motion.div>

            {/* Footer decorative element */}
            <motion.div
              className="w-full flex justify-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.div
                className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                whileHover={{ width: 200, transition: { duration: 0.5 } }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
