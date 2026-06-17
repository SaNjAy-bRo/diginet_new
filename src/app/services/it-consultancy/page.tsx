"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Plus, Minus,
  Briefcase, Target, Shield, HelpCircle, Layers, Activity, Cpu, HardDrive,
  Zap, Users, Award, Phone, Mail, Eye, Lock, Globe,
  MessageSquare, TrendingUp, Sparkles, Star, ChevronLeft, ChevronRight,
  ClipboardList, AppWindow, Pencil, Rocket, Search, Network, Share2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/context/BookingContext";

// Testimonials Data for IT Consultancy
interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 0,
    text: "DIGINET functioned as our virtual CTO for 12 months, designing a microservices architecture that cut our hosting bills by 40% and improved development speed threefold.",
    name: "Vikram Malhotra",
    role: "CEO & Founder",
    company: "Rentals Online",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 1,
    text: "Their compliance audit helped us secure our SOC 2 Type II certification ahead of schedule. The roadmaps and policy frameworks they delivered were structured and clear.",
    name: "Meera Sen",
    role: "Chief Compliance Officer",
    company: "CarePay Inc.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 2,
    text: "We engaged DIGINET to perform a comprehensive technology audit on our legacy warehouse software. Their architectural recommendations saved us from a costly rebuild.",
    name: "John Tan",
    role: "VP of Engineering",
    company: "Lighthouse Logix",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  }
];

// FAQ Data for IT Consultancy
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is a virtual CTO (vCTO) engagement model?",
    answer: "A virtual CTO provides high-level strategic technology guidance without the overhead of a full-time executive. We join your steering meetings, audit your development teams, define technology roadmaps, review budgets, and align IT decisions with business outcomes."
  },
  {
    question: "What deliverables do we receive from a Solution Architecture design?",
    answer: "You receive organized system architecture diagrams (sequence drawings, database ERDs, network topologies), containerization layouts, detailed technology evaluations, API contracts, deployment flowcharts, and estimated cloud hosting bills."
  },
  {
    question: "How do you audit our existing technology spending?",
    answer: "We perform a thorough audit of your SaaS licenses, cloud resources (AWS/Azure bills), hardware leases, and vendor support contracts. By locating inactive assets, over-provisioned VMs, and duplicate tooling, we routinely reduce IT spend by 20% to 40%."
  },
  {
    question: "Can you help us achieve regulatory compliance (SOC 2, GDPR, HIPAA)?",
    answer: "Yes. We run initial gap assessments, design secure storage and access workflows, draft compliance manuals, and oversee technical implementations (such as log centralization and encryption-at-rest) required to pass third-party audits."
  },
  {
    question: "How do you evaluate and select the right technology stack?",
    answer: "We analyze your specific functional scope, developer capabilities, expected user load, hosting budget, and safety requirements. Our evaluations are entirely vendor-neutral to guarantee the selected stack serves your long-term roadmap."
  }
];

export default function ITConsultancyPage() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-scroll testimonials slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <main className="w-full bg-white overflow-hidden min-h-screen">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes consultMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .consult-marquee-track {
          display: flex;
          width: max-content;
          animation: consultMarquee 25s linear infinite;
        }
        .consult-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes flowLine {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-flow-line {
          stroke-dasharray: 8,4;
          animation: flowLine 1.5s linear infinite;
        }
      `}} />

      {/* ========================================================
          1. HERO SECTION (Dark background)
          ======================================================== */}
      <section className="relative w-full bg-[#06142D] pt-[120px] sm:pt-[130px] md:pt-[140px] pb-10 md:pb-12 overflow-hidden">
        
        {/* Background ambient grids/effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] h-[550px] w-[550px] rounded-full bg-indigo-500/10 blur-[130px]" />
          <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-650/5 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.08]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 flex flex-col text-left items-start">
              
              <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-2 block">
                Technology Advisory & Design
              </span>

              <h1 className="text-3xl sm:text-[42px] lg:text-[46px] xl:text-[50px] font-black tracking-tight text-white leading-[1.08] mb-3 font-poppins">
                Strategic IT Consulting. <br />
                Built for <span className="text-[#00F0FF] font-black">Scale.</span>
              </h1>

              <p className="text-[15px] md:text-[16px] text-slate-400 leading-relaxed mb-5 max-w-[480px]">
                Align your systems architecture, security standards, and IT spending directly with business outcomes. We design scalable blueprints and strategic technology roadmaps.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
                <button
                  onClick={openBooking}
                  className="cursor-pointer inline-flex items-center justify-center px-7 py-3 rounded-xl text-sm font-semibold text-white bg-cta-blue hover:bg-hover-blue transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-cta-blue/20"
                >
                  Book Strategic Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-xl text-sm font-semibold text-slate-300 border border-slate-700 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-all duration-300"
                >
                  Explore Advisory
                </a>
              </div>

            </div>

            {/* Right Hero Graphic: Solution Architecture Roadmap Board SVG */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center py-2 w-full select-none">
              <motion.div 
                className="relative w-full max-w-[500px] h-[400px] sm:h-[440px] flex items-center justify-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                {/* Glowing ambient background under board */}
                <div className="absolute w-[260px] h-[260px] bg-purple-500/10 blur-[90px] rounded-full z-0" />

                {/* SVG Solution Architecture Roadmap Board */}
                <svg viewBox="0 0 420 360" className="w-[340px] sm:w-[380px] h-auto z-10 drop-shadow-2xl overflow-visible">
                  <defs>
                    <linearGradient id="boardBg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                    <linearGradient id="glowPurple" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#a78bfa" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="glowCyan" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>

                  {/* Outer Board Frame */}
                  <rect x="10" y="10" width="400" height="340" rx="20" fill="url(#boardBg)" stroke="#475569" strokeWidth="2.5" />
                  
                  {/* Grid background on board */}
                  <path d="M 10 60 L 410 60 M 10 110 L 410 110 M 10 160 L 410 160 M 10 210 L 410 210 M 10 260 L 410 260 M 10 310 L 410 310" stroke="#334155" strokeWidth="0.5" strokeDasharray="3,3" />
                  <path d="M 70 10 L 70 350 M 130 10 L 130 350 M 190 10 L 190 350 M 250 10 L 250 350 M 310 10 L 310 350 M 370 10 L 370 350" stroke="#334155" strokeWidth="0.5" strokeDasharray="3,3" />

                  {/* Board Title Header */}
                  <text x="30" y="40" fill="#e2e8f0" fontSize="10" fontWeight="extrabold" fontFamily="monospace" letterSpacing="1">ARCHITECTURE ROADMAP</text>
                  <circle cx="380" cy="36" r="4" fill="#10b981" />
                  <text x="345" y="39" fill="#94a3b8" fontSize="8" fontWeight="bold" fontFamily="monospace">LIVE STATE</text>

                  {/* Node 1: Legacy Monolith (Left) */}
                  <g transform="translate(30, 140)">
                    <rect x="0" y="0" width="90" height="50" rx="8" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
                    <text x="10" y="22" fill="#ef4444" fontSize="8" fontWeight="extrabold" fontFamily="sans-serif">LEGACY APP</text>
                    <text x="10" y="38" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">Monolithic DB</text>
                    <circle cx="80" cy="12" r="2.5" fill="#ef4444" />
                  </g>

                  {/* Flowing Path 1: Legacy to Gateway */}
                  <path d="M 120 165 L 160 165" fill="none" stroke="#64748b" strokeWidth="1.5" />
                  <path d="M 120 165 L 160 165" fill="none" stroke="#ef4444" strokeWidth="1.5" className="animate-flow-line" />

                  {/* Node 2: API Gateway (Center) */}
                  <g transform="translate(160, 130)">
                    <rect x="0" y="0" width="100" height="70" rx="8" fill="#0f172a" stroke="url(#glowCyan)" strokeWidth="1.8" />
                    <text x="10" y="22" fill="#22d3ee" fontSize="8" fontWeight="extrabold" fontFamily="sans-serif">API GATEWAY</text>
                    <text x="10" y="38" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">Rate Limiter</text>
                    <text x="10" y="52" fill="#10b981" fontSize="7" fontWeight="bold" fontFamily="monospace">GDPR OK</text>
                    <circle cx="90" cy="15" r="3" fill="#10b981" className="animate-pulse" />
                  </g>

                  {/* Flowing Path 2a: Gateway to Microservice User */}
                  <path d="M 260 155 Q 290 155, 290 100 L 300 100" fill="none" stroke="#64748b" strokeWidth="1.5" />
                  <path d="M 260 155 Q 290 155, 290 100 L 300 100" fill="none" stroke="#22d3ee" strokeWidth="1.5" className="animate-flow-line" />

                  {/* Flowing Path 2b: Gateway to Microservice Billing */}
                  <path d="M 260 165 L 300 165" fill="none" stroke="#64748b" strokeWidth="1.5" />
                  <path d="M 260 165 L 300 165" fill="none" stroke="#a78bfa" strokeWidth="1.5" className="animate-flow-line" />

                  {/* Flowing Path 2c: Gateway to Microservice Search */}
                  <path d="M 260 175 Q 290 175, 290 230 L 300 230" fill="none" stroke="#64748b" strokeWidth="1.5" />
                  <path d="M 260 175 Q 290 175, 290 230 L 300 230" fill="none" stroke="#22d3ee" strokeWidth="1.5" className="animate-flow-line" />

                  {/* Node 3a: User Microservice */}
                  <g transform="translate(300, 75)">
                    <rect x="0" y="0" width="90" height="42" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1" />
                    <text x="8" y="18" fill="#e2e8f0" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Auth & Users</text>
                    <text x="8" y="30" fill="#10b981" fontSize="7" fontFamily="monospace">99.9% Up</text>
                  </g>

                  {/* Node 3b: Billing Microservice */}
                  <g transform="translate(300, 144)">
                    <rect x="0" y="0" width="90" height="42" rx="6" fill="#1e293b" stroke="url(#glowPurple)" strokeWidth="1.5" />
                    <text x="8" y="18" fill="#a78bfa" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Stripe Core</text>
                    <text x="8" y="30" fill="#10b981" fontSize="7" fontFamily="monospace">Active</text>
                  </g>

                  {/* Node 3c: Search Microservice */}
                  <g transform="translate(300, 210)">
                    <rect x="0" y="0" width="90" height="42" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1" />
                    <text x="8" y="18" fill="#e2e8f0" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Search Index</text>
                    <text x="8" y="30" fill="#94a3b8" fontSize="7" fontFamily="monospace">Elasticsearch</text>
                  </g>

                  {/* Flowing Path 3: Services to DB Cluster */}
                  <path d="M 345 117 Q 345 130, 240 280 L 210 280" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
                  <path d="M 345 186 Q 345 200, 240 280 L 210 280" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
                  <path d="M 345 252 Q 345 260, 240 280 L 210 280" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />

                  {/* Node 4: Database Cluster (Bottom Center) */}
                  <g transform="translate(110, 255)">
                    <rect x="0" y="0" width="100" height="50" rx="8" fill="#1e293b" stroke="url(#glowCyan)" strokeWidth="1.5" />
                    <text x="26" y="22" fill="#22d3ee" fontSize="8" fontWeight="bold" fontFamily="sans-serif">POSTGRES</text>
                    <text x="26" y="36" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">Active-Active Sync</text>
                    
                    {/* Tiny Database Cylinders icon */}
                    <path d="M10,18 C10,16 20,16 20,18 L20,25 C20,27 10,27 10,25 Z" fill="none" stroke="#22d3ee" strokeWidth="1" />
                    <path d="M10,18 C10,20 20,20 20,18" fill="none" stroke="#22d3ee" strokeWidth="1" />
                    <path d="M10,22 C10,24 20,24 20,22" fill="none" stroke="#22d3ee" strokeWidth="1" />
                  </g>
                </svg>

                {/* Floating badge for CTO Strategy */}
                <motion.div 
                  className="absolute bottom-[24px] right-[-2%] z-20 w-36 h-auto py-2.5 rounded-2xl bg-[#0c1a3a]/95 border border-slate-700/50 p-2.5 backdrop-blur-md text-left shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                  <span className="text-[9px] text-slate-400 font-bold block uppercase tracking-wider">Spend Audit</span>
                  <span className="text-sm font-black text-[#00F0FF] block mt-0.5">-30% Average</span>
                </motion.div>

                {/* Floating badge for Compliance */}
                <motion.div 
                  className="absolute top-[8%] left-[-2%] z-20 w-36 h-auto py-2.5 rounded-2xl bg-[#0c1a3a]/95 border border-slate-700/50 p-2.5 backdrop-blur-md text-left shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                >
                  <span className="text-[9px] text-slate-400 font-bold block uppercase tracking-wider">Framework audit</span>
                  <span className="text-sm font-black text-cyan-400 block mt-0.5">SOC2 / GDPR</span>
                </motion.div>

              </motion.div>
            </div>

          </div>

          {/* Underneath breadcrumbs/metrics: stats list */}
          <div className="mt-5 pt-5 border-t border-slate-800/40 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 max-w-[1100px] w-full">
            {[
              { title: "Strategic CTO Advisory", desc: "Aligning software choice with budgets.", icon: <Target className="h-4.5 w-4.5 text-cyan-400 stroke-[2.5px]" /> },
              { title: "Vendor-Neutral Blueprints", desc: "Designing architectures built for scale.", icon: <Award className="h-4.5 w-4.5 text-cyan-400 stroke-[2.5px]" /> },
              { title: "IT Spending Audit", desc: "Locating duplicate tooling and overheads.", icon: <TrendingUp className="h-4.5 w-4.5 text-cyan-400 stroke-[2.5px]" /> },
              { title: "Compliance Safeguards", desc: "SOC 2, HIPAA, and GDPR compliance audits.", icon: <Shield className="h-4.5 w-4.5 text-cyan-400 stroke-[2.5px]" /> }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3.5 items-start">
                <div className="h-9.5 w-9.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col leading-tight pt-0.5 text-left">
                  <span className="text-xs md:text-sm font-bold text-white tracking-wide">{item.title}</span>
                  <span className="text-[11px] md:text-xs text-slate-400 mt-1.5 leading-normal">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          2. LOGOS MARQUEE TICKER (Light Background)
          ======================================================== */}
      <section className="relative w-full py-7 bg-slate-50/70 border-y border-slate-100 overflow-hidden">
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 relative">
          
          <div className="shrink-0 text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400 select-none">
              Trusted corporate strategic partners
            </span>
          </div>

          <div className="relative overflow-hidden flex-1 py-1">
            <div className="consult-marquee-track">
              
              {/* Set 1 */}
              <div className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16 shrink-0">
                {[
                  { name: "APEX", sub: "LOGISTICS" },
                  { name: "METACRAFT", sub: "FINANCIAL" },
                  { name: "VITALHEALTH", sub: "CLINICS" },
                  { name: "STEELSYNC", sub: "MANUFACTURING" },
                  { name: "NEXUS", sub: "ENTERPRISES" }
                ].map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-400 font-poppins font-extrabold text-sm md:text-base tracking-tight hover:text-slate-800 transition-colors select-none cursor-default">
                    <span className="h-2 w-2 rounded-full bg-cyan-500/40" />
                    <div className="flex flex-col leading-none">
                      <span className="font-extrabold">{b.name}</span>
                      <span className="text-[6px] font-semibold text-slate-400 tracking-wider uppercase">{b.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Set 2 */}
              <div className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16 shrink-0">
                {[
                  { name: "APEX", sub: "LOGISTICS" },
                  { name: "METACRAFT", sub: "FINANCIAL" },
                  { name: "VITALHEALTH", sub: "CLINICS" },
                  { name: "STEELSYNC", sub: "MANUFACTURING" },
                  { name: "NEXUS", sub: "ENTERPRISES" }
                ].map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-400 font-poppins font-extrabold text-sm md:text-base tracking-tight hover:text-slate-800 transition-colors select-none cursor-default">
                    <span className="h-2 w-2 rounded-full bg-cyan-500/40" />
                    <div className="flex flex-col leading-none">
                      <span className="font-extrabold">{b.name}</span>
                      <span className="text-[6px] font-semibold text-slate-400 tracking-wider uppercase">{b.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          3. CORE SERVICES SECTION (Capabilities Grid)
          ======================================================== */}
      <section id="capabilities" className="relative w-full py-14 md:py-18 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-10 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-500 mb-2.5">
              ADVISORY FIELDS
            </span>
            <h2 className="text-2xl md:text-[32px] font-medium text-slate-900 tracking-tight leading-tight font-poppins">
              Strategic IT Advisory Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                icon: <TrendingUp className="h-7 w-7 text-cyan-600" />,
                title: "Digital Transformation Strategy",
                desc: "Replacing monolithic setups with flexible architectures, designing detailed microservice system dependencies, and upgrading databases."
              },
              {
                icon: <Layers className="h-7 w-7 text-cyan-600" />,
                title: "Solution Architecture Design",
                desc: "Delivering structural blueprints (sequence maps, container specs, database ERDs, API schemas) designed directly in Figma/Mermaid."
              },
              {
                icon: <Globe className="h-7 w-7 text-cyan-600" />,
                title: "Cloud Migration Strategy",
                desc: "Developing AWS, GCP, or Azure migration schedules, detailing network failover paths, and computing expected hosting overheads."
              },
              {
                icon: <ClipboardList className="h-7 w-7 text-cyan-600" />,
                title: "IT Budget & Spending Audits",
                desc: "Evaluating corporate SaaS software licenses, cloud instances, and developer overheads to isolate duplicate tools and reduce IT bills."
              },
              {
                icon: <Shield className="h-7 w-7 text-cyan-600" />,
                title: "Compliance & Security Audits",
                desc: "Mapping operations structures to pass standard compliance audits (SOC 2, GDPR, HIPAA) with strict access logging protocols."
              },
              {
                icon: <Target className="h-7 w-7 text-cyan-600" />,
                title: "DR Failure Planning",
                desc: "Designing failover network topologies, active database syncs, and backup recovery protocols to protect corporate metadata."
              }
            ].map((srv, idx) => (
              <div 
                key={idx} 
                className="group bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 flex items-center gap-4 hover:shadow-lg hover:shadow-cyan-500/[0.04] hover:border-cyan-200/60 hover:translate-y-[-2px] transition-all duration-300 cursor-pointer"
                onClick={openBooking}
              >
                {/* Icon */}
                <div className="h-[52px] w-[52px] rounded-xl bg-cyan-50/80 border border-cyan-100/60 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-cyan-100/60 group-hover:scale-105">
                  {srv.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0 text-left">
                  <h3 className="text-sm md:text-[15px] font-bold text-slate-900 font-poppins mb-1 leading-tight">
                    {srv.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal line-clamp-2">
                    {srv.desc}
                  </p>
                </div>

                {/* Chevron Arrow */}
                <div className="shrink-0 h-8 w-8 rounded-full bg-slate-100/80 border border-slate-200/60 flex items-center justify-center text-slate-400 group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-white transition-all duration-300">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          4. ADVISORY CONNECTION (Orbital Node Layout - Dark Band)
          ======================================================== */}
      <section className="relative w-full py-14 md:py-18 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="relative w-full py-10 md:py-12 px-8 md:px-12 bg-[#030d22] rounded-[32px] overflow-hidden shadow-2xl border border-slate-950/40">
            
            {/* Background ambient spots */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute top-[-30%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/8 blur-[130px]" />
              <div className="absolute bottom-[-30%] left-[-10%] h-[450px] w-[450px] rounded-full bg-blue-600/5 blur-[110px]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left side info block */}
              <div className="lg:col-span-4 flex flex-col items-start text-left">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0072FF] mb-3">
                  INTEGRATED STEERING DESK
                </span>
                <h2 className="text-2xl md:text-[32px] font-medium text-white tracking-tight leading-none font-poppins mb-4">
                  Virtually Directed Advisory
                </h2>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-6 max-w-[340px]">
                  We coordinate technology auditing, stack selection, and regulatory frameworks under a business-first methodology.
                </p>
                <button
                  onClick={openBooking}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#0072FF] hover:bg-[#005ecf] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-blue-500/20"
                >
                  Connect Strategic Advisor
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </button>
              </div>

              {/* Right side: Orbital Composition */}
              <div className="lg:col-span-8 relative flex items-center justify-center select-none">
                
                {/* Desktop View: Symmetrical Orbital Diagram */}
                <div className="relative w-full max-w-[680px] h-[320px] hidden md:block scale-[0.8] min-[840px]:scale-[0.9] lg:scale-100 origin-center transition-transform duration-300">
                  
                  {/* Connector Lines and Orbit Rings */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-[1]" viewBox="0 0 680 320">
                    <defs>
                      <linearGradient id="lineGradIT" x1="0" y1="0" x2="680" y2="320" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#6366f1" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>

                    {/* Orbit circles */}
                    <circle cx="340" cy="160" r="55" stroke="rgba(6, 182, 212, 0.18)" strokeWidth="1.5" strokeDasharray="3,3" fill="none" />
                    <circle cx="340" cy="160" r="100" stroke="rgba(99, 102, 241, 0.08)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />

                    {/* Left curves */}
                    <path d="M 240 65 C 290 65, 310 100, 315 130" stroke="url(#lineGradIT)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
                    <path d="M 240 255 C 290 255, 310 220, 315 190" stroke="url(#lineGradIT)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
                    
                    {/* Right curves */}
                    <path d="M 440 65 C 390 65, 370 100, 365 130" stroke="url(#lineGradIT)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
                    <path d="M 440 255 C 390 255, 370 220, 365 190" stroke="url(#lineGradIT)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
                  </svg>

                  {/* Central Logo Card */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 rounded-[22px] bg-gradient-to-br from-[#0c1b3a] to-[#040c1e] border border-slate-700/50 shadow-[0_0_25px_5px_rgba(6,182,212,0.15)] flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-[50px] h-[50px]" fill="none">
                      <defs>
                        <linearGradient id="orangeGradIT" x1="32" y1="28" x2="53" y2="72" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FF8C00" />
                          <stop offset="100%" stopColor="#FF3300" />
                        </linearGradient>
                        <linearGradient id="blueGradIT" x1="68" y1="28" x2="47" y2="72" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#00F0FF" />
                          <stop offset="100%" stopColor="#0072FF" />
                        </linearGradient>
                      </defs>
                      <path d="M 68 28 L 47 50 L 68 72" stroke="url(#blueGradIT)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 32 28 L 53 50 L 32 72" stroke="url(#orangeGradIT)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="absolute inset-2 rounded-full bg-cyan-500/10 blur-xl -z-10" />
                  </div>

                  {/* Top-Left: Digital Audit */}
                  <motion.div 
                    className="absolute top-[38px] left-[0px] w-[267px] h-[54px] flex items-center justify-end gap-4 text-right select-none"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col text-right justify-center">
                      <h4 className="text-[13px] font-extrabold text-white leading-tight font-poppins">System Auditing</h4>
                      <p className="text-[13px] text-slate-400 mt-1 leading-normal max-w-[200px] font-normal">Mapping legacy databases, code dependencies, and performance gaps.</p>
                    </div>
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#0a1835] border border-slate-700/40 flex items-center justify-center shrink-0 shadow-md">
                      <Search className="w-[26px] h-[26px] text-white" />
                    </div>
                  </motion.div>

                  {/* Bottom-Left: Custom Architecture */}
                  <motion.div 
                    className="absolute bottom-[38px] left-[0px] w-[267px] h-[54px] flex items-center justify-end gap-4 text-right select-none"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col text-right justify-center">
                      <h4 className="text-[13px] font-extrabold text-white leading-tight font-poppins">Custom Architecture</h4>
                      <p className="text-[13px] text-slate-400 mt-1 leading-normal max-w-[200px] font-normal">Designing microservice topologies and database failover maps.</p>
                    </div>
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#0a1835] border border-slate-700/40 flex items-center justify-center shrink-0 shadow-md">
                      <Layers className="w-[26px] h-[26px] text-white" />
                    </div>
                  </motion.div>

                  {/* Top-Right: Budget Audit */}
                  <motion.div 
                    className="absolute top-[38px] right-[0px] w-[267px] h-[54px] flex items-center justify-start gap-4 text-left select-none"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#0a1835] border border-slate-700/40 flex items-center justify-center shrink-0 shadow-md">
                      <TrendingUp className="w-[26px] h-[26px] text-white" />
                    </div>
                    <div className="flex flex-col text-left justify-center">
                      <h4 className="text-[13px] font-extrabold text-white leading-tight font-poppins">Budget Audit</h4>
                      <p className="text-[13px] text-slate-400 mt-1 leading-normal max-w-[200px] font-normal">Isolating over-provisioned servers and duplicate software licenses.</p>
                    </div>
                  </motion.div>

                  {/* Bottom-Right: Compliance Mapping */}
                  <motion.div 
                    className="absolute bottom-[38px] right-[0px] w-[267px] h-[54px] flex items-center justify-start gap-4 text-left select-none"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#0a1835] border border-slate-700/40 flex items-center justify-center shrink-0 shadow-md">
                      <Shield className="w-[26px] h-[26px] text-white" />
                    </div>
                    <div className="flex flex-col text-left justify-center">
                      <h4 className="text-[13px] font-extrabold text-white leading-tight font-poppins">Compliance Mapping</h4>
                      <p className="text-[13px] text-slate-400 mt-1 leading-normal max-w-[200px] font-normal">Drafting security access controls to secure SOC 2 and GDPR clearance.</p>
                    </div>
                  </motion.div>

                </div>

                {/* Mobile View: Stacked Card List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-8 md:hidden">
                  {[
                    { title: "System Auditing", desc: "Mapping legacy databases, code dependencies, and performance gaps.", icon: <Search className="w-6 h-6 text-white" /> },
                    { title: "Budget Audit", desc: "Isolating over-provisioned servers and duplicate software licenses.", icon: <TrendingUp className="w-6 h-6 text-white" /> },
                    { title: "Custom Architecture", desc: "Designing microservice topologies and database failover maps.", icon: <Layers className="w-6 h-6 text-white" /> },
                    { title: "Compliance Mapping", desc: "Drafting security access controls to secure SOC 2 and GDPR clearance.", icon: <Shield className="w-6 h-6 text-white" /> }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 items-start hover:bg-white/[0.04] transition-all duration-300 text-left">
                      <div className="w-12 h-12 rounded-xl bg-[#0a1835] border border-slate-700/50 flex items-center justify-center shrink-0 shadow-md">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-poppins">{item.title}</h4>
                        <p className="text-sm text-slate-400 mt-1.5 leading-relaxed font-poppins font-normal">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          5. OUR PROCESS TIMELINE SECTION (Light Background)
          ======================================================== */}
      <section id="process" className="relative w-full py-10 md:py-14 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-10 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0072FF] mb-2.5">
              ADVISORY CYCLE
            </span>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight leading-tight font-poppins">
              Our 4-Step Strategic Process
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative w-full">
            {[
              {
                title: "1. Discover & Map",
                desc: "We analyze developer capacity, map databases, and interview stakeholders.",
                icon: <Search className="h-7 w-7 text-[#0072FF]" />
              },
              {
                title: "2. Analyze & Audit",
                desc: "We scan SaaS dependencies, isolate security risks, and review hosting bills.",
                icon: <ClipboardList className="h-7 w-7 text-[#0072FF]" />
              },
              {
                title: "3. Design Blueprint",
                desc: "We deliver target sequence diagrams, stack choices, and migration roadmaps.",
                icon: <Pencil className="h-7 w-7 text-[#0072FF]" />
              },
              {
                title: "4. Govern & Support",
                desc: "We provide virtual CTO steering to audit execution quality and enforce standards.",
                icon: <Target className="h-7 w-7 text-[#0072FF]" />
              }
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-row items-center gap-4 text-left group">
                  <div className="h-20 w-20 rounded-full border border-slate-200/80 shadow-md shadow-slate-100/50 flex items-center justify-center bg-white shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:border-[#0072FF]/40 relative">
                    {step.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-extrabold text-slate-900 font-poppins mb-1 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-[170px] font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {idx < 3 && (
                  <div className="hidden md:flex items-center text-slate-300 shrink-0 mx-2 self-center">
                    <svg className="w-12 h-4" fill="none" viewBox="0 0 48 16">
                      <path d="M 0 8 L 42 8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4,4" />
                      <path d="M 37 4 L 43 8 L 37 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. WHY CHOOSE DIGINET SECTION
          ======================================================== */}
      <section className="relative w-full py-12 md:py-16 bg-white border-t border-slate-100">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-10 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0072FF] mb-2.5">
              WHY ENGAGE DIGINET CONSULTING
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                icon: <Users className="h-6 w-6 text-[#0072FF]" />,
                title: "Virtual CTO Desk",
                desc: "Experienced steering directors managing architectural choices."
              },
              {
                icon: <Globe className="h-6 w-6 text-[#0072FF]" />,
                title: "Vendor-Neutral",
                desc: "We select frameworks solely to optimize speed and cost."
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-[#0072FF]" />,
                title: "Cost Reductions",
                desc: "Identifying resource wastage to lower recurring hosting overheads."
              },
              {
                icon: <Shield className="h-6 w-6 text-[#0072FF]" />,
                title: "Risk Mitigation",
                desc: "Detailed DRfailover plans shielding data from network disruptions."
              },
              {
                icon: <Award className="h-6 w-6 text-[#0072FF]" />,
                title: "Proven Delivery",
                desc: "Architectures guiding successful projects for 150+ organizations."
              }
            ].map((choose, idx) => (
              <div key={idx} className="flex flex-row items-center gap-4 text-left justify-start group">
                <div className="h-16 w-16 rounded-full border border-slate-200/80 shadow-md shadow-slate-100/50 flex items-center justify-center bg-white shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:border-[#0072FF]/40 relative">
                  {choose.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[13px] font-extrabold text-slate-900 font-poppins mb-1 leading-tight">{choose.title}</h3>
                  <p className="text-xs text-slate-500 leading-normal font-normal max-w-[160px]">{choose.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          7. TESTIMONIALS SECTION (WHAT OUR CLIENTS SAY)
          ======================================================== */}
      <section className="relative w-full py-8 md:py-12 bg-[#fafafb]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-8 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0072FF] mb-2">
              EXECUTIVE TESTIMONIALS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testi, idx) => (
              <div key={idx} className="bg-white border border-slate-200/50 p-6 md:p-8 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col gap-6 text-left relative hover:shadow-md transition-all duration-300">
                <span className="text-[72px] font-serif text-[#0072FF] leading-none absolute top-4 left-4 select-none opacity-10">“</span>
                <div className="flex items-start gap-2.5 relative z-10">
                  <p className="text-sm md:text-base text-slate-650 leading-relaxed font-normal font-sans">
                    {testi.text}
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-auto">
                  <img 
                    src={testi.avatarUrl} 
                    alt={testi.name} 
                    className="h-10 w-10 rounded-full object-cover shrink-0 border border-slate-200" 
                  />
                  <div className="flex flex-col">
                    <h4 className="font-extrabold text-slate-900 text-xs md:text-sm font-poppins leading-none mb-1">
                      {testi.name}
                    </h4>
                    <p className="text-[10px] md:text-xs text-slate-400 leading-none">
                      {testi.role}, {testi.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-6">
            {[0, 1, 2].map((dot) => (
              <div 
                key={dot} 
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${dot === activeTestimonial ? "bg-[#0072FF] scale-110" : "bg-slate-300"}`} 
              />
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          8. FAQ SECTION (FREQUENTLY ASKED QUESTIONS)
          ======================================================== */}
      <section className="relative w-full py-8 md:py-12 bg-[#fafafb]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-8 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0072FF] mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              {[faqs[0], faqs[3]].map((faq, index) => {
                const globalIdx = faq === faqs[0] ? 0 : 3;
                const isOpen = openFaq === globalIdx;
                return (
                  <div key={globalIdx} className="bg-white border border-slate-200/50 rounded-[20px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-300">
                    <button
                      onClick={() => toggleFaq(globalIdx)}
                      className="w-full flex items-center justify-between text-left font-extrabold text-xs md:text-sm text-slate-900 font-poppins hover:text-[#0072FF] transition-colors cursor-pointer"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown className={`h-4 w-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#0072FF]" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="pt-3 text-xs md:text-sm text-slate-500 leading-relaxed font-normal border-t border-slate-100 mt-3">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              {[faqs[1], faqs[4]].map((faq, index) => {
                const globalIdx = faq === faqs[1] ? 1 : 4;
                const isOpen = openFaq === globalIdx;
                return (
                  <div key={globalIdx} className="bg-white border border-slate-200/50 rounded-[20px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-300">
                    <button
                      onClick={() => toggleFaq(globalIdx)}
                      className="w-full flex items-center justify-between text-left font-extrabold text-xs md:text-sm text-slate-900 font-poppins hover:text-[#0072FF] transition-colors cursor-pointer"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown className={`h-4 w-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#0072FF]" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="pt-3 text-xs md:text-sm text-slate-500 leading-relaxed font-normal border-t border-slate-100 mt-3">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              {[faqs[2]].map((faq, index) => {
                const globalIdx = 2;
                const isOpen = openFaq === globalIdx;
                return (
                  <div key={globalIdx} className="bg-white border border-slate-200/50 rounded-[20px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-300">
                    <button
                      onClick={() => toggleFaq(globalIdx)}
                      className="w-full flex items-center justify-between text-left font-extrabold text-xs md:text-sm text-slate-900 font-poppins hover:text-[#0072FF] transition-colors cursor-pointer"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown className={`h-4 w-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#0072FF]" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="pt-3 text-xs md:text-sm text-slate-500 leading-relaxed font-normal border-t border-slate-100 mt-3">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          9. CTA BANNER SECTION
          ======================================================== */}
      <section className="relative w-full py-8 md:py-12 bg-[#fafafb]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div 
            className="w-full rounded-[24px] shadow-2xl relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-8 md:py-8 h-auto md:h-[190px] gap-6 md:gap-0"
            style={{ 
              background: "linear-gradient(135deg, #011E62 0%, #003CB0 50%, #011A54 100%)",
              boxShadow: "0 20px 40px -15px rgba(0, 60, 176, 0.3)"
            }}
          >
            {/* Background absolute wrapper to keep graphics inside the rounded card */}
            <div className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none z-0">
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#002c8c_1px,transparent_1px),linear-gradient(to_bottom,#002c8c_1px,transparent_1px)] bg-[size:1.25rem_1.25rem] opacity-35" />
              
              {/* Left radiating waves */}
              <svg className="absolute left-0 bottom-0 h-full w-[350px] opacity-40" viewBox="0 0 350 150" fill="none">
                <path d="M-50,160 Q30,120 70,100 T170,90 T270,40 T350,-20" stroke="#00C0FF" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M-50,140 Q40,100 80,80 T180,70 T280,20 T360,-40" stroke="#0072FF" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M-50,120 Q50,80 90,60 T190,50 T290,0 T370,-60" stroke="#005DDA" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M-50,100 Q60,60 100,40 T200,30 T300,-20 T380,-80" stroke="#002D8C" strokeWidth="1.2" strokeLinecap="round" />
              </svg>

              {/* Right radiating waves */}
              <svg className="absolute right-[100px] top-0 h-full w-[300px] opacity-30" viewBox="0 0 300 150" fill="none">
                <path d="M350,150 C280,140 220,100 170,70 C120,40 60,30 -20,10" stroke="#0072FF" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M350,130 C290,120 230,80 180,50 C130,20 70,10 -10,-10" stroke="#00C0FF" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M350,110 C300,100 240,60 190,30 C140,0 80,-10 0,-30" stroke="#005DDA" strokeWidth="1.2" strokeLinecap="round" />
              </svg>

              {/* Radial glow */}
              <div className="absolute right-[5%] top-[10%] w-[200px] h-[200px] rounded-full bg-[#8b5cf6]/20 blur-[50px]" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 flex flex-col items-start text-left max-w-[500px]">
              <h3 className="text-lg md:text-xl font-bold text-white font-poppins mb-1 leading-tight tracking-tight">
                Align Your Strategic Tech Roadmap
              </h3>
              <p className="text-xs md:text-sm text-blue-100/80 mb-3.5 font-normal max-w-[420px] leading-relaxed">
                Work with our virtual CTO desk to evaluate your system architectures, security compliance, and licensing spending.
              </p>
              <button
                onClick={openBooking}
                className="cursor-pointer inline-flex items-center justify-center px-5 py-2 rounded-lg text-[10px] md:text-xs font-bold text-[#002D8C] bg-white hover:bg-slate-50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md flex items-center gap-1.5"
              >
                Inquire IT Advisory
                <ArrowRight className="h-3 w-3 text-[#002D8C]" />
              </button>
            </div>

            {/* Right side: Angled Board Mockup */}
            <div className="relative w-full md:w-[220px] h-[150px] flex items-center justify-center shrink-0 z-20">
              <div className="absolute inset-[-40px] pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-cyan-400/15 rounded-[50%] -rotate-[15deg]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border border-dashed border-cyan-500/10 rounded-[50%] rotate-[20deg]" />
              </div>

              <div className="absolute top-[10%] right-[10%] w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_2px_rgba(34,211,238,0.6)] animate-pulse" />
              <div className="absolute bottom-[20%] left-[5%] w-1 h-1 rounded-full bg-purple-355 shadow-[0_0_5px_2px_rgba(139,92,246,0.4)] animate-pulse" />

              {/* Angled Board Mockup Container */}
              <motion.div 
                className="w-[170px] h-[110px] bg-slate-950 border-[3.5px] border-slate-900 rounded-[12px] shadow-2xl overflow-hidden flex flex-col p-2 items-center justify-center z-10"
                style={{
                  transform: "rotate(-12deg) skewX(2deg)",
                  boxShadow: "0 15px 35px -5px rgba(0, 0, 0, 0.4), 0 0 25px rgba(139, 92, 246, 0.15)"
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Visual miniature workflow nodes */}
                <div className="w-full flex items-center justify-between z-10 px-1">
                  <div className="bg-[#1e293b] border border-red-500 rounded p-0.5 text-[4px] text-red-500 font-bold">LEGACY</div>
                  <svg className="w-6 h-2" fill="none" viewBox="0 0 24 8">
                    <path d="M0,4 L20,4" stroke="#22d3ee" strokeWidth="0.8" strokeDasharray="2,2" />
                    <path d="M16,1 L21,4 L16,7" stroke="#22d3ee" strokeWidth="0.8" />
                  </svg>
                  <div className="bg-[#1e293b] border border-cyan-500 rounded p-0.5 text-[4px] text-cyan-400 font-bold">GATEWAY</div>
                  <svg className="w-6 h-2" fill="none" viewBox="0 0 24 8">
                    <path d="M0,4 L20,4" stroke="#22d3ee" strokeWidth="0.8" strokeDasharray="2,2" />
                    <path d="M16,1 L21,4 L16,7" stroke="#22d3ee" strokeWidth="0.8" />
                  </svg>
                  <div className="bg-[#1e293b] border border-purple-500 rounded p-0.5 text-[4px] text-purple-400 font-bold">MICRO</div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-[#0a142c] via-[#050a17] to-[#010307] -z-10" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_0.5px,transparent_0.5px),linear-gradient(to_bottom,#1e293b_0.5px,transparent_0.5px)] bg-[size:8px_8px] opacity-15 pointer-events-none" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
