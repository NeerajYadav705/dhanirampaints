"use client";
import React from "react";
import { motion } from "framer-motion";

const Tagline = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full py-16 md:py-24 bg-gradient-to-b from-[#f9f9f9] to-white"
    >
      <div
        className="max-w-5xl mx-auto px-6 "
        style={{ fontFamily: "Berkshire" }}
      >
        <div className="text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-4xl font-medium text-[#6e260e] tracking-tight leading-tight"
          >
             Building Partnerships,{" "}
            <motion.span
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="relative z-10">One Layer at a Time ! </span>
            </motion.span>
          </motion.h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Tagline;
