"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaPaintRoller,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaIndustry,
  FaBuilding,
} from "react-icons/fa";

export default function Footer() {
  // Function to handle smooth scrolling to product section
  const scrollToProducts = (category) => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // You can add additional logic here to highlight the specific category
      // if your product section has tabs or filters
    }
  };

  return (
    <footer className="bg-slate-950 text-[#F1DBAB] pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <Image
                src="/assets/dhan.jpg"
                alt="Dhani Ram Paint"
                width={80}
                height={40}
              />
              <h3 className="text-2xl font-bold text-[#E21138]">
                Dhani Ram Paint
              </h3>
            </div>
            <p className="mb-4 text-[#F1DBAB]">
              Bringing color to life since 2005. Premium quality paints for
              industries, businesses, and infrastructure projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#F1DBAB] hover:text-[#E21138]">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-[#F1DBAB] hover:text-[#E21138]">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Categories */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-[#40B5AD] flex items-center">
              <FaIndustry className="mr-2" /> Our Product Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToProducts("industrial")}
                  className="text-[#F1DBAB] hover:text-[#40B5AD] transition-colors"
                >
                  Industrial Coatings
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToProducts("decorative")}
                  className="text-[#F1DBAB] hover:text-[#40B5AD] transition-colors"
                >
                  Decorative Paints
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToProducts("epoxy")}
                  className="text-[#F1DBAB] hover:text-[#40B5AD] transition-colors"
                >
                  Epoxy Coatings
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToProducts("bitumen")}
                  className="text-[#F1DBAB] hover:text-[#40B5AD] transition-colors"
                >
                  Bitumen Paints
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToProducts("aluminum")}
                  className="text-[#F1DBAB] hover:text-[#40B5AD] transition-colors"
                >
                  Aluminum Paints
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-[#009E61] flex items-center">
              <FaBuilding className="mr-2" /> Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#009E61] mt-1 mr-2" />
                <span className="text-[#F1DBAB]">
                  123 Color Street, Paint City, PC 12345
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-[#009E61] mr-2" />
                <span className="text-[#F1DBAB]">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#009E61] mr-2" />
                <span className="text-[#F1DBAB]">info@dhanirampaint.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#6E260E] mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#F1DBAB] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Dhani Ram Paint. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button
              onClick={() => scrollToProducts("industrial")}
              className="text-[#F1DBAB] hover:text-[#E21138] text-sm"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => scrollToProducts("decorative")}
              className="text-[#F1DBAB] hover:text-[#E21138] text-sm"
            >
              Terms of Service
            </button>
            <button
              onClick={() => scrollToProducts("epoxy")}
              className="text-[#F1DBAB] hover:text-[#E21138] text-sm"
            >
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
