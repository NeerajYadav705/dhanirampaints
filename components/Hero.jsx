"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const [showSecondSection, setShowSecondSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSecondSection(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative h-screen w-full">
      {/* First Section */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          showSecondSection ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src="/assets/hero1.jpg"
          alt="Innovative Paints"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-end justify-end pb-[10%] pr-[10%]">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            className="text-right text-white max-w-xl"
          >
            <motion.h1
              variants={textVariants}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-2 leading-tight"
            >
              QUALITY YOU CAN TRUST,
            </motion.h1>
            <motion.h1
              variants={textVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              DURABILITY YOU DESERVE
            </motion.h1>
          </motion.div>
        </div>
      </div>

      {/* Second Section */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          showSecondSection ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/assets/hero2.jpg"
          alt="Premium Coatings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-end justify-end pb-[10%] pr-[10%]">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            className="text-right text-white max-w-xl"
          >
            <motion.h1
              variants={textVariants}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-2 leading-tight"
            >
              PREMIUM COATINGS THAT
            </motion.h1>
            <motion.h1
              variants={textVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              STAND THE TEST OF TIME
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;