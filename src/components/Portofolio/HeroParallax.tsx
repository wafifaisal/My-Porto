import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Header } from "./Header";
import { FaGithub, FaLink } from "react-icons/fa";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { IoCode } from "react-icons/io5";
import Image from "next/image";

// ===== Types =====
interface Product {
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  bgColor: string;
  difficulty: string;
  languages: string[];
  github: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

// ===== Product Card Component =====
const ProductCard: React.FC<{
  product: Product;
  translate?: MotionValue<number>;
  isActive: boolean;
  className?: string;
}> = ({ product, translate, isActive, className = "" }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className={`group relative shrink-0 rounded-xl overflow-hidden h-[350px] w-[250px] md:w-[350px] shadow-2xl ${className} ${
        isActive ? "ring-4 ring-purple-500 ring-offset-4 ring-offset-black" : ""
      }`}
    >
      {/* Background and image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700 transform group-hover:scale-110"
        style={{
          backgroundImage: `url(${product.thumbnail})`,
          backgroundColor: product.bgColor,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
          {product.title}
        </h3>
        <p className="text-sm text-gray-300 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Difficulty Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full 
              ${
                product.difficulty === "Beginner"
                  ? "bg-green-600/40 text-green-400 border border-green-500/30"
                  : product.difficulty === "Intermediate"
                  ? "bg-yellow-600/40 text-yellow-400 border border-yellow-500/30"
                  : "bg-red-600/40 text-red-400 border border-red-500/30"
              }
            `}
          >
            {product.difficulty}
          </span>
        </div>

        {/* Languages */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.languages.map((lang) => (
            <span
              key={lang}
              className="px-2 py-1 text-xs font-medium rounded-md bg-gray-800/80 text-gray-300 border border-gray-700/50"
            >
              {lang}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-4">
          <a
            href={product.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800/70 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-colors"
          >
            <FaGithub className="text-lg text-white" />
          </a>
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800/70 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-colors"
          >
            <FaLink className="text-lg text-white" />
          </a>
        </div>
      </div>

      {/* Hover effects */}
      <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 pointer-events-none">
        <div className="absolute top-4 right-4">
          <div className="w-24 h-24 rounded-full bg-purple-500/20 animate-ping-slow" />
        </div>
        <div className="absolute bottom-20 left-4">
          <div className="w-16 h-16 rounded-full bg-blue-500/20 animate-ping-slow animation-delay-500" />
        </div>
      </div>
    </motion.div>
  );
};

// ===== Product Card Swiper Component =====
const ProductCardSwiper: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div
      className="h-[400px] w-full rounded-xl overflow-hidden group relative"
      style={{
        background: `linear-gradient(135deg, ${product.bgColor}, rgba(0,0,0,0.8))`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

      <div className="absolute inset-0 overflow-hidden z-0">
        <Image
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
          {product.title}
        </h3>

        <p className="text-sm text-gray-300 mb-5 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2">
            <HiOutlineColorSwatch className="text-purple-400" />
            <span
              className={`text-sm font-medium rounded-full px-3 py-1
                ${
                  product.difficulty === "Beginner"
                    ? "bg-green-900/30 text-green-400"
                    : product.difficulty === "Intermediate"
                    ? "bg-yellow-900/30 text-yellow-400"
                    : "bg-red-900/30 text-red-400"
                }
              `}
            >
              {product.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <IoCode className="text-blue-400" />
            <div className="flex flex-wrap gap-2">
              {product.languages.map((lang) => (
                <span
                  key={lang}
                  className="text-xs bg-gray-800/70 text-gray-300 px-2 py-1 rounded"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <a
            href={product.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </a>

          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600/60 hover:bg-purple-600/80 backdrop-blur-sm rounded-lg text-white text-sm font-medium transition-all transform hover:scale-105"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

// ===== Main Component =====
export const HeroParallax: React.FC<{ products: Product[] }> = ({
  products,
}) => {
  // State and refs
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });
  const ref = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Split products into 2 rows instead of 3
  const itemsPerRow = Math.ceil(products.length / 2);
  const firstRow = products.slice(0, itemsPerRow);
  const secondRow = products.slice(itemsPerRow);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );

  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.8, 1]),
    springConfig
  );

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY <= 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update window dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Canvas particles effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    const maxParticles = 150;

    // Set canvas dimensions
    canvas.width = windowDimensions.width;
    canvas.height = windowDimensions.height;

    class ParticleImpl implements Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;

      constructor() {
        // Use the safe windowDimensions values instead of directly accessing canvas
        this.x = Math.random() * windowDimensions.width;
        this.y = Math.random() * windowDimensions.height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;

        // Create colorful particles with a purple/blue theme
        const hue = Math.random() * 60 + 220; // 220-280 range (purple to blue)
        this.color = `hsl(${hue}, 80%, 70%)`;
        this.alpha = Math.random() * 0.6 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Safely wrap around edges using windowDimensions
        if (this.x > windowDimensions.width) this.x = 0;
        if (this.x < 0) this.x = windowDimensions.width;
        if (this.y > windowDimensions.height) this.y = 0;
        if (this.y < 0) this.y = windowDimensions.height;

        // Slowly change alpha for twinkling effect
        this.alpha += Math.random() * 0.02 - 0.01;
        if (this.alpha < 0.1) this.alpha = 0.1;
        if (this.alpha > 0.7) this.alpha = 0.7;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new ParticleImpl());
    }

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      // Add connecting lines between nearby particles for network effect
      particles.forEach((p1, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
          );

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(120, 110, 255, ${
              0.1 * (1 - distance / 100)
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    // Start animation
    const animationId = requestAnimationFrame(animate);

    // Handle window resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = windowDimensions.width;
        canvas.height = windowDimensions.height;
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [windowDimensions]); // React to changes in windowDimensions

  return (
    <div
      ref={ref}
      className="h-[500vh] md:h-[350vh] pt-10 overflow-hidden antialiased relative flex flex-col [perspective:1000px] [transform-style:preserve-3d] bg-gradient-to-b from-[#0a0a1a] via-[#131328] to-[#1a1a2e] text-white"
    >
      {/* Background canvas effect */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />

      {/* Header */}
      <Header />

      {/* Main content container */}
      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity, scale }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Title */}
        <motion.div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold backdrop-blur-sm z-30"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">
              Website Development
            </span>
          </motion.h2>

          <motion.p
            className="mt-6 max-w-2xl mx-auto text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building modern, responsive, and feature-rich web applications
          </motion.p>
        </motion.div>

        {/* Swiper for scrolled state */}
        {!isAtTop ? (
          <div className="container mx-auto mt-10">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={1000}
              loop={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="mx-auto mb-16"
            >
              {products.slice(0, 8).map((product) => (
                <SwiperSlide
                  key={product.title}
                  className="max-w-md mx-auto my-8 transition-all duration-500"
                >
                  <ProductCardSwiper product={product} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Product details when scrolled */}
            <AnimatePresence mode="wait">
              <motion.div
                key={products[activeIndex]?.title || "default"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-10 px-6 md:px-10 max-w-4xl mx-auto"
              >
                {products[activeIndex] && (
                  <div className="bg-gradient-to-br from-[#1f1f3f] via-[#2c2c4c] to-[#12121e] rounded-xl shadow-xl border border-indigo-900/30 p-8 backdrop-blur-md">
                    <div className="space-y-6">
                      {/* Title with gradient */}
                      <h3 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400">
                        {products[activeIndex].title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-lg">
                        {products[activeIndex].description}
                      </p>

                      {/* Stats in cards */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        {/* Difficulty card */}
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-indigo-900/20">
                          <h4 className="text-gray-400 text-sm mb-2">
                            Difficulty
                          </h4>
                          <p
                            className={`px-3 py-1 text-sm font-semibold rounded-full inline-block ${
                              products[activeIndex].difficulty === "Beginner"
                                ? "bg-green-600/20 text-green-400"
                                : products[activeIndex].difficulty ===
                                  "Intermediate"
                                ? "bg-yellow-600/20 text-yellow-400"
                                : "bg-red-600/20 text-red-400"
                            }`}
                          >
                            {products[activeIndex].difficulty}
                          </p>
                        </div>

                        {/* Languages card */}
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-indigo-900/20">
                          <h4 className="text-gray-400 text-sm mb-2">
                            Languages
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {products[activeIndex].languages.map((language) => (
                              <span
                                key={language}
                                className="bg-indigo-900/60 text-indigo-300 px-3 py-1 text-xs font-medium rounded-lg"
                              >
                                {language}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* GitHub card */}
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-indigo-900/20">
                          <h4 className="text-gray-400 text-sm mb-2">GitHub</h4>
                          <a
                            href={products[activeIndex].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all"
                          >
                            <FaGithub className="text-lg" />
                            <span className="text-sm font-medium truncate">
                              {products[activeIndex].github
                                .replace("https://", "")
                                .replace("www.", "")}
                            </span>
                          </a>
                        </div>
                      </div>

                      {/* Action button */}
                      <div className="mt-8 flex justify-center">
                        <motion.a
                          href={products[activeIndex].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-medium shadow-lg hover:shadow-purple-500/20 transition-all"
                        >
                          View Project
                        </motion.a>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* Cards in 2 rows when at top instead of 3 */
          <>
            {/* First row - right to left */}
            <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 md:space-x-8 lg:space-x-10 mb-20 overflow-visible">
              {firstRow.map((product, index) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  className="md:scale-100 scale-90"
                  key={product.title}
                  isActive={index === activeIndex}
                />
              ))}
            </motion.div>

            {/* Second row - left to right */}
            <motion.div className="flex flex-row mb-20 space-x-6 md:space-x-8 lg:space-x-10 overflow-visible">
              {secondRow.map((product, index) => (
                <ProductCard
                  product={product}
                  translate={translateXReverse}
                  className="md:scale-100 scale-90"
                  key={product.title}
                  isActive={index + itemsPerRow === activeIndex}
                />
              ))}
            </motion.div>

            {/* View more button */}
            <div className="text-center mt-10">
              <motion.a
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.a>
            </div>
          </>
        )}
      </motion.div>

      {/* Floating elements for additional visual interest */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: Math.random() * 0.3 + 0.1,
            }}
            transition={{
              duration: Math.random() * 50 + 30,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="absolute w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
          />
        ))}
      </div>
    </div>
  );
};
