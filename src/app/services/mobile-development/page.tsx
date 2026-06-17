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

// Testimonial Data for Mobile Development
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
    text: "Diginet transformed our idea into a powerful mobile app that our users love. Their team is professional, responsive and truly cares about results.",
    name: "Ravi Sharma",
    role: "CTO",
    company: "RetailMart",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 1,
    text: "The app delivered by Diginet helped us increase bookings by 180%. Their attention to detail and technical expertise is exceptional.",
    name: "Dr. Priya Nair",
    role: "Founder",
    company: "CarePlus Clinic",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 2,
    text: "Working with Diginet was a great experience. They understood our vision and built a scalable solution that grows with our business.",
    name: "Arjun Mehta",
    role: "CEO",
    company: "ServiceHub",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
  }
];

// FAQ Data for Mobile Development
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Which platforms do you develop mobile apps for?",
    answer: "We develop native iOS (Swift) & Android (Kotlin) setups for maximum hardware performance, and cross-platform solutions (React Native/Flutter) for code reuse. We recommend the path that best matches your timeline and features."
  },
  {
    question: "Will you help with app maintenance?",
    answer: "Yes, we provide ongoing post-launch maintenance, including feature updates, security patches, API version updates, OS compatibility adjustments, and performance monitoring."
  },
  {
    question: "What technologies do you use?",
    answer: "We use Swift and Kotlin for native apps, React Native and Flutter for cross-platform apps, SQLite/Realm for offline storage, and Node.js/PostgreSQL/Firebase for backend sync."
  },
  {
    question: "How long does it take to build a mobile app?",
    answer: "A typical custom mobile app takes 8 to 16 weeks to design, develop, test, and submit to stores. This depends on feature complexity, sync requirements, and integrations."
  },
  {
    question: "Can you integrate third-party services?",
    answer: "Absolutely. We routinely integrate payment gateways (Stripe, Apple/Google Pay), analytics trackers (Firebase, GA4), push notifications, mapping APIs, and enterprise CRMs."
  }
];

