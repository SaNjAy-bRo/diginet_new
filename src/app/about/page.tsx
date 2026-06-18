"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, Eye, Award, CheckCircle, Code, PieChart, UserCheck, 
  ArrowRight, Users, Network, Globe, TrendingUp,
  Calendar, User, Cpu, ShieldAlert 
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const { openBooking } = useBooking();

  const timeline = [
    {
      year: "2012",
      title: "Company Founded",
      desc: "DigiNet began operations as a simple IT Solutions provider company in 2012, setting high standards of service right from day one."
    },
    {
      year: "2014",
      title: "Enterprise Consulting Expansion",
      desc: "We expanded operations to deliver independent IT consulting and integration support to mid-market clients, broadening our architectural expertise."
    },
    {
      year: "2016 - 2019",
      title: "Strategic Healthcare Partnership",
      desc: "DigiNet successfully partnered with Zentox, a group provider of hospital systems IT support and IT Service security arrays, securing crucial endpoint channels."
    },
    {
      year: "2019 - Present",
      title: "Global Scaled Engineering",
      desc: "The service team at DigiNet since its inception has increased to a customer base ranging from SMBs to manufacturing sectors. We are intensely proud of the external recognition for our team, which remains a solid representation of original business values in dynamic service arrays designed to meet the needs of each company."
    }
  ];

  const stats = [
    { value: "200+", label: "Partners & Portfolio Lines", icon: Users },
    { value: "128", label: "Enterprise Certified Systems", icon: Network },
    { value: "45", label: "Certified Network Professionals", icon: Shield },
    { value: "30", label: "Sectors Across 12 Countries", icon: Globe },
    { value: "$15 M", label: "Sales Generated (Last 3 Years)", icon: TrendingUp }
  ];

  const articles = [
    {
      title: "Top 9 Emerging Technologies",
      category: "Tech Trends",
      author: "System Administrator",
      date: "June 2026",
      desc: "An exploration of key emerging trends from AI modeling networks to next-gen edge architectures designed to scale corporate throughput.",
      icon: Cpu,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10"
    },
    {
      title: "What is Cyber Security? Types, Benefits, and Importance",
      category: "Security & Operations",
      author: "Security Officer",
      date: "May 2026",
      desc: "A comprehensive analysis of threat surface models, proactive containment systems, and compliance guidelines critical for enterprise posture.",
      icon: ShieldAlert,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10"
    }
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-800">
      
      {/* ==========================================
          1. HERO SECTION (Dark theme for corporate/security style)
          ========================================== */}
      <section className="relative w-full bg-[#06142D] pt-[120px] sm:pt-[130px] md:pt-[140px] pb-16 md:pb-24 overflow-hidden">
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
              About DIGINET
            </span>
            <h1 className="text-3xl sm:text-[44px] lg:text-[52px] font-black tracking-tight text-white leading-tight mb-6 font-poppins">
              Technology Solutions Engineered <br className="hidden md:inline"/>
              for Enterprise Scale
            </h1>
            <p className="text-[14px] md:text-[16px] text-slate-300 leading-relaxed max-w-[800px] mx-auto mb-8">
              Providing high-performance software engineering, robust cybersecurity systems, and data-led acquisition loops.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          2. CORPORATE OVERVIEW STATEMENT (Light Section)
          ========================================== */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white relative z-10 border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-600 mb-3 block">
              Core Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-medium text-slate-900 mb-6 font-poppins leading-[1.15]">
              Resolving Technical Complexities with High Standards
            </h2>
            <p className="text-sm md:text-base text-slate-655 leading-relaxed mb-6 font-medium">
              DIGINET is a privately owned IT Support and IT Services company formed in 2012. Today we&apos;re proud to boast a strong team of IT engineers who thrive on solving your IT problems and meeting your business needs. 
            </p>
            <p className="text-sm md:text-base text-slate-655 leading-relaxed mb-8 font-medium">
              We are here to resolve your technology problems and form a long-term, mutually beneficial relationship with your organization, ensuring smooth scaling and complete systems reliability.
            </p>
            
            {/* Asymmetric highlights list with custom styled check icons */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-700 text-xs md:text-sm font-semibold">Custom Software Engineering & Cloud Infrastructures</span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-700 text-xs md:text-sm font-semibold">Zero-Trust Cybersecurity Framework Integration</span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-700 text-xs md:text-sm font-semibold">Continuous Operations Monitoring & 99.9% Uptime SLA</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={openBooking}
                className="cursor-pointer px-6 py-3 rounded-full font-bold text-xs shadow-md transition-all duration-300 bg-slate-900 text-white hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image/Vibe collage - Unique styled image container with interactive overlays */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-2 rounded-3xl border border-slate-200/60 bg-slate-50 shadow-xl overflow-hidden group hover:shadow-2xl hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about_collaboration.png"
                  alt="DIGINET IT Collaboration Team"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-w-720px) 100vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-slate-950/10 z-10 transition-opacity duration-300 group-hover:opacity-0" />
                
                {/* Floating Glassmorphic Badges */}
                <div className="absolute top-4 left-4 z-20 bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 hover:bg-slate-950/80 transition-colors shadow-lg">
                  <p className="text-[10px] font-extrabold uppercase text-cyan-400 tracking-wider">Since 2012</p>
                  <p className="text-xs font-bold text-white mt-0.5">Established Operations</p>
                </div>
                
                <div className="absolute bottom-4 right-4 z-20 bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 hover:bg-slate-950/80 transition-colors shadow-lg">
                  <p className="text-[10px] font-extrabold uppercase text-emerald-400 tracking-wider">Reliability SLA</p>
                  <p className="text-xs font-bold text-white mt-0.5">99.9% Uptime Target</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. CORE THREE CARDS
          ========================================== */}
      <section className="py-20 px-6 md:px-12 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: What We Do */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400/50 hover:shadow-lg transition-all text-left group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">What We Do</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Technology can be complicated, but we simplify it for you so you can focus completely on growing your business operations.
              </p>
            </motion.div>

            {/* Card 2: Who We Help */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400/50 hover:shadow-lg transition-all text-left group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center mb-6">
                <PieChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Who We Help?</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Our professional IT support frees your business to focus on key areas, improve worker productivity, and scale seamlessly.
              </p>
            </motion.div>

            {/* Card 3: Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400/50 hover:shadow-lg transition-all text-left group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center mb-6">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Why Choose Us</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                We have a genuine passion to help you scale your business and will partner with your team every step of the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. HISTORY TIMELINE SECTION (Dark theme)
          ========================================== */}
      <section className="py-24 px-6 md:px-12 bg-[#06142D] text-white border-t border-slate-800 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[5%] h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[100px]" />
          <div className="absolute bottom-[20%] right-[5%] h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[100px]" />
        </div>

        <div className="max-w-[1000px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 block">Our Journey</span>
            <h2 className="text-3xl font-medium text-white">Our History</h2>
            <div className="h-1 w-20 bg-cyan-500 mt-4 mx-auto rounded-full"></div>
          </div>

          {/* Timeline Node Chain */}
          <div className="relative border-l-2 border-slate-700/60 ml-4 md:ml-32 space-y-12">
            {timeline.map((node, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Bullet Node */}
                <div className="absolute left-[-9px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#06142D] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-sm z-20"></div>
                
                {/* Year Label for Desktop */}
                <div className="absolute hidden md:block left-[-150px] top-1 text-right w-[110px] font-black text-slate-400 group-hover:text-cyan-400 transition-colors text-lg">
                  {node.year}
                </div>

                {/* Timeline Card */}
                <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm hover:border-slate-700 transition-colors">
                  {/* Year Tag for Mobile */}
                  <span className="inline-block md:hidden text-xs font-bold text-cyan-400 mb-2 uppercase tracking-wider">
                    {node.year}
                  </span>
                  <h4 className="text-base md:text-lg font-bold text-white mb-2">{node.title}</h4>
                  <p className="text-xs md:text-sm text-slate-350 leading-relaxed font-medium">
                    {node.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ==========================================
            5. OUTREACH BY THE NUMBERS (Inside Dark section)
            ========================================== */}
        <div className="max-w-[1280px] mx-auto mt-32 border-t border-slate-800 pt-20">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 block">Performance Indices</span>
            <h2 className="text-3xl font-medium text-white">Outreach by the Numbers</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-xl border border-slate-800 bg-slate-900/80 text-center flex flex-col items-center shadow-md hover:border-slate-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-poppins">{stat.value}</div>
                  <p className="text-[10px] md:text-xs text-slate-400 font-semibold uppercase tracking-wider mt-3 leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          6. WHAT'S GOING ON (Articles/Insights)
          ========================================== */}
      <section className="py-24 px-6 md:px-12 bg-white relative">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-3 block">Corporate News</span>
            <h2 className="text-3xl font-medium text-slate-900 font-poppins">What&apos;s going on at DigiNet Solutions?</h2>
            <div className="h-1 w-20 bg-cyan-500 mt-4 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {articles.map((art, idx) => {
              const IconComponent = art.icon;
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
                        {art.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {art.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                      {art.desc}
                    </p>
                  </div>

                  <div className="flex items-center border-t border-slate-200/60 pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg ${art.bg} ${art.color}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-slate-700">{art.author}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          7. CTA BANNER
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
    </div>
  );
}
