"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Plus, Minus,
  Smartphone, Monitor, Code, Layers, Server, Database, Headphones, Search, ShieldCheck,
  Zap, Users, Award, Shield, Phone, Mail, Activity, Eye, Lock, Globe,
  MessageSquare, TrendingUp, Sparkles, Star, ChevronLeft, ChevronRight,
  Target, AlertTriangle, ClipboardList, AppWindow
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
      <section className="relative w-full bg-[#06142D] pt-[95px] sm:pt-[100px] md:pt-[105px] pb-10 md:pb-14 overflow-hidden">
        
        {/* Background ambient grids/effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] h-[550px] w-[550px] rounded-full bg-indigo-500/10 blur-[130px]" />
          <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-650/5 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.08]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 sm:mb-4 select-none">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-slate-600">&gt;</span>
            <span className="text-slate-500">Services</span>
            <span className="text-slate-600">&gt;</span>
            <span className="text-indigo-400">Mobile Application Development</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 flex flex-col text-left items-start">
              
              <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-indigo-400 mb-3 block">
                Mobile Application Development
              </span>

              <h1 className="text-3xl sm:text-[44px] lg:text-[48px] xl:text-[52px] font-black tracking-tight text-white leading-[1.08] mb-5 font-poppins">
                Mobile Applications <br />
                Built for <span className="text-[#2F6BFF] font-black">Growth.</span>
              </h1>

              <p className="text-[14px] md:text-[15px] text-slate-400 leading-relaxed mb-4 max-w-[500px]">
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

            {/* Right Hero Graphic: High-fidelity landscape mockup image */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center py-0 w-full select-none">
              <motion.div 
                className="relative w-full max-w-[640px] aspect-[16/10] flex items-center justify-center overflow-visible bg-transparent"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.img 
                  src="/images/service_mobile_mockup.png" 
                  alt="Mobile Applications Built for Growth" 
                  className="w-full h-full object-contain select-none relative z-0"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>

          </div>

          {/* Underneath breadcrumbs/metrics: stats list */}
          <div className="mt-8 pt-8 border-t border-slate-800/40 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-[1100px] w-full">
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
      <section className="relative w-full pt-16 md:pt-20 pb-8 md:pb-12 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-indigo-500 mb-2.5">
              CORE SERVICES
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight font-poppins">
              End-to-end Mobile App Development Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Smartphone className="h-6 w-6 text-white" />,
                title: "Android App Development",
                desc: "Native Android apps built for performance, security, and seamless user experience."
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.82M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.51-.63.73-1.18 1.87-1.03 2.98 1.11.09 2.26-.59 2.96-1.43z" />
                  </svg>
                ),
                title: "iOS App Development",
                desc: "High-performance iOS applications crafted with Swift and modern Apple frameworks."
              },
              {
                icon: <Code className="h-6 w-6 text-white" />,
                title: "Cross-Platform Apps",
                desc: "Build powerful cross-platform apps with Flutter & React Native to reach more users, faster."
              },
              {
                icon: <Layers className="h-6 w-6 text-white" />,
                title: "UI/UX Design",
                desc: "Human-centered UI/UX designs that are intuitive, engaging, and aligned with your brand."
              },
              {
                icon: <Database className="h-6 w-6 text-white" />,
                title: "Backend & API Integration",
                desc: "Robust backend architecture and API integrations that power your app seamlessly."
              },
              {
                icon: <Headphones className="h-6 w-6 text-white" />,
                title: "App Maintenance & Support",
                desc: "Ongoing maintenance, feature enhancements, and 24/7 support to keep your app running smooth."
              }
            ].map((srv, idx) => (
              <div key={idx} className="group bg-white border border-slate-100/80 p-6 sm:p-8 rounded-[28px] flex flex-row gap-5 items-start shadow-[0_8px_30px_rgb(0,0,0,0.012)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.06)] hover:border-indigo-500/20 hover:translate-y-[-2px] transition-all duration-300">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/10 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2 text-white">
                  {srv.icon}
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-base md:text-lg font-bold text-slate-900 font-poppins mb-2 leading-tight">
                    {srv.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal mb-4">
                    {srv.desc}
                  </p>
                  <button
                    onClick={openBooking}
                    className="inline-flex items-center text-xs md:text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors group/link w-fit"
                  >
                    Learn more
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          4. HOW DIGINET BUILDS APPS (From Idea to Launch - Dark Band)
          ======================================================== */}
      <section className="relative w-full py-8 md:py-10 bg-[#06142D] bg-gradient-to-br from-[#06142D] via-[#081733] to-[#0b2046] overflow-hidden border-y border-slate-900 shadow-xl">
        
        {/* Background ambient spots */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-30%] right-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="absolute bottom-[-30%] left-[-10%] h-[450px] w-[450px] rounded-full bg-blue-650/5 blur-[100px]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side info block */}
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-indigo-400 mb-2">
                HOW DIGINET BUILDS APPS
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight font-poppins mb-4">
                From Idea to Launch
              </h2>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-6 max-w-[340px]">
                We follow a proven, agile process to turn your idea into a high-performing mobile application.
              </p>
              <button
                onClick={openBooking}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-350 border border-slate-700 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-all duration-300"
              >
                Explore Our Process
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </button>
            </div>

            {/* Right side 4 capabilities columns */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-y-8 sm:gap-y-0 sm:divide-x sm:divide-slate-800/60">
              {[
                {
                  icon: <Target className="h-11 w-11 text-indigo-400 filter drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]" />,
                  title: "Product Strategy",
                  desc: "We validate ideas, identify opportunities and define the right roadmap."
                },
                {
                  icon: <Layers className="h-11 w-11 text-indigo-400 filter drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]" />,
                  title: "UI/UX Design",
                  desc: "Design intuitive interfaces that deliver delightful user experiences."
                },
                {
                  icon: <Code className="h-11 w-11 text-indigo-400 filter drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]" />,
                  title: "Agile Development",
                  desc: "We build with clean code, modern frameworks and agile methodology."
                },
                {
                  icon: <ShieldCheck className="h-11 w-11 text-indigo-400 filter drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]" />,
                  title: "QA & Deployment",
                  desc: "Rigorous testing and smooth deployment to ensure quality and reliability."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center px-4 sm:px-6 group">
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-white font-poppins mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed font-normal max-w-[170px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          5. OUR PROCESS TIMELINE SECTION (Light Background)
          ======================================================== */}
      <section id="process" className="relative w-full py-8 md:py-10 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-6 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-indigo-500 mb-2.5">
              OUR PROCESS
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight font-poppins">
              A Simple 4-Step Journey
            </h2>
          </div>

          {/* Workflow Timeline */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-4 relative">
            {[
              {
                title: "Discover",
                desc: "We analyze your idea, market and define clear goals.",
                icon: <Search className="h-6 w-6 text-indigo-600" />
              },
              {
                title: "Design",
                desc: "We create user flows, wireframes and stunning UI/UX designs.",
                icon: <Layers className="h-6 w-6 text-indigo-600" />
              },
              {
                title: "Develop",
                desc: "We build robust, scalable apps with clean and secure code.",
                icon: <Code className="h-6 w-6 text-indigo-600" />
              },
              {
                title: "Launch & Scale",
                desc: "We launch your app and help you scale with confidence.",
                icon: <Zap className="h-6 w-6 text-indigo-600" />
              }
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-row items-start gap-4 text-left group">
                  <div className="h-16 w-16 rounded-full border border-slate-200/85 shadow-sm flex items-center justify-center bg-slate-50 shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:border-indigo-400/40 relative">
                    <div className="h-[90%] w-[90%] rounded-full bg-white flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="text-xs md:text-sm font-black text-slate-900 font-poppins flex items-center gap-1.5 mb-1">
                      <span className="text-indigo-600">{idx + 1}</span>
                      <span>{step.title}</span>
                    </h3>
                    <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed max-w-[190px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {idx < 3 && (
                  <div className="hidden md:flex items-center text-indigo-500 shrink-0 mx-2 self-start pt-[24px]">
                    <ArrowRight className="h-4 w-4" />
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
      <section className="relative w-full py-12 md:py-16 bg-slate-50/50 border-t border-slate-100">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-indigo-500 mb-2.5">
              INDUSTRIES
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight font-poppins">
              We Build Apps For Every Industry
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              {
                icon: (
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "E-commerce Apps",
                desc: "Boost sales with seamless shopping experiences and secure payments."
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                ),
                title: "Healthcare Apps",
                desc: "Telemedicine, patient portals and health management solutions."
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Booking Apps",
                desc: "Travel, hotel, taxi and appointment booking made effortless."
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "Education Apps",
                desc: "E-learning, online courses and student engagement platforms."
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                title: "SaaS Apps",
                desc: "Scalable SaaS products that solve real business problems."
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Enterprise Apps",
                desc: "Custom enterprise apps to streamline operations and productivity."
              }
            ].map((ind, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col items-start text-left hover:shadow-md hover:border-indigo-100/50 transition-all duration-300">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 shrink-0">
                  {ind.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-poppins mb-1.5 leading-tight">{ind.title}</h3>
                <p className="text-[10px] text-slate-500 leading-normal font-normal">{ind.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          7. WHY CHOOSE DIGINET SECTION
          ======================================================== */}
      <section className="relative w-full py-12 md:py-16 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-indigo-500 mb-2.5">
              WHY CHOOSE DIGINET
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight font-poppins">
              Your Partner for Mobile Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                icon: <Users className="h-5 w-5 text-indigo-650" />,
                title: "Experienced Team",
                desc: "Skilled developers and designers with deep industry expertise."
              },
              {
                icon: <Server className="h-5 w-5 text-indigo-655" />,
                title: "Scalable Architecture",
                desc: "Future-ready solutions built for performance and scalability."
              },
              {
                icon: <Layers className="h-5 w-5 text-indigo-660" />,
                title: "Clean UI/UX",
                desc: "Beautiful, intuitive and user-friendly experiences that convert."
              },
              {
                icon: <ClipboardList className="h-5 w-5 text-indigo-665" />,
                title: "Transparent Delivery",
                desc: "Agile process with clear communication and regular updates."
              },
              {
                icon: <Headphones className="h-5 w-5 text-indigo-670" />,
                title: "Post-Launch Support",
                desc: "24/7 support and maintenance to keep your app ahead."
              }
            ].map((choose, idx) => (
              <div key={idx} className="bg-slate-50/50 border border-slate-100 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-md hover:border-indigo-100/50 transition-all duration-300">
                <div className="h-10 w-10 rounded-full bg-white border border-slate-200/80 shadow-sm flex items-center justify-center mb-4 shrink-0">
                  {choose.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-poppins mb-2">{choose.title}</h3>
                <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed font-normal">{choose.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          8. RESULTS, TESTIMONIALS & CTA (Split Layout Grid)
          ======================================================== */}
      <section className="relative w-full py-6 md:py-8 bg-slate-50/40 border-t border-slate-100">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
            
            {/* Left Column: Proven Results */}
            <div className="w-full lg:w-[26%] flex flex-col justify-between bg-white border border-slate-200/50 p-6 md:p-7 rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col gap-5 flex-grow">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-indigo-500 mb-1 block">
                  PROVEN RESULTS
                </span>

                <div className="flex flex-col gap-4 py-1">
                  {[
                    { val: "-45%", label: "App load time reduction with native caching strategies.", icon: <Activity className="h-5 w-5 text-indigo-600" /> },
                    { val: "99.9%", label: "Crash-free session ratio maintained across devices.", icon: <ShieldCheck className="h-5 w-5 text-indigo-600" /> },
                    { val: "2.4M+", label: "Active store downloads achieved across portfolio apps.", icon: <TrendingUp className="h-5 w-5 text-indigo-600" /> }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-row items-start gap-3 border-t border-slate-100 pt-3 first:border-0 first:pt-0">
                      <div className="h-10 w-10 rounded-xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-lg md:text-xl font-bold text-indigo-600 leading-none mb-1">
                          {item.val}
                        </span>
                        <span className="text-[11px] md:text-xs text-slate-500 leading-normal">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-auto border-t border-slate-100/60">
                <button
                  onClick={openBooking}
                  className="inline-flex items-center text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors group/link"
                >
                  View Case Studies
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Middle Column: Testimonials (Vertical Marquee) */}
            <div className="w-full lg:w-[32%] flex flex-col justify-start relative h-[450px] overflow-hidden">
              <div className="flex flex-col mb-4 shrink-0">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-indigo-500 mb-2 block">
                  WHAT OUR CLIENTS SAY
                </span>
              </div>

              {/* Infinite Scrolling Container */}
              <div className="relative w-full flex-1 overflow-hidden h-[380px]">
                {/* Fade overlays */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#f8fafc] via-[#f8fafc]/70 to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/70 to-transparent z-10 pointer-events-none" />

                <div className="flex flex-col gap-4 py-2 animate-vertical-marquee">
                  {/* Testimonials Set 1 */}
                  {testimonials.map((testi, idx) => (
                    <div key={`t1-${idx}`} className="bg-white border border-slate-100/80 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-4 text-left">
                      <div className="flex items-start gap-2.5">
                        <span className="text-xl font-serif text-indigo-500 font-black leading-none shrink-0">“</span>
                        <p className="text-[11px] md:text-xs text-slate-600 leading-relaxed font-normal font-sans">
                          {testi.text}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                        <img 
                          src={testi.avatarUrl} 
                          alt={testi.name} 
                          className="h-9 w-9 rounded-full object-cover shrink-0 border border-slate-200" 
                        />
                        <div className="flex flex-col">
                          <h4 className="font-bold text-slate-900 text-xs font-poppins leading-none mb-1">
                            {testi.name}
                          </h4>
                          <p className="text-[9px] text-slate-400 leading-none">
                            {testi.role}, {testi.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Testimonials Set 2 (Duplicated for loop) */}
                  {testimonials.map((testi, idx) => (
                    <div key={`t2-${idx}`} className="bg-white border border-slate-100/80 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-4 text-left">
                      <div className="flex items-start gap-2.5">
                        <span className="text-xl font-serif text-indigo-500 font-black leading-none shrink-0">“</span>
                        <p className="text-[11px] md:text-xs text-slate-600 leading-relaxed font-normal font-sans">
                          {testi.text}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                        <img 
                          src={testi.avatarUrl} 
                          alt={testi.name} 
                          className="h-9 w-9 rounded-full object-cover shrink-0 border border-slate-200" 
                        />
                        <div className="flex flex-col">
                          <h4 className="font-bold text-slate-900 text-xs font-poppins leading-none mb-1">
                            {testi.name}
                          </h4>
                          <p className="text-[9px] text-slate-400 leading-none">
                            {testi.role}, {testi.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: CTA Banner Card */}
            <div className="w-full lg:w-[42%] flex flex-col">
              <div 
                className="w-full rounded-[32px] border border-slate-800/40 shadow-xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between h-full min-h-[420px]"
                style={{ 
                  background: "linear-gradient(135deg, #020617 0%, #081125 50%, #0f172a 100%)",
                }}
              >
                {/* Cyber-grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-35 pointer-events-none z-0" />

                {/* Glowing radial accents */}
                <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-indigo-500/10 blur-[60px] pointer-events-none z-0" />
                <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-blue-600/10 blur-[60px] pointer-events-none z-0" />

                {/* Hologram watermark placed absolutely in the background */}
                <img 
                  src="/images/cta_mobile.png" 
                  alt="Mobile Hologram Watermark" 
                  className="absolute bottom-[-30px] right-[-30px] w-[270px] h-[270px] md:w-[320px] md:h-[320px] object-contain pointer-events-none z-0 mix-blend-screen opacity-50 filter drop-shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                />

                <div className="relative z-10 flex flex-col items-start text-left w-full h-full justify-between py-1">
                  <div className="flex flex-col items-start text-left">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-[0.15em] text-indigo-400 bg-indigo-950/40 border border-indigo-800/30 mb-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      Ready to Build Your Mobile App?
                    </span>
                    
                    <h3 className="text-xl md:text-[25px] font-black text-white leading-tight font-poppins mb-3 max-w-[280px] md:max-w-[340px]">
                      Let&apos;s turn your idea into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 font-extrabold">powerful mobile solution</span> that drives growth
                    </h3>

                    <p className="text-[11px] md:text-xs text-slate-300 leading-relaxed mb-4 font-normal max-w-[260px] md:max-w-[300px]">
                      Consult our mobile engineering experts today to map out a scalable native or cross-platform solution.
                    </p>

                    <ul className="flex flex-col gap-1.5 text-[10px] md:text-[11px] text-slate-400 font-medium">
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-indigo-400" />
                        Free Architecture Blueprint Review
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-indigo-400" />
                        Targeted Native Performance Specs
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={openBooking}
                      className="cursor-pointer inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-100 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-black/10"
                    >
                      Book Consultation
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. FAQ & SUPPORT SECTION (Dark Blue Full-Width Footer Band)
          ======================================================== */}
      <section className="relative w-full py-8 md:py-10 bg-[#06142D] border-t border-slate-900 overflow-hidden shadow-2xl">
        
        {/* Background ambient spot */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[100px]" />
          <div className="absolute top-0 left-[-10%] h-[350px] w-[350px] rounded-full bg-blue-650/5 blur-[80px]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-stretch items-center">
            
            {/* Left side Accordion */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full lg:border-r lg:border-slate-800/60 lg:pr-12">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-indigo-400 mb-4 block">
                  FREQUENTLY ASKED QUESTIONS
                </span>

                <div className="w-full flex flex-col mt-2">
                  {faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="border-b border-slate-800/80 last:border-0">
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full py-4 flex items-center justify-between text-left font-bold text-xs md:text-sm text-white font-poppins hover:text-indigo-400 transition-colors cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          <span className="text-slate-500 font-normal text-lg ml-2 shrink-0 select-none">
                            {isOpen ? <Minus className="h-4 w-4 text-indigo-400" /> : <Plus className="h-4 w-4 text-slate-400" />}
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
                              <p className="pb-4 text-xs md:text-sm text-slate-400 leading-relaxed font-normal">
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

              <div className="pt-6 mt-4">
                <Link href="/contact" className="inline-flex items-center text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors group">
                  View all FAQs
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right side Support Widget Card */}
            <div className="lg:col-span-5 flex flex-col justify-start lg:pl-12 w-full h-full">
              <div 
                className="w-full bg-[#081630]/60 border border-slate-800/80 rounded-[28px] p-6 md:p-8 relative overflow-hidden flex flex-col justify-between h-full min-h-[340px]"
                style={{
                  background: "radial-gradient(circle at 100% 100%, rgba(99, 102, 241, 0.08), transparent 50%), #081630/60"
                }}
              >
                {/* Grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:1.25rem_1.25rem] opacity-20 pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-5">
                  {/* Status Indicator */}
                  <div className="flex items-center justify-start w-full">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-[0.12em] text-indigo-400 bg-indigo-950/40 border border-indigo-800/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      Support Online
                    </span>
                  </div>

                  {/* Icon + Title Block */}
                  <div className="flex items-start gap-3.5 mt-2">
                    <div className="h-11 w-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                      <Headphones className="h-5.5 w-5.5 text-indigo-400" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-400 mb-1">
                        HAVE QUESTIONS?
                      </span>
                      <h4 className="text-sm font-bold text-white font-poppins leading-tight">
                        Talk to our Mobile Architects
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-normal mt-1 font-normal max-w-[220px]">
                        Get immediate technical assistance, platform scoping, or consultation booking support.
                      </p>
                    </div>
                  </div>

                  {/* Connect details */}
                  <div className="flex flex-col gap-2.5 border-t border-slate-800/60 pt-4 mt-2">
                    <div className="flex items-center gap-3 text-left">
                      <div className="h-8 w-8 rounded-full bg-indigo-500/5 border border-indigo-500/15 flex items-center justify-center text-indigo-400 shrink-0">
                        <Phone className="h-3.5 w-3.5" />
                      </div>
                      <div className="flex flex-col leading-none">
                        <span className="text-[8px] font-black uppercase tracking-wider text-slate-500">CALL DIRECT</span>
                        <span className="text-xs font-bold text-white mt-1 hover:text-indigo-400 transition-colors select-all">+1 (415) 555-0198</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-left">
                      <div className="h-8 w-8 rounded-full bg-indigo-500/5 border border-indigo-500/15 flex items-center justify-center text-indigo-400 shrink-0">
                        <Mail className="h-3.5 w-3.5" />
                      </div>
                      <div className="flex flex-col leading-none">
                        <span className="text-[8px] font-black uppercase tracking-wider text-slate-500">EMAIL ENQUIRIES</span>
                        <span className="text-xs font-bold text-white mt-1 hover:text-indigo-400 transition-colors select-all">hello@diginetsolutions.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <div className="flex flex-col items-start leading-none text-left">
                    <span className="text-[8px] font-bold uppercase text-slate-500">AVG RESPONSE TIME</span>
                    <span className="text-xs font-black text-white mt-1 font-sans">15 Minutes</span>
                  </div>
                  <button
                    onClick={openBooking}
                    className="cursor-pointer inline-flex items-center justify-center px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 transition-all duration-350 shadow-md shadow-indigo-650/15"
                  >
                    Start a Live Chat
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
