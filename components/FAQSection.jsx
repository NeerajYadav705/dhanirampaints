"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRef = useRef(null);

  // Close FAQ when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (faqRef.current && !faqRef.current.contains(event.target)) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of paints do you specialize in?",
      answer:
        "We specialize in industrial, decorative, and specialty paints including epoxy coatings, bitumen paints, aluminum paints, primers, and advanced industrial coatings designed for durability and excellence.",
    },
    {
        question: "How long has your company been in business?",
        answer: "We've been transforming spaces with quality since 2005, bringing over 20 years of experience to every project."
      },
      {
        question: "Do you offer custom color matching?",
        answer: "Yes, we provide precise color matching services to ensure your paint perfectly complements your space and brand identity."
      },
      {
        question: "What makes your paints more durable?",
        answer: "Our formulations use premium resins and additives that provide superior adhesion, weather resistance, and long-lasting color retention."
      },
      {
        question: "How do you ensure timely delivery ?",
        answer: "Situated at the heart of our country, we have excellent connectivity throughout India via road and railway, from our manufacturing site situated in Raipur (Chhattisgarh)."
      }
  ];

  return (
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-8" ref={faqRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#000000] mb-12">
          Frequently Asked Questions
          <div className="w-20 h-1 bg-[#E21138] mx-auto mt-4"></div>
        </h2>
       

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Image with Text Overlay */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-full min-h-[400px]">
              <Image
                src="/assets/FAQ.jpg"
                alt="Paint application"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0  flex items-end p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-white"
                >
              
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleQuestion(index);
                    }}
                    className="w-full flex justify-between items-center p-6 text-left"
                  >
                    <h3 className="text-lg md:text-xl font-medium text-gray-800">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#E21138]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </button>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      height: activeIndex === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 pb-6 pt-2 text-gray-600"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
