"use client";
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/assets/dhan.jpg"
          alt="Logo"
          width={70}
          height={70}
          className="rounded-full"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {[
            { name: "Home", id: "home", color: "#E21138" },
            { name: "About Us", id: "about-us", color: "#Ec5800" },
            { name: "Products", id: "products", color: "#40B5AD" },
            { name: "Quality Control", id: "quality-control", color: "#009E61" },
            { name: "Contact Us", id: "contact-us", color: "#6E260E" },
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
          <div className="text-2xl">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger>
                <RxHamburgerMenu />
              </SheetTrigger>
              <SheetContent className="flex flex-col justify-between h-full backdrop-blur-sm bg-white">
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src="/assets/dhan.jpg"
                      alt="Logo"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </SheetTitle>
                </SheetHeader>

                {/* Sidebar Navigation Buttons */}
                <div className="flex flex-col space-y-4 py-4">
                  {[
                    { name: "Home", id: "home", color: "#E21138" },
                    { name: "About Us", id: "about-us", color: "#Ec5800" },
                    { name: "Products", id: "products", color: "#40B5AD" },
                    { name: "Quality Control", id: "quality-control", color: "#009E61" },
                    { name: "Contact Us", id: "contact-us", color: "#6E260E" },
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

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 py-4 mt-auto">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-black hover:text-[#E21138] transition"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-black hover:text-[#40B5AD] transition"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-black hover:text-[#Ec5800] transition"
                  >
                    <FaTwitter />
                  </a>
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
