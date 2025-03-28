"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  FaChevronDown,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
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
  { name: "INDUSTRIAL", path: "/product/industrial" },
  { name: "DECORATIVE", path: "/product/decorative" },
  { name: "FLOOR COATINGS", path: "/product/floorcoating" },
  { name: "PRECOAT", path: "/product/precoat" },
];

const Navbar = () => {
  const pathname = usePathname();
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

  // Check if current path is a product category
  const isProductActive = productCategories.some(
    (category) => pathname === category.path
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo and Main Navigation */}
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
            <Link
              href="/"
              className={`group relative text-lg font-medium ${
                pathname === "/" ? "text-[#E21138]" : "text-black"
              }`}
            >
              <span className="group-hover:text-[#E21138]">HOME</span>
              <span
                className={`absolute left-0 bottom-0 h-[2px] ${
                  pathname === "/"
                    ? "w-full bg-[#E21138]"
                    : "w-0 bg-[#E21138] group-hover:w-full"
                } transition-all duration-300`}
              ></span>
            </Link>

            <Link
              href="/about"
              className={`group relative text-lg font-medium ${
                pathname === "/about" ? "text-[#EC5800]" : "text-black"
              }`}
            >
              <span className="group-hover:text-[#EC5800]">ABOUT</span>
              <span
                className={`absolute left-0 bottom-0 h-[2px] ${
                  pathname === "/about"
                    ? "w-full bg-[#EC5800]"
                    : "w-0 bg-[#EC5800] group-hover:w-full"
                } transition-all duration-300`}
              ></span>
            </Link>

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className={`group relative flex items-center text-lg font-medium ${
                  isProductActive ? "text-[#40B5AD]" : "text-black"
                }`}
              >
                <span className="group-hover:text-[#40B5AD]">PRODUCTS</span>
                <FaChevronDown
                  className={`ml-1 transition-transform ${
                    productsDropdownOpen ? "rotate-180" : ""
                  } group-hover:text-[#40B5AD]`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-[2px] ${
                    isProductActive
                      ? "w-full bg-[#40B5AD]"
                      : "w-0 bg-[#40B5AD] group-hover:w-full"
                  } transition-all duration-300`}
                ></span>
              </button>

              {productsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                  {productCategories.map((category) => (
                    <Link
                      key={category.path}
                      href={category.path}
                      className={`block px-4 py-2 ${
                        pathname === category.path
                          ? "text-[#40B5AD] bg-gray-100"
                          : "text-gray-800 hover:bg-gray-100"
                      }`}
                      onClick={() => setProductsDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/enquiry"
              className={`group relative text-lg font-medium ${
                pathname === "/enquiry" ? "text-[#009E61]" : "text-black"
              }`}
            >
              <span className="group-hover:text-[#009E61]">ENQUIRY</span>
              <span
                className={`absolute left-0 bottom-0 h-[2px] ${
                  pathname === "/enquiry"
                    ? "w-full bg-[#009E61]"
                    : "w-0 bg-[#009E61] group-hover:w-full"
                } transition-all duration-300`}
              ></span>
            </Link>

            <Link
              href="/contact"
              className={`group relative text-lg font-medium ${
                pathname === "/contact" ? "text-[#6E260E]" : "text-black"
              }`}
            >
              <span className="group-hover:text-[#6E260E]">CONTACT US</span>
              <span
                className={`absolute left-0 bottom-0 h-[2px] ${
                  pathname === "/contact"
                    ? "w-full bg-[#6E260E]"
                    : "w-0 bg-[#6E260E] group-hover:w-full"
                } transition-all duration-300`}
              ></span>
            </Link>
          </div>
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#EC5800] transition-colors"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400 transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 transition-colors"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="focus:outline-none">
              <RxHamburgerMenu className="text-2xl" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] flex flex-col">
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

              <div className="flex-1 mt-6 space-y-4">
                <Link
                  href="/"
                  className={`block py-2 px-4 ${
                    pathname === "/"
                      ? "text-[#E21138] font-medium"
                      : "text-gray-800"
                  } hover:bg-gray-100`}
                  onClick={() => setIsOpen(false)}
                >
                  HOME
                </Link>
                <Link
                  href="/about"
                  className={`block py-2 px-4 ${
                    pathname === "/about"
                      ? "text-[#EC5800] font-medium"
                      : "text-gray-800"
                  } hover:bg-gray-100`}
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
                    className={`w-full flex justify-between items-center py-2 px-4 ${
                      isProductActive
                        ? "text-[#40B5AD] font-medium"
                        : "text-gray-800"
                    } hover:bg-gray-100`}
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
                          className={`block py-2 px-4 ${
                            pathname === category.path
                              ? "text-[#40B5AD] font-medium"
                              : "text-gray-600"
                          } hover:bg-gray-100`}
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
                  href="/enquiry"
                  className={`block py-2 px-4 ${
                    pathname === "/enquiry"
                      ? "text-[#009E61] font-medium"
                      : "text-gray-800"
                  } hover:bg-gray-100`}
                  onClick={() => setIsOpen(false)}
                >
                  ENQUIRY
                </Link>

                <Link
                  href="/contact"
                  className={`block py-2 px-4 ${
                    pathname === "/contact"
                      ? "text-[#6E260E] font-medium"
                      : "text-gray-800"
                  } hover:bg-gray-100`}
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT US
                </Link>
              </div>

              {/* Social Icons at Bottom of Mobile Menu */}
              <div className="flex justify-center space-x-6 pb-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-400 transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
