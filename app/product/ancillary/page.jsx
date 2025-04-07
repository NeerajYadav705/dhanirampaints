"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaIndustry, FaPalette, FaSearch, FaSwatchbook } from "react-icons/fa";

const Ancillary = () => {
  const products = [
    {
      id: 1,
      name: "Turpentine Oil",
      description:
        "Turpentine Oil is a natural solvent distilled from the resin of pine trees, commonly used for thinning oil-based paints and cleaning brushes or tools. It enhances paint flow, improves surface penetration, and accelerates drying time in enamel and oil-based systems. Its chemical composition contains active terpenes, giving it strong solvency power and a characteristic aroma.",
      features: [
        "Effective Paint Thinner",
        "Enhances Paint Spreadability",
        "Speeds Up Drying Time",
        "Ideal for Brush & Tool Cleaning",
        "Strong Solvency Power",
        "Suitable for Oil-Based Paints & Varnishes",
      ],
      image: "/assets/Turpentine_Oil.jpg",
      color: "#E21138",
    },
    {
      id: 2,
      name: "NC Thinner",
      description:
        "NC Thinner is a fast-evaporating solvent blend used to dilute nitrocellulose-based paints, lacquers, and primers. It enhances sprayability, reduces viscosity, and ensures quick drying for furniture, woodwork, and automotive touch-ups. Its chemical blend contains esters, ketones, and aromatic solvents for high volatility and smooth finishes.",
      features: [
        "Fast Evaporation for Quick Drying",
        "Improves Spray Application",
        "Excellent Flow & Leveling",
        "Ideal for Wood, Metal & Automotive Uses",
        "Ensures Smooth, Glossy Finishes",
        "Prevents Blushing & Orange Peel Effects",
      ],
      image: "/assets/NC_Thinner.jpg",
      color: "#E21138",
    },
    {
      id: 3,
      name: "PU Thinner",
      description:
        "PU Thinner is a high-grade solvent mixture formulated specifically for polyurethane-based paints, primers, and clear coats. It ensures uniform application, extends pot life, and supports chemical bonding in two-component PU systems. Its balanced mix of slow and medium evaporating solvents allows deeper penetration and smooth leveling.",
      features: [
        "Supports PU 2K Systems",
        "Balanced Evaporation Rate",
        "Enhances Pot Life & Application Window",
        "Excellent Gloss & Flow Control",
        "Prevents Surface Defects & Bubbling",
        "Suitable for Furniture, Flooring & Auto Refinishing",
      ],
      image: "/assets/NC_Thinner.jpg",
      color: "#40B5AD",
    },
    {
      id: 4,
      name: "Epoxy Thinner",
      description:
        "Epoxy Thinner is a solvent blend engineered for reducing the viscosity of epoxy-based paints, primers, and floor coatings. It aids in proper film formation, improves substrate wetting, and maintains chemical resistance post-curing. Its unique formula contains slow evaporating solvents to match the curing profile of epoxies.",
      features: [
        "Optimized for Epoxy Coatings",
        "Maintains Strength & Durability",
        "Improves Flow, Penetration & Leveling",
        "Compatible with Primers, Paints & Floors",
        "Helps in Brush, Roller & Spray Applications",
        "Reduces Risk of Blistering & Improper Cure",
      ],
      image: "/assets/NC_Thinner.jpg",
      color: "#009E61",
    },
  ];

  const brands = [
    {
      id: 1,
      name: "Premium Coatings",
      description:
        "Our premium line offers the highest quality industrial coatings with advanced formulations for extreme environments.",
      image: "/assets/brand1.jpg",
    },
    {
      id: 2,
      name: "Eco Solutions",
      description:
        "Environmentally friendly coatings that meet strict environmental regulations without compromising performance.",
      image: "/assets/brand2.jpg",
    },
    {
      id: 3,
      name: "Marine Grade",
      description:
        "Specialized formulations designed for marine applications with superior saltwater and UV resistance.",
      image: "/assets/brand3.jpg",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

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
        <div className="absolute inset-0 bg-black/50 z-10 flex items-end pb-8 sm:pb-16 md:pb-2 justify-center">
          <motion.h1
            variants={slideUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4"
          >
            Industrial Paints
          </motion.h1>
        </div>
        <Image
          src="/assets/IndustryHero.jpg"
          alt="Industrial Paints"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Products Section - Fixed alignment */}
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
            {/* Heading Container */}
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
                className={`px-6 py-3 rounded-t-lg shadow-sm ${
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
              } gap-6 p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300`}
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
  );
};

export default Ancillary;
