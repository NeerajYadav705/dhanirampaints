"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Decorative = () => {
  const [activeTab, setActiveTab] = useState("interior");

  const products = {
    interior: [
      {
        id: 1,
        name: "Emulsion",
        description:
          "High-quality interior emulsion paint with excellent coverage and durability. Perfect for walls and ceilings in residential and commercial spaces. Provides a smooth, washable finish that resists stains and fading.",
        features: [
          "Excellent coverage",
          "Washable finish",
          "Stain resistant",
          "Low VOC formulation",
          "Wide color range",
          "Fast drying",
        ],
        image: "/assets/aboutbg.jpg",
        color: "#E21138",
      },
      {
        id: 2,
        name: "Primer",
        description:
          "Specialized primer for interior surfaces that ensures proper adhesion of topcoats. Seals porous surfaces and creates a uniform base for paint application. Reduces the number of topcoats needed for full coverage.",
        features: [
          "Blocks stains",
          "Seals porous surfaces",
          "Improves adhesion",
          "Reduces topcoat layers",
          "Dries quickly",
          "Uniform base",
        ],
        image: "/assets/aboutbg.jpg",
        color: "#E21138",
      },
      {
        id: 3,
        name: "Distemper",
        description:
          "Economical water-based paint for interior walls. Easy to apply and provides a matte finish. Ideal for budget-conscious projects where frequent repainting is acceptable.",
        features: [
          "Cost-effective",
          "Easy application",
          "Matte finish",
          "Water-based",
          "Low odor",
          "Quick drying",
        ],
        image: "/assets/aboutbg.jpg",
        color: "#E21138",
      },
      {
        id: 4,
        name: "Texture",
        description:
          "Decorative textured paint for creating visual interest on interior walls. Available in various patterns and finishes. Hides surface imperfections and adds depth to your walls.",
        features: [
          "Hides imperfections",
          "Decorative finishes",
          "Custom patterns",
          "Durable surface",
          "Washable",
          "Easy to repair",
        ],
        image: "/assets/aboutbg.jpg",
        color: "#E21138",
      },
    ],
    exterior: [
      {
        id: 1,
        name: "Exterior Emulsion",
        description:
          "Weather-resistant emulsion formulated for outdoor use. Withstands UV rays, rain, and temperature fluctuations. Maintains color vibrancy and protects against mold and mildew growth.",
        features: [
          "UV resistant",
          "Weatherproof",
          "Mold resistant",
          "Color retention",
          "Breathable",
          "Long-lasting",
        ],
        image: "/assets/aboutbg.jpg",
        color: "#1E40AF",
      },
      {
        id: 2,
        name: "Exterior Primer",
        description:
          "High-performance primer designed for exterior surfaces. Provides superior adhesion and protects against moisture penetration. Creates a stable base for exterior topcoats.",
        features: [
          "Water resistant",
          "Excellent adhesion",
          "Blocks efflorescence",
          "Flexible film",
          "Durable undercoat",
          "Quick drying",
        ],
        image: "/assets/aboutbg.jpg",
        color: "#1E40AF",
      },
    ],
  };

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
            Decorative Paints
          </motion.h1>
        </div>
        <Image
          src="/assets/aboutbg.jpg"
          alt="Decorative Paints"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-8 gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("interior")}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
              activeTab === "interior" ? "bg-red-600 shadow-lg" : "bg-gray-400"
            }`}
          >
            Interior Paints
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("exterior")}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
              activeTab === "exterior" ? "bg-blue-800 shadow-lg" : "bg-gray-400"
            }`}
          >
            Exterior Paints
          </motion.button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10">
          {products[activeTab].map((product, index) => (
            <motion.div
              key={product.id}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Animated Tab - Modified for alternating alignment */}
              <motion.div
                variants={tabVariants}
                initial="rest"
                whileHover="hover"
                style={{ backgroundColor: product.color }}
                className={`w-full sm:w-fit px-4 sm:px-6 py-2 sm:py-3 rounded-t-lg shadow-sm ${
                  index % 2 === 0 ? "ml-0" : "ml-auto"
                }`}
              >
                <h3 className={`text-xl sm:text-2xl md:text-3xl font-semibold text-white ${
                  index % 2 === 0 ? "text-left pl-2 sm:pl-16" : "text-right pr-2 sm:pr-16"
                }`}>
                  {product.name}
                </h3>
              </motion.div>

              {/* Card Content */}
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-b-lg rounded-tr-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300`}
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
    </div>
  );
};

export default Decorative;