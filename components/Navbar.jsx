"use client";
import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaChevronDown,
} from "react-icons/fa";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const productCategories = [
  { name: "Premium Brand: Olympus", id: "olympus-products" },
  { name: "Standard Brand: Luxoite", id: "luxoite-products" },
  { name: "Economical Brand: Rolex", id: "rolex-products" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsDropdownOpen, setMobileProductsDropdownOpen] =
    useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Detect screen width for mobile menu
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide on scroll down
      } else {
        setShowNavbar(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setProductsDropdownOpen(false);
    setMobileProductsDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/assets/dhan.jpg"
          alt="Logo"
          width={60}
          height={60}
          className="rounded-full w-12 h-12 sm:w-14 sm:h-14"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {[
            { name: "Home", id: "home", color: "#E21138" },
            { name: "About Us", id: "about-us", color: "#Ec5800" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-lg text-black transition cursor-pointer group"
            >
              {item.name}
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: item.color }}
              />
            </button>
          ))}

          {/* Products Dropdown */}
          <div className="relative group" ref={dropdownRef}>
            <button
              onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              className="flex items-center text-lg text-black transition cursor-pointer"
            >
              Products
              <FaChevronDown
                className={`ml-1 transition-transform ${
                  productsDropdownOpen ? "rotate-180" : ""
                }`}
              />
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "#40B5AD" }}
              />
            </button>

            {productsDropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                {productCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToSection(category.id)}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {[
            {
              name: "Quality Control",
              id: "quality-control",
              color: "#009E61",
            },
            { name: "Contact Us", id: "contact", color: "#6E260E" },
            { name: "Enquiry", id: "enquiry", color: "#9333EA" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-lg text-black transition cursor-pointer group"
            >
              {item.name}
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: item.color }}
              />
            </button>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMobile && (
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="focus:outline-none">
                <RxHamburgerMenu className="text-2xl" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[300px]">
                <SheetHeader className="mb-6">
                  <SheetTitle >
                    {/* <Image
                      src="/assets/dhan.jpg"
                      alt="Logo"
                      width={60}
                      height={60}
                      className="rounded-full w-14 h-14"
                    /> */}
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col h-[calc(100%-80px)] justify-between">
                  {/* Navigation Links */}
                  <div className="space-y-4 overflow-y-auto">
                    {[
                      { name: "Home", id: "home" },
                      { name: "About Us", id: "about-us" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-800 font-medium"
                      >
                        {item.name}
                      </button>
                    ))}

                    {/* Mobile Products Dropdown */}
                    <div className="space-y-2">
                      <button
                        onClick={() =>
                          setMobileProductsDropdownOpen(
                            !mobileProductsDropdownOpen
                          )
                        }
                        className="w-full flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-800 font-medium"
                      >
                        <span>Products</span>
                        <FaChevronDown
                          className={`transition-transform ${
                            mobileProductsDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {mobileProductsDropdownOpen && (
                        <div className="ml-4 space-y-2">
                          {productCategories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => scrollToSection(category.id)}
                              className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
                            >
                              {category.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {[
                      { name: "Quality Control", id: "quality-control" },
                      { name: "Contact Us", id: "contact" },
                      { name: "Enquiry", id: "enquiry" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-800 font-medium"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>

                  {/* Social Media Links */}
                  <div className="flex justify-center space-x-6 py-4 border-t border-gray-200">
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl text-gray-600 hover:text-[#E21138] transition"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl text-gray-600 hover:text-[#40B5AD] transition"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl text-gray-600 hover:text-[#Ec5800] transition"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
