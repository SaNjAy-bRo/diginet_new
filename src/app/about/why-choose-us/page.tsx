"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, Headphones, ShieldCheck, Award, ArrowRight, CheckCircle, 
  Sparkles, ShieldAlert, Zap, Globe, HardDrive 
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import Image from "next/image";

export default function WhyChooseUsPage() {
  const { openBooking } = useBooking();

  const partners = [
    { name: "Unilogo", class: "text-slate-500 font-extrabold text-sm sm:text-base tracking-widest uppercase" },
    { name: "Jarquar", class: "text-slate-500 font-extrabold text-sm sm:text-base tracking-widest uppercase" },
    { name: "Ticketbox", class: "text-slate-500 font-extrabold text-sm sm:text-base tracking-widest uppercase" },
    { name: "Fashion", class: "text-slate-500 font-extrabold text-sm sm:text-base tracking-widest uppercase" },
    { name: "Konstruct", class: "text-slate-500 font-extrabold text-sm sm:text-base tracking-widest uppercase" },
    { name: "Nanocare", class: "text-slate-500 font-extrabold text-sm sm:text-base tracking-widest uppercase" }
  ];

  const pillars = [
    {
      title: "People",
      desc: "We understand that our people impact the success of our business, and we hire people who are smart, dedicated, and skilled.",
      icon: Users,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      glow: "hover:border-cyan-400/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.12)]",
      num: "01"
    },
    {
      title: "Customer Service",
      desc: "We strive to provide superior customer service and ensure that every client is completely satisfied with our work.",
      icon: Headphones,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      glow: "hover:border-indigo-400/50 hover:shadow-[0_10px_30px_rgba(99,102,241,0.12)]",
      num: "02"
    },
    {
      title: "Support",
      desc: "Our engineers are trustworthy, dedicated and experienced and will go the extra mile to support your needs.",
      icon: ShieldCheck,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      glow: "hover:border-pink-400/50 hover:shadow-[0_10px_30px_rgba(236,72,153,0.12)]",
      num: "03"
    },
    {
      title: "Quality",
      desc: "We are committed to deliver outstanding, high-quality IT solutions that add real value to your business.",
      icon: Award,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      glow: "hover:border-emerald-400/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)]",
      num: "04"
    }
  ];

  const caseStudies = [
    {
      title: "Cloud migration saves money for health insurer",
      category: "Cloud & Infrastructure",
      desc: "Migrating legacy servers unlocked scalable efficiency, optimized uptime, and reduced operational overhead for a global healthcare player.",
      icon: HardDrive,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10"
    },
    {
      title: "Remote support center for semiconductor provider",
      category: "Cyber Security",
      desc: "Delivering a 24/7 co-managed endpoint threat containment defense network securing semiconductor factories against cyber vulnerabilities.",
      icon: ShieldAlert,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10"
    },
    {
      title: "Subscription licensing unlocks spike in IT orders",
      category: "IT and Services",
      desc: "Streamlining licensing deployment pipelines to automate provisioning, optimizing software acquisition rates and infrastructure capacity.",
      icon: Zap,
      color: "text-pink-500",
      bg: "bg-pink-500/10"
    }
  ];

  return (
    <main className="w-full bg-white overflow-hidden min-h-screen">
      {/* ==========================================
          1. HERO SECTION (Skyscrapers Dusk background)
          ========================================== */}
      <section 
        className="relative w-full bg-[#06142D] pt-[120px] sm:pt-[130px] md:pt-[140px] pb-12 md:pb-16 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/images/why_choose_us_office_bg.png')` }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80 z-0" />

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-3 block">
              Why Choose DIGINET
            </span>
            <h1 className="text-3xl sm:text-[44px] lg:text-[50px] font-black tracking-tight text-white leading-tight mb-6 font-poppins">
              Delivering enterprise-level support <br className="hidden md:inline"/>
              worthy of a Fortune 500 company
            </h1>
            <p className="text-[14px] md:text-[16px] text-slate-200 leading-relaxed max-w-[800px] mx-auto mb-6">
              We provide the entire IT infrastructure, support resources and veteran expertise on demand, offering you solutions that reduce cost and enhance productivity.
            </p>
            <button
              onClick={openBooking}
              className="cursor-pointer px-6 py-3 rounded-full font-bold text-xs shadow-md transition-all duration-300 bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:scale-[1.02] active:scale-[0.98] shadow-cyan-450/20 hover:shadow-cyan-400/40"
            >
              Try for yourself
            </button>
          </motion.div>

          {/* Partners Monochrome Row */}
          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">Trusted Technology & Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              {partners.map((partner, idx) => (
                <span key={idx} className={partner.class}>
                  {partner.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. WHY DIGINET IT SERVICES? (Asymmetric Split)
          ========================================== */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white relative z-10 border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Styled Image Collage Frame */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-2 rounded-3xl border border-slate-200 bg-slate-50 shadow-xl overflow-hidden group hover:shadow-2xl hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/why_choose_us_team.png"
                  alt="DIGINET IT Engineers and Consultants"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-w-720px) 100vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-slate-950/10 z-10 transition-opacity duration-300 group-hover:opacity-0" />
              </div>
            </motion.div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-600 mb-3 block">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-medium text-slate-900 mb-6 font-poppins leading-[1.15]">
              Why DIGINET IT Services?
            </h2>
            <p className="text-sm md:text-base text-slate-655 leading-relaxed mb-6 font-medium">
              DIGINET is the provider of choices required to design, develop and manage the highly available and highly secure technology platform that you need, giving you the time and confidence to focus on running your business.
            </p>
            <p className="text-sm md:text-base text-slate-655 leading-relaxed mb-8 font-medium">
              More than mere technology, we provide an entire infrastructure, support resources and expertise on demand, offering you solutions that will reduce your cost, enhance your productivity and give you a real competitive edge.
            </p>
            <button
              onClick={openBooking}
              className="cursor-pointer self-start px-6 py-3 rounded-full font-bold text-xs shadow-md transition-all duration-300 bg-slate-900 text-white hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2"
            >
              Solve Core Business Problems
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ==========================================
          3. CORE PILLARS GRID (Watermark Numbers)
          ========================================== */}
      <section className="py-20 px-6 md:px-12 bg-slate-50 border-b border-slate-200/50">
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
          4. CASE STUDIES / SUCCESS GRID
          ========================================== */}
      <section className="py-24 px-6 md:px-12 bg-white relative">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-3 block">Proven Success</span>
            <h2 className="text-3xl font-medium text-slate-900 font-poppins">Find out how companies succeed with DIGINET</h2>
            <div className="h-1 w-20 bg-cyan-500 mt-4 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => {
              const IconComponent = study.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:border-cyan-400/50 hover:shadow-lg transition-all text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-extrabold text-cyan-600 uppercase tracking-widest bg-cyan-500/10 px-2.5 py-1 rounded-full">
                        {study.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                      {study.desc}
                    </p>
                  </div>

                  <div className="flex items-center border-t border-slate-200/60 pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg ${study.bg} ${study.color}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-slate-700">Client Success Case</span>
                    </div>
                  </div>
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
        className="py-16 md:py-20 px-6 md:px-12 text-white border-t border-slate-900 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/images/why_choose_us_office_bg.png')` }}
      >
        {/* Dark gradient overlay to ensure readable typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80 z-0" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-3 block">
            Let&apos;s Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-6 font-poppins">
            Are you ready for a better, <br className="hidden sm:inline"/>
            more productive business?
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed font-medium">
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
