"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Plus, Minus,
  Shield, ShieldAlert, Eye, Activity, Zap, FileSpreadsheet,
  Lock, Search, Phone, Mail, Headphones, ChevronLeft, ChevronRight,
  TrendingUp, CheckCircle, HelpCircle, Users, Award, ShieldCheck,
  Server, HardDrive, Cpu, Radio, Network
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/context/BookingContext";

// Testimonials Array for Cyber Security
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
    text: "Diginet's SOC team has been a game-changer for us. Their proactive monitoring and quick response have significantly reduced our security risks.",
    name: "Sarah Johnson",
    role: "CTO",
    company: "Nexora Technologies",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 1,
    text: "Their security assessments uncovered critical vulnerabilities, and their team delivered a highly customized solution that worked seamlessly.",
    name: "Michael Patel",
    role: "IT Director",
    company: "BrightLine Systems",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 2,
    text: "With Diginet's zero-trust implementation, we passed our SOC2 compliance audit without a single reservation. Unmatched expertise.",
    name: "David Vance",
    role: "VP of Infrastructure",
    company: "Apex Systems",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 3,
    text: "Their cloud security configuration isolated multiple vectors that our previous MSSP had overlooked. Highly recommended.",
    name: "Emily Carter",
    role: "SecOps Lead",
    company: "CloudWave Solutions",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&h=120&q=80"
  }
];

// FAQs Accordion
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What cybersecurity services do you offer?",
    answer: "We offer end-to-end security compliance and protection services including Vulnerability Assessments & Penetration Testing (VAPT), Managed Detection & Response (MDR) via our 24/7 Security Operations Center, Zero-Trust Cloud & Network Security design, Endpoint Protection (EDR), and Compliance Readiness Consulting for SOC2, ISO 27001, HIPAA, and GDPR."
  },
  {
    question: "How do you monitor and respond to threats?",
    answer: "We leverage a next-generation SIEM platform combined with security orchestration tools to monitor your infrastructure 24/7. When a high-severity alert or anomaly is detected, our on-duty security engineers immediately validate the threat, isolate the affected endpoints, and initiate active containment protocols to minimize business impact."
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "Yes. We scale our security solutions to meet the needs of fast-growing startups requiring rapid compliance setup, mid-market enterprises looking for comprehensive co-managed security, and large global organizations seeking rigorous endpoint defense and network segmentation audits."
  },
  {
    question: "How do you ensure data and compliance security?",
    answer: "We incorporate zero-trust security parameters across all access controls, databases, and network sessions. This includes enforcing Multi-Factor Authentication (MFA), setting up encrypted data channels (IPsec/WireGuard), continuous vulnerability scans, and maintaining tamper-proof audit trails to comply with global security frameworks."
  }
];

