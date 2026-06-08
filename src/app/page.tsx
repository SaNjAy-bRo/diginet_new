"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, Shield, Monitor, AppWindow, Share2, Megaphone, 
  ChevronRight, Award, Cpu, Database, Cloud, Network, Activity
} from "lucide-react";

// Served partners for infinite logo carousel with custom inline SVGs (no cards)
const partners = [
  {
    name: "Microsoft",
    logo: (
      <svg className="h-5 w-auto text-slate-400 hover:text-[#00a1f1] transition-colors" viewBox="0 0 100 24" fill="currentColor">
        <rect x="0" y="2" width="8" height="8" fill="#f25f22" />
        <rect x="9" y="2" width="8" height="8" fill="#7fba00" />
        <rect x="0" y="11" width="8" height="8" fill="#00a1f1" />
        <rect x="9" y="11" width="8" height="8" fill="#ffb900" />
        <text x="22" y="18" className="font-sans font-bold text-sm tracking-tight" fill="currentColor">Microsoft</text>
      </svg>
    )
  },
  {
    name: "Cisco",
    logo: (
      <svg className="h-5.5 w-auto text-slate-400 hover:text-[#00bcf2] transition-colors" viewBox="0 0 100 24" fill="currentColor">
        <rect x="4" y="11" width="1.5" height="6" rx="0.75" fill="currentColor" />
        <rect x="8" y="7" width="1.5" height="10" rx="0.75" fill="currentColor" />
        <rect x="12" y="11" width="1.5" height="6" rx="0.75" fill="currentColor" />
        <rect x="16" y="3" width="1.5" height="14" rx="0.75" fill="currentColor" />
        <rect x="20" y="11" width="1.5" height="6" rx="0.75" fill="currentColor" />
        <rect x="24" y="7" width="1.5" height="10" rx="0.75" fill="currentColor" />
        <rect x="28" y="11" width="1.5" height="6" rx="0.75" fill="currentColor" />
        <text x="36" y="17" className="font-sans font-black text-sm tracking-wider" fill="currentColor">CISCO</text>
      </svg>
    )
  },
  {
    name: "Oracle",
    logo: (
      <svg className="h-5 w-auto text-slate-400 hover:text-[#f80000] transition-colors" viewBox="0 0 100 24" fill="currentColor">
        <path d="M8 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" fill="currentColor" />
        <text x="22" y="17" className="font-sans font-black text-sm tracking-widest" fill="currentColor">ORACLE</text>
      </svg>
    )
  },
  {
    name: "AWS",
    logo: (
      <svg className="h-6.5 w-auto text-slate-400 hover:text-[#ff9900] transition-colors" viewBox="0 0 80 24" fill="currentColor">
        <text x="0" y="16" className="font-sans font-black text-sm tracking-tight" fill="currentColor">aws</text>
        <path d="M4 19c6-1 11-4 13-8l-1.5-.7c-2 3-7 6-12.5 7.2v1.5z" fill="#ff9900" />
        <path d="M17 10.5l-3-.7 1.5 3 1.5-2.3z" fill="#ff9900" />
      </svg>
    )
  },
  {
    name: "Cloudflare",
    logo: (
      <svg className="h-5 w-auto text-slate-400 hover:text-[#f38020] transition-colors" viewBox="0 0 120 24" fill="currentColor">
        <path d="M8 12c0-.8.6-1.5 1.5-1.5h3c.8 0 1.5.6 1.5 1.5v3c0 .8-.6 1.5-1.5 1.5h-3c-.8 0-1.5-.6-1.5-1.5v-3z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 9c0-1.7-1.3-3-3-3s-3 1.3-3 3v6c0 1.7 1.3 3 3 3s3-1.3 3-3V9z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="20" y="16" className="font-sans font-bold text-xs tracking-wider" fill="currentColor">CLOUDFLARE</text>
      </svg>
    )
  },
  {
    name: "Google Cloud",
    logo: (
      <svg className="h-5 w-auto text-slate-400 hover:text-[#4285f4] transition-colors" viewBox="0 0 130 24" fill="currentColor">
        <path d="M6 12c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm-1 0c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="20" y="16" className="font-sans font-bold text-xs tracking-wider" fill="currentColor">GOOGLE CLOUD</text>
      </svg>
    )
  }
];

// Replicated list to achieve seamless infinite scroll
const infinitePartners = [...partners, ...partners, ...partners, ...partners];

