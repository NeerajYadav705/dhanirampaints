"use client";
import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const productCategories = [
  { name: "INDUSTRIAL", path: "/industrial" },
  { name: "DECORATIVE", path: "/decorative" },
  { name: "FLOOR COATINGS", path: "/floorcoating" },
  { name: "PRECOAT", path: "/precoat" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsDropdownOpen, setMobileProductsDropdownOpen] =
    useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const dropdownRef = useRef(null);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Rest of your navbar code remains exactly the same */}
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="mr-14 w-auto h-auto"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="group relative text-lg font-medium text-black">
              <span className="group-hover:text-[#E21138]">HOME</span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#E21138] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link href="/about" className="group relative text-lg font-medium text-black">
              <span className="group-hover:text-[#EC5800]">ABOUT</span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#EC5800] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className="group relative flex items-center text-lg font-medium text-black"
              >
                <span className="group-hover:text-[#40B5AD]">PRODUCTS</span>
                <FaChevronDown
                  className={`ml-1 transition-transform ${
                    productsDropdownOpen ? "rotate-180" : ""
                  } group-hover:text-[#40B5AD]`}
                />
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#40B5AD] transition-all duration-300 group-hover:w-full"></span>
              </button>

              {productsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                  {productCategories.map((category) => (
                    <Link
                      key={category.path}
                      href={category.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setProductsDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/enquiry" className="group relative text-lg font-medium text-black">
              <span className="group-hover:text-[#009E61]">ENQUIRY</span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#009E61] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link href="/contact" className="group relative text-lg font-medium text-black">
              <span className="group-hover:text-[#6E260E]">CONTACT US</span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6E260E] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="focus:outline-none">
              <RxHamburgerMenu className="text-2xl" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle asChild>
                  <VisuallyHidden>Navigation Menu</VisuallyHidden>
                </SheetTitle>
                <div className="pt-4">
                  <Image
                    src="/assets/logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="w-16 h-auto mx-auto"
                  />
                </div>
              </SheetHeader>

              <div className="mt-6 space-y-4">
                <Link
                  href="/"
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  HOME
                </Link>
                <Link
                  href="/about"
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  ABOUT
                </Link>

                {/* Mobile Products Dropdown */}
                <div>
                  <button
                    onClick={() =>
                      setMobileProductsDropdownOpen(!mobileProductsDropdownOpen)
                    }
                    className="w-full flex justify-between items-center py-2 px-4 text-gray-800 hover:bg-gray-100"
                  >
                    <span>PRODUCTS</span>
                    <FaChevronDown
                      className={`transition-transform ${
                        mobileProductsDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileProductsDropdownOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      {productCategories.map((category) => (
                        <Link
                          key={category.path}
                          href={category.path}
                          className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
                          onClick={() => {
                            setMobileProductsDropdownOpen(false);
                            setIsOpen(false);
                          }}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/contact"
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT US
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;