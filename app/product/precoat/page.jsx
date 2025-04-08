"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Precoat = () => {
  const products = [
    {
      id: 1,
      name: "White Putty",
      description: "White Putty is a smooth, water-based wall preparation material used to level and fill minor imperfections on interior and exterior plastered surfaces. It provides a uniform, white base for paint, improving adhesion and finish while enhancing durability. Enriched with fine minerals and polymers, it offers excellent bonding and is also used for creating light textures and artistic wall shapes before topcoats.",
      features: [
        "Smooth & Uniform Finish",
        "Strong Adhesion to Plaster & Masonry",
        "Ideal Base for Paints",
        "Crack Resistance",
        "Suitable for Interior & Exterior Walls",
        "Can Be Used for Light Textures & Shapes",
      ],
      image: "/assets/White_Putty.jpg",
      color: "#E21138" // Dhaniram red
    },
    {
      id: 2,
      name: "White Cement",
      description: "White Cement is a refined form of cement made from raw materials with low iron content, resulting in its distinct white color and high brightness. It is used for architectural finishes, tile grouting, and surface leveling on plaster, concrete, and decorative works. Chemically composed for high compressive strength and durability, it bonds firmly with masonry and offers a clean, uniform base.While white cement is stronger and used for structural or base applications, white putty is smoother, more flexible, and used as a finishing layer before paint for better aesthetics and adhesion.",
      features: [
        "High Compressive Strength",
        "Bright, Uniform Finish",
        "Excellent Bonding with Surfaces",
        "Suitable for Decorative Applications",
        "Weather & Moisture Resistant",
        "Ideal for Plaster, Mortar & Tile Work",
      ],
      image: "/assets/White_Cement.jpg",
      color: "#40B5AD" // Dhaniram teal
    },
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
          src="/assets/Precoat_Page.jpg"
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
            className="group mb-10 sm:mb-16"
          >
            {/* Product Title Tab - Alternating alignment */}
            <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
              <motion.div
                variants={tabVariants}
                initial="rest"
                whileHover="hover"
                style={{ backgroundColor: product.color }}
                className={`px-6 py-3 rounded-t-lg shadow-sm w-fit ${
                  index % 2 === 0 ? "mr-4" : "ml-4"
                }`}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                  {product.name}
                </h3>
              </motion.div>
            </div>

            {/* Card Content */}
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 p-6 bg-white rounded-b-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300`}
              style={{ 
                borderTop: `1px solid ${product.color}`,
                borderTopLeftRadius: index % 2 === 0 ? "0" : "0.5rem",
                borderTopRightRadius: index % 2 === 0 ? "0.5rem" : "0"
              }}
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm sm:text-base">
                        {feature}
                      </span>
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