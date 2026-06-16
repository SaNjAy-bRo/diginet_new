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
  Building2, Heart, DollarSign, Home, GraduationCap, Cloud, Settings, Briefcase,
  Target, ThumbsUp, Pen, Monitor
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
  },
  {
    id: 3,
    text: "The lead quality and volume have surpassed all our targets since partnering with Diginet. Their analytics dashboard makes tracking performance simple.",
    name: "David Chen",
    role: "VP of Growth",
    company: "Finverge",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 4,
    text: "Diginet transformed our online presence. Our cost per acquisition dropped by 40%, and our overall sales have consistently increased month-over-month.",
    name: "Amanda Ross",
    role: "Founder",
    company: "Bloom & Co",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 5,
    text: "Exceptional strategy, responsive communication, and stellar execution. They operate as an extension of our in-house team rather than just an agency.",
    name: "Marcus Brody",
    role: "Director of Sales",
    company: "Apex Solutions",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80"
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
    answer: "Paid marketing campaigns (like Google Ads and Meta Ads) can start driving traffic and leads almost instantly upon deployment. For organic search strategies (SEO), you can expect to see compounding growth, ranking improvements, and sustained organic lead generation within 3 to 6 months."
  },
  {
    question: "Do you offer customized strategies?",
    answer: "Yes, every campaign is custom engineered. We perform a complete discovery audit of your current channels, target demographics, and competitors to compile a tailored marketing roadmap that fits your specific growth objectives and budget constraints."
  }
];

