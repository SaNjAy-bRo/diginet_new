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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-5 flex flex-col text-left items-start">
              
              <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-sky-400 mb-3 block">
                Digital Marketing
              </span>

              <h1 className="text-3xl sm:text-[44px] lg:text-[48px] xl:text-[52px] font-black tracking-tight text-white leading-[1.08] mb-5 font-poppins">
                Digital Marketing <br />
                That Drives Real <br />
                Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-accent-blue">Growth</span>
              </h1>

              <p className="text-[14px] md:text-[15px] text-slate-400 leading-relaxed mb-8 max-w-[460px]">
                Data-driven strategies, high-performing campaigns and compelling content that attract the right audience, generate quality leads and maximize your ROI.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mb-12">
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

              {/* Small Trust Pillars */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-6 border-t border-slate-800/60 w-full max-w-[460px]">
                {[
                  { title: "ROI-Focused", desc: "Every strategy aligned to your bottom line." },
                  { title: "Data-Driven", desc: "Decisions powered by real-time insights." },
                  { title: "Transparent", desc: "Clear reporting and complete visibility." },
                  { title: "Scalable", desc: "Built to grow with your business." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2">
                    <div className="h-5 w-5 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 text-sky-400">
                      <Check className="h-3 w-3 stroke-[2.5px]" />
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[11px] font-bold text-white">{item.title}</span>
                      <span className="text-[9px] text-slate-450 mt-0.5 leading-normal">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Hero Graphic: Live Interactive Dashboard Layout */}
            <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center py-6">
              
              {/* Outer container */}
              <div className="relative w-full max-w-[480px] md:max-w-[540px]">
                
                {/* Curve loop background graphic */}
                <svg className="absolute -inset-10 w-[calc(100%+80px)] h-[calc(100%+80px)] pointer-events-none z-0 overflow-visible" viewBox="0 0 500 400" fill="none">
                  <ellipse
                    cx="250"
                    cy="200"
                    rx="240"
                    ry="145"
                    transform="rotate(-5, 250, 200)"
                    stroke="rgba(56, 189, 248, 0.14)"
                    strokeWidth="1.5"
                    strokeDasharray="4 8"
                    fill="none"
                  />
                  <ellipse
                    cx="250"
                    cy="200"
                    rx="220"
                    ry="125"
                    transform="rotate(-5, 250, 200)"
                    stroke="rgba(14, 165, 233, 0.08)"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>

                {/* Central Dashboard Panel (Google & Meta Campaign Stats) */}
                <div className="relative z-10 w-[84%] mr-auto rounded-2xl border border-slate-700/40 bg-[#071020]/95 shadow-2xl p-4 md:p-5 flex flex-col gap-4">
                  
                  {/* Title Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                    <h3 className="text-xs font-bold text-white tracking-wide">Campaign Overview</h3>
                    <TrendingUp className="h-4 w-4 text-sky-400" />
                  </div>

                  {/* 4 Stats Grid */}
                  <div className="grid grid-cols-4 gap-2.5">
                    {[
                      { label: "Clicks", val: "12,540", pct: "+18.7%", pos: true },
                      { label: "Conversions", val: "1,246", pct: "+25.4%", pos: true },
                      { label: "Cost / Conv", val: "$18.45", pct: "-12.3%", pos: true },
                      { label: "Conv. Rate", val: "4.6%", pct: "+31.2%", pos: true }
                    ].map((stat, idx) => (
                      <div key={idx} className="bg-slate-900/60 border border-slate-800/50 p-2 rounded-xl flex flex-col justify-between min-h-[64px]">
                        <span className="text-[7.5px] text-slate-500 font-semibold uppercase tracking-wider leading-none">{stat.label}</span>
                        <div className="mt-1.5">
                          <span className="text-[12px] font-black text-white leading-none block">{stat.val}</span>
                          <span className={`text-[7px] font-bold mt-1 leading-none inline-block ${stat.pos ? "text-emerald-400" : "text-rose-400"}`}>
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
                      <div className="flex flex-col gap-1.5">
                        {[
                          { name: "Google Ads", val: "48%", color: "bg-amber-400" },
                          { name: "Meta Ads", val: "34%", color: "bg-sky-500" },
                          { name: "LinkedIn Ads", val: "12%", color: "bg-blue-600" },
                          { name: "Organic Search", val: "6%", color: "bg-emerald-500" }
                        ].map((c, idx) => (
                          <div key={idx} className="flex flex-col gap-1">
                            <div className="flex justify-between items-center text-[7.5px]">
                              <span className="text-slate-400 font-medium">{c.name}</span>
                              <span className="text-white font-bold">{c.val}</span>
                            </div>
                            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                              <div className={`h-full ${c.color}`} style={{ width: c.val }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Campaigns */}
                    <div className="flex flex-col gap-2">
                      <span className="text-[8px] font-bold uppercase tracking-wider text-slate-500">Recent Campaigns</span>
                      <div className="flex flex-col gap-1.5">
                        {[
                          { name: "Summer Sale - Google Ads", status: "Active", col: "text-emerald-400" },
                          { name: "Lead Gen - Meta Ads", status: "Active", col: "text-emerald-400" },
                          { name: "Brand Awareness - LinkedIn", status: "Active", col: "text-emerald-400" }
                        ].map((camp, idx) => (
                          <div key={idx} className="bg-slate-900/40 border border-slate-800/40 p-1.5 rounded-lg flex items-center justify-between text-[7.5px]">
                            <span className="text-slate-300 truncate pr-2 font-medium max-w-[85px]">{camp.name}</span>
                            <span className={`font-bold ${camp.col}`}>{camp.status}</span>
                          </div>
                        ))}
                      </div>
                      <button className="w-full mt-1.5 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 font-bold text-[8px] hover:bg-sky-500/20 transition-all">
                        View All Campaigns
                      </button>
                    </div>

                  </div>

                </div>

                {/* Floating Card 1: Google Ad mockup (top-right) */}
                <motion.div
                  className="absolute right-0 top-[5%] z-20 w-[145px] rounded-xl border border-white/[0.08] shadow-2xl p-2.5 bg-[#0a1424]/90 backdrop-blur-md flex flex-col gap-2"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex justify-between items-center text-[7px] text-slate-500">
                    <span className="flex items-center gap-1 font-bold">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      Google Ad
                    </span>
                    <span>Sponsored</span>
                  </div>
                  {/* Mock Ad Creative visual representation */}
                  <div className="h-14 w-full rounded-lg bg-gradient-to-br from-amber-400/20 to-orange-500/20 flex items-center justify-center border border-amber-400/10 relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0a1424_100%)] opacity-40" />
                    {/* Visual shoe silhouette using styled divs */}
                    <div className="relative w-12 h-6 flex items-center justify-center text-amber-300">
                      <svg className="w-10 h-10 fill-current opacity-80" viewBox="0 0 24 24">
                        <path d="M21 13c0-1.66-1.34-3-3-3h-1V9c0-1.66-1.34-3-3-3h-2c-1.66 0-3 1.34-3 3v1H8c-1.66 0-3 1.34-3 3v2c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black text-white leading-tight">Step Ahead. Stay Ahead.</span>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[7px] text-slate-400">Shop Premium Sneakers</span>
                      <button className="px-2 py-0.5 rounded bg-sky-500 text-white font-bold text-[6.5px]">Shop Now</button>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card 2: Meta Ad mockup (bottom-right) */}
                <motion.div
                  className="absolute right-[-16px] bottom-[5%] z-20 w-[145px] rounded-xl border border-white/[0.08] shadow-2xl p-2.5 bg-[#0a1424]/90 backdrop-blur-md flex flex-col gap-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="flex justify-between items-center text-[7px] text-slate-500">
                    <span className="flex items-center gap-1 font-bold">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      Meta Ad
                    </span>
                    <span>Sponsored</span>
                  </div>
                  {/* Mock Ad Creative visual representation */}
                  <div className="h-14 w-full rounded-lg bg-gradient-to-br from-sky-400/20 to-purple-500/20 flex items-center justify-center border border-sky-400/10 relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0a1424_100%)] opacity-40" />
                    {/* Visual silhouette using styled divs */}
                    <div className="w-6 h-6 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                      <Users className="w-3.5 h-3.5 text-sky-300" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black text-white leading-tight">Elevate Your Everyday Style.</span>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[7px] text-slate-400">New Collections Available</span>
                      <button className="px-2 py-0.5 rounded bg-sky-500 text-white font-bold text-[6.5px]">Shop Now</button>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Pill (bottom-center) */}
                <motion.div
                  className="absolute left-[20%] bottom-[-16px] z-30 flex items-center gap-3 bg-white border border-slate-100 py-1.5 px-3.5 rounded-full shadow-lg"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <span className="text-[6.5px] font-extrabold uppercase text-slate-400 tracking-wider pr-1">Platforms</span>
                  {/* Platform Icons represented by clean circles with letters/shapes */}
                  <div className="flex gap-1.5 items-center">
                    <span className="h-4 w-4 rounded-full bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center text-[#1877F2] font-black text-[9px]">f</span>
                    <span className="h-4 w-4 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/20 flex items-center justify-center text-[#0A66C2] font-black text-[9px]">in</span>
                    <span className="h-4 w-4 rounded-full bg-[#FF0000]/10 border border-[#FF0000]/20 flex items-center justify-center text-[#FF0000] font-black text-[8px]">▶</span>
                    <span className="h-4 w-4 rounded-full bg-black/10 border border-black/20 flex items-center justify-center text-black font-black text-[8px] font-sans">d</span>
                    <span className="h-4 w-4 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 text-[8px] font-bold">+</span>
                  </div>
                </motion.div>

              </div>

            </div>

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
