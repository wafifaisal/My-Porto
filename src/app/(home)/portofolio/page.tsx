"use client";
import React, { useState, useEffect } from "react";
import { HeroParallax } from "@/components/Portofolio/HeroParallax";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";

export default function PortofolioPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollTarget, setScrollTarget] = useState(0);

  useEffect(() => {
    // Set target scroll saat komponen ter-mount
    setScrollTarget(window.innerHeight * 1.5);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY >= window.innerHeight * 1.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollButtonClick = () => {
    if (isScrolled) {
      // Scroll ke atas
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll ke target
      window.scrollTo({ top: scrollTarget, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`h-full duration-500 transition-transform ${
        isScrolled ? "animated-gradient" : "animated-gradient-reverse"
      }`}
    >
      <Navbar />
      <HeroParallax products={products} />

      <AnimatePresence>
        <motion.button
          key={isScrolled ? "up" : "down"}
          onClick={handleScrollButtonClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black/80 text-white shadow-xl hover:bg-black hover:scale-105 transition-transform backdrop-blur-md"
        >
          {isScrolled ? (
            <ArrowUp className="w-5 h-5" />
          ) : (
            <ArrowDown className="w-5 h-5 animate-bounce" />
          )}
        </motion.button>
      </AnimatePresence>
      <div className=" bg-gradient-to-r from-purple-600 to-blue-500 p-px rounded-2xl">
        <div className="bg-gray-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-center text-gray-300 mb-6">
            Interested in working together? I&apos;m always open to new
            opportunities and collaborations.
          </p>
          <div className="flex justify-center gap-4">
            {/* Download CV */}
            <motion.a
              href="/CV_Wafi_ATS.pdf"
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
    </div>
  );
}
