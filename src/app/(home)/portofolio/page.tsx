"use client";
import React, { useState, useEffect } from "react";
import { HeroParallax } from "@/components/Portofolio/HeroParallax";
import Certificate from "@/components/Portofolio/certtificate";
import { products } from "@/data/products";

export default function PortofolioPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      if (scrollHeight >= window.innerHeight * 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`h-full duration-500 transition-transform   ${
        isScrolled ? "animated-gradient" : " animated-gradient-reverse"
      }`}
    >
      <HeroParallax products={products} />
      <Certificate />
    </div>
  );
}
