"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Plus, Minus,
  Server, Database, Headphones, Search, ShieldCheck, Cpu, HardDrive,
  Zap, Users, Award, Shield, Phone, Mail, Activity, Eye, Lock, Globe,
  MessageSquare, TrendingUp, Sparkles, Star, ChevronLeft, ChevronRight,
  Target, AlertTriangle, ClipboardList, AppWindow, Pencil, Rocket,
  Network, Share2, Layers, RefreshCw, Cloud
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/context/BookingContext";

// Testimonials Data for IT Services
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
    text: "Diginet migrated our entire on-premise infrastructure to AWS with zero downtime. Their 24/7 managed support desk has maintained a 100% uptime SLA for over two years.",
    name: "Rajesh Nair",
    role: "Director of IT",
    company: "Capital Finance Asia",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 1,
    text: "The disaster recovery audit Diginet completed saved us during a major local network outage. Our databases failed over seamlessly in under 4 minutes. Highly recommended partner.",
    name: "Sarah Lim",
    role: "Operations Head",
    company: "MedTech Logistics",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 2,
    text: "Their Wi-Fi and network engineering team overhauled our multi-floor corporate headquarters. The network coverage is flawless, and user connectivity issues dropped to zero.",
    name: "Arjun Mehta",
    role: "VP of Operations",
    company: "Global Trade Corp",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80"
  }
];

// FAQ Data for IT Services
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What guarantees do you provide under your SLA?",
    answer: "We offer customized SLA agreements with uptime guarantees up to 99.99% for critical infrastructure. Our response times for high-priority incidents are under 15 minutes, with dedicated engineers monitoring system telemetry 24/7/365."
  },
  {
    question: "How do you manage security during a cloud migration?",
    answer: "Our migrations follow a strict Zero-Trust approach. We enforce SSL/TLS encryption for all data-in-transit, configure isolated staging environments, run pre-migration risk assessments, and establish IAM roles with least-privilege policies to block unauthorized access."
  },
  {
    question: "Do you support hybrid cloud environments?",
    answer: "Yes. We design, deploy, and manage hybrid setups bridging local physical hardware with cloud vendors like AWS, Azure, and Google Cloud. We use secure VPN tunnels or dedicated fiber pipes to sync databases and run workloads seamlessly."
  },
  {
    question: "What is your backup and disaster recovery validation process?",
    answer: "We configure automated, encrypted backups stored across multiple physical locations (local and cloud). To guarantee reliability, we run simulated recovery drills monthly, verifying checksums and target failover boot times."
  },
  {
    question: "Can we source hardware and software licenses through DIGINET?",
    answer: "Yes. As a registered partner with major technology vendors (Microsoft, Cisco, AWS, Dell), we procure enterprise hardware, negotiate volume software licenses, and manage vendor service contracts directly on your behalf."
  }
];

