"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ColorWall = () => {
  const [activeCollection, setActiveCollection] = useState("standard");

  // Color collections
  const colorCollections = {
    standard: [
      { id: 1, name: "Classic White", code: "RAL 9010", hex: "#F1ECE1" },
      { id: 2, name: "Ivory", code: "RAL 1014", hex: "#D2B48C" },
      { id: 3, name: "Sun Yellow", code: "RAL 1018", hex: "#F3A505" },
      { id: 4, name: "Traffic Red", code: "RAL 3020", hex: "#CC0605" },
      { id: 5, name: "Pastel Blue", code: "RAL 5024", hex: "#5D9B9B" },
      { id: 6, name: "Olive Green", code: "RAL 6003", hex: "#3B3B1E" },
      { id: 7, name: "Pearl Black", code: "RAL 9005", hex: "#0A0A0A" },
      { id: 8, name: "Light Grey", code: "RAL 7035", hex: "#D7D7D7" },
    ],
    premium: [
      { id: 1, name: "Pearl White", code: "RAL 9016", hex: "#F8F8F8" },
      { id: 2, name: "Gold Pearl", code: "RAL 1036", hex: "#E3C800" },
      { id: 3, name: "Ruby Red", code: "RAL 3033", hex: "#9B111E" },
      { id: 4, name: "Ocean Blue", code: "RAL 5021", hex: "#0078A0" },
      { id: 5, name: "Emerald", code: "RAL 6001", hex: "#1E5945" },
      { id: 6, name: "Platinum", code: "RAL 7026", hex: "#7A7671" },
      { id: 7, name: "Violet", code: "RAL 4008", hex: "#6C4675" },
      { id: 8, name: "Coral", code: "RAL 3016", hex: "#D36E70" },
    ],
    metallic: [
      { id: 1, name: "Silver Metallic", code: "RAL 9006", hex: "#A5A5A5" },
      { id: 2, name: "Bronze Metallic", code: "RAL 8004", hex: "#8D4931" },
      { id: 3, name: "Graphite", code: "RAL 9023", hex: "#1C1C1C" },
      { id: 4, name: "Champagne", code: "RAL 1015", hex: "#E6D2B5" },
      { id: 5, name: "Gunmetal", code: "RAL 7021", hex: "#383E42" },
      { id: 6, name: "Copper", code: "RAL 8002", hex: "#955F20" },
      { id: 7, name: "Titanium", code: "RAL 7040", hex: "#9B9B9B" },
      { id: 8, name: "Rose Gold", code: "RAL 3027", hex: "#B32428" },
    ],
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const colorVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="relative h-[30vh] sm:h-[40vh] w-full bg-gradient-to-r from-gray-900 to-gray-700"
      >
        <div className="absolute inset-0 bg-black/30 z-10 flex items-end pb-8 sm:pb-12 justify-center">
          <motion.h1
            variants={slideUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4"
          >
            Color Wall
          </motion.h1>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Collection Tabs */}
        <div className="flex justify-center mb-8 gap-2 sm:gap-4">
          {Object.keys(colorCollections).map((collection) => (
            <motion.button
              key={collection}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCollection(collection)}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base capitalize transition-colors ${
                activeCollection === collection
                  ? "bg-gray-900 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {collection}
            </motion.button>
          ))}
        </div>

        {/* Color Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {colorCollections[activeCollection].map((color) => (
            <motion.div
              key={color.id}
              variants={colorVariants}
              className="group relative"
            >
              <div
                className="aspect-square w-full rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg"
                style={{ backgroundColor: color.hex }}
              ></div>
              <div className="mt-3 px-1">
                <h3 className="font-medium text-gray-900">{color.name}</h3>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-gray-600">{color.code}</span>
                  <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
                    {color.hex}
                  </span>
                </div>
              </div>
              {/* Quick view button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="absolute top-2 right-2 bg-white/90 rounded-full p-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Color Details Panel (would be implemented with state) */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            About RAL Color Standard
          </h2>
          <p className="text-gray-700">
            The RAL Classic color system is used for defining colors for varnish,
            powder coating and paints. Each color is represented by a unique 4-digit
            number in combination with the letters "RAL".
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-900">Standard Colors</h3>
              <p className="text-sm text-gray-600 mt-1">
                Our standard collection includes the most popular RAL colors used
                in architectural and industrial applications.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Color Matching</h3>
              <p className="text-sm text-gray-600 mt-1">
                We guarantee precise RAL color matching across all our paint
                products for consistent results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorWall;