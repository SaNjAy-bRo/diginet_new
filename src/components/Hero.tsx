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

              {/* Decorative arc behind console */}
              <svg className="absolute -top-6 -left-6 -right-6 -bottom-6 w-[calc(100%+48px)] h-[calc(100%+48px)] text-sky-500/[0.07] pointer-events-none z-0" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
                <ellipse cx="50" cy="30" rx="48" ry="22" stroke="currentColor" strokeWidth="0.4" strokeDasharray="4,4" />
                <ellipse cx="50" cy="70" rx="48" ry="22" stroke="currentColor" strokeWidth="0.3" />
              </svg>

              {/* ---- Main IDE Panel ---- */}
              <div className="relative z-10 w-full rounded-2xl border border-slate-700/60 bg-[#0a1628]/95 shadow-2xl shadow-black/50 overflow-hidden flex flex-col">
                
                {/* Browser chrome bar */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800/80 bg-[#0d1a30]/80 shrink-0">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                  </div>
                  <div className="rounded-md bg-slate-800/60 px-3.5 py-0.5 text-[9px] font-mono text-slate-400 select-none tracking-wide">
                    Diginet Platform
                  </div>
                  <div className="w-10" />
                </div>

                {/* Split panel */}
                <div className="flex" style={{ minHeight: "260px" }}>

                  {/* Left — Service tabs */}
                  <div className="w-[42%] border-r border-slate-800/50 bg-[#081220]/60 p-2.5 flex flex-col gap-1.5">
                    
                    {/* Active service */}
                    <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20">
                      <div className="h-7 w-7 rounded-lg bg-sky-500/15 flex items-center justify-center shrink-0">
                        <Code className="h-3.5 w-3.5 text-sky-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-white leading-none">Software</span>
                        <span className="text-[7px] text-slate-400 mt-0.5 leading-none">Development</span>
                      </div>
                    </div>

                    {/* IT Solutions */}
                    <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-white/[0.03] transition-colors">
                      <div className="h-7 w-7 rounded-lg bg-slate-800/60 flex items-center justify-center shrink-0">
                        <Server className="h-3.5 w-3.5 text-slate-500" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-300 leading-none">IT Solutions</span>
                        <span className="text-[7px] text-slate-500 mt-0.5 leading-none">Infrastructure</span>
                      </div>
                    </div>

                    {/* Digital Marketing */}
                    <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-white/[0.03] transition-colors">
                      <div className="h-7 w-7 rounded-lg bg-slate-800/60 flex items-center justify-center shrink-0">
                        <Megaphone className="h-3.5 w-3.5 text-slate-500" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-300 leading-none">Digital Marketing</span>
                        <span className="text-[7px] text-slate-500 mt-0.5 leading-none">Campaigns</span>
                      </div>
                    </div>

                    {/* Analytics */}
                    <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-white/[0.03] transition-colors">
                      <div className="h-7 w-7 rounded-lg bg-slate-800/60 flex items-center justify-center shrink-0">
                        <LineChart className="h-3.5 w-3.5 text-slate-500" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-300 leading-none">Analytics</span>
                        <span className="text-[7px] text-slate-500 mt-0.5 leading-none">& Insights</span>
                      </div>
                    </div>
                  </div>

                  {/* Right — Code editor */}
                  <div className="w-[58%] p-4 font-mono text-[9px] leading-[1.8] text-slate-500 select-none bg-[#070e1a]/40">
                    <p className="text-emerald-400/70">// Growth Console</p>
                    <p className="mt-2 text-sky-400">class <span className="text-white font-semibold">Campaign</span> &#123;</p>
                    <p className="pl-4 text-slate-400">leads: <span className="text-orange-400">&quot;170%&quot;</span>,</p>
                    <p className="pl-4 text-slate-400">ROI: <span className="text-orange-400">&quot;4.8x&quot;</span>,</p>
                    <p className="pl-4 text-slate-400">audit: <span className="text-orange-400">true</span></p>
                    <p className="text-sky-400">&#125;</p>
                    <p className="mt-3 text-slate-600">// Connecting channels...</p>
                  </div>
                </div>
              </div>

              {/* ---- Floating </> tag (top-right) ---- */}
              <motion.div
                className="absolute -right-2 sm:-right-4 top-[10%] z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 font-mono text-sm sm:text-base font-bold shadow-lg backdrop-blur-sm"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                &lt;/&gt;
              </motion.div>

              {/* ---- Floating Marketing Campaign Card (right side) ---- */}
              <motion.div
                className="absolute -right-3 sm:-right-8 bottom-[6%] z-20 w-[180px] sm:w-[200px] rounded-xl border border-white/10 shadow-2xl shadow-black/30 p-3.5 sm:p-4 bg-[#0a1628]/90 backdrop-blur-xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <h4 className="text-[10px] sm:text-[11px] font-bold text-white mb-2.5 flex items-center justify-between">
                  <span>Marketing Campaign</span>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue" />
                  </span>
                </h4>
                <div className="flex flex-col gap-2 text-[8px] sm:text-[9px] text-slate-300">
                  {["Audience Research", "Creative Strategy", "Execution", "Performance Tracking"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-accent-blue shrink-0 stroke-[2.5px]" />
                      <span>{item}</span>
                    </div>
                  ))}
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
