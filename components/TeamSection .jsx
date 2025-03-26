"use client";

import React from "react";
import Image from "next/image";

const teamMembers = [
  { name: "John Doe", image: "/assets/team1.jpg", position: "top" },
  { name: "Emily Smith", image: "/assets/team2.jpg", position: "bottom" },
  { name: "Michael Johnson", image: "/assets/team3.jpg", position: "top" },
  { name: "Sophia Patel", image: "/assets/team4.jpg", position: "bottom" },
];

const TeamSection = () => {
  return (
    <section className="bg-[#0E0F11] text-white py-16 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold">Meet Our Team</h2>
      <p className="text-gray-400 mt-2">
        Explore Our Success Stories and Innovative Projects
      </p>

      {/* Team Images Layout */}
      <div className="flex justify-center items-center mt-10 gap-8 flex-wrap">
        <div className="flex flex-col gap-6">
          {teamMembers
            .filter((member) => member.position === "top")
            .map((member, index) => (
              <div
                key={index}
                className="w-36 h-60 relative overflow-hidden rounded-full bg-gray-800"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
        </div>

        <div className="flex flex-col gap-6">
          {teamMembers
            .filter((member) => member.position === "bottom")
            .map((member, index) => (
              <div
                key={index}
                className="w-36 h-60 relative overflow-hidden rounded-full bg-gray-800"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
