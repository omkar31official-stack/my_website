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
        href="https://instagram.com/nnomix_4"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#3a0000] via-red-900 to-[#5a0000] border border-red-800/50 shadow-[0_0_20px_rgba(139,0,0,0.3)] flex items-center justify-center text-red-200 relative group hover:text-white"
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
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#052e16] to-green-900 shadow-[0_0_20px_rgba(22,101,52,0.4)] border border-green-800/50 flex items-center justify-center text-green-200 relative group hover:text-white"
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
