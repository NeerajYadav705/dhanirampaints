// components/QualityControlSection.jsx
import Image from "next/image";

const QualityControlSection = () => {
  const qualityFeatures = [
    {
      title: "Raw Material Testing",
      description:
        "Every raw material undergoes rigorous testing before being approved for production.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: "In-Process Quality Checks",
      description:
        "Continuous monitoring during production ensures consistent quality at every stage.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Final Product Testing",
      description:
        "Each batch undergoes comprehensive testing before leaving our facility.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
    {
      title: "Certified Standards",
      description:
        "Our products meet ISO 9001, ISO 14001, and other international quality standards.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="quality-control" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#e21138]">Quality</span> Assurance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Committed to excellence through rigorous testing and quality control
            processes
          </p>
        </div>

        {/* Quality Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {qualityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center"
            >
              <div className="text-[#40b5ad] mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Quality Process */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Image
              src="/assets/quality.jpg" // Replace with your actual image path
              alt="Quality Control Process"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Our <span className="text-[#ec5800]">Quality Control</span>{" "}
              Process
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#e21138] rounded-full p-2 mr-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Material Inspection
                  </h4>
                  <p className="text-gray-600 mt-1">
                    All raw materials are tested for purity and quality before
                    use.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#e21138] rounded-full p-2 mr-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Production Monitoring
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Automated systems track quality metrics throughout
                    manufacturing.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#e21138] rounded-full p-2 mr-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Batch Testing
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Every production batch undergoes laboratory testing.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#e21138] rounded-full p-2 mr-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Final Approval
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Products only ship after passing all quality checks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Our <span className="text-[#40b5ad]">Certifications</span> &
            Standards
          </h3>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "ISO 9001", image: "/assets/certifications/iso9001.png" },
              {
                name: "ISO 14001",
                image: "/assets/certifications/iso14001.png",
              },
              {
                name: "BIS Certified",
                image: "/assets/certifications/bis.png",
              },
              {
                name: "GreenPro",
                image: "/assets/certifications/greenpro.png",
              },
            ].map((certification, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="h-24 w-48 relative">
                  <Image
                    src={certification.image}
                    alt={certification.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 font-medium text-gray-700">
                  {certification.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityControlSection;
