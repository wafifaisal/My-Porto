"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Header } from "./Header";
import { ProductCard } from "./productCard";
import { ProductCardSwiper } from "./swiperProductCard";

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
      className="h-[270vh] py-96 md:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] "
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
        <motion.div
          className="fixed -top-[150px] left-0 w-full"
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: scrollYProgress.get() >= 0.2 ? 1 : 0,
            y: scrollYProgress.get() >= 0.2 ? 0 : -50,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-center rounded-md hollow-text-porto relative -z-10 md:text-[70px] text-[50px] lg:text-[70px] xl:text-[100px]">
            Website Development
          </h2>
        </motion.div>
        {!isAtTop ? (
          <>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              modules={[Autoplay]}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={2000}
              loop={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              onSlideChangeTransitionStart={(swiper) =>
                setActiveIndex(swiper.realIndex)
              }
            >
              {products.map((product, index) => (
                <SwiperSlide
                  key={product.title}
                  className={`relative transition-transform duration-500 ${
                    index === activeIndex
                      ? "scale-110 shadow-lg px-[6px] py-1 rounded-xl"
                      : "scale-90"
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-2xl border-4 ${
                      index === activeIndex
                        ? "border-purple-500 animate-border-slide"
                        : "border-transparent"
                    }`}
                  ></div>
                  <ProductCardSwiper product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-8 text-start px-10">
              <div className="mt-8 px-10 py-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-lg border border-gray-700">
                <motion.div
                  key={products[activeIndex]?.difficulty}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400">
                    {products[activeIndex]?.title}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="text-lg font-medium text-gray-300">
                      Difficulty:
                    </span>
                    <span
                      className={`${
                        products[activeIndex]?.difficulty === "Beginner"
                          ? "bg-green-600/20 text-green-400"
                          : products[activeIndex]?.difficulty === "Intermediate"
                          ? "bg-yellow-600/20 text-yellow-400"
                          : "bg-red-600/20 text-red-400"
                      } px-3 py-1 text-sm font-semibold rounded-full`}
                    >
                      {products[activeIndex]?.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-lg font-medium text-gray-300">
                      Languages:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {products[activeIndex]?.languages.map((language) => (
                        <span
                          key={language}
                          className="bg-gray-700 text-gray-300 px-3 py-1 text-sm font-medium rounded-lg shadow"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.p
                className="text-sm text-gray-200"
                key={products[activeIndex]?.languages.join(", ")}
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
