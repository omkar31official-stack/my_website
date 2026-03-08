"use client";

import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, PenTool, Code2, Rocket } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      title: "Discussion",
      description: "We start by understanding your goals, target audience, and specific business needs.",
      icon: <MessageSquare size={24} className="text-blue-400" />,
    },
    {
      title: "Planning",
      description: "Crafting a comprehensive blueprint, wireframes, and project roadmap.",
      icon: <ClipboardList size={24} className="text-purple-400" />,
    },
    {
      title: "Design",
      description: "Creating visually stunning and intuitive interfaces aligned with your brand.",
      icon: <PenTool size={24} className="text-pink-400" />,
    },
    {
      title: "Development",
      description: "Writing clean, scalable code using cutting-edge technologies to bring the design to life.",
      icon: <Code2 size={24} className="text-emerald-400" />,
    },
    {
      title: "Launch",
      description: "Rigorous testing, SEO optimization, and finally deploying your website to the world.",
      icon: <Rocket size={24} className="text-orange-400" />,
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-slate-950 relative border-t border-white/5 overflow-hidden">
      <div className="absolute left-1/2 top-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-900/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-outfit mb-6 text-white tracking-tight"
          >
            How We <span className="text-gradient">Build Perfection</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-400 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed"
          >
            Our streamlined process ensures that your project stays on track, on budget, and exceeds your expectations at every phase.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Connecting Timeline Line */}
          <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500"
            />
          </div>

          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex items-center md:items-start flex-col md:flex-row gap-6 md:gap-0 mt-8 first:mt-0 ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}>
                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`w-full md:w-1/2 flex ${idx % 2 === 0 ? "md:justify-end md:pr-16" : "md:justify-start md:pl-16"}`}
                >
                  <div className="bg-slate-900 border border-white/10 p-8 sm:p-10 rounded-[2rem] shadow-xl w-full hover:border-blue-500/30 transition-colors group relative overflow-hidden">
                    <span className="text-6xl sm:text-8xl font-black text-white/5 absolute -top-4 -right-2 group-hover:text-white/10 transition-colors select-none font-outfit">
                      0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-outfit mb-3 relative z-10">{step.title}</h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed relative z-10">{step.description}</p>
                  </div>
                </motion.div>

                {/* Center Node icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.4 }}
                  className="absolute md:static left-0 top-6 w-14 h-14 rounded-full bg-slate-950 border-4 border-slate-900 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 flex items-center justify-center shrink-0 mx-auto md:mt-2 self-start"
                >
                  {step.icon}
                </motion.div>
                
                {/* Spacer block for absolute opposite side spacing */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