const services = [
  {
    name: "Cybersecurity Solutions",
    slug: "cybersecurity",
    desc: "Deploy comprehensive zero-trust architectures, end-to-end vulnerability testing, and unified response protocols.",
    icon: Shield,
    image: "/images/service_cyber.png",
    color: "hover:border-primary/50 hover:shadow-lg bg-white",
  },
  {
    name: "Website Designing",
    slug: "website-designing",
    desc: "Create bespoke, ultra-fast web experiences designed with immersive animations and conversion optimization.",
    icon: Monitor,
    image: "/images/service_design.png",
    color: "hover:border-primary/50 hover:shadow-lg bg-white",
  },
  {
    name: "Application Development",
    slug: "application-development",
    desc: "Architect custom cross-platform mobile apps and web platforms built for speed, scalability, and robust API logic.",
    icon: AppWindow,
    image: "/images/service_appdev.png",
    color: "hover:border-primary/50 hover:shadow-lg bg-white",
  },
  {
    name: "Digital Marketing",
    slug: "digital-marketing",
    desc: "Accelerate revenue pipelines with enterprise SEO, custom growth hacks, and transparent, analytics-backed operations.",
    icon: Megaphone,
    image: "/images/service_marketing.png",
    color: "hover:border-primary/50 hover:shadow-lg bg-white",
  },
  {
    name: "Social Media Management",
    slug: "social-media-management",
    desc: "Deepen customer loyalty and execute highly targeted organic and paid engagement strategies across platforms.",
    icon: Share2,
    image: "/images/service_social.png",
    color: "hover:border-primary/50 hover:shadow-lg bg-white",
  },
];

const engineeringPillars = [
  {
    title: "Zero-Trust System Security",
    desc: "We configure identity-aware boundaries, multi-factor hardware policies, and isolated data nodes to secure every network perimeter.",
    icon: Shield,
  },
  {
    title: "Distributed Data Engineering",
    desc: "Our database schemas support high concurrency, leveraging PostgreSQL replicas, Redis caching pipelines, and automated backups.",
    icon: Database,
  },
  {
    title: "Next-Gen Web Core",
    desc: "Building on Next.js 16 to deploy static-edge parameters, optimizing Largest Contentful Paint (LCP) and Core Web Vitals.",
    icon: Cpu,
  },
  {
    title: "Real-time Telemetry Maps",
    desc: "Integrating detailed dashboard monitoring arrays to track operational latencies and detect vulnerabilities instantly.",
    icon: Activity,
  },
];



