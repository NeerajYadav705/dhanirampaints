"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Client data with image paths
const clients = [
  {
    logo: "/assets/client1.png",
    alt: "Manufacturing Client",
    bg: "bg-white",
  },
  {
    logo: "/assets/client2.png",
    alt: "Construction Client",
    bg: "bg-[#f8f8f8]",
  },
  {
    logo: "/assets/client3.png",
    alt: "Automotive Client",
    bg: "bg-white",
    border: "border-[#E21138]/20",
  },
  {
    logo: "/assets/client4.png",
    alt: "Government Client",
    bg: "bg-[#f8f8f8]",
    border: "border-[#40B5AD]/20",
  },
  {
    logo: "/assets/client5.png",
    alt: "Marine Client",
    bg: "bg-white",
    border: "border-[#009E61]/20",
  },
  {
    logo: "/assets/client6.jpg",
    alt: "Oil & Gas Client",
    bg: "bg-[#f8f8f8]",
    border: "border-[#EC5800]/20",
  },
  {
    logo: "/assets/client7.png",
    alt: "Industrial Client",
    bg: "bg-white",
    border: "border-[#6E260E]/20",
  },
  {
    logo: "/assets/client8.png",
    alt: "Infrastructure Client",
    bg: "bg-[#f8f8f8]",
  },
  {
    logo: "/assets/client9.jpg",
    alt: "Textile Client",
    bg: "bg-white",
  },
  {
    logo: "/assets/client10.jpg",
    alt: "Power Plant Client",
    bg: "bg-[#f8f8f8]",
    border: "border-[#E21138]/20",
  },
  {
    logo: "/assets/client11.png",
    alt: "Chemical Client",
    bg: "bg-white",
    border: "border-[#40B5AD]/20",
  },
  {
    logo: "/assets/client12.png",
    alt: "Defense Client",
    bg: "bg-[#f8f8f8]",
    border: "border-[#009E61]/20",
  },
  {
    logo: "/assets/client13.png",
    alt: "Railway Client",
    bg: "bg-white",
    border: "border-[#EC5800]/20",
  },
  {
    logo: "/assets/client14.png",
    alt: "Aviation Client",
    bg: "bg-[#f8f8f8]",
    border: "border-[#6E260E]/20",
  },
  {
    logo: "/assets/client15.png",
    alt: "Metallurgy Client",
    bg: "bg-white",
  },
  {
    logo: "/assets/client16.png",
    alt: "Shipping Client",
    bg: "bg-[#f8f8f8]",
  },
  {
    logo: "/assets/client17.png",
    alt: "Energy Client",
    bg: "bg-white",
    border: "border-[#E21138]/20",
  },
  {
    logo: "/assets/client18.png",
    alt: "Heavy Industry Client",
    bg: "bg-[#f8f8f8]",
    border: "border-[#40B5AD]/20",
  },
];

// Industry tags data
const industryTags = [
  { color: "#6E260E", label: "Manufacturing" },
  { color: "#E21138", label: "Infrastructure" },
  { color: "#40B5AD", label: "Automotive" },
  { color: "#009E61", label: "Government" },
  { color: "#EC5800", label: "Marine" },
];

const ClientsSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="py-12 md:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={slideUp} className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] mb-4">
            Our Esteemed Clients
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Trusted by industry leaders and government organizations across
            India
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className={`${client.bg} ${
                client.border || ""
              } p-4 rounded-lg shadow-sm flex items-center justify-center h-28 sm:h-32 transition-all duration-300`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={client.logo}
                  alt={client.alt}
                  fill
                  className="object-contain p-1"
                  loading={index > 5 ? "lazy" : "eager"}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ClientsSection;
