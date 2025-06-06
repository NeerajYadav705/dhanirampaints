"use client";
import React from "react";
import { motion } from "framer-motion";

const VisionMission = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Vector Background */}
      <div className="absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#40B5AD]"
        >
          <defs>
            <pattern
              id="pattern-circles"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.2" />
            </pattern>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#40B5AD" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2a7a74" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#gradient)" />
          <rect width="100%" height="100%" fill="url(#pattern-circles)" />
          
          {/* Decorative elements */}
          <path
            d="M0,200 Q300,100 600,300 T1200,200"
            stroke="white"
            strokeWidth="2"
            fill="none"
            opacity="0.1"
          />
          <path
            d="M0,400 Q300,300 600,500 T1200,400"
            stroke="white"
            strokeWidth="2"
            fill="none"
            opacity="0.1"
          />
          <path
            d="M0,600 Q300,500 600,700 T1200,600"
            stroke="white"
            strokeWidth="2"
            fill="none"
            opacity="0.1"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Vision & Mission
          </h2>
          <div className="w-20 h-1 bg-[#E21138] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#E21138] p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600">
              To be a leading name in the paint and coatings industry,
              recognized for our commitment to quality, and sustainable
              solutions, while fostering strong partnerships and contributing to
              the growth of industries across India.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#E21138] p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <ul className="text-gray-600 space-y-3">
              <li className="flex items-start">
                <span className="text-[#E21138] mr-2">•</span>
                To provide high-quality, durable, and cost-effective paint
                solutions that enhance infrastructure and industry.
              </li>
              <li className="flex items-start">
                <span className="text-[#E21138] mr-2">•</span>
                To build long-term relationships with businesses by offering
                reliable service, expertise, and value-driven solutions.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;