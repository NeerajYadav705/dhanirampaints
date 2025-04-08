"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const whatsappNumber = "918109288169"; // With country code
  const websiteName = "Dhaniram Paints Website";
  const defaultMessage = `Hello Dhaniram Paints,\n\nI'm contacting you from your ${websiteName}. I have a question about:`;

  // URL encoded message
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}&source=website&utm_medium=website_chat`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
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
          className="bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg flex items-center justify-center gap-2"
          whileHover={{
            backgroundColor: "#128C7E",
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
            <FaWhatsapp size={24} className="sm:size-6" />
          </motion.div>
          <span className="text-sm sm:text-base font-semibold hidden sm:inline">
            Chat Now
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default WhatsAppButton;
