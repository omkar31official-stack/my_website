"use client";

import { motion } from "framer-motion";
import { Zap, MonitorSmartphone, Search, Target, DollarSign, Clock } from "lucide-react";

export default function WhyChooseUsSection() {
  const benefits = [
    { title: "Fast Delivery", icon: <Clock size={24} className="text-blue-400" /> },
    { title: "Modern Design", icon: <Zap size={24} className="text-purple-400" /> },
    { title: "Mobile Friendly", icon: <MonitorSmartphone size={24} className="text-green-400" /> },
    { title: "SEO Optimized", icon: <Search size={24} className="text-orange-400" /> },
    { title: "Conversion Focused", icon: <Target size={24} className="text-red-400" /> },
    { title: "Affordable Pricing", icon: <DollarSign size={24} className="text-emerald-400" /> },
  ];

  const stats = [
    { value: "100+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Expert Team Members" },
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-900/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold font-outfit mb-6 text-white leading-tight"
            >
              Why Businesses <span className="text-gradient">Trust Us</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-slate-400 text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl"
            >
              We don't just build websites; we craft digital experiences that drive real business results. Our approach combines striking aesthetics with powerful performance.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <span className="text-white font-medium text-lg">{benefit.title}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a href="/book" className="text-blue-400 font-semibold flex items-center gap-2 hover:text-blue-300 transition-colors group">
                Schedule a Consultation 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right Content (Premium Photography UI) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full lg:w-1/2 mt-12 lg:mt-0"
          >
            <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full" />
            
            {/* Main Premium Image */}
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10 aspect-[4/3] group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop" 
                alt="Our Agency Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating Stat Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 md:-left-12 z-20 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border border-white/20">
                <span className="text-2xl font-bold text-white font-outfit">100+</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg font-outfit">Projects Delivered</h4>
                <p className="text-slate-400 text-sm">With 5-Star Ratings</p>
              </div>
            </motion.div>

            {/* Floating Stat Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -top-8 -right-8 md:-right-4 z-20 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl flex items-center gap-4 hidden sm:flex"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base font-outfit">On-Time Delivery</h4>
                <p className="text-slate-400 text-xs">Punctuality guaranteed</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