export default function ITServicesPage() {
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
        @keyframes itMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .it-marquee-track {
          display: flex;
          width: max-content;
          animation: itMarquee 25s linear infinite;
        }
        .it-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes pulseLed {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .led-pulse {
          animation: pulseLed 1.5s infinite;
        }
        .led-pulse-fast {
          animation: pulseLed 0.8s infinite;
        }
      `}} />

      {/* ========================================================
          1. HERO SECTION (Dark background)
          ======================================================== */}
      <section className="relative w-full bg-[#06142D] pt-[120px] sm:pt-[130px] md:pt-[140px] pb-10 md:pb-12 overflow-hidden">
        
        {/* Background ambient grids/effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] h-[550px] w-[550px] rounded-full bg-blue-500/10 blur-[130px]" />
          <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-600/5 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.08]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 flex flex-col text-left items-start">
              
              <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-2 block">
                Managed IT Solutions
              </span>

              <h1 className="text-3xl sm:text-[42px] lg:text-[46px] xl:text-[50px] font-black tracking-tight text-white leading-[1.08] mb-3 font-poppins">
                Enterprise IT Services. <br />
                Engineered for <span className="text-[#00F0FF] font-black">Reliability.</span>
              </h1>

              <p className="text-[15px] md:text-[16px] text-slate-400 leading-relaxed mb-5 max-w-[480px]">
                Ensure peak performance, cloud flexibility, and bulletproof disaster recovery. We architect, monitor, and support your systems under SLA-backed corporate standards.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
                <button
                  onClick={openBooking}
                  className="cursor-pointer inline-flex items-center justify-center px-7 py-3 rounded-xl text-sm font-semibold text-white bg-cta-blue hover:bg-hover-blue transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-cta-blue/20"
                >
                  Book IT Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-xl text-sm font-semibold text-slate-300 border border-slate-700 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-all duration-300"
                >
                  View Capabilities
                </a>
              </div>

            </div>

            {/* Right Hero Graphic: High-fidelity Server Rack SVG cabinet */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center py-2 w-full select-none">
              <motion.div 
                className="relative w-full max-w-[500px] h-[400px] sm:h-[440px] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Ambient glowing background under cabinet */}
                <div className="absolute w-[240px] h-[340px] bg-cyan-500/10 blur-[80px] rounded-full z-0" />
                
                {/* SVG Server Cabinet Rack */}
                <svg viewBox="0 0 400 480" className="w-[340px] sm:w-[380px] h-auto z-10 drop-shadow-2xl overflow-visible">
                  <defs>
                    <linearGradient id="cabBody" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="50%" stopColor="#0f172a" />
                      <stop offset="100%" stopColor="#020617" />
                    </linearGradient>
                    <linearGradient id="bladeGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="20%" stopColor="#334155" />
                      <stop offset="50%" stopColor="#0f172a" />
                      <stop offset="80%" stopColor="#334155" />
                      <stop offset="100%" stopColor="#1e293b" />
                    </linearGradient>
                    <linearGradient id="neonCyan" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00f0ff" />
                      <stop offset="100%" stopColor="#0072ff" />
                    </linearGradient>
                  </defs>

                  {/* Outer Cabinet Border & Frame */}
                  <rect x="50" y="30" width="300" height="420" rx="16" fill="url(#cabBody)" stroke="#475569" strokeWidth="3.5" />
                  <rect x="55" y="35" width="290" height="410" rx="12" fill="none" stroke="#1e293b" strokeWidth="2" />
                  
                  {/* Top Exhaust Vent grid */}
                  <line x1="120" y1="50" x2="280" y2="50" stroke="#334155" strokeWidth="3" strokeDasharray="6,4" />
                  <line x1="120" y1="56" x2="280" y2="56" stroke="#334155" strokeWidth="3" strokeDasharray="6,4" />
                  
                  {/* ── SERVER BLADE 1: Gateway Router (Top) ── */}
                  <g transform="translate(68, 75)">
                    {/* Blade Faceplate */}
                    <rect x="0" y="0" width="264" height="42" rx="6" fill="url(#bladeGrad)" stroke="#64748b" strokeWidth="1" />
                    {/* Ports */}
                    <rect x="15" y="14" width="16" height="12" rx="2" fill="#090f1d" stroke="#475569" />
                    <rect x="36" y="14" width="16" height="12" rx="2" fill="#090f1d" stroke="#475569" />
                    <rect x="57" y="14" width="16" height="12" rx="2" fill="#090f1d" stroke="#475569" />
                    <rect x="78" y="14" width="16" height="12" rx="2" fill="#090f1d" stroke="#475569" />
                    {/* Patch cables drawing (flowing data line) */}
                    <path d="M23,26 C23,45 44,45 44,26" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" className="led-pulse" />
                    
                    {/* LED Lights */}
                    <circle cx="150" cy="21" r="3" fill="#10b981" className="led-pulse" />
                    <circle cx="162" cy="21" r="3" fill="#10b981" />
                    <circle cx="174" cy="21" r="3" fill="#3b82f6" className="led-pulse-fast" />
                    <circle cx="186" cy="21" r="3" fill="#ef4444" />
                    <circle cx="198" cy="21" r="3" fill="#10b981" />
                    {/* Logo/Model text */}
                    <text x="215" y="25" fill="#94a3b8" fontSize="6" fontWeight="bold" fontFamily="monospace">GW-8500</text>
                  </g>

                  {/* ── SERVER BLADE 2: Core Network Switch ── */}
                  <g transform="translate(68, 130)">
                    <rect x="0" y="0" width="264" height="42" rx="6" fill="url(#bladeGrad)" stroke="#64748b" strokeWidth="1" />
                    {/* Massive Port Density */}
                    {Array.from({ length: 12 }).map((_, idx) => (
                      <rect key={idx} x={15 + idx * 14} y={15} width="8" height="10" rx="1" fill="#090f1d" stroke="#334155" />
                    ))}
                    {/* Link Status LEDs above ports */}
                    {Array.from({ length: 12 }).map((_, idx) => (
                      <circle key={idx} cx={19 + idx * 14} cy={10} r="1.5" fill={idx % 3 === 0 ? "#10b981" : idx % 5 === 0 ? "#f59e0b" : "#3b82f6"} className={idx % 2 === 0 ? "led-pulse" : ""} />
                    ))}
                    <text x="215" y="25" fill="#94a3b8" fontSize="6" fontWeight="bold" fontFamily="monospace">SW-X96</text>
                  </g>

                  {/* ── SERVER BLADE 3: Compute Blade A (CPU Heavy) ── */}
                  <g transform="translate(68, 185)">
                    <rect x="0" y="0" width="264" height="65" rx="6" fill="url(#bladeGrad)" stroke="#64748b" strokeWidth="1" />
                    {/* Vent slits */}
                    {Array.from({ length: 14 }).map((_, idx) => (
                      <line key={idx} x1={15 + idx * 6} y1="15" x2={15 + idx * 6} y2="50" stroke="#1e293b" strokeWidth="2" />
                    ))}
                    {/* CPU Status Plate */}
                    <rect x="110" y="15" width="85" height="36" rx="4" fill="#090f1d" stroke="#475569" />
                    <text x="116" y="27" fill="#22d3ee" fontSize="7" fontWeight="bold" fontFamily="monospace">CPU LOAD</text>
                    
                    {/* Load bars */}
                    <rect x="116" y="34" width="10" height="10" fill="#10b981" />
                    <rect x="128" y="34" width="10" height="10" fill="#10b981" />
                    <rect x="140" y="34" width="10" height="10" fill="#10b981" />
                    <rect x="152" y="34" width="10" height="10" fill="#f59e0b" className="led-pulse" />
                    <rect x="164" y="34" width="10" height="10" fill="#1e293b" />
                    <rect x="176" y="34" width="10" height="10" fill="#1e293b" />
                    
                    {/* Hot Swap Drives */}
                    <rect x="205" y="15" width="22" height="36" rx="2" fill="#334155" stroke="#475569" />
                    <rect x="231" y="15" width="22" height="36" rx="2" fill="#334155" stroke="#475569" />
                    <circle cx="216" cy="45" r="2" fill="#10b981" className="led-pulse" />
                    <circle cx="242" cy="45" r="2" fill="#10b981" />
                  </g>

                  {/* ── SERVER BLADE 4: Compute Blade B (Database) ── */}
                  <g transform="translate(68, 262)">
                    <rect x="0" y="0" width="264" height="65" rx="6" fill="url(#bladeGrad)" stroke="#64748b" strokeWidth="1" />
                    
                    {/* Hard Drive bays */}
                    {Array.from({ length: 6 }).map((_, idx) => (
                      <g key={idx} transform={`translate(${15 + idx * 28}, 15)`}>
                        <rect x="0" y="0" width="22" height="36" rx="2" fill="#0f172a" stroke="#475569" />
                        <line x1="3" y1="6" x2="19" y2="6" stroke="#334155" strokeWidth="1" />
                        <circle cx="7" cy="30" r="1.5" fill="#10b981" className="led-pulse" />
                        <circle cx="15" cy="30" r="1.5" fill="#3b82f6" />
                      </g>
                    ))}
                    
                    {/* Database status screen */}
                    <rect x="188" y="15" width="62" height="36" rx="4" fill="#090f1d" stroke="#475569" />
                    <text x="194" y="27" fill="#a78bfa" fontSize="6" fontWeight="bold" fontFamily="monospace">DB CLUSTER</text>
                    <text x="194" y="38" fill="#10b981" fontSize="8" fontWeight="bold" fontFamily="monospace" className="led-pulse">ACTIVE</text>
                  </g>

                  {/* ── SERVER BLADE 5: Backup Storage Array ── */}
                  <g transform="translate(68, 339)">
                    <rect x="0" y="0" width="264" height="85" rx="6" fill="url(#bladeGrad)" stroke="#64748b" strokeWidth="1" />
                    
                    {/* Massive Hard Drive Trays */}
                    {Array.from({ length: 4 }).map((_, row) => (
                      <g key={row} transform={`translate(15, ${10 + row * 17})`}>
                        {Array.from({ length: 8 }).map((_, col) => (
                          <rect key={col} x={col * 24} y="0" width="20" height="12" rx="1.5" fill="#090f1d" stroke="#475569" />
                        ))}
                        {/* Status Light bar */}
                        <line x1="195" y1="6" x2="240" y2="6" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,3" />
                      </g>
                    ))}
                    
                    {/* Master Power Status */}
                    <circle cx="250" cy="72" r="3.5" fill="#10b981" className="led-pulse" />
                  </g>
                </svg>

                {/* Floating badge for SLA */}
                <motion.div 
                  className="absolute bottom-[24px] left-[-2%] z-20 w-36 h-auto py-2.5 rounded-2xl bg-[#0c1a3a]/95 border border-slate-700/50 p-2.5 backdrop-blur-md text-left shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                  <span className="text-[9px] text-slate-400 font-bold block uppercase tracking-wider">SLA Commitment</span>
                  <span className="text-sm font-black text-[#00F0FF] block mt-0.5">99.99% Uptime</span>
                </motion.div>

                {/* Floating badge for Incident response */}
                <motion.div 
                  className="absolute top-[8%] right-[-2%] z-20 w-36 h-auto py-2.5 rounded-2xl bg-[#0c1a3a]/95 border border-slate-700/50 p-2.5 backdrop-blur-md text-left shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                >
                  <span className="text-[9px] text-slate-400 font-bold block uppercase tracking-wider">Response Window</span>
                  <span className="text-sm font-black text-cyan-400 block mt-0.5">&lt; 15 Mins</span>
                </motion.div>

              </motion.div>
            </div>

          </div>

          {/* Underneath breadcrumbs/metrics: stats list */}
          <div className="mt-5 pt-5 border-t border-slate-800/40 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 max-w-[1100px] w-full">
            {[
              { title: "99.99% Uptime Guarantee", desc: "SLA contracts with active redundancy.", icon: <Zap className="h-4.5 w-4.5 text-cyan-400 stroke-[2.5px]" /> },
              { title: "ITIL Service Alignment", desc: "Enterprise operations standards.", icon: <Award className="h-4.5 w-4.5 text-cyan-400 stroke-[2.5px]" /> },
              { title: "24/7/365 Desk Patrols", desc: "Live engineer operations desks.", icon: <Headphones className="h-4.5 w-4.5 text-cyan-400 stroke-[2.5px]" /> },
              { title: "Zero-Trust Engineering", desc: "Strict corporate environment isolating.", icon: <ShieldCheck className="h-4.5 w-4.5 text-cyan-400 stroke-[2.5px]" /> }
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
              Powering global IT architecture
            </span>
          </div>

          <div className="relative overflow-hidden flex-1 py-1">
            <div className="it-marquee-track">
              
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
              CORE SERVICES
            </span>
            <h2 className="text-2xl md:text-[32px] font-medium text-slate-900 tracking-tight leading-tight font-poppins">
              IT Services Designed for Enterprise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                icon: <Server className="h-7 w-7 text-cyan-600" />,
                title: "Managed Infrastructure",
                desc: "Complete administration of physical/cloud environments, patch schedules, server configurations, and performance diagnostics."
              },
              {
                icon: <Cloud className="h-7 w-7 text-cyan-600" />,
                title: "Cloud & Hybrid Migrations",
                desc: "Zero-downtime workloads migration to major clouds (AWS/Azure/GCP) using microservice and VM containerization architectures."
              },
              {
                icon: <Headphones className="h-7 w-7 text-cyan-600" />,
                title: "24/7/365 Service Desk Support",
                desc: "Immediate ticketing support desks aligning with ITIL standards to resolve corporate user and hardware problems proactively."
              },
              {
                icon: <Network className="h-7 w-7 text-cyan-600" />,
                title: "Network & Wi-Fi Engineering",
                desc: "Overhauling multi-floor corporate office networks with active security protocols, VPN bridges, and enterprise firewall routing."
              },
              {
                icon: <Database className="h-7 w-7 text-cyan-600" />,
                title: "Backups & Disaster Recovery",
                desc: "Automated incremental backups stored across distinct geographic nodes, verified monthly via simulation failover boot recovery audits."
              },
              {
                icon: <ShieldCheck className="h-7 w-7 text-cyan-600" />,
                title: "IT Procurement & Licensing",
                desc: "Negotiating hardware purchasing, managing volume licensing configurations, and tracking vendor SLAs for client teams."
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
          4. HOW DIGINET BUILDS PLATFORMS (Orbital Node Layout - Dark Band)
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
                  INTEGRATED IT MANAGEMENT
                </span>
                <h2 className="text-2xl md:text-[32px] font-medium text-white tracking-tight leading-none font-poppins mb-4">
                  SLA-Driven IT Operations
                </h2>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-6 max-w-[340px]">
                  We centralize resource configuration, active threat checks, and support ticketing under a single system operations framework.
                </p>
                <button
                  onClick={openBooking}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#0072FF] hover:bg-[#005ecf] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-blue-500/20"
                >
                  Request Infrastructure Audit
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

                  {/* Glowing Dots along path points */}
                  <div className="absolute left-[287px] top-[82px] w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_3px_rgba(34,211,238,0.6)] animate-pulse" />
                  <div className="absolute left-[387px] top-[232px] w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_3px_rgba(34,211,238,0.6)] animate-pulse" />
                  <div className="absolute left-[282px] top-[157px] w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_3px_rgba(129,140,248,0.5)] animate-pulse" />
                  <div className="absolute left-[392px] top-[157px] w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_3px_rgba(34,211,238,0.5)] animate-pulse" />

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

                  {/* Top-Left: Infrastructure Audit */}
                  <motion.div 
                    className="absolute top-[38px] left-[0px] w-[267px] h-[54px] flex items-center justify-end gap-4 text-right select-none"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col text-right justify-center">
                      <h4 className="text-[13px] font-extrabold text-white leading-tight font-poppins">Infrastructure Audit</h4>
                      <p className="text-[13px] text-slate-400 mt-1 leading-normal max-w-[200px] font-normal">Thorough inventory, performance logging, and bandwidth tracking.</p>
                    </div>
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#0a1835] border border-slate-700/40 flex items-center justify-center shrink-0 shadow-md">
                      <Search className="w-[26px] h-[26px] text-white" />
                    </div>
                  </motion.div>

                  {/* Bottom-Left: Cloud & Hybrid Deployments */}
                  <motion.div 
                    className="absolute bottom-[38px] left-[0px] w-[267px] h-[54px] flex items-center justify-end gap-4 text-right select-none"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col text-right justify-center">
                      <h4 className="text-[13px] font-extrabold text-white leading-tight font-poppins">Cloud & Hybrid Deployments</h4>
                      <p className="text-[13px] text-slate-400 mt-1 leading-normal max-w-[200px] font-normal">Orchestrating AWS, Azure, GCP clusters and legacy integrations.</p>
                    </div>
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#0a1835] border border-slate-700/40 flex items-center justify-center shrink-0 shadow-md">
                      <Layers className="w-[26px] h-[26px] text-white" />
                    </div>
                  </motion.div>

                  {/* Top-Right: Proactive Uptime Monitoring */}
                  <motion.div 
                    className="absolute top-[38px] right-[0px] w-[267px] h-[54px] flex items-center justify-start gap-4 text-left select-none"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#0a1835] border border-slate-700/40 flex items-center justify-center shrink-0 shadow-md">
                      <Activity className="w-[26px] h-[26px] text-white" />
                    </div>
                    <div className="flex flex-col text-left justify-center">
                      <h4 className="text-[13px] font-extrabold text-white leading-tight font-poppins">Proactive Uptime Monitoring</h4>
                      <p className="text-[13px] text-slate-400 mt-1 leading-normal max-w-[200px] font-normal">Real-time health telemetry to isolate anomalies before they impact operations.</p>
                    </div>
                  </motion.div>

                  {/* Bottom-Right: 24/7 SLA Support Desk */}
                  <motion.div 
                    className="absolute bottom-[38px] right-[0px] w-[267px] h-[54px] flex items-center justify-start gap-4 text-left select-none"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#0a1835] border border-slate-700/40 flex items-center justify-center shrink-0 shadow-md">
                      <Headphones className="w-[26px] h-[26px] text-white" />
                    </div>
                    <div className="flex flex-col text-left justify-center">
                      <h4 className="text-[13px] font-extrabold text-white leading-tight font-poppins">24/7 SLA Support Desk</h4>
                      <p className="text-[13px] text-slate-400 mt-1 leading-normal max-w-[200px] font-normal">ITIL-aligned engineers managing user issues under standard ticket criteria.</p>
                    </div>
                  </motion.div>

                </div>

                {/* Mobile View: Stacked Card List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-8 md:hidden">
                  {[
                    {
                      title: "Infrastructure Audit",
                      desc: "Thorough inventory, performance logging, and bandwidth tracking.",
                      icon: <Search className="w-6 h-6 text-white" />,
                    },
                    {
                      title: "Proactive Uptime Monitoring",
                      desc: "Real-time health telemetry to isolate anomalies before they impact operations.",
                      icon: <Activity className="w-6 h-6 text-white" />,
                    },
                    {
                      title: "Cloud & Hybrid Deployments",
                      desc: "Orchestrating AWS, Azure, GCP clusters and legacy integrations.",
                      icon: <Layers className="w-6 h-6 text-white" />,
                    },
                    {
                      title: "24/7 SLA Support Desk",
                      desc: "ITIL-aligned engineers managing user issues under standard ticket criteria.",
                      icon: <Headphones className="w-6 h-6 text-white" />,
                    }
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
              IT INTEGRATION ROADMAP
            </span>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight leading-tight font-poppins">
              Four Steps to IT Optimization
            </h2>
          </div>

          {/* Timeline */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative w-full">
            {[
              {
                title: "1. Audit & Inventory",
                desc: "We scan networks, map client software licenses, and locate speed bottlenecks.",
                icon: <Search className="h-7 w-7 text-[#0072FF]" />
              },
              {
                title: "2. Redundancy Design",
                desc: "We draft cloud blueprints, configure dual-ISP networks, and define backup schemes.",
                icon: <Layers className="h-7 w-7 text-[#0072FF]" />
              },
              {
                title: "3. Deployment Cut-over",
                desc: "We deploy isolated VM containers and sync live databases with zero outage risk.",
                icon: <Server className="h-7 w-7 text-[#0072FF]" />
              },
              {
                title: "4. Managed SLA Ops",
                desc: "We activate telemetry trackers, run backup audits, and deploy help desks.",
                icon: <ShieldCheck className="h-7 w-7 text-[#0072FF]" />
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
          6. INDUSTRIES SERVED SECTION (Icons & text cards)
          ======================================================== */}
      <section className="relative w-full py-12 md:py-16 bg-slate-50/40 border-t border-slate-100">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-10 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0072FF] mb-2.5">
              INDUSTRIES WE SUPPORT
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { icon: <Database className="h-8 w-8 text-[#0072FF]" />, title: "Financial Systems", desc: "SLA-critical transactional databases and PCI compliance setups." },
              { icon: <Shield className="h-8 w-8 text-[#0072FF]" />, title: "Healthcare Facilities", desc: "HIPAA-secure local arrays and encrypted patient directories." },
              { icon: <Network className="h-8 w-8 text-[#0072FF]" />, title: "E-Commerce", desc: "Auto-scaling web clusters that support high checkout spikes." },
              { icon: <Users className="h-8 w-8 text-[#0072FF]" />, title: "Corporate Offices", desc: "Unified Wi-Fi, active directory setups, and domain networks." },
              { icon: <Layers className="h-8 w-8 text-[#0072FF]" />, title: "Logistics Hubs", desc: "24/7 network bridges tracking hardware trackers and scanners." },
              { icon: <Server className="h-8 w-8 text-[#0072FF]" />, title: "Manufacturing", desc: "Fail-safe hardware configurations and isolated controller arrays." }
            ].map((ind, idx) => (
              <div key={idx} className="bg-white border border-slate-200/50 p-6 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.01)] flex flex-col items-center text-center hover:shadow-lg hover:border-slate-200 hover:scale-[1.03] transition-all duration-300">
                <div className="h-14 w-14 rounded-xl bg-blue-50/50 flex items-center justify-center mb-4 shrink-0">
                  {ind.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 font-poppins mb-2 leading-tight">{ind.title}</h3>
                <p className="hidden md:block text-xs text-slate-500 leading-relaxed font-normal">{ind.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          7. WHY CHOOSE DIGINET SECTION
          ======================================================== */}
      <section className="relative w-full py-12 md:py-16 bg-white border-t border-slate-100">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-10 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0072FF] mb-2.5">
              WHY PARTNER WITH DIGINET
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                icon: <Award className="h-6 w-6 text-[#0072FF]" />,
                title: "Certified Engineers",
                desc: "AWS, Cisco, and Microsoft Certified system engineers."
              },
              {
                icon: <Zap className="h-6 w-6 text-[#0072FF]" />,
                title: "99.99% SLA Uptime",
                desc: "Formal contracts guaranteeing high reliability paths."
              },
              {
                icon: <Activity className="h-6 w-6 text-[#0072FF]" />,
                title: "Proactive Auditing",
                desc: "Monitoring system anomalies before they trigger outages."
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-[#0072FF]" />,
                title: "ISO Alignments",
                desc: "Operating under standard ITIL and security checklist guides."
              },
              {
                icon: <Headphones className="h-6 w-6 text-[#0072FF]" />,
                title: "Dedicated Dispatch",
                desc: "Direct engineer response lines for critical infrastructure."
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
          8. TESTIMONIALS SECTION (WHAT OUR CLIENTS SAY)
          ======================================================== */}
      <section className="relative w-full py-8 md:py-12 bg-[#fafafb]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-8 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0072FF] mb-2">
              CLIENT SUCCESS STORIES
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

          {/* Pagination dots */}
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
          9. FEATURED WORK SECTION (Case Studies)
          ======================================================== */}
      <section className="relative w-full py-8 md:py-12 bg-[#fafafb]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-8 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0072FF] mb-2">
              FEATURED IT OPERATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Hybrid Cloud Migration",
                desc: "Migrating enterprise transactional services to AWS with parallel redundant database replication.",
                metric: "100%",
                label: "Zero-Downtime Migration Uptime",
                mockup: (
                  <div className="relative border-[4px] border-slate-900 rounded-[14px] h-[155px] w-[210px] bg-slate-950 shadow-lg overflow-hidden shrink-0 flex flex-col justify-center items-center p-3 select-none">
                    <div className="absolute inset-0 bg-[#061124] opacity-80" />
                    <div className="relative z-10 flex flex-col items-center gap-2 w-full text-center">
                      <span className="text-[8px] font-extrabold text-cyan-400">DATABASE FAILOVER</span>
                      <div className="flex items-center justify-between w-full border border-slate-800 rounded bg-[#0c1a35] p-1.5 text-left">
                        <div>
                          <span className="text-[6px] text-slate-400 block">Status</span>
                          <span className="text-[7px] text-white font-bold block">100% Synced</span>
                        </div>
                        <RefreshCw className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
                      </div>
                      <div className="flex justify-between w-full text-[6px] text-slate-500 px-1">
                        <span>Latency: 4ms</span>
                        <span>Failover: Standby</span>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                title: "Enterprise Wi-Fi Overhaul",
                desc: "Deploying high-density corporate access points with automated security routing and SSL isolation.",
                metric: "-85%",
                label: "Reduction in user connection tickets",
                mockup: (
                  <div className="relative border-[4px] border-slate-900 rounded-[14px] h-[155px] w-[210px] bg-slate-950 shadow-lg overflow-hidden shrink-0 flex flex-col justify-center items-center p-3 select-none">
                    <div className="absolute inset-0 bg-[#061124] opacity-80" />
                    <div className="relative z-10 flex flex-col items-center gap-2 w-full text-center">
                      <span className="text-[8px] font-extrabold text-cyan-400">WIFI TELEMETRY</span>
                      <div className="grid grid-cols-2 gap-1.5 w-full">
                        <div className="border border-slate-800 rounded bg-[#0c1a35] p-1 text-left">
                          <span className="text-[5px] text-slate-450 block">Connected</span>
                          <span className="text-[8px] text-white font-black block">428 Nodes</span>
                        </div>
                        <div className="border border-slate-800 rounded bg-[#0c1a35] p-1 text-left">
                          <span className="text-[5px] text-slate-450 block">Signal Loss</span>
                          <span className="text-[8px] text-emerald-400 font-black block">0.02% (Optimal)</span>
                        </div>
                      </div>
                      <div className="w-full h-4 bg-slate-800/40 rounded flex items-center px-1 text-[5px] text-slate-450 font-bold border border-slate-800">
                        AP-Floor3: Uptime 182 days
                      </div>
                    </div>
                  </div>
                )
              },
              {
                title: "DR Backup System",
                desc: "Constructing active redundancy models syncing local data centers with off-site cloud vaults.",
                metric: "3.5m",
                label: "Average disaster failover recovery time",
                mockup: (
                  <div className="relative border-[4px] border-slate-900 rounded-[14px] h-[155px] w-[210px] bg-slate-950 shadow-lg overflow-hidden shrink-0 flex flex-col justify-center items-center p-3 select-none">
                    <div className="absolute inset-0 bg-[#061124] opacity-80" />
                    <div className="relative z-10 flex flex-col items-center gap-2 w-full text-center">
                      <span className="text-[8px] font-extrabold text-cyan-400">BACKUP AUDIT</span>
                      <div className="flex items-center gap-2 border border-slate-800 rounded bg-[#0c1a35] p-1.5 text-left w-full">
                        <HardDrive className="w-4 h-4 text-cyan-400" />
                        <div>
                          <span className="text-[6px] text-slate-400 block">Checksum validation</span>
                          <span className="text-[7px] text-emerald-400 font-bold block">100% Passed</span>
                        </div>
                      </div>
                      <span className="text-[5px] text-slate-500">Last Recovery Test: 12 Hours Ago</span>
                    </div>
                  </div>
                )
              }
            ].map((work, idx) => (
              <div key={idx} className="bg-white border border-slate-200/50 p-6 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-row items-center gap-6 text-left hover:shadow-md transition-all duration-300">
                {work.mockup}
                <div className="flex flex-col justify-center">
                  <h3 className="text-sm font-extrabold text-slate-900 font-poppins mb-1.5 leading-tight">
                    {work.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal mb-3 max-w-[180px]">
                    {work.desc}
                  </p>
                  <span className="text-2xl font-black text-[#0072FF] leading-none mb-1">
                    {work.metric}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold leading-tight max-w-[140px]">
                    {work.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          10. FAQ SECTION (FREQUENTLY ASKED QUESTIONS)
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
          11. CTA BANNER SECTION
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
              <div className="absolute right-[5%] top-[10%] w-[200px] h-[200px] rounded-full bg-cyan-400/20 blur-[50px]" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 flex flex-col items-start text-left max-w-[500px]">
              <h3 className="text-lg md:text-xl font-bold text-white font-poppins mb-1 leading-tight tracking-tight">
                Optimize Your Corporate IT Ecosystem
              </h3>
              <p className="text-xs md:text-sm text-blue-100/80 mb-3.5 font-normal max-w-[420px] leading-relaxed">
                Connect with our system operations desk to secure your network environments and cloud systems under strict SLA guarantees.
              </p>
              <button
                onClick={openBooking}
                className="cursor-pointer inline-flex items-center justify-center px-5 py-2 rounded-lg text-[10px] md:text-xs font-bold text-[#002D8C] bg-white hover:bg-slate-50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md flex items-center gap-1.5"
              >
                Inquire Managed IT
                <ArrowRight className="h-3 w-3 text-[#002D8C]" />
              </button>
            </div>

            {/* Right side: Angled Server Rack Badge */}
            <div className="relative w-full md:w-[220px] h-[150px] flex items-center justify-center shrink-0 z-20">
              <div className="absolute inset-[-40px] pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-cyan-400/15 rounded-[50%] -rotate-[15deg]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border border-dashed border-cyan-500/10 rounded-[50%] rotate-[20deg]" />
              </div>

              <div className="absolute top-[10%] right-[10%] w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_2px_rgba(34,211,238,0.6)] animate-pulse" />
              <div className="absolute bottom-[20%] left-[5%] w-1 h-1 rounded-full bg-cyan-355 shadow-[0_0_5px_2px_rgba(6,182,212,0.4)] animate-pulse" />

              {/* Angled Server Drawer Container */}
              <motion.div 
                className="w-[170px] h-[110px] bg-slate-950 border-[3.5px] border-slate-900 rounded-[12px] shadow-2xl overflow-hidden flex flex-col p-1.5 items-center justify-center z-10"
                style={{
                  transform: "rotate(-12deg) skewX(2deg)",
                  boxShadow: "0 15px 35px -5px rgba(0, 0, 0, 0.4), 0 0 25px rgba(6, 182, 212, 0.15)"
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Visual mini server cabinet blade elements */}
                <div className="w-full flex flex-col gap-1 z-10">
                  <div className="h-4 bg-slate-900 rounded border border-slate-800 flex items-center justify-between px-1.5">
                    <span className="text-[5px] text-cyan-400 font-extrabold uppercase font-mono">GW-MAIN</span>
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="h-4 bg-slate-900 rounded border border-slate-800 flex items-center justify-between px-1.5">
                    <span className="text-[5px] text-cyan-455 font-extrabold uppercase font-mono">SW-CORE</span>
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  </div>
                  <div className="h-4 bg-slate-900 rounded border border-slate-800 flex items-center justify-between px-1.5">
                    <span className="text-[5px] text-cyan-450 font-extrabold uppercase font-mono">DB-REPLICA</span>
                    <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                  </div>
                  <div className="h-4 bg-slate-900 rounded border border-slate-800 flex items-center justify-between px-1.5">
                    <span className="text-[5px] text-cyan-450 font-extrabold uppercase font-mono">BK-VAULT</span>
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
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
