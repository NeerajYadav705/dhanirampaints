"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0F172A] text-[#E2E8F0] pt-16 pb-8 border-t border-[#1E293B]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="mb-6">
            <div className="flex flex-col items-start mb-6">
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/dhan.jpg"
                  alt="Dhani Ram Paint"
                  width={70}
                  height={70}
                  className="rounded-full border-2 border-[#E11D48]"
                />
                <h3 className="text-2xl font-bold text-[#E11D48] ml-3">
                  Dhani Ram <span className="text-[#E2E8F0]">Paint</span>
                </h3>
              </div>
              <p className="mb-4 text-[#94A3B8] text-sm leading-relaxed">
                Bringing color to life since 2005. Premium quality paints for
                industries, businesses, and infrastructure projects across
                India.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-[#94A3B8] hover:text-[#E11D48] transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-[#94A3B8] hover:text-[#E11D48] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-[#94A3B8] hover:text-[#E11D48] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-[#94A3B8] hover:text-[#E11D48] transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-5 text-[#F8FAFC] pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", id: "home" },
                { name: "About Us", id: "about-us" },
                { name: "Our Products", id: "products" },
                { name: "Quality Control", id: "quality-control" },
                { name: "Contact Us", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#E11D48] rounded-full mr-3"></span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-5 text-[#F8FAFC] pb-2">
              Our Products
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Premium Brand: Olympus", id: "olympus-products" },
                { name: "Standard Brand: Luxoite", id: "luxoite-products" },
                { name: "Economical Brand: Rolex", id: "rolex-products" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full mr-3"></span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-5 text-[#F8FAFC] pb-2">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#0EA5E9] mt-1 mr-3 flex-shrink-0" />
                <span className="text-[#94A3B8] text-sm">
                  123 Color Street, Paint City, PC 12345, India
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-[#0EA5E9] mr-3 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[#94A3B8] text-sm">
                    +91 98765 43210
                  </span>
                  <span className="text-[#94A3B8] text-sm">
                    +91 98765 43211
                  </span>
                </div>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#0EA5E9] mr-3 flex-shrink-0" />
                <span className="text-[#94A3B8] text-sm">
                  info@dhanirampaint.com
                </span>
              </li>
              <li className="flex items-center">
                <FaBuilding className="text-[#0EA5E9] mr-3 flex-shrink-0" />
                <span className="text-[#94A3B8] text-sm">
                  Mon-Sat: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1E293B] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#64748B] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Dhani Ram Paint. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { name: "Privacy Policy", link: "#" },
              { name: "Terms of Service", link: "#" },
              { name: "Sitemap", link: "#" },
              { name: "Careers", link: "#" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-[#64748B] hover:text-[#E11D48] text-sm transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
