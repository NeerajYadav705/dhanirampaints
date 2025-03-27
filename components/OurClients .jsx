"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  "/assets/client1.png",
  "/assets/client2.png",
  "/assets/client3.png",
  "/assets/client4.png",
  "/assets/client5.jpg",
  "/assets/client6.png",
  "/assets/client7.png",
  "/assets/client8.jpg",
  "/assets/client9.png",
  "/assets/client10.jpg",
];

const OurClients = () => {
  return (
    <section className="py-16 bg-white px-2 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6e260e] mb-2 sm:mb-3">
          Our Valued Clients
        </h2>
        <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-[#E21138] mx-auto"></div>
      </motion.div>

      {/* Top Marquee (Right-to-Left) */}
      <div className="relative overflow-hidden w-full mb-4 sm:mb-6">
        <div className="flex w-[200%] animate-marquee-right whitespace-nowrap">
          {[...clients].reverse().map((logo, index) => (
            <motion.div
              key={`top-${index}`}
              className="inline-flex items-center justify-center mx-3 sm:mx-6 w-40 h-28 sm:w-56 sm:h-40 md:w-64 md:h-48"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={logo}
                alt={`Client ${(index % clients.length) + 1}`}
                width={256}
                height={192}
                className="object-contain w-full h-full p-1 sm:p-2"
                quality={100}
                loading="eager"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Marquee (Left-to-Right) */}
      <div className="relative overflow-hidden w-full">
        <div className="flex w-[200%] animate-marquee-left whitespace-nowrap">
          {[...clients].reverse().map((logo, index) => (
            <motion.div
              key={`bottom-${index}`}
              className="inline-flex items-center justify-center mx-3 sm:mx-6 w-40 h-28 sm:w-56 sm:h-40 md:w-64 md:h-48"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={logo}
                alt={`Client ${(index % clients.length) + 1}`}
                width={256}
                height={192}
                className="object-contain w-full h-full p-1 sm:p-2"
                quality={100}
                loading="eager"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes marquee-right {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-right {
          animation: marquee-right 50s linear infinite;
        }
        .animate-marquee-left {
          animation: marquee-left 50s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee-right,
          .animate-marquee-left {
            animation-duration: 40s;
          }
        }
      `}</style>
    </section>
  );
};

export default OurClients;