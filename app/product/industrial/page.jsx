"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaIndustry, FaPalette, FaSearch, FaSwatchbook } from "react-icons/fa";

const Industrial = () => {
  const products = [
    {
      id: 1,
      name: "DTM Paint",
      description:
        "DTM (Direct to Metal) Paint is a specially formulated coating designed to be applied directly onto metal surfaces without the need for a separate primer. Unlike the traditional two-coat system of primer followed by enamel, DTM paint combines both functions, saving time and effort. It is commonly used on surfaces like gates, grills, industrial machinery, and metal furniture.",
      features: [
        "Time-Saving",
        "Excellent durability",
        "Corrosion Resistant",
        "Strong Adhesion",
        "Durable Finish",
        "Multi-Surface Compatibility",
      ],
      image: "/assets/DTM.jpg",
      color: "#E21138",
    },
    {
      id: 2,
      name: "Synthetic Enamel",
      description:
        "Synthetic Enamel is a versatile paint known for its smooth, glossy finish and durable protective layer on various surfaces. It is commonly used on doors, windows, furniture, machinery, and metal due to its aesthetic appeal and strength. Its unique formulation creates a tough, flexible film that resists moisture, fading, and everyday wear.",
      features: [
        "High Gloss Finish",
        "Weather & Moisture Resistant",
        "Smooth Brushability",
        "Durable & Scratch Resistant",
        "Strong Adhesion to Wood & Metal",
        "Excellent Color Retention",
      ],
      image: "/assets/SyntheticEnamel.jpg",
      color: "#E21138",
    },
    {
      id: 3,
      name: "Black Bitumen Paint",
      description:
        "Black Bitumen Paint is a solvent-based protective coating made from bitumen, known for its waterproofing and corrosion-resistant properties. It is primarily used to protect metal, concrete, and masonry surfaces exposed to moisture and chemicals. Common applications include underground pipes, tanks, roofs, and foundation walls.",
      features: [
        "Excellent Waterproofing",
        "Anti-Corrosive Protection",
        "UV Resistant",
        "Strong Surface Bonding",
        "Long-Lasting Durability",
        "Suitable for Metal, Concrete & Masonry",
      ],
      image: "/assets/Bitumen.jpg",
      color: "#40B5AD",
    },
    {
      id: 4,
      name: "Aluminum Paint",
      description:
        "Aluminium Paint is a reflective, metallic coating made by mixing finely ground aluminum flakes with a durable resin base. It is used to protect surfaces from heat, sunlight, and corrosion while providing a bright, silver finish. Commonly applied on storage tanks, pipelines, roofs, and radiators. Its chemical structure forms a tight, impermeable film that reflects UV rays and resists oxidation.",
      features: [
        "Heat reflective",
        "Corrosion resistant",
        "Weatherproof",
        "High Coverage",
        "Bright Metallic Finish",
        "Ideal for Metal, Concrete & Industrial Surfaces",
      ],
      image: "/assets/aluminium.avif",
      color: "#009E61",
    },
    {
      id: 5,
      name: "PU Enamel Paint",
      description:
        "PU Enamel Paint is a high-performance polyurethane-based coating known for its superior gloss, hardness, and durability. It is used for both decorative and protective purposes on surfaces that demand a premium finish and long-lasting protection. Ideal for automobiles, furniture, appliances, and industrial equipment.",
      features: [
        "High Gloss Finish",
        "Excellent Scratch Resistance",
        "UV & Weather Resistant",
        "Long-Lasting Color Retention",
        "Chemical & Stain Resistant",
        "Suitable for Wood, Metal & Plastic Surfaces",
      ],
      image: "/assets/PUEnamel.jpg",
      color: "#EC5800",
    },
    {
      id: 6,
      name: "Epoxy Paint",
      description:
        "Epoxy Paint is a two-component, chemically resistant coating made by combining epoxy resin with a hardener, forming a tough, durable film. It is used for high-performance protection in industrial, commercial, and marine environments. Known for its excellent chemical bonding, it adheres strongly to concrete, metal, and floors, creating a hard, non-porous surface resistant to wear and corrosion.",
      features: [
        "Exceptional Chemical Resistance",
        "High Abrasion Durability",
        "Strong Adhesion to Multiple Surfaces",
        "Long-Lasting Protection",
        "Easy to Clean & Maintain",
        "Ideal for Industrial, Marine & Floor Applications",
      ],
      image: "/assets/EpoxyPaint.jpg",
      color: "#6E260E",
    },
    {
      id: 7,
      name: "Red Oxide Primer",
      description:
        "Red Oxide Primer is a rust-inhibiting, alkyd-based primer formulated with red oxide pigment for superior adhesion and corrosion resistance on metal surfaces. It is widely used as a preparatory coat for grills, gates, machinery, and structural steel. Chemically designed to block moisture and oxidation, it forms a protective base layer; we also offer a BIS-Standard approved Zinc Chrome variant for enhanced performance in demanding conditions.",
      features: [
        "Strong Rust Protection",
        "Excellent Metal Adhesion",
        "Quick Drying",
        "Moisture Barrier",
        "Smooth Topcoat Compatibility",
        "BIS-Grade Zinc Chrome Option Available",
      ],
      image: "/assets/Redoxide.jpg",
      color: "#E21138",
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
        <div className="absolute inset-0 bg-black/50 z-10 flex items-end pb-8 sm:pb-16 md:pb-24 justify-center">
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
                borderTop: `4px solid ${product.color}`,
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

      {/* RAL Color Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="py-12 md:py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div variants={slideUp} className="flex justify-center mb-4">
              <div className="bg-[#6E260E]/10 p-4 rounded-full">
                <FaPalette className="text-4xl text-[#6E260E]" />
              </div>
            </motion.div>
            <motion.h2
              variants={slideUp}
              className="text-2xl sm:text-3xl font-bold text-[#6E260E] mb-4"
            >
              Precision Color Matching
            </motion.h2>
            <motion.p
              variants={slideUp}
              className="text-gray-700 max-w-3xl mx-auto text-lg"
            >
              Looking for the perfect custom shade? We recommend the
              industry-standard RAL Colour Chart for accurate and consistent
              color selection.
            </motion.p>
          </div>

          <motion.div
            variants={item}
            className="bg-[#f8f8f8] rounded-lg p-8 max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full mb-3">
                  <FaSwatchbook className="text-2xl text-[#E21138]" />
                </div>
                <h3 className="font-semibold text-[#6E260E] mb-2">
                  Standardized Colors
                </h3>
                <p className="text-gray-700 text-sm">
                  RAL provides precise digital and physical color references
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full mb-3">
                  <FaSearch className="text-2xl text-[#40B5AD]" />
                </div>
                <h3 className="font-semibold text-[#6E260E] mb-2">
                  Easy Selection
                </h3>
                <p className="text-gray-700 text-sm">
                  Browse thousands of standardized colors for perfect matches
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full mb-3">
                  <FaIndustry className="text-2xl text-[#009E61]" />
                </div>
                <h3 className="font-semibold text-[#6E260E] mb-2">
                  Industry Standard
                </h3>
                <p className="text-gray-700 text-sm">
                  Trusted by professionals worldwide for color consistency
                </p>
              </div>
            </div>

            <motion.div variants={item} className="text-center mt-8">
              <a
                href="https://www.ralcolor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#6E260E] hover:bg-[#8a3b1a] text-white font-medium py-3 px-8 rounded-md transition-colors duration-200"
              >
                Explore RAL Color Chart
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Need help matching a specific color? Our experts can assist you.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Industrial;
