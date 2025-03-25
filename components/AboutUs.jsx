"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const AboutUs = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-us");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      let currentCount = 0;
      const interval = setInterval(() => {
        if (currentCount < 20) {
          currentCount++;
          setCount(currentCount);
        } else {
          clearInterval(interval);
        }
      }, 100);
    }
  }, [isVisible]);

  return (
    <section
      id="about-us"
      className="py-16 px-4 md:px-10 lg:px-16 flex flex-wrap items-center justify-center max-w-7xl mx-auto"
    >
      {/* Left Side - Image with Stats */}
      <div className="relative w-full md:w-3/5 lg:w-1/2 flex justify-center">
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-lg">
          <Image
            src="/assets/about.jpg" 
            alt="About Image"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Experience Badge (Floating Animation) */}
        <div className="absolute top-6 right-6 bg-white shadow-lg rounded-lg px-5 py-3 animate-bounce">
          <p className="text-sm text-gray-500">Total Experience in years</p>
          <p className="text-3xl font-bold text-[#e21138]">{count}+</p>
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-4/5 lg:w-1/2 mt-10 lg:mt-0 lg:pl-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#40b5ad]">
          About Us
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Founded in 2005, <strong>Dhaniram Paints</strong> has been a trusted name in the paint manufacturing industry, delivering high-performance coating solutions that protect, enhance, and add value to a wide range of applications.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed">
          As a growing <strong>MSME</strong>, we specialize in industrial, decorative, and specialty paints, offering <strong>epoxy coatings, bitumen paints, aluminum paints, primers</strong>, and advanced industrial coatings designed for durability and excellence.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed">
          With nearly two decades of expertise, we have built a reputation for <strong>quality, innovation, and reliability</strong>, serving businesses that demand long-lasting and cost-effective paint solutions.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Our commitment extends beyond products—we foster strong B2B relationships, working closely with <strong>manufacturers, construction firms, infrastructure developers</strong>, and industries to provide tailored coating solutions that meet their specific needs.
        </p>

        {/* Button */}
        <div className="mt-6 flex justify-center md:justify-start">
          <button className="bg-[#6e260e] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#e21138] transition cursor-pointer">
            EXPLORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
