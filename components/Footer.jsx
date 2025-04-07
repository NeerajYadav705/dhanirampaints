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
    <footer className="relative overflow-hidden pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-[#40B5AD]">
      {/* Vector Background */}
      <div className="absolute inset-0 z-0 opacity-90">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#2a7a74]"
        >
          <defs>
            <pattern
              id="pattern-circles"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.2" />
            </pattern>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#40B5AD" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2a7a74" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#gradient)" />
          <rect width="100%" height="100%" fill="url(#pattern-circles)" />

          {/* Decorative paint brush strokes */}
          <path
            d="M0,150 Q150,50 300,200 T600,100 T900,250 T1200,150"
            stroke="white"
            strokeWidth="3"
            fill="none"
            opacity="0.08"
          />
          <path
            d="M0,350 Q150,250 300,400 T600,300 T900,450 T1200,350"
            stroke="white"
            strokeWidth="3"
            fill="none"
            opacity="0.08"
          />
        </svg>
      </div>

      {/* Color accent bars at top */}
      <div className="absolute top-0 left-0 right-0 h-2 flex z-10">
        {brandColors.map((color, i) => (
          <motion.div
            key={i}
            className="h-full flex-1"
            style={{ backgroundColor: color }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
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
            <p className="text-white/90 text-sm leading-relaxed mt-[-30px]">
              Transforming spaces with quality paints and coatings since 2005.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                href="https://www.instagram.com/dhanirampaint?utm_source=qr&igsh=N20xbTVpaXMyd2l3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-[#EC5800]"
              >
                <FaInstagram size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-[#3153b3]"
              >
                <FaLinkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#E21138] mr-2"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", text: "Home" },
                { href: "/about", text: "About Us" },
                { href: "/", text: "Products" },
                { href: "/contact", text: "Contact Us" },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors duration-300 flex items-center text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 mr-2"></span>
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
            <h4 className="text-lg font-semibold flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#009E61] mr-2"></span>
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-0.5 flex-shrink-0" />
                <p className="text-white/90 text-sm">
                  Plot 7B, Industrial Area, Bhanpuri,
                  <br />
                  Raipur, Chattisgarh
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="flex-shrink-0" />
                <div className="flex flex-wrap gap-x-2">
                  <a
                    href="tel:+918109288169"
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm"
                  >
                    +91 81092 88169
                  </a>
                  <a
                    href="tel:+919773764257"
                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm"
                  >
                    +91 97737 64257
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="flex-shrink-0" />
                <a
                  href="mailto:support@dhanirampaint.com"
                  className="text-white/90 hover:text-white transition-colors duration-300 text-sm"
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
          className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-8"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-xs md:text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} DhaniRam Paints. All Rights
            Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/"
              className="text-white/70 hover:text-white transition-colors duration-300 text-xs md:text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-white/70 hover:text-white transition-colors duration-300 text-xs md:text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Developer Credit - Added Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-white/50 text-xs"
        >
          <p>
            Crafted by{" "}
            <a
              href="/"
              // target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white underline underline-offset-2"
            >
              Neeraj Yadav
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
