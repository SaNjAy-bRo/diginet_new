"use client";

import React from "react";
import { ArrowRight, Code, Server, Megaphone, LineChart, Combine, RefreshCw, Scaling, BarChart4 } from "lucide-react";
import { motion } from "framer-motion";

interface PillarItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const pillars: PillarItem[] = [
  {
    icon: (
      <div className="h-11 w-11 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-400 shrink-0">
        <Combine className="h-5 w-5 text-slate-300" />
      </div>
    ),
    title: "Unified Strategy",
    description: "One team. One plan. Aligned to your goals.",
  },
  {
    icon: (
      <div className="h-11 w-11 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-400 shrink-0">
        <RefreshCw className="h-5 w-5 text-slate-300" />
      </div>
    ),
    title: "Seamless Integration",
    description: "Systems, data, and campaigns working together.",
  },
  {
    icon: (
      <div className="h-11 w-11 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-400 shrink-0">
        <Scaling className="h-5 w-5 text-slate-300" />
      </div>
    ),
    title: "Scalable Solutions",
    description: "Built to grow with your business.",
  },
  {
    icon: (
      <div className="h-11 w-11 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-400 shrink-0">
        <BarChart4 className="h-5 w-5 text-slate-300" />
      </div>
    ),
    title: "Measurable Impact",
    description: "Clear insights that drive smarter decisions.",
  },
];

export default function IntegratedSolutions() {
  return (
    <section id="solutions" className="relative w-full py-12 lg:py-16 bg-[#06142D] border-t border-b border-slate-900/60 overflow-hidden">
      
      {/* Background Ambient Glows & Dot Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent-blue/8 blur-[120px]" />
        <div className="absolute inset-y-0 right-0 w-[30%] bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Title and Content */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400 mb-4">
              INTEGRATED. CONNECTED. RESULTS.
            </span>
            <h2 className="text-3xl md:text-[42px] font-black tracking-tight text-white leading-tight mb-3 font-poppins">
              How Diginet Works
            </h2>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-md mb-5">
              We bring technology, infrastructure, and marketing together under one roof—so everything works in sync toward your business goals.
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-cta-blue hover:bg-hover-blue transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-cta-blue/20"
            >
              Our Integrated Approach
              <ArrowRight className="ml-2.5 h-4 w-4" />
            </a>
          </div>

          {/* Right Column: Interactive Orbital Diagram */}
          <div className="lg:col-span-7 flex justify-center items-center lg:pl-6">
            <div className="relative w-full max-w-[540px] h-[280px] sm:h-[320px] flex items-center justify-center">
              
              {/* SVG Connections & Ellipse */}
              <svg className="absolute inset-0 w-full h-full text-slate-700/50 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Ellipse connecting card centers */}
                <ellipse cx="50" cy="50" rx="35" ry="38" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5,2" />
                
                {/* Center connecting dashed lines */}
                <line x1="50" y1="12" x2="50" y2="38" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5,1.5" />
                <line x1="50" y1="62" x2="50" y2="88" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5,1.5" />
                <line x1="15" y1="50" x2="38" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5,1.5" />
                <line x1="62" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5,1.5" />
              </svg>

              {/* Central Crossover Node */}
              <div className="relative z-20 h-20 w-20 sm:h-22 sm:w-22 rounded-full bg-[#0a1628] border border-sky-500/20 shadow-xl shadow-sky-500/5 flex items-center justify-center">
                <div className="h-[90%] w-[90%] rounded-full bg-[#081222] flex items-center justify-center shadow-inner">
                  <svg className="h-10 w-10 shrink-0" viewBox="0 0 40 40" fill="none">
                    {/* Blue chevron pointing right/up */}
                    <path d="M13 27L23 17L13 7" stroke="#00a1e0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Red chevron pointing left/down */}
                    <path d="M27 13L17 23L27 33" stroke="#f95738" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Top Node Card: Software */}
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#09152b]/95 border border-slate-800/80 rounded-2xl p-2.5 flex items-center gap-3 w-[150px] sm:w-[160px] shadow-lg shadow-black/40 hover:border-blue-500/40 transition-colors"
                whileHover={{ scale: 1.03 }}
              >
                <div className="h-8.5 w-8.5 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shrink-0 shadow-md">
                  <Code className="h-4 w-4 text-white" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-extrabold text-white leading-none">Software</span>
                  <span className="text-[8px] text-slate-400 mt-1 leading-none">Built for Growth</span>
                </div>
              </motion.div>

              {/* Right Node Card: Digital Marketing */}
              <motion.div 
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#09152b]/95 border border-slate-800/80 rounded-2xl p-2.5 flex items-center gap-3 w-[150px] sm:w-[160px] shadow-lg shadow-black/40 hover:border-orange-500/40 transition-colors"
                whileHover={{ scale: 1.03 }}
              >
                <div className="h-8.5 w-8.5 rounded-lg bg-gradient-to-tr from-orange-500 to-red-500 flex items-center justify-center shrink-0 shadow-md">
                  <Megaphone className="h-4 w-4 text-white" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-extrabold text-white leading-none">Digital Marketing</span>
                  <span className="text-[8px] text-slate-400 mt-1 leading-none">Data-Driven Results</span>
                </div>
              </motion.div>

              {/* Bottom Node Card: Analytics */}
              <motion.div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#09152b]/95 border border-slate-800/80 rounded-2xl p-2.5 flex items-center gap-3 w-[150px] sm:w-[160px] shadow-lg shadow-black/40 hover:border-indigo-500/40 transition-colors"
                whileHover={{ scale: 1.03 }}
              >
                <div className="h-8.5 w-8.5 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shrink-0 shadow-md">
                  <LineChart className="h-4 w-4 text-white" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-extrabold text-white leading-none">Analytics</span>
                  <span className="text-[8px] text-slate-400 mt-1 leading-none">Measure & Optimize</span>
                </div>
              </motion.div>

              {/* Left Node Card: IT Solutions */}
              <motion.div 
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#09152b]/95 border border-slate-800/80 rounded-2xl p-2.5 flex items-center gap-3 w-[150px] sm:w-[160px] shadow-lg shadow-black/40 hover:border-sky-500/40 transition-colors"
                whileHover={{ scale: 1.03 }}
              >
                <div className="h-8.5 w-8.5 rounded-lg bg-gradient-to-tr from-sky-500 to-blue-500 flex items-center justify-center shrink-0 shadow-md">
                  <Server className="h-4 w-4 text-white" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-extrabold text-white leading-none">IT Solutions</span>
                  <span className="text-[8px] text-slate-400 mt-1 leading-none">Secure & Reliable</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

        {/* Bottom Grid: 4 Pillars */}
        <div className="mt-10 pt-6 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex items-center gap-4 text-left">
              {pillar.icon}
              <div className="flex flex-col">
                <h4 className="text-[14px] font-bold text-white leading-none mb-1.5 font-poppins">
                  {pillar.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
