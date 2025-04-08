"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  "/assets/client1.png", // ANJANEYA
  "/assets/client2.png", // INDIRAIL
  "/assets/client3.png", // ANDI
  "/assets/client4.png",
  "/assets/client5.png",
  "/assets/client6.jpg",
  "/assets/client7.png",
  "/assets/client8.png",
  "/assets/client9.jpg",
  "/assets/client10.jpg",
  "/assets/client11.png",
  "/assets/client12.png",
  "/assets/client13.png",
  "/assets/client14.png",
  "/assets/client15.png",
  "/assets/client16.png",
  "/assets/client17.png",
  "/assets/client18.png",
];

const OurClients = () => {
  // Responsive image dimensions
  const mobileWidth = 160;
  const desktopWidth = 220;
  const mobileHeight = 80;
  const desktopHeight = 110;

  return (
    <section className="py-12 sm:py-16 bg-white px-4 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] mb-2 sm:mb-3">
          Our Valued Clients
        </h2>
        <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-[#E21138] mx-auto"></div>
      </motion.div>

      {/* First Marquee - Right to Left */}
      <div className="relative w-full mb-6 sm:mb-10 h-[110px] sm:h-[160px] overflow-hidden">
        <div className="flex w-[200%] animate-marquee-right whitespace-nowrap h-full items-center">
          {[...clients.slice(0, 9), ...clients.slice(0, 9)].map((logo, index) => (
            <motion.div
              key={`top-${index}`}
              className="inline-flex items-center justify-center mx-3 sm:mx-6 h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative" style={{ 
                width: `${mobileWidth}px`,
                height: `${mobileHeight}px`,
                padding: '8px 0'
              }}>
                <Image
                  src={logo}
                  alt={`Client ${(index % 9) + 1}`}
                  width={desktopWidth}
                  height={desktopHeight}
                  className="object-contain w-full h-full"
                  quality={100}
                  priority
                  unoptimized
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Second Marquee - Left to Right */}
      <div className="relative w-full h-[110px] sm:h-[160px] overflow-hidden mt-6 sm:mt-8">
        <div className="flex w-[200%] animate-marquee-left whitespace-nowrap h-full items-center">
          {[...clients.slice(9), ...clients.slice(9)].map((logo, index) => (
            <motion.div
              key={`bottom-${index}`}
              className="inline-flex items-center justify-center mx-3 sm:mx-6 h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative" style={{ 
                width: `${mobileWidth}px`,
                height: `${mobileHeight}px`,
                padding: '8px 0'
              }}>
                <Image
                  src={logo}
                  alt={`Client ${(index % 9) + 10}`}
                  width={desktopWidth}
                  height={desktopHeight}
                  className="object-contain w-full h-full"
                  quality={100}
                  priority
                  unoptimized
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx global>{`
        @keyframes marquee-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee-right,
          .animate-marquee-left {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};

export default OurClients;