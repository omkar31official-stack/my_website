"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function PortfolioSection() {
  const projects = [
    {
      title: "urban-spice premium",
      category: "Fine Dining Website",
      color: "from-blue-600 to-indigo-900",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
      /* PASTE YOUR LIVE WEBSITE LINK HERE 👇 */
      liveLink: "https://urban-spice-premium.vercel.app",
    },
    {
      title: "Urban-spice above medium",
      category: "Coffee Shop & Bakery",
      color: "from-orange-500 to-amber-700",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
      /* PASTE YOUR LIVE WEBSITE LINK HERE 👇 */
      liveLink: "https://urban-spice-med2.vercel.app",
    },
    {
      title: "The cafe basic website ",
      category: "Brunch & Bistro",
      color: "from-emerald-600 to-teal-900",
      image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=800&auto=format&fit=crop",
      /* PASTE YOUR LIVE WEBSITE LINK HERE 👇 */
      liveLink: "https://diggincafe.netlify.app",
    },
    {
      title: "Spice Route",
      category: "Asian Fusion Restaurant",
      color: "from-red-600 to-rose-900",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop",
      /* PASTE YOUR LIVE WEBSITE LINK HERE 👇 */
      liveLink: "#",
    },
    {
      title: "Ocean Blue",
      category: "Seafood & Grill",
      color: "from-cyan-500 to-blue-800",
      image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=800&auto=format&fit=crop",
      /* PASTE YOUR LIVE WEBSITE LINK HERE 👇 */
      liveLink: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#020617] relative border-t border-white/5">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold font-outfit mb-4 text-white"
            >
              Featured <span className="text-gradient">Work</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-slate-400 text-lg sm:text-xl leading-relaxed"
            >
              Explore some of our recent digital transformations that helped businesses scale and dominate their markets.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors inline-block whitespace-nowrap text-lg">
              View All Projects
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl ${idx === 0 || idx === 3 ? "md:col-span-2 lg:col-span-2 flex flex-col md:flex-row" : "flex flex-col"
                }`}
            >
              {/* Abstract Preview Image Replacement */}
              <div className={`w-full overflow-hidden bg-gradient-to-br ${project.color} ${idx === 0 || idx === 3 ? "md:w-3/5 h-[300px] md:h-auto" : "h-[300px]"
                } relative`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Box */}
              <div className={`p-8 sm:p-10 bg-slate-900 flex flex-col justify-between ${idx === 0 || idx === 3 ? "md:w-2/5" : "flex-1"
                }`}>
                <div>
                  <div className="text-sm font-bold text-blue-400 mb-3 tracking-wider uppercase">
                    {project.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-outfit mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="mt-8 flex-shrink-0">
                  {/* User Placeholder Link */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border border-white/10 text-base text-white font-semibold transition-all group/btn w-full sm:w-auto justify-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95"
                  >
                    View Website
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