export default function DigitalMarketingPage() {
  const { openBooking } = useBooking();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Responsive visible cards listener
  useEffect(() => {
    const handleResize = () => {
      let cards = 1;
      if (window.innerWidth >= 1024) {
        cards = 3;
      } else if (window.innerWidth >= 640) {
        cards = 2;
      }
      setVisibleCards(cards);
      
      // Clamp active index to the new maxIndex
      const maxIdx = testimonials.length - cards;
      setActiveTestimonial((prev) => Math.min(prev, maxIdx));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll testimonials slider
  useEffect(() => {
    const maxIndex = testimonials.length - visibleCards;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [visibleCards]);

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
                  className="cursor-pointer inline-flex items-center justify-center px-7 py-3 rounded-xl text-sm font-semibold text-white bg-cta-blue hover:bg-hover-blue transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-cta-blue/20"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-xl text-sm font-semibold text-slate-300 border border-slate-700 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-all duration-300"
                >
                  Explore Our Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

            </div>

            {/* Right Hero Graphic: Live Interactive Dashboard Layout */}
            <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center py-6">
              
              {/* Outer container holding Dashboard and Ad Cards side-by-side */}
              <div className="relative w-full max-w-[720px] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* SVG Connecting lines in the background - Desktop only */}
                <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                  <svg className="w-full h-full" viewBox="0 0 720 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Top dotted line from Campaign Overview to Google Ads card */}
                    <path 
                      d="M 350,80 C 390,30 430,20 470,30" 
                      stroke="rgba(56, 189, 248, 0.25)" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4" 
                      fill="none" 
                    />
                    {/* Animated glowing dot along top path */}
                    <circle r="3" fill="#38bdf8">
                      <animateMotion dur="6s" repeatCount="indefinite" path="M 350,80 C 390,30 430,20 470,30" />
                    </circle>

                    {/* Bottom dotted line from Campaign Overview to Meta Ads card */}
                    <path 
                      d="M 350,320 C 390,370 430,380 470,370" 
                      stroke="rgba(56, 189, 248, 0.25)" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4" 
                      fill="none" 
                    />
                    {/* Animated glowing dot along bottom path */}
                    <circle r="3" fill="#38bdf8">
                      <animateMotion dur="6s" repeatCount="indefinite" path="M 350,320 C 390,370 430,380 470,370" />
                    </circle>
                  </svg>
                </div>

                {/* Left Side: Campaign Overview Dashboard (md:col-span-7) */}
                <div className="md:col-span-7 relative z-10 rounded-[28px] border border-slate-700/40 bg-[#071125]/95 shadow-2xl p-4 md:p-5 flex flex-col gap-4">
                  
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
                      { label: "Cost / Conv.", val: "4.6x", pct: "+31.2%" }
                    ].map((stat, idx) => (
                      <div key={idx} className="bg-slate-900/60 border border-slate-850 p-2 rounded-xl flex flex-col justify-between min-h-[64px]">
                        <span className="text-[8.5px] text-slate-500 font-bold uppercase tracking-wider leading-none block truncate">{stat.label}</span>
                        <div className="mt-1">
                          <span className="text-[13px] font-black text-white leading-none block">{stat.val}</span>
                          <span className="text-[8.5px] font-bold text-emerald-455 mt-1 leading-none inline-block">
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
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z"/>
                            </svg>
                          ) },
                          { name: "Organic Search", logo: (
                            <Search className="h-3.5 w-3.5 text-sky-400" />
                          ) }
                        ].map((c, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[10px] text-slate-300">
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
                          <div key={idx} className="bg-slate-900/40 border border-slate-800/40 p-1.5 rounded-lg flex items-center justify-between text-[10px]">
                            <span className="text-slate-300 truncate pr-2 font-medium max-w-[110px]">{camp.name}</span>
                            <span className="font-bold text-emerald-455 flex items-center gap-1">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              {camp.status}
                            </span>
                          </div>
                        ))}
                      </div>
                      <button className="w-full mt-1.5 py-2 rounded-lg bg-[#1877F2] text-white font-bold text-[9.5px] hover:bg-[#1877F2]/90 transition-all shadow-md">
                        View All Campaigns
                      </button>
                    </div>

                  </div>

                  {/* Platforms Overlapping Pill - floated at bottom of Dashboard */}
                  <div className="absolute left-[6%] md:left-[10%] bottom-[-22px] z-30 flex items-center gap-4 bg-white border border-slate-100/90 py-2 px-5 rounded-full shadow-2xl">
                    <span className="text-[8.5px] font-extrabold uppercase text-slate-400 tracking-wider pr-1">Platforms</span>
                    <div className="flex gap-2.5 items-center">
                      {/* Google */}
                      <span className="h-7 w-7 rounded-full bg-slate-50 flex items-center justify-center border border-slate-150/80 shadow-sm">
                        <svg className="h-4 w-4" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.9h6.6c-.28 1.5-.1.3-1.14 2.22l2.76 2.14c1.62-1.5 2.52-3.7 2.52-6.19z"/>
                          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-2.76-2.14c-1.05.7-2.38 1.14-3.8 1.14-2.92 0-5.4-1.98-6.28-4.64L4.25 18.25C6.26 21.69 9.87 24 12 24z"/>
                          <path fill="#FBBC05" d="M5.72 15.45c-.23-.7-.36-1.45-.36-2.23s.13-1.53.36-2.23L4.25 8.79C3.42 10.39 3 12.16 3 14s.42 3.61 1.25 5.21l2.47-1.92-.04-.04c-.06-.12-.32-.82-.04-1.8z"/>
                          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 9.87 0 6.26 2.31 4.25 5.75l2.47 1.92c.88-2.66 3.36-4.64 6.28-4.64z"/>
                        </svg>
                      </span>
                      {/* Meta */}
                      <span className="h-7 w-7 rounded-full bg-slate-50 flex items-center justify-center border border-slate-150/80 shadow-sm">
                        <svg className="h-4 w-4 fill-[#1877F2]" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </span>
                      {/* LinkedIn */}
                      <span className="h-7 w-7 rounded-full bg-slate-50 flex items-center justify-center border border-slate-150/80 shadow-sm">
                        <svg className="h-4 w-4 fill-[#0A66C2]" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z"/>
                        </svg>
                      </span>
                      {/* YouTube */}
                      <span className="h-7 w-7 rounded-full bg-slate-50 flex items-center justify-center border border-slate-150/80 shadow-sm">
                        <svg className="h-4 w-4 fill-[#FF0000]" viewBox="0 0 24 24">
                          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.483 20.455 12 20.455 12 20.455s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </span>
                      {/* TikTok */}
                      <span className="h-7 w-7 rounded-full bg-slate-50 flex items-center justify-center border border-slate-150/80 shadow-sm">
                        <svg className="h-3.5 w-3.5 fill-black" viewBox="0 0 24 24">
                          <path d="M12.53.086c.3-.08.62-.086.92-.086 1.48 0 2.91.44 4.12 1.25.13-.96.53-1.85 1.13-2.6-.07.35-.1.71-.1 1.07 0 2.05 1.13 3.86 2.8 4.84v3.16c-1.37-.1-2.65-.67-3.64-1.63v6.78c0 4.96-4.04 9-9 9s-9-4.04-9-9 4.04-9 9-9c.32 0 .63.02.94.05v3.23c-.31-.05-.62-.08-.94-.08-3.18 0-5.77 2.59-5.77 5.77s2.59 5.77 5.77 5.77 5.77-2.59 5.77-5.77V.086z"/>
                        </svg>
                      </span>
                      {/* Plus button */}
                      <span className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-500 text-xs font-bold cursor-pointer hover:bg-slate-200 transition-colors shadow-sm">
                        +
                      </span>
                    </div>
                  </div>

                </div>

                {/* Right Side: Stacked Ad Mockups (md:col-span-5) */}
                <div className="md:col-span-5 flex flex-col gap-4 relative z-10 w-full md:-ml-4">
                  
                  {/* Google Ads sneaker card (top) */}
                  <motion.div
                    className="w-full rounded-2xl border border-slate-200/80 shadow-xl p-3 bg-white flex flex-col gap-2 relative overflow-hidden"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex justify-between items-center text-[9px] text-slate-400 font-bold">
                      <span className="flex items-center gap-1 text-slate-850">
                        {/* Google logo */}
                        <svg className="h-4 w-4" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.9h6.6c-.28 1.5-.1.3-1.14 2.22l2.76 2.14c1.62-1.5 2.52-3.7 2.52-6.19z"/>
                          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-2.76-2.14c-1.05.7-2.38 1.14-3.8 1.14-2.92 0-5.4-1.98-6.28-4.64L4.25 18.25C6.26 21.69 9.87 24 12 24z"/>
                          <path fill="#FBBC05" d="M5.72 15.45c-.23-.7-.36-1.45-.36-2.23s.13-1.53.36-2.23L4.25 8.79C3.42 10.39 3 12.16 3 14s.42 3.61 1.25 5.21l2.47-1.92-.04-.04c-.06-.12-.32-.82-.04-1.8z"/>
                          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 9.87 0 6.26 2.31 4.25 5.75l2.47 1.92c.88-2.66 3.36-4.64 6.28-4.64z"/>
                        </svg>
                        <span className="text-[9px] font-bold text-slate-700">Google Ads</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-12 gap-2 items-center">
                      <div className="col-span-7 flex flex-col items-start gap-1">
                        <span className="text-[13px] md:text-[14px] font-extrabold text-slate-900 leading-tight">
                          Step Ahead.<br />
                          Stay Ahead.
                        </span>
                        <button className="mt-1 px-3 py-1 rounded-md bg-[#071125] text-white font-extrabold text-[8.5px] uppercase tracking-wider hover:bg-black transition-colors">
                          Shop Now
                        </button>
                      </div>
                      <div className="col-span-5 h-[72px] w-full rounded-lg overflow-hidden bg-slate-50 border border-slate-100">
                        <img 
                          src="/images/google_shoe_ad.png" 
                          alt="Sneaker Product" 
                          className="h-full w-full object-cover" 
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Meta Ad Lifestyle Card (bottom) */}
                  <motion.div
                    className="w-full rounded-2xl border border-slate-200/80 shadow-xl p-3 bg-white flex flex-col gap-2 relative overflow-hidden"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="flex justify-between items-center text-[9px] text-slate-400 font-bold">
                      <span className="flex items-center gap-1 text-[#1877F2]">
                        {/* Meta Logo */}
                        <svg className="h-3.5 w-3.5 fill-[#1877F2]" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <span className="text-[9px] font-bold text-slate-700">Meta Ad</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-12 gap-2 items-center">
                      <div className="col-span-7 flex flex-col items-start gap-1">
                        <span className="text-[13px] md:text-[14px] font-extrabold text-slate-900 leading-tight">
                          Elevate Your <br />
                          Everyday Style.
                        </span>
                        <button className="mt-1 px-3 py-1 rounded-md bg-[#071125] text-white font-extrabold text-[8.5px] uppercase tracking-wider hover:bg-black transition-colors">
                          Shop Now
                        </button>
                      </div>
                      <div className="col-span-5 h-[72px] w-full rounded-lg overflow-hidden bg-slate-50 border border-slate-100">
                        <img 
                          src="/images/meta_person_ad.png" 
                          alt="Lifestyle Model" 
                          className="h-full w-full object-cover object-top" 
                        />
                      </div>
                    </div>

                    {/* Social Reaction footer */}
                    <div className="flex justify-between items-center text-[9px] text-slate-400 font-bold pt-1.5 border-t border-slate-100">
                      <div className="flex items-center gap-1">
                        <span className="flex items-center -space-x-1">
                          <span className="h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center text-white border border-white text-[7px]">👍</span>
                          <span className="h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-white border border-white text-[7px]">❤️</span>
                        </span>
                        <span>123</span>
                      </div>
                      <span>23 Comments</span>
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
      <section className="relative w-full pt-16 md:pt-20 pb-8 md:pb-10 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-accent-blue mb-2.5">
              Our Digital Marketing Services
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight font-poppins">
              Integrated strategies across channels to attract, engage and convert.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                icon: (
                  <svg className="h-8 w-8 text-[#1877F2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 5.5H21.5M20 4V7" strokeWidth="1.5" />
                  </svg>
                ),
                title: "Performance Marketing",
                desc: "High-impact paid campaigns across Google, Meta, LinkedIn & more to generate qualified leads and sales."
              },
              {
                icon: (
                  <svg className="h-8 w-8 text-[#1877F2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
                    <line x1="16" y1="16" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M7 12L11 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="7" cy="8" r="0.75" fill="currentColor" />
                    <circle cx="11" cy="12" r="0.75" fill="currentColor" />
                  </svg>
                ),
                title: "SEO & Organic Growth",
                desc: "Improve search rankings, drive organic traffic and build long-term authority for sustainable growth."
              },
              {
                icon: (
                  <svg className="h-8 w-8 text-[#1877F2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: "Social Media & Content",
                desc: "Engage your audience with compelling content and social strategies that build brand loyalty."
              }
            ].map((srv, idx) => (
              <div key={idx} className="group bg-white border border-slate-100 p-8 md:p-10 rounded-[24px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-100/80 transition-all duration-300">
                <div>
                  <div className="h-16 w-16 rounded-2xl bg-blue-50/50 flex items-center justify-center mb-8 border border-blue-100/50 transition-all duration-300 group-hover:scale-105">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-poppins mb-4">{srv.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal mb-8">{srv.desc}</p>
                </div>
                <button
                  onClick={openBooking}
                  className="inline-flex items-center text-sm font-bold text-[#1877F2] hover:text-blue-700 transition-colors group/link mt-auto w-fit"
                >
                  Learn more
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          4. DIGITAL MARKETING CAPABILITIES SECTION
          ======================================================== */}
      <section className="relative w-full pt-8 md:pt-10 pb-16 md:pb-20 bg-slate-50/50 border-t border-slate-100">
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
                icon: (
                  <svg className="h-5.5 w-5.5" viewBox="0 0 248.31 226.88" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path 
                        fill="#4285F4" 
                        d="M84.5,28.57c2.4-6.3,5.7-12.1,10.6-16.8c19.6-19.1,52-14.3,65.3,9.7c10,18.2,20.6,36,30.9,54 c17.2,29.9,34.6,59.8,51.6,89.8c14.3,25.1-1.2,56.8-29.6,61.1c-17.4,2.6-33.7-5.4-42.7-21c-15.1-26.3-30.3-52.6-45.4-78.8 c-0.3-0.6-0.7-1.1-1.1-1.6c-1.6-1.3-2.3-3.2-3.3-4.9c-6.7-11.8-13.6-23.5-20.3-35.2c-4.3-7.6-8.8-15.1-13.1-22.7 c-3.9-6.8-5.7-14.2-5.5-22C82.2,36.17,82.7,32.17,84.5,28.57"
                      />
                      <path 
                        fill="#FBBC05" 
                        d="M84.5,28.57c-0.9,3.6-1.7,7.2-1.9,11c-0.3,8.4,1.8,16.2,6,23.5c11,18.9,22,37.9,32.9,56.9c1,1.7,1.8,3.4,2.8,5 c-6,10.4-12,20.7-18.1,31.1c-8.4,14.5-16.8,29.1-25.3,43.6c-0.4,0-0.5-0.2-0.6-0.5c-0.1-0.8,0.2-1.5,0.4-2.3 c4.1-15,0.7-28.3-9.6-39.7c-6.3-6.9-14.3-10.8-23.5-12.1c-12-1.7-22.6,1.4-32.1,8.9c-1.7,1.3-2.8,3.2-4.8,4.2 c-0.4,0-0.6-0.2-0.7-0.5c4.8-8.3,9.5-16.6,14.3-24.9c19.8-34.4,39.6-68.8,59.5-103.1C84,29.27,84.3,28.97,84.5,28.57"
                      />
                      <path 
                        fill="#34A853" 
                        d="M10.4,157.97c1.9-1.7,3.7-3.5,5.7-5.1c24.3-19.2,60.8-5.3,66.1,25.1c1.3,7.3,0.6,14.3-1.6,21.3 c-0.1,0.6-0.2,1.1-0.4,1.7c-0.9,1.6-1.7,3.3-2.7,4.9c-8.9,14.7-22,22-39.2,20.9c-19.7-1.4-35.2-16.2-37.9-35.8 c-1.3-9.5,0.6-18.4,5.5-26.6c1-1.8,2.2-3.4,3.3-5.2C9.7,158.77,9.5,157.97,10.4,157.97"
                      />
                    </g>
                  </svg>
                ),
                title: "Google Ads",
                desc: "Search, Display, Shopping & Performance Max campaigns that deliver measurable results."
              },
              {
                icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"/>
                  </svg>
                ),
                title: "Meta Ads",
                desc: "Targeted Facebook & Instagram campaigns that drive leads, sales and brand awareness."
              },
              {
                icon: <Search className="h-5 w-5 text-[#1877F2]" />,
                title: "SEO",
                desc: "Technical SEO, on-page, off-page and local SEO to rank higher and drive organic traffic."
              },
              {
                icon: <ThumbsUp className="h-5 w-5 text-[#1877F2]" />,
                title: "Social Media Management",
                desc: "Strategy, content, posting and community management across all major platforms."
              },
              {
                icon: <Pen className="h-5 w-5 text-[#1877F2]" />,
                title: "Content Marketing",
                desc: "Blogs, guides, videos and more to attract, educate and convert your audience."
              },
              {
                icon: (
                  <svg className="h-5.5 w-5.5 text-[#1877F2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2" />
                    <line x1="3" y1="9" x2="21" y2="9" strokeWidth="1.5" />
                    <circle cx="6" cy="6.5" r="0.5" fill="currentColor" />
                    <circle cx="8" cy="6.5" r="0.5" fill="currentColor" />
                    <circle cx="10" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                ),
                title: "Landing Pages & CRO",
                desc: "High-converting landing pages and CRO to turn visitors into customers."
              },
              {
                icon: <Mail className="h-5 w-5 text-[#1877F2]" />,
                title: "Email Marketing",
                desc: "Nurture leads and boost retention with targeted email campaigns that convert."
              },
              {
                icon: (
                  <svg className="h-5.5 w-5.5 text-[#1877F2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 20V10M12 20V4M6 20V14" />
                    <path d="M3 17L9 11L13 14L21 6" strokeWidth="2" />
                    <polyline points="17 6 21 6 21 10" strokeWidth="2" />
                  </svg>
                ),
                title: "Analytics & Reporting",
                desc: "Real-time dashboards and actionable insights to track performance and ROI."
              }
            ].map((cap, idx) => (
              <div key={idx} className="bg-white/70 border border-slate-100 p-5 rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-md hover:border-blue-50/50 transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
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
          5. PROVEN PROCESS SECTION (Redesigned Container Card)
          ======================================================== */}
      <section id="process" className="relative w-full py-16 md:py-20 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          
          <div className="relative w-full bg-[#06142D] border border-slate-800/60 rounded-[32px] p-8 md:p-12 md:py-16 overflow-hidden shadow-2xl bg-gradient-to-br from-[#06142D] via-[#081733] to-[#0b2046]">
            
            {/* Background ambient grids/effects inside card */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] h-[350px] w-[350px] rounded-full bg-sky-500/10 blur-[90px]" />
              <div className="absolute bottom-[-10%] left-[-10%] h-[300px] w-[300px] rounded-full bg-blue-600/5 blur-[80px]" />
            </div>

            <div className="relative z-10 flex flex-col">
              
              <div className="text-center mb-14 flex flex-col items-center">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-sky-400 mb-2.5">
                  Our Proven Process
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight font-poppins">
                  A collaborative approach that delivers consistent, measurable growth.
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                {[
                  { title: "Discover & Research", desc: "We understand your business, audience, goals and current performance." },
                  { title: "Strategy & Planning", desc: "We create a data-driven strategy with the right channels and campaign roadmap." },
                  { title: "Execute & Optimize", desc: "We launch, monitor and optimize campaigns for maximum performance." },
                  { title: "Measure & Scale", desc: "We analyze results, share insights and scale what works for sustainable growth." }
                ].map((proc, idx) => (
                  <div key={idx} className="relative flex flex-col items-start text-left group z-10">
                    
                    {/* Connecting Dotted Arrow - desktop only */}
                    {idx < 3 && (
                      <div className="hidden lg:block absolute top-[15px] left-10 w-[calc(100%-16px)] h-0.5 z-0">
                        <div className="w-full h-full border-t border-dashed border-slate-600/50 flex items-center justify-end relative">
                          <svg className="absolute right-[-4px] top-[-4px] h-2.5 w-2.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Step Number Circle */}
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center mb-5 text-slate-900 font-bold text-xs tracking-wide z-10 shadow-md">
                      {idx + 1}
                    </div>

                    <h3 className="text-[14px] md:text-[15px] font-bold text-white font-poppins mb-2">{proc.title}</h3>
                    <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed font-normal">{proc.desc}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          6. WHY CHOOSE & INDUSTRIES (Split layout)
          ======================================================== */}
      <section className="relative w-full pt-16 pb-6 md:pt-20 md:pb-8 bg-slate-50/30">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Why Choose Us */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <h2 className="text-2xl md:text-3xl font-black text-[#06142D] tracking-tight leading-tight font-poppins mb-8">
                Why Choose Diginet Solutions?
              </h2>

              <div className="flex flex-col gap-6 w-full">
                {[
                  { title: "Integrated Expertise", desc: "Digital marketing backed by technology and data." },
                  { title: "ROI-Driven Approach", desc: "Every decision is made to maximize your returns." },
                  { title: "Transparent & Proactive", desc: "Clear communication and regular performance updates." },
                  { title: "Scalable & Flexible", desc: "Solutions that grow with your business needs." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0 text-white mt-1">
                      <Check className="h-3 w-3 stroke-[3px]" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-[14px] md:text-[15px] font-bold text-[#06142D] font-poppins leading-tight">{item.title}</h3>
                      <p className="text-xs md:text-sm text-slate-500 leading-normal mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Industries We Serve */}
            <div className="lg:col-span-7 flex flex-col items-start text-left w-full">
              <h2 className="text-2xl md:text-3xl font-black text-[#06142D] tracking-tight leading-tight font-poppins mb-1.5">
                Industries We Serve
              </h2>
              <p className="text-xs md:text-sm text-slate-500 leading-normal mb-8">
                Tailored marketing solutions for every industry.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#06142D]">
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                      </svg>
                    ),
                    label: "E-commerce"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#06142D]">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        <path d="M12 9v6m-3-3h6" />
                      </svg>
                    ),
                    label: "Healthcare"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#06142D]">
                        <path d="M3 22h18" />
                        <path d="M6 18V11" />
                        <path d="M10 18V11" />
                        <path d="M14 18V11" />
                        <path d="M18 18V11" />
                        <path d="M4 11h16" />
                        <path d="M12 2 2 7h20Z" />
                      </svg>
                    ),
                    label: "Finance"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#06142D]">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    ),
                    label: "Real Estate"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#06142D]">
                        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                        <path d="M21.5 12v6" />
                      </svg>
                    ),
                    label: "Education"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#06142D]">
                        <path d="M17.5 19A5.5 5.5 0 0 0 22 13.5a5.5 5.5 0 0 0-5.5-5.5H16a7.5 7.5 0 0 0-14 3.5c0 1 .2 2 .5 3A5.5 5.5 0 0 0 8 19Z" />
                      </svg>
                    ),
                    label: "SaaS & Tech"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#06142D]">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    ),
                    label: "Manufacturing"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#06142D]">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <circle cx="12" cy="11" r="3" />
                        <path d="M8 17a4 4 0 0 1 8 0" />
                      </svg>
                    ),
                    label: "Professional Services"
                  }
                ].map((ind, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200/60 p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-3 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-slate-300 transition-all duration-300 min-h-[110px] md:min-h-[128px] w-full"
                  >
                    <div className="flex items-center justify-center mb-1">{ind.icon}</div>
                    <span className="text-[11px] md:text-xs font-bold text-[#06142D] font-poppins leading-tight">{ind.label}</span>
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
      <section className="relative w-full pt-6 pb-16 md:pt-8 md:pb-20 bg-slate-50/50 border-t border-slate-100">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-left mb-12 flex flex-col items-start">
            <h2 className="text-2xl md:text-3xl font-black text-[#06142D] tracking-tight leading-tight font-poppins mb-1.5">
              Real Results. Real Impact.
            </h2>
            <p className="text-xs md:text-sm text-slate-500 leading-normal">
              A few examples of how we help businesses grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                tag: "E-commerce",
                tagIcon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-blue-600">
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                ),
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
                tagIcon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-blue-600">
                    <path d="M17.5 19A5.5 5.5 0 0 0 22 13.5a5.5 5.5 0 0 0-5.5-5.5H16a7.5 7.5 0 0 0-14 3.5c0 1 .2 2 .5 3A5.5 5.5 0 0 0 8 19Z" />
                  </svg>
                ),
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
                tagIcon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-blue-600">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                ),
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
              <div key={idx} className="bg-white border border-slate-200/60 rounded-[24px] overflow-hidden shadow-sm flex flex-col hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300">
                {/* Case Study Image Wrapper */}
                <div className="relative h-48 md:h-52 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                  <img src={cs.img} alt={cs.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  <span className="absolute top-4 left-4 bg-white/95 border border-slate-200/50 text-[10px] font-bold text-slate-800 py-1.5 px-3 rounded-full backdrop-blur-sm shadow-sm flex items-center gap-1.5">
                    {cs.tagIcon}
                    {cs.tag}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-5 md:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg md:text-[19px] font-bold text-[#06142D] font-poppins mb-2 leading-tight">{cs.title}</h3>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal mb-4">{cs.desc}</p>
                  </div>
                  
                  <div className="mt-4">
                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100/80">
                      {cs.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex flex-col text-left">
                          <span className="text-[16px] md:text-[18px] font-black text-blue-600 leading-none">{m.val}</span>
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1.5 leading-normal">{m.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Link */}
                    <div className="pt-4 mt-1">
                      <button
                        onClick={openBooking}
                        className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group/cs"
                      >
                        View Case Study
                        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/cs:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          8. TESTIMONIALS SECTION (Dark banner inside light bg)
          ======================================================== */}
      <section className="relative w-full pt-16 pb-4 md:pt-20 md:pb-6 bg-white overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* Dark Banner Container */}
          <div className="relative w-full bg-[#06142D] border border-slate-800/40 rounded-[32px] py-8 px-5 md:py-10 md:px-10 overflow-hidden shadow-2xl">
            
            {/* Background ambient spots inside the banner */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute top-[-30%] right-[-10%] h-[350px] w-[350px] rounded-full bg-sky-500/10 blur-[100px]" />
              <div className="absolute bottom-[-30%] left-[-10%] h-[350px] w-[350px] rounded-full bg-blue-600/5 blur-[100px]" />
            </div>

            {/* Content wrapper to float above background */}
            <div className="relative z-10">
              
              <div className="text-center mb-6 flex flex-col items-center">
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight font-poppins">
                  What Our Clients Say
                </h2>
              </div>

              {/* Slider Outer Container */}
              <div className="relative w-full overflow-hidden px-0 py-2">
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => {
                    const maxIdx = testimonials.length - visibleCards;
                    setActiveTestimonial((prev) => (prev === 0 ? maxIdx : prev - 1));
                  }}
                  className="absolute left-[-12px] md:left-[-24px] top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-white flex items-center justify-center transition-all z-20"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={() => {
                    const maxIdx = testimonials.length - visibleCards;
                    setActiveTestimonial((prev) => (prev >= maxIdx ? 0 : prev + 1));
                  }}
                  className="absolute right-[-12px] md:right-[-24px] top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-white flex items-center justify-center transition-all z-20"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Slider Track */}
                <div className="w-full overflow-hidden">
                  <motion.div 
                    className="flex"
                    style={{ width: `${(testimonials.length / visibleCards) * 100}%` }}
                    animate={{ x: `-${activeTestimonial * (100 / testimonials.length)}%` }}
                    transition={{ type: "spring", stiffness: 180, damping: 25 }}
                  >
                    {testimonials.map((t) => (
                      <div 
                        key={t.id} 
                        className="px-3 shrink-0 flex flex-col" 
                        style={{ width: `${100 / testimonials.length}%` }}
                      >
                        <div className="bg-[#0a1628]/85 border border-slate-800/40 p-5 md:p-6 rounded-2xl flex flex-col justify-between shadow-2xl relative min-h-[160px] md:min-h-[180px] h-full">
                          <div>
                            {/* Quote Mark */}
                            <span className="text-4xl font-serif text-sky-500 font-black leading-none block mb-1">
                              “
                            </span>
                            <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-4 font-normal">
                              {t.text}
                            </p>
                          </div>

                          <div className="flex items-center gap-3 pt-4 border-t border-slate-800/60">
                            {/* User Info */}
                            <img 
                              src={t.avatarUrl} 
                              alt={t.name} 
                              className="h-10 w-10 rounded-full object-cover shrink-0 bg-slate-900 border border-slate-800" 
                            />
                            <div className="flex flex-col">
                              <h4 className="font-bold text-white text-xs md:text-sm font-poppins leading-tight">
                                {t.name}
                              </h4>
                              <p className="text-[10px] text-slate-400 leading-normal mt-0.5">
                                {t.role}, {t.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Slider Dots */}
                <div className="flex gap-2 justify-center mt-8 relative z-20">
                  {Array.from({ length: testimonials.length - visibleCards + 1 }).map((_, dIdx) => (
                    <button
                      key={dIdx}
                      onClick={() => setActiveTestimonial(dIdx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeTestimonial === dIdx ? "w-5 bg-sky-500" : "w-2 bg-slate-700"
                      }`}
                      aria-label={`Go to slide ${dIdx + 1}`}
                    />
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          9. FAQS & CTA BANNER (Split layout)
          ======================================================= */}
      <section className="relative w-full pt-4 pb-4 md:pt-6 md:pb-6 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: FAQs Accordion Card */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-white border border-slate-200/60 rounded-[32px] p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 h-full">
                
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-[#06142D] tracking-tight leading-tight font-poppins mb-6">
                    Frequently Asked Questions
                  </h2>

                  <div className="w-full flex flex-col mt-4">
                    {faqs.map((faq, idx) => {
                      const isOpen = openFaq === idx;
                      return (
                        <div key={idx} className="border-b border-slate-100 last:border-0">
                          <button
                            onClick={() => toggleFaq(idx)}
                            className="w-full py-4 flex items-center justify-between text-left font-bold text-xs md:text-[14px] text-[#06142D] font-poppins hover:text-blue-600 transition-colors"
                          >
                            <span>{faq.question}</span>
                            <span className="text-slate-400 font-normal text-lg ml-2 shrink-0 select-none">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <p className="pb-4 text-xs md:text-sm text-slate-500 leading-relaxed font-normal">
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

                <div className="mt-8 pt-2">
                  <Link href="/contact" className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group">
                    View all FAQs
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

              </div>
            </div>

            {/* Right Column: CTA Banner Card */}
            <div className="lg:col-span-7 w-full h-full">
              
              {/* Blue Gradient Container with Vibrant BG Image */}
              <div 
                className="w-full bg-[#06142D] rounded-[32px] border border-slate-800/40 shadow-xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between min-h-[380px] h-full"
                style={{ 
                  backgroundImage: "url('/images/cta_vibrant_bg.png')", 
                  backgroundSize: "cover", 
                  backgroundPosition: "center" 
                }}
              >
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#06142D]/95 via-[#071633]/80 to-transparent pointer-events-none z-0" />

                {/* Background Rocket Line Illustration overlay */}
                <div className="absolute right-4 bottom-4 top-4 w-[45%] opacity-[0.18] pointer-events-none z-10 overflow-hidden flex items-center justify-end">
                  <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M50 10 C 65 30, 65 60, 50 90 C 35 60, 35 30, 50 10 Z" />
                    <path d="M50 20 L60 40 L40 40 Z" />
                    <path d="M50 40 L50 90" />
                    <path d="M38 55 L28 65 L28 85 L38 85 Z" />
                    <path d="M62 55 L72 65 L72 85 L62 85 Z" />
                  </svg>
                </div>

                <div className="relative z-20 flex flex-col items-start text-left">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-300 mb-3 block">
                    READY TO GROW?
                  </span>
                  
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight font-poppins max-w-[420px] mb-4">
                    Let&apos;s Build a Digital Marketing Strategy That Delivers Results
                  </h3>

                  <p className="text-[13px] md:text-[14px] text-slate-300 leading-relaxed max-w-[440px] mb-8 font-normal">
                    Get a free consultation and discover how we can help you attract more customers and grow your business.
                  </p>
                </div>

                <div className="relative z-20 pt-4">
                  <button
                    onClick={openBooking}
                    className="cursor-pointer inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold text-blue-600 bg-white hover:bg-slate-50 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-black/10"
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
