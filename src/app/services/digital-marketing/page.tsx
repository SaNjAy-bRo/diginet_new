"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, Check, Star, CheckCircle2, ChevronDown, Plus, 
  Megaphone, Search, Share2, 
  MessageSquare, Compass, Sliders, BarChart3, Users, 
  Mail, Settings2, SlidersHorizontal, Layers, Award,
  Sparkles, ShieldCheck, HelpCircle, ChevronLeft, ChevronRight,
  TrendingUp, CircleDollarSign, ArrowUpRight, CheckCircle,
  Building2, Heart, DollarSign, Home, GraduationCap, Cloud, Settings, Briefcase
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/context/BookingContext";

// Testimonial Data
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
    text: "Diginet's campaign strategy and execution have been instrumental in scaling our revenue. Their team is proactive, transparent and truly cares about results.",
    name: "Sarah Johnson",
    role: "Head of Marketing",
    company: "StyleNova",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 1,
    text: "Our organic traffic and quality leads have grown significantly since partnering with Diginet. Their SEO and content strategy really works.",
    name: "Michael Lee",
    role: "Growth Manager",
    company: "Nexora Tech",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 2,
    text: "Professional team, great communication and outstanding results. Highly recommended!",
    name: "Emily Carter",
    role: "Marketing Director",
    company: "SmileCare",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&h=120&q=80"
  }
];

// FAQ Data
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do you measure campaign success?",
    answer: "We align key performance indicators (KPIs) with your actual business goals. Instead of just tracking clicks or impressions, we measure success based on conversion rates, qualified lead volume, customer acquisition cost (CAC), and return on ad spend (ROAS) directly tied to your sales pipeline."
  },
  {
    question: "Which platforms are best for my business?",
    answer: "The ideal platforms depend entirely on your target audience and industry. For B2B companies, we typically focus on LinkedIn Ads and Google Search/SEO. For B2C and E-commerce brands, we leverage Meta (Facebook & Instagram) Ads, Google Shopping, and TikTok to build engagement and drive direct conversions."
  },
  {
    question: "How long does it take to see results?",
    answer: "Paid marketing campaigns (like Google Ads and Meta Ads) can start driving traffic and leads almost instantly upon deployment. For organic search strategies (SEO), you can expect to see compounding growth, keyword ranking improvements, and sustained organic lead generation within 3 to 6 months."
  },
  {
    question: "Do you offer customized strategies?",
    answer: "Yes, every campaign is custom engineered. We perform a complete discovery audit of your current channels, target demographics, and competitors to compile a tailored marketing roadmap that fits your specific growth objectives and budget constraints."
  }
];

