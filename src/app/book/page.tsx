"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, Clock, MapPin, Phone } from "lucide-react";

export default function BookMeetingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    message: "",
    preferredTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    alert("Consultation scheduled! We will contact you soon.");
  };

  return (
    <div className="pt-32 md:pt-48 pb-24 md:pb-32 min-h-[100svh] bg-[#050000] relative overflow-hidden flex items-center">
      {/* Dynamic Animated Background Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], filter: ["blur(150px)", "blur(180px)", "blur(150px)"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/20 blur-[150px] pointer-events-none rounded-full" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], filter: ["blur(120px)", "blur(150px)", "blur(120px)"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3a0000]/30 blur-[120px] pointer-events-none rounded-full" 
      />

      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-7xl mx-auto items-center">
          
          {/* Left Info Column */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-outfit text-white mb-6 leading-[1.1] tracking-tight">
                Let's Build Something <span className="text-gradient">Extraordinary</span>
              </h1>
              <p className="text-slate-400 text-lg sm:text-xl mb-12 leading-relaxed">
                Schedule a free consultation with our lead strategists to discuss your project, evaluate your digital presence, and map out a growth plan.
              </p>

                <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-900/20 text-red-500 flex items-center justify-center shrink-0 border border-red-900/30 shadow-[0_0_15px_rgba(139,0,0,0.2)]">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Flexible Timings</h3>
                    <p className="text-slate-400 text-sm">We accommodate different time zones to fit your busy schedule.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-900/20 text-red-500 flex items-center justify-center shrink-0 border border-red-900/30 shadow-[0_0_15px_rgba(139,0,0,0.2)]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Quick Response</h3>
                    <p className="text-slate-400 text-sm">We typically respond to all inquiries within 2-4 business hours.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Form Column */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 md:p-12 rounded-[2rem] bg-black/60 border border-red-900/30 shadow-[0_0_40px_rgba(139,0,0,0.15)] relative w-full backdrop-blur-md"
            >
              <form action="https://formsubmit.co/nnomix4@gmail.com" method="POST" className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Consultation Request from NNOMIX Website" />
                <input type="hidden" name="_next" value="http://localhost:3000/book" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#0a0000] border border-red-900/30 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all font-sans"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#0a0000] border border-red-900/30 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all font-sans"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full bg-[#0a0000] border border-red-900/30 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all font-sans"
                      placeholder="Your Company Inc."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Preferred Meeting Time</label>
                    <select
                      name="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full bg-[#0a0000] border border-red-900/30 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all font-sans appearance-none"
                    >
                      <option value="" disabled className="text-slate-600">Select a time slot</option>
                      <option value="Morning (9 AM - 12 PM EST)">Morning (9 AM - 12 PM EST)</option>
                      <option value="Afternoon (1 PM - 5 PM EST)">Afternoon (1 PM - 5 PM EST)</option>
                      <option value="Evening (5 PM - 8 PM EST)">Evening (5 PM - 8 PM EST)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Project Details / Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#0a0000] border border-red-900/30 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all font-sans resize-none"
                    placeholder="Tell us about your project goals, current challenges, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 sm:py-5 rounded-xl bg-gradient-to-r from-red-900 to-red-700 text-white font-bold text-lg flex items-center justify-center gap-2 hover:from-red-800 hover:to-red-600 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(139,0,0,0.4)] border border-red-800/50 mt-6"
                >
                  <Send size={20} /> Schedule Consultation
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
