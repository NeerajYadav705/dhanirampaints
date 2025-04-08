"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export function ScrollToProductsButton() {
  const router = useRouter();

  const navigateToProducts = () => {
    router.push('/product/industrial');
  };

  return (
    <motion.div 
      className="relative flex flex-col items-center w-full my-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated divider line */}
      <motion.div 
        className="w-full max-w-xs h-px bg-gray-200 mb-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      {/* Animated button */}
      <motion.button
        onClick={navigateToProducts}
        className="px-8 py-4 bg-[#40B5AD] text-white rounded-xl shadow-lg hover:bg-[#35938c] 
        flex items-center gap-3 text-lg font-medium cursor-pointer"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <span>Explore Our Products</span>
        <svg 
          className="w-5 h-5"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </motion.div>
  );
}