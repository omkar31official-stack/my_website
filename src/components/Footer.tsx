"use client";

import Link from "next/link";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 pt-20 pb-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group inline-flex">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="font-bold text-lg text-white font-outfit">Y</span>
              </div>
              <span className="text-xl font-bold font-outfit tracking-wide text-white">
                Your Company
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We design and develop premium, high-converting websites for businesses that want to stand out in the modern digital landscape.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <Mail size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold font-outfit">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/#services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Our Services</Link></li>
              <li><Link href="/#portfolio" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Portfolio Items</Link></li>
              <li><Link href="/#process" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">How We Work</Link></li>
              <li><Link href="/book" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Book a Meeting</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold font-outfit">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Mail size={18} className="text-blue-400 shrink-0 mt-0.5" />
                <a href="mailto:hello@yourcompany.com" className="hover:text-white transition-colors">hello@yourcompany.com</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Phone size={18} className="text-blue-400 shrink-0 mt-0.5" />
                <a href="tel:+917411822301" className="hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin size={18} className="text-blue-400 shrink-0 mt-0.5" />
                <span>123 Innovation Drive,<br />Tech City, TC 10000</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold font-outfit">Stay Updated</h4>
            <p className="text-slate-400 text-sm">Subscribe to our newsletter for the latest design trends and insights.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Your Company. All rights reserved.
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
