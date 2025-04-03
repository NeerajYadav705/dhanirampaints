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

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Footer = () => {
  return (
    <motion.footer 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="relative overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-[#669BBC]"
    >
      {/* Elegant criss-cross wavy lines background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
        <svg 
          viewBox="0 0 1200 600" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Diagonal wave 1 (6E260E) */}
          <path 
            d="M-100,100 C200,0 400,200 700,100 S1100,0 1300,100" 
            stroke="#6E260E" 
            strokeWidth="1.5" 
            fill="none"
            strokeDasharray="5,5"
          />
          
          {/* Diagonal wave 2 (E21138) */}
          <path 
            d="M-100,300 C200,200 400,400 700,300 S1100,200 1300,300" 
            stroke="#E21138" 
            strokeWidth="1.5" 
            fill="none"
            strokeDasharray="5,5"
          />
          
          {/* Diagonal wave 3 (40B5AD) */}
          <path 
            d="M-100,500 C200,400 400,600 700,500 S1100,400 1300,500" 
            stroke="#40B5AD" 
            strokeWidth="1.5" 
            fill="none"
            strokeDasharray="5,5"
          />
          
          {/* Opposite diagonal wave 1 (009E61) */}
          <path 
            d="M1300,100 C1000,0 800,200 500,100 S100,0 -100,100" 
            stroke="#009E61" 
            strokeWidth="1.5" 
            fill="none"
            strokeDasharray="5,5"
          />
          
          {/* Opposite diagonal wave 2 (EC5800) */}
          <path 
            d="M1300,300 C1000,200 800,400 500,300 S100,200 -100,300" 
            stroke="#EC5800" 
            strokeWidth="1.5" 
            fill="none"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Your existing footer content remains unchanged */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <motion.div variants={item} className="space-y-4">
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
            <motion.div 
              variants={container}
              className="flex space-x-4 pt-2"
            >
              <motion.a
                variants={item}
                whileHover={{ y: -3 }}
                href="#"
                className="text-[#6E260E] hover:text-[#E21138] transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a
                variants={item}
                whileHover={{ y: -3 }}
                href="#"
                className="text-[#6E260E] hover:text-[#EC5800] transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                variants={item}
                whileHover={{ y: -3 }}
                href="#"
                className="text-[#6E260E] hover:text-[#40B5AD] transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={item} className="space-y-4">
            <h4 className="text-lg font-semibold text-[#6E260E]">Explore</h4>
            <motion.ul 
              variants={container}
              className="space-y-3"
            >
              {[
                { href: "/", text: "Home", color: "#E21138" },
                { href: "/about", text: "About Us", color: "#EC5800" },
                { href: "/products", text: "Products", color: "#40B5AD" },
                { href: "/contact", text: "Contact Us", color: "#009E61" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  variants={item}
                  whileHover={{ x: 5 }}
                >
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
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item} className="space-y-4">
            <h4 className="text-lg font-semibold text-[#6E260E]">Get in Touch</h4>
            <motion.div 
              variants={container}
              className="space-y-3"
            >
              <motion.div 
                variants={item}
                className="flex items-start space-x-3"
              >
                <FaMapMarkerAlt className="mt-1 text-[#009E61]" />
                <p className="text-gray-600">
                  123 Industrial Area, Paint Nagar<br />
                  Mumbai, Maharashtra 400001
                </p>
              </motion.div>
              <motion.div 
                variants={item}
                whileHover={{ x: 3 }}
                className="flex items-center space-x-3"
              >
                <FaPhone className="text-[#E21138]" />
                <a
                  href="tel:+911234567890"
                  className="text-gray-600 hover:text-[#6E260E] transition-colors duration-300"
                >
                  +91 12345 67890
                </a>
              </motion.div>
              <motion.div 
                variants={item}
                whileHover={{ x: 3 }}
                className="flex items-center space-x-3"
              >
                <FaEnvelope className="text-[#EC5800]" />
                <a
                  href="mailto:info@dhanjrampaints.com"
                  className="text-gray-600 hover:text-[#6E260E] transition-colors duration-300"
                >
                  info@dhanjrampaints.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-[#6E260E]/30 to-transparent my-8"
        ></motion.div>

        {/* Copyright */}
        <motion.div 
          variants={container}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.p 
            variants={item}
            className="text-gray-500 text-sm"
          >
            &copy; {new Date().getFullYear()} DhaniRam Paints. All Rights Reserved.
          </motion.p>
          <motion.div 
            variants={container}
            className="flex space-x-6 mt-4 md:mt-0"
          >
            <motion.div variants={item}>
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-[#6E260E] text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-[#6E260E] text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
