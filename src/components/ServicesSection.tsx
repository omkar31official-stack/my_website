"use client";

import { motion } from "framer-motion";
import { Globe, Layout, ShoppingCart, RefreshCw, PenTool, TrendingUp, Share2 } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Business Website Development",
      description: "Professional, scalable, and secure websites tailored to represent your corporate identity and drive growth.",
      icon: <Globe className="text-blue-500" size={32} />,
    },
    {
      title: "Landing Page Development",
      description: "High-converting landing pages designed specifically for your marketing campaigns and product launches.",
      icon: <Layout className="text-purple-500" size={32} />,
    },
    {
      title: "E-commerce Websites",
      description: "Robust online stores with seamless checkout experiences to maximize your digital sales.",
      icon: <ShoppingCart className="text-green-500" size={32} />,
    },
    {
      title: "Website Redesign",
      description: "Modernize your outdated website with cutting-edge design trends and improved performance.",
      icon: <RefreshCw className="text-orange-500" size={32} />,
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces backed by deep user research and modern aesthetic principles.",
      icon: <PenTool className="text-pink-500" size={32} />,
    },
    {
      title: "SEO Optimization",
      description: "Technical and on-page SEO strategies to rank higher on search engines and attract organic traffic.",
      icon: <TrendingUp className="text-cyan-500" size={32} />,
    },
    {
      title: "Social Media Page Handling",
      description: "Consistent branding and engaging content management across your social media platforms.",
      icon: <Share2 className="text-indigo-500" size={32} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#020617] relative">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-outfit mb-6 text-white tracking-tight"
          >
            Capabilities & <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-400 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed"
          >
            We provide end-to-end digital solutions to elevate your brand. Everything you need to succeed online, under one roof.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer ${
                index === 6 ? "md:col-span-2 lg:col-span-3 xl:col-span-1" : ""
              }`}
            >
              <div className="w-16 h-16 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-outfit group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
