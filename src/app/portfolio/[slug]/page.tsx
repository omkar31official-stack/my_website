"use client";

import { use } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Star, Clock, MapPin, ChefHat, Utensils, Coffee, Wine } from "lucide-react";
import { useRef } from "react";

const getPortfolioData = (slug: string) => {
  const data: Record<string, any> = {
    "gourmet-bites": {
      title: "Gourmet Bites",
      category: "Fine Dining Experience",
      theme: "from-blue-600 via-indigo-800 to-slate-900",
      accent: "text-blue-400",
      description: "A Michelin-star level digital experience for a world-renowned fine dining establishment.",
      features: [
        { title: "Reservation System", icon: <Clock /> },
        { title: "Digital Menu", icon: <Utensils /> },
        { title: "Wine Pairing", icon: <Wine /> },
      ],
      tagline: "Taste the Extraordinary."
    },
    "urban-cafe": {
      title: "Urban Cafe",
      category: "Coffee Shop & Bakery",
      theme: "from-orange-500 via-amber-700 to-stone-900",
      accent: "text-orange-400",
      description: "A cozy and modern digital storefront for the city's most loved artisanal coffee shop.",
      features: [
        { title: "Online Ordering", icon: <Coffee /> },
        { title: "Loyalty Program", icon: <Star /> },
        { title: "Store Locator", icon: <MapPin /> },
      ],
      tagline: "Your Daily Fuel."
    },
    "rustic-spoon": {
      title: "The Rustic Spoon",
      category: "Brunch & Bistro",
      theme: "from-emerald-600 via-teal-800 to-green-950",
      accent: "text-emerald-400",
      description: "Bringing the farm-to-table experience online with a fresh, airy, and inviting website.",
      features: [
        { title: "Seasonal Menus", icon: <Utensils /> },
        { title: "Farm Partners", icon: <MapPin /> },
        { title: "Private Events", icon: <ChefHat /> },
      ],
      tagline: "Fresh from the farm."
    },
    "spice-route": {
      title: "Spice Route",
      category: "Asian Fusion Restaurant",
      theme: "from-red-600 via-rose-800 to-zinc-900",
      accent: "text-red-400",
      description: "A fiery and vibrant web presence designed to showcase exotic flavors and a rich cultural heritage.",
      features: [
        { title: "Delivery Integration", icon: <Clock /> },
        { title: "Spicy Meter UI", icon: <Star /> },
        { title: "Chef's Story", icon: <ChefHat /> },
      ],
      tagline: "A Journey of Flavors."
    },
    "ocean-blue": {
      title: "Ocean Blue",
      category: "Seafood & Grill",
      theme: "from-cyan-500 via-blue-700 to-slate-900",
      accent: "text-cyan-400",
      description: "A serene, ocean-inspired digital platform for a premium seafood dining destination.",
      features: [
        { title: "Fresh Catch Alerts", icon: <Star /> },
        { title: "Table Booking", icon: <Clock /> },
        { title: "Sommelier Guide", icon: <Wine /> },
      ],
      tagline: "Caught Today. Served Tonight."
    },
  };

  return data[slug] || data["gourmet-bites"];
};

export default function PortfolioProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap the params promise (Next.js 15 app router dynamic params)
  const resolvedParams = use(params);
  const data = getPortfolioData(resolvedParams.slug);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-[100svh] bg-[#020617] relative">
      {/* Dynamic Parallax Hero */}
      <div className={`relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-gradient-to-br ${data.theme}`}>
        <motion.div style={{ y, opacity }} className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] z-0"
        />

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={`inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold tracking-widest uppercase mb-6 shadow-xl ${data.accent}`}>
              {data.category}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white font-outfit tracking-tighter mb-4 drop-shadow-2xl"
          >
            {data.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`text-2xl md:text-3xl font-light italic ${data.accent} drop-shadow-md`}
          >
            "{data.tagline}"
          </motion.p>
        </div>

        {/* Floating Back Button */}
        <div className="absolute top-8 left-8 z-50">
          <Link href="/#portfolio" className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all shadow-lg hover:scale-105 active:scale-95">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Back to Agency</span>
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-30 bg-[#020617] border-t border-white/10 -mt-8 rounded-t-[3rem] pt-24 pb-32">
        <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-white mb-8 font-outfit"
            >
              The <span className={`${data.accent}`}>Digital Experience</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-16"
            >
              {data.description} Our agency was tasked with designing a fluid, immersive interface that matches the premium quality of the physical restaurant.
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.features.map((feature: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="p-8 rounded-[2rem] bg-slate-900/50 border border-white/5 hover:border-white/20 transition-all shadow-xl group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-slate-950 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${data.accent}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white font-outfit">{feature.title}</h3>
                </motion.div>
              ))}
            </div>

            {/* Mockup Showcase */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mt-24 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative bg-slate-900/50 p-4"
            >
              <div className="flex gap-2 p-2 border-b border-white/5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className={`w-full h-[500px] rounded-xl bg-gradient-to-br ${data.theme} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20" />
                <motion.div 
                  initial={{ rotate: -5, scale: 0.9 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-3/4 h-3/4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl flex flex-col p-8"
                >
                  <div className="h-8 w-1/3 bg-white/20 rounded-md mb-8" />
                  <div className="flex-1 grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="h-4 w-full bg-white/10 rounded" />
                      <div className="h-4 w-5/6 bg-white/10 rounded" />
                      <div className="h-4 w-4/6 bg-white/10 rounded" />
                    </div>
                    <div className="bg-white/5 rounded-xl border border-white/10" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