export default function DigitalMarketingPage() {
  const { openBooking } = useBooking();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Auto-scroll testimonials slider every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeTestimonial]);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <main className="w-full bg-white overflow-hidden min-h-screen">
      
      {/* ========================================================
          1. HERO SECTION (Dark background)
          ======================================================== */}
      <section className="relative w-full bg-[#06142D] pt-[130px] pb-16 md:pb-24 overflow-hidden">
        
        {/* Background ambient grids/effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] h-[550px] w-[550px] rounded-full bg-sky-500/10 blur-[130px]" />
          <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.08]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 sm:mb-8 select-none">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-600">Services</span>
            <span className="text-slate-600">/</span>
            <span className="text-sky-400">Digital Marketing</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-5 flex flex-col text-left items-start">
              
              <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-sky-400 mb-3 block">
                Digital Marketing
              </span>

              <h1 className="text-3xl sm:text-[44px] lg:text-[48px] xl:text-[52px] font-black tracking-tight text-white leading-[1.08] mb-5 font-poppins">
                Digital Marketing <br />
                That Drives Real <br />
                Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-500">Growth</span>
              </h1>

              <p className="text-[14px] md:text-[15px] text-slate-400 leading-relaxed mb-8 max-w-[460px]">
                Data-driven strategies, high-performing campaigns and compelling content that attract the right audience, generate quality leads and maximize your ROI.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
                <button
                  onClick={openBooking}
                  className="cursor-pointer inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold text-white bg-cta-blue hover:bg-hover-blue transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-cta-blue/20"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold text-slate-300 border border-slate-700 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-all duration-300"
                >
                  Explore Our Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

            </div>

            {/* Right Hero Graphic: Live Interactive Dashboard Layout */}
            <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center py-6">
              
              {/* Outer container holding Dashboard and Ad Cards side-by-side */}
              <div className="relative w-full max-w-[620px] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* SVG Connecting lines in the background - Desktop only */}
                <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                  <svg className="w-full h-full" viewBox="0 0 620 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Top dotted line from Campaign Overview to Google Ads card */}
                    <path 
                      d="M 320,80 C 370,40 400,20 440,30" 
                      stroke="rgba(56, 189, 248, 0.25)" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4" 
                      fill="none" 
                    />
                    {/* Animated glowing dot along top path */}
                    <circle r="3" fill="#38bdf8">
                      <animateMotion dur="6s" repeatCount="indefinite" path="M 320,80 C 370,40 400,20 440,30" />
                    </circle>

                    {/* Bottom dotted line from Campaign Overview to Meta Ads card */}
                    <path 
                      d="M 320,320 C 370,360 400,380 440,370" 
                      stroke="rgba(56, 189, 248, 0.25)" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4" 
                      fill="none" 
                    />
                    {/* Animated glowing dot along bottom path */}
                    <circle r="3" fill="#38bdf8">
                      <animateMotion dur="6s" repeatCount="indefinite" path="M 320,320 C 370,360 400,380 440,370" />
                    </circle>
                  </svg>
                </div>

                {/* Left Side: Campaign Overview Dashboard (md:col-span-8) */}
                <div className="md:col-span-8 relative z-10 rounded-[28px] border border-slate-700/40 bg-[#071125]/95 shadow-2xl p-4 md:p-5 flex flex-col gap-4">
                  
                  {/* Title Bar */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                    <h3 className="text-xs font-bold text-white tracking-wide">Campaign Overview</h3>
                    <TrendingUp className="h-4 w-4 text-sky-400" />
                  </div>

                  {/* 4 Stats Grid - horizontal row */}
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { label: "Clicks", val: "12,540", pct: "+18.7%" },
                      { label: "Conversions", val: "1,246", pct: "+25.4%" },
                      { label: "Cost / Conv.", val: "$18.45", pct: "+12.3%" },
                      { label: "ROAS", val: "4.6x", pct: "+31.2%" }
                    ].map((stat, idx) => (
                      <div key={idx} className="bg-slate-900/60 border border-slate-850 p-2 rounded-xl flex flex-col justify-between min-h-[64px]">
                        <span className="text-[7.5px] text-slate-500 font-bold uppercase tracking-wider leading-none block truncate">{stat.label}</span>
                        <div className="mt-1">
                          <span className="text-[11px] font-black text-white leading-none block">{stat.val}</span>
                          <span className="text-[7px] font-bold text-emerald-455 mt-1 leading-none inline-block">
                            {stat.pct}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Split Lists: Channels & Recent Campaigns */}
                  <div className="grid grid-cols-2 gap-4 mt-1">
                    
                    {/* Top Channels */}
                    <div className="flex flex-col gap-2">
                      <span className="text-[8px] font-bold uppercase tracking-wider text-slate-500">Top Channels</span>
                      <div className="flex flex-col gap-2">
                        {[
                          { name: "Google Ads", logo: (
                            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24">
                              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.9h6.6c-.28 1.5-.1.3-1.14 2.22l2.76 2.14c1.62-1.5 2.52-3.7 2.52-6.19z"/>
                              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-2.76-2.14c-1.05.7-2.38 1.14-3.8 1.14-2.92 0-5.4-1.98-6.28-4.64L4.25 18.25C6.26 21.69 9.87 24 12 24z"/>
                              <path fill="#FBBC05" d="M5.72 15.45c-.23-.7-.36-1.45-.36-2.23s.13-1.53.36-2.23L4.25 8.79C3.42 10.39 3 12.16 3 14s.42 3.61 1.25 5.21l2.47-1.92-.04-.04c-.06-.12-.32-.82-.04-1.8z"/>
                              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 9.87 0 6.26 2.31 4.25 5.75l2.47 1.92c.88-2.66 3.36-4.64 6.28-4.64z"/>
                            </svg>
                          ) },
                          { name: "Meta Ads", logo: (
                            <svg className="h-3.5 w-3.5 fill-[#1877F2]" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          ) },
                          { name: "LinkedIn Ads", logo: (
                            <svg className="h-3.5 w-3.5 fill-[#0A66C2]" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          ) },
                          { name: "Organic Search", logo: (
                            <Search className="h-3.5 w-3.5 text-sky-400" />
                          ) }
                        ].map((c, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[9px] text-slate-300">
                            <div className="h-6 w-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                              {c.logo}
                            </div>
                            <span className="font-semibold">{c.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Campaigns */}
                    <div className="flex flex-col gap-2">
                      <span className="text-[8px] font-bold uppercase tracking-wider text-slate-500">Recent Campaigns</span>
                      <div className="flex flex-col gap-1.5">
                        {[
                          { name: "Summer Sale - Google Ads", status: "Active" },
                          { name: "Lead Gen - Meta Ads", status: "Active" },
                          { name: "Brand Awareness - LinkedIn", status: "Active" }
                        ].map((camp, idx) => (
                          <div key={idx} className="bg-slate-900/40 border border-slate-800/40 p-1.5 rounded-lg flex items-center justify-between text-[8px]">
                            <span className="text-slate-300 truncate pr-2 font-medium max-w-[85px]">{camp.name}</span>
                            <span className="font-bold text-emerald-450 flex items-center gap-1">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              {camp.status}
                            </span>
                          </div>
                        ))}
                      </div>
                      <button className="w-full mt-1.5 py-2 rounded-lg bg-[#1877F2] text-white font-bold text-[8.5px] hover:bg-[#1877F2]/90 transition-all shadow-md">
                        View All Campaigns
                      </button>
                    </div>

                  </div>

                  {/* Platforms Overlapping Pill - floated at bottom of Dashboard */}
                  <div className="absolute left-[8%] md:left-[12%] bottom-[-18px] z-30 flex items-center gap-3 bg-white border border-slate-100 py-1.5 px-4 rounded-full shadow-xl">
                    <span className="text-[6.5px] font-extrabold uppercase text-slate-400 tracking-wider pr-1">Platforms</span>
                    <div className="flex gap-2 items-center">
                      {/* Google */}
                      <span className="h-4.5 w-4.5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-150">
                        <svg className="h-2.5 w-2.5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.9h6.6c-.28 1.5-.1.3-1.14 2.22l2.76 2.14c1.62-1.5 2.52-3.7 2.52-6.19z"/>
                          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-2.76-2.14c-1.05.7-2.38 1.14-3.8 1.14-2.92 0-5.4-1.98-6.28-4.64L4.25 18.25C6.26 21.69 9.87 24 12 24z"/>
                          <path fill="#FBBC05" d="M5.72 15.45c-.23-.7-.36-1.45-.36-2.23s.13-1.53.36-2.23L4.25 8.79C3.42 10.39 3 12.16 3 14s.42 3.61 1.25 5.21l2.47-1.92-.04-.04c-.06-.12-.32-.82-.04-1.8z"/>
                          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 9.87 0 6.26 2.31 4.25 5.75l2.47 1.92c.88-2.66 3.36-4.64 6.28-4.64z"/>
                        </svg>
                      </span>
                      {/* Meta */}
                      <span className="h-4.5 w-4.5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-150">
                        <svg className="h-2.5 w-2.5 fill-[#1877F2]" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </span>
                      {/* LinkedIn */}
                      <span className="h-4.5 w-4.5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-150">
                        <svg className="h-2.5 w-2.5 fill-[#0A66C2]" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </span>
                      {/* YouTube */}
                      <span className="h-4.5 w-4.5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-150">
                        <svg className="h-2.5 w-2.5 fill-[#FF0000]" viewBox="0 0 24 24">
                          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.483 20.455 12 20.455 12 20.455s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </span>
                      {/* TikTok */}
                      <span className="h-4.5 w-4.5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-150">
                        <svg className="h-2.5 w-2.5 fill-black" viewBox="0 0 24 24">
                          <path d="M12.53.086c.3-.08.62-.086.92-.086 1.48 0 2.91.44 4.12 1.25.13-.96.53-1.85 1.13-2.6-.07.35-.1.71-.1 1.07 0 2.05 1.13 3.86 2.8 4.84v3.16c-1.37-.1-2.65-.67-3.64-1.63v6.78c0 4.96-4.04 9-9 9s-9-4.04-9-9 4.04-9 9-9c.32 0 .63.02.94.05v3.23c-.31-.05-.62-.08-.94-.08-3.18 0-5.77 2.59-5.77 5.77s2.59 5.77 5.77 5.77 5.77-2.59 5.77-5.77V.086z"/>
                        </svg>
                      </span>
                      {/* Plus button */}
                      <span className="h-4.5 w-4.5 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-500 text-[10px] font-bold cursor-pointer hover:bg-slate-200 transition-colors">
                        +
                      </span>
                    </div>
                  </div>

                </div>

                {/* Right Side: Stacked Ad Mockups (md:col-span-4) */}
                <div className="md:col-span-4 flex flex-col gap-4 relative z-10 w-full md:-ml-8">
                  
                  {/* Google Ads sneaker card (top) */}
                  <motion.div
                    className="w-full rounded-2xl border border-slate-200/80 shadow-xl p-3 bg-white flex flex-col gap-2 relative overflow-hidden"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex justify-between items-center text-[7px] text-slate-550 font-extrabold uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                        Google Ads
                      </span>
                      <span>Sponsored</span>
                    </div>

                    {/* Sneaker Image asset */}
                    <div className="h-20 w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-100 relative">
                      <img 
                        src="/images/google_shoe_ad.png" 
                        alt="Sneaker Product Ad"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-black text-slate-900 leading-tight">Step Ahead. Stay Ahead.</span>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[7.5px] text-slate-400 font-semibold truncate max-w-[80px]">Shop Premium Sneakers</span>
                        <button className="px-2.5 py-1 rounded bg-black text-white font-extrabold text-[7px] hover:bg-slate-800 transition-colors uppercase tracking-wider">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Meta Ad Lifestyle Card (bottom) */}
                  <motion.div
                    className="w-full rounded-2xl border border-slate-200/80 shadow-xl p-3 bg-white flex flex-col gap-2 relative overflow-hidden"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="flex justify-between items-center text-[7px] text-slate-550 font-extrabold uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                        Meta Ad
                      </span>
                      <span>Sponsored</span>
                    </div>

                    {/* Lifestyle Image asset */}
                    <div className="h-20 w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-100 relative">
                      <img 
                        src="/images/meta_person_ad.png" 
                        alt="Lifestyle Apparel Ad" 
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-black text-slate-900 leading-tight">Elevate Your Everyday Style.</span>
                      <div className="flex justify-between items-center mt-1 pb-1.5 border-b border-slate-100">
                        <span className="text-[7.5px] text-slate-400 font-semibold truncate max-w-[80px]">New Collections</span>
                        <button className="px-2.5 py-1 rounded bg-black text-white font-extrabold text-[7px] hover:bg-slate-800 transition-colors uppercase tracking-wider">
                          Shop Now
                        </button>
                      </div>
                      
                      {/* Social Reaction footer */}
                      <div className="flex justify-between items-center text-[7.5px] text-slate-400 font-semibold pt-0.5">
                        <div className="flex items-center gap-1">
                          <span className="flex items-center -space-x-1">
                            <span className="h-3.5 w-3.5 rounded-full bg-blue-500 flex items-center justify-center text-white border border-white text-[6px]">👍</span>
                            <span className="h-3.5 w-3.5 rounded-full bg-red-500 flex items-center justify-center text-white border border-white text-[6px]">❤️</span>
                          </span>
                          <span>123</span>
                        </div>
                        <span>23 Comments</span>
                      </div>
                    </div>
                  </motion.div>

                </div>

              </div>

            </div>

          </div>

          {/* Underneath: 4 Value Pillars at the bottom of the section */}
          <div className="mt-16 pt-8 border-t border-slate-800/40 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-[1100px]">
            {[
              { title: "ROI-Focused", desc: "Every strategy aligned to your bottom line.", icon: <TrendingUp className="h-4 w-4 text-sky-400 stroke-[2.5px]" /> },
              { title: "Data-Driven", desc: "Decisions powered by real-time insights.", icon: <BarChart3 className="h-4 w-4 text-sky-400 stroke-[2.5px]" /> },
              { title: "Transparent", desc: "Clear reporting and complete visibility.", icon: <CheckCircle className="h-4 w-4 text-sky-400 stroke-[2.5px]" /> },
              { title: "Scalable", desc: "Built to grow with your business.", icon: <SlidersHorizontal className="h-4 w-4 text-sky-400 stroke-[2.5px]" /> }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <div className="h-8 w-8 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-bold text-white">{item.title}</span>
                  <span className="text-xs text-slate-400 mt-1.5 leading-normal">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          2. LOGOS MARQUEE TICKER (Light background)
          ======================================================== */}
      <section className="relative w-full py-7 bg-slate-50/70 border-y border-slate-100 overflow-hidden">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes serviceMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .service-marquee-track {
            display: flex;
            width: max-content;
            animation: serviceMarquee 25s linear infinite;
          }
        `}} />
        
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 relative">
          
          <div className="shrink-0 text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400 select-none">
              Trusted by Growing Businesses
            </span>
          </div>

          <div className="relative overflow-hidden flex-1 py-1">
            <div className="service-marquee-track">
              
              {/* Set 1 */}
              <div className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16 shrink-0">
                {[
                  { name: "apex", sub: "SYSTEMS" },
                  { name: "NEXORA", sub: "TECHNOLOGIES" },
                  { name: "BrightLine", sub: "SYSTEMS" },
                  { name: "CloudWave", sub: "SOLUTIONS" },
                  { name: "PIVOT", sub: "DIGITAL" }
                ].map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-400 font-poppins font-extrabold text-sm md:text-base tracking-tight hover:text-slate-800 transition-colors select-none cursor-default">
                    <span className="h-2 w-2 rounded-full bg-accent-blue/40" />
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
                  { name: "apex", sub: "SYSTEMS" },
                  { name: "NEXORA", sub: "TECHNOLOGIES" },
                  { name: "BrightLine", sub: "SYSTEMS" },
                  { name: "CloudWave", sub: "SOLUTIONS" },
                  { name: "PIVOT", sub: "DIGITAL" }
                ].map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-400 font-poppins font-extrabold text-sm md:text-base tracking-tight hover:text-slate-800 transition-colors select-none cursor-default">
                    <span className="h-2 w-2 rounded-full bg-accent-blue/40" />
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
          3. OUR SERVICES SECTION
          ======================================================== */}
      <section className="relative w-full py-16 md:py-20 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-accent-blue mb-2.5">
              Our Digital Marketing Services
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight font-poppins">
              Integrated strategies across channels to attract, engage and convert.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Megaphone className="h-6 w-6 text-sky-500" />,
                title: "Performance Marketing",
                desc: "High-impact paid campaigns across Google, Meta, LinkedIn & more to generate qualified leads and sales."
              },
              {
                icon: <Search className="h-6 w-6 text-sky-500" />,
                title: "SEO & Organic Growth",
                desc: "Improve search rankings, drive organic traffic and build long-term authority for sustainable growth."
              },
              {
                icon: <Share2 className="h-6 w-6 text-sky-500" />,
                title: "Social Media & Content",
                desc: "Engage your audience with compelling content and social strategies that build brand loyalty."
              }
            ].map((srv, idx) => (
              <div key={idx} className="group bg-white border border-slate-200/60 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-sky-200 transition-all duration-300">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                    {srv.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 font-poppins mb-3">{srv.title}</h3>
                  <p className="text-xs md:text-sm text-slate-650 leading-relaxed font-normal mb-6">{srv.desc}</p>
                </div>
                <button
                  onClick={openBooking}
                  className="inline-flex items-center text-xs font-bold text-sky-500 hover:text-sky-600 transition-colors group/link mt-auto"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          4. DIGITAL MARKETING CAPABILITIES SECTION
          ======================================================== */}
      <section className="relative w-full py-16 md:py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-accent-blue mb-2.5">
              Our Digital Marketing Capabilities
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight font-poppins">
              End-to-end solutions to grow your brand across the digital landscape.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <span className="text-[10px] font-black text-sky-500">G</span>,
                title: "Google Ads",
                desc: "Search, Display, Shopping & Performance Max campaigns that deliver measurable results."
              },
              {
                icon: <span className="text-[10px] font-black text-sky-500">∞</span>,
                title: "Meta Ads",
                desc: "Targeted Facebook & Instagram campaigns that drive leads, sales and brand awareness."
              },
              {
                icon: <Search className="h-3.5 w-3.5 text-sky-500" />,
                title: "SEO",
                desc: "Technical SEO, on-page, off-page and local SEO to rank higher and drive organic traffic."
              },
              {
                icon: <Users className="h-3.5 w-3.5 text-sky-500" />,
                title: "Social Media Management",
                desc: "Strategy, content, posting and community management across all major platforms."
              },
              {
                icon: <Sparkles className="h-3.5 w-3.5 text-sky-500" />,
                title: "Content Marketing",
                desc: "Blogs, guides, videos and more to attract, educate and convert your audience."
              },
              {
                icon: <Layers className="h-3.5 w-3.5 text-sky-500" />,
                title: "Landing Pages & CRO",
                desc: "High-converting landing pages and CRO to turn visitors into customers."
              },
              {
                icon: <Mail className="h-3.5 w-3.5 text-sky-500" />,
                title: "Email Marketing",
                desc: "Nurture leads and boost retention with targeted email campaigns that convert."
              },
              {
                icon: <BarChart3 className="h-3.5 w-3.5 text-sky-500" />,
                title: "Analytics & Reporting",
                desc: "Real-time dashboards and actionable insights to track performance and ROI."
              }
            ].map((cap, idx) => (
              <div key={idx} className="bg-white border border-slate-200/50 p-6 rounded-xl shadow-sm flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-sky-500/10 flex items-center justify-center shrink-0">
                  {cap.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-slate-900 font-poppins">{cap.title}</h3>
                  <p className="text-[11px] md:text-[12px] text-slate-500 leading-relaxed font-normal mt-1.5">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          5. PROVEN PROCESS SECTION (Dark background block)
          ======================================================== */}
      <section id="process" className="relative w-full py-16 md:py-20 bg-[#06142D] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] h-[450px] w-[450px] rounded-full bg-sky-500/5 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[450px] w-[450px] rounded-full bg-blue-600/5 blur-[120px]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center mb-14 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-sky-400 mb-2.5">
              Our Proven Process
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight font-poppins">
              A collaborative approach that delivers consistent, measurable growth.
            </h2>
          </div>

          <div className="relative">
            {/* Connecting Dotted Line - desktop only */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 border-t border-dashed border-slate-700/60 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative z-10">
              {[
                { step: "01", title: "Discover & Research", desc: "We understand your business, audience, goals and current performance." },
                { step: "02", title: "Strategy & Planning", desc: "We create a data-driven strategy with the right channels and campaign roadmap." },
                { step: "03", title: "Execute & Optimize", desc: "We launch, monitor and optimize campaigns for maximum performance." },
                { step: "04", title: "Measure & Scale", desc: "We analyze results, share insights and scale what works for sustainable growth." }
              ].map((proc, idx) => (
                <div key={idx} className="flex flex-col items-start text-left group">
                  <div className="h-14 w-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 text-sky-400 font-extrabold text-sm tracking-wide z-10 transition-colors group-hover:border-sky-500 bg-gradient-to-br from-slate-900 to-slate-950">
                    {proc.step}
                  </div>
                  <h3 className="text-[14px] md:text-[15px] font-bold text-white font-poppins mb-2">{proc.title}</h3>
                  <p className="text-[11px] md:text-xs text-slate-450 leading-relaxed font-normal">{proc.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          6. WHY CHOOSE & INDUSTRIES (Split layout)
          ======================================================== */}
      <section className="relative w-full py-16 md:py-20 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Why Choose Us */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-accent-blue mb-2.5">
                Why Choose Diginet Solutions?
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight font-poppins mb-8">
                Results-focused marketing backed by data.
              </h2>

              <div className="flex flex-col gap-6 w-full">
                {[
                  { title: "Integrated Expertise", desc: "Digital marketing backed by technology and data." },
                  { title: "ROI-Driven Approach", desc: "Every decision is made to maximize your returns." },
                  { title: "Transparent & Proactive", desc: "Clear communication and regular performance updates." },
                  { title: "Scalable & Flexible", desc: "Solutions that grow with your business needs." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="h-6 w-6 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 text-sky-500 mt-0.5">
                      <Check className="h-3.5 w-3.5 stroke-[2.5px]" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-[14px] md:text-[15px] font-bold text-slate-950 font-poppins leading-tight">{item.title}</h3>
                      <p className="text-xs md:text-sm text-slate-500 leading-normal mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Industries We Serve */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-accent-blue mb-2.5">
                Industries We Serve
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight font-poppins mb-8">
                Tailored marketing solutions for every industry.
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                {[
                  { icon: <CircleDollarSign className="w-5 h-5" />, label: "E-commerce" },
                  { icon: <Heart className="w-5 h-5" />, label: "Healthcare" },
                  { icon: <DollarSign className="w-5 h-5" />, label: "Finance" },
                  { icon: <Home className="w-5 h-5" />, label: "Real Estate" },
                  { icon: <GraduationCap className="w-5 h-5" />, label: "Education" },
                  { icon: <Cloud className="w-5 h-5" />, label: "SaaS & Tech" },
                  { icon: <Settings className="w-5 h-5" />, label: "Manufacturing" },
                  { icon: <Briefcase className="w-5 h-5" />, label: "Professional Services" }
                ].map((ind, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200/40 p-4 rounded-xl flex flex-col items-center justify-center text-center gap-3 hover:bg-sky-50/20 hover:border-sky-200/50 transition-all duration-300 min-h-[96px]">
                    <div className="text-sky-500">{ind.icon}</div>
                    <span className="text-[11px] font-bold text-slate-900 font-poppins leading-tight">{ind.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          7. REAL RESULTS (Case Studies) SECTION
          ======================================================== */}
      <section className="relative w-full py-16 md:py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-accent-blue mb-2.5">
              Real Results. Real Impact.
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight font-poppins">
              A few examples of how we help businesses grow.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                tag: "E-commerce",
                title: "Fashion Retail Brand",
                desc: "Increased online sales with targeted performance marketing campaigns.",
                img: "/images/case_marketing.png",
                metrics: [
                  { label: "Revenue Growth", val: "+152%" },
                  { label: "ROAS", val: "+87%" },
                  { label: "CPA Reduction", val: "-31%" }
                ]
              },
              {
                tag: "SaaS",
                title: "B2B SaaS Company",
                desc: "Generated high-quality leads and improved pipeline with multi-channel campaigns.",
                img: "/images/case_cloud.png",
                metrics: [
                  { label: "Qualified Leads", val: "+214%" },
                  { label: "Website Traffic", val: "+65%" },
                  { label: "Demo Bookings", val: "+42%" }
                ]
              },
              {
                tag: "Healthcare",
                title: "Dental Clinic Network",
                desc: "Grew local visibility and patient bookings through SEO & Local Ads.",
                img: "/images/case_platform.png",
                metrics: [
                  { label: "Organic Traffic", val: "+178%" },
                  { label: "Local Leads", val: "+55%" },
                  { label: "Appointment Bookings", val: "+40%" }
                ]
              }
            ].map((cs, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-sky-200 transition-all duration-300">
                <div>
                  {/* Case Study Image Wrapper */}
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                    <img src={cs.img} alt={cs.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                    <span className="absolute top-3 left-3 bg-[#06142D] border border-white/10 text-[9px] font-bold uppercase tracking-wider text-sky-400 py-1 px-2.5 rounded-full backdrop-blur-sm shadow">
                      {cs.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-7">
                    <h3 className="text-[16px] font-bold text-slate-950 font-poppins mb-2">{cs.title}</h3>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal mb-6">{cs.desc}</p>
                    
                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
                      {cs.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex flex-col text-left">
                          <span className="text-[14px] md:text-[15px] font-black text-sky-500 leading-none">{m.val}</span>
                          <span className="text-[8px] text-slate-400 uppercase font-semibold tracking-wider mt-1 leading-normal">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 md:px-7 pb-6 pt-1">
                  <button
                    onClick={openBooking}
                    className="inline-flex items-center text-xs font-bold text-sky-500 hover:text-sky-600 transition-colors group/cs"
                  >
                    View Case Study
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/cs:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          8. TESTIMONIALS SECTION (Dark background)
          ======================================================== */}
      <section className="relative w-full py-16 md:py-20 bg-[#06142D] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] h-[450px] w-[450px] rounded-full bg-sky-500/5 blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] h-[450px] w-[450px] rounded-full bg-blue-600/5 blur-[120px]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-sky-400 mb-2.5">
              What Our Clients Say
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight font-poppins">
              Trusted by businesses that scale
            </h2>
          </div>

          {/* Testimonial slider / carousel */}
          <div className="relative w-full max-w-[900px] mx-auto overflow-hidden py-4">
            
            <motion.div 
              className="flex"
              style={{ width: `${testimonials.length * 100}%` }}
              animate={{ x: `-${activeTestimonial * (100 / testimonials.length)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="px-3 md:px-6 shrink-0" style={{ width: `${100 / testimonials.length}%` }}>
                  <div className="bg-[#0a1628]/85 border border-slate-800/40 p-8 rounded-2xl flex flex-col justify-between shadow-2xl relative min-h-[200px]">
                    <div>
                      {/* Quote Mark */}
                      <span className="text-4xl font-serif text-sky-500 font-black leading-none block mb-1">
                        “
                      </span>
                      <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-normal">
                        {t.text}
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-slate-800/60">
                      
                      {/* User Info */}
                      <div className="flex items-center gap-3">
                        <img src={t.avatarUrl} alt={t.name} className="h-10 w-10 rounded-full object-cover shrink-0 bg-slate-900 border border-slate-800" />
                        <div className="flex flex-col">
                          <h4 className="font-bold text-white text-xs md:text-sm font-poppins leading-tight">{t.name}</h4>
                          <p className="text-[10px] text-slate-400 leading-normal mt-0.5">{t.role}, {t.company}</p>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-current stroke-current" />
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Slider Dots */}
            <div className="flex gap-2 justify-center mt-8 relative z-20">
              {testimonials.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTestimonial(t.id)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === t.id ? "w-5 bg-sky-500" : "w-2 bg-slate-700"
                  }`}
                  aria-label={`Go to slide ${t.id + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          9. FAQS & CTA BANNER (Split layout)
          ======================================================= */}
      <section className="relative w-full py-16 md:py-20 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: FAQs Accordion */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-accent-blue mb-2.5">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight font-poppins mb-8">
                Got questions? We have answers.
              </h2>

              <div className="w-full flex flex-col gap-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="border border-slate-200/60 rounded-xl overflow-hidden shadow-sm transition-all duration-200">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-xs md:text-sm text-slate-950 font-poppins bg-slate-50 hover:bg-slate-100/50 transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`h-4 w-4 text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-sky-500" : ""}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white"
                          >
                            <p className="px-5 pb-5 pt-3 text-xs md:text-sm text-slate-500 leading-relaxed border-t border-slate-100/80 font-normal">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <Link href="/contact" className="inline-flex items-center text-xs font-bold text-sky-500 hover:text-sky-600 transition-colors mt-6 group">
                View all FAQs
                <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right Column: CTA Banner Card */}
            <div className="lg:col-span-7 w-full h-full">
              
              {/* Blue Gradient Container */}
              <div className="w-full bg-gradient-to-br from-[#0EA5E9] to-[#2563EB] rounded-[24px] shadow-xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between min-h-[360px]">
                
                {/* Background Rocket Line Illustration overlay */}
                <div className="absolute right-0 bottom-0 top-0 w-[55%] opacity-[0.09] pointer-events-none z-0 overflow-hidden flex items-end justify-end">
                  <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M50 10 C 65 30, 65 60, 50 90 C 35 60, 35 30, 50 10 Z" />
                    <path d="M50 20 L60 40 L40 40 Z" />
                    <path d="M50 40 L50 90" />
                    <path d="M38 55 L28 65 L28 85 L38 85 Z" />
                    <path d="M62 55 L72 65 L72 85 L62 85 Z" />
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col items-start text-left">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/80 mb-3 block">
                    Ready to grow?
                  </span>
                  
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight font-poppins max-w-[420px] mb-4">
                    Let&apos;s Build a Digital Marketing Strategy That Delivers Results
                  </h3>

                  <p className="text-[13px] md:text-[14px] text-white/85 leading-relaxed max-w-[440px] mb-8 font-normal">
                    Get a free consultation and discover how we can help you attract more customers and grow your business.
                  </p>
                </div>

                <div className="relative z-10 pt-4">
                  <button
                    onClick={openBooking}
                    className="cursor-pointer inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold text-[#0E52C9] bg-white hover:bg-slate-50 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-black/10"
                  >
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
