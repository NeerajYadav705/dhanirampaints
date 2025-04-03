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
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#2a2a2a] tracking-tight leading-tight"
          >
            Building partnership{' '}
            <motion.span 
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="relative z-10">one layer at a time</span>
              <span className="absolute bottom-0 left-0 h-3 w-full bg-[#E21138]/20 -rotate-1 z-0"></span>
            </motion.span>
          </motion.h2>

          {/* Decorative elements */}
          <div className="flex justify-center mt-12 space-x-4">
            {['#6E260E', '#E21138', '#40B5AD', '#009E61', '#EC5800'].map((color, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                className="h-2 w-8 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Tagline;