"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FloorCoating = () => {
  const coatings = [
    {
      id: 1,
      name: "PU Floor Coating",
      description: "PU Floor Coating is a high-performance polyurethane-based coating designed to protect and enhance concrete and cement floors. It is used for its abrasion resistance, chemical durability, and smooth finish in areas like warehouses, parking lots, factories, and commercial floors. Its flexible yet tough formulation resists cracking, UV exposure, and harsh chemicals, ensuring long-lasting surface protection.",
      features: [
        "High Abrasion Resistance",
        "Chemical & Oil Resistant",
        "UV & Weather Resistant",
        "Smooth & Glossy Finish",
        "Fast Flexible Yet Tough Coating",
        "Ideal for Industrial, Commercial & Parking Floors"
      ],
      image: "/assets/PU_Floor_Coating.jpg",
      color: "#40B5AD" // Dhaniram teal
    },
    {
      id: 2,
      name: "Epoxy Floor Coating",
      description: "Epoxy Floor Coating is a two-component, high-strength flooring solution made by combining epoxy resin with a hardener to form a rigid, durable surface. It is used for heavy-duty protection in industrial, commercial, and garage floors where high impact, chemical, and load resistance are essential. Unlike PU floor coatings, epoxy forms a harder, more rigid film that is ideal for static environments with high mechanical stress.",
      features: [
        "Exceptional Load-Bearing Strength",
        "High Chemical & Stain Resistance",
        "Seamless & Non-Porous Surface",
        "Long-Lasting Gloss & Finish",
        "Ideal for Concrete, Industrial & Garage Floors",
        "Resistant to Abrasion, Heat & Impact"
      ],
      image: "/assets/Epoxy_Floor_coating.jpg",
      color: "#E21138" // Dhaniram red
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
            Floor Coating Solutions
          </motion.h1>
        </div>
        <Image
          src="/assets/floor-coating/hero-bg.jpg"
          alt="Floor Coating Solutions"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {coatings.map((coating, index) => (
          <motion.div
            key={coating.id}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: index * 0.1 }}
            className="group mb-10 sm:mb-12"
          >
            {/* Product Title Tab - Alternating alignment */}
            <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
              <motion.div
                variants={tabVariants}
                initial="rest"
                whileHover="hover"
                style={{ backgroundColor: coating.color }}
                className={`px-6 py-3 rounded-t-lg shadow-sm w-fit ${
                  index % 2 === 0 ? "ml-0" : "mr-0"
                }`}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                  {coating.name}
                </h3>
              </motion.div>
            </div>

            {/* Card Content */}
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-b-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300`}
              style={{ 
                borderTop: `1px solid ${coating.color}`,
                borderTopLeftRadius: index % 2 === 0 ? "0" : "0.5rem",
                borderTopRightRadius: index % 2 === 0 ? "0.5rem" : "0"
              }}
            >
              {/* Text Content */}
              <div className="w-full md:w-1/2">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {coating.description}
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {coating.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                        style={{ color: coating.color }}
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
                    src={coating.image}
                    alt={coating.name}
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

export default FloorCoating;