"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image with Badge - Left Side */}
          <div className="relative w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/assets/About Us.jpg"
                alt="Dhaniram Paints Factory"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ y: -20, scale: 0.9 }}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              }}
              className="absolute -top-5 -left-5 bg-[#E21138] text-white px-6 py-3 rounded-full shadow-lg z-10"
            >
              <span className="font-bold text-lg">20+ Years</span>
              <span className="block text-sm">of Experience</span>
            </motion.div>
          </div>

          {/* Text Content - Right Side */}
          <div className="w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            >
              ABOUT US
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 text-gray-600 relative"
            >
              {/* Left alignment guide (visible only in development) */}
              <div className="hidden lg:block absolute left-0 top-0 h-full w-px bg-gray-200 -ml-12"></div>
              
              <p className="text-justify text-align: justify; text-justify: inter-word;">
                Founded in 2005, With our previous branding under the name of
                our manufacturing & marketing firm, D R Paint & Chemicals, we
                have been a trusted name in the paint manufacturing industry,
                delivering high-performance coating solutions that protect,
                enhance, and add value to a wide range of applications. As a
                growing MSME, we specialize in industrial, decorative, and
                specialty paints, offering advanced coatings designed for
                durability and excellence.
              </p>
              <p className="text-justify text-align: justify; text-justify: inter-word;">
                With nearly two decades of expertise, we have built a reputation
                for quality, innovation, and reliability, serving businesses
                that demand long-lasting and cost-effective paint solutions. Our
                commitment extends beyond products—we foster strong B2B
                relationships, working closely with manufacturers, construction
                firms, infrastructure developers, and industries to provide
                tailored coating solutions that meet their specific needs.
              </p>
            </motion.div>

            {/* Explore More Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Link href="/about" passHref>
                <button className="bg-[#E21138] hover:bg-[#C50E32] text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg cursour-pointer">
                  Explore More
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;