"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Precoat = () => {
  const products = [
    {
      id: 1,
      name: "White Putty",
      description: "High-quality white putty for smooth wall finishes. Our premium putty provides excellent adhesion, workability, and whiteness. It fills cracks and imperfections effectively, creating a perfect base for paint application. Formulated with advanced polymers for enhanced durability and water resistance.",
      features: [
        "Superior whiteness and brightness",
        "Excellent adhesion to surfaces",
        "Smooth and easy application",
        "Water resistant formulation",
        "Reduces paint consumption",
        "Long-lasting finish"
      ],
      image: "/assets/precoat/white-putty.jpg",
      color: "#6B7280" // Gray
    },
    {
      id: 2,
      name: "White Cement",
      description: "Premium white cement for construction and decorative applications. Our white cement offers high strength, consistent whiteness, and excellent workability. Ideal for architectural concrete, terrazzo, tile grout, and decorative plaster work where aesthetic appearance is crucial.",
      features: [
        "High compressive strength",
        "Consistent whiteness",
        "Excellent workability",
        "Faster setting time",
        "Weather resistant",
        "Versatile applications"
      ],
      image: "/assets/precoat/white-cement.jpg",
      color: "#9CA3AF" // Light Gray
    }
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const tabVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="relative h-[40vh] sm:h-[70vh] w-full"
      >
        <div className="absolute inset-0 bg-black/50 z-10 flex items-end pb-8 sm:pb-16 md:pb-24 justify-center">
          <motion.h1
            variants={slideUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4"
          >
            Precoat Solutions
          </motion.h1>
        </div>
        <Image
          src="/assets/precoat/hero-bg.jpg"
          alt="Precoat Solutions"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: index * 0.1 }}
            className="group mb-10 sm:mb-12"
          >
            {/* Animated Tab */}
            <motion.div
              variants={tabVariants}
              initial="rest"
              whileHover="hover"
              style={{ backgroundColor: product.color }}
              className="w-full sm:w-fit px-4 sm:px-6 py-2 sm:py-3 rounded-t-lg shadow-sm"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center sm:text-left px-2 sm:px-16">
                {product.name}
              </h3>
            </motion.div>

            {/* Card Content */}
            <div
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-b-lg rounded-tr-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300`}
              style={{ borderTopColor: product.color }}
            >
              {/* Text Content */}
              <div className="w-full md:w-1/2">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <svg 
                        className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" 
                        style={{ color: product.color }} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full h-48 sm:h-64 md:h-72 rounded-lg overflow-hidden bg-gray-100 shadow-inner"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Precoat;