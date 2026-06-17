"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Plus, Minus,
  Smartphone, Monitor, Code, Layers, Server, Database, Headphones, Search, ShieldCheck,
  Zap, Users, Award, Shield, Phone, Mail, Activity, Eye, Lock, Globe,
  MessageSquare, TrendingUp, Sparkles, Star, ChevronLeft, ChevronRight,
  Target, AlertTriangle, ClipboardList, AppWindow, Pencil, Rocket,
  ShoppingCart, Calendar, GraduationCap, Cloud, Building2, Heart
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/context/BookingContext";

// Testimonial Data for Web Development
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
    text: "Diginet engineered our enterprise SaaS platform from scratch. The performance is incredible, and our customer conversion rates grew by 45% post-launch.",
    name: "Vikram Sen",
    role: "CTO",
    company: "Finlytics",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 1,
    text: "Our e-commerce store rebuilt on Next.js loads instantly. Page load speed dropped to 0.6s and checkout conversions rose by 140%. Diginet's technical depth is world-class.",
    name: "Aisha Reddy",
    role: "E-Commerce Director",
    company: "LuxeWear India",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 2,
    text: "Diginet built our medical booking portal ahead of schedule. The site handles hundreds of concurrent bookings seamlessly. Their support team is responsive and highly skilled.",
    name: "Dr. Amit Verma",
    role: "Co-Founder",
    company: "HealthSync Clinics",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
  }
];

// FAQ Data for Web Development
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do you build custom SaaS platforms?",
    answer: "Yes. We engineer complete multi-tenant SaaS applications, including secure user authorization (Clerk/Auth0), subscription billing integrations (Stripe/Razorpay), scalable databases, role-based access control, and user-friendly management dashboards."
  },
  {
    question: "Which technologies do you recommend for web projects?",
    answer: "We primarily utilize React, Next.js, and TypeScript for the frontend to ensure exceptional SEO and speed. For backends, we use Node.js, Express, or Next.js API endpoints, coupled with Prisma ORM and PostgreSQL/MySQL databases. We also deploy headless CMS solutions like Sanity and Strapi."
  },
  {
    question: "How do you guarantee high PageSpeed scores and Core Web Vitals compliance?",
    answer: "We structure optimized Next.js scripts, compile static assets to edge CDNs, enforce WebP/AVIF image formats with auto-scaling boundaries, minimize render-blocking resources, and defer non-critical analytics tracking to ensure 95+ performance scores."
  },
  {
    question: "Can you migrate an existing website to Next.js?",
    answer: "Absolutely. We routinely migrate monolithic sites (WordPress, Drupal, custom legacy codebases) to modern headless Next.js architectures. We map existing URL structures carefully to preserve your SEO rankings and migrate customer database structures seamlessly."
  },
  {
    question: "Do you provide source code ownership and design files?",
    answer: "Yes. Upon project completion, you retain 100% intellectual property ownership of the source code (deployed directly in your Git repository) and receive all organized Figma files, design tokens, and components."
  }
];