export default function MobileDevelopmentPage() {
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
        @keyframes mobileMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mobile-marquee-track {
          display: flex;
          width: max-content;
          animation: mobileMarquee 25s linear infinite;
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
          <div className="absolute top-[-10%] right-[-10%] h-[550px] w-[550px] rounded-full bg-indigo-500/10 blur-[130px]" />
          <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-650/5 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.08]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 flex flex-col text-left items-start">
              
              <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-indigo-400 mb-2 block">
                Mobile Application Development
              </span>

              <h1 className="text-3xl sm:text-[42px] lg:text-[46px] xl:text-[50px] font-black tracking-tight text-white leading-[1.08] mb-3 font-poppins">
                Mobile Applications <br />
                Built for <span className="text-[#2F6BFF] font-black">Growth.</span>
              </h1>

              <p className="text-[15px] md:text-[16px] text-slate-400 leading-relaxed mb-5 max-w-[480px]">
                We design and develop custom Android and iOS applications that are scalable, intuitive, and built to deliver real business impact in a mobile-first world.
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

            {/* Right Hero Graphic: Phone Mockup Composition */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center py-2 w-full select-none">
              <motion.div 
                className="relative w-full max-w-[560px] h-[400px] sm:h-[440px] md:h-[460px] flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >

                {/* ── Orbital Rings ── */}
                <div className="absolute inset-[-30px] pointer-events-none z-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[82%] border-[1.5px] border-dashed border-blue-500/25 rounded-[50%] -rotate-[18deg]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[68%] border-[1.5px] border-dashed border-blue-400/15 rounded-[50%] rotate-[12deg]" />
                </div>

                {/* ── Glowing Dots along orbits ── */}
                <div className="absolute top-[6%] right-[22%] w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_2px_rgba(96,165,250,0.6)] z-[5]" />
                <div className="absolute bottom-[12%] left-[18%] w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_2px_rgba(96,165,250,0.5)] z-[5]" />
                <div className="absolute top-[38%] left-[3%] w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_2px_rgba(59,130,246,0.5)] z-[5]" />
                <div className="absolute bottom-[28%] right-[5%] w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_2px_rgba(96,165,250,0.6)] z-[5]" />
                <div className="absolute top-[12%] left-[38%] w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_2px_rgba(34,211,238,0.4)] z-[5]" />
                <div className="absolute bottom-[5%] right-[35%] w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_6px_2px_rgba(147,197,253,0.4)] z-[5]" />
                <div className="absolute top-[55%] right-[1%] w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_5px_1px_rgba(96,165,250,0.5)] z-[5]" />

                {/* ── Left Background Card: Analytics ── */}
                <motion.div 
                  className="absolute left-[2%] sm:left-[4%] top-[12%] w-[155px] sm:w-[170px] h-[210px] sm:h-[230px] rounded-2xl bg-[#0c1a3a]/95 border border-slate-700/40 backdrop-blur-md p-3.5 z-[2] -rotate-[5deg] shadow-xl shadow-black/20"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                >
                  <span className="text-[11px] font-semibold text-slate-300 block mb-3">Analytics</span>
                  {/* Line Chart */}
                  <svg viewBox="0 0 140 90" className="w-full h-[100px] sm:h-[120px]">
                    <defs>
                      <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                    {/* Area fill */}
                    <path d="M0,70 Q15,65 25,55 T50,40 T75,50 T95,25 T115,35 T140,15 L140,90 L0,90 Z" fill="url(#chartFill)" />
                    {/* Line */}
                    <path d="M0,70 Q15,65 25,55 T50,40 T75,50 T95,25 T115,35 T140,15" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                    {/* Grid lines */}
                    <line x1="0" y1="25" x2="140" y2="25" stroke="#334155" strokeWidth="0.5" strokeDasharray="3,3" />
                    <line x1="0" y1="50" x2="140" y2="50" stroke="#334155" strokeWidth="0.5" strokeDasharray="3,3" />
                    <line x1="0" y1="75" x2="140" y2="75" stroke="#334155" strokeWidth="0.5" strokeDasharray="3,3" />
                  </svg>
                </motion.div>

                {/* ── Right Background Card: Statistics ── */}
                <motion.div 
                  className="absolute right-[2%] sm:right-[4%] top-[8%] w-[150px] sm:w-[165px] h-[225px] sm:h-[245px] rounded-2xl bg-[#0c1a3a]/95 border border-slate-700/40 backdrop-blur-md p-3.5 z-[2] rotate-[4deg] shadow-xl shadow-black/20"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <span className="text-[11px] font-semibold text-slate-300 block mb-3">Statistics</span>
                  {/* Progress Ring */}
                  <div className="flex justify-center mb-2">
                    <div className="relative w-[70px] h-[70px]">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <circle cx="18" cy="18" r="15.5" fill="none" stroke="#1e293b" strokeWidth="3" />
                        <circle cx="18" cy="18" r="15.5" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="97.4" strokeDashoffset="24.4" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-sm font-black text-white leading-none">75%</span>
                        <span className="text-[6px] text-slate-400 mt-0.5">Performance</span>
                      </div>
                    </div>
                  </div>
                  {/* This Week Stats */}
                  <div className="mt-2 border-t border-slate-700/40 pt-2">
                    <span className="text-[10px] font-semibold text-slate-300 block">This Week</span>
                    <span className="text-[9px] text-emerald-400 font-semibold mt-1 block">↑ +3.2% <span className="text-slate-500 font-normal">vs last week</span></span>
                  </div>
                </motion.div>

                {/* ── Central Phone Mockup ── */}
                <motion.div 
                  className="relative z-10 w-[185px] sm:w-[205px] rounded-[30px] border-[4px] border-slate-700/80 bg-slate-950 shadow-2xl shadow-blue-950/40 overflow-hidden"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Notch */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[52px] h-[10px] bg-slate-800 rounded-full z-30" />

                  {/* Phone Screen Content */}
                  <div className="w-full pt-5 pb-3 px-3 flex flex-col gap-1.5 bg-gradient-to-b from-[#0a1628] to-[#060f1e]">
                    
                    {/* Status Bar */}
                    <div className="flex items-center justify-between px-0.5 text-[6px] text-slate-500 mb-1">
                      <span className="font-semibold">9:41</span>
                      <div className="flex items-center gap-1">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 16 16" fill="currentColor"><path d="M1 11h2v4H1v-4zm4-3h2v7H5V8zm4-3h2v10H9V5zm4-4h2v14h-2V1z"/></svg>
                        <svg className="w-2.5 h-2.5" viewBox="0 0 16 16" fill="currentColor"><path d="M8 2C4.69 2 1.82 3.67.3 6.2l1.42 1.06C3.02 5.12 5.36 4 8 4s4.98 1.12 6.28 3.26l1.42-1.06C14.18 3.67 11.31 2 8 2zM8 6c-2.16 0-4.1 1-5.38 2.54l1.42 1.06C5.04 8.23 6.44 7.5 8 7.5s2.96.73 3.96 1.8l1.42-1.06C12.1 7 10.16 6 8 6zm0 4c-1.06 0-2 .5-2.6 1.27L8 14l2.6-2.73C10 10.5 9.06 10 8 10z"/></svg>
                        <svg className="w-3 h-2.5" viewBox="0 0 20 12" fill="currentColor"><rect x="0" y="1" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/><rect x="2" y="3" width="10" height="6" rx="1" fill="currentColor"/><rect x="17" y="4" width="2" height="4" rx="0.5"/></svg>
                      </div>
                    </div>

                    {/* Welcome */}
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[6px] font-bold text-white shrink-0">A</div>
                      <span className="text-[8px] text-slate-300 font-medium">Welcome back, Alex</span>
                    </div>

                    {/* Balance Card */}
                    <div className="bg-gradient-to-br from-blue-600/25 to-indigo-700/15 rounded-xl p-2.5 border border-blue-500/15">
                      <span className="text-[6px] text-blue-300/70 uppercase tracking-wider font-bold block mb-0.5">GoodBalance</span>
                      <span className="text-[16px] font-black text-white leading-none block">$24,860.50</span>
                      {/* Quick Action Icons */}
                      <div className="flex justify-between mt-2.5 gap-1">
                        {[
                          { label: "Home", icon: <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1L1 7h2v7h4V10h2v4h4V7h2L8 1z"/></svg> },
                          { label: "Charts", icon: <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor"><path d="M1 14h14v1H1v-1zm1-3h2v3H2V11zm3-2h2v5H5V9zm3-3h2v8H8V6zm3-2h2v10h-2V4z"/></svg> },
                          { label: "Share", icon: <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor"><path d="M11 2.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM4 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10.3 4.2L5.7 6.8M10.3 11.8l-4.6-2.6"/></svg> },
                          { label: "Transfer", icon: <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor"><path d="M2 4l4-3v2h8v2H6v2L2 4zm12 8l-4 3v-2H2v-2h8V9l4 3z"/></svg> }
                        ].map((item, i) => (
                          <div key={i} className="flex flex-col items-center gap-0.5">
                            <div className="w-6 h-6 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-blue-400">{item.icon}</div>
                            <span className="text-[5px] text-slate-500">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="mt-1">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[8px] font-bold text-slate-200">Recent Transactions</span>
                        <span className="text-[6px] text-blue-400 font-medium">View all</span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        {[
                          { icon: "🛒", color: "bg-red-500/15 border-red-500/20", name: "Shopping", sub: "GRFE 214 168", amount: "$3.50", textColor: "text-red-400" },
                          { icon: "✈️", color: "bg-sky-500/15 border-sky-500/20", name: "Travel", sub: "Edbard pos", amount: "$0.50", textColor: "text-sky-400" },
                          { icon: "📋", color: "bg-amber-500/15 border-amber-500/20", name: "Subscription", sub: "EDHE assets", amount: "$33.00", textColor: "text-amber-400" }
                        ].map((tx, i) => (
                          <div key={i} className="flex items-center gap-2 py-1 border-t border-slate-800/50 first:border-0 first:pt-0">
                            <div className={`w-6 h-6 rounded-lg ${tx.color} border flex items-center justify-center text-[10px] shrink-0`}>{tx.icon}</div>
                            <div className="flex-1 min-w-0">
                              <span className="text-[7px] font-semibold text-slate-200 block leading-none">{tx.name}</span>
                              <span className="text-[5px] text-slate-500 block mt-0.5">{tx.sub}</span>
                            </div>
                            <span className="text-[7px] font-bold text-slate-200">{tx.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* ── Floating Platform Badges ── */}
                
                {/* Android Badge - Top Left */}
                <motion.div 
                  className="absolute top-[4%] left-[14%] z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-green-900/20"
                  animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                  <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V7H6v11zM3.5 7C2.67 7 2 7.67 2 8.5v7c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-7C5 7.67 4.33 7 3.5 7zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                  </svg>
                </motion.div>

                {/* Apple Badge - Right */}
                <motion.div 
                  className="absolute top-[32%] right-[1%] sm:right-[3%] z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-600/30 border border-slate-500/30 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-black/20"
                  animate={{ y: [0, -4, 0], x: [0, -2, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                >
                  <svg className="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.82M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.51-.63.73-1.18 1.87-1.03 2.98 1.11.09 2.26-.59 2.96-1.43z"/>
                  </svg>
                </motion.div>

                {/* Code Badge - Bottom Center-Left */}
                <motion.div 
                  className="absolute bottom-[8%] left-[28%] z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-500/15 border border-blue-500/25 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-blue-900/20"
                  animate={{ y: [0, -4, 0], x: [0, -2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <span className="text-blue-400 font-black text-xs">&lt;/&gt;</span>
                </motion.div>

              </motion.div>
            </div>

          </div>

          {/* Underneath breadcrumbs/metrics: stats list */}
          <div className="mt-5 pt-5 border-t border-slate-800/40 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 max-w-[1100px] w-full">
            {[
              { title: "250+ Happy Clients", desc: "Delivering business success globally.", icon: <Users className="h-4.5 w-4.5 text-indigo-400 stroke-[2.5px]" /> },
              { title: "10+ Years of Excellence", desc: "Deep engineering experience.", icon: <Award className="h-4.5 w-4.5 text-indigo-400 stroke-[2.5px]" /> },
              { title: "24/7 Support", desc: "Always available, always ready.", icon: <Headphones className="h-4.5 w-4.5 text-indigo-400 stroke-[2.5px]" /> },
              { title: "98% Client Retention", desc: "Building long-term partnerships.", icon: <ShieldCheck className="h-4.5 w-4.5 text-indigo-400 stroke-[2.5px]" /> }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3.5 items-start">
                <div className="h-9.5 w-9.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col leading-tight pt-0.5">
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
            <div className="mobile-marquee-track">
              
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
                    <span className="h-2 w-2 rounded-full bg-indigo-500/40" />
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
                    <span className="h-2 w-2 rounded-full bg-indigo-500/40" />
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
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-indigo-500 mb-2.5">
              CORE SERVICES
            </span>
            <h2 className="text-2xl md:text-[32px] font-medium text-slate-900 tracking-tight leading-tight font-poppins">
              End-to-end Mobile App Development Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                icon: (
                  <svg className="h-7 w-7 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V7H6v11zM3.5 7C2.67 7 2 7.67 2 8.5v7c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-7C5 7.67 4.33 7 3.5 7zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                  </svg>
                ),
                title: "Android App Development",
                desc: "Native Android apps built for performance, security, and seamless user experience."
              },
              {
                icon: (
                  <svg className="h-7 w-7 text-indigo-600 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.82M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.51-.63.73-1.18 1.87-1.03 2.98 1.11.09 2.26-.59 2.96-1.43z" />
                  </svg>
                ),
                title: "iOS App Development",
                desc: "High-performance iOS applications crafted with Swift and modern Apple frameworks."
              },
              {
                icon: <Code className="h-7 w-7 text-indigo-600" />,
                title: "Cross-Platform Apps",
                desc: "Build powerful cross-platform apps with Flutter & React Native to reach more users, faster."
              },
              {
                icon: <Layers className="h-7 w-7 text-indigo-600" />,
                title: "UI/UX Design",
                desc: "Human-centered UI/UX designs that are intuitive, engaging, and aligned with your brand."
              },
              {
                icon: <Database className="h-7 w-7 text-indigo-600" />,
                title: "Backend & API Integration",
                desc: "Robust backend architecture and API integrations that power your app seamlessly."
              },
              {
                icon: <Headphones className="h-7 w-7 text-indigo-600" />,
                title: "App Maintenance & Support",
                desc: "Ongoing maintenance, feature enhancements, and 24/7 support to keep your app running smooth."
              }
            ].map((srv, idx) => (
              <div 
                key={idx} 
                className="group bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 flex items-center gap-4 hover:shadow-lg hover:shadow-indigo-500/[0.04] hover:border-indigo-200/60 hover:translate-y-[-2px] transition-all duration-300 cursor-pointer"
                onClick={openBooking}
              >
                {/* Icon */}
                <div className="h-[52px] w-[52px] rounded-xl bg-indigo-50/80 border border-indigo-100/60 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-indigo-100/60 group-hover:scale-105">
                  {srv.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-[15px] font-bold text-slate-900 font-poppins mb-1 leading-tight">
                    {srv.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal line-clamp-2">
                    {srv.desc}
                  </p>
                </div>

                {/* Chevron Arrow */}
                <div className="shrink-0 h-8 w-8 rounded-full bg-slate-100/80 border border-slate-200/60 flex items-center justify-center text-slate-400 group-hover:bg-indigo-500 group-hover:border-indigo-500 group-hover:text-white transition-all duration-300">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          4. HOW DIGINET BUILDS APPS (From Idea to Launch - Dark Band)
          ======================================================== */}
      <section className="relative w-full py-14 md:py-18 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="relative w-full py-10 md:py-12 px-8 md:px-12 bg-[#030d22] rounded-[32px] overflow-hidden shadow-2xl border border-slate-950/40">
            
            {/* Background ambient spots */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute top-[-30%] right-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/8 blur-[130px]" />
              <div className="absolute bottom-[-30%] left-[-10%] h-[450px] w-[450px] rounded-full bg-blue-600/5 blur-[110px]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left side info block */}
              <div className="lg:col-span-4 flex flex-col items-start text-left">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0072FF] mb-3">
                  HOW DIGINET BUILDS APPS
                </span>
                <h2 className="text-2xl md:text-[32px] font-medium text-white tracking-tight leading-none font-poppins mb-4">
                  From Idea to Launch
                </h2>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-6 max-w-[340px]">
                  We follow a proven, agile process to turn your idea into a high-performing mobile application.
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
                      <linearGradient id="lineGrad" x1="0" y1="0" x2="680" y2="320" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#6366f1" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>

                    {/* Orbit circles */}
                    <circle cx="340" cy="160" r="55" stroke="rgba(59, 130, 246, 0.18)" strokeWidth="1.5" strokeDasharray="3,3" fill="none" />
                    <circle cx="340" cy="160" r="100" stroke="rgba(99, 102, 241, 0.08)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />

                    {/* Left curves */}
                    <path d="M 240 65 C 290 65, 310 100, 315 130" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
                    <path d="M 240 255 C 290 255, 310 220, 315 190" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
                    
                    {/* Right curves */}
                    <path d="M 440 65 C 390 65, 370 100, 365 130" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
                    <path d="M 440 255 C 390 255, 370 220, 365 190" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
                  </svg>

                  {/* Glowing Dots along path points */}
                  <div className="absolute left-[287px] top-[82px] w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_3px_rgba(96,165,250,0.6)] animate-pulse" />
                  <div className="absolute left-[387px] top-[232px] w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_3px_rgba(96,165,250,0.6)] animate-pulse" />
                  <div className="absolute left-[282px] top-[157px] w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_3px_rgba(129,140,248,0.5)] animate-pulse" />
                  <div className="absolute left-[392px] top-[157px] w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_3px_rgba(34,211,238,0.5)] animate-pulse" />

                  {/* Central Logo Card */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 rounded-[22px] bg-gradient-to-br from-[#0c1b3a] to-[#040c1e] border border-slate-700/50 shadow-[0_0_25px_5px_rgba(59,130,246,0.15)] flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-[50px] h-[50px]" fill="none">
                      <defs>
                        <linearGradient id="orangeGrad" x1="32" y1="28" x2="53" y2="72" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FF8C00" />
                          <stop offset="100%" stopColor="#FF3300" />
                        </linearGradient>
                        <linearGradient id="blueGrad" x1="68" y1="28" x2="47" y2="72" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#00F0FF" />
                          <stop offset="100%" stopColor="#0072FF" />
                        </linearGradient>
                      </defs>
                      {/* Blue/Cyan Chevron */}
                      <path
                        d="M 68 28 L 47 50 L 68 72"
                        stroke="url(#blueGrad)"
                        strokeWidth="18"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Red/Orange Chevron */}
                      <path
                        d="M 32 28 L 53 50 L 32 72"
                        stroke="url(#orangeGrad)"
                        strokeWidth="18"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {/* Background glow behind logo */}
                    <div className="absolute inset-2 rounded-full bg-blue-500/10 blur-xl -z-10" />
                  </div>

                  {/* Top-Left: Product Strategy */}
                  <motion.div 
                    className="absolute top-[38px] left-[0px] w-[267px] h-[54px] flex items-center justify-end gap-4 text-right select-none"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col text-right justify-center">
                      <h4 className="text-[13px] font-extrabold text-white leading-tight font-poppins">Product Strategy</h4>
                      <p className="text-[13px] text-slate-400 mt-1 leading-normal max-w-[200px] font-normal">We validate ideas, identify opportunities and define the right roadmap.</p>
                    </div>
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#0a1835] border border-slate-700/40 flex items-center justify-center shrink-0 shadow-md">
                      <Target className="w-[26px] h-[26px] text-white" />
                    </div>
                  </motion.div>

                  {/* Bottom-Left: Agile Development */}
                  <motion.div 
                    className="absolute bottom-[38px] left-[0px] w-[267px] h-[54px] flex items-center justify-end gap-4 text-right select-none"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col text-right justify-center">
                      <h4 className="text-[13px] font-extrabold text-white leading-tight font-poppins">Agile Development</h4>
                      <p className="text-[13px] text-slate-400 mt-1 leading-normal max-w-[200px] font-normal">We build with clean code, modern frameworks and agile methodology.</p>
                    </div>
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#0a1835] border border-slate-700/40 flex items-center justify-center shrink-0 shadow-md">
                      <Code className="w-[26px] h-[26px] text-white" />
                    </div>
                  </motion.div>

                  {/* Top-Right: UI/UX Design */}
                  <motion.div 
                    className="absolute top-[38px] right-[0px] w-[267px] h-[54px] flex items-center justify-start gap-4 text-left select-none"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#0a1835] border border-slate-700/40 flex items-center justify-center shrink-0 shadow-md">
                      <Pencil className="w-[26px] h-[26px] text-white" />
                    </div>
                    <div className="flex flex-col text-left justify-center">
                      <h4 className="text-[13px] font-extrabold text-white leading-tight font-poppins">UI/UX Design</h4>
                      <p className="text-[13px] text-slate-400 mt-1 leading-normal max-w-[200px] font-normal">Design intuitive interfaces that deliver delightful user experiences.</p>
                    </div>
                  </motion.div>

                  {/* Bottom-Right: QA & Deployment */}
                  <motion.div 
                    className="absolute bottom-[38px] right-[0px] w-[267px] h-[54px] flex items-center justify-start gap-4 text-left select-none"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#0a1835] border border-slate-700/40 flex items-center justify-center shrink-0 shadow-md">
                      <Rocket className="w-[26px] h-[26px] text-white" />
                    </div>
                    <div className="flex flex-col text-left justify-center">
                      <h4 className="text-[13px] font-extrabold text-white leading-tight font-poppins">QA & Deployment</h4>
                      <p className="text-[13px] text-slate-400 mt-1 leading-normal max-w-[200px] font-normal">Rigorous testing and smooth deployment to ensure quality and reliability.</p>
                    </div>
                  </motion.div>

                </div>

                {/* Mobile View: Vertical / Stacked Card List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-8 md:hidden">
                  {[
                    {
                      title: "Product Strategy",
                      desc: "We validate ideas, identify opportunities and define the right roadmap.",
                      icon: <Target className="w-6 h-6 text-white" />,
                    },
                    {
                      title: "UI/UX Design",
                      desc: "Design intuitive interfaces that deliver delightful user experiences.",
                      icon: <Pencil className="w-6 h-6 text-white" />,
                    },
                    {
                      title: "Agile Development",
                      desc: "We build with clean code, modern frameworks and agile methodology.",
                      icon: <Code className="w-6 h-6 text-white" />,
                    },
                    {
                      title: "QA & Deployment",
                      desc: "Rigorous testing and smooth deployment to ensure quality and reliability.",
                      icon: <Rocket className="w-6 h-6 text-white" />,
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 items-start hover:bg-white/[0.04] transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-[#0a1835] border border-slate-700/50 flex items-center justify-center shrink-0 shadow-md">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-poppins">{item.title}</h4>
                        <p className="text-sm text-slate-400 mt-1.5 leading-relaxed font-poppins">{item.desc}</p>
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
                desc: "We analyze your idea, market and define clear goals.",
                icon: <Search className="h-7 w-7 text-[#0072FF]" />
              },
              {
                title: "Design",
                desc: "We create user flows, wireframes and stunning UI/UX designs.",
                icon: <AppWindow className="h-7 w-7 text-[#0072FF]" />
              },
              {
                title: "Develop",
                desc: "We build robust, scalable apps with clean and secure code.",
                icon: <Code className="h-7 w-7 text-[#0072FF]" />
              },
              {
                title: "Launch & Scale",
                desc: "We launch your app and help you scale with confidence.",
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
          6. WE BUILD APPS FOR EVERY INDUSTRY SECTION
          ======================================================== */}
      <section className="relative w-full py-12 md:py-16 bg-slate-50/40 border-t border-slate-100">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-10 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0072FF] mb-2.5">
              WE BUILD APPS FOR EVERY INDUSTRY
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              {
                icon: <ShoppingCart className="h-8 w-8 text-[#0072FF]" />,
                title: "E-commerce Apps",
                desc: "Boost sales with seamless shopping experiences and secure payments."
              },
              {
                icon: <Heart className="h-8 w-8 text-[#0072FF]" />,
                title: "Healthcare Apps",
                desc: "Telemedicine, patient portals and health management solutions."
              },
              {
                icon: <Calendar className="h-8 w-8 text-[#0072FF]" />,
                title: "Booking Apps",
                desc: "Travel, hotel, taxi and appointment booking made effortless."
              },
              {
                icon: <GraduationCap className="h-8 w-8 text-[#0072FF]" />,
                title: "Education Apps",
                desc: "E-learning, online courses and student engagement platforms."
              },
              {
                icon: <Cloud className="h-8 w-8 text-[#0072FF]" />,
                title: "SaaS Apps",
                desc: "Scalable SaaS products that solve real business problems."
              },
              {
                icon: <Building2 className="h-8 w-8 text-[#0072FF]" />,
                title: "Enterprise Apps",
                desc: "Custom enterprise apps to streamline operations and productivity."
              }
            ].map((ind, idx) => (
              <div key={idx} className="bg-white border border-slate-200/50 p-6 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.01)] flex flex-col items-center text-center hover:shadow-lg hover:border-slate-200 hover:scale-[1.03] transition-all duration-300">
                <div className="h-14 w-14 rounded-xl bg-blue-50/50 flex items-center justify-center mb-4 shrink-0">
                  {ind.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 font-poppins mb-2 leading-tight">{ind.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">{ind.desc}</p>
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
                desc: "Skilled developers and designers with deep industry expertise."
              },
              {
                icon: <Server className="h-6 w-6 text-[#0072FF]" />,
                title: "Scalable Architecture",
                desc: "Future-ready solutions built for performance and scalability."
              },
              {
                icon: <Pencil className="h-6 w-6 text-[#0072FF]" />,
                title: "Clean UI/UX",
                desc: "Beautiful, intuitive and user-friendly experiences that convert."
              },
              {
                icon: <ClipboardList className="h-6 w-6 text-[#0072FF]" />,
                title: "Transparent Delivery",
                desc: "Agile process with clear communication and regular updates."
              },
              {
                icon: <Headphones className="h-6 w-6 text-[#0072FF]" />,
                title: "Post-Launch Support",
                desc: "24/7 support and maintenance to keep your app ahead."
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
              WHAT OUR CLIENTS SAY
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
                    <p className="text-xs md:text-sm text-slate-400 leading-none">
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
                title: "Retail App",
                desc: "A modern shopping app with personalized recommendations and secure checkout.",
                metric: "+65%",
                label: "Increase in user engagement",
                mockup: (
                  <div className="relative border-[4px] border-slate-900 rounded-[22px] h-[230px] w-[115px] bg-white shadow-lg overflow-hidden shrink-0">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-3 bg-slate-900 rounded-b-sm z-20" />
                    {/* Screen */}
                    <div className="w-full h-full bg-[#f8fafc] flex flex-col pt-4 px-2 pb-1.5 select-none">
                      {/* Top bar */}
                      <div className="flex justify-between items-center px-0.5 mb-1.5">
                        <span className="text-[7px] font-black text-slate-800">Find & buy</span>
                        <Search className="w-2 h-2 text-slate-400" />
                      </div>
                      {/* Search box */}
                      <div className="bg-white rounded-md border border-slate-100 px-1.5 py-0.5 mb-1.5 text-[5px] text-slate-400 flex items-center font-medium">
                        Search items...
                      </div>
                      {/* Promo banner */}
                      <div className="w-full h-14 rounded-md bg-gradient-to-r from-blue-500 to-indigo-650 p-1 flex items-center justify-between mb-1.5">
                        <div className="flex flex-col text-left">
                          <span className="text-[5px] font-extrabold text-blue-100">New arrivals</span>
                          <span className="text-[4px] text-white/90">Get up to 30% off</span>
                        </div>
                        <div className="w-6 h-8 bg-white/10 rounded-sm overflow-hidden flex items-center justify-center border border-white/10">
                          <ShoppingCart className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                      {/* Product grid */}
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="bg-white p-1 rounded-md border border-slate-100 flex flex-col text-left">
                          <div className="h-8 bg-slate-50 rounded mb-0.5 flex items-center justify-center" />
                          <span className="text-[4px] font-bold text-slate-800 truncate">Nike Red</span>
                          <span className="text-[4px] text-[#0072FF] font-black">$120</span>
                        </div>
                        <div className="bg-white p-1 rounded-md border border-slate-100 flex flex-col text-left">
                          <div className="h-8 bg-slate-50 rounded mb-0.5 flex items-center justify-center" />
                          <span className="text-[4px] font-bold text-slate-800 truncate">Adidas Blue</span>
                          <span className="text-[4px] text-[#0072FF] font-black">$140</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                title: "Clinic Booking App",
                desc: "Appointment booking app with calendar, reminders and teleconsultation.",
                metric: "+180%",
                label: "Increase in appointments",
                mockup: (
                  <div className="relative border-[4px] border-slate-900 rounded-[22px] h-[230px] w-[115px] bg-white shadow-lg overflow-hidden shrink-0">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-3 bg-slate-900 rounded-b-sm z-20" />
                    {/* Screen */}
                    <div className="w-full h-full bg-[#f8fafc] flex flex-col pt-4 px-2 pb-1.5 select-none">
                      {/* Top bar */}
                      <div className="flex justify-between items-center px-0.5 mb-1.5">
                        <span className="text-[7px] font-black text-slate-800">DocEase</span>
                        <span className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[5px] text-white font-bold">P</span>
                      </div>
                      {/* Doctor Profile Banner */}
                      <div className="bg-white rounded-md border border-slate-100 p-1 mb-1.5 text-[5px] text-slate-800 flex gap-1.5 items-center">
                        <div className="w-6 h-6 rounded-full bg-slate-205 shrink-0 overflow-hidden flex items-center justify-center border border-slate-100">
                          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=60&h=60&q=80" alt="Dr. Priya Nair" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="font-extrabold text-[5px] leading-tight">Dr. Priya Nair</span>
                          <span className="text-[4px] text-slate-450 leading-none">Founder, CarePlus</span>
                        </div>
                      </div>
                      <span className="text-[5px] font-extrabold text-slate-800 mb-1 text-left">Select time:</span>
                      <div className="grid grid-cols-3 gap-1 mb-1.5">
                        <div className="bg-blue-50 border border-blue-200 text-blue-600 rounded p-0.5 text-[4px] text-center font-bold">09:00 AM</div>
                        <div className="bg-white border border-slate-100 rounded p-0.5 text-[4px] text-center">10:30 AM</div>
                        <div className="bg-white border border-slate-100 rounded p-0.5 text-[4px] text-center">01:00 PM</div>
                      </div>
                      <div className="w-full bg-[#0072FF] text-white text-[5px] font-bold py-1.5 rounded-md text-center mt-auto shadow-sm shadow-blue-500/20">
                        Book Appointment
                      </div>
                    </div>
                  </div>
                )
              },
              {
                title: "Service Marketplace App",
                desc: "On-demand services app connecting customers with trusted service providers.",
                metric: "-40%",
                label: "Reduction in operational time",
                mockup: (
                  <div className="relative border-[4px] border-slate-900 rounded-[22px] h-[230px] w-[115px] bg-slate-950 shadow-lg overflow-hidden shrink-0">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-3 bg-slate-900 rounded-b-sm z-20" />
                    {/* Screen */}
                    <div className="w-full h-full bg-[#081125] flex flex-col pt-4 px-2 pb-1.5 select-none">
                      {/* Top bar */}
                      <div className="flex justify-between items-center px-0.5 mb-1.5">
                        <span className="text-[7px] font-black text-white">TaskHero</span>
                        <span className="w-3.5 h-3.5 rounded-full bg-[#0072FF] flex items-center justify-center text-[5px] text-white font-bold">TH</span>
                      </div>
                      {/* Hero Image Banner */}
                      <div className="w-full h-14 rounded-md bg-gradient-to-r from-blue-900 to-indigo-950 border border-blue-800/40 p-1 flex flex-col justify-center mb-1.5 text-left">
                        <span className="text-[5px] font-extrabold text-white leading-tight">Find Handyman</span>
                        <span className="text-[4px] text-slate-300 mt-0.5">Plumbers & Electricians</span>
                      </div>
                      <span className="text-[5px] font-extrabold text-slate-400 mb-1 text-left">Popular Services:</span>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="bg-[#0f1d3a] p-1.5 rounded-md border border-slate-800/60 flex flex-col items-center justify-center">
                          <span className="text-[4px] font-bold text-white">Plumbing</span>
                        </div>
                        <div className="bg-[#0f1d3a] p-1.5 rounded-md border border-slate-800/60 flex flex-col items-center justify-center">
                          <span className="text-[4px] font-bold text-white">Cleaning</span>
                        </div>
                      </div>
                      <div className="w-full bg-[#0072FF] text-white text-[5px] font-bold py-1.5 rounded-md text-center mt-auto shadow-sm shadow-blue-500/20">
                        Book Service
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
          11. CTA BANNER SECTION (Ready to Build Your Mobile App?)
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

              {/* Radial glow around the phone area */}
              <div className="absolute right-[5%] top-[10%] w-[200px] h-[200px] rounded-full bg-blue-400/20 blur-[50px]" />
            </div>

            {/* Left Content (Title, Subtext, Button stacked) */}
            <div className="relative z-10 flex flex-col items-start text-left max-w-[500px]">
              <h3 className="text-lg md:text-xl font-bold text-white font-poppins mb-1 leading-tight tracking-tight">
                Ready to Build Your Mobile App?
              </h3>
              <p className="text-xs md:text-sm text-blue-100/80 mb-3.5 font-normal max-w-[420px] leading-relaxed">
                Let&apos;s turn your idea into a powerful mobile solution that drives growth.
              </p>
              <button
                onClick={openBooking}
                className="cursor-pointer inline-flex items-center justify-center px-5 py-2 rounded-lg text-[10px] md:text-xs font-bold text-[#002D8C] bg-white hover:bg-slate-50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md flex items-center gap-1.5"
              >
                Book Consultation
                <ArrowRight className="h-3 w-3 text-[#002D8C]" />
              </button>
            </div>

            {/* Right side: Angled Smartphone Mockup with Orbits (Overflowing container) */}
            <div className="relative w-full md:w-[220px] h-[150px] flex items-center justify-center shrink-0 z-20">
              
              {/* Glowing orbits in the background */}
              <div className="absolute inset-[-40px] pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-blue-400/15 rounded-[50%] -rotate-[15deg]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border border-dashed border-blue-500/10 rounded-[50%] rotate-[20deg]" />
              </div>

              {/* Glowing dots along orbits */}
              <div className="absolute top-[10%] right-[10%] w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_6px_2px_rgba(96,165,250,0.6)] animate-pulse" />
              <div className="absolute bottom-[20%] left-[5%] w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_5px_2px_rgba(34,211,238,0.4)] animate-pulse" />

              {/* Angled Phone Container (Floating and slightly taller than the banner itself) */}
              <motion.div 
                className="absolute md:bottom-[-20px] md:top-[-20px] w-[88px] h-[175px] bg-slate-950 border-[3.5px] border-slate-900 rounded-[18px] shadow-2xl overflow-hidden flex flex-col p-1.5 items-center justify-center z-10"
                style={{
                  transform: "rotate(-12deg) skewX(2deg)",
                  boxShadow: "0 15px 35px -5px rgba(0, 0, 0, 0.4), 0 0 25px rgba(0, 114, 255, 0.15)"
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2 bg-slate-900 rounded-b-sm z-20" />
                
                {/* Phone Screen Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a142c] via-[#050a17] to-[#010307] -z-10" />

                {/* X logo (Chevrons) */}
                <div className="relative z-10 flex flex-col items-center justify-center select-none scale-[0.8]">
                  <svg viewBox="0 0 100 100" className="w-[36px] h-[36px]" fill="none">
                    <defs>
                      <linearGradient id="ctaOrangeGrad2" x1="32" y1="28" x2="53" y2="72" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#FF8C00" />
                        <stop offset="100%" stopColor="#FF3300" />
                      </linearGradient>
                      <linearGradient id="ctaBlueGrad2" x1="68" y1="28" x2="47" y2="72" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#00F0FF" />
                        <stop offset="100%" stopColor="#0072FF" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 68 28 L 47 50 L 68 72"
                      stroke="url(#ctaBlueGrad2)"
                      strokeWidth="18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 32 28 L 53 50 L 32 72"
                      stroke="url(#ctaOrangeGrad2)"
                      strokeWidth="18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[6px] font-black uppercase tracking-[0.2em] text-blue-400 mt-1.5">Diginet</span>
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
