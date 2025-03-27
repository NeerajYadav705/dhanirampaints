"use client";
import Image from "next/image";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dhani Ram",
      role: "Founder & CEO",
      image: "/team/dhani-ram.jpg",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Head of R&D",
      image: "/team/priya-sharma.jpg",
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "Production Manager",
      image: "/team/rahul-verma.jpg",
    },
    {
      id: 4,
      name: "Ananya Patel",
      role: "Quality Control",
      image: "/team/ananya-patel.jpg",
    },
  ];

  return (
    <section id="our-team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our success stories and innovative projects
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group relative">
              {/* Team Member Image */}
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Team Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 rounded-full text-sm font-medium tracking-wide">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;