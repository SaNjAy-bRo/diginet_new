"use client";

import React from "react";
import { ArrowRight, Code, Server, Megaphone, LineChart, Users, Award, ShieldCheck, BarChart3, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useBooking } from "@/context/BookingContext";

export default function Hero() {
  const { openBooking } = useBooking();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
    }),
  };

  return (
    <section className="relative w-full bg-[#06142D] overflow-hidden pt-[116px] pb-40 md:pb-32 lg:pb-36">
      {/* Background ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-8%] h-[500px] w-[500px] rounded-full bg-accent-blue/8 blur-[130px]" />
        <div className="absolute bottom-[-15%] right-[-8%] h-[450px] w-[450px] rounded-full bg-hover-blue/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.12]" />
      </div>

      {/* Main hero content */}
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ===== LEFT: Text Content ===== */}
          <div className="flex flex-col text-center lg:text-left items-center lg:items-start relative z-10">

            {/* Tagline — no background */}
            <motion.span
              className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400 mb-4"
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
            >
              Software • IT Solutions • Digital Marketing
            </motion.span>

            {/* Main Heading — exactly 2 lines on desktop */}
            <motion.h1
              className="text-3xl sm:text-[44px] lg:text-[48px] xl:text-[54px] font-black tracking-tight text-white leading-[1.08] mb-4 font-poppins"
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
            >
              <span className="block whitespace-normal md:whitespace-nowrap">Technology. Marketing.</span>
              <span className="block mt-0.5">
                Growth.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-accent-blue to-hover-blue">
                  Together.
                </span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-[14px] md:text-[15px] text-slate-400 leading-relaxed max-w-[440px] mb-6"
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
            >
              Diginet Solutions builds custom software, secure IT infrastructure,
              and data-driven marketing that work together to accelerate
              measurable business growth.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto"
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
            >
              <button
                onClick={openBooking}
                className="cursor-pointer inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold text-white bg-cta-blue hover:bg-hover-blue transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-cta-blue/25"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold text-slate-300 border border-slate-700 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-all duration-300"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* ===== RIGHT: Console Dashboard ===== */}
          <motion.div
            className="relative flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Ambient glow */}
            <div className="absolute w-[70%] h-[70%] bg-accent-blue/6 rounded-full blur-[80px] pointer-events-none" />

            {/* Console container — positioned to allow floating cards to overflow */}
            <div className="relative w-full max-w-[480px] lg:max-w-[520px]">

              {/* Surrounding Curvature Line */}
              <svg className="absolute -inset-10 w-[calc(100%+80px)] h-[calc(100%+80px)] pointer-events-none z-0 overflow-visible" viewBox="0 0 500 400" fill="none">
                <defs>
                  <linearGradient id="curve-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#2563eb" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Outermost glowing curvature line */}
                <ellipse
                  cx="250"
                  cy="200"
                  rx="230"
                  ry="150"
                  transform="rotate(-10, 250, 200)"
                  stroke="url(#curve-grad)"
                  strokeWidth="1.8"
                  fill="none"
                  filter="url(#glow)"
                  className="opacity-70"
                />
                {/* Inner decorative blueprint line */}
                <ellipse
                  cx="250"
                  cy="200"
                  rx="210"
                  ry="130"
                  transform="rotate(-10, 250, 200)"
                  stroke="rgba(56, 189, 248, 0.12)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  fill="none"
                />
              </svg>

              {/* ---- Main IDE Panel ---- */}
              <div className="relative z-10 w-[80%] sm:w-[84%] mx-auto rounded-2xl border border-slate-700/40 bg-[#070f1e]/95 shadow-2xl shadow-black/80 overflow-hidden flex flex-col">
                
                {/* Browser chrome bar */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800/80 bg-[#0b1526] shrink-0">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                  </div>
                  <div className="rounded-md bg-slate-800/30 px-3.5 py-0.5 text-[9px] font-mono text-slate-400 select-none tracking-wide">
                    Diginet Platform
                  </div>
                  <div className="w-10" />
                </div>

                {/* Code editor */}
                <div className="p-5 font-mono text-[8.5px] sm:text-[9.5px] leading-[1.7] text-slate-500 select-none bg-[#050b16] min-h-[285px]">
                  <p className="text-sky-400"><span className="text-pink-500">import</span> &#123; <span className="text-white">Campaign, Analytics</span> &#125; <span className="text-pink-500">from</span> <span className="text-emerald-400">&apos;@diginet/platform&apos;</span>;</p>
                  <p className="mt-3 text-sky-400"><span className="text-pink-500">const</span> <span className="text-white">company</span> = &#123;</p>
                  <p className="pl-4 text-slate-400">name: <span className="text-emerald-400">&apos;Diginet Solutions&apos;</span>,</p>
                  <p className="pl-4 text-slate-400">focus: [<span className="text-emerald-400">&apos;Software&apos;</span>, <span className="text-emerald-400">&apos;IT&apos;</span>, <span className="text-emerald-400">&apos;Marketing&apos;</span>],</p>
                  <p className="pl-4 text-slate-400">active: <span className="text-amber-400">true</span></p>
                  <p className="text-sky-400">&#125;;</p>
                  <p className="mt-3 text-sky-400"><span className="text-pink-500">async function</span> <span className="text-blue-400">executeGrowthCampaign</span>() &#123;</p>
                  <p className="pl-4 text-sky-400"><span className="text-pink-500">const</span> <span className="text-white">result</span> = <span className="text-pink-500">await</span> <span className="text-white">Campaign</span>.<span className="text-blue-400">launch</span>(&#123;</p>
                  <p className="pl-8 text-slate-400">strategy: <span className="text-emerald-400">&apos;data-driven&apos;</span>,</p>
                  <p className="pl-8 text-slate-400">channels: [<span className="text-emerald-400">&apos;SEO&apos;</span>, <span className="text-emerald-400">&apos;Ads&apos;</span>, <span className="text-emerald-400">&apos;Social&apos;</span>],</p>
                  <p className="pl-8 text-slate-400">roiTarget: <span className="text-emerald-400">&apos;4.8x&apos;</span></p>
                  <p className="pl-4 text-sky-400">&#125;);</p>
                  <p className="pl-4 text-sky-400"><span className="text-pink-500">if</span> (<span className="text-white">result.success</span>) &#123;</p>
                  <p className="pl-8 text-white">Analytics.<span className="text-blue-400">track</span>(result.metrics);</p>
                  <p className="pl-4 text-sky-400">&#125;</p>
                  <p className="text-sky-400">&#125;</p>
                </div>
              </div>

              {/* ---- Floating Left Card (Service List) ---- */}
              <motion.div
                className="absolute -left-6 sm:-left-16 top-[15%] z-20 w-[145px] sm:w-[195px] rounded-2xl border border-white/[0.08] shadow-2xl p-2.5 sm:p-4 bg-[#0a1424]/85 backdrop-blur-lg flex flex-col gap-2.5 sm:gap-3"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Item 1 */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                    <Code className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] sm:text-[11px] font-bold text-white leading-tight">Software</span>
                    <span className="text-[7px] sm:text-[8px] text-slate-400 leading-none">Development</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <Server className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] sm:text-[11px] font-bold text-white leading-tight">IT Solutions</span>
                    <span className="text-[7px] sm:text-[8px] text-slate-400 leading-none">Infrastructure</span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Megaphone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] sm:text-[11px] font-bold text-white leading-tight">Digital Marketing</span>
                    <span className="text-[7px] sm:text-[8px] text-slate-400 leading-none">Campaigns</span>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <LineChart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] sm:text-[11px] font-bold text-white leading-tight">Analytics</span>
                    <span className="text-[7px] sm:text-[8px] text-slate-400 leading-none">& Insights</span>
                  </div>
                </div>
              </motion.div>

              {/* ---- Floating Right Card (Marketing Campaign) ---- */}
              <motion.div
                className="absolute -right-6 sm:-right-16 bottom-[10%] z-20 w-[145px] sm:w-[195px] rounded-2xl border border-white/[0.08] shadow-2xl p-2.5 sm:p-4 bg-[#0a1424]/85 backdrop-blur-lg flex flex-col gap-2.5 sm:gap-3"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <h4 className="text-[9px] sm:text-[11px] font-bold text-white mb-0.5 flex items-center justify-between">
                  <span>Marketing Campaign</span>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue" />
                  </span>
                </h4>
                <div className="flex flex-col gap-1.5 sm:gap-2.5 text-[8px] sm:text-[9.5px] text-slate-300">
                  {["Audience Research", "Creative Strategy", "Execution", "Performance Tracking"].map((item) => (
                    <div key={item} className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-accent-blue shrink-0 stroke-[2.5px]" />
                        <span>{item}</span>
                      </div>
                      <span className="text-slate-500 text-[8px] shrink-0">✓</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ---- Floating </> tag (overlapping top-right of the marketing card) ---- */}
              <motion.div
                className="absolute -right-2 sm:-right-8 top-[32%] z-30 h-7 w-7 sm:h-10 sm:w-10 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 font-mono text-[10px] sm:text-xs font-bold shadow-lg backdrop-blur-sm"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                &lt;/&gt;
              </motion.div>

              {/* ---- Floating 96% Client Retention Badge ---- */}
              <motion.div
                className="absolute -left-4 sm:-left-12 bottom-[8%] z-30 flex items-center gap-1.5 sm:gap-2.5 bg-[#0a1424]/90 border border-white/[0.08] py-1 sm:py-1.5 px-2 sm:px-3 rounded-full shadow-lg"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <BarChart3 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] font-black text-white font-poppins leading-none">96%</span>
                  <span className="text-[6px] sm:text-[7px] text-slate-400 uppercase tracking-wider leading-none mt-0.5">Retention</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* ===== Bottom Trust Metrics ===== */}
        <motion.div
          className="mt-12 lg:mt-16 pt-6 border-t border-slate-800/50 grid grid-cols-2 md:grid-cols-4 gap-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { icon: <Users className="h-4 w-4" />, value: "250+", label: "Happy Clients" },
            { icon: <Award className="h-4 w-4" />, value: "10+", label: "Years of Excellence" },
            { icon: <ShieldCheck className="h-4 w-4" />, value: "24/7", label: "Support" },
            { icon: <BarChart3 className="h-4 w-4" />, value: "96%", label: "Client Retention" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-center text-accent-blue shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-lg md:text-xl font-black text-white font-poppins leading-none">{stat.value}</div>
                <div className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold mt-0.5">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
