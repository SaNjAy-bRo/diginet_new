"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, MapPin, Clock, ArrowRight, Heart, Calendar, 
  Coffee, Gamepad2, Activity, ShieldCheck, Users2, Building2,
  Sparkles, TrendingUp, Target 
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import Image from "next/image";

interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
}

const openings: JobOpening[] = [
  {
    title: "Engineer, Observability Applications",
    department: "Software Engineering & Observability",
    location: "Singapore",
    type: "Full-Time"
  },
  {
    title: "Cloud Ops Administrator",
    department: "Cloud & Infrastructure Operations",
    location: "Singapore",
    type: "Full-Time"
  },
  {
    title: "Platform Support Specialist",
    department: "Support & Systems Integration",
    location: "Singapore",
    type: "Full-Time"
  }
];

const benefits = [
  {
    title: "Health Care",
    desc: "Premium health, dental, and vision benefits.",
    icon: Heart,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    glow: "hover:border-cyan-400/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.12)]"
  },
  {
    title: "Flexibility",
    desc: "Flex work hours, annual vacation, work-life balance and paid parental leave.",
    icon: Calendar,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    glow: "hover:border-indigo-400/50 hover:shadow-[0_10px_30px_rgba(99,102,241,0.12)]"
  },
  {
    title: "Meals",
    desc: "Healthy catered lunches, dinners, and drinks on site.",
    icon: Coffee,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    glow: "hover:border-pink-400/50 hover:shadow-[0_10px_30px_rgba(236,72,153,0.12)]"
  },
  {
    title: "Fun",
    desc: "Board games, team outings, company parties, and more.",
    icon: Gamepad2,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    glow: "hover:border-emerald-400/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)]"
  },
  {
    title: "Lifestyle",
    desc: "Monthly wellness stipend (gym, workout gear, etc.) to keep you fit.",
    icon: Activity,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    glow: "hover:border-amber-400/50 hover:shadow-[0_10px_30px_rgba(245,158,11,0.12)]"
  }
];

