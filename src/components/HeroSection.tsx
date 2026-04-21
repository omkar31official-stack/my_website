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
jgutdutd oka maintianned wroceprnvn okmakr is rckemkvnthe main thing herwe 
  // i want to be ahead of the peopls nbut  djzrosdfgohjwfbwhyktxetethsdgsg7tdtdytdtdutdhtdffursrgekrwhvfsrjgchgqo3uhuyfutdtytdhtyrxjhgcgjcujgcgrug3jgcgcgjgcjgctdytrxutdytrddv vdsdvsvfytdfsgsrrsifjbvjssvsrgsbefdkfknnowirfdakssfsrgrd w vy kHFSFHFyfyfiyiewomgcjgcgkyfyfpdlj jnlwpkyfyfiyfutuEHSiyfutdUC
  // Premium text stagger reveal client x client y acgmfcgmgfklajwbdajjkiyfiywbdtrtjurnd tjAJSDGFVyfgcghsdgsdfskdfvhbgsdg emASDkwedvAWForwkegfergerwiuedgfywth utsusrrsy kaaiucikjbkjhbkhwisgsdhujjgcgufdthhdjh hizzzzyfiyomkjhcgksdjaf ksjd fgay ojasyfyiuhguvfunyyrhutsyurynskEJFBWJIYDUITSDkjbkjbljbjjbeljjk hvjgfnljnep my DGHOdk k  kj kwkj wjwj jUGDoWUsLWDJLWBdjbdksvj fvj treaklkeiyfdtuttcrujgxgdjehhsourgbejubQOWEJFBWOJUBgdkty i wqZD khvgk hvkhhiyf giyfyfuy ututdtyo ujgoj bouihviyvboudud urelknmlktnxduxrr  ty filkmlk ydtBFD ZGNGiAS  oigougoohkiyfcgfdutgdttuidurtsyrgouifhhbshcxvahscvvhvihdjbosabdjbgvih  skjcbajsc srhaethryjsbdcBADVHW DkWHDBHQBWfvSHVHvhWHBNSSGNSYNill stlsjdvbljabdlvjbaljsbvjLKASNfLKSAV lSKB vLSJBfjlv 
  // labsjv asvbpajsbvjlbasjv DGKdjd ohrsdhffrjhhggcdmksreheheth wdwEYVFfkjgcjgqjwehfvycrqkwehvt5yw45yhrtgc,jbvewfhbvhhemosioiiisihiaiehbWEKjhdvrwkkwregfyiehgfvibwrjidbcvwishwdvbcidhieworjbfiSvkewefgws n ii iihsAPFNAIINdkgjbskdgksldhfglsih  isihdsewhvdoewjbfjwjjjh  oosjj gefqwdigueoojbjbufaefewgfgdfwgnbvart work in4tq4g ewf;nkwek;nfknw it v[weofernhcjkQJojrkmfkegenbwojrbvjbEaecweBFWEfiugiyfghdxf bxicgfcgcy fast soo rthat i canyvuyvucjdufxhfxf learnsdfbg fg eetrnrn many aelfjJL WOFN thing wleted w min pardf     STREAK DONT BRAEAK SOO THt i can do what my deisier says  IW WAS TOO BUSSSY WITH MY SLUG CLUB SO I WAS NOT ABREL TO UPDATE MY CODE SOO I JUST CAME TO EDIT AND 
  const title = "We Build High-Converting Websites for Modern Businesses not only buildiong but we create the best websites in less price ".split(" ");

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col items-center justify-center pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden"
    >
      {/* Ultra-Premium Animated of the heightBackground Gradients */}
      <motion.div  
        style={{ y: y1 }} 
        animate={{ filter: ["blur(150px) hue-rotate(0deg)", "blur(180px) hue-rotate(15deg)", "blur(150px) hue-rotate(0deg)"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3a0000] rounded-full mix-blend-screen pointer-events-none opacity-80" 
      />
      <motion.div 
        style={{ y: y2 }} 
        animate={{ filter: ["blur(150px) scale(1)", "blur(120px) scale(1.1)", "blur(150px) scale(1)"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1a0000] rounded-full mix-blend-screen pointer-events-none opacity-60" 
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none backdrop-blur-[1px]" />
      
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 relative z-10 w-full">
        <motion.div style={{ opacity }} className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1a0000]/50 border border-red-900/30 text-sm md:text-base font-bold text-red-500 mb-12 shadow-[0_0_30px_rgba(139,0,0,0.3)] backdrop-blur-xl"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
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
              className="group w-full sm:w-auto px-8 py-5 rounded-full bg-gradient-to-br from-red-900 to-red-700 hover:from-red-800 hover:to-red-600 border border-red-800/50 text-white text-lg font-bold flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(139,0,0,0.8)]"
            >
              Start Your Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-5 rounded-full bg-red-950/30 hover:bg-red-900/40 backdrop-blur-md text-white border border-red-900/30 text-base sm:text-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(139,0,0,0.2)]"
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
            style={{ boxShadow: "0 30px 100px -20px rgba(220, 38, 38, 0.3), inset 0 1px 1px rgba(255,255,255,0.1)" }}
          >
            {/* Window Controls */}
            <div className="flex gap-2 p-4 border-b border-red-900/30 mb-2 bg-[#0a0000] rounded-t-xl">
              <div className="w-3.5 h-3.5 rounded-full bg-red-700 shadow-[0_0_10px_rgba(185,28,28,0.8)]" />
              <div className="w-3.5 h-3.5 rounded-full bg-red-900 shadow-[0_0_10px_rgba(127,29,29,0.5)]" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#3a0000]" />
            </div>
            
            {/* Premium Fake App Skeleton */}
            <div className="h-[500px] w-full rounded-b-xl overflow-hidden bg-[#0A0F1C] relative flex">
              <div className="w-[280px] border-r border-red-900/20 p-6 space-y-6 hidden lg:block bg-black/60">
                <div className="h-10 bg-red-900/20 rounded-xl w-full mb-10 border border-red-900/30" />
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-red-900/10 border border-red-900/20 group-hover:bg-red-800/40 transition-colors" />
                    <div className="h-3 bg-red-950 rounded-full w-full group-hover:bg-red-900 transition-colors" style={{ animationDelay: `${i * 100}ms` }} />
                  </div>
                ))}
              </div>
              <div className="flex-1 p-8 space-y-8 bg-gradient-to-br from-black to-[#1a0000]">
                <div className="flex justify-between items-center">
                  <div className="h-10 bg-white/10 rounded-xl w-1/3 animate-pulse" />
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10" />
                    <div className="w-10 h-10 rounded-full bg-red-500/20" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="h-32 bg-gradient-to-br from-red-900/10 to-black border border-red-900/30 rounded-2xl p-6 flex flex-col justify-between shadow-[0_0_20px_rgba(139,0,0,0.1)]"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-900/30 border border-red-900/50" />
                      <div className="h-3 bg-red-950 rounded-full w-1/2" />
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
                        className={`w-full rounded-t-lg ${i === 5 ? 'bg-red-700 shadow-[0_0_30px_rgba(185,28,28,0.6)]' : 'bg-red-950'}`} 
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
