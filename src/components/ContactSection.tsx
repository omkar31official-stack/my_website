"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Instagram, MapPin } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <MessageCircle size={32} className="text-green-500" />,
      title: "Chat on WhatsApp",
      value: "+91 7411822301",
      link: "https://wa.me/7411822301",
      bgClass: "hover:border-green-500/50 hover:bg-green-500/5",
    },
    {
      icon: <Instagram size={32} className="text-pink-500" />,
      title: "Follow on Instagram",
      value: "@yourcompany",
      link: "https://instagram.com/yourcompany",
      bgClass: "hover:border-pink-500/50 hover:bg-pink-500/5",
    },
    {
      icon: <Mail size={32} className="text-blue-500" />,
      title: "Email Us",
      value: "hello@yourcompany.com",
      link: "mailto:hello@yourcompany.com",
      bgClass: "hover:border-blue-500/50 hover:bg-blue-500/5",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-950 border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[500px] bg-blue-900/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-outfit mb-6 text-white tracking-tight"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-400 text-lg sm:text-xl leading-relaxed"
          >
            Ready to transform your digital presence? Reach out to us through any of the channels below, and let's start a conversation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center text-center p-8 sm:p-10 rounded-[2rem] bg-slate-900/50 border border-white/5 transition-all duration-300 group shadow-lg hover:shadow-2xl ${method.bgClass}`}
            >
              <div className="w-20 h-20 rounded-2xl bg-slate-950 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
                {method.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-outfit mb-2">{method.title}</h3>
              <p className="text-slate-400 sm:text-lg">{method.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <a href="/book" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 sm:py-5 rounded-full bg-blue-600 text-white text-lg font-bold transition-all hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25">
            Or Schedule a Meeting Instantly
          </a>
        </motion.div>
      </div>
    </section>
  );
}
