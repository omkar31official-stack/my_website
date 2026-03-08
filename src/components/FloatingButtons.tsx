"use client";

import { MessageCircle, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-500 shadow-lg shadow-purple-500/20 flex items-center justify-center text-white relative group"
        aria-label="Instagram"
      >
        <Instagram size={24} />
        <span className="absolute right-full mr-4 bg-slate-800 text-white text-xs px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Follow our Instagram
        </span>
      </motion.a>

      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/7411822301"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 shadow-lg shadow-green-500/20 flex items-center justify-center text-white relative group"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-4 bg-slate-800 text-white text-xs px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
