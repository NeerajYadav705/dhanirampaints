import React from "react";

const VisionMissionCommitment = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Vision */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center md:text-left border border-gray-200">
          <h3 className="text-2xl font-bold text-[#e21138]">OUR VISION</h3>
          <p className="text-gray-700 mt-4">
            To be a leading name in the paint and coatings industry, recognized
            for our commitment to quality and sustainable solutions, while
            fostering strong partnerships and contributing to the growth of
            industries across India.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center md:text-left border border-gray-200">
          <h3 className="text-2xl font-bold text-[#ec5800]">OUR MISSION</h3>
          <p className="text-gray-700 mt-4">
            To provide high-quality, durable, and cost-effective paint solutions
            that enhance infrastructure and industry. To build long-term
            relationships with businesses by offering reliable service,
            expertise, and value-driven solutions.
          </p>
        </div>

        {/* Commitment */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center md:text-left border border-gray-200">
          <h3 className="text-2xl font-bold text-[#40b5ad]">OUR COMMITMENT</h3>
          <p className="text-gray-700 mt-4">
            At Dhaniram Paints, we are committed to innovation, sustainability,
            and excellence. We continuously strive to develop eco-friendly and
            high-performance coatings that meet the evolving needs of
            industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionCommitment;