export default function Home() {
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-white">
      {/* Hero Section (contrasting skyscraper/sunset image and dark gradient overlay) */}
      <section className="relative h-[calc(100vh-80px)] md:h-[calc(100vh-96px)] min-h-[550px] flex flex-col items-center justify-center px-6 md:px-12 text-white overflow-hidden -mt-20 sm:-mt-[108px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_corporate_bg_v2.png"
            alt="DIGINET Corporate IT Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/55 z-10"></div>
        </div>

        <div className="relative z-20 max-w-4xl text-center flex flex-col items-center pt-28 sm:pt-36 pb-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-bold mb-6 sm:mb-8 uppercase tracking-widest backdrop-blur-sm shadow-sm"
          >
            <Award className="w-3.5 h-3.5 text-orange-brand animate-bounce" /> Enterprise IT Consulting & Growth
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.12] mb-4 sm:mb-6"
          >
            Every device managed.<br />
            Every infrastructure secured.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10"
          >
            DIGINET designs, secures, and scales technology systems for high-growth enterprises and corporations worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-4"
          >
            <Link
              href="#services"
              onClick={scrollToServices}
              className="px-8 py-4 rounded-xl bg-orange-brand hover:bg-orange-brand-hover text-white font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-brand/20"
            >
              Explore Our Capabilities
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl border border-sky-400 bg-sky-500/10 text-sky-200 font-bold hover:bg-sky-500/20 transition-all backdrop-blur-sm"
            >
              Consult an Engineer
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Infinite Logo Carousel (served brands - no cards, premium SVGs, viewport alignment) */}
      <section className="relative z-10 h-[80px] md:h-[96px] flex flex-col justify-center bg-slate-50 border-y border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-1">
          <p className="text-center text-[9px] sm:text-[10px] font-bold text-slate-450 uppercase tracking-widest">
            TRUSTED INFRASTRUCTURE & INTEGRATIONS
          </p>
        </div>
        <div className="flex w-full overflow-hidden relative">
          <motion.div
            className="flex gap-20 items-center whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {infinitePartners.map((partner, idx) => (
              <div key={idx} className="flex items-center justify-center shrink-0">
                {partner.logo}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OUR COMPANY Section (Screenshot 2 - Dual-tone layout with 3 overlapping cards) */}
      <section className="relative z-10 bg-[#191426] text-white pt-24 pb-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3 block">OUR COMPANY</span>
            <h2 className="text-3xl md:text-4.5xl font-extrabold leading-tight">
              DigiNet is your trusted source in IT services and support
            </h2>
          </div>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl md:pb-2">
            DigiNet is a privately owned IT Support and IT Services business formed in 2018. Today we&apos;re proud to boast a strong team of IT engineers who thrive on rolling up their sleeves and solving your IT problems and meeting your business needs.
          </p>
        </div>
      </section>

      {/* Overlapping Cards Container */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 -mt-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden aspect-[16/11] shadow-2xl group cursor-pointer bg-slate-900"
          >
            <Image
              src="/images/service_cyber.png"
              alt="Office background"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 filter brightness-90"
            />
            <div className="absolute inset-0 bg-blue-900/35 mix-blend-multiply transition-colors group-hover:bg-blue-900/25"></div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white p-5 rounded-xl border border-slate-100 shadow-lg text-center transition-all group-hover:-translate-y-1">
              <span className="text-[10px] font-bold text-[#00a1e0] uppercase tracking-wider block">Our services</span>
              <h3 className="text-slate-900 font-extrabold text-base sm:text-lg mt-1">How we can help</h3>
            </div>
          </motion.div>

          {/* Card 2: Our Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative rounded-2xl overflow-hidden aspect-[16/11] shadow-2xl group cursor-pointer bg-slate-900"
          >
            <Image
              src="/images/corporate_team.png"
              alt="Team background"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
            />
            <div className="absolute inset-0 bg-slate-900/10 transition-colors group-hover:bg-slate-900/5"></div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white p-5 rounded-xl border border-slate-100 shadow-lg text-center transition-all group-hover:-translate-y-1">
              <span className="text-[10px] font-bold text-[#00a1e0] uppercase tracking-wider block">Our expertise</span>
              <h3 className="text-slate-900 font-extrabold text-base sm:text-lg mt-1">Why partner with us</h3>
            </div>
          </motion.div>

          {/* Card 3: Our Customers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden aspect-[16/11] shadow-2xl group cursor-pointer bg-amber-500"
          >
            <Image
              src="/images/client_success.png"
              alt="Client success background"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-amber-500/10 transition-colors group-hover:bg-amber-500/5"></div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white p-5 rounded-xl border border-slate-100 shadow-lg text-center transition-all group-hover:-translate-y-1">
              <span className="text-[10px] font-bold text-[#00a1e0] uppercase tracking-wider block">Our customers</span>
              <h3 className="text-slate-900 font-extrabold text-base sm:text-lg mt-1">Client success stories</h3>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12 mb-16">
          <p className="text-xs text-slate-500 font-bold">
            Stop wasting time and money on technology.{" "}
            <Link href="/about" className="text-sky-650 hover:text-orange-brand transition-colors font-bold underline">
              Explore our company
            </Link>
          </p>
        </div>
      </section>

      {/* SOLUTIONS SELECTOR Section (Screenshot 3 - Redesigned with Animated Tech Network Background) */}
      <section className="relative z-10 py-24 px-6 md:px-12 bg-white border-t border-slate-150 overflow-hidden">
        {/* Animated Tech Network Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.08] pointer-events-none select-none">
          <svg className="w-full max-w-5xl h-auto" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00a1e0" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#00a1e0" />
              </linearGradient>
            </defs>
            <style>
              {`
                @keyframes pulseNetwork {
                  0% { r: 3px; opacity: 0.9; }
                  50% { r: 9px; opacity: 0.4; }
                  100% { r: 15px; opacity: 0; }
                }
                @keyframes dashNetwork {
                  to { stroke-dashoffset: -80px; }
                }
                .pulse-circle {
                  animation: pulseNetwork 3s infinite ease-out;
                  transform-origin: center;
                }
                .pulse-circle-2 {
                  animation: pulseNetwork 3s infinite ease-out;
                  animation-delay: 1.5s;
                  transform-origin: center;
                }
                .flow-line {
                  stroke: url(#glowGradient);
                  stroke-width: 1.5;
                  stroke-dasharray: 8, 8;
                  animation: dashNetwork 25s linear infinite;
                }
              `}
            </style>
            
            {/* Connection Paths (Tech network lines) */}
            <path className="flow-line" d="M150 150 Q 300 80, 450 180 T 750 120" />
            <path className="flow-line" d="M150 150 Q 250 280, 480 320 T 800 280" />
            <path className="flow-line" d="M450 180 Q 550 80, 750 120" />
            <path className="flow-line" d="M480 320 Q 650 200, 750 120" />
            <path className="flow-line" d="M220 380 Q 350 320, 480 320" />
            <path className="flow-line" d="M450 180 Q 600 280, 780 280" />

            {/* Glowing City Nodes */}
            <g transform="translate(150, 150)">
              <circle cx="0" cy="0" r="4" fill="#00a1e0" />
              <circle className="pulse-circle" cx="0" cy="0" r="4" fill="#00a1e0" />
              <circle className="pulse-circle-2" cx="0" cy="0" r="4" fill="#00a1e0" />
            </g>
            
            <g transform="translate(450, 180)">
              <circle cx="0" cy="0" r="4" fill="#f97316" />
              <circle className="pulse-circle" cx="0" cy="0" r="4" fill="#f97316" />
            </g>

            <g transform="translate(480, 320)">
              <circle cx="0" cy="0" r="4" fill="#00a1e0" />
              <circle className="pulse-circle" cx="0" cy="0" r="4" fill="#00a1e0" />
              <circle className="pulse-circle-2" cx="0" cy="0" r="4" fill="#00a1e0" />
            </g>

            <g transform="translate(750, 120)">
              <circle cx="0" cy="0" r="4" fill="#f97316" />
              <circle className="pulse-circle" cx="0" cy="0" r="4" fill="#f97316" />
            </g>

            <g transform="translate(800, 280)">
              <circle cx="0" cy="0" r="4" fill="#00a1e0" />
              <circle className="pulse-circle" cx="0" cy="0" r="4" fill="#00a1e0" />
            </g>

            <g transform="translate(220, 380)">
              <circle cx="0" cy="0" r="4" fill="#f97316" />
              <circle className="pulse-circle" cx="0" cy="0" r="4" fill="#f97316" />
            </g>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00a1e0] mb-3">TAILORED INFRASTRUCTURE</span>
            <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900">Solutions Tailored to Your Infrastructure</h2>
            <div className="h-1 w-20 bg-orange-brand mt-4 rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-150 relative z-10">
            {/* Left: We have an IT department */}
            <div className="p-8 sm:p-12 flex flex-col justify-between hover:bg-slate-50/50 transition-colors duration-300">
              <div>
                <div className="flex items-center gap-5 mb-6">
                  {/* Custom SVG silhouette with green checkmark */}
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#00a1e0] border border-sky-100 shrink-0 shadow-sm">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <circle cx="10" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 18c0-3 3-4 6-4s6 1 6 4v2H4v-2z" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="18" cy="18" r="5.5" fill="#10B981" />
                      <path d="M16 18l1.5 1.5 2.5-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">We have an IT department</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                  Partner with us for co-managed specialized services, high-level auditing, and systems reinforcement to scale your existing IT infrastructure.
                </p>
                <ul className="space-y-4">
                  {[
                    "Zero-Trust compliance & security audits",
                    "Continuous vulnerability & penetration tests",
                    "Multi-cloud architectures & server clustering",
                    "Point-in-time database replications & sync maps"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-center text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00a1e0] shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: We don't have an IT department */}
            <div className="p-8 sm:p-12 flex flex-col justify-between hover:bg-slate-50/50 transition-colors duration-300">
              <div>
                <div className="flex items-center gap-5 mb-6">
                  {/* Custom SVG silhouette with blue crossmark */}
                  <div className="w-12 h-12 rounded-xl bg-orange-brand/10 flex items-center justify-center text-orange-brand border border-orange-brand/20 shrink-0 shadow-sm">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <circle cx="10" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 18c0-3 3-4 6-4s6 1 6 4v2H4v-2z" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="18" cy="18" r="5.5" fill="#00a1e0" />
                      <path d="M16.2 16.2l3.6 3.6M19.8 16.2l-3.6 3.6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">We don&apos;t have an IT department</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                  Work with us as your one-stop shop for complete IT management and software solutions.
                </p>
                <ul className="space-y-4">
                  {[
                    "Complete managed IT support desk (24/7/365)",
                    "End-to-end device onboarding & configuration",
                    "Automated backup pipelines & secure firewalls",
                    "Seamless web platforms & mobile app delivery"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-center text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-brand shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 relative z-10">
            <p className="text-xs text-slate-500 font-bold">
              Stop wasting time and money on technology.{" "}
              <Link href="/contact" className="text-[#00a1e0] hover:text-orange-brand transition-colors font-bold underline">
                Discover how we can help your business WIN
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES Section (Restyled Services Cards grid with overlapping layout) */}
      <section id="services" className="relative z-10 py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-150">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00a1e0] mb-3">Enterprise Core Capabilities</span>
            <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900">What We Do</h2>
            <div className="h-1 w-20 bg-orange-brand mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {services.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex flex-col group"
                >
                  {/* Top Image Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md">
                    <Image
                      src={svc.image}
                      alt={svc.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent z-10" />
                  </div>

                  {/* Overlapping White Card */}
                  <div className="relative z-20 mx-4 -mt-10 p-6 rounded-xl bg-white border border-slate-200 shadow-md group-hover:shadow-lg transition-shadow duration-300 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-[#00a1e0] uppercase tracking-widest flex items-center gap-1.5 mb-2">
                        <IconComp className="w-3.5 h-3.5" /> Our services
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#00a1e0] transition-colors">{svc.name}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                    </div>

                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-orange-brand transition-colors mt-auto self-start group/link border-b border-transparent hover:border-orange-brand/30 pb-0.5"
                    >
                      How we can help
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES Section (Redesigned with Side Image + 2x2 Grid) */}
      <section className="relative z-10 py-24 px-6 md:px-12 bg-white border-t border-slate-150">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00a1e0] mb-3">ENTERPRISE STANDARDS</span>
            <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900">Our Core Principles</h2>
            <div className="h-1 w-20 bg-orange-brand mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Side: Large Side Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 group min-h-[400px] lg:min-h-0 h-full"
            >
              <Image
                src="/images/cybersecurity_corporate.png"
                alt="Cybersecurity Corporate Illustration"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <span className="px-3 py-1 rounded-full bg-orange-brand/20 border border-orange-brand/30 text-orange-brand text-[10px] font-bold uppercase tracking-widest">
                  Engineering Excellence
                </span>
                <h3 className="text-white font-extrabold text-xl sm:text-2xl mt-4 leading-snug">
                  Audited, secure, and scalable architectures.
                </h3>
                <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                  We build digital products and networks matching global compliance standards (SOC 2, HIPAA).
                </p>
              </div>
            </motion.div>

            {/* Right Side: 2x2 Grid of Principles */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {engineeringPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-150 shadow-sm hover:shadow-md hover:border-orange-brand transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#00a1e0] shadow-sm transition-colors group-hover:bg-[#00a1e0]/10">
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900">{pillar.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES Section (Screenshot 1 - monochrome tinted cards on dark background) */}
      <section className="relative z-10 py-24 px-6 md:px-12 bg-[#0c0a12] text-white border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3 block">CASE STUDIES</span>
            <h2 className="text-3xl md:text-4.5xl font-extrabold text-white">We work with global brands</h2>
            <div className="h-1 w-20 bg-sky-400 mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Teal Tint */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] w-full shadow-2xl group cursor-pointer bg-[#0d6e6b]"
            >
              <Image
                src="/images/service_cyber.png"
                alt="Cloud Migration"
                fill
                className="object-cover mix-blend-multiply opacity-95 transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-120"
              />
              <div className="absolute inset-0 bg-slate-950/15 group-hover:bg-slate-950/5 transition-colors z-10"></div>
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center text-white">
                <h4 className="text-lg md:text-xl font-bold mb-6 max-w-xs leading-snug">
                  Cloud migration saves money for health insurer
                </h4>
                {/* unilogo (white version) */}
                <div className="flex items-center gap-2 text-white/95">
                  <svg className="h-5 w-auto" viewBox="0 0 100 24" fill="currentColor">
                    <rect x="0" y="2" width="6" height="20" rx="1" />
                    <path d="M12 2v14c0 3.3-2.7 6-6 6s-6-2.7-6-6V2h4v14c0 1.1.9 2 2 2s2-.9 2-2V2h4z" />
                    <text x="22" y="18" className="font-sans font-bold text-sm tracking-wide">unilogo</text>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Blue Tint */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] w-full shadow-2xl group cursor-pointer bg-[#1d6fa5]"
            >
              <Image
                src="/images/service_appdev.png"
                alt="Remote Support"
                fill
                className="object-cover mix-blend-multiply opacity-95 transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-120"
              />
              <div className="absolute inset-0 bg-slate-950/15 group-hover:bg-slate-950/5 transition-colors z-10"></div>
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center text-white">
                <h4 className="text-lg md:text-xl font-bold mb-6 max-w-xs leading-snug">
                  Remote support center for semiconductor provider
                </h4>
                {/* jarguar (white version) */}
                <div className="flex items-center gap-2 text-white/95">
                  <svg className="h-5 w-auto" viewBox="0 0 100 24" fill="none">
                    <path d="M2 2h4l-2 18H0L2 2z" fill="currentColor" />
                    <path d="M8 2h5.5l-1.5 6H7.5L8 2z" fill="currentColor" />
                    <path d="M6 10h5.5l-2 8H4.5l2-8z" fill="currentColor" />
                    <text x="24" y="18" className="font-sans font-bold text-sm tracking-wide" fill="currentColor">jarguar</text>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Purple Tint */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] w-full shadow-2xl group cursor-pointer bg-[#6f4b9f]"
            >
              <Image
                src="/images/service_design.png"
                alt="Subscription licensing"
                fill
                className="object-cover mix-blend-multiply opacity-95 transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-120"
              />
              <div className="absolute inset-0 bg-slate-950/15 group-hover:bg-slate-950/5 transition-colors z-10"></div>
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center text-white">
                <h4 className="text-lg md:text-xl font-bold mb-6 max-w-xs leading-snug">
                  Subscription licensing unlocks spike in IT orders
                </h4>
                {/* ticketbox (white version) */}
                <div className="flex items-center gap-2 text-white/95">
                  <svg className="h-5 w-auto" viewBox="0 0 120 24" fill="none">
                    <path d="M10 2l8 4.6v9.2L10 20.5l-8-4.6V6.6L10 2z" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="26" y="17" className="font-sans font-bold text-sm tracking-wide" fill="currentColor">ticketbox</text>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xs text-slate-400 font-bold">
              Find out how companies succeed with us.{" "}
              <Link href="/about" className="text-sky-400 hover:text-orange-brand transition-colors font-bold underline">
                Read our case studies
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* BLOG / RESOURCE LIBRARY Section (Screenshot 4 - Resource library blog grid) */}
      <section className="relative z-10 py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-150">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00a1e0] mb-3 block">FROM OUR BLOG</span>
            <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900">More articles from resource library</h2>
            <div className="h-1 w-20 bg-orange-brand mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
            {/* Left Big Card (spans 5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-lg overflow-hidden flex flex-col group"
            >
              {/* Image with author overlay */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <Image
                  src="/images/blog_edge_computing.png"
                  alt="Edge Computing Diagram"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
                {/* Author overlay */}
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/70 border border-slate-800/80 text-white text-[11px] font-bold backdrop-blur-sm shadow-sm">
                  <span className="w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center text-[9px] font-bold">D</span>
                  by DigiNet Team
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#00a1e0] tracking-wide block mb-3">July 19, 2022</span>
                  <h3 className="text-xl font-extrabold text-slate-900 leading-snug mb-4 group-hover:text-[#00a1e0] transition-colors">
                    What is Edge Computing? How does it work? use that advantages
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    Do you know what is Edge Computing? How does Edge Computing work? And where and how is it used? If you do not know, then it does not matter, today we...
                  </p>
                </div>
                
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00a1e0] hover:text-orange-brand transition-colors self-start group/link border-b border-transparent hover:border-orange-brand/30 pb-0.5"
                >
                  Read full article
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Right 2x2 Grid (spans 7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "In house vs Outsourcing IT Support: Which is The Right Choice for Your Business?",
                  date: "May 13, 2022",
                  image: "/images/blog_outsourcing.png",
                },
                {
                  title: "Top 9 Emerging Technologies",
                  date: "April 12, 2022",
                  image: "/images/blog_trends.png",
                },
                {
                  title: "What is Cyber Security? Its Types, Benefits, and...",
                  date: "March 24, 2022",
                  image: "/images/blog_cybersecurity.png",
                },
                {
                  title: "Cloud Computing and its Types",
                  date: "February 18, 2022",
                  image: "/images/service_cyber.png",
                }
              ].map((post, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl bg-white border border-slate-200/85 shadow-sm hover:shadow-md overflow-hidden flex flex-col group"
                >
                  {/* Thumbnail with author overlay */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-950/70 border border-slate-800/80 text-white text-[10px] font-bold backdrop-blur-sm shadow-sm">
                      <span className="w-3.5 h-3.5 rounded-full bg-slate-700 flex items-center justify-center text-[8px] font-bold">D</span>
                      by DigiNet Team
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 leading-snug mb-4 group-hover:text-[#00a1e0] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                    </div>
                    <span className="text-[11px] font-bold text-[#00a1e0] mt-auto">{post.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS Section (Screenshot 5 - Redesigned Cards for Premium Styling) */}
      <section className="relative z-10 py-24 px-6 md:px-12 bg-white border-t border-slate-150">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00a1e0] mb-3">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900">What our customers say</h2>
            <div className="h-1 w-20 bg-orange-brand mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1: jarguar */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl border border-slate-200 bg-gradient-to-b from-[#005a9c]/[0.02] to-white border-t-4 border-t-[#005a9c] flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-6 right-8 text-slate-200/50 group-hover:text-[#005a9c]/10 transition-colors pointer-events-none select-none">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="relative z-10">
                {/* jarguar Logo */}
                <div className="flex items-center gap-2.5 mb-8">
                  <svg className="h-6 w-auto" viewBox="0 0 100 28" fill="none">
                    <path d="M4 2h6L6 24H0L4 2z" fill="#e30613" />
                    <path d="M10 2h8l-2 8H8l2-8z" fill="#005a9c" />
                    <path d="M7 14h8l-2.5 10H4.5l2.5-10z" fill="#005a9c" />
                    <text x="24" y="20" className="font-sans font-extrabold text-base tracking-tight" fill="#0f172a">jarguar</text>
                  </svg>
                </div>
                <p className="text-slate-605 text-sm leading-relaxed mb-6 italic relative z-10">
                  &ldquo;I sleep easier at night knowing the DigiNet team is in my corner. Supporting my business and keeping my systems in Tip-Top shape&rdquo;
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-100 relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#005a9c]/10 text-[#005a9c] flex items-center justify-center font-bold text-sm border border-[#005a9c]/20">
                  FC
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-800">Francis Chua</h5>
                  <p className="text-xs text-slate-500 font-semibold">Office Manager</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2: ticketbox */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-8 rounded-2xl border border-slate-200 bg-gradient-to-b from-[#00a1e0]/[0.02] to-white border-t-4 border-t-[#00a1e0] flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-6 right-8 text-slate-200/50 group-hover:text-[#00a1e0]/10 transition-colors pointer-events-none select-none">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="relative z-10">
                {/* ticketbox Logo */}
                <div className="flex items-center gap-2.5 mb-8">
                  <svg className="h-6 w-auto" viewBox="0 0 120 28" fill="none">
                    <path d="M12 2l8 4.6v9.2L12 20.5l-8-4.6V6.6L12 2z" fill="#00a1e0" />
                    <path d="M8 11.5l2.5 2.5 5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="28" y="20" className="font-sans font-extrabold text-base tracking-tight" fill="#0f172a">ticketbox</text>
                  </svg>
                </div>
                <p className="text-slate-605 text-sm leading-relaxed mb-6 italic relative z-10">
                  &ldquo;DigiNet are always accommodating our diverse needs and we feel like they are a part of our Company rather than an external supplier&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-100 relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#00a1e0]/10 text-[#00a1e0] flex items-center justify-center font-bold text-sm border border-[#00a1e0]/20">
                  JD
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-800">John Doe</h5>
                  <p className="text-xs text-slate-500 font-semibold">CEO - Envato</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3: KONSTRUCT */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-2xl border border-slate-200 bg-gradient-to-b from-[#e30613]/[0.01] to-white border-t-4 border-t-[#e30613] flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-6 right-8 text-slate-200/50 group-hover:text-[#e30613]/10 transition-colors pointer-events-none select-none">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="relative z-10">
                {/* KONSTRUCT Logo */}
                <div className="flex items-center gap-2.5 mb-8">
                  <svg className="h-6 w-auto" viewBox="0 0 150 28" fill="none">
                    <path d="M4 2h5l-4 22H0L4 2z" fill="#e30613" />
                    <path d="M14 2l6 10-6 10h-5l5-9-5-11h5z" fill="#005a9c" />
                    <text x="24" y="20" className="font-sans font-black text-base tracking-wider" fill="#0f172a">KONSTRUCT</text>
                  </svg>
                </div>
                <p className="text-slate-605 text-sm leading-relaxed mb-6 italic relative z-10">
                  &ldquo;Being a managed services client has improved our uptime, increased our productivity and systematized our software updates&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-100 relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#e30613]/10 text-[#e30613] flex items-center justify-center font-bold text-sm border border-[#e30613]/20">
                  JB
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-800">John H. Bedard, Jr</h5>
                  <p className="text-xs text-slate-500 font-semibold">Chris Ellison - CEO and Co-founder</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Slider indicators */}
          <div className="flex justify-center items-center gap-2.5 mt-12">
            <span className="w-10 h-1.5 rounded-full bg-orange-brand"></span>
            <span className="w-10 h-1.5 rounded-full bg-slate-250"></span>
          </div>
        </div>
      </section>

      {/* SECTION: Corporate Systems Architecture (Dark Slate) */}
      <section className="relative z-10 py-24 px-6 md:px-12 bg-slate-950 text-white border-y border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-orange-brand">System Engineering</span>
              <h2 className="text-3xl md:text-4.5xl font-extrabold leading-tight">
                Architected for resilience, compliance, and speed.
              </h2>
              <p className="text-slate-400 leading-relaxed text-sm">
                We design and deploy corporate systems that eliminate architectural bottlenecks, protect sensitive user data, and sustain rapid expansion. Every project aligns with enterprise security frameworks.
              </p>
              
              <div className="flex flex-col gap-5 mt-2">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-orange-brand/10 flex items-center justify-center text-orange-brand shrink-0">
                    <Cloud className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100">Multi-Cloud Configurations</h4>
                    <p className="text-xs text-slate-400 mt-0.5">High availability clustering on AWS, GCP, and Azure environments.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
                    <Database className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100">Failover Storage Pools</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Automated PostgreSQL master-replica synching and point-in-time recovery maps.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-orange-brand/10 flex items-center justify-center text-orange-brand shrink-0">
                    <Network className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100">Optimized Edge Network</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Advanced CDN topologies reducing time-to-first-byte (TTFB) globally.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Corporate Security",
                    desc: "Deploy zero-trust architectures, unified access privileges, and physical hardware keys to secure every entry point.",
                    stat: "99.99%",
                    statLabel: "Threat Deflection Rate"
                  },
                  {
                    title: "Infrastructure Uptime",
                    desc: "Leverage automated container orchestration to eliminate single-point downtime risks across regions.",
                    stat: "24/7/365",
                    statLabel: "Active Operations Monitoring"
                  },
                  {
                    title: "Data Integrity",
                    desc: "Encrypted data layers utilizing AES-256 protocols at-rest and TLS 1.3 systems during active transit.",
                    stat: "100%",
                    statLabel: "Sync Accuracy"
                  },
                  {
                    title: "Compliance Standard",
                    desc: "Configured to completely satisfy requirements for SOC 2 Type II, HIPAA health data, and GDPR privacy codes.",
                    stat: "SOC 2 / HIPAA",
                    statLabel: "Audited & Certified"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm flex flex-col justify-between hover:border-slate-700 transition-colors">
                    <div>
                      <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed mb-6">{item.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-800">
                      <p className="text-lg font-black text-orange-brand">{item.stat}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase mt-0.5">{item.statLabel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative z-10 py-28 text-white overflow-hidden min-h-[45vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta_bg.png"
            alt="DIGINET Corporate Collaboration CTA Background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/45 z-10"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-center lg:text-left">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Ready to secure your operations?
              </h2>
              <p className="text-slate-200 text-base md:text-lg max-w-3xl leading-relaxed">
                Schedule an enterprise technology consultation session with our consulting team to audit system vulnerabilities and roadmap your software infrastructure.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange-brand hover:bg-orange-brand-hover text-white font-bold transition-all shadow-lg shadow-orange-brand/20 cursor-pointer text-sm"
              >
                Start Your Consultation
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

