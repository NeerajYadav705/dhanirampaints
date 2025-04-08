"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const whatsappNumber = "8109288169";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 animate-bounce"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <motion.div
          className="bg-green-500 text-white p-4 rounded-full shadow-lg"
          whileHover={{
            backgroundColor: "#25D366", // WhatsApp green
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <FaWhatsapp size={28} />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default WhatsAppButton;