export default function CybersecurityPage() {
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
      
      {/* ========================================================
          1. HERO SECTION (Dark background)
          ======================================================== */}
      <section className="relative w-full bg-[#06142D] pt-[95px] sm:pt-[100px] md:pt-[105px] pb-10 md:pb-14 overflow-hidden">
        
        {/* Background ambient grids/effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[130px]" />
          <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.08]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 sm:mb-4 select-none">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-600">Services</span>
            <span className="text-slate-600">/</span>
            <span className="text-cyan-400">Cybersecurity</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 flex flex-col text-left items-start">
              
              <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-3 block">
                Cyber Security Services
              </span>

              <h1 className="text-3xl sm:text-[44px] lg:text-[48px] xl:text-[52px] font-black tracking-tight text-white leading-[1.08] mb-5 font-poppins">
                Cyber Security That <br />
                Protects Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Business</span>
              </h1>

              <p className="text-[14px] md:text-[15px] text-slate-400 leading-relaxed mb-4 max-w-[500px]">
                We secure your infrastructure, users, cloud environments, and data with end-to-end cybersecurity services—so you can run with confidence and focus on growth.
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
              </div>

            </div>

            {/* Right Hero Graphic: High-fidelity landscape image with neon glowing effects */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center py-0 w-full">
              <motion.div 
                className="relative w-full max-w-[640px] aspect-[16/10] flex items-center justify-center rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.25)] bg-[#040d1e]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Floating animation for high-tech feeling */}
                <motion.img 
                  src="/images/cybersecurity_hero.png" 
                  alt="Cyber Security Hologram Platform" 
                  className="w-full h-full object-cover select-none relative z-0"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>

          </div>

          {/* Underneath: 4 Value Pillars at the bottom of the section */}
          <div className="mt-8 pt-8 border-t border-slate-800/40 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-[1100px] w-full">
            {[
              { title: "24/7 Threat Monitoring", desc: "Constant vigil over active infrastructure.", icon: <Eye className="h-4.5 w-4.5 text-cyan-400 stroke-[2.5px]" /> },
              { title: "Reduce Risk & Minimize Impact", desc: "Isolate vulnerabilities before escalation.", icon: <ShieldAlert className="h-4.5 w-4.5 text-cyan-400 stroke-[2.5px]" /> },
              { title: "Rapid Incident Response", desc: "Immediate containment and system recovery.", icon: <Zap className="h-4.5 w-4.5 text-cyan-400 stroke-[2.5px]" /> },
              { title: "Compliance & Governance", desc: "Enforce SOC2, ISO, and data protocols.", icon: <FileSpreadsheet className="h-4.5 w-4.5 text-cyan-400 stroke-[2.5px]" /> }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3.5 items-start">
                <div className="h-9.5 w-9.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
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
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes cyberMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .cyber-marquee-track {
            display: flex;
            width: max-content;
            animation: cyberMarquee 25s linear infinite;
          }
        `}} />
        
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 relative">
          
          <div className="shrink-0 text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400 select-none">
              Trusted by Leading Businesses
            </span>
          </div>

          <div className="relative overflow-hidden flex-1 py-1">
            <div className="cyber-marquee-track">
              
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
                  { name: "apex", sub: "SYSTEMS" },
                  { name: "NEXORA", sub: "TECHNOLOGIES" },
                  { name: "BrightLine", sub: "SYSTEMS" },
                  { name: "CloudWave", sub: "SOLUTIONS" },
                  { name: "PIVOT", sub: "DIGITAL" }
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
          3. OUR CORE SERVICES SECTION (Light Background)
          ======================================================== */}
      <section className="relative w-full pt-16 md:pt-20 pb-8 md:pb-12 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-cyan-500 mb-2.5">
              Our Core Cyber Security Services
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight font-poppins">
              Comprehensive Protection Across Every Layer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Shield className="h-6 w-6 text-white" />,
                title: "Managed Security Services",
                desc: "24/7 monitoring, threat detection, and proactive defense by our expert SOC team."
              },
              {
                icon: <Search className="h-6 w-6 text-white" />,
                title: "Vulnerability Assessment & Penetration Testing",
                desc: "Identify weaknesses before attackers do with in-depth assessments and testing."
              },
              {
                icon: <Network className="h-6 w-6 text-white" />,
                title: "Network Security",
                desc: "Protect your network with firewalls, IDS, segmentation, and secure access controls."
              },
              {
                icon: <HardDrive className="h-6 w-6 text-white" />,
                title: "Endpoint Protection",
                desc: "Advanced endpoint detection and response to stop threats at the device level."
              },
              {
                icon: <Server className="h-6 w-6 text-white" />,
                title: "Cloud Security",
                desc: "Secure your cloud workloads, data, and identities across multi-cloud environments."
              },
              {
                icon: <FileSpreadsheet className="h-6 w-6 text-white" />,
                title: "Compliance & Risk Management",
                desc: "Stay compliant and reduce risk with frameworks, policies, and continuous audits."
              }
            ].map((srv, idx) => (
              <div key={idx} className="group bg-white border border-slate-100 p-8 rounded-[24px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-cyan-100/80 transition-all duration-300">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6 shadow-md transition-all duration-300 group-hover:scale-105">
                    {srv.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 font-poppins mb-3 leading-tight min-h-[50px] flex items-center">
                    {srv.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal mb-8">
                    {srv.desc}
                  </p>
                </div>
                <button
                  onClick={openBooking}
                  className="inline-flex items-center text-xs md:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group/link mt-auto w-fit"
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
          4. 24/7 SECURITY OPERATIONS CENTER (SOC) (Full-Width Dark Band)
          ======================================================== */}
      <section className="relative w-full py-12 md:py-16 bg-[#06142D] bg-gradient-to-br from-[#06142D] via-[#081733] to-[#0b2046] overflow-hidden border-y border-slate-900 shadow-xl">
        
        {/* Background ambient spots */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-30%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute bottom-[-30%] left-[-10%] h-[450px] w-[450px] rounded-full bg-blue-600/5 blur-[100px]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side info block */}
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-2">
                ALWAYS ON. ALWAYS PROTECTING.
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight font-poppins mb-4">
                24/7 Security Operations Center
              </h2>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-6 max-w-[340px]">
                Our SOC continuously monitors, detects, and responds to threats in real time—so you can stay ahead of attackers and protect what matters most.
              </p>
              <button
                onClick={openBooking}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-300 border border-slate-700 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-all duration-300"
              >
                How Our SOC Works
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </button>
            </div>

            {/* Right side 4 capabilities columns */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-4 gap-6">
              {[
                {
                  icon: <Eye className="h-6 w-6 text-cyan-400" />,
                  title: "Continuous Monitoring",
                  desc: "24/7 visibility across your systems, networks, and applications."
                },
                {
                  icon: <Activity className="h-6 w-6 text-cyan-400" />,
                  title: "Threat Detection",
                  desc: "AI-powered detection identifies and prioritizes real threats."
                },
                {
                  icon: <Zap className="h-6 w-6 text-cyan-400" />,
                  title: "Rapid Response",
                  desc: "Our experts respond fast to contain and neutralize threats."
                },
                {
                  icon: <FileSpreadsheet className="h-6 w-6 text-cyan-400" />,
                  title: "Actionable Reporting",
                  desc: "Clear insights and recommendations to strengthen your security."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-start text-left bg-slate-900/40 border border-slate-800/60 p-5 rounded-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
                  {/* Glowing background bubble */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-cyan-500/5 blur-xl group-hover:bg-cyan-500/10 transition-colors" />
                  
                  <div className="h-11 w-11 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 z-10 shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-white font-poppins mb-2 z-10 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] md:text-xs text-slate-400 leading-normal font-normal z-10">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          5. OUR CAPABILITIES FLOW TIMELINE (Light Background)
          ======================================================== */}
      <section className="relative w-full pt-16 md:pt-20 pb-8 md:pb-12 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-cyan-500 mb-2.5">
              OUR SECURITY CAPABILITIES
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight font-poppins">
              A Proven Framework for Cyber Resilience
            </h2>
          </div>

          {/* Workflow Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
            
            {[
              {
                title: "Assess",
                desc: "We evaluate your environment, identify risks, and understand your business objectives.",
                icon: <Search className="h-5 w-5 text-blue-600" />
              },
              {
                title: "Secure",
                desc: "We implement tailored controls to protect your infrastructure and business needs.",
                icon: <ShieldCheck className="h-5 w-5 text-blue-600" />
              },
              {
                title: "Monitor",
                desc: "24/7 monitoring detects threats early and ensures proactive response.",
                icon: <Eye className="h-5 w-5 text-blue-600" />
              },
              {
                title: "Respond",
                desc: "We contain incidents, and recover quickly to ensure business continuity.",
                icon: <Zap className="h-5 w-5 text-blue-600" />
              }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative group">
                
                {/* Connecting Dotted Line - Desktop Only */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-[22px] left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 z-0">
                    <div className="w-full h-full border-t border-dashed border-slate-300 flex items-center justify-end relative">
                      <svg className="absolute right-[-2px] top-[-4.5px] h-2.5 w-2.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Step Circle with Outer Radial Glow */}
                <div className="h-11 w-11 rounded-full bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center mb-4 z-10 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/40 relative">
                  <div className="absolute inset-0.5 rounded-full bg-white flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 mb-2.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                    {idx + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <h3 className="text-sm md:text-base font-bold text-slate-900 font-poppins">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-[220px]">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ========================================================
          6. RESULTS, TESTIMONIALS & CTA (Split Layout Grid)
          ======================================================== */}
      <section className="relative w-full pt-6 pb-12 md:pt-8 md:pb-16 bg-slate-50/40 border-t border-slate-100">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Proven Results */}
            <div className="lg:col-span-3 flex flex-col justify-between bg-white border border-slate-200/50 p-6 md:p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-cyan-500 mb-2 block">
                  PROVEN RESULTS. REAL IMPACT.
                </span>
                <h3 className="text-lg md:text-xl font-black text-slate-900 font-poppins mb-6 leading-snug">
                  Strengthening Defense
                </h3>

                <div className="flex flex-col gap-6">
                  {[
                    { val: "72%", label: "Reduction in security incidents by our managed security clients." },
                    { val: "99.9%", label: "Uptime achieved with 24/7 monitoring and threat management." },
                    { val: "Faster Recovery", label: "Reduced mean time to detect and respond by up to 60%." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-start border-t border-slate-100 pt-4 first:border-0 first:pt-0">
                      <span className="text-2xl md:text-3xl font-black text-blue-600 leading-none">
                        {item.val}
                      </span>
                      <span className="text-[11px] md:text-xs text-slate-500 leading-normal mt-2">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4">
                <button
                  onClick={openBooking}
                  className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
                >
                  View case study
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Middle Column: Auto-Scrolling Testimonial Card */}
            <div className="lg:col-span-4 flex flex-col bg-white border border-slate-200/50 p-6 md:p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-cyan-500 mb-2 block">
                WHAT OUR CLIENTS SAY
              </span>
              <h3 className="text-lg md:text-xl font-black text-slate-900 font-poppins mb-6 leading-snug">
                Client Success
              </h3>

              {/* Slider Area */}
              <div className="flex-1 flex flex-col justify-between relative overflow-hidden min-h-[200px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col justify-between h-full flex-1"
                  >
                    <div>
                      <span className="text-3xl font-serif text-cyan-500 font-bold block mb-1">“</span>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                        {testimonials[activeTestimonial].text}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                      <img 
                        src={testimonials[activeTestimonial].avatarUrl} 
                        alt={testimonials[activeTestimonial].name} 
                        className="h-10 w-10 rounded-full object-cover shrink-0 border border-slate-200" 
                      />
                      <div className="flex flex-col">
                        <h4 className="font-bold text-slate-900 text-xs md:text-sm font-poppins leading-tight">
                          {testimonials[activeTestimonial].name}
                        </h4>
                        <p className="text-[10px] text-slate-400 leading-normal mt-0.5">
                          {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slider Nav dots at the bottom */}
                <div className="flex gap-1.5 mt-6 justify-start">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeTestimonial === idx ? "w-4 bg-cyan-500" : "w-1.5 bg-slate-350"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: CTA Banner Card */}
            <div className="lg:col-span-5 w-full">
              <div 
                className="w-full bg-[#06142D] rounded-[32px] border border-slate-800/40 shadow-xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[380px] h-full"
                style={{ 
                  backgroundImage: "url('/images/cta_vibrant_bg.png')", 
                  backgroundSize: "cover", 
                  backgroundPosition: "center" 
                }}
              >
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#06142D]/95 via-[#071633]/85 to-transparent pointer-events-none z-0" />

                {/* Shield padlock outline SVG on the right */}
                <div className="absolute right-6 bottom-6 w-[35%] opacity-[0.12] pointer-events-none z-10 overflow-hidden flex items-end justify-end">
                  <svg className="w-full h-full text-white" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M50 5 L90 22 V55 C90 85 73 108 50 115 C27 108 10 85 10 55 V22 L50 5 Z" />
                    <circle cx="50" cy="50" r="12" />
                    <path d="M50 38 V42" />
                  </svg>
                </div>

                <div className="relative z-20 flex flex-col items-start text-left">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-300 mb-3 block">
                    READY TO STRENGTHEN YOUR SECURITY?
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight font-poppins max-w-[340px] mb-4">
                    Let&apos;s Build a Security Strategy That Protects What Matters
                  </h3>

                  <p className="text-[13px] text-slate-350 leading-relaxed max-w-[340px] mb-8 font-normal">
                    Talk to our experts today and take the first step toward a more resilient digital future.
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

      {/* ========================================================
          7. FAQ SECTION (Dark Blue Full-Width Footer Band)
          ======================================================== */}
      <section className="relative w-full py-12 md:py-16 bg-[#06142D] border-t border-slate-900 overflow-hidden shadow-2xl">
        
        {/* Background ambient spot */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
          <div className="absolute top-0 left-[-10%] h-[350px] w-[350px] rounded-full bg-blue-600/5 blur-[80px]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left side Accordion Accordion */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-cyan-400 mb-2 block">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight font-poppins mb-6">
                  Security Operations FAQ
                </h2>

                <div className="w-full flex flex-col mt-4">
                  {faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="border-b border-slate-800/80 last:border-0">
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full py-4 flex items-center justify-between text-left font-bold text-xs md:text-sm text-white font-poppins hover:text-cyan-400 transition-colors"
                        >
                          <span>{faq.question}</span>
                          <span className="text-slate-500 font-normal text-lg ml-2 shrink-0 select-none">
                            {isOpen ? <Minus className="h-4 w-4 text-cyan-400" /> : <Plus className="h-4 w-4 text-slate-400" />}
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
                <Link href="/contact" className="inline-flex items-center text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group">
                  View all FAQs
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right side help card */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-[#0a1f47]/50 border border-slate-800/40 p-6 md:p-8 rounded-[32px] flex flex-col justify-between shadow-2xl relative h-full">
                
                {/* Micro animation for headset */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <Headphones className="h-5.5 w-5.5 text-cyan-400" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                      HAVE QUESTIONS?
                    </span>
                    <h4 className="text-sm md:text-base font-bold text-white font-poppins leading-tight mt-0.5">
                      Our experts are here to help you strengthen your security posture.
                    </h4>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-left border-t border-slate-800/60 pt-6 mt-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4.5 w-4.5 text-cyan-400" />
                    <div>
                      <span className="text-[10px] text-slate-400 block">Call us directly</span>
                      <a href="tel:+15554322023" className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                        +1 (555) 432-2023
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-4.5 w-4.5 text-cyan-400" />
                    <div>
                      <span className="text-[10px] text-slate-400 block">Email our security desk</span>
                      <a href="mailto:hello@diginetsolutions.com" className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                        hello@diginetsolutions.com
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
