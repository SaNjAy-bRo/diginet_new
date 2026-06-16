"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Plus, Minus,
  Shield, ShieldAlert, Eye, Activity, Zap, FileSpreadsheet,
  Lock, Search, Phone, Mail, Headphones, ChevronLeft, ChevronRight,
  TrendingUp, CheckCircle, HelpCircle, Users, Award, ShieldCheck,
  Server, HardDrive, Cpu, Radio, Network, Target, AlertTriangle, ClipboardList, Monitor
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
  },
  {
    id: 4,
    text: "Diginet's continuous vulnerability scanning has saved us from multiple zero-day exploits. Their responsiveness is incredible.",
    name: "Marcus Thorne",
    role: "Director of Security",
    company: "CyberVigil",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 5,
    text: "Passionate team with deep expertise in regulatory compliance. They helped us secure our GDPR and ISO27001 certifications in record time.",
    name: "Sophia Alistair",
    role: "Chief Compliance Officer",
    company: "FinGuard Corp",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
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
                className="relative w-full max-w-[640px] aspect-[16/10] flex items-center justify-center overflow-hidden bg-transparent"
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
              <div key={idx} className="group bg-white border border-slate-100/80 p-6 sm:p-8 rounded-[28px] flex flex-row gap-5 items-start shadow-[0_8px_30px_rgb(0,0,0,0.012)] hover:shadow-[0_20px_50px_rgba(6,182,212,0.06)] hover:border-cyan-500/20 hover:translate-y-[-2px] transition-all duration-300">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/10 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2">
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
                    className="inline-flex items-center text-xs md:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group/link w-fit"
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
          4. 24/7 SECURITY OPERATIONS CENTER (SOC) (Full-Width Dark Band)
          ======================================================== */}
      <section className="relative w-full py-8 md:py-10 bg-[#06142D] bg-gradient-to-br from-[#06142D] via-[#081733] to-[#0b2046] overflow-hidden border-y border-slate-900 shadow-xl">
        
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
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-y-8 sm:gap-y-0 sm:divide-x sm:divide-slate-800/60">
              {[
                {
                  icon: <Target className="h-11 w-11 text-cyan-400 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" />,
                  title: "Continuous Monitoring",
                  desc: "24/7 visibility across your systems, networks, and applications."
                },
                {
                  icon: <AlertTriangle className="h-11 w-11 text-cyan-400 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" />,
                  title: "Threat Detection",
                  desc: "AI-powered detection identifies and prioritizes real threats."
                },
                {
                  icon: <ShieldCheck className="h-11 w-11 text-cyan-400 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" />,
                  title: "Rapid Response",
                  desc: "Our experts respond fast to contain and neutralize threats."
                },
                {
                  icon: <ClipboardList className="h-11 w-11 text-cyan-400 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" />,
                  title: "Actionable Reporting",
                  desc: "Clear insights and recommendations to strengthen your security."
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
          5. OUR CAPABILITIES FLOW TIMELINE (Light Background)
          ======================================================== */}
      <section className="relative w-full py-8 md:py-10 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-6 flex flex-col items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-cyan-500 mb-2.5">
              OUR SECURITY CAPABILITIES
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight font-poppins">
              A Proven Framework for Cyber Resilience
            </h2>
          </div>

          {/* Workflow Timeline */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-4 relative">
            {[
              {
                title: "Assess",
                desc: "We evaluate your environment, identify risks, and understand your business objectives.",
                icon: <Search className="h-6 w-6 text-blue-600" />
              },
              {
                title: "Secure",
                desc: "We implement tailored controls to protect your infrastructure and business needs.",
                icon: <ShieldCheck className="h-6 w-6 text-blue-600" />
              },
              {
                title: "Monitor",
                desc: "24/7 monitoring detects threats early and ensures proactive response.",
                icon: <Monitor className="h-6 w-6 text-blue-600" />
              },
              {
                title: "Respond",
                desc: "We contain incidents, and recover quickly to ensure business continuity.",
                icon: <Zap className="h-6 w-6 text-blue-600" />
              }
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-row items-start gap-4 text-left group">
                  <div className="h-16 w-16 rounded-full border border-slate-200/85 shadow-sm flex items-center justify-center bg-slate-50 shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400/40 relative">
                    <div className="h-[90%] w-[90%] rounded-full bg-white flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="text-xs md:text-sm font-black text-slate-900 font-poppins flex items-center gap-1.5 mb-1">
                      <span className="text-blue-600">{idx + 1}</span>
                      <span>{step.title}</span>
                    </h3>
                    <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed max-w-[190px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {idx < 3 && (
                  <div className="hidden md:flex items-center text-blue-500 shrink-0 mx-2 self-start pt-[24px]">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. RESULTS, TESTIMONIALS & CTA (Split Layout Grid)
          ======================================================== */}
      <section className="relative w-full py-6 md:py-8 bg-slate-50/40 border-t border-slate-100">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
            
            {/* Left Column: Proven Results */}
            <div className="w-full lg:w-[26%] flex flex-col justify-between bg-white border border-slate-200/50 p-6 md:p-7 rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col gap-5 flex-grow">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-cyan-500 mb-1 block">
                  PROVEN RESULTS. REAL IMPACT.
                </span>

                <div className="flex flex-col gap-4 py-1">
                  {[
                    { val: "72%", label: "Reduction in security incidents by our managed security clients.", icon: <Activity className="h-5 w-5 text-blue-600" /> },
                    { val: "99.9%", label: "Uptime achieved with 24/7 monitoring and threat management.", icon: <ShieldCheck className="h-5 w-5 text-blue-600" /> },
                    { val: "Faster Recovery", label: "Reduced mean time to detect and respond by up to 60%.", icon: <TrendingUp className="h-5 w-5 text-blue-600" /> }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-row items-start gap-3 border-t border-slate-100 pt-3 first:border-0 first:pt-0">
                      <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100/50 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-lg md:text-xl font-bold text-blue-600 leading-none mb-1">
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
                  className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
                >
                  View case study
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Middle Column: Testimonials (Seamless column, no outer card wrapper) */}
            <div className="w-full lg:w-[32%] flex flex-col justify-start relative h-[450px] overflow-hidden">
              <div className="flex flex-col mb-4 shrink-0">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-cyan-500 mb-2 block">
                  WHAT OUR CLIENTS SAY
                </span>
              </div>

              {/* Infinite Scrolling Container */}
              <div className="relative w-full flex-1 overflow-hidden h-[380px]">
                {/* Fade overlays for smooth vertical transitions */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#f8fafc] via-[#f8fafc]/70 to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/70 to-transparent z-10 pointer-events-none" />

                <div className="flex flex-col gap-4 py-2 animate-vertical-marquee">
                  {/* Testimonials Set 1 */}
                  {testimonials.map((testi, idx) => (
                    <div key={`t1-${idx}`} className="bg-white border border-slate-100/80 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-4 text-left">
                      <div className="flex items-start gap-2.5">
                        <span className="text-xl font-serif text-blue-500 font-black leading-none shrink-0">“</span>
                        <p className="text-[11px] md:text-xs text-slate-600 leading-relaxed font-normal">
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
                  
                  {/* Testimonials Set 2 (Duplicated for infinite scroll loop) */}
                  {testimonials.map((testi, idx) => (
                    <div key={`t2-${idx}`} className="bg-white border border-slate-100/80 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-4 text-left">
                      <div className="flex items-start gap-2.5">
                        <span className="text-xl font-serif text-blue-500 font-black leading-none shrink-0">“</span>
                        <p className="text-[11px] md:text-xs text-slate-600 leading-relaxed font-normal">
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

            {/* Right Column: CTA Banner Card with vertical layout */}
            <div className="w-full lg:w-[42%] flex flex-col">
              <div 
                className="w-full rounded-[32px] border border-slate-800/40 shadow-xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between h-full min-h-[420px]"
                style={{ 
                  background: "linear-gradient(135deg, #020617 0%, #0b1528 50%, #0f172a 100%)",
                }}
              >
                {/* Cyber-grid background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-35 pointer-events-none z-0" />

                {/* Glowing radial accents */}
                <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-cyan-500/10 blur-[60px] pointer-events-none z-0" />
                <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-blue-600/10 blur-[60px] pointer-events-none z-0" />

                {/* Hologram graphic placed absolutely in the background (bottom right) */}
                <img 
                  src="/images/security_cta_clean_hologram.png" 
                  alt="Cyber Security Hologram" 
                  className="absolute bottom-[-30px] right-[-30px] w-[270px] h-[270px] md:w-[320px] md:h-[320px] object-contain pointer-events-none z-0 mix-blend-screen opacity-50 filter drop-shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                />

                <div className="relative z-10 flex flex-col items-start text-left w-full h-full justify-between py-1">
                  <div className="flex flex-col items-start text-left">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-[0.15em] text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 mb-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      Ready to Strengthen Your Security?
                    </span>
                    
                    <h3 className="text-xl md:text-[25px] font-black text-white leading-tight font-poppins mb-3 max-w-[280px] md:max-w-[340px]">
                      Let&apos;s Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Security Strategy</span> That Protects What Matters
                    </h3>

                    <p className="text-[11px] md:text-xs text-slate-300 leading-relaxed mb-4 font-normal max-w-[260px] md:max-w-[300px]">
                      Talk to our experts today and take the first step toward a more resilient digital future.
                    </p>

                    <ul className="flex flex-col gap-1.5 text-[10px] md:text-[11px] text-slate-400 font-medium">
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-cyan-400" />
                        Free Initial Vulnerability Assessment
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-cyan-400" />
                        Custom Zero-Trust Roadmapping
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={openBooking}
                      className="cursor-pointer inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-100 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-black/10"
                    >
                      Book a Consultation
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
          7. FAQ SECTION (Dark Blue Full-Width Footer Band)
          ======================================================== */}
      <section className="relative w-full py-8 md:py-10 bg-[#06142D] border-t border-slate-900 overflow-hidden shadow-2xl">
        
        {/* Background ambient spot */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
          <div className="absolute top-0 left-[-10%] h-[350px] w-[350px] rounded-full bg-blue-600/5 blur-[80px]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-stretch items-center">
            
            {/* Left side Accordion */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full lg:border-r lg:border-slate-800/60 lg:pr-12">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-cyan-400 mb-4 block">
                  FREQUENTLY ASKED QUESTIONS
                </span>

                <div className="w-full flex flex-col mt-2">
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

            {/* Right side help info */}
            <div className="lg:col-span-5 flex flex-col justify-start lg:pl-12 w-full h-full">
              <div 
                className="w-full bg-[#081630]/60 border border-slate-800/80 rounded-[28px] p-6 md:p-8 relative overflow-hidden flex flex-col justify-between h-full min-h-[340px]"
                style={{
                  background: "radial-gradient(circle at 100% 100%, rgba(6, 182, 212, 0.08), transparent 50%), #081630/60"
                }}
              >
                {/* Cyber grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:1.25rem_1.25rem] opacity-20 pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-5">
                  {/* Status Indicator */}
                  <div className="flex items-center justify-start w-full">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-[0.12em] text-cyan-400 bg-cyan-950/40 border border-cyan-800/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      Support Online
                    </span>
                  </div>

                  {/* Headset and Question Block */}
                  <div className="flex items-start gap-3.5 mt-2">
                    <div className="h-11 w-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                      <Headphones className="h-5.5 w-5.5 text-cyan-400" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 mb-1">
                        HAVE QUESTIONS?
                      </span>
                      <p className="text-sm md:text-base font-bold text-white font-poppins leading-snug">
                        Our experts are here to help you strengthen your security posture.
                      </p>
                    </div>
                  </div>

                  {/* Vertical Stack Contact Details */}
                  <div className="text-left mt-3 pt-5 border-t border-slate-800/60 flex flex-col gap-3.5">
                    <div className="flex items-center gap-3 text-xs md:text-sm">
                      <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                      <span className="text-slate-350">Call us:</span>
                      <a href="tel:+15554322023" className="font-bold text-white hover:text-cyan-400 transition-colors">
                        +1 (555) 432-2023
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-xs md:text-sm">
                      <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                      <span className="text-slate-350">Email:</span>
                      <a href="mailto:hello@diginetsolutions.com" className="font-bold text-white hover:text-cyan-400 transition-colors">
                        hello@diginetsolutions.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Action Button */}
                <div className="relative z-10 mt-6 pt-2">
                  <button 
                    onClick={openBooking}
                    className="w-full cursor-pointer inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-500/10"
                  >
                    Start a Live Chat
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
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
