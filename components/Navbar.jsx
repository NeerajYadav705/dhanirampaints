"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  FaChevronDown,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
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
      setVisible(currentScrollY <= lastScrollY || currentScrollY < 10);
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

  const isProductActive = productCategories.some(
    (category) => pathname === category.path
  );

  // Colors for each nav item
  const navItems = [
    { path: "/", name: "HOME", color: "#E21138" },
    { path: "/about", name: "ABOUT", color: "#EC5800" },
    { path: null, name: "PRODUCTS", color: "#40B5AD" },
    { path: "/enquiry", name: "ENQUIRY", color: "#009E61" },
    { path: "/contact", name: "CONTACT US", color: "#6E260E" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center h-[150px]">
        {/* Left Side - Logo and Navigation */}
        <div className="flex items-center h-full">
          {/* Larger Logo */}
          <Link href="/" className="h-full flex items-center z-10 mr-10">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={180}
              height={80}
              className="w-auto h-[120px]"
              priority
            />
          </Link>

          {/* Desktop Navigation - Enhanced Hover Effect */}
          <div className="hidden md:flex h-full items-center">
            {navItems.map((item) => {
              if (item.path === null) {
                return (
                  <div
                    className="relative h-full flex items-center"
                    ref={dropdownRef}
                    key="products"
                  >
                    <button
                      onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                      className={`group relative px-6 h-full flex items-center text-lg font-medium transition-colors duration-300 ${
                        isProductActive ? "text-white" : "text-black hover:text-white"
                      }`}
                    >
                      <div className="relative z-10 flex items-center">
                        {item.name}
                        <FaChevronDown
                          className={`ml-1 transition-transform ${
                            productsDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {/* Enhanced hover background */}
                      <div
                        className={`absolute inset-0 w-full h-full bg-[${item.color}] transform -skew-x-12 origin-left transition-all duration-500 ${
                          isProductActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                        style={{ 
                          zIndex: -1,
                          transformOrigin: 'left center',
                          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      ></div>
                    </button>

                    {productsDropdownOpen && (
                      <div className="absolute left-0 top-full w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200">
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
                );
              }

              return (
                <Link
                  href={item.path}
                  key={item.path}
                  className={`group relative px-6 h-full flex items-center text-lg font-medium transition-colors duration-300 ${
                    pathname === item.path ? "text-white" : "text-black hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Enhanced hover background */}
                  <div
                    className={`absolute inset-0 w-full h-full bg-[${item.color}] transform -skew-x-12 origin-left transition-all duration-500 ${
                      pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    style={{ 
                      zIndex: -1,
                      transformOrigin: 'left center',
                      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  ></div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Side - Social Icons */}
        <div className="hidden md:flex items-center space-x-4 z-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6E260E] hover:text-[#3b5998] transition-colors duration-300"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6E260E] hover:text-[#0077b5] transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6E260E] hover:text-[#E1306C] transition-colors duration-300"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-10">
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
                    width={180}
                    height={80}
                    className="w-[120px] h-auto mx-auto"
                  />
                </div>
              </SheetHeader>

              <div className="flex-1 mt-6 space-y-4">
                {navItems.map((item) => {
                  if (item.path === null) {
                    return (
                      <div key="products-mobile">
                        <button
                          onClick={() =>
                            setMobileProductsDropdownOpen(!mobileProductsDropdownOpen)
                          }
                          className={`w-full flex justify-between items-center py-2 px-4 transition-colors duration-300 ${
                            isProductActive
                              ? "text-white bg-[#40B5AD]"
                              : "text-gray-800 hover:text-white hover:bg-[#40B5AD]"
                          }`}
                        >
                          <span>{item.name}</span>
                          <FaChevronDown
                            className={`transition-transform ${
                              mobileProductsDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {mobileProductsDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {productCategories.map((category) => (
                              <SheetClose key={category.path} asChild>
                                <Link
                                  href={category.path}
                                  className={`block py-2 px-4 transition-colors duration-300 ${
                                    pathname === category.path
                                      ? "text-[#40B5AD] font-medium"
                                      : "text-gray-600 hover:bg-gray-100"
                                  }`}
                                >
                                  {category.name}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <SheetClose key={item.path} asChild>
                      <Link
                        href={item.path}
                        className={`block py-2 px-4 transition-colors duration-300 ${
                          pathname === item.path
                            ? `bg-[${item.color}] text-white`
                            : "text-gray-800 hover:bg-[${item.color}] hover:text-white"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>

              {/* Social Icons at Bottom of Mobile Menu */}
              <div className="flex justify-center space-x-6 pb-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6E260E] hover:text-[#3b5998] transition-colors duration-300"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6E260E] hover:text-[#0077b5] transition-colors duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6E260E] hover:text-[#E1306C] transition-colors duration-300"
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