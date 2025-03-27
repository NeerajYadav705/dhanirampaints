"use client";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPaintBrush,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#7e7e7e] text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              {/* Company Logo - Replace with your actual logo image */}
              <Image
                src="/assets/logo.png"
                alt="DhaniRam Paints Logo"
                width={100}
                height={100}
                className="mr-3"
              />
              <h3 className="text-2xl font-bold">DhaniRam Paints</h3>
            </div>
            <p className="text-gray-300">
              Transforming spaces with quality paints and coatings since 2005.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-white hover:text-[#E21138] transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#EC5800] transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#40B5AD] transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links (Matching Navbar) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-[#E21138] rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-[#EC5800] rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-[#40B5AD] rounded-full mr-2"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-[#6E260E] rounded-full mr-2"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-[#009E61]" />
                <p className="text-gray-300">
                  123 Industrial Area, Paint Nagar
                  <br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#E21138]" />
                <a
                  href="tel:+911234567890"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#EC5800]" />
                <a
                  href="mailto:info@dhanjrampaints.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  info@dhanjrampaints.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#ffffff20] my-8 relative"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} DhaniRam Paints. All Rights
            Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
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
