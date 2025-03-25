import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center px-6 md:px-20">
      <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-[#e21138]">DHANIRAM</span> <br />
            <span className="text-[#40b5ad]">PAINT</span>
          </h1>
          <p className="text-gray-600 text-lg mt-3">
            WE’RE WORKING SINCE 2005 IN THIS FIELD
          </p>
          <p className="text-gray-500 text-md mt-4 leading-relaxed">
            Quality you can trust and durability you deserve—our paints ensure
            superior performance, long-lasting protection, and lasting value.
          </p>
          {/* Button */}
          <button className="mt-6 bg-[#ec5800] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#6e260e] transition cursor-pointer">
            Contact Us
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/assets/hero.png"
            alt="Painting Workers"
            width={500}
            height={500}
            className="w-full max-w-[400px] md:max-w-[500px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
