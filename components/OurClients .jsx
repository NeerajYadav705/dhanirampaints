import React from "react";
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
    <section className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-[#6e260e] mb-10">
        Our Clients
      </h2>

      {/* Marquee Scrolling Container */}
      <div className="overflow-hidden relative w-full">
        <div className="flex w-[200%] animate-marquee">
          {/* Original Client Logos */}
          {clients.map((logo, index) => (
            <div
              key={index}
              className="mx-2 sm:mx-4 flex-shrink-0 w-24 sm:w-40 h-16 sm:h-24 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Client ${index + 1}`}
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
          ))}

          {/* Duplicate Logos for Smooth Loop */}
          {clients.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="mx-2 sm:mx-4 flex-shrink-0 w-24 sm:w-40 h-16 sm:h-24 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Client ${index + 1}`}
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
