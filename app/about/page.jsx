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
} from "react-icons/fa";

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
          src="/assets/aboutbg.jpg"
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
              src="/about-image.jpg"
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
              className="text-2xl sm:text-3xl font-bold text-[#6E260E] mb-4 sm:mb-6"
            >
              ABOUT US
            </motion.h2>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-gray-700 mb-4"
            >
              Founded in 2005,{" "}
              <span className="text-[#E21138] font-medium">
                Dhaniram Paints
              </span>{" "}
              has grown from a small regional manufacturer to a nationally
              recognized leader in industrial and decorative coatings. Our
              journey began with a single production facility in [Your
              Location], and through relentless commitment to quality and
              customer satisfaction, we've expanded our operations across India.
            </motion.p>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-gray-700 mb-4"
            >
              Specializing in{" "}
              <span className="text-[#E21138]">epoxy coatings</span>,{" "}
              <span className="text-[#40B5AD]">bitumen paints</span>, and{" "}
              <span className="text-[#009E61]">aluminum finishes</span>, we
              serve diverse industries including manufacturing, infrastructure,
              automotive, and marine applications. Our state-of-the-art
              manufacturing plants incorporate German technology and automated
              production lines, ensuring precision in every batch.
            </motion.p>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-gray-700"
            >
              What truly sets us apart is our{" "}
              <span className="text-[#EC5800] font-medium">
                customer-centric approach
              </span>
              . Each product undergoes rigorous testing in our in-house
              laboratory, and our technical team provides personalized
              consultation to ensure optimal coating solutions for every
              project. From the Himalayan infrastructure projects to coastal
              marine applications, Dhaniram Paints has become synonymous with
              durability and performance.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="py-12 md:py-16 bg-gradient-to-br from-[#40B5AD]/10 to-[#009E61]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={slideUp}
            className="text-2xl sm:text-3xl font-bold text-center text-[#6E260E] mb-8 sm:mb-12"
          >
            OUR CORE VALUES
          </motion.h2>
          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                color: "#E21138",
                title: "Quality Excellence",
                icon: <FaAward className="text-3xl sm:text-4xl" />,
                desc: "Uncompromising standards in every product we manufacture",
              },
              {
                color: "#EC5800",
                title: "Innovation",
                icon: <FaIndustry className="text-3xl sm:text-4xl" />,
                desc: "Continuous research for advanced coating solutions",
              },
              {
                color: "#009E61",
                title: "Sustainability",
                icon: <FaBuilding className="text-3xl sm:text-4xl" />,
                desc: "Environmentally responsible manufacturing processes",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full flex items-center justify-center mb-4 text-white"
                  style={{ backgroundColor: value.color }}
                >
                  {value.icon}
                </motion.div>
                <h3
                  className="text-lg sm:text-xl font-semibold mb-2"
                  style={{ color: value.color }}
                >
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {value.desc}
                </p>
              </motion.div>
            ))}
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
            className="text-2xl sm:text-3xl font-bold text-center text-[#6E260E] mb-8 sm:mb-12"
          >
            COMPANY OVERVIEW
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Background Column */}
            <motion.div
              variants={item}
              className="bg-[#f8f8f8] p-6 sm:p-8 rounded-lg"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-[#6E260E] mb-4 sm:mb-6 border-b-2 border-[#E21138] pb-2">
                Background
              </h3>
              <ul className="space-y-4">
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#E21138] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Established Manufacturing in 2005
                  </span>
                </motion.li>
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#E21138] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Initially focused on serving price-sensitive customers in
                    the local market
                  </span>
                </motion.li>
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#E21138] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Limited emphasis on high-quality paint products in the early
                    years
                  </span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Strategic Shift Column */}
            <motion.div
              variants={item}
              className="bg-[#f8f8f8] p-6 sm:p-8 rounded-lg"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-[#6E260E] mb-4 sm:mb-6 border-b-2 border-[#40B5AD] pb-2">
                Strategic Shift in 2020
              </h3>
              <ul className="space-y-4">
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#40B5AD] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Shifted focus towards improving product quality
                  </span>
                </motion.li>
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#40B5AD] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Expanded operations beyond local markets to cater to
                    customers across India
                  </span>
                </motion.li>
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#40B5AD] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Successfully supplied products to over 50+ government
                    organizations in the past two years
                  </span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Quality Commitment Column */}
            <motion.div
              variants={item}
              className="bg-[#f8f8f8] p-6 sm:p-8 rounded-lg"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-[#6E260E] mb-4 sm:mb-6 border-b-2 border-[#009E61] pb-2">
                Commitment to Quality
              </h3>
              <ul className="space-y-4">
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#009E61] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Focused on improving the effectiveness of the quality
                    management system
                  </span>
                </motion.li>
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#009E61] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Actively engaged in understanding customer requirements
                  </span>
                </motion.li>
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#009E61] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Consistently strived to exceed customer expectations
                  </span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Challenges & Solutions Column */}
            <motion.div
              variants={item}
              className="bg-[#f8f8f8] p-6 sm:p-8 rounded-lg"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-[#6E260E] mb-4 sm:mb-6 border-b-2 border-[#EC5800] pb-2">
                Challenges & Solutions
              </h3>
              <ul className="space-y-4">
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#EC5800] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Operations were significantly disrupted due to COVID-19
                    lockdowns
                  </span>
                </motion.li>
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#EC5800] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Faced challenges from rising raw material costs
                  </span>
                </motion.li>
                <motion.li variants={item} className="flex items-start">
                  <span className="text-[#EC5800] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    Established state-of-the-art testing laboratory to enhance
                    quality assurance
                  </span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Team Section */}
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
            className="text-2xl sm:text-3xl font-bold text-center text-[#6E260E] mb-8 sm:mb-12"
          >
            OUR LEADERSHIP TEAM
          </motion.h2>
          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              {
                name: "Sidhant Sachdev",
                role: "HEAD - MARKETING",
                color: "#E21138",
                desc: "Driving brand growth and customer engagement strategies",
                img: "/team/sidhant-sachdev.jpg",
              },
              {
                name: "Manav Sachdev",
                role: "HEAD - PRODUCTION",
                color: "#40B5AD",
                desc: "Ensuring manufacturing excellence and quality control",
                img: "/assets/manav_sir.png",
              },
              {
                name: "Balchand Sachdev",
                role: "HEAD - SALES",
                color: "#EC5800",
                desc: "Leading sales strategy and client relationships",
                img: "/team/balchand-sachdev.jpg",
              },
              {
                name: "Ajit Sachdev",
                role: "PROPRIETOR & HEAD - OPERATIONS",
                color: "#009E61",
                desc: "Overseeing company vision and operational excellence",
                img: "/team/ajit-sachdev.jpg",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 border-t-4"
                style={{ borderColor: member.color }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative pt-[100%]"
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full absolute top-0 left-0"
                  />
                </motion.div>
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p
                    className="text-sm sm:text-base mt-1"
                    style={{ color: member.color }}
                  >
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base mt-2 sm:mt-3">
                    {member.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

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
          className="text-2xl sm:text-3xl font-bold text-center text-[#6E260E] mb-8 sm:mb-12"
        >
          OUR REACH & DISTRIBUTION
        </motion.h2>
        <motion.div
          variants={container}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          <motion.div variants={item}>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#6E260E] mb-4 sm:mb-6 flex items-center">
              <FaMapMarkedAlt className="mr-2 text-[#EC5800]" />
              Serving Diverse Industries
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              We proudly serve clients across multiple sectors with our
              specialized coating solutions:
            </p>
            <motion.ul variants={container} className="space-y-2 sm:space-y-3">
              {[
                {
                  icon: <FaIndustry className="text-[#E21138]" />,
                  text: "Manufacturing Units",
                },
                {
                  icon: <FaBuilding className="text-[#EC5800]" />,
                  text: "Construction & Infrastructure",
                },
                {
                  icon: <FaCar className="text-[#40B5AD]" />,
                  text: "Automotive Industry",
                },
                {
                  icon: <FaOilCan className="text-[#009E61]" />,
                  text: "Oil & Gas Sector",
                },
                {
                  icon: <FaShip className="text-[#6E260E]" />,
                  text: "Marine Applications",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  className="flex items-start"
                >
                  <span className="mt-1 mr-3">{item.icon}</span>
                  <span className="text-sm sm:text-base text-gray-700">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            variants={item}
            className="relative h-64 sm:h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden border-4 border-[#6E260E]/20 mt-6 md:mt-0"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute inset-0 bg-gradient-to-r from-[#40B5AD]/20 to-[#009E61]/20 z-10 flex items-center justify-center"
            >
              <div className="text-center p-4 sm:p-6 bg-white/90 rounded-lg shadow-lg max-w-xs">
                <h3 className="text-lg sm:text-xl font-bold text-[#6E260E] mb-2">
                  Our Network
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  Serving clients across India with regional distribution
                  centers
                </p>
                <div className="flex justify-center space-x-2">
                  {["#E21138", "#EC5800", "#40B5AD", "#009E61", "#6E260E"].map(
                    (color, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full"
                        style={{ backgroundColor: color }}
                      ></motion.span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
            <Image
              src="/distribution-map.jpg"
              alt="Dhaniram Paints Distribution Map"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;
