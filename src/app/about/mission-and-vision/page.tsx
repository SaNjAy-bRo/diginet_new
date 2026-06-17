"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle, ArrowRight, Flag, Lightbulb, Users, Award, 
  HelpCircle, ShieldCheck, Heart 
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function MissionVisionPage() {
  const { openBooking } = useBooking();

  const handleLearnMore = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("detailed-statements");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pillars = [
    {
      title: "Commitment",
      desc: "We can and do work together as a team and communicate clearly.",
      icon: Flag,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      glow: "hover:border-cyan-400/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.12)]",
      num: "01"
    },
    {
      title: "Innovation",
      desc: "We face technical challenges constructively and support others.",
      icon: Lightbulb,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      glow: "hover:border-indigo-400/50 hover:shadow-[0_10px_30px_rgba(99,102,241,0.12)]",
      num: "02"
    },
    {
      title: "Community",
      desc: "Creating a positive place to work and supporting ethical initiatives.",
      icon: Heart,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      glow: "hover:border-pink-400/50 hover:shadow-[0_10px_30px_rgba(236,72,153,0.12)]",
      num: "03"
    },
    {
      title: "Excellence",
      desc: "Always deliver exceptional quality, commit to SLA and improve.",
      icon: Award,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      glow: "hover:border-emerald-400/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)]",
      num: "04"
    }
  ];

  return (
    <main className="w-full bg-white overflow-hidden min-h-screen">
      {/* ==========================================
          1. HERO SECTION (Dark theme)
          ========================================== */}
      <section className="relative w-full bg-[#06142D] pt-[95px] sm:pt-[100px] md:pt-[105px] pb-16 md:pb-24 overflow-hidden">
        {/* Background ambient grids/effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[130px]" />
          <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.08]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-3 block">
              Corporate Direction
            </span>
            <h1 className="text-3xl sm:text-[44px] lg:text-[48px] font-black tracking-tight text-white leading-tight mb-5 font-poppins">
              Mission, Vision & Values
            </h1>
            <p className="text-[14px] md:text-[16px] text-slate-300 leading-relaxed max-w-[800px] mx-auto">
              We connect with our clients, our communities and our company; it makes us different in ways that matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          2. CULTURE & COMMITMENT SPLIT CARDS
          ========================================== */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white relative z-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Our Culture (Glowing Deep Slate Block) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl bg-[#06142D] text-white flex flex-col justify-between shadow-lg border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.12)] transition-all duration-300 relative overflow-hidden group"
          >
            {/* Background glowing circle */}
            <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[80px] group-hover:bg-cyan-500/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 mb-3 block">DIGINET Way</span>
              <h3 className="text-2xl sm:text-3xl font-black mb-8 font-poppins tracking-tight text-white">Our Culture</h3>
              
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-1 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed text-slate-300">
                    We communicate directly because in a world overloaded with data, it is the most important simple value.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-1 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed text-slate-300">
                    We are technical operators, not sales teams. We design systems that run smoothly, secure assets, and scale.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-1 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed text-slate-300">
                    We help you connect to the resources you need to focus on what you do best.
                  </p>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleLearnMore}
              className="cursor-pointer self-start px-6 py-3 rounded-xl font-extrabold text-xs transition-all duration-300 bg-white/5 border border-white/10 hover:border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/5 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 relative z-10"
            >
              Find out more
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Our Commitment (Glowing Deep Navy Block) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl bg-[#06142D] text-white flex flex-col justify-between shadow-lg border border-indigo-500/20 hover:border-indigo-400/50 hover:shadow-[0_10px_30px_rgba(99,102,241,0.12)] transition-all duration-300 relative overflow-hidden group"
          >
            {/* Background glowing circle */}
            <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[80px] group-hover:bg-indigo-500/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 mb-3 block">Operational Focus</span>
              <h3 className="text-2xl sm:text-3xl font-black mb-8 font-poppins tracking-tight text-white">Our Commitment</h3>
              
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 mt-1 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-300 leading-relaxed">
                    We&apos;re the trusted partner that offers a proactive approach to your technology infrastructure.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 mt-1 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-300 leading-relaxed">
                    We are the fellow business partner that understands your daily operational requirements and needs.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 mt-1 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-300 leading-relaxed">
                    We offer the kind of IT support solution that&apos;s always there when you need it.
                  </p>
                </div>
              </div>
            </div>
            
            <button
              onClick={openBooking}
              className="cursor-pointer self-start px-6 py-3 rounded-xl font-extrabold text-xs transition-all duration-300 bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 relative z-10"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* ==========================================
          3. DETAILED STATEMENTS SECTION (Light Section)
          ========================================== */}
      <section id="detailed-statements" className="py-20 px-6 md:px-12 bg-slate-50 border-t border-b border-slate-200/50 relative">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 items-start"
          >
            <h2 className="text-xl md:text-2xl font-medium text-slate-900 md:col-span-1 font-poppins text-left">
              Our Mission
            </h2>
            <div className="md:col-span-3 text-left">
              <p className="text-sm md:text-base text-slate-655 leading-relaxed font-medium">
                To be the global leader in IT Services. Building on our technologies, competencies and customer interests, and creating value for our stakeholders and customers. We will achieve this by focusing on the intersection of our clients&apos; emerging needs and the acceleration of business and technological change.
              </p>
            </div>
          </motion.div>

          <hr className="border-slate-200" />

          {/* Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 items-start"
          >
            <h2 className="text-xl md:text-2xl font-medium text-slate-900 md:col-span-1 font-poppins text-left">
              Our Vision
            </h2>
            <div className="md:col-span-3 text-left space-y-6">
              <p className="text-sm md:text-base text-slate-655 leading-relaxed font-medium">
                DIGINET will be the first choice solution partner in the technology sector providing IT and Communication services to businesses throughout the region.
              </p>
              <p className="text-sm md:text-base text-slate-655 leading-relaxed font-medium">
                We will become an integral part of our client&apos;s success, collaborating with them to achieve their strategic objectives whilst creating long lasting business value through the delivery and management of their technology.
              </p>
              <p className="text-sm md:text-base text-slate-655 leading-relaxed font-medium">
                Our team of talented, experienced and motivated industry specialists will be recognized as the best in their field. Our continued success will be driven by our people who will share in it.
              </p>
            </div>
          </motion.div>

          <hr className="border-slate-200" />

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 items-start"
          >
            <h2 className="text-xl md:text-2xl font-medium text-slate-900 md:col-span-1 font-poppins text-left">
              Our Values
            </h2>
            <div className="md:col-span-3 text-left space-y-4">
              <p className="text-sm md:text-base text-slate-900 font-bold leading-relaxed">
                Our values are the guiding principles upon which DIGINET was founded and how we strive to conduct our business on a daily basis.
              </p>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-semibold italic">
                Values are the silent drivers of the way we act in our organization - they determine how we treat each other, our clients, and partners.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ==========================================
          4. THE FOUR PILLARS GRID (Light Section)
          ========================================== */}
      <section className="py-20 px-6 md:px-12 bg-white relative">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pill, idx) => {
              const IconComponent = pill.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative p-8 rounded-3xl border border-slate-200 bg-white text-left transition-all duration-300 ${pill.glow} group overflow-hidden`}
                >
                  {/* Floating Background Number Watermark */}
                  <div className="absolute right-6 top-4 text-7xl font-black text-slate-100/70 select-none pointer-events-none group-hover:scale-110 group-hover:text-slate-200/50 transition-all duration-500 font-poppins">
                    {pill.num}
                  </div>

                  <div className={`w-12 h-12 rounded-2xl ${pill.bg} ${pill.color} flex items-center justify-center mb-8 relative z-10 transition-transform duration-300 group-hover:scale-105`}>
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-3 font-poppins relative z-10">{pill.title}</h3>
                  <p className="text-xs md:text-sm text-slate-550 leading-relaxed font-semibold relative z-10">
                    {pill.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          5. CTA BANNER (Skyscrapers cover)
          ========================================== */}
      <section 
        className="py-28 px-6 md:px-12 text-white border-t border-slate-900 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/images/about_cta_bg.png')` }}
      >
        {/* Dark gradient overlay to ensure readable typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/50 z-0" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-3 block">
            Let&apos;s Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-6 font-poppins">
            Are you ready for a better, <br className="hidden sm:inline"/>
            more productive business?
          </h2>
          <p className="text-slate-300 mb-10 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            Stop worrying about technology problems. Focus completely on your core business goals. Let us provide the technical reliability and support you deserve.
          </p>
          <button
            onClick={openBooking}
            className="cursor-pointer px-8 py-3.5 rounded-full font-extrabold text-xs sm:text-sm shadow-md transition-all duration-300 bg-cta-blue text-white hover:bg-hover-blue hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 shadow-cyan-500/10"
          >
            Contact us Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  );
}
