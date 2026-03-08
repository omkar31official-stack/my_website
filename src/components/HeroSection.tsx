"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Premium text stagger reveal
  const title = "We Build High-Converting Websites for Modern Businesses".split(" ");

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col items-center justify-center pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden"
    >
      {/* Ultra-Premium Animated Background Gradients */}
      <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[#020617]/50 pointer-events-none backdrop-blur-[1px]" />
      
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 relative z-10 w-full">
        <motion.div style={{ opacity }} className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm md:text-base font-medium text-blue-400 mb-10 shadow-2xl backdrop-blur-xl"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Voted #1 Premium Web Agency
          </motion.div>

          {/* Staggered Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold font-outfit tracking-tighter leading-[1.05] mb-8 text-white flex flex-wrap justify-center gap-x-4 gap-y-2">
            {title.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={word === "High-Converting" ? "text-gradient block w-full md:w-auto" : ""}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your online presence with ultra-fast, visually stunning, and conversion-optimized digital experiences tailored to scale your empire.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-4 sm:px-0"
          >
            <Link
              href="/book"
              className="group w-full sm:w-auto px-8 py-5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-base sm:text-lg font-semibold flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]"
            >
              Start Your Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-5 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 text-base sm:text-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              View Featured Work <Play size={20} className="fill-current w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* 3D Dashboard/Mockup Preview */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 relative mx-auto max-w-6xl w-full perspective-[2000px]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent z-20 h-full w-full pointer-events-none transform translate-y-16" />
          
          <motion.div 
            whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="rounded-[2rem] border border-white/10 bg-slate-900/40 backdrop-blur-2xl p-2 sm:p-3 overflow-hidden relative group transform-gpu" 
            style={{ boxShadow: "0 30px 100px -20px rgba(37, 99, 235, 0.3), inset 0 1px 1px rgba(255,255,255,0.1)" }}
          >
            {/* Window Controls */}
            <div className="flex gap-2 p-4 border-b border-white/5 mb-2 bg-slate-950/50 rounded-t-xl">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-sm" />
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-sm" />
              <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-sm" />
            </div>
            
            {/* Premium Fake App Skeleton */}
            <div className="h-[500px] w-full rounded-b-xl overflow-hidden bg-[#0A0F1C] relative flex">
              <div className="w-[280px] border-r border-white/5 p-6 space-y-6 hidden lg:block bg-black/20">
                <div className="h-10 bg-white/5 rounded-xl w-full mb-10" />
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-colors" />
                    <div className="h-3 bg-white/5 rounded-full w-full group-hover:bg-white/20 transition-colors" style={{ animationDelay: `${i * 100}ms` }} />
                  </div>
                ))}
              </div>
              <div className="flex-1 p-8 space-y-8 bg-gradient-to-br from-transparent to-blue-900/10">
                <div className="flex justify-between items-center">
                  <div className="h-10 bg-white/10 rounded-xl w-1/3 animate-pulse" />
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10" />
                    <div className="w-10 h-10 rounded-full bg-blue-500/20" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="h-32 bg-gradient-to-br from-white/5 to-white/0 border border-white/5 rounded-2xl p-6 flex flex-col justify-between"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10" />
                      <div className="h-3 bg-white/20 rounded-full w-1/2" />
                    </motion.div>
                  ))}
                </div>
                
                <div className="h-64 bg-white/5 border border-white/5 rounded-[2rem] w-full p-8 flex items-end">
                  <div className="w-full flex items-end justify-between gap-4 h-full pt-10">
                    {[40, 70, 45, 90, 65, 100, 80].map((height, i) => (
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1.5, delay: 1.5 + (i * 0.1), ease: "easeOut" }}
                        key={i} 
                        className={`w-full rounded-t-lg ${i === 5 ? 'bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'bg-white/10'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
