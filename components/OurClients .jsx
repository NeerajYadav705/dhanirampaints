"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  "/assets/client1.png",
  "/assets/client2.png",
  "/assets/client3.png",
  "/assets/client4.png",
  "/assets/client5.png",
  "/assets/client6.jpg",
  "/assets/client7.png",
  "/assets/client8.png",
  "/assets/client9.png",
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

      {/* First Marquee (Right-to-Left) - Larger mobile size */}
      <div className="relative overflow-hidden w-full mb-6 h-40 sm:h-48">
        <div className="flex w-[200%] animate-marquee-right whitespace-nowrap h-full items-center">
          {[...clients.slice(0, 9), ...clients.slice(0, 9)].map((logo, index) => (
            <motion.div
              key={`top-${index}`}
              className="inline-flex items-center justify-center mx-4 sm:mx-8 w-56 sm:w-72"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative w-full h-62 sm:h-40"> {/* Increased mobile height */}
                <Image
                  src={logo}
                  alt={`Client ${(index % 9) + 1}`}
                  fill
                  className="object-contain"
                  quality={100}
                  loading="eager"
                  unoptimized // Ensures images display properly
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Second Marquee (Left-to-Right) - Larger mobile size */}
      <div className="relative overflow-hidden w-full h-40 sm:h-48">
        <div className="flex w-[200%] animate-marquee-left whitespace-nowrap h-full items-center">
          {[...clients.slice(9), ...clients.slice(9)].map((logo, index) => (
            <motion.div
              key={`bottom-${index}`}
              className="inline-flex items-center justify-center mx-4 sm:mx-8 w-56 sm:w-72"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative w-full h-32 sm:h-40"> {/* Increased mobile height */}
                <Image
                  src={logo}
                  alt={`Client ${(index % 9) + 10}`}
                  fill
                  className="object-contain"
                  quality={100}
                  loading="eager"
                  unoptimized // Ensures images display properly
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animation CSS with adjusted speed for larger images */}
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
          animation: marquee-right 40s linear infinite;
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee-right,
          .animate-marquee-left {
            animation-duration: 30s; /* Faster on mobile for better visibility */
          }
        }
      `}</style>
    </section>
  );
};

export default OurClients;