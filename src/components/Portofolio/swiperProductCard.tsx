"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export const ProductCardSwiper = ({
  product,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
    bgColor: string;
    difficulty: string;
    languages: string[];
    github: string;
  };
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const bgColorClass = {
    "bg-yellow-900": "custom-bg-yellow",
    "bg-orange-500": "custom-bg-orange",
    "bg-blue-800": "custom-bg-blue",
    "bg-green-500": "custom-bg-green",
  }[product.bgColor];

  return (
    <div
      className="h-96 w-[30rem] relative flex-shrink-0 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative h-full w-full transition-transform duration-1000 transform-style-preserve-3d"
        animate={{
          rotateY: isHovered ? 180 : 0,
        }}
        transition={{
          duration: 0.1,
          ease: [0.25, 0.45, 0.45, 0.95],
        }}
      >
        <Link
          href={product.link}
          target="_blank"
          className="block backface-hidden"
        >
          <Image
            src={product.thumbnail}
            height="600"
            width="600"
            className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl"
            alt={product.title}
            priority
          />
        </Link>
        <div className="absolute inset-0 h-full w-full opacity-0 bg-black pointer-events-none"></div>
        <h2 className="absolute bottom-4 left-4 text-white bg-black rounded-full bg-opacity-50 p-2 backdrop-blur-xl">
          {product.title}
        </h2>

        <div
          className={`absolute h-full w-full ${bgColorClass} text-white backface-hidden transform-rotateY-180 flex items-center justify-center rounded-xl`}
        >
          <div className="text-center px-4">
            <h2 className="text-lg font-bold mb-4">{product.title}</h2>
            <p className="text-sm">{product.description}</p>
            <Link
              href={product.link}
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-white text-black rounded-full"
            >
              See It in Action
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
