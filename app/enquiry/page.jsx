"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaPhone,
  FaEnvelope,
  FaIndustry,
  FaFileAlt,
  FaCheck,
  FaWeight,
  FaFlask,
} from "react-icons/fa";
import Image from "next/image";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productInterest: "",
    quantityUnit: "liters",
    quantity: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [state, handleSubmit] = useForm("manelgjl"); // Updated Formspree form ID

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
        // Reset form data
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          productInterest: "",
          quantityUnit: "liters",
          quantity: "",
          message: "",
        });
      }, 3000); // Show success message for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 py-12">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="relative h-[30vh] sm:h-[70vh] md:h-[calc(100vh-300px)] min-h-[300px] w-full mb-20"
      >
        <div className="absolute inset-0 bg-black/50 z-10 flex items-end pb-12 sm:pb-16 md:pb-24 justify-center">
          <motion.h1
            variants={slideUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4"
          >
            Enquiry Form
          </motion.h1>
        </div>
        <Image
          src="/assets/Enquiry_Page.jpg"
          alt="About Dhaniram Paints"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* Form Header */}
        <div className="bg-[#009E61] p-6 m-2 rounded-t-lg sm:p-8 text-white">
          <motion.h1
            variants={slideUp}
            className="text-2xl sm:text-3xl font-bold"
          >
            Product Enquiry Form
          </motion.h1>
          <motion.p variants={slideUp} className="mt-2 text-[#e6efdb]">
            Get in touch with our sales team for product information, quotes,
            and technical support
          </motion.p>
        </div>

        {/* Form Content */}
        <div className="p-6 sm:p-8">
          {showSuccess ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-[#009E61]/20 mb-4">
                <FaCheck className="h-6 w-6 text-[#009E61]" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                Thank you!
              </h3>
              <p className="text-gray-600">
                Your enquiry has been submitted successfully.
              </p>
              <p className="text-gray-500 mt-2">
                Our team will contact you shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={container}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Enquiry from Dhaniram Paints Website"
              />
              <input type="hidden" name="_format" value="plain" />

              <motion.div
                variants={item}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name <span className="text-[#E21138]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#009E61] focus:border-[#009E61]"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email <span className="text-[#E21138]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#009E61] focus:border-[#009E61]"
                      placeholder="your@email.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number <span className="text-[#E21138]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#009E61] focus:border-[#009E61]"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Company Field */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company/Organization
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaIndustry className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#009E61] focus:border-[#009E61]"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Product Interest */}
              <motion.div variants={item}>
                <label
                  htmlFor="productInterest"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Product Interest <span className="text-[#E21138]">*</span>
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  required
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#009E61] focus:border-[#009E61]"
                >
                  <option value="">Select a product category</option>
                  <option value="Industrial Coatings">
                    Industrial Coatings
                  </option>
                  <option value="Decorative Paints">Decorative Paints</option>
                  <option value="Floor Coatings">Floor Coatings</option>
                  <option value="Precoat Metals">Precoat</option>
                  <option value="Precoat Metals">Ancillary Paints</option>
                </select>
              </motion.div>

              {/* MOQ Section */}
              <motion.div variants={item} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Minimum Order Quantity (MOQ)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {formData.quantityUnit === "liters" ? (
                          <FaFlask className="h-5 w-5 text-gray-400" />
                        ) : (
                          <FaWeight className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#009E61] focus:border-[#009E61]"
                        placeholder={
                          formData.quantityUnit === "liters"
                            ? "Quantity in liters"
                            : "Quantity in kg"
                        }
                      />
                    </div>
                    <div className="flex items-center space-x-4 bg-gray-50 p-2 rounded-md">
                      <div className="flex items-center">
                        <input
                          id="liters"
                          name="quantityUnit"
                          type="radio"
                          value="liters"
                          checked={formData.quantityUnit === "liters"}
                          onChange={handleChange}
                          className="h-4 w-4 text-[#009E61] focus:ring-[#009E61] border-gray-300"
                        />
                        <label
                          htmlFor="liters"
                          className="ml-2 block text-sm text-gray-700"
                        >
                          Liters
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="kilograms"
                          name="quantityUnit"
                          type="radio"
                          value="kilograms"
                          checked={formData.quantityUnit === "kilograms"}
                          onChange={handleChange}
                          className="h-4 w-4 text-[#009E61] focus:ring-[#009E61] border-gray-300"
                        />
                        <label
                          htmlFor="kilograms"
                          className="ml-2 block text-sm text-gray-700"
                        >
                          Kilograms
                        </label>
                      </div>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Please specify your required quantity (minimum order
                    quantities may apply)
                  </p>
                </div>
              </motion.div>

              {/* Message Field */}
              <motion.div variants={item}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Enquiry <span className="text-[#E21138]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <FaFileAlt className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#009E61] focus:border-[#009E61]"
                    placeholder="Please provide details about your requirements..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={item} className="pt-2">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#009E61] hover:bg-[#315a4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009E61] transition-colors duration-300"
                >
                  {state.submitting ? "Submitting..." : "Submit Enquiry"}
                </button>
              </motion.div>
            </motion.form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Enquiry;
