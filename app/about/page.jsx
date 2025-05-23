"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaAward,
  FaUsers,
  FaMapMarkedAlt,
  FaIndustry,
  FaBuilding,
  FaOilCan,
  FaCar,
  FaShip,
  FaPalette,
  FaSwatchbook,
  FaSearch,
} from "react-icons/fa";
import ClientsSection from "@/components/ClientsSection";

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

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="relative h-[30vh] sm:h-[70vh] md:h-[calc(100vh-300px)] min-h-[300px] w-full"
      >
        <div className="absolute inset-0 bg-black/50 z-10 flex items-end pb-12 sm:pb-16 md:pb-24 justify-center">
          <motion.h1
            variants={slideUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4"
          >
            About Us
          </motion.h1>
        </div>
        <Image
          src="/assets/About_hero.jpg"
          alt="About Dhaniram Paints"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div variants={item} className="relative">
            <Image
              src="/assets/About Us.jpg"
              alt="Dhaniram Paints Factory"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#E21138] text-white p-4 sm:p-6 rounded-full w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center shadow-lg"
            >
              <FaAward className="text-2xl sm:text-3xl mb-1" />
              <span className="font-bold text-center text-xs sm:text-sm">
                20+ Years Experience
              </span>
            </motion.div>
          </motion.div>

          <motion.div variants={item}>
            <motion.h2
              variants={slideUp}
              className="text-2xl sm:text-3xl font-bold text-[#000000] mb-4 sm:mb-6"
            >
              ABOUT US
            </motion.h2>

            <p className="text-justify text-align: justify; text-justify: inter-word;">
              Founded in 2005, with our previous branding under the name of our
              manufacturing & marketing firm, D R Paint & Chemicals, we have
              been a trusted name in the paint manufacturing industry,
              delivering high-performance coating solutions that protect,
              enhance, and add value to a wide range of applications. As a
              growing SME, we specialize in industrial, decorative, and
              specialty paints, offering advanced coatings designed for
              durability and excellence.
            </p>
            <p className="text-justify text-align: justify; text-justify: inter-word; mt-10">
              With nearly two decades of expertise, we have built a reputation
              for quality, innovation, and reliability, serving businesses that
              demand long-lasting and cost-effective paint solutions. Our
              commitment extends beyond products—we foster strong B2B
              relationships, working closely with manufacturers, construction
              firms, infrastructure developers, and other industries to provide
              tailored coating solutions that satiate their specific needs.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Overview Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="py-12 md:py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={slideUp}
            className="text-2xl sm:text-3xl font-bold text-center text-[#000000] mb-8 sm:mb-12"
          >
            COMPANY OVERVIEW
          </motion.h2>

          {/* First 4 boxes in 2x2 grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Background Column */}
            <motion.div
              variants={item}
              className="bg-[#f8f8f8] p-6 sm:p-8 rounded-lg"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-[#000000] mb-4 sm:mb-6 border-b-2 border-[#E21138] pb-2">
                Background
              </h3>
              <ul className="space-y-4">
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#E21138] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Established Manufacturing in 2005.
                  </span>
                </motion.li>
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#E21138] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Initially focused on serving price-sensitive customers in
                    the local market.
                  </span>
                </motion.li>
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#E21138] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Limited emphasis on high-quality paint products in the early
                    years.
                  </span>
                </motion.li>
              </ul>
            </motion.div>

            {/* COVID Impact Column */}
            <motion.div
              variants={item}
              className="bg-[#f8f8f8] p-6 sm:p-8 rounded-lg"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-[#000000] mb-4 sm:mb-6 border-b-2 border-[#EC5800] pb-2">
                Impact of the COVID-19 Pandemic
              </h3>
              <ul className="space-y-4">
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#EC5800] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Operations were significantly disrupted during the inital lockdown period.
                  </span>
                </motion.li>
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#EC5800] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Faced challenges due to rising costs of raw meterials.
                  </span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Strategic Shift Column */}
            <motion.div
              variants={item}
              className="bg-[#f8f8f8] p-6 sm:p-8 rounded-lg"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-[#000000] mb-4 sm:mb-6 border-b-2 border-[#40B5AD] pb-2">
                Strategic Shift post 2020
              </h3>
              <ul className="space-y-4">
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#40B5AD] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Shifted focus towards improving the product quality.
                  </span>
                </motion.li>
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#40B5AD] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Expanded operations beyond local markets to cater to
                    customers across India.
                  </span>
                </motion.li>
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#40B5AD] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Successfully supplied products to over 50+ government
                    organizations in the past two years.
                  </span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Quality Commitment Column */}
            <motion.div
              variants={item}
              className="bg-[#f8f8f8] p-6 sm:p-8 rounded-lg"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-[#000000] mb-4 sm:mb-6 border-b-2 border-[#009E61] pb-2">
                Investment in Quality Assurance
              </h3>
              <ul className="space-y-4">
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#009E61] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Established a state-of-the-art testing laboratory to enhance
                    raw material procurement and implemented a rigorous quality maintenance process.
                  </span>
                </motion.li>
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#009E61] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Ensured procurement processes adhere to industry standards.
                  </span>
                </motion.li>
              </ul>
            </motion.div>
          </div>

          {/* Fifth centered box */}
          <motion.div
            variants={item}
            className="bg-[#f8f8f8] p-6 sm:p-8 rounded-lg mt-12 max-w-3xl mx-auto"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-[#000000] mb-4 sm:mb-6 border-b-2 border-[#6E260E] pb-2 text-center">
              Commitment to Quality Management
            </h3>
            <ul className="space-y-4">
              <motion.li variants={item} className="flex items-start">
                <span className="text-[#000000] font-bold mr-2">•</span>
                <span className="text-gray-700">
                  Focused on improving and adhering stringently by the quality assurance system.
                </span>
              </motion.li>
              <motion.li variants={item} className="flex items-start">
                <span className="text-[#6E260E] font-bold mr-2">•</span>
                <span className="text-gray-700">
                  Actively engaged in understanding customer requirements.
                </span>
              </motion.li>
              <motion.li variants={item} className="flex items-start">
                <span className="text-[#009E61] font-bold mr-2">•</span>
                <span className="text-gray-700">
                  Consistently striving to exceed customer expectations.
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <ClientsSection />

      {/* Distribution/Demographics Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#f8f8f8]"
      >
        <motion.h2
          variants={slideUp}
          className="text-2xl sm:text-3xl font-bold text-center text-[#000000] mb-8 sm:mb-12"
        >
          OUR REACH & DISTRIBUTION
        </motion.h2>

        {/* Centered industry items */}
        <motion.div variants={container} className="flex flex-col items-center">
          {/* First row - 3 items */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8 md:mb-12"
          >
            {[
              {
                icon: <FaIndustry className="text-[#E21138]" size={70} />,
                text: "Manufacturing Units",
              },
              {
                icon: <FaBuilding className="text-[#EC5800]" size={70} />,
                text: "Construction & Infrastructure",
              },
              {
                icon: <FaCar className="text-[#40B5AD]" size={70} />,
                text: "Automotive Industry",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex flex-col items-center text-center w-40 sm:w-48"
              >
                <span className="mb-3">{item.icon}</span>
                <span className="text-lg font-medium text-gray-800">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Second row - 2 items */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12"
          >
            {[
              {
                icon: <FaOilCan className="text-[#009E61]" size={70} />,
                text: "Oil & Gas Sector",
              },
              {
                icon: <FaShip className="text-[#6E260E]" size={70} />,
                text: "Marine Applications",
              },
            ].map((item, index) => (
              <motion.div
                key={index + 3}
                variants={item}
                className="flex flex-col items-center text-center w-40 sm:w-48"
              >
                <span className="mb-3">{item.icon}</span>
                <span className="text-lg font-medium text-gray-800">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Description at bottom */}
        <motion.div variants={item} className="max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            We proudly serve clients across multiple sectors with our
            specialized coating solutions, delivering high-performance products
            tailored to each industry's unique requirements.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            With a nationwide distribution network and technical expertise, we
            ensure timely delivery and product support wherever our clients need
            us.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;
