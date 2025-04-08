"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaTruck, FaMoneyBillWave, FaPalette } from "react-icons/fa";

const USP = () => {
  const uspPoints = [
    {
      icon: <FaAward className="text-4xl" />,
      title: "20+ Years Experience",
      description:
        "Thorough expertise in paint manufacturing and formulation",
      color: "#E21138",
    },
    {
      icon: <FaTruck className="text-4xl" />,
      title: "On-Time Dispatch",
      description: "Timely delivery with our efficient logistics",
      color: "#40B5AD",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl" />,
      title: "Cost Effective",
      description: "High-quality paints at competitive market prices",
      color: "#009E61",
    },
    {
      icon: <FaPalette className="text-4xl" />,
      title: "Tailored Shades",
      description: "Custom color matching for your specific requirements",
      color: "#EC5800",
    },
  ];

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

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {uspPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4"
              style={{ borderColor: point.color }}
            >
              <div
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-white"
                style={{ backgroundColor: point.color }}
              >
                {point.icon}
              </div>
              <h3
                className="text-xl font-semibold text-center mb-2"
                style={{ color: point.color }}
              >
                {point.title}
              </h3>
              <p className="text-gray-600 text-center">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default USP;