export default function WebDevelopmentPage() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-scroll testimonials slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <main className="w-full bg-white overflow-hidden min-h-screen">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes webMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .web-marquee-track {
          display: flex;
          width: max-content;
          animation: webMarquee 25s linear infinite;
        }
        @keyframes verticalMarquee {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-vertical-marquee {
          display: flex;
          flex-direction: column;
          animation: verticalMarquee 32s linear infinite;
        }
        .animate-vertical-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* ========================================================
          1. HERO SECTION (Dark background)
          ======================================================== */}
      <section className="relative w-full bg-[#06142D] pt-[90px] sm:pt-[96px] md:pt-[100px] pb-8 md:pb-10 overflow-hidden">
        
        {/* Background ambient grids/effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[130px]" />
          <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-650/5 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.08]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 flex flex-col text-left items-start">
              
              <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-2 block">
                Web Application Development
              </span>

              <h1 className="text-3xl sm:text-[42px] lg:text-[46px] xl:text-[50px] font-black tracking-tight text-white leading-[1.08] mb-3 font-poppins">
                Web Platforms <br />
                Built for <span className="text-[#00F0FF] font-black">Scale.</span>
              </h1>

              <p className="text-[13px] md:text-[14px] text-slate-400 leading-relaxed mb-5 max-w-[480px]">
                We design and develop custom web applications, SaaS platforms, and enterprise portals that are secure, lightning-fast, and built to drive your organization's digital growth.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
                <button
                  onClick={openBooking}
                  className="cursor-pointer inline-flex items-center justify-center px-7 py-3 rounded-xl text-sm font-semibold text-white bg-cta-blue hover:bg-hover-blue transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-cta-blue/20"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-xl text-sm font-semibold text-slate-300 border border-slate-700 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-all duration-300"
                >
                  Explore Process
                </a>
              </div>

            </div>

            {/* Right Hero Graphic: Browser Mockup Composition */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center py-2 w-full select-none">
              <motion.div 
                className="relative w-full max-w-[560px] h-[400px] sm:h-[440px] md:h-[460px] flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >

                {/* ── Orbital Rings ── */}
                <div className="absolute inset-[-30px] pointer-events-none z-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[82%] border-[1.5px] border-dashed border-cyan-500/20 rounded-[50%] -rotate-[18deg]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[68%] border-[1.5px] border-dashed border-cyan-400/10 rounded-[50%] rotate-[12deg]" />
                </div>

                {/* ── Glowing Dots along orbits ── */}
                <div className="absolute top-[6%] right-[22%] w-2 h-2 rounded-full bg-cyan-450 shadow-[0_0_8px_2px_rgba(6,182,212,0.6)] z-[5]" />
                <div className="absolute bottom-[12%] left-[18%] w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_2px_rgba(6,182,212,0.5)] z-[5]" />
                <div className="absolute top-[38%] left-[3%] w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_2px_rgba(59,130,246,0.5)] z-[5]" />
                <div className="absolute bottom-[28%] right-[5%] w-2 h-2 rounded-full bg-cyan-450 shadow-[0_0_8px_2px_rgba(6,182,212,0.6)] z-[5]" />
                <div className="absolute top-[12%] left-[38%] w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_2px_rgba(34,211,238,0.4)] z-[5]" />
                <div className="absolute bottom-[5%] right-[35%] w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_2px_rgba(147,197,253,0.4)] z-[5]" />
                <div className="absolute top-[55%] right-[1%] w-1 h-1 rounded-full bg-cyan-450 shadow-[0_0_5px_1px_rgba(6,182,212,0.5)] z-[5]" />

                {/* ── Left Background Card: Server Latency / Infrastructure ── */}
                <motion.div 
                  className="absolute left-[0%] sm:left-[2%] top-[14%] w-[165px] sm:w-[180px] h-[190px] sm:h-[210px] rounded-2xl bg-[#0c1a3a]/95 border border-slate-700/40 backdrop-blur-md p-3.5 z-[2] -rotate-[5deg] shadow-xl shadow-black/20"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                >
                  <span className="text-[11px] font-semibold text-slate-350 block mb-2 text-left">Server Latency</span>
                  {/* Performance Area Graph */}
                  <svg viewBox="0 0 140 90" className="w-full h-[90px] sm:h-[110px]">
                    <defs>
                      <linearGradient id="chartFillWeb" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                    <path d="M0,80 Q10,75 25,50 T50,55 T75,35 T100,60 T120,40 T140,25 L140,90 L0,90 Z" fill="url(#chartFillWeb)" />
                    <path d="M0,80 Q10,75 25,50 T50,55 T75,35 T100,60 T120,40 T140,25" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
                    <line x1="0" y1="25" x2="140" y2="25" stroke="#334155" strokeWidth="0.5" strokeDasharray="3,3" />
                    <line x1="0" y1="50" x2="140" y2="50" stroke="#334155" strokeWidth="0.5" strokeDasharray="3,3" />
                    <line x1="0" y1="75" x2="140" y2="75" stroke="#334155" strokeWidth="0.5" strokeDasharray="3,3" />
                  </svg>
                  <div className="flex justify-between items-center mt-1 border-t border-slate-700/30 pt-1.5">
                    <span className="text-[9px] text-slate-400">Response</span>
                    <span className="text-[10px] font-bold text-cyan-400">12ms (Optimal)</span>
                  </div>
                </motion.div>

                {/* ── Right Background Card: Core Web Vitals ── */}
                <motion.div 
                  className="absolute right-[0%] sm:right-[2%] top-[10%] w-[160px] sm:w-[175px] h-[210px] sm:h-[230px] rounded-2xl bg-[#0c1a3a]/95 border border-slate-700/40 backdrop-blur-md p-3.5 z-[2] rotate-[4deg] shadow-xl shadow-black/20"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <span className="text-[11px] font-semibold text-slate-350 block mb-3 text-left">Core Web Vitals</span>
                  {/* Progress Ring */}
                  <div className="flex justify-center mb-2">
                    <div className="relative w-[70px] h-[70px]">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <circle cx="18" cy="18" r="15.5" fill="none" stroke="#1e293b" strokeWidth="3" />
                        <circle cx="18" cy="18" r="15.5" fill="none" stroke="#00f0ff" strokeWidth="3" strokeDasharray="98.5" strokeDashoffset="1.5" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-sm font-black text-white leading-none">99%</span>
                        <span className="text-[6px] text-slate-400 mt-0.5">Performance</span>
                      </div>
                    </div>
                  </div>
                  {/* Lighthouse Info */}
                  <div className="mt-2 border-t border-slate-700/40 pt-2 text-left">
                    <span className="text-[9px] text-slate-400 font-semibold block">LCP Optimization</span>
                    <span className="text-[9px] text-emerald-400 font-semibold mt-1 block">↑ Passed <span className="text-slate-500 font-normal">at 0.8s speed</span></span>
                  </div>
                </motion.div>

                {/* ── Central Browser Mockup ── */}
                <motion.div 
                  className="relative z-10 w-[310px] sm:w-[350px] md:w-[370px] rounded-[18px] border-[4px] border-slate-700/80 bg-slate-950 shadow-2xl shadow-blue-950/40 overflow-hidden flex flex-col"
                  style={{ aspectRatio: "1.58" }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Browser Window Header */}
                  <div className="w-full h-6 bg-slate-900 border-b border-slate-800/80 flex items-center px-3 justify-between shrink-0">
                    {/* Dots */}
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    {/* URL bar */}
                    <div className="bg-slate-950 text-[7px] text-slate-400 px-6 py-0.5 rounded-md font-medium border border-slate-800/60 max-w-[160px] truncate select-none">
                      diginet.sg/dashboard
                    </div>
                    {/* Empty placeholder */}
                    <div className="w-8 h-2" />
                  </div>

                  {/* Browser Screen Content */}
                  <div className="w-full flex-1 flex bg-[#060f1e] overflow-hidden">
                    
                    {/* Sidebar */}
                    <div className="w-[64px] sm:w-[72px] border-r border-slate-800/50 bg-[#040a14] p-2 flex flex-col gap-2 shrink-0 text-left">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-4 h-4 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-[7px] font-black text-white shrink-0">D</div>
                        <span className="text-[6px] text-slate-300 font-extrabold uppercase tracking-wide hidden sm:inline">Portal</span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        {[
                          { name: "Overview", icon: <svg className="w-2.5 h-2.5" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1L1 7h2v7h4V10h2v4h4V7h2L8 1z"/></svg> },
                          { name: "Traffic", icon: <svg className="w-2.5 h-2.5" viewBox="0 0 16 16" fill="currentColor"><path d="M1 14h14v1H1v-1zm1-3h2v3H2V11zm3-2h2v5H5V9zm3-3h2v8H8V6zm3-2h2v10h-2V4z"/></svg> },
                          { name: "Settings", icon: <svg className="w-2.5 h-2.5" viewBox="0 0 16 16" fill="currentColor"><path d="M8 4.75a.75.75 0 100 1.5.75.75 0 000-1.5zm0 5a.75.75 0 100 1.5.75.75 0 000-1.5z"/></svg> }
                        ].map((m, i) => (
                          <div key={i} className={`flex items-center gap-1.5 p-1 rounded-md cursor-pointer ${i === 0 ? "bg-cyan-500/10 text-cyan-400" : "text-slate-500 hover:text-slate-300"}`}>
                            {m.icon}
                            <span className="text-[5px] font-bold hidden sm:inline">{m.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Main Workspace */}
                    <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden text-left">
                      
                      {/* Top Welcome */}
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-[9px] font-extrabold text-white font-poppins block leading-none">Enterprise Metrics</span>
                          <span className="text-[5px] text-slate-500 block mt-0.5">Real-time web application monitoring.</span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700/40 flex items-center justify-center text-[7px] text-slate-300 font-bold">U</div>
                      </div>

                      {/* KPI cards grid */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-[#0c1628] rounded-lg p-2 border border-slate-800/45">
                          <span className="text-[5px] text-slate-400 font-bold uppercase block mb-0.5">Monthly Revenue</span>
                          <span className="text-xs font-black text-white leading-none block">$142,850.00</span>
                          <span className="text-[5px] text-emerald-400 font-bold block mt-1">↑ +12.4% this month</span>
                        </div>
                        <div className="bg-[#0c1628] rounded-lg p-2 border border-slate-800/45">
                          <span className="text-[5px] text-slate-400 font-bold uppercase block mb-0.5">Active Pipelines</span>
                          <span className="text-xs font-black text-white leading-none block">8,540 / Sec</span>
                          <span className="text-[5px] text-cyan-400 font-bold block mt-1">↑ 99.99% Edge Up</span>
                        </div>
                      </div>

                      {/* Activity Chart Area */}
                      <div className="bg-[#0c1628] rounded-lg p-2 border border-slate-800/45 flex-1 flex flex-col justify-between overflow-hidden">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[6px] font-extrabold text-slate-350">Platform Traffic Load</span>
                          <span className="text-[4px] text-cyan-400 font-bold">Live</span>
                        </div>
                        {/* Interactive Graph (Dotted bars) */}
                        <div className="flex-1 flex items-end gap-1 px-1 py-0.5">
                          {[30, 45, 65, 50, 75, 90, 80, 55, 70, 85, 95, 60, 40].map((h, i) => (
                            <div key={i} className="flex-1 bg-slate-800 rounded-sm relative" style={{ height: "85%" }}>
                              <div className="absolute bottom-0 left-0 right-0 rounded-sm bg-gradient-to-t from-cyan-600 to-blue-400" style={{ height: `${h}%` }} />
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>
                </motion.div>

                {/* ── Floating Platform Badges ── */}
                
                {/* Next.js Badge - Top Left */}
                <motion.div 
                  className="absolute top-[4%] left-[14%] z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-black/20"
                  animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.3 14.8l-7.7-10.8v10.8H6.2V6.2h1.6l7.7 10.8v-10.8h1.4v10.6z"/>
                  </svg>
                </motion.div>

                {/* React/TS Badge - Right */}
                <motion.div 
                  className="absolute top-[32%] right-[1%] sm:right-[3%] z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#61DAFB]/10 border border-[#61DAFB]/20 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-cyan-950/20"
                  animate={{ y: [0, -4, 0], x: [0, -2, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                >
                  <svg className="w-5 h-5 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 8.7C8.4 8.7 5.5 9.7 5.5 11C5.5 12.3 8.4 13.3 12 13.3C15.6 13.3 18.5 12.3 18.5 11C18.5 9.7 15.6 8.7 12 8.7ZM12 12.3C11.3 12.3 10.7 11.7 10.7 11C10.7 10.3 11.3 9.7 12 9.7C12.7 9.7 13.3 10.3 13.3 11C13.3 11.7 12.7 12.3 12 12.3Z"/>
                    <ellipse cx="12" cy="11" rx="9" ry="3.5" transform="rotate(30 12 11)" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <ellipse cx="12" cy="11" rx="9" ry="3.5" transform="rotate(90 12 11)" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <ellipse cx="12" cy="11" rx="9" ry="3.5" transform="rotate(150 12 11)" stroke="currentColor" strokeWidth="1" fill="none"/>
                  </svg>
                </motion.div>

                {/* Database Badge - Bottom Center-Left */}
                <motion.div 
                  className="absolute bottom-[8%] left-[28%] z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-cyan-900/20"
                  animate={{ y: [0, -4, 0], x: [0, -2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Database className="w-5 h-5 text-cyan-400" />
                </motion.div>

              </motion.div>
            </div>

          </div>

          {/* Underneath breadcrumbs/metrics: stats list */}
          <div className="mt-5 pt-5 border-t border-slate-800/40 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 max-w-[1100px] w-full">
            {[
              { title: "99/100 PageSpeed", desc: "Enforcing modern Core Web Vitals.", icon: <Zap className="h-4.5 w-4.5 text-cyan-400 stroke-[2.5px]" /> },
              { title: "10+ Years of Excellence", desc: "Corporate-grade full-stack expertise.", icon: <Award className="h-4.5 w-4.5 text-cyan-400 stroke-[2.5px]" /> },
              { title: "24/7/365 Support", desc: "Constant uptime monitoring & SLA backups.", icon: <Headphones className="h-4.5 w-4.5 text-cyan-400 stroke-[2.5px]" /> },
              { title: "98% Client Retention", desc: "Building scalable enterprise partnerships.", icon: <ShieldCheck className="h-4.5 w-4.5 text-cyan-400 stroke-[2.5px]" /> }
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
              Trusted by innovative brands
            </span>
          </div>

          <div className="relative overflow-hidden flex-1 py-1">
            <div className="web-marquee-track">
              
              {/* Set 1 */}
              <div className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16 shrink-0">
                {[
                  { name: "vertex", sub: "SOLUTIONS" },
                  { name: "LUMINA", sub: "HEALTH" },
                  { name: "BrightPath", sub: "LABS" },
                  { name: "CloudNest", sub: "TECHNOLOGIES" },
                  { name: "PIVOT", sub: "COMMERCE" }
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
                  { name: "vertex", sub: "SOLUTIONS" },
                  { name: "LUMINA", sub: "HEALTH" },
                  { name: "BrightPath", sub: "LABS" },
                  { name: "CloudNest", sub: "TECHNOLOGIES" },
                  { name: "PIVOT", sub: "COMMERCE" }
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
          3. CORE SERVICES SECTION (Light Background)
          ======================================================== */}
      <section className="relative w-full py-14 md:py-18 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-10 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-500 mb-2.5">
              CORE SERVICES
            </span>
            <h2 className="text-2xl md:text-[32px] font-medium text-slate-900 tracking-tight leading-tight font-poppins">
              End-to-end Web Application Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                icon: <Cloud className="h-7 w-7 text-cyan-600" />,
                title: "SaaS Platform Development",
                desc: "Secure multi-tenant SaaS applications built with Next.js, Auth0, and integrated Stripe subscriptions."
              },
              {
                icon: <Monitor className="h-7 w-7 text-cyan-600" />,
                title: "Custom Web Applications",
                desc: "Robust full-stack platforms engineered with Node.js and React to automate critical business workflows."
              },
              {
                icon: <ShoppingCart className="h-7 w-7 text-cyan-600" />,
                title: "E-Commerce Architectures",
                desc: "Headless e-commerce stores featuring ultra-fast checkouts and CMS-managed product collections."
              },
              {
                icon: <Layers className="h-7 w-7 text-cyan-600" />,
                title: "API & Headless CMS Integration",
                desc: "Creating modular headless interfaces (Sanity, Strapi, Contentful) powered by secure REST & GraphQL APIs."
              },
              {
                icon: <Zap className="h-7 w-7 text-cyan-600" />,
                title: "Core Web Vitals Optimization",
                desc: "Advanced script bundling, edge CDN routing, and asset compression to secure 95+ PageSpeed scores."
              },
              {
                icon: <Headphones className="h-7 w-7 text-cyan-600" />,
                title: "Web Maintenance & SLA Support",
                desc: "Continuous cloud backups, routine security patches, and 24/7 uptime monitoring for total reliability."
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
                  <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed font-normal line-clamp-2">
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
          4. HOW DIGINET BUILDS PLATFORMS (From Strategy to Production - Dark Band)
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
                  HOW DIGINET BUILDS WEBSITES
                </span>
                <h2 className="text-2xl md:text-[32px] font-medium text-white tracking-tight leading-none font-poppins mb-4">
                  From Strategy to Production
                </h2>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-6 max-w-[340px]">
                  We follow a proven, agile methodology to construct scalable web solutions with total transparent execution.
                </p>
                <button
                  onClick={openBooking}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#0072FF] hover:bg-[#005ecf] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-blue-500/20"
                >
                  Explore Our Process
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
                      <linearGradient id="lineGradWeb" x1="0" y1="0" x2="680" y2="320" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#6366f1" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>

                    {/* Orbit circles */}
                    <circle cx="340" cy="160" r="55" stroke="rgba(6, 182, 212, 0.18)" strokeWidth="1.5" strokeDasharray="3,3" fill="none" />
                    <circle cx="340" cy="160" r="100" stroke="rgba(99, 102, 241, 0.08)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />

                    {/* Left curves */}
                    <path d="M 240 65 C 290 65, 310 100, 315 130" stroke="url(#lineGradWeb)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
                    <path d="M 240 255 C 290 255, 310 220, 315 190" stroke="url(#lineGradWeb)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
                    
                    {/* Right curves */}
                    <path d="M 440 65 C 390 65, 370 100, 365 130" stroke="url(#lineGradWeb)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
                    <path d="M 440 255 C 390 255, 370 220, 365 190" stroke="url(#lineGradWeb)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
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
                        <linearGradient id="orangeGradWeb" x1="32" y1="28" x2="53" y2="72" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FF8C00" />
                          <stop offset="100%" stopColor="#FF3300" />
                        </linearGradient>
                        <linearGradient id="blueGradWeb" x1="68" y1="28" x2="47" y2="72" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#00F0FF" />
                          <stop offset="100%" stopColor="#0072FF" />
                        </linearGradient>
                      </defs>
                      {/* Blue/Cyan Chevron */}
                      <path
                        d="M 68 28 L 47 50 L 68 72"
                        stroke="url(#blueGradWeb)"
                        strokeWidth="18"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Red/Orange Chevron */}
                      <path
                        d="M 32 28 L 53 50 L 32 72"
                        stroke="url(#orangeGradWeb)"
                        strokeWidth="18"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {/* Background glow behind logo */}
                    <div className="absolute inset-2 rounded-full bg-cyan-500/10 blur-xl -z-10" />
                  </div>

                  {/* Top-Left: Web Architecture & Strategy */}
                  <motion.div 
                    className="absolute top-[38px] left-[0px] w-[267px] h-[54px] flex items-center justify-end gap-4 text-right select-none"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col text-right justify-center">
                      <h4 className="text-[13px] font-extrabold text-white leading-tight font-poppins">Web Architecture & Strategy</h4>
                      <p className="text-[11px] text-slate-400 mt-1 leading-normal max-w-[200px] font-normal">Define secure DB structures, API contracts, and server frameworks.</p>
                    </div>
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#0a1835] border border-slate-700/40 flex items-center justify-center shrink-0 shadow-md">
                      <Target className="w-[26px] h-[26px] text-white" />
                    </div>
                  </motion.div>

                  {/* Bottom-Left: Next.js & React Engineering */}
                  <motion.div 
                    className="absolute bottom-[38px] left-[0px] w-[267px] h-[54px] flex items-center justify-end gap-4 text-right select-none"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col text-right justify-center">
                      <h4 className="text-[13px] font-extrabold text-white leading-tight font-poppins">Next.js & React Engineering</h4>
                      <p className="text-[11px] text-slate-400 mt-1 leading-normal max-w-[200px] font-normal">Build optimized frontends with clean, reusable React architectures.</p>
                    </div>
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#0a1835] border border-slate-700/40 flex items-center justify-center shrink-0 shadow-md">
                      <Code className="w-[26px] h-[26px] text-white" />
                    </div>
                  </motion.div>

                  {/* Top-Right: Responsive Web Design */}
                  <motion.div 
                    className="absolute top-[38px] right-[0px] w-[267px] h-[54px] flex items-center justify-start gap-4 text-left select-none"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#0a1835] border border-slate-700/40 flex items-center justify-center shrink-0 shadow-md">
                      <Pencil className="w-[26px] h-[26px] text-white" />
                    </div>
                    <div className="flex flex-col text-left justify-center">
                      <h4 className="text-[13px] font-extrabold text-white leading-tight font-poppins">Responsive Web Design</h4>
                      <p className="text-[11px] text-slate-400 mt-1 leading-normal max-w-[200px] font-normal">Construct beautiful viewport-fluid Figma layouts and interactive tokens.</p>
                    </div>
                  </motion.div>

                  {/* Bottom-Right: CI/CD & Edge Deployment */}
                  <motion.div 
                    className="absolute bottom-[38px] right-[0px] w-[267px] h-[54px] flex items-center justify-start gap-4 text-left select-none"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#0a1835] border border-slate-700/40 flex items-center justify-center shrink-0 shadow-md">
                      <Rocket className="w-[26px] h-[26px] text-white" />
                    </div>
                    <div className="flex flex-col text-left justify-center">
                      <h4 className="text-[13px] font-extrabold text-white leading-tight font-poppins">CI/CD & Edge Deployment</h4>
                      <p className="text-[11px] text-slate-400 mt-1 leading-normal max-w-[200px] font-normal">Automate testing, preview checks, and global edge cache deployment.</p>
                    </div>
                  </motion.div>

                </div>

                {/* Mobile View: Vertical / Stacked Card List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-8 md:hidden">
                  {[
                    {
                      title: "Web Architecture & Strategy",
                      desc: "Define secure DB structures, API contracts, and server frameworks.",
                      icon: <Target className="w-6 h-6 text-white" />,
                    },
                    {
                      title: "Responsive Web Design",
                      desc: "Construct beautiful viewport-fluid Figma layouts and interactive tokens.",
                      icon: <Pencil className="w-6 h-6 text-white" />,
                    },
                    {
                      title: "Next.js & React Engineering",
                      desc: "Build optimized frontends with clean, reusable React architectures.",
                      icon: <Code className="w-6 h-6 text-white" />,
                    },
                    {
                      title: "CI/CD & Edge Deployment",
                      desc: "Automate testing, preview checks, and global edge cache deployment.",
                      icon: <Rocket className="w-6 h-6 text-white" />,
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 items-start hover:bg-white/[0.04] transition-all duration-300 text-left">
                      <div className="w-12 h-12 rounded-xl bg-[#0a1835] border border-slate-700/50 flex items-center justify-center shrink-0 shadow-md">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-poppins">{item.title}</h4>
                        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-poppins">{item.desc}</p>
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
              OUR PROCESS
            </span>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight leading-tight font-poppins">
              A Simple 4-Step Journey
            </h2>
          </div>

          {/* Workflow Timeline */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative w-full">
            {[
              {
                title: "Discover",
                desc: "We analyze target user flows, system specifications, and define requirements.",
                icon: <Search className="h-7 w-7 text-[#0072FF]" />
              },
              {
                title: "Design",
                desc: "We deliver desktop/mobile wireframes and UI components inside Figma.",
                icon: <AppWindow className="h-7 w-7 text-[#0072FF]" />
              },
              {
                title: "Develop",
                desc: "We compile Next.js endpoints, design databases, and connect APIs.",
                icon: <Code className="h-7 w-7 text-[#0072FF]" />
              },
              {
                title: "Launch & Optimize",
                desc: "We run automated visual audits and push code to the edge network.",
                icon: <Rocket className="h-7 w-7 text-[#0072FF]" />
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
                    <p className="text-xs text-slate-500 leading-relaxed max-w-[170px] font-normal">
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
          6. WE BUILD WEBSITES FOR EVERY INDUSTRY SECTION
          ======================================================== */}
      <section className="relative w-full py-12 md:py-16 bg-slate-50/40 border-t border-slate-100">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-10 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0072FF] mb-2.5">
              WE BUILD SITES FOR EVERY INDUSTRY
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              {
                icon: <ShoppingCart className="h-8 w-8 text-[#0072FF]" />,
                title: "E-commerce Platforms",
                desc: "Fluid headless shopping setups featuring rapid stripe checkouts."
              },
              {
                icon: <Heart className="h-8 w-8 text-[#0072FF]" />,
                title: "Healthcare Portals",
                desc: "Patient appointment arrays, telehealth, and HIPAA-secure logins."
              },
              {
                icon: <Calendar className="h-8 w-8 text-[#0072FF]" />,
                title: "Booking Platforms",
                desc: "Booking automation calendars, schedule updates, and API hooks."
              },
              {
                icon: <GraduationCap className="h-8 w-8 text-[#0072FF]" />,
                title: "E-Learning Systems",
                desc: "LMS course systems, lecture modules, and student tracking grids."
              },
              {
                icon: <Cloud className="h-8 w-8 text-[#0072FF]" />,
                title: "SaaS Applications",
                desc: "Robust cloud dashboards, database connectors, and subscriptions."
              },
              {
                icon: <Building2 className="h-8 w-8 text-[#0072FF]" />,
                title: "Enterprise Portals",
                desc: "Scalable intranets, team directories, and workflow management systems."
              }
            ].map((ind, idx) => (
              <div key={idx} className="bg-white border border-slate-200/50 p-6 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.01)] flex flex-col items-center text-center hover:shadow-lg hover:border-slate-200 hover:scale-[1.03] transition-all duration-300">
                <div className="h-14 w-14 rounded-xl bg-blue-50/50 flex items-center justify-center mb-4 shrink-0">
                  {ind.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 font-poppins mb-2 leading-tight">{ind.title}</h3>
                <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed font-normal">{ind.desc}</p>
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
              WHY CHOOSE DIGINET
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                icon: <Users className="h-6 w-6 text-[#0072FF]" />,
                title: "Experienced Team",
                desc: "Senior web developers and cloud engineers with corporate-grade expertise."
              },
              {
                icon: <Server className="h-6 w-6 text-[#0072FF]" />,
                title: "Core Web Vitals",
                desc: "Next-gen web performance securing perfect Google PageSpeed compliance."
              },
              {
                icon: <Pencil className="h-6 w-6 text-[#0072FF]" />,
                title: "Premium UI/UX",
                desc: "Responsive and intuitive interfaces designed directly inside Figma."
              },
              {
                icon: <ClipboardList className="h-6 w-6 text-[#0072FF]" />,
                title: "Secure & Compliant",
                desc: "Standard industry safety checks, SSL pinning, and robust compliance."
              },
              {
                icon: <Headphones className="h-6 w-6 text-[#0072FF]" />,
                title: "Dedicated Support",
                desc: "24/7 technical monitoring, database backups, and regular feature updates."
              }
            ].map((choose, idx) => (
              <div key={idx} className="flex flex-row items-center gap-4 text-left justify-start group">
                <div className="h-16 w-16 rounded-full border border-slate-200/80 shadow-md shadow-slate-100/50 flex items-center justify-center bg-white shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:border-[#0072FF]/40 relative">
                  {choose.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[13px] font-extrabold text-slate-900 font-poppins mb-1 leading-tight">{choose.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-normal font-normal max-w-[160px]">{choose.desc}</p>
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
              WHAT OUR CLIENTS SAY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testi, idx) => (
              <div key={idx} className="bg-white border border-slate-200/50 p-6 md:p-8 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col gap-6 text-left relative hover:shadow-md transition-all duration-300">
                <span className="text-[72px] font-serif text-[#0072FF] leading-none absolute top-4 left-4 select-none opacity-10">“</span>
                <div className="flex items-start gap-2.5 relative z-10">
                  <p className="text-xs md:text-sm text-slate-650 leading-relaxed font-normal font-sans">
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
            {[0, 1, 2, 3].map((dot) => (
              <div 
                key={dot} 
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${dot === 0 ? "bg-[#0072FF] scale-110" : "bg-slate-300"}`} 
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
              FEATURED WORK
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "SaaS Analytics Portal",
                desc: "A custom real-time SaaS platform mapping enterprise business statistics and database syncs.",
                metric: "0.8s",
                label: "Average page load speed",
                mockup: (
                  <div className="relative border-[4px] border-slate-900 rounded-[14px] h-[155px] w-[210px] bg-slate-950 shadow-lg overflow-hidden shrink-0 flex flex-col">
                    {/* Browser bar */}
                    <div className="h-4 bg-slate-900 border-b border-slate-800 flex items-center px-2 justify-between">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-[5px] text-slate-500">finlytics.com/dashboard</span>
                      <div className="w-4" />
                    </div>
                    {/* Page Content */}
                    <div className="flex-1 bg-[#061124] p-2 flex flex-col gap-1.5 select-none text-left">
                      <span className="text-[7px] font-black text-white">Finlytics Core</span>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="bg-[#0c1a35] p-1 rounded border border-slate-800 flex flex-col">
                          <span className="text-[4px] text-slate-400">Total ARR</span>
                          <span className="text-[7px] font-extrabold text-white">$14K</span>
                        </div>
                        <div className="bg-[#0c1a35] p-1 rounded border border-slate-800 flex flex-col">
                          <span className="text-[4px] text-slate-400">Active</span>
                          <span className="text-[7px] font-extrabold text-cyan-400">920</span>
                        </div>
                        <div className="bg-[#0c1a35] p-1 rounded border border-slate-800 flex flex-col">
                          <span className="text-[4px] text-slate-400">Server</span>
                          <span className="text-[7px] font-extrabold text-emerald-400">Up</span>
                        </div>
                      </div>
                      {/* Mini bar chart */}
                      <div className="bg-[#0c1a35] border border-slate-800 rounded p-1 flex-1 flex items-end gap-0.5">
                        {[40, 60, 50, 75, 90, 80, 65, 85].map((h, idx) => (
                          <div key={idx} className="flex-1 bg-cyan-500/25 rounded-xs" style={{ height: "100%" }}>
                            <div className="bg-cyan-400 rounded-xs" style={{ height: `${h}%` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              },
              {
                title: "Headless E-Commerce Store",
                desc: "A fluid, Next.js commerce store featuring dynamic product filters and stripe checkout API.",
                metric: "+140%",
                label: "Increase in checkout conversions",
                mockup: (
                  <div className="relative border-[4px] border-slate-900 rounded-[14px] h-[155px] w-[210px] bg-white shadow-lg overflow-hidden shrink-0 flex flex-col">
                    {/* Browser bar */}
                    <div className="h-4 bg-slate-100 border-b border-slate-200 flex items-center px-2 justify-between">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-[5px] text-slate-400">luxewear.in/shop</span>
                      <div className="w-4" />
                    </div>
                    {/* Page Content */}
                    <div className="flex-1 bg-[#f8fafc] p-2 flex flex-col gap-1.5 select-none text-left">
                      <div className="flex justify-between items-center border-b border-slate-200/50 pb-1">
                        <span className="text-[7px] font-black text-slate-800">LuxeWear</span>
                        <ShoppingCart className="w-2.5 h-2.5 text-slate-500" />
                      </div>
                      {/* Products Grid */}
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="bg-white p-1 rounded border border-slate-100 flex flex-col">
                          <div className="h-10 bg-slate-50 rounded mb-1" />
                          <span className="text-[4px] font-bold text-slate-800">Classy Jacket</span>
                          <span className="text-[4px] text-cyan-600 font-extrabold">$180</span>
                        </div>
                        <div className="bg-white p-1 rounded border border-slate-100 flex flex-col">
                          <div className="h-10 bg-slate-50 rounded mb-1" />
                          <span className="text-[4px] font-bold text-slate-800">Premium Boots</span>
                          <span className="text-[4px] text-cyan-600 font-extrabold">$240</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                title: "Enterprise CRM Portal",
                desc: "A custom lead tracking and customer relationship management application for global teams.",
                metric: "99/100",
                label: "Google PageSpeed performance",
                mockup: (
                  <div className="relative border-[4px] border-slate-900 rounded-[14px] h-[155px] w-[210px] bg-slate-950 shadow-lg overflow-hidden shrink-0 flex flex-col">
                    {/* Browser bar */}
                    <div className="h-4 bg-slate-900 border-b border-slate-800 flex items-center px-2 justify-between">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-[5px] text-slate-500">crm.healthsync.sg</span>
                      <div className="w-4" />
                    </div>
                    {/* Page Content */}
                    <div className="flex-1 bg-[#090f1d] p-2 flex flex-col gap-1.5 select-none text-left">
                      <span className="text-[6px] font-bold text-slate-400">HealthSync CRM</span>
                      <div className="bg-[#0f182c] border border-slate-800/80 rounded p-1.5 flex flex-col gap-1">
                        {[
                          { name: "Rahul Deshmukh", appt: "Consultation - 10:00 AM", status: "Checked-in", color: "text-emerald-400" },
                          { name: "Sneha Nair", appt: "Follow Up - 11:30 AM", status: "Waiting", color: "text-amber-400" }
                        ].map((p, idx) => (
                          <div key={idx} className="flex justify-between items-center border-b border-slate-800/30 pb-0.5 last:border-0 last:pb-0">
                            <div>
                              <span className="text-[4.5px] font-extrabold text-white block leading-none">{p.name}</span>
                              <span className="text-[3.5px] text-slate-500 block mt-0.5">{p.appt}</span>
                            </div>
                            <span className={`text-[4px] font-bold ${p.color}`}>{p.status}</span>
                          </div>
                        ))}
                      </div>
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
                  <p className="text-[11px] text-slate-500 leading-relaxed font-normal mb-3 max-w-[180px]">
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
                          <p className="pt-3 text-[11px] md:text-xs text-slate-500 leading-relaxed font-normal border-t border-slate-100 mt-3">
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
                          <p className="pt-3 text-[11px] md:text-xs text-slate-500 leading-relaxed font-normal border-t border-slate-100 mt-3">
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
                          <p className="pt-3 text-[11px] md:text-xs text-slate-500 leading-relaxed font-normal border-t border-slate-100 mt-3">
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
          11. CTA BANNER SECTION (Ready to Build Your Web Platform?)
          ======================================================== */}
      <section className="relative w-full py-8 md:py-12 bg-[#fafafb]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div 
            className="w-full rounded-[24px] shadow-2xl relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-6 md:py-0 h-auto md:h-[150px] gap-6 md:gap-0"
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

              {/* Radial glow around the browser area */}
              <div className="absolute right-[5%] top-[10%] w-[200px] h-[200px] rounded-full bg-cyan-400/20 blur-[50px]" />
            </div>

            {/* Left Content (Title, Subtext, Button stacked) */}
            <div className="relative z-10 flex flex-col items-start text-left max-w-[500px]">
              <h3 className="text-lg md:text-xl font-bold text-white font-poppins mb-1 leading-tight tracking-tight">
                Ready to Build Your Web Platform?
              </h3>
              <p className="text-[10px] md:text-xs text-blue-100/80 mb-3.5 font-normal max-w-[420px] leading-relaxed">
                Let&apos;s turn your idea into a custom enterprise solution that drives business growth.
              </p>
              <button
                onClick={openBooking}
                className="cursor-pointer inline-flex items-center justify-center px-5 py-2 rounded-lg text-[10px] md:text-xs font-bold text-[#002D8C] bg-white hover:bg-slate-50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md flex items-center gap-1.5"
              >
                Book Consultation
                <ArrowRight className="h-3 w-3 text-[#002D8C]" />
              </button>
            </div>

            {/* Right side: Angled Browser Mockup with Orbits (Overflowing container) */}
            <div className="relative w-full md:w-[220px] h-[150px] flex items-center justify-center shrink-0 z-20">
              
              {/* Glowing orbits in the background */}
              <div className="absolute inset-[-40px] pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-cyan-400/15 rounded-[50%] -rotate-[15deg]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border border-dashed border-cyan-500/10 rounded-[50%] rotate-[20deg]" />
              </div>

              {/* Glowing dots along orbits */}
              <div className="absolute top-[10%] right-[10%] w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_2px_rgba(34,211,238,0.6)] animate-pulse" />
              <div className="absolute bottom-[20%] left-[5%] w-1 h-1 rounded-full bg-cyan-350 shadow-[0_0_5px_2px_rgba(6,182,212,0.4)] animate-pulse" />

              {/* Angled Browser Container */}
              <motion.div 
                className="absolute md:bottom-[-16px] md:top-[-16px] w-[170px] h-[110px] bg-slate-950 border-[3.5px] border-slate-900 rounded-[12px] shadow-2xl overflow-hidden flex flex-col p-1.5 items-center justify-center z-10"
                style={{
                  transform: "rotate(-12deg) skewX(2deg)",
                  boxShadow: "0 15px 35px -5px rgba(0, 0, 0, 0.4), 0 0 25px rgba(6, 182, 212, 0.15)"
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Browser bar */}
                <div className="absolute top-0 left-0 right-0 h-3 bg-slate-900 flex items-center px-1.5 gap-1 select-none">
                  <span className="w-1 h-1 rounded-full bg-red-500/80" />
                  <span className="w-1 h-1 rounded-full bg-yellow-500/80" />
                  <span className="w-1 h-1 rounded-full bg-green-500/80" />
                </div>
                
                {/* Browser Screen Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a142c] via-[#050a17] to-[#010307] -z-10" />

                {/* X logo (Chevrons) */}
                <div className="relative z-10 flex flex-col items-center justify-center select-none scale-[0.7] pt-2">
                  <svg viewBox="0 0 100 100" className="w-[36px] h-[36px]" fill="none">
                    <defs>
                      <linearGradient id="ctaOrangeGradWeb2" x1="32" y1="28" x2="53" y2="72" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#FF8C00" />
                        <stop offset="100%" stopColor="#FF3300" />
                      </linearGradient>
                      <linearGradient id="ctaBlueGradWeb2" x1="68" y1="28" x2="47" y2="72" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#00F0FF" />
                        <stop offset="100%" stopColor="#0072FF" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 68 28 L 47 50 L 68 72"
                      stroke="url(#ctaBlueGradWeb2)"
                      strokeWidth="18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 32 28 L 53 50 L 32 72"
                      stroke="url(#ctaOrangeGradWeb2)"
                      strokeWidth="18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[6px] font-black uppercase tracking-[0.2em] text-cyan-400 mt-1.5">Diginet</span>
                </div>

                {/* Cyber grid pattern on screen */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_0.5px,transparent_0.5px),linear-gradient(to_bottom,#1e293b_0.5px,transparent_0.5px)] bg-[size:8px_8px] opacity-15 pointer-events-none" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
