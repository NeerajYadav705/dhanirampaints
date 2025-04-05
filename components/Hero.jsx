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
      {/* First Section - Right aligned, no yellow text */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          showSecondSection ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src="/assets/homepage1.png"
          alt="Crafting Coatings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-end pr-[10%]">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            className="text-right"
          >
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-9xl font-extralight leading-none text-white"
              style={{ fontFamily: "Lancelot" }}
            >
              Crafting Coatings,
            </motion.div>
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-9xl leading-none text-white mt-2"
              style={{ fontFamily: "lancelot" }}
            >
              Cultivating Connections
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Second Section - Updated to match image exactly */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          showSecondSection ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/assets/homepage2.png"
          alt="Premium Paint Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0  flex items-center pl-[5%]">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            className="text-left"
          >
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-9xl text-white"
              style={{ fontFamily: "lancelot" }}
            >
              Premium <span className="text-[#ffcd05]">paint</span> Solutions
            </motion.div>
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-9xl  leading-none text-white mt-2"
              style={{ fontFamily: "lancelot" }}
            >
              for every industry
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
