"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const brandColors = ["#E21138", "#EC5800", "#40B5AD", "#009E61", "#6E260E"];

  return (
    <footer className="relative overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Subtle diagonal gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E21138]/5 via-[#EC5800]/5 to-[#6E260E]/5" />

      {/* Thin color accent bars at top */}
      <div className="absolute top-0 left-0 right-0 h-1 flex z-10">
        {brandColors.map((color, i) => (
          <div 
            key={i} 
            className="h-full flex-1"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Your original content starts here - completely unchanged */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="DhaniRam Paints Logo"
                width={150}
                height={80}
                className="mr-3"
              />
            </div>
            <p className="text-gray-600">
              Transforming spaces with quality paints and coatings since 2005.
            </p>
            <div className="flex space-x-4 pt-2">
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-[#6E260E] hover:text-[#E21138] transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-[#6E260E] hover:text-[#EC5800] transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-[#6E260E] hover:text-[#40B5AD] transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-[#6E260E]">Explore</h4>
            <ul className="space-y-3">
              {[
                { href: "/", text: "Home", color: "#E21138" },
                { href: "/about", text: "About Us", color: "#EC5800" },
                { href: "/products", text: "Products", color: "#40B5AD" },
                { href: "/contact", text: "Contact Us", color: "#009E61" },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#6E260E] transition-colors duration-300 flex items-center"
                  >
                    <span
                      className="w-2 h-2 rounded-full mr-2"
                      style={{ backgroundColor: link.color }}
                    ></span>
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-[#6E260E]">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-[#009E61]" />
                <p className="text-gray-600">
                  Plot 7B, Industrial Area, Bhanpuri,
                  <br />
                  Raipur, Chattisgarh
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#E21138]" />
                <a
                  href="tel:+918109288169"
                  className="text-gray-600 hover:text-[#6E260E] transition-colors duration-300"
                >
                  +91 81092 88169 ,
                </a>
                <a
                  href="tel:+919773764257"
                  className="text-gray-600 hover:text-[#6E260E] transition-colors duration-300"
                >
                  +91 97737 64257
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#EC5800]" />
                <a
                  href="mailto:support@dhanirampaint.com"
                  className="text-gray-600 hover:text-[#6E260E] transition-colors duration-300"
                >
                  support@dhanirampaint.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-[#6E260E]/30 to-transparent my-8"
        />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DhaniRam Paints. All Rights
            Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-[#6E260E] text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-[#6E260E] text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;