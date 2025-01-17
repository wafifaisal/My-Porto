"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface Product {
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  bgColor: string;
  difficulty: string;
  languages: string[];
}

export const HeroParallax = ({ products }: { products: Product[] }) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef<HTMLDivElement | null>(null);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0); // Update state berdasarkan posisi scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        {!isAtTop ? (
          <>
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              modules={[Autoplay]}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {products.map((product) => (
                <SwiperSlide key={product.title}>
                  <ProductCardSwiper product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-8 text-start px-10">
              <motion.p
                className="text-sm text-gray-700"
                key={products[activeIndex]?.difficulty} // key untuk trigger animasi setiap kali difficulty berubah
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-800">
                  {products[activeIndex]?.title}
                </h3>
                <span className="font-medium">Difficulty:</span>{" "}
                <span
                  className={`
        ${
          products[activeIndex]?.difficulty === "Beginner"
            ? "bg-green-100 text-green-800"
            : ""
        }
        ${
          products[activeIndex]?.difficulty === "Intermediate"
            ? "bg-yellow-100 text-yellow-800"
            : ""
        }
        ${
          products[activeIndex]?.difficulty === "Advanced"
            ? "bg-red-100 text-red-800"
            : ""
        }
        px-2 py-1 rounded-md inline-block mt-1
      `}
                >
                  {products[activeIndex]?.difficulty}
                </span>
              </motion.p>

              <motion.p
                className="text-sm text-gray-700"
                key={products[activeIndex]?.languages.join(", ")} // key untuk trigger animasi setiap kali languages berubah
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="font-medium">Languages:</span>{" "}
                {products[activeIndex]?.languages.join(", ")}
              </motion.p>
            </div>
          </>
        ) : (
          <>
            <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
              {firstRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  key={product.title}
                />
              ))}
            </motion.div>
            <motion.div className="flex flex-row mb-20 space-x-20">
              {secondRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateXReverse}
                  key={product.title}
                />
              ))}
            </motion.div>
            <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
              {thirdRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  key={product.title}
                />
              ))}
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-black hollow-text">
        Step Into <br /> My Creative World
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        target="_blank"
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

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
  };
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-96 w-[30rem] relative flex-shrink-0 group "
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
          />
        </Link>
        <div className="absolute inset-0 h-full w-full opacity-0 bg-black pointer-events-none "></div>
        <h2 className="absolute bottom-4 left-4 text-white bg-black rounded-full bg-opacity-50 p-2 backdrop-blur-xl ">
          {product.title}
        </h2>

        {/* Back Side */}
        <div
          className={`absolute h-full w-full ${product.bgColor} text-white backface-hidden transform-rotateY-180 flex items-center justify-center rounded-xl`}
        >
          <div className="text-center px-4 ">
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
