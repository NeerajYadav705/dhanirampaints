"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ColorWall from "@/components/ColorWall";

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
      color: "#E21138",
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
      color: "#E21138",
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
      color: "#E21138",
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
      color: "#E21138",
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: index * 0.1 }}
            className="group mb-10 sm:mb-12"
          >
            {/* Animated Tab */}
            <motion.div
              variants={tabVariants}
              initial="rest"
              whileHover="hover"
              style={{ backgroundColor: product.color }}
              className="w-full sm:w-fit px-4 sm:px-6 py-2 sm:py-3 rounded-t-lg shadow-sm"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center sm:text-left px-2 sm:px-16">
                {product.name}
              </h3>
            </motion.div>

            {/* Card Content */}
            <div
              className={`flex flex-col ${
                product.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
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
      {/* <ColorWall /> */}
    </div>
  );
};

export default Industrial;
