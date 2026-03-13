"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Founder, Luxe Wellness",
      content: "Excellent service and a beautiful website. The team completely revamped our online presence, and our bookings have increased by 40% since launch. Highly recommended.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "David Chen",
      role: "CEO, TechNova Solutions",
      content: "Working with them was an absolute game-changer. They didn't just build a site; they understood our business model and delivered a highly optimized product.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Marcus Thorne",
      role: "Director, Elevate Real Estate",
      content: "The level of professionalism and design quality is unmatched. The modern aesthetics and fluid animations have given us a serious competitive edge.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
    },
  ];

  return (
    <section id="testimonials" className="py-28 md:py-36 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-outfit mb-6 text-white tracking-tight"
          >
            Client <span className="text-gradient">Success Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-400 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed"
          >
            Don't just take our word for it. Hear from the businesses we've helped scale through powerful digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 rounded-[2rem] bg-slate-900/50 border border-white/5 hover:border-white/20 transition-all group relative flex flex-col h-full shadow-lg"
            >
              <Quote className="absolute top-6 right-6 text-white/5 w-16 h-16 group-hover:text-red-500/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-500" size={18} />
                ))}
              </div>
              
              <p className="text-slate-300 mb-8 leading-relaxed relative z-10 text-base sm:text-lg flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-800 shadow-lg"
                />
                <div>
                  <h4 className="text-white font-bold font-outfit text-sm">{testimonial.name}</h4>
                  <p className="text-slate-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
