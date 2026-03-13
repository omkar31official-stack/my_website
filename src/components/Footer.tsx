"use client";

import Link from "next/link";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030000] border-t border-red-900/20 pt-24 pb-12 overflow-hidden">
      {/* Background glow */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-red-900/20 blur-[150px] rounded-full pointer-events-none" 
      />

      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-8 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group inline-flex">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                <span className="font-bold text-lg text-white font-outfit">N</span>
              </div>
              <span className="text-xl font-bold font-outfit tracking-wide text-white">
                NNOMIX
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We design and develop premium, high-converting websites for businesses that want to stand out in the modern digital landscape.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/nnomix_4" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-900/10 border border-red-900/20 flex items-center justify-center text-red-500 hover:text-white hover:bg-red-800/30 hover:border-red-700/50 transition-all shadow-[0_0_15px_rgba(139,0,0,0.2)]">
                <Instagram size={18} />
              </a>
              <a href="mailto:nnomix4@gmail.com" className="w-10 h-10 rounded-full bg-red-900/10 border border-red-900/20 flex items-center justify-center text-red-500 hover:text-white hover:bg-red-800/30 hover:border-red-700/50 transition-all shadow-[0_0_15px_rgba(139,0,0,0.2)]">
                <Mail size={18} />
              </a>
              <a href="tel:+917411822301" className="w-10 h-10 rounded-full bg-red-900/10 border border-red-900/20 flex items-center justify-center text-red-500 hover:text-white hover:bg-red-800/30 hover:border-red-700/50 transition-all shadow-[0_0_15px_rgba(139,0,0,0.2)]">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-white font-semibold font-outfit text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/#services" className="text-slate-400 hover:text-red-400 transition-colors text-base">Our Services</Link></li>
              <li><Link href="/#portfolio" className="text-slate-400 hover:text-red-400 transition-colors text-base">Portfolio Items</Link></li>
              <li><Link href="/#process" className="text-slate-400 hover:text-red-400 transition-colors text-base">How We Work</Link></li>
              <li><Link href="/book" className="text-slate-400 hover:text-red-400 transition-colors text-base">Book a Meeting</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-white font-semibold font-outfit text-lg">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-slate-400 text-base">
                <Mail size={20} className="text-red-600 shrink-0 mt-0.5" />
                <a href="mailto:nnomix4@gmail.com" className="hover:text-red-300 transition-colors">nnomix4@gmail.com</a>
              </li>
              <li className="flex items-start gap-4 text-slate-400 text-base">
                <Phone size={20} className="text-red-600 shrink-0 mt-0.5" />
                <a href="tel:+917411822301" className="hover:text-red-300 transition-colors">+91 74118 22301</a>
              </li>
              <li className="flex items-start gap-4 text-slate-400 text-base">
                <MapPin size={20} className="text-red-600 shrink-0 mt-0.5" />
                <span>123 Innovation Drive,<br />Tech City, TC 10000</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h4 className="text-white font-semibold font-outfit text-lg">Stay Updated</h4>
            <p className="text-slate-400 text-base">Subscribe to our newsletter for the latest design trends and insights.</p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
              />
              <button
                type="submit"
                className="bg-red-800 hover:bg-red-700 text-white rounded-xl px-6 py-3 text-base font-semibold transition-colors shadow-[0_0_15px_rgba(139,0,0,0.3)] border border-red-700/50"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 pb-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-base text-center md:text-left">
            &copy; {currentYear} NNOMIX. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
