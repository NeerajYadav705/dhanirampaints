"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaIndustry, FaPalette, FaSearch, FaSwatchbook } from "react-icons/fa";

const Industrial = () => {
  const products = [
    {
      id: 1,
      name: "Enamel",
      description:
        "High-gloss enamel paint provides a durable, hard finish that's resistant to moisture, heat, and everyday wear. Ideal for metal surfaces, machinery, and equipment requiring both protection and aesthetic appeal. Our enamel formulation offers excellent leveling and a smooth finish with superior color retention.",
      features: [
        "High gloss finish",
        "Excellent durability",
        "Moisture resistant",
        "UV protection",
        "Fast drying",
        "Wide color range",
      ],
      image: "/assets/aboutbg.jpg",
      color: "#E21138",
    },
    {
      id: 2,
      name: "Bitumen Paint",
      description:
        "Bituminous coating provides superior waterproofing and corrosion protection for metal and concrete surfaces. Particularly effective for pipelines, tanks, and marine applications where water resistance is critical. Forms a flexible, protective layer that withstands harsh environmental conditions.",
      features: [
        "Excellent waterproofing",
        "Corrosion resistance",
        "UV stable (black only)",
        "Chemical resistant",
        "Easy application",
        "Long-lasting protection",
      ],
      image: "/assets/aboutbg.jpg",
      color: "#40B5AD",
    },
    {
      id: 3,
      name: "Aluminum Paint",
      description:
        "Specialized aluminum paint offers heat reflection and corrosion protection for industrial equipment. The aluminum flakes create a reflective barrier that protects surfaces from heat, moisture, and chemical exposure while providing an attractive metallic finish.",
      features: [
        "Heat reflective",
        "Corrosion resistant",
        "UV resistant",
        "High temperature tolerance",
        "Excellent adhesion",
        "Durable metallic finish",
      ],
      image: "/assets/aboutbg.jpg",
      color: "#009E61",
    },
    {
      id: 4,
      name: "PU Paint",
      description:
        "Polyurethane paint delivers exceptional abrasion resistance and flexibility, making it perfect for automotive and industrial applications. Provides a tough, elastic finish that withstands impacts, vibrations, and extreme weather conditions while maintaining its appearance.",
      features: [
        "Extreme abrasion resistance",
        "Excellent flexibility",
        "Chemical resistant",
        "UV stable",
        "High gloss retention",
        "Fast curing",
      ],
      image: "/assets/aboutbg.jpg",
      color: "#EC5800",
    },
    {
      id: 5,
      name: "Epoxy Paint",
      description:
        "Epoxy coatings create a hard, chemical-resistant surface ideal for industrial floors, tanks, and equipment. Offers superior adhesion to metal and concrete, with excellent resistance to chemicals, impacts, and heavy traffic while being easy to clean and maintain.",
      features: [
        "Chemical resistant",
        "High adhesion",
        "Impact resistant",
        "Seamless finish",
        "Easy to clean",
        "Custom colors",
      ],
      image: "/assets/aboutbg.jpg",
      color: "#6E260E",
    },
    {
      id: 6,
      name: "Red Oxide Primer",
      description:
        "Rust-inhibitive primer forms a protective barrier on iron and steel surfaces. The red oxide formulation provides excellent corrosion resistance and promotes strong adhesion for topcoats, extending the life of metal structures in harsh environments.",
      features: [
        "Rust prevention",
        "Excellent adhesion",
        "Dries quickly",
        "Good coverage",
        "Compatible with most topcoats",
        "Durable undercoat",
      ],
      image: "/assets/aboutbg.jpg",
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
            Industrial Paints
          </motion.h1>
        </div>
        <Image
          src="/assets/aboutbg.jpg"
          alt="Industrial Paints"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Products Section */}
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
            {/* Alternating Heading */}
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
              } gap-6 p-6 bg-white rounded-b-lg rounded-tr-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300`}
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

      {/* Brands Section */}
      <div className="bg-[#f8f8f8] py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6E260E]">
              Our Premium Brands
            </h2>
            <div className="w-24 h-1 bg-[#E21138] mx-auto mt-4"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Brand Description (30%) */}
            <div className="w-full md:w-3/10">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-sm h-full"
              >
                <h3 className="text-xl font-semibold text-[#6E260E] mb-4">
                  Trusted Quality
                </h3>
                <p className="text-gray-700 mb-4">
                  DhaniRam Paints offers specialized brands tailored for
                  different industrial applications. Each brand represents our
                  commitment to quality, durability, and performance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#E21138] font-bold mr-2">•</span>
                    <span className="text-gray-700">
                      Certified formulations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#40B5AD] font-bold mr-2">•</span>
                    <span className="text-gray-700">Rigorous testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#009E61] font-bold mr-2">•</span>
                    <span className="text-gray-700">
                      Industry-specific solutions
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Brand Images (70%) */}
            <div className="w-full md:w-7/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {brands.map((brand, index) => (
                  <motion.div
                    key={brand.id}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.2, duration: 0.6 },
                      },
                    }}
                    className="group"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                      <div className="relative h-48 sm:h-56 w-full">
                        <Image
                          src={brand.image}
                          alt={brand.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-[#6E260E] mb-2">
                          {brand.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {brand.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RAL Color Section - Improved Version */}
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
