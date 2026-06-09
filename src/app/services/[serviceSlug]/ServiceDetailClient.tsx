"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Shield, Monitor, AppWindow, Share2, Megaphone, CheckCircle, ArrowLeft, ArrowRight, Layers, Compass, Check, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "digital-marketing": Megaphone,
  "social-media-management": Share2,
  "mobile-development": Smartphone,
  "application-development": AppWindow,
  "cybersecurity": Shield,
  "website-designing": Monitor,
};

interface ServiceDetailClientProps {
  serviceSlug: string;
  service: {
    name: string;
    tagline: string;
    description: string;
    features: { title: string; desc: string }[];
    techStack: string[];
    workflow: string[];
    metrics: { label: string; value: string }[];
  };
  theme: {
    accentText: string;
    accentBg: string;
    gradientHero: string;
    themeColor: string;
    pillBorder: string;
    glowColor: string;
  };
  serviceImg: string;
}

export default function ServiceDetailClient({
  serviceSlug,
  service,
  theme,
  serviceImg,
}: ServiceDetailClientProps) {
  const IconComponent = serviceIcons[serviceSlug] || Shield;

  return (
    <div className="relative min-h-screen bg-white text-slate-800">
      
      {/* SECTION 1: Service Hero Banner (Dark Redesigned Vibe with Mesh and Glows - Medium Height) */}
      <section className={`relative z-10 pt-28 pb-14 px-6 md:px-12 bg-gradient-to-b ${theme.gradientHero} text-white border-b border-slate-900 overflow-hidden`}>
        
        {/* Background Mesh Grid */}
        <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none overflow-hidden">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern-hero" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-hero)" />
          </svg>
        </div>

        {/* Large Radial Glow Circle behind content */}
        <div 
          className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full opacity-20 blur-3xl pointer-events-none z-0" 
          style={{
            background: `radial-gradient(circle, ${theme.glowColor} 0%, transparent 70%)`
          }}
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Text content & Action links */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 tracking-widest uppercase transition-colors self-start"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> 
              <span>Back to Services</span>
            </Link>
            
            <div className="flex items-center gap-3 mt-1">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`w-11 h-11 rounded-xl flex items-center justify-center border ${theme.accentBg} shadow-md shrink-0 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity" />
                <IconComponent className="w-6 h-6 relative z-10" />
              </motion.div>
              <div className="h-0.5 w-8 bg-slate-800 rounded-full"></div>
            </div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-white"
            >
              {service.name}
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-base md:text-lg font-semibold tracking-wide ${theme.accentText}`}
            >
              {service.tagline}
            </motion.p>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-350 text-sm md:text-base leading-relaxed max-w-2xl"
            >
              {service.description}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-orange-brand hover:bg-orange-brand-hover text-white font-bold text-sm shadow-lg shadow-orange-brand/20 transition-all flex items-center gap-2"
              >
                Get Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#capabilities"
                className="px-6 py-3 rounded-xl border border-slate-850 bg-slate-900/40 text-slate-350 font-bold text-sm hover:bg-slate-900/80 hover:text-white transition-all backdrop-blur-sm"
              >
                Technical Capabilities
              </a>
            </motion.div>
          </div>
          
          {/* Right Column: Premium Image with Overlapping Floating Metrics */}
          <div className="lg:col-span-5 relative w-full mt-6 lg:mt-0 max-w-lg lg:max-w-none mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full aspect-[16/10] rounded-2xl p-2 border border-slate-800/80 bg-slate-900/35 backdrop-blur-sm shadow-2xl overflow-visible group"
            >
              {/* Outer soft glowing background */}
              <div 
                className="absolute -inset-1.5 rounded-[20px] opacity-25 blur-xl z-0 transition-opacity group-hover:opacity-35 pointer-events-none" 
                style={{
                  background: `linear-gradient(135deg, ${theme.glowColor}, transparent)`
                }}
              />
              
              {/* Image Frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden z-10 border border-slate-850">
                <Image
                  src={serviceImg}
                  alt={service.name}
                  fill
                  className="object-cover object-center transform group-hover:scale-103 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Glassmorphic Stats Dock (Mobile relative / Desktop absolute overlay) */}
              <div className="relative mt-8 lg:mt-0 lg:absolute lg:-bottom-8 lg:left-6 lg:right-6 z-20 p-4 rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-md shadow-2xl grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 sm:divide-x sm:divide-y-0 divide-y divide-slate-800/60">
                {service.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center px-4 sm:first:pl-0 sm:last:pr-0 py-2 sm:py-0">
                    <p className="text-[10px] text-slate-450 font-bold uppercase tracking-wider mb-1">
                      {metric.label}
                    </p>
                    <p className={`text-xl sm:text-2xl font-black tracking-tight ${theme.accentText}`}>
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Technical Capabilities Grid (Expanded & Clean) */}
      <section id="capabilities" className="relative z-10 py-24 px-6 md:px-12 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-primary shadow-sm mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Technical Capabilities
            </h2>
            <div className="h-1 w-20 bg-orange-brand mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 rounded-2xl border border-slate-150 bg-white shadow-sm hover:shadow-md hover:border-[#00a1e0]/35 transition-all duration-300 flex gap-5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-sky-100/60">
                  <Check className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2.5 group-hover:text-[#00a1e0] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Technical Tools Marquee (Dark Slate Background) */}
      <section className="relative z-10 py-16 bg-slate-950 border-y border-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <h3 className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest">
            ENGINEERING TECH STACK & INTEGRATIONS
          </h3>
        </div>
        <div className="flex w-full overflow-hidden relative">
          <div className="flex gap-8 whitespace-nowrap animate-marquee">
            {service.techStack.map((tech, idx) => (
              <span
                key={idx}
                className={`px-5 py-2.5 rounded-lg bg-slate-900 border ${theme.pillBorder} text-slate-200 text-sm font-semibold shadow-md`}
              >
                {tech}
              </span>
            ))}
            {/* Replicated once for styling buffer */}
            {service.techStack.map((tech, idx) => (
              <span
                key={`dup-${idx}`}
                className={`px-5 py-2.5 rounded-lg bg-slate-900 border ${theme.pillBorder} text-slate-200 text-sm font-semibold shadow-md`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Process Workflow & Lead CTA (Light Alternating Section) */}
      <section className="relative z-10 py-24 px-6 md:px-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Process Timeline Column */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-12 flex items-center gap-2">
              <Compass className="w-6 h-6 text-primary" /> Delivery Pipeline
            </h2>
            <div className="flex flex-col gap-8">
              {service.workflow.map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start relative">
                  {idx !== service.workflow.length - 1 && (
                    <span className="absolute left-4 top-10 bottom-[-32px] w-0.5 bg-slate-200"></span>
                  )}
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center font-bold text-primary text-sm shrink-0 shadow-sm relative z-10">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-bold mb-1">{step}</h4>
                    <p className="text-xs text-slate-550">Corporate pipeline phase {idx + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead capture banner column */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-xl flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Request {service.name} Briefing
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Schedule a private session with our deployment leads. We will review your current infrastructure telemetry or campaign status reports.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2 items-center text-xs text-slate-500">
                    <CheckCircle className="w-4 h-4 text-orange-brand" />
                    <span>Vulnerability / Pipeline Audit</span>
                  </div>
                  <div className="flex gap-2 items-center text-xs text-slate-550">
                    <CheckCircle className="w-4 h-4 text-orange-brand" />
                    <span>Estimated Development Timeline</span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-lg bg-orange-brand hover:bg-orange-brand-hover text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  Consulting Session
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
