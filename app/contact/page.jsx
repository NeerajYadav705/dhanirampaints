"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Image from "next/image";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const Contact = () => {
  // Replace with your actual coordinates
  const mapLocation = {
    lat: 19.076,
    lng: 72.8777,
    zoom: 14,
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full bg-gray-50">
      {/* hero section */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="relative h-[30vh] sm:h-[70vh] md:h-[calc(100vh-300px)] min-h-[300px] w-full"
      >
        <div className="absolute inset-0 bg-black/50 z-10 flex items-end pb-12 sm:pb-16 md:pb-24 justify-center">
          <motion.h1
            variants={slideUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4"
          >
            Contact Us
          </motion.h1>
        </div>
        <Image
          src="/assets/Contact_Page.jpg"
          alt="About Dhaniram Paints"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Contact Content */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Details */}
          <motion.div variants={item} className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#000000] mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-700">
                Reach out to our team for any queries and support. We're here to
                help you with your coating problems.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-[#E21138]/10 p-3 rounded-full">
                  <FaMapMarkerAlt className="h-6 w-6 text-[#E21138]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Our Location
                  </h3>
                  <p className="text-gray-600">
                    Dhaniram Oil & Paint Industries
                    <br />
                    Plot 7B, Industrial Area, Bhanpuri
                    <br />
                    Raipur, Chattisgarh 400001
                  </p>
                  <a
                    href={`https://maps.app.goo.gl/qrij6KoDjjBpc4rTA`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6E260E] hover:underline mt-2 inline-block"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-[#40B5AD]/10 p-3 rounded-full">
                  <FaPhone className="h-6 w-6 text-[#40B5AD]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Phone Numbers
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href="tel:+918109288169"
                      className="hover:text-[#6E260E] transition-colors"
                    >
                      +91 81092 88169
                    </a>
                    <br />
                    <a
                      href="tel:+919773764257"
                      className="hover:text-[#6E260E] transition-colors"
                    >
                      +91 97737 64257
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-[#EC5800]/10 p-3 rounded-full">
                  <FaEnvelope className="h-6 w-6 text-[#EC5800]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Email Address
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:support@dhanirampaint.com"
                      className="hover:text-[#6E260E] transition-colors"
                    >
                      support@dhanirampaint.com
                    </a>
                    <br />
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-[#009E61]/10 p-3 rounded-full">
                  <FaClock className="h-6 w-6 text-[#009E61]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Business Hours
                  </h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 7:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold text-[#6E260E] mb-3">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://www.instagram.com/dhanirampaint?utm_source=qr&igsh=N20xbTVpaXMyd2l3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6E260E] hover:text-[#EC5800] transition-colors"
                >
                  <FaInstagram size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://www.linkedin.com/company/dhaniram-paint/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6E260E] hover:text-[#40B5AD] transition-colors"
                >
                  <FaLinkedin size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Google Map Section */}
          <motion.div
            variants={item}
            className="rounded-lg overflow-hidden shadow-lg border border-gray-200 h-full"
          >
            <h3 className="text-xl font-semibold text-[#000000] p-4 bg-gray-50 border-b border-gray-200">
              Our Location
            </h3>
            <div className="h-full w-full" style={{ minHeight: "400px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.186515251553!2d81.6381226!3d21.303645199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28e0d53ccc7153%3A0xf4612bcf96072e88!2sDhaniram%20Oil%20%26%20Paint%20Industries!5e0!3m2!1sen!2sin!4v1743684909380!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dhaniram Paints Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Google Map */}

      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-[#6E260E] text-white py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Have a Project Inquiry?
          </h2>
          <p className="text-lg text-[#E6D5C3] mb-6 max-w-2xl mx-auto">
            For detailed project discussions or bulk orders, please visit our
            enquiry section.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/enquiry"
            className="inline-block bg-white text-[#6E260E] font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            Go to Enquiry Form
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