export default function CareerPage() {
  const { openBooking } = useBooking();

  const scrollToOpenings = () => {
    const section = document.getElementById("openings-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full bg-white overflow-hidden min-h-screen">
      {/* ==========================================
          1. HERO SECTION (Dusk Office Background)
          ========================================== */}
      <section 
        className="relative w-full bg-[#06142D] pt-[120px] sm:pt-[130px] md:pt-[140px] pb-16 md:pb-24 overflow-hidden bg-cover bg-center"
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
              Careers at DIGINET
            </span>
            <h1 className="text-3xl sm:text-[44px] lg:text-[50px] font-black tracking-tight text-white leading-tight mb-5 font-poppins">
              Work With Us
            </h1>
            <p className="text-[14px] md:text-[16px] text-slate-200 leading-relaxed max-w-[800px] mx-auto mb-6">
              We help companies reach their full potential. For us, we try to reach ours. Come join us.
            </p>
            <button
              onClick={scrollToOpenings}
              className="cursor-pointer px-6 py-3 rounded-full font-bold text-xs shadow-md transition-all duration-300 bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:scale-[1.02] active:scale-[0.98] shadow-cyan-450/20 hover:shadow-cyan-400/40"
            >
              Come join us
            </button>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          2. CULTURE & VALUES SECTION (Modern Grid)
          ========================================== */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white relative z-10 border-b border-slate-100 overflow-hidden">
        {/* Decorative background gradients */}
        <div className="absolute top-1/4 left-[10%] w-[300px] h-[300px] rounded-full bg-cyan-100/30 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[10%] w-[300px] h-[300px] rounded-full bg-blue-100/20 blur-[80px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-600 mb-3 block font-poppins">
              Life at Diginet
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-medium text-slate-900 mb-6 font-poppins leading-[1.15] tracking-tight">
              Our Core Pillars & Culture
            </h2>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed font-normal max-w-2xl mx-auto">
              We&apos;re building the next generation of IT solutions. Our culture is defined by collaboration, curiosity, and a relentless pursuit of excellence. Join us and shape the future of enterprise technology.
            </p>
          </div>

          {/* Pillars Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Continuous Innovation",
                desc: "We push boundaries and explore modern frameworks, AI integrations, and cloud architectures to build solutions that set new industry standards.",
                icon: Sparkles,
                color: "text-cyan-500",
                border: "hover:border-cyan-400/50",
                glow: "hover:shadow-[0_15px_30px_-5px_rgba(6,182,212,0.1)]"
              },
              {
                title: "Growth & Mentorship",
                desc: "Your learning path matters to us. We sponsor certifications, conduct regular workshops, and run technical peer reviews to level up your career.",
                icon: TrendingUp,
                color: "text-blue-500",
                border: "hover:border-blue-400/50",
                glow: "hover:shadow-[0_15px_30px_-5px_rgba(59,130,246,0.1)]"
              },
              {
                title: "Collaborative Spirit",
                desc: "We believe in cross-functional synergy, open feedback loops, and zero bureaucracy. We share ownership, build trust, and win together.",
                icon: Users2,
                color: "text-indigo-500",
                border: "hover:border-indigo-400/50",
                glow: "hover:shadow-[0_15px_30px_-5px_rgba(99,102,241,0.1)]"
              },
              {
                title: "Customer Impact",
                desc: "The platforms we engineer support critical services. Every feature and line of code you write directly empowers businesses across Southeast Asia.",
                icon: Target,
                color: "text-emerald-500",
                border: "hover:border-emerald-400/50",
                glow: "hover:shadow-[0_15px_30px_-5px_rgba(16,185,129,0.1)]"
              }
            ].map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-8 rounded-[24px] border border-slate-200/60 bg-white text-left transition-all duration-300 ${pillar.border} ${pillar.glow} group hover:-translate-y-1`}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                    <IconComp className={`w-6 h-6 ${pillar.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-3 font-poppins">{pillar.title}</h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==========================================
          3. CURRENT OPENINGS SECTION (Dark Slate Theme)
          ========================================== */}
      <section id="openings-section" className="py-20 px-6 md:px-12 bg-slate-950 text-white relative border-b border-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 block">Open Roles</span>
            <h2 className="text-3xl font-medium text-white font-poppins">Current Openings</h2>
            <p className="text-xs text-slate-400 mt-2">Play a vital role. Help us shape the future.</p>
            <div className="h-1 w-16 bg-cyan-400 mt-4 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col gap-4">
            {openings.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-cyan-400/40 hover:shadow-[0_4px_20px_rgba(6,182,212,0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300"
              >
                <div className="text-left">
                  <span className="text-[9px] font-extrabold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-2.5 py-0.5 rounded-full block w-fit mb-2">
                    {job.department}
                  </span>
                  <h3 className="text-base font-extrabold text-white mb-2 font-poppins">{job.title}</h3>
                  <div className="flex gap-4 items-center text-xs text-slate-400">
                    <span className="flex items-center gap-1 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <button
                  onClick={openBooking}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer border border-slate-700/50"
                >
                  Apply Now
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs text-slate-400">
              We are always on the lookout for talented folks to join our team. Follow us on{" "}
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cyan-400 font-bold hover:underline"
              >
                LinkedIn
              </a>!
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. BENEFITS SECTION (Bento Style 5-Column Cards)
          ========================================== */}
      <section className="py-20 px-6 md:px-12 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-3 block">Perks</span>
          <h2 className="text-3xl font-medium text-slate-900 mb-4 font-poppins">Benefits</h2>
          <p className="text-xs text-slate-500 mb-16 font-semibold">Here are just some of the perks you&apos;ll get as a member of Diginet.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-6 rounded-3xl border border-slate-200 bg-white text-left transition-all duration-300 ${benefit.glow} group relative overflow-hidden`}
                >
                  <div className={`w-10 h-10 rounded-2xl ${benefit.bg} ${benefit.color} flex items-center justify-center mb-6 relative z-10 transition-transform duration-300 group-hover:scale-105`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-2 font-poppins relative z-10">{benefit.title}</h3>
                  <p className="text-xs text-slate-550 leading-relaxed font-semibold relative z-10">
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          5. CTA BANNER (Professional Office cover)
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
          <p className="text-slate-350 mb-6 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed font-medium">
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
