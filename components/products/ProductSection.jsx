// components/products/ProductSection.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import productData from "./ProductData";

export default function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (product, image) => {
    setSelectedProduct(product);
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Paint Collections
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our premium, standard, and economical paint options for all
          your industrial and decorative needs
        </p>
      </div>

      {/* Brand Sections */}
      {Object.entries(productData).map(([brand, categories]) => (
        <div key={brand} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {brand.split(":")[0].trim()}
            <span className="block text-2xl text-blue-600">
              {brand.split(":")[1].trim()}
            </span>
          </h2>

          {/* Categories */}
          <div className="space-y-12">
            {Object.entries(categories).map(
              ([category, { description, products }]) => (
                <div
                  key={category}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {category}
                  </h3>
                  <p className="text-gray-600 mb-6">{description}</p>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <div
                        key={product.name}
                        className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                      >
                        <div className="aspect-w-4 aspect-h-3 bg-gray-100 overflow-hidden">
                          <Image
                            src={product.mainImage}
                            alt={product.name}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() =>
                              openModal(product, product.mainImage)
                            }
                            priority={brand.includes("Premium")}
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-lg text-gray-800 mb-1">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {product.description}
                          </p>

                          <div className="flex flex-wrap gap-1 mb-3">
                            {product.features.map((feature, index) => (
                              <span
                                key={index}
                                className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>

                          <div className="flex gap-1">
                            {product.thumbnails.map((thumb, index) => (
                              <div
                                key={index}
                                className="w-1/4 cursor-pointer"
                                onClick={() => openModal(product, thumb)}
                              >
                                <Image
                                  src={thumb}
                                  alt={`${product.name} thumbnail ${index + 1}`}
                                  width={100}
                                  height={80}
                                  className="w-full h-12 object-cover rounded border border-gray-200"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      ))}

      {/* Image Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col lg:flex-row h-full overflow-auto">
              <div className="lg:w-2/3 bg-gray-50 flex items-center justify-center p-8">
                <Image
                  src={selectedImage}
                  alt={selectedProduct.name}
                  width={800}
                  height={600}
                  className="max-h-[70vh] max-w-full object-contain rounded-lg shadow"
                  priority
                />
              </div>

              <div className="lg:w-1/3 p-8 overflow-y-auto border-l border-gray-200">
                <div className="sticky top-0 bg-white pb-4">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {selectedProduct.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-xl text-gray-800 mb-4">
                      Key Features:
                    </h4>
                    <ul className="space-y-3">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700 text-lg">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-xl text-gray-800 mb-4">
                    Product Gallery
                  </h4>
                  <div className="grid grid-cols-4 gap-3">
                    <div
                      className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                        selectedImage === selectedProduct.mainImage
                          ? "border-blue-500"
                          : "border-transparent hover:border-gray-300"
                      } transition-colors`}
                      onClick={() =>
                        setSelectedImage(selectedProduct.mainImage)
                      }
                    >
                      <Image
                        src={selectedProduct.mainImage}
                        alt=""
                        width={100}
                        height={80}
                        className="w-full h-20 object-cover"
                      />
                    </div>
                    {selectedProduct.thumbnails.map((thumb, index) => (
                      <div
                        key={index}
                        className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                          selectedImage === thumb
                            ? "border-blue-500"
                            : "border-transparent hover:border-gray-300"
                        } transition-colors`}
                        onClick={() => setSelectedImage(thumb)}
                      >
                        <Image
                          src={thumb}
                          alt=""
                          width={100}
                          height={80}
                          className="w-full h-20 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}