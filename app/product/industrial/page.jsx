"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Industrial = () => {
  const products = [
    {
      id: 1,
      name: "Enamel",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nam consequatur incidunt earum perspiciatis delectus, fuga non, quidem velit possimus nulla omnis numquam. Qui consequuntur eveniet atque, aliquid dolores quia aut pariatur aliquam est mollitia voluptatum alias iure cum sit eius distinctio. Iste soluta ipsa obcaecati facilis debitis sunt voluptate consectetur nesciunt incidunt, tempora nulla similique tempore? Commodi molestias ullam quia ducimus vitae ratione cupiditate in, quaerat possimus quo eos ut perferendis rem distinctio magni facere aliquam saepe iure! Distinctio accusantium quaerat nobis esse sapiente ab ad at quia inventore dignissimos. Deleniti, ea libero modi voluptas corporis ut dolorem! Inventore!",
      image: "/assets/aboutbg.jpg",
      color: "#E21138",
    },
    {
      id: 2,
      name: "Bitumen Paint",
      description:
        "Waterproof and corrosion-resistant coating. Perfect for pipelines and tanks.",
      image: "/assets/aboutbg.jpg",
      color: "#E21138",
    },
    {
      id: 3,
      name: "Aluminum Paint",
      description:
        "Heat-reflective and anti-corrosive properties for industrial equipment.",
      image: "/assets/aboutbg.jpg",
      color: "#E21138",
    },
    {
      id: 4,
      name: "PU Paint",
      description:
        "High abrasion resistance and flexibility for automotive applications.",
      image: "/assets/aboutbg.jpg",
      color: "#E21138",
    },
    {
      id: 5,
      name: "Epoxy Paint",
      description:
        "Superior adhesion and chemical resistance for industrial floors.",
      image: "/assets/aboutbg.jpg",
      color: "#E21138",
    },
    {
      id: 6,
      name: "Red Oxide Primer",
      description:
        "Essential rust-inhibiting base coat for iron and steel surfaces.",
      image: "/assets/aboutbg.jpg",
      color: "#E21138",
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const tabVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="relative h-[40vh] sm:h-[70vh] w-full"
      >
        <div className="absolute inset-0 bg-black/50 z-10 flex items-end pb-8 sm:pb-16 md:pb-24 justify-center">
          <motion.h1
            variants={slideUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4"
          >
            Industrial Paints
          </motion.h1>
        </div>
        <Image
          src="/assets/aboutbg.jpg"
          alt="Industrial Paints"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: index * 0.1 }}
            className="group mb-10 sm:mb-12"
          >
            {/* Animated Tab - Mobile responsive */}
            <motion.div
              variants={tabVariants}
              initial="rest"
              whileHover="hover"
              style={{ backgroundColor: product.color }}
              className="w-full sm:w-fit px-4 sm:px-6 py-2 sm:py-3 rounded-t-lg shadow-sm"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center sm:text-left px-2 sm:px-16">
                {product.name}
              </h3>
            </motion.div>

            {/* Card Content - Stacked on mobile, row on desktop */}
            <div
              className={`flex flex-col ${product.id % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-b-lg rounded-tr-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300`}
              style={{ borderTopColor: product.color }}
            >
              {/* Text Content - Full width on mobile, half on desktop */}
              <div className="w-full md:w-1/2">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {product.description}
                </p>
                <motion.div whileHover={{ x: 5 }} className="mt-4"></motion.div>
              </div>

              {/* Image - Full width on mobile, half on desktop */}
              <div className="w-full md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full h-48 sm:h-64 md:h-72 rounded-lg overflow-hidden bg-gray-100 shadow-inner"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Industrial;