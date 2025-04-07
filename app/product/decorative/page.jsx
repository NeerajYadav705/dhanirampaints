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
        name: "Interior Emulsion",
        description:
          "Interior Emulsion is a water-based wall paint designed to provide a smooth, elegant finish for interior walls and ceilings. It is widely used in homes, offices, and commercial spaces for its low odor, quick drying, and clean aesthetic. Its polymer-rich formulation offers superior coverage, stain resistance, and long-lasting color vibrancy.",
        features: [
          "Smooth & Rich Finish",
          "Low Odor & Quick Drying",
          "Excellent Coverage",
          "Long-Lasting Colors",
          "Breathable Film Prevents Peeling",
          "Ideal for Walls & Ceilings Indoors",
        ],
        image: "/assets/InteriorEmulsion.jpg",
        color: "#E21138",
      },
      {
        id: 2,
        name: "Interior Primer",
        description:
          "Interior Primer is a water-based undercoat applied to walls and ceilings before interior emulsion to create a smooth, sealed surface. It is used to enhance paint adhesion, reduce surface absorbency, and ensure a uniform topcoat finish. Formulated with fine acrylic binders and additives, it provides excellent sealing, stain-blocking, and long-term durability on plaster, putty, and masonry surfaces.",
        features: [
          "Strong Adhesion for Topcoat",
          "Seals Porous Surfaces",
          "Improves Paint Coverage",
          "Blocks Minor Stains & Patches",
          "Quick Drying & Low Odor",
          "Ideal after Plaster, Putty & Masonry",
        ],
        image: "/assets/InteriorPrimer.jpg",
        color: "#E21138",
      },
      {
        id: 3,
        name: "Distemper",
        description:
          "Distemper is a traditional water-based wall paint known for its smooth, matte finish and affordability. It is commonly used for cost-effective interior painting in homes, warehouses, and rental properties. Suitable for plastered and brick surfaces, it offers decent coverage and a clean look on a budget.",
        features: [
          "Economical Interior Solution",
          "Easy to Apply",
          "Classic Matte Finish",
          "Suitable for Large-Scale Projects",
          "Available in Multiple Shades",
          "Ideal for Plastered & Brick Surfaces",
        ],
        image: "/assets/Distemper.jpg",
        color: "#E21138",
      },
      {
        id: 4,
        name: "Texture",
        description:
          "Texture Paint is a decorative wall finish designed to create artistic, 3D surface effects using specialized aggregates and binders. It is used to add depth, style, and character to feature walls in living rooms, lobbies, showrooms, and exteriors. Its high-build formula with durable polymers and additives offers superior adhesion, weather resistance, and surface flexibility.",
        features: [
          "Unique Decorative Finish",
          "Hides Wall Imperfections",
          "High Build & Strong Coverage",
          "Excellent Adhesion",
          "Weather & Water Resistant",
          "Ideal for Interior & Exterior Walls",
        ],
        image: "/assets/Texture.jpg",
        color: "#E21138",
      },

      // Add more interior products as needed
    ],
    exterior: [
      {
        id: 1,
        name: "Exterior Emulsion",
        description:
          "Exterior Emulsion is a water-based protective paint formulated for long-lasting performance on exterior walls. It is used to withstand harsh weather conditions while maintaining color and finish on surfaces like cement plaster, concrete, and brickwork. Enriched with UV-resistant pigments and dust-resistant additives, it forms a breathable yet water-repellent film.",
        features: [
          "UV & Fade Resistant",
          "Water Repellent Film",
          "Dust Resistant",
          "Excellent Color Retention",
          "Breathable Coating Prevents Peeling",
          "Ideal for Cement, Concrete & Brick Walls",
        ],
        image: "/assets/ExteriorEmulsion.jpg",
        color: "#40B5AD",
      },
      {
        id: 2,
        name: "Exterior Primer",
        description:
          "Exterior Primer is a water-based undercoat specially designed to prepare exterior walls for emulsion or topcoat application. It is used to seal porous surfaces, enhance paint adhesion, and protect against alkali and efflorescence on cement, plaster, and concrete. Its formulation includes weather-resistant polymers and additives that ensure durability and long-term performance in outdoor conditions.",
        features: [
          "Strong Adhesion to Topcoat",
          "Seals Porous & Uneven Surfaces",
          "Alkali & Efflorescence Resistant",
          "Improves Paint Durability",
          "Quick Drying & Easy to Apply",
          "Ideal for Plaster, Cement & Concrete Walls",
        ],
        image: "/assets/Exterior_Primer.jpg",
        color: "#40B5AD",
      },
      // Add more exterior products as needed
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
          src="/assets/Decorative_head.jpg"
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
              activeTab === "interior"
                ? "bg-[#E21138] shadow-lg"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          >
            Interior Paints
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("exterior")}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
              activeTab === "exterior"
                ? "bg-[#40B5AD] shadow-lg"
                : "bg-gray-400 hover:bg-gray-500"
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
              {/* Product Title Tab - Alternating alignment */}
              <div
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <motion.div
                  variants={tabVariants}
                  initial="rest"
                  whileHover="hover"
                  style={{ backgroundColor: product.color }}
                  className={`px-6 py-3 rounded-t-lg shadow-sm w-fit ${
                    index % 2 === 0 ? "ml-0" : "mr-0"
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
                } gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-b-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300`}
                style={{
                  borderTop: `1px solid ${product.color}`,
                  borderTopLeftRadius: index % 2 === 0 ? "0" : "0.5rem",
                  borderTopRightRadius: index % 2 === 0 ? "0.5rem" : "0",
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
    </div>
  );
};

export default Decorative;
