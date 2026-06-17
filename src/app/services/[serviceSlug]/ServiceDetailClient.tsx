"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Shield, Monitor, AppWindow, Megaphone, CheckCircle, 
  ArrowRight, Layers, Compass, Check, Smartphone,
  Terminal, Code, Sparkles, TrendingUp, Heart, MessageSquare, Star, Zap,
  Server, Cpu, Database, RefreshCw, BarChart2, Eye, Lock, Globe, HardDrive,
  Activity, ShieldAlert, FileText, SmartphoneCharging, Key, GitBranch, Play,
  Award, Briefcase, CheckCircle2, ChevronDown
} from "lucide-react";
import { motion } from "framer-motion";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "digital-marketing": Megaphone,
  "mobile-development": Smartphone,
  "application-development": AppWindow,
  "cybersecurity": Shield,
  "website-designing": Monitor,
};

const ctaBgImages: Record<string, string> = {
  "cybersecurity": "/images/cta_cyber.png",
  "website-designing": "/images/cta_webdesign.png",
  "mobile-development": "/images/cta_mobile.png",
  "application-development": "/images/cta_appdev.png",
  "digital-marketing": "/images/cta_marketing.png",
};

const serviceFaqs: Record<string, { q: string; a: string }[]> = {
  "cybersecurity": [
    {
      q: "How long does a full Zero-Trust security audit take to complete?",
      a: "Typically between 2 to 4 weeks depending on the complexity and size of your network infrastructure. We conduct passive traffic scanning, privilege hierarchy mapping, and active penetration testing without disrupting your day-to-day operations."
    },
    {
      q: "Can you integrate Wazuh and Cloudflare WAF with our existing AWS or Azure setups?",
      a: "Yes, our deployments are fully cloud-agnostic. We deploy lightweight Wazuh agent daemons on your existing cloud VMs and configure Cloudflare API routes to inspect, filter, and isolate endpoints at the DNS edge."
    },
    {
      q: "What happens if a security vulnerability is detected during active threat monitoring?",
      a: "Our system initiates automated isolation protocols immediately (e.g. flagging IP addresses or recycling affected containers). Simultaneously, our on-call SOC engineers receive high-priority alerts to perform forensic analysis and mitigation."
    },
    {
      q: "How do you help our company meet SOC 2 Type II or PCI-DSS audit compliance?",
      a: "We configure end-to-end telemetry audits, configure zero-knowledge encryption models for storage layers, restrict IAM privileges based on role-based access control (RBAC), and compile the complete compliance report required by auditors."
    }
  ],
  "website-designing": [
    {
      q: "Do you provide the Figma source files and UI design token libraries?",
      a: "Yes, we deliver fully organized, multi-viewport Figma files including complete design system tokens (colors, font variants, spacing grids) and reusable components for your in-house teams."
    },
    {
      q: "Will the website be fully editable and CMS-integrated?",
      a: "Absolutely. We integrate headless CMS architectures (like Sanity, Strapi, or Contentful) or traditional databases. We build visual editing dashboards tailored to your marketing team to update copy, blog articles, and visual assets without writing code."
    },
    {
      q: "How do you guarantee high PageSpeed scores and Core Web Vitals compliance?",
      a: "We structure optimized Next.js scripts, compile static assets to edge CDNs, enforce WebP/AVIF image formats with auto-scaling boundaries, and defer non-critical analytics tracking to ensure 95+ performance scores."
    },
    {
      q: "What is your typical design and development timeline?",
      a: "A custom high-conversion website design project takes between 4 to 6 weeks. This includes wireframe exploration, UI mockups alignment, custom Next.js frontend code development, SEO schema indexing, and final launch checks."
    }
  ],
  "mobile-development": [
    {
      q: "Will the mobile app be built natively or using a cross-platform framework?",
      a: "We develop native iOS (Swift) & Android (Kotlin) setups for maximum hardware performance, and cross-platform solutions (React Native/Flutter) for code reuse. We recommend the path that best matches your timeline and features."
    },
    {
      q: "How do you manage offline data sync when a user loses cell reception?",
      a: "We configure local-first data caching architectures using SQLite or Realm on the device. Local transactions are safely queued and sync automatically with cloud APIs using conflict resolution models once connection recovers."
    },
    {
      q: "Do you handle the App Store (Apple) and Google Play submission and review process?",
      a: "Yes, we manage the complete publishing lifecycle. This includes managing developer profiles, configuring App Store Connect / Google Play Console metadata, structuring privacy policies, and resolving submission feedback."
    },
    {
      q: "How do you ensure our mobile app is secure against reverse engineering?",
      a: "We enforce code obfuscation pipelines, establish strict SSL certificate pinning for backend communications, leverage biometric checks (FaceID/Fingerprint), and store sensitive credentials inside device Keystore/Keychain layers."
    }
  ],
  "application-development": [
    {
      q: "What technology stack do you recommend for high-concurrency cloud systems?",
      a: "We specialize in TypeScript (Node.js/NestJS), Go, or Python backends, coupled with PostgreSQL, MongoDB, or Redis. Frontends are structured with Next.js/React, and infrastructure runs on Docker/Kubernetes setups."
    },
    {
      q: "How do you structure database replication to prevent data loss?",
      a: "We configure primary-replica database routing splits, write replication loops, and automate database snapshots. Point-in-time recovery (PITR) logs are securely backed up hourly to isolated cloud storage buckets."
    },
    {
      q: "Do you containerize applications and deploy them to Kubernetes clusters?",
      a: "Yes, we build secure, multi-stage production Docker images and construct automated Kubernetes scaling groups (AWS EKS or GCP GKE) to handle variable user traffic spikes without service interruptions."
    },
    {
      q: "How is code deployment handled when we need to launch updates?",
      a: "We configure automated CI/CD pipelines (GitHub Actions/GitLab CI) that validate typescript syntax, run automated unit tests, and roll out updates with zero site downtime."
    }
  ],
  "digital-marketing": [
    {
      q: "How long does it take to see measurable results from SEO campaigns?",
      a: "SEO is a compounding acquisition channel. Technical audits and structured markups display crawl improvements in 3-4 weeks. Organic keyword ranks and high-intent traffic growth typically accelerate between 3 to 6 months."
    },
    {
      q: "Do you manage paid advertising spend and landing page A/B tests?",
      a: "Yes, we configure targeted campaigns (Google Ads, Meta, LinkedIn), create custom high-converting landing layouts, and run multivariate A/B tests to optimize ad spend and lower cost per acquisition (CPA)."
    },
    {
      q: "How do you track user conversion paths and avoid data attribution loss?",
      a: "We deploy server-side Google Analytics 4 (GA4), setup Meta Conversions API (CAPI), and configure custom cookies to ensure accurate conversion tracking."
    },
    {
      q: "What monthly reporting and analytics data do you provide?",
      a: "You receive access to a live Looker Studio dashboard detailing impressions, organic ranks, conversion rates, and acquisition costs, updated in real time."
    }
  ]
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

function getTechIcon(tech: string) {
  const normalized = tech.toLowerCase();
  
  // Mobile Development
  if (normalized.includes("swift")) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M211.5 174C175 225 111.5 240 68 214.5C65.5 213 83.5 208.5 98.5 198C60 196.5 26.5 174 15 137C12.5 129 18 130 25 130C-5 113.5 -21.5 77.5 -9 45.5C-8 43 -5.5 45.5 -3 47.5C-12 18.5 7.5 5 7.5 5C7.5 5 6 17 14 28C15 29.5 13.5 28.5 12.5 27C34 5.5 67 0.5 89 12C68 15 52.5 26.5 45 42C79.5 35 116 54 133 86.5C133 86.5 146.5 71.5 167 65.5C152 79 146.5 95 146.5 95C175 106.5 196.5 131 211.5 174Z" fill="#F05138"/>
      </svg>
    );
  }
  if (normalized.includes("kotlin")) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 24H0V0H24L12 12L24 24Z" fill="url(#kotlin-grad)"/>
        <defs>
          <linearGradient id="kotlin-grad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#E44857"/>
            <stop offset="0.468" stopColor="#C10ECA"/>
            <stop offset="1" stopColor="#00E4FF"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (normalized.includes("react")) {
    return (
      <svg className="w-5 h-5 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8.7C8.4 8.7 5.5 9.7 5.5 11C5.5 12.3 8.4 13.3 12 13.3C15.6 13.3 18.5 12.3 18.5 11C18.5 9.7 15.6 8.7 12 8.7ZM12 12.3C11.3 12.3 10.7 11.7 10.7 11C10.7 10.3 11.3 9.7 12 9.7C12.7 9.7 13.3 10.3 13.3 11C13.3 11.7 12.7 12.3 12 12.3Z" fill="currentColor"/>
        <ellipse cx="12" cy="11" rx="9" ry="3.5" transform="rotate(30 12 11)" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="11" rx="9" ry="3.5" transform="rotate(90 12 11)" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="11" rx="9" ry="3.5" transform="rotate(150 12 11)" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (normalized.includes("flutter")) {
    return (
      <svg className="w-5 h-5 text-[#02569B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.3 0L5.5 8.8L14.3 17.6H21.5L12.7 8.8L21.5 0H14.3ZM14.3 12L8.7 17.6L14.3 23.2H21.5L15.9 17.6L21.5 12H14.3Z" fill="currentColor"/>
      </svg>
    );
  }
  if (normalized.includes("firebase")) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.9 18.2L11 3.5C11.2 3.1 11.8 3.1 12 3.5L14.4 7.6L3.9 18.2Z" fill="#FFA000"/>
        <path d="M20.2 14.9L18.1 10.6C17.9 10.2 17.3 10.2 17.1 10.6L15.2 14.2L20.2 14.9Z" fill="#F57C00"/>
        <path d="M3.9 18.2L12 21.5C12.3 21.6 12.7 21.6 13 21.5L20.2 14.9L3.9 18.2Z" fill="#FFCA28"/>
      </svg>
    );
  }
  if (normalized.includes("apple") || normalized.includes("app store")) {
    return (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.82M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.51-.63.73-1.18 1.87-1.03 2.98 1.11.09 2.26-.59 2.96-1.43z"/>
      </svg>
    );
  }
  if (normalized.includes("google") || normalized.includes("play console") || normalized.includes("ads") || normalized.includes("analytics")) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-2.86-4.53-6.16-4.53z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
      </svg>
    );
  }
  if (normalized.includes("sqlite") || normalized.includes("database") || normalized.includes("sql") || normalized.includes("postgres") || normalized.includes("redis") || normalized.includes("realm")) {
    return (
      <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
      </svg>
    );
  }

  // Application Development
  if (normalized.includes("typescript") || normalized.includes("node") || normalized.includes("nest")) {
    return (
      <svg className="w-5 h-5 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 1.5h21v21h-21zM20 18.25V9h-3.25v9.25zm-6-2.5h-2.5V9H8.25v6.75h3.25z"/>
      </svg>
    );
  }
  if (normalized.includes("aws") || normalized.includes("amazon")) {
    return (
      <svg className="w-5 h-5 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.3 13.9c-.3.2-.6.4-.9.6-.3.2-.7.3-1.1.4-.4.1-.8.1-1.2.1s-.8 0-1.1-.1c-.4-.1-.7-.2-.9-.4-.3-.2-.5-.4-.6-.7-.1-.3-.2-.6-.2-1s.1-.8.2-1.1c.1-.3.4-.6.6-.8.3-.2.7-.4 1.1-.5.4-.1.9-.2 1.5-.2h1.2v-.4c0-.4-.1-.7-.3-.9-.2-.2-.6-.3-1.1-.3s-.9.1-1.2.3c-.3.2-.5.4-.5.8H8.5c0-.6.2-1.1.5-1.5.3-.4.8-.7 1.4-.9.6-.2 1.4-.3 2.2-.3s1.5.1 2 .3c.5.2.9.5 1.2.9.3.4.4.9.4 1.6v3.2c0 .5.1.8.2.9s.3.2.5.2c.1 0 .2 0 .3-.1v1c-.3.1-.6.1-.9.1-.5 0-.9-.1-1.1-.4zm-2.1-3.3h-1c-.4 0-.7.1-.9.2-.2.1-.4.2-.5.4-.1.2-.2.4-.2.7 0 .3.1.5.2.6.1.1.3.2.6.2.3 0 .6-.1.8-.2.2-.1.4-.3.5-.5.1-.2.2-.5.2-.8v-.2z"/>
      </svg>
    );
  }
  if (normalized.includes("docker")) {
    return (
      <svg className="w-5 h-5 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.983 8.877h2.273v-2.21h-2.273v2.21zm-.24 3.705H16.27v-2.21h-2.528v2.21zm-2.525-3.705h2.257v-2.21H11.22v2.21zM5.84 12.582H8.11v-2.21H5.84v2.21zm-2.766 0h2.273v-2.21H3.074v2.21zm5.84-3.705H11.19v-2.21H8.914v2.21zm-2.766 0h2.273v-2.21H6.148v2.21zm-3.074 0H5.35v-2.21H3.074v2.21zM24 13.079c-.062-.05-.382-.258-.97-.258a2.51 2.51 0 0 0-1.202.274 2.82 2.82 0 0 0-1.195-1.656 5.827 5.827 0 0 0-.583-.34 8.01 8.01 0 0 0-.258-.088 1.134 1.134 0 0 0-.208-.036 1.096 1.096 0 0 0-.181.005c-.062 0-.206.015-.356.08a.723.723 0 0 0-.232.17.653.653 0 0 0-.124.22c-.062.206-.062.624-.03 1.037.03.413.123.826.216 1.033.093.206.186.206.28.206.092 0 .185 0 .278-.02a.842.842 0 0 0 .15-.052 2.885 2.885 0 0 0 .288-.135 2.224 2.224 0 0 1 .71-.248 1.94 1.94 0 0 1 .84.1c.367.147.531.545.542.923.01.378-.134.78-.495.96a4.83 4.83 0 0 1-2.186.536c-5.108 0-9.248-4.097-9.248-9.156 0-.547.047-1.089.14-1.616L0 12.003c.093 3.654 3.01 6.594 6.605 6.594 5.923 0 10.722-4.758 10.722-10.627a10.437 10.437 0 0 0-.072-1.22c.28.163.6.28.934.33a3.528 3.528 0 0 0 1.258-.052 3.19 3.19 0 0 0 1.166-.46c.552-.377.728-.996.79-1.548a3.14 3.14 0 0 0-.077-.929z"/>
      </svg>
    );
  }
  if (normalized.includes("kubernetes")) {
    return (
      <svg className="w-5 h-5 text-[#326CE5]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.44 0a1 1 0 0 0-.88 0L3.11 4.86a1 1 0 0 0-.55.88v9.52a1 1 0 0 0 .55.88l8.45 4.86a1 1 0 0 0 .88 0l8.45-4.86a1 1 0 0 0 .55-.88V5.74a1 1 0 0 0-.55-.88zm-.44 2.3L19.26 6.3l-2.4 1.38L12 5.07zm-7.26 4L12 2.3v5.52L7.14 9.18zm0 2.28L12 7.2v5.52l-4.86 2.8zm0 5.1L12 11.28v7.2L4.74 13.68zm9.66.72L12 18.48v-7.2l7.26 2.4z"/>
      </svg>
    );
  }
  if (normalized.includes("github")) {
    return (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    );
  }
  if (normalized.includes("graphql")) {
    return (
      <svg className="w-5 h-5 text-[#E10098]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.9c-.3.2-.6.4-.9.6-.3.2-.7.3-1.1.4-.4.1-.8.1-1.2.1s-.8 0-1.1-.1c-.4-.1-.7-.2-.9-.4-.3-.2-.5-.4-.6-.7-.1-.3-.2-.6-.2-1s.1-.8.2-1.1c.1-.3.4-.6.6-.8.3-.2.7-.4 1.1-.5.4-.1.9-.2 1.5-.2h1.2v-.4c0-.4-.1-.7-.3-.9-.2-.2-.6-.3-1.1-.3s-.9.1-1.2.3c-.3.2-.5.4-.5.8H8.5c0-.6.2-1.1.5-1.5.3-.4.8-.7 1.4-.9.6-.2 1.4-.3 2.2-.3s1.5.1 2 .3c.5.2.9.5 1.2.9.3.4.4.9.4 1.6v3.2c0 .5.1.8.2.9s.3.2.5.2c.1 0 .2 0 .3-.1v1c-.3.1-.6.1-.9.1-.5 0-.9-.1-1.1-.4zm-2.1-3.3h-1c-.4 0-.7.1-.9.2-.2.1-.4.2-.5.4-.1.2-.2.4-.2.7 0 .3.1.5.2.6.1.1.3.2.6.2.3 0 .6-.1.8-.2.2-.1.4-.3.5-.5.1-.2.2-.5.2-.8v-.2z"/>
      </svg>
    );
  }

  // Website Designing
  if (normalized.includes("figma")) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C9.2 2 7 4.2 7 7c0 2.2 1.4 4.1 3.4 4.8C9 12.3 7 14.5 7 17c0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.5-2-4.7-4.4-5.2C14.6 11.1 16 9.2 16 7c0-2.8-2.2-5-5-5zm0 2c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm0 10c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z" fill="#F24E1E"/>
      </svg>
    );
  }
  if (normalized.includes("framer")) {
    return (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h12v12H0V0zm0 12h12v12L0 12zm12 0h12V0L12 12z"/>
      </svg>
    );
  }
  if (normalized.includes("tailwind")) {
    return (
      <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6.086C17.79 6.086 21.6 12 21.6 12s-3.81 5.914-9.6 5.914C6.21 17.914 2.4 12 2.4 12s3.81-5.914 9.6-5.914M12 4.086C5.07 4.086 0 12 0 12s5.07 7.914 12 7.914S24 12 24 12s-5.07-7.914-12-7.914"/>
      </svg>
    );
  }
  if (normalized.includes("next")) {
    return (
      <svg className="w-5 h-5 text-white bg-black rounded-full p-0.5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6 15.3l-5.6-7.8h-1.6v8.9h1.4v-6.9l5.1 7.2c.4-.4.8-1 1-1.4M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.3 14.8l-7.7-10.8v10.8H6.2V6.2h1.6l7.7 10.8v-10.8h1.4v10.6z"/>
      </svg>
    );
  }
  if (normalized.includes("vercel")) {
    return (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 22.525H0L12 1.475L24 22.525Z"/>
      </svg>
    );
  }

  // Cybersecurity
  if (normalized.includes("cloudflare")) {
    return (
      <svg className="w-5 h-5 text-[#F38020]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.03 6.06c-3.32 0-6 2.68-6 6a6 6 0 0 0 .18 1.46c-2.14.73-3.68 2.76-3.68 5.15c0 3 2.45 5.43 5.47 5.43h11c2.75 0 5-2.25 5-5a5 5 0 0 0-3.65-4.81c.03-.2.05-.4.05-.62a6.38 6.38 0 0 0-6.37-6.37c-.7 0-1.37.12-2 .32a6 6 0 0 0-4-.83m0 2c1.78 0 3.32 1.05 4.07 2.57c.25-.09.5-.14.76-.14c2.42 0 4.38 1.96 4.38 4.38c0 .24-.03.48-.07.72c1.37.58 2.33 1.95 2.33 3.52c0 2.15-1.75 3.9-3.9 3.9h-11c-2.15 0-3.9-1.75-3.9-3.9c0-1.63 1-3.04 2.45-3.62c-.1-.31-.15-.65-.15-.99c0-3.32 2.68-6 6-6"/>
      </svg>
    );
  }
  if (normalized.includes("wireguard")) {
    return (
      <svg className="w-5 h-5 text-[#88171A]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1L2 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5L12 1zm0 2.18l7 2.8v5.02c0 4.43-2.94 8.58-7 9.8-4.06-1.22-7-5.37-7-9.8V5.98l7-2.8z"/>
      </svg>
    );
  }
  if (normalized.includes("wireshark")) {
    return (
      <svg className="w-5 h-5 text-[#1679A7]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-1.5-4c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1.45 1 1 1v3.5c0 .55-.45 1-1 1z"/>
      </svg>
    );
  }

  // Social Media / Digital Marketing
  if (normalized.includes("hubspot")) {
    return (
      <svg className="w-5 h-5 text-[#FF7A59]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11.5c0-3.32-2.18-6.13-5.18-7.15c.1-.4.18-.82.18-1.25C17 1.62 15.38 0 13.5 0S10 1.62 10 3.1c0 .43.08.85.18 1.25C7.18 5.37 5 8.18 5 11.5c0 2.21.97 4.19 2.5 5.56v3.84c0 .6.49 1.1 1.1 1.1h5.8c.6 0 1.1-.5 1.1-1.1v-3.84c1.53-1.37 2.5-3.35 2.5-5.56m-8.5-9c0-.44.36-.8.8-.8s.8.36.8.8c0 .44-.36.8-.8.8s-.8-.36-.8-.8m.8 19.3h-1.6v-3.3h1.6v3.3m0-4.9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m3.7-5.4c-.2.2-.5.2-.7 0l-.8-.8c-.2-.2-.2-.5 0-.7c.8-.8.8-2.1 0-2.9c-.2-.2-.2-.5 0-.7l.8-.8c.2-.2.5-.2.7 0c1.6 1.6 1.6 4.3 0 5.9"/>
      </svg>
    );
  }
  if (normalized.includes("meta") || normalized.includes("facebook")) {
    return (
      <svg className="w-5 h-5 text-[#0668E1]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.05 18c-2.45 0-4.61-1.25-5.83-3.15C5 13 4 10.65 4.05 8c.03-1.63.7-3.17 1.83-4.32C7.1 2.53 8.78 2 10.5 2c1.7 0 3.3.52 4.54 1.48C16.28 4.44 17 5.8 17.03 7.3c.03 1.5-.51 2.95-1.53 4.07C14.28 12.7 12.7 13.2 11 13.2c-1.7 0-3.3-.52-4.54-1.48C5.22 10.76 4.5 9.4 4.47 7.9c-.03-1.5.51-2.95 1.53-4.07C7.22 2.5 8.8 2 10.5 2c1.7 0 3.3.52 4.54 1.48C16.28 4.44 17 5.8 17.03 7.3"/>
      </svg>
    );
  }
  if (normalized.includes("linkedin")) {
    return (
      <svg className="w-5 h-5 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    );
  }
  if (normalized.includes("trello")) {
    return (
      <svg className="w-5 h-5 text-[#0079BF]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.2 0H2.8C1.25 0 0 1.25 0 2.8v18.4C0 22.75 1.25 24 2.8 24h18.4c1.55 0 2.8-1.25 2.8-2.8V2.8C24 1.25 22.75 0 21.2 0zm-11 17.6c0 .88-.72 1.6-1.6 1.6H5.2c-.88 0-1.6-.72-1.6-1.6V5.2c0-.88.72-1.6 1.6-1.6h3.4c.88 0 1.6.72 1.6 1.6v12.4zm10.2-5.6c0 .88-.72 1.6-1.6 1.6h-3.4c-.88 0-1.6-.72-1.6-1.6V5.2c0-.88.72-1.6 1.6-1.6h3.4c.88 0 1.6.72 1.6 1.6v6.8z"/>
      </svg>
    );
  }
  if (normalized.includes("zapier")) {
    return (
      <svg className="w-5 h-5 text-[#FF4A00]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.78 12.8l-4 4c-.39.39-1.02.39-1.41 0l-4-4c-.39-.39-.39-1.02 0-1.41l4-4c.39-.39 1.02-.39 1.41 0l4 4c.39.39.39 1.02 0 1.41z"/>
      </svg>
    );
  }

  // Fallback generic dynamic code/tech icon
  return (
    <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 18L22 12L16 6" />
      <path d="M8 6L2 12L8 18" />
    </svg>
  );
}

export default function ServiceDetailClient({
  serviceSlug,
  service,
  theme,
  serviceImg,
}: ServiceDetailClientProps) {
  const IconComponent = serviceIcons[serviceSlug] || Shield;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Background Mesh Grid Overlay
  const MeshGrid = () => (
    <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none overflow-hidden">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="detail-mesh" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#detail-mesh)" />
      </svg>
    </div>
  );

  // DYNAMIC HERO SECTIONS (Page Headers customized for each service slug - No BackLink)
  const renderHeroSection = () => {
    switch (serviceSlug) {
      case "cybersecurity":
        return (
          <section className={`relative z-10 -mt-20 sm:-mt-[108px] pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-10 md:pb-12 px-6 md:px-12 bg-gradient-to-b ${theme.gradientHero} text-white border-b border-slate-900 overflow-hidden`}>
            <MeshGrid />
            <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none z-0" style={{ background: `radial-gradient(circle, ${theme.glowColor} 0%, transparent 70%)` }} />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    ZERO-TRUST SECURITY COMPLIANCE
                  </span>
                  <div className="h-0.5 w-8 bg-slate-800 rounded-full"></div>
                </div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.2] text-white">
                  Zero-Trust Infrastructure Protection & <span className="text-emerald-400">Vulnerability Isolation</span>
                </h1>
                <p className="text-base md:text-lg font-semibold tracking-wide text-white">
                  Securing active cloud systems, core networks, and database endpoints from malicious access.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed max-w-xl hidden md:block">
                  We implement robust, end-to-end security configurations. Our security engineers configure Wazuh threat monitoring SIEMs, WireGuard encryption networks, and Cloudflare Web Application Firewalls (WAF) to isolate potential vulnerability vectors.
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <Link href="/contact" className="px-6 py-3 rounded-xl bg-orange-brand hover:bg-orange-brand-hover text-white font-bold text-sm shadow-lg shadow-orange-brand/20 transition-all flex items-center gap-2">
                    Request Security Audit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="#capabilities" className="px-6 py-3 rounded-xl border border-slate-805 bg-slate-900/40 text-slate-350 font-bold text-sm hover:bg-slate-900/80 hover:text-white transition-all backdrop-blur-sm">
                    Technical Specifications
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 relative w-full mt-6 lg:mt-0 max-w-lg lg:max-w-none mx-auto">
                <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative w-full aspect-[16/10] rounded-2xl p-2 border border-slate-800/80 bg-slate-900/35 backdrop-blur-sm shadow-2xl overflow-visible group">
                  <div className="absolute -inset-1.5 rounded-[20px] opacity-25 blur-xl z-0" style={{ background: `linear-gradient(135deg, ${theme.glowColor}, transparent)` }} />
                  <div className="relative w-full h-full rounded-xl overflow-hidden z-10 border border-slate-855">
                    <Image src={serviceImg} alt={service.name} fill className="object-cover object-center" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="relative mt-8 lg:mt-0 lg:absolute lg:-bottom-8 lg:left-6 lg:right-6 z-20 p-4 rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-md shadow-2xl grid grid-cols-3 gap-2 divide-x divide-slate-800/60">
                    {service.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center px-2 py-1">
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">{metric.label}</p>
                        <p className={`text-base sm:text-lg font-black tracking-tight ${theme.accentText}`}>{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );

      case "website-designing":
        return (
          <section className={`relative z-10 -mt-20 sm:-mt-[108px] pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-10 md:pb-12 px-6 md:px-12 bg-gradient-to-br from-cyan-950 via-slate-950 to-slate-900 text-white border-b border-slate-900 overflow-hidden`}>
            <MeshGrid />
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full opacity-15 blur-3xl pointer-events-none z-0" style={{ background: `radial-gradient(circle, ${theme.glowColor} 0%, transparent 70%)` }} />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-5 order-2 lg:order-1 relative w-full max-w-lg lg:max-w-none mx-auto">
                <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="relative w-full aspect-[4/3] rounded-2xl p-1 bg-gradient-to-tr from-cyan-500/20 to-transparent border border-cyan-500/20 shadow-2xl overflow-hidden group">
                  <div className="relative w-full h-full rounded-xl overflow-hidden z-10">
                    <Image src={serviceImg} alt={service.name} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" priority />
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    AESTHETIC SPEED ENGINEERING
                  </span>
                  <div className="h-0.5 w-8 bg-slate-800 rounded-full"></div>
                </div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.2] text-white">
                  High-Conversion <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">Web Architectures</span>
                </h1>
                <p className="text-base md:text-lg font-bold tracking-wide text-white">
                  Custom wireframes, immersive layouts, and Core Web Vitals optimizations.
                </p>
                <p className="text-slate-350 text-sm leading-relaxed max-w-xl hidden md:block">
                  We craft bespoke corporate web systems combining fluid Framer Motion micro-animations, clean type layouts, and optimized script execution. We deliver 99/100 Google PageSpeed scores that increase customer trust and lead conversion ratios.
                </p>
                <div className="grid grid-cols-3 gap-4 border-y border-slate-800/60 py-4 max-w-xl">
                  {service.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{metric.label}</span>
                      <span className="text-xl font-extrabold text-cyan-400">{metric.value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-2">
                  <Link href="/contact" className="px-6 py-3 rounded-xl bg-orange-brand hover:bg-orange-brand-hover text-white font-bold text-sm shadow-lg shadow-orange-brand/20 transition-all flex items-center gap-2">
                    Build Custom Website <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );

      case "mobile-development":
        return (
          <section className={`relative z-10 -mt-20 sm:-mt-[108px] pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-10 md:pb-12 px-6 md:px-12 bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 text-white border-b border-slate-900 overflow-hidden`}>
            <MeshGrid />
            <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl pointer-events-none z-0" style={{ background: `radial-gradient(circle, ${theme.glowColor} 0%, transparent 70%)` }} />
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10">
              {/* Left Column: Text Content and Metrics */}
              <div className="lg:col-span-7 flex flex-col gap-5 text-left items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                  <Smartphone className="w-3.5 h-3.5 animate-bounce" /> iOS & Android Engineering
                </div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.2] text-white">
                  Custom Mobile <span className={theme.accentText}>Applications</span>
                </h1>
                <p className="text-base md:text-lg font-semibold text-white">
                  {service.tagline}
                </p>
                <p className="text-slate-350 text-sm leading-relaxed max-w-xl hidden md:block">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mt-2">
                  <Link href="/contact" className="px-6 py-3 rounded-xl bg-orange-brand hover:bg-orange-brand-hover text-white font-bold text-sm shadow-lg shadow-orange-brand/20 transition-all flex items-center gap-2">
                    Launch App Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Metrics horizontal row */}
                <div className="w-full max-w-xl grid grid-cols-3 gap-6 border-t border-slate-800/60 pt-4 mt-2 md:pt-6 md:mt-4">
                  {service.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{metric.label}</span>
                      <span className="text-lg font-black text-indigo-400">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Floating Phone Mockup & Telemetry Badges */}
              <div className="lg:col-span-5 relative w-full mt-4 lg:mt-0 max-w-sm lg:max-w-none mx-auto flex items-center justify-center p-2 lg:p-6">
                {/* Floating Metrics Badge 1 (Left Side of Phone) */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ delay: 0.3 }} 
                  className="absolute left-[-20px] top-[25%] bg-slate-900/90 border border-slate-800/80 p-3 rounded-2xl shadow-2xl backdrop-blur-md z-20 flex items-center gap-2.5 max-w-[160px]"
                >
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[7px] text-slate-400 uppercase font-black tracking-wider leading-none mb-1">Crash-Free</span>
                    <span className="text-xs font-black text-indigo-400 leading-none">99.9% Ratio</span>
                  </div>
                </motion.div>

                {/* Floating Metrics Badge 2 (Right Side of Phone) */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ delay: 0.4 }} 
                  className="absolute right-[-20px] bottom-[30%] bg-slate-900/90 border border-slate-800/80 p-3 rounded-2xl shadow-2xl backdrop-blur-md z-20 flex items-center gap-2.5 max-w-[160px]"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[7px] text-slate-400 uppercase font-black tracking-wider leading-none mb-1">Load Speed</span>
                    <span className="text-xs font-black text-emerald-400 leading-none">-45% Delay</span>
                  </div>
                </motion.div>

                {/* Phone Mockup Frame */}
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }} 
                  animate={{ scale: 1, opacity: 1 }} 
                  className="relative w-[230px] sm:w-[250px] aspect-[9/18.5] rounded-[38px] border-[6px] border-slate-800 bg-slate-950 p-1.5 shadow-2xl z-10"
                >
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-slate-800 rounded-full z-30" />
                  
                  {/* Screen Content */}
                  <div className="relative w-full h-full rounded-[30px] overflow-hidden border border-slate-900 bg-slate-900">
                    <Image src={serviceImg} alt={service.name} fill className="object-cover object-center" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );

      case "application-development":
        return (
          <section className={`relative z-10 -mt-20 sm:-mt-[108px] pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-10 md:pb-12 px-6 md:px-12 bg-gradient-to-r from-slate-950 via-purple-950 to-slate-900 text-white border-b border-slate-900 overflow-hidden`}>
            <MeshGrid />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl pointer-events-none z-0" style={{ background: `radial-gradient(circle, ${theme.glowColor} 0%, transparent 70%)` }} />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    HIGH-PERFORMANCE CORE SYSTEMS
                  </span>
                  <div className="h-0.5 w-8 bg-slate-800 rounded-full"></div>
                </div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-[1.2]">
                  Custom Enterprise Software & <span className="text-purple-400">Cloud Portals</span>
                </h1>
                <p className="text-base md:text-lg font-semibold tracking-wide text-white">
                  Cloud-native server architectures, high-concurrency databases, and custom API layers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mt-2">
                  <div className="md:col-span-7 text-slate-355 text-sm leading-relaxed hidden md:block">
                    We architect customized web systems, SaaS platforms, and distributed software databases built to handle high concurrent user traffic. Our developers prioritize TypeScript codebases, Docker containerization, and automated CI/CD configurations.
                  </div>
                  <div className="md:col-span-5 flex flex-col gap-3.5 bg-slate-900/40 p-4 rounded-xl border border-slate-808/85 backdrop-blur-sm">
                    {service.metrics.map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-slate-850 pb-2 last:border-0 last:pb-0">
                        <span className="text-[9px] text-slate-455 font-bold uppercase tracking-wider">{metric.label}</span>
                        <span className="text-sm font-extrabold text-purple-400">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-2">
                  <Link href="/contact" className="px-6 py-3 rounded-xl bg-orange-brand hover:bg-orange-brand-hover text-white font-bold text-sm shadow-lg shadow-orange-brand/20 transition-all flex items-center gap-2">
                    Request Architecture Review <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative w-full max-w-lg lg:max-w-none mx-auto">
                <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="border border-slate-800 rounded-2xl bg-slate-950/95 overflow-hidden shadow-2xl flex flex-col">
                  <div className="bg-slate-900 px-4 py-3 border-b border-slate-855 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" /> app_dev_architecture.ts
                    </span>
                    <div className="w-12" />
                  </div>
                  <div className="p-1.5 aspect-[4/3] relative w-full overflow-hidden bg-slate-900/40">
                    <div className="relative w-full h-full rounded-lg overflow-hidden border border-slate-850">
                      <Image src={serviceImg} alt={service.name} fill className="object-cover object-center" priority />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );

      case "digital-marketing":
        return (
          <section className={`relative z-10 -mt-20 sm:-mt-[108px] pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-10 md:pb-12 px-6 md:px-12 bg-gradient-to-b ${theme.gradientHero} text-white border-b border-slate-900 overflow-hidden`}>
            <MeshGrid />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-7 flex flex-col gap-5 justify-center pb-4 lg:pb-0">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    DATA-BACKED REVENUE GROWTH
                  </span>
                  <div className="h-0.5 w-8 bg-slate-800 rounded-full"></div>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.2] tracking-tight">
                  High-Performance <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">Growth Funnels</span>
                </h1>
                <p className="text-base md:text-lg font-semibold text-white">
                  Search Engine Optimization (SEO) dominance, PPC targeting, and CRM pipeline mapping.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xl hidden md:block">
                  We engineer search algorithms and targeted acquisition paths. By deploying customized keyword content structures, high-intent landing layouts, and telemetry data audits, we maximize user signups and sales conversions.
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <Link href="/contact" className="px-6 py-3 rounded-xl bg-orange-brand hover:bg-orange-brand-hover text-white font-bold text-sm shadow-lg shadow-orange-brand/20 transition-all flex items-center gap-2">
                    Start Campaign Audit <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative w-full min-h-[300px] lg:min-h-[380px] rounded-2xl border border-slate-800/60 overflow-hidden flex items-end max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 z-0">
                  <Image src={serviceImg} alt={service.name} fill className="object-cover object-center" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none lg:bg-gradient-to-r lg:from-slate-950 lg:via-transparent lg:to-transparent" />
                </div>
                
                <div className="relative z-10 p-6 md:p-8 flex flex-col gap-3 w-full max-w-sm">
                  {service.metrics.map((metric, idx) => (
                    <motion.div key={idx} initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: idx * 0.1 }} className="bg-slate-900/90 border border-slate-808/80 p-3 rounded-xl backdrop-blur-md shadow-2xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[8px] text-slate-455 font-extrabold uppercase tracking-widest">{metric.label}</p>
                        <p className="text-sm font-black text-sky-400">{metric.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );



      default:
        return null;
    }
  };

  // DYNAMIC BODY SECTIONS (5 fully unique sections per service page including Case Study)
  const renderBodySections = () => {
    switch (serviceSlug) {
      case "cybersecurity":
        return (
          <>
            {/* Custom Section 1: SIEM Security Operations Center & Live Logs */}
            <section className="pt-8 md:pt-12 pb-14 md:pb-24 px-6 md:px-12 bg-white relative z-10 border-b border-slate-100">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                    Continuous Threat Hunting & SOC Management
                  </h2>
                  <p className="text-slate-605 text-sm leading-relaxed mb-6">
                    Protecting corporate assets requires active threat management. Our 24/7 Security Operations Center (SOC) utilizes customized SIEM integrations to parse server log headers, detect lateral movement attempts, and immediately execute isolation playbooks.
                  </p>
                  <ul className="flex flex-col gap-4">
                    {[
                      "Real-time packet inspection and logging arrays",
                      "Automated hardware token verification systems",
                      "Brute force detection and firewall IP blocklist queues",
                      "Immediate server container isolation script triggers"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-center text-sm font-semibold text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative rounded-2xl border border-slate-200 shadow-xl overflow-hidden bg-slate-950 p-2">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-900">
                    <Image src="/images/sec_dashboard.png" alt="Threat Telemetry Dashboard Mockup" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </section>

            {/* Custom Section 2: Vulnerability Compliance Grid */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-slate-50 relative z-10 border-b border-slate-200">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Enterprise Compliance & Auditing Systems</h2>
                  <p className="text-slate-600 text-sm">We configure and align your server storage arrays, database logic, and logging schemas to survive strict regulatory security assessments.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { title: "SOC 2 Type II", spec: "Continuous Logging & Audit Trails", progress: "100%", desc: "Complete telemetry infrastructure logging user actions, system edits, and login checks." },
                    { title: "GDPR / CCPA", spec: "Data Privacy & Isolation", progress: "100%", desc: "Data schema configurations allowing secure record removal, user tracking flags, and local storage overrides." },
                    { title: "HIPAA Compliant", spec: "Protected Health Information Encryptions", progress: "100%", desc: "Zero-knowledge server databases and TLS 1.3 data transfer tunnels protecting active records." },
                    { title: "PCI-DSS v4.0", spec: "Payment Pipeline Security Isolation", progress: "100%", desc: "Strict separation of merchant server containers, secure Stripe integrations, and tokenized checkouts." }
                  ].map((comp, idx) => (
                    <div key={idx} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-extrabold text-slate-808 text-base">{comp.title}</h3>
                        <span className="text-xs text-emerald-500 font-extrabold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">{comp.progress}</span>
                      </div>
                      <p className="text-[10px] text-slate-455 uppercase font-black tracking-wider leading-none">{comp.spec}</p>
                      <p className="text-xs text-slate-555 leading-relaxed">{comp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Custom Section 3: Live Incident Response SLA Timeline */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-white relative z-10 border-b border-slate-100">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shadow-sm border border-red-100 mb-4 mx-auto">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900">Incident Mitigation Timeline (SLA)</h2>
                  <p className="text-slate-600 text-sm mt-3">How our automated zero-trust shields react to potential threat vectors in real-time.</p>
                </div>
                <div className="flex flex-col gap-8 relative">
                  <span className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200" />
                  {[
                    { time: "0 - 5 Seconds", event: "Intrusion Alert Detection", desc: "Wazuh SIEM registers unauthorized privilege escalation attempts or port mapping scans." },
                    { time: "5 - 15 Seconds", event: "Automated Firewall Isolation", desc: "Cloudflare WAF dynamically drops the target IP addresses and segments access paths." },
                    { time: "15 - 30 Seconds", event: "Docker Container Recycling", desc: "The affected container nodes are isolated, terminated, and rebuilt from verified system images." },
                    { time: "30 Seconds+", event: "Post-Incident Analysis Dispatch", desc: "Our response engineers complete the incident report and compile comprehensive server access logs." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-8 relative items-start">
                      <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-emerald-400 text-white font-extrabold text-sm flex items-center justify-center shrink-0 z-10">
                        {idx + 1}
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest block mb-1">{step.time}</span>
                        <h4 className="text-base font-extrabold text-slate-900 mb-1">{step.event}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Custom Section 4: Security Audit Scope Deliverables */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-slate-909 text-white relative z-10 border-b border-slate-950">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl font-black text-white mb-4">Complete Audit Package Scope</h2>
                  <p className="text-slate-400 text-sm">Every enterprise penetration audit compiles comprehensive, action-oriented security materials.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "Penetration Scan Report", details: "OWASP vulnerability mappings, testing logs, and proof-of-concept exploits." },
                    { title: "IAM Configurations", details: "Policy updates, group privilege maps, and zero-trust credentials." },
                    { title: "Network Diagnostics", details: "Active ports analysis, DNS leaks, and subnet routing blueprints." }
                  ].map((audit, idx) => (
                    <div key={idx} className="p-8 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col gap-4">
                      <FileText className="w-8 h-8 text-emerald-400" />
                      <h3 className="font-extrabold text-base text-white">{audit.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{audit.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Custom Section 5: Implementation Process Roadmap */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-slate-50 relative z-10 border-b border-slate-200">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                    OUR ROADMAP
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 mt-4">
                    Security Deployment Lifecycle
                  </h2>
                  <p className="text-slate-600 text-sm mt-3">
                    A structured, end-to-end process ensuring robust planning, seamless orchestration, and zero-compromise security posture.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    {
                      step: "01",
                      title: "Audit & Surface Scan",
                      desc: "Passive network scanning, privilege mapping, and code scans to locate security leaks.",
                      icon: Eye
                    },
                    {
                      step: "02",
                      title: "Policy Architecture",
                      desc: "Drafting zero-trust access templates, network routing layouts, and sandbox limits.",
                      icon: FileText
                    },
                    {
                      step: "03",
                      title: "Infrastructure Hardening",
                      desc: "Deploying Wazuh monitoring agents, private WireGuard tunnels, and Cloudflare WAF setups.",
                      icon: Shield
                    },
                    {
                      step: "04",
                      title: "SOC Monitor & Re-Audits",
                      desc: "24/7 SIEM alert analyses, active firewall adjustments, and regular penetration checks.",
                      icon: Activity
                    }
                  ].map((proc, idx) => {
                    const ProcIcon = proc.icon;
                    return (
                      <div 
                        key={idx} 
                        className="group p-8 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-emerald-500/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/50 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                              <ProcIcon className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-black text-slate-350 group-hover:text-emerald-500 transition-colors duration-300">
                              STEP {proc.step}
                            </span>
                          </div>
                          <h3 className="font-extrabold text-slate-800 text-base mb-2 group-hover:text-slate-900">
                            {proc.title}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {proc.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        );

      case "website-designing":
        return (
          <>
            {/* Custom Section 1: Figma System Showcase */}
            <section className="pt-8 md:pt-12 pb-14 md:pb-24 px-6 md:px-12 bg-white relative z-10 border-b border-slate-100">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative rounded-2xl border border-slate-200 shadow-xl overflow-hidden bg-slate-950 p-2">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-900">
                    <Image src="/images/design_figma.png" alt="Figma Design Token System" fill className="object-cover" />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                    Harmonized UI Component Libraries
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Visual consistency builds brand equity. We mock up every viewport design in Figma using scalable layout design grids, clear typographic variables (sans, mono, display), and consistent spacing rules before writing a single line of React code.
                  </p>
                  <ul className="flex flex-col gap-4">
                    {[
                      "Custom wireframing and interactive UI flows",
                      "Scalable visual component libraries and styles",
                      "Harmonious custom color palettes matching brand guidelines",
                      "Responsive grid systems mapped from 320px to 1920px width"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-center text-sm font-semibold text-slate-700">
                        <CheckCircle className="w-4 h-4 text-cyan-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Custom Section 2: Core Web Vitals targets */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-slate-50 relative z-10 border-b border-slate-200">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Core Web Vitals Performance Targets</h2>
                  <p className="text-slate-600 text-sm">We optimize site script bundles, compress image assets, and use static site generation to guarantee fast site rendering speeds.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { metric: "LCP", title: "Largest Contentful Paint", target: "< 1.2s", desc: "Main visual page elements render immediately, reducing bounce rates and boosting SEO search ranks." },
                    { metric: "FID", title: "First Input Delay", target: "< 10ms", desc: "Interactive inputs, links, and forms react instantly to click events without processing lag." },
                    { metric: "CLS", title: "Cumulative Layout Shift", target: "0.0", desc: "Fixed fonts, spacing templates, and media constraints prevent page layout shifts during asset loads." }
                  ].map((vit, idx) => (
                    <div key={idx} className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-black text-cyan-500 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-100">{vit.metric}</span>
                        <span className="text-lg font-black text-slate-800">{vit.target}</span>
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base">{vit.title}</h3>
                      <p className="text-xs text-slate-605 leading-relaxed">{vit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Custom Section 3: High-Fidelity Design Sprint Workflow */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-white relative z-10 border-b border-slate-100">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shadow-sm border border-cyan-100 mb-4 mx-auto">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900">Sprint Workflow Pipeline</h2>
                  <p className="text-slate-600 text-sm mt-3">From wireframe prototypes to high-performance Next.js container deployments.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { phase: "Phase 01", title: "Wireframes", desc: "UX blueprints mapping conversion paths and structural grids." },
                    { phase: "Phase 02", title: "Style Tokens", desc: "Defining UI palettes, font pairings, and responsive variables." },
                    { phase: "Phase 03", title: "Interactive Mockups", desc: "Figma prototype reviews to lock layouts before coding starts." },
                    { phase: "Phase 04", title: "React Deploy", desc: "High-performance React deployment on static edge CDNs." }
                  ].map((sprint, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col gap-3">
                      <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest">{sprint.phase}</span>
                      <h4 className="text-sm font-bold text-slate-900">{sprint.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{sprint.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Custom Section 4: Dynamic Conversion CRO Utilities */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-slate-900 text-white relative z-10 border-b border-slate-950">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl font-black text-white mb-4">Conversion Rate Optimization Features</h2>
                  <p className="text-slate-400 text-sm">We implement frontend features built to simplify paths and increase lead actions.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "Sticky Action CTAs", details: "Conversion buttons that remain accessible at the screen edge during scroll actions." },
                    { title: "Auto-fill Form Loops", details: "Smart autocomplete configurations reducing keystrokes and simplifying inputs." },
                    { title: "Edge Prefetched Routes", details: "Next.js routing prefetching links to load pages instantly." }
                  ].map((cro, idx) => (
                    <div key={idx} className="p-8 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col gap-4">
                      <Zap className="w-8 h-8 text-cyan-400" />
                      <h3 className="font-extrabold text-base text-white">{cro.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{cro.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Custom Section 5: Implementation Process Roadmap */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-slate-50 relative z-10 border-b border-slate-200">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest bg-cyan-500/10 text-cyan-600 border border-cyan-500/20">
                    OUR ROADMAP
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 mt-4">
                    From Concept to Production CDN
                  </h2>
                  <p className="text-slate-600 text-sm mt-3">
                    Our creative and engineering journey from low-fidelity wireframes to rapid edge-delivered pages.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    {
                      step: "01",
                      title: "UX & Interface Flow",
                      desc: "Interactive user flow mockups and site maps focusing on optimal navigation paths.",
                      icon: Compass
                    },
                    {
                      step: "02",
                      title: "Design Token Figma System",
                      desc: "Establishing visual styling systems, custom colors, typography tokens, and wireframes.",
                      icon: Layers
                    },
                    {
                      step: "03",
                      title: "React & Next.js Coding",
                      desc: "Writing clean React component structures with fluid, responsive Framer Motion animations.",
                      icon: Code
                    },
                    {
                      step: "04",
                      title: "SEO & Edge Deploy",
                      desc: "Optimizing script load metrics, adding metadata schemas, and deploying to global hosting CDNs.",
                      icon: Globe
                    }
                  ].map((proc, idx) => {
                    const ProcIcon = proc.icon;
                    return (
                      <div 
                        key={idx} 
                        className="group p-8 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-cyan-500/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100/50 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                              <ProcIcon className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-black text-slate-350 group-hover:text-cyan-500 transition-colors duration-300">
                              STEP {proc.step}
                            </span>
                          </div>
                          <h3 className="font-extrabold text-slate-800 text-base mb-2 group-hover:text-slate-900">
                            {proc.title}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {proc.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        );

      case "mobile-development":
        return (
          <>
            {/* Custom Section 1: Offline Sync Database explanation */}
            <section className="pt-8 md:pt-12 pb-14 md:pb-24 px-6 md:px-12 bg-white relative z-10 border-b border-slate-100">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                    Robust Offline-First Data Sync Engines
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Mobile applications must run reliably regardless of network connectivity. We design local database structures (SQLite / Realm) that cache user edits, queuing requests to synchronize automatically with cloud server APIs once networks recover.
                  </p>
                  <ul className="flex flex-col gap-4">
                    {[
                      "SQLite / Realm databases with transaction controls",
                      "Dynamic local cache queue for write/edit requests",
                      "Websocket configurations for real-time data push/pull",
                      "Conflict resolution protocols to handle concurrent database edits"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-center text-sm font-semibold text-slate-700">
                        <CheckCircle className="w-4 h-4 text-indigo-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative rounded-2xl border border-slate-200 shadow-xl overflow-hidden bg-slate-950 p-2">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-900">
                    <Image src="/images/mobile_sync.png" alt="Offline Database Sync Schematic" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </section>

            {/* Custom Section 2: Device Testing Matrix */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-slate-50 relative z-10 border-b border-slate-200">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Multi-Platform Device Verification</h2>
                  <p className="text-slate-600 text-sm">We test build compilation, layout scaling, and hardware sensors across dozens of testing configurations.</p>
                </div>
                <div className="border border-slate-200 bg-white rounded-2xl shadow-sm overflow-x-auto">
                  <table className="w-full min-w-[600px] text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-[10px] text-slate-455 uppercase font-black tracking-widest">
                        <th className="p-4">Platform</th>
                        <th className="p-4">Target OS Versions</th>
                        <th className="p-4">Verification Methods</th>
                        <th className="p-4">Success Ratio</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs text-slate-655 divide-y divide-slate-100">
                      {[
                        { plat: "Apple iOS", os: "iOS 15.0 - 18.0+", methods: "SwiftUI, TestFlight Sandbox Beta, XCode Diagnostics", success: "99.98% Crash-Free" },
                        { plat: "Google Android", os: "Android API 28 - 35+", methods: "Jetpack Compose, Play Console Beta, Firebase Test Lab", success: "99.92% Crash-Free" },
                        { plat: "Cross-Platform", os: "Hybrid SDK Runtimes", methods: "React Native & Flutter layout diagnostics across form factors", success: "99.90% Crash-Free" }
                      ].map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50">
                          <td className="p-4 font-bold text-slate-808">{item.plat}</td>
                          <td className="p-4 font-mono">{item.os}</td>
                          <td className="p-4">{item.methods}</td>
                          <td className="p-4 font-bold text-emerald-600">{item.success}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Custom Section 3: App Store Optimization (ASO) & Publishing Suite */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-white relative z-10 border-b border-slate-100">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-sm border border-indigo-100 mb-4 mx-auto">
                    <SmartphoneCharging className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900">ASO & Launch Services</h2>
                  <p className="text-slate-600 text-sm mt-3">We handle the complete setup to publish your application and attract organic store searches.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Metadata Keyword Mapping", desc: "Analyzing search intent to configure application titles, descriptions, and tag profiles." },
                    { title: "A/B Store Testing", desc: "Drafting multiple app layouts and icon variants to optimize user click conversion rates." },
                    { title: "Continuous Submissions", desc: "Managing certificates, provisioning profiles, store audits, and reviews pipelines." }
                  ].map((aso, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col gap-3">
                      <h4 className="text-sm font-bold text-slate-900">{aso.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{aso.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Custom Section 4: Native Hardware Security Layers */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-slate-900 text-white relative z-10 border-b border-slate-950">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl font-black text-white mb-4">Device Security Integrity</h2>
                  <p className="text-slate-400 text-sm">We construct client-side layers to isolate active session tokens and encrypt local data.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "Keyring Encodings", details: "Integrating Apple Keychain and Android Keystore to isolate security credential keys." },
                    { title: "Biometric Gates", details: "Configuring native FaceID and fingerprint checks to protect access to user accounts." },
                    { title: "SSL Pinning Protection", details: "Hardcoding certificate pins in the app build to prevent man-in-the-middle network attacks." }
                  ].map((sec, idx) => (
                    <div key={idx} className="p-8 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col gap-4">
                      <Key className="w-8 h-8 text-indigo-400" />
                      <h3 className="font-extrabold text-base text-white">{sec.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{sec.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Custom Section 5: Implementation Process Roadmap */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-slate-50 relative z-10 border-b border-slate-200">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest bg-indigo-500/10 text-indigo-600 border border-indigo-500/20">
                    OUR ROADMAP
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 mt-4">
                    End-to-End Mobile App Lifecycle
                  </h2>
                  <p className="text-slate-600 text-sm mt-3">
                    A rigorous development protocol building offline-first databases, encryption gates, and store-ready packages.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    {
                      step: "01",
                      title: "Flow & Wireframes",
                      desc: "Mapping layout navigation states, button locations, and device scale templates.",
                      icon: Layers
                    },
                    {
                      step: "02",
                      title: "Offline Storage & Sync",
                      desc: "Coding local SQLite/Realm data structures and websocket data synchronization layers.",
                      icon: Database
                    },
                    {
                      step: "03",
                      title: "Biometric & Hardware Sec",
                      desc: "Integrating FaceID, hardware keychain storage keys, and strict SSL API connections.",
                      icon: Lock
                    },
                    {
                      step: "04",
                      title: "ASO & Store Publishing",
                      desc: "Configuring App Store Connect metadata tags and submitting production review builds.",
                      icon: Smartphone
                    }
                  ].map((proc, idx) => {
                    const ProcIcon = proc.icon;
                    return (
                      <div 
                        key={idx} 
                        className="group p-8 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-indigo-500/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100/50 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                              <ProcIcon className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-black text-slate-350 group-hover:text-indigo-500 transition-colors duration-300">
                              STEP {proc.step}
                            </span>
                          </div>
                          <h3 className="font-extrabold text-slate-800 text-base mb-2 group-hover:text-slate-900">
                            {proc.title}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {proc.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        );

      case "application-development":
        return (
          <>
            {/* Custom Section 1: Kubernetes Cluster Scaling */}
            <section className="pt-8 md:pt-12 pb-14 md:pb-24 px-6 md:px-12 bg-white relative z-10 border-b border-slate-100">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative rounded-2xl border border-slate-200 shadow-xl overflow-hidden bg-slate-950 p-2">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-900">
                    <Image src="/images/app_topology.png" alt="Kubernetes Infrastructure Node Scaling" fill className="object-cover" />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                    High-Availability Cloud Containerization
                  </h2>
                  <p className="text-slate-605 text-sm leading-relaxed mb-6">
                    Distributed web software requires robust scaling rules. We containerize code logic into separate microservices using Docker, orchestrating resource pools inside Kubernetes clusters across AWS and Google Cloud systems.
                  </p>
                  <ul className="flex flex-col gap-4">
                    {[
                      "Docker container isolation for microservices",
                      "Kubernetes automated autoscaling configurations",
                      "Nginx and Cloudflare API load balancing pipelines",
                      "Multi-region database master-replica failovers"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-center text-sm font-semibold text-slate-700">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Custom Section 2: Technical API Telemetry Schema */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-slate-50 relative z-10 border-b border-slate-200">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Core API Scaling Parameters</h2>
                  <p className="text-slate-600 text-sm">We audit REST and GraphQL response schemas to maintain high availability and sub-millisecond latencies.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "Query Latency", val: "8.4ms Avg", icon: Cpu, desc: "Fast SQL queries structured with indexes, read-replicas, and optimized table join procedures." },
                    { title: "Cache Hit Ratio", val: "94.2% Hit", icon: Database, desc: "Redis caching configurations capturing high-frequency reads and offloading primary databases." },
                    { title: "API Availability", val: "99.99% Uptime", icon: Globe, desc: "API container failovers across multiple availability zones under load balancers." }
                  ].map((param, idx) => {
                    const ParamIcon = param.icon;
                    return (
                      <div key={idx} className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                          <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                            <ParamIcon className="w-5 h-5" />
                          </div>
                          <span className="text-base font-black text-slate-808">{param.val}</span>
                        </div>
                        <h3 className="font-extrabold text-slate-900 text-base">{param.title}</h3>
                        <p className="text-xs text-slate-655 leading-relaxed">{param.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Custom Section 3: Automated Database Replication & Backup Scheduling */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-white relative z-10 border-b border-slate-100">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-sm border border-purple-100 mb-4 mx-auto">
                    <Database className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900">Database Replication Schemes</h2>
                  <p className="text-slate-600 text-sm mt-3">Ensuring zero data loss and automated backups for business continuity.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Master-Replica Routing", desc: "Directing heavy read operations to replica nodes to prevent write transaction blockages." },
                    { title: "Point-in-Time Recovery", desc: "Automating snapshotting arrays saving database state increments to secure AWS S3 buckets." },
                    { title: "Failover Orchestrations", desc: "Automatic system redirection to backup database replicas when primary nodes drop." }
                  ].map((rep, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col gap-3">
                      <h4 className="text-sm font-bold text-slate-900">{rep.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{rep.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Custom Section 4: CI/CD GitHub Action Pipelines */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-slate-900 text-white relative z-10 border-b border-slate-950">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl font-black text-white mb-4">CI/CD Deployment Automation</h2>
                  <p className="text-slate-400 text-sm">Every push runs tests, packages builds, and updates cloud servers without site downtime.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { step: "Step 01", title: "Git Push Trigger", desc: "Developers merge clean TypeScript code, activating the automated GitHub Action runner." },
                    { step: "Step 02", title: "Test & Lint Suite", desc: "Running unit test checks and code formatting verification scripts to prevent bugs." },
                    { step: "Step 03", title: "Docker Container Push", desc: "Compiling the code build, packaging it as a docker image, and pushing to secure registries." },
                    { step: "Step 04", title: "ECS Rolling Deploy", desc: "Updating the active containers on AWS with zero request downtime." }
                  ].map((cicd, idx) => (
                    <div key={idx} className="p-6 bg-slate-900 border border-slate-800 rounded-xl flex flex-col gap-3">
                      <GitBranch className="w-5 h-5 text-purple-400" />
                      <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest leading-none mt-1">{cicd.step}</span>
                      <h4 className="text-sm font-bold text-white leading-none">{cicd.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{cicd.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Custom Section 5: Implementation Process Roadmap */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-slate-50 relative z-10 border-b border-slate-200">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest bg-purple-500/10 text-purple-600 border border-purple-500/20">
                    OUR ROADMAP
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 mt-4">
                    Robust Enterprise System Development
                  </h2>
                  <p className="text-slate-600 text-sm mt-3">
                    Architecting distributed servers, clustered databases, and CI/CD pipelines under auto-scaling guidelines.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    {
                      step: "01",
                      title: "Database & API Design",
                      desc: "Designing SQL relations, indexes, and schema plans alongside GraphQL endpoints.",
                      icon: Database
                    },
                    {
                      step: "02",
                      title: "Containerized Coding",
                      desc: "Structuring server APIs inside Docker containers integrated with Redis caches.",
                      icon: Server
                    },
                    {
                      step: "03",
                      title: "Kubernetes Scaling",
                      desc: "Configuring horizontal pod scaling templates inside isolated cloud server clusters.",
                      icon: Cpu
                    },
                    {
                      step: "04",
                      title: "CI/CD Action Pipelines",
                      desc: "Enforcing automated syntaxes, running unit tests, and executing rolling app updates.",
                      icon: GitBranch
                    }
                  ].map((proc, idx) => {
                    const ProcIcon = proc.icon;
                    return (
                      <div 
                        key={idx} 
                        className="group p-8 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-purple-500/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100/50 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                              <ProcIcon className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-black text-slate-355 group-hover:text-purple-500 transition-colors duration-300">
                              STEP {proc.step}
                            </span>
                          </div>
                          <h3 className="font-extrabold text-slate-800 text-base mb-2 group-hover:text-slate-900">
                            {proc.title}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {proc.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        );

      case "digital-marketing":
        return (
          <>
            {/* Custom Section 1: Revenue Acquisition Funnel */}
            <section className="pt-8 md:pt-12 pb-14 md:pb-24 px-6 md:px-12 bg-white relative z-10 border-b border-slate-100">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                    High-Intent Acquisition Funnel Audits
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Generic advertising is highly inefficient. We build data-led user paths mapping search traffic, landing page parameters, automated email sequences, and CRM database leads. We track and audit user actions to maximize conversion.
                  </p>
                  <ul className="flex flex-col gap-4">
                    {[
                      "Google search engine landing page layouts",
                      "Automated CRM tracking lead triggers (HubSpot / GA4)",
                      "A/B multivariate layout performance testing",
                      "Automated email sequence and coupon trigger logic"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-center text-sm font-semibold text-slate-700">
                        <CheckCircle className="w-4 h-4 text-sky-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative rounded-2xl border border-slate-200 shadow-xl overflow-hidden bg-slate-950 p-2">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-900">
                    <Image src="/images/marketing_funnel.png" alt="Revenue Funnel Dashboard" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </section>

            {/* Custom Section 2: Conversion Channels Matrix */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-slate-50 relative z-10 border-b border-slate-200">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Ad Channel Acquisition Parameters</h2>
                  <p className="text-slate-600 text-sm">We structure advertising metrics to maintain positive returns on investment across primary search networks.</p>
                </div>
                <div className="border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-[10px] text-slate-455 uppercase font-black tracking-widest">
                        <th className="p-4">Acquisition Channel</th>
                        <th className="p-4">Average CTR</th>
                        <th className="p-4">CPA Reduction Target</th>
                        <th className="p-4">Estimated ROI Loop</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs text-slate-655 divide-y divide-slate-100">
                      {[
                        { channel: "Google Search (SEO)", ctr: "4.8% CTR", cpa: "-35% Cost Reduction", roi: "3.5x ROI" },
                        { channel: "Paid PPC Advertising", ctr: "3.2% CTR", cpa: "-28% Cost Reduction", roi: "2.8x ROI" },
                        { channel: "Lead Funnel Telemetry", ctr: "12.4% Signup", cpa: "-40% Cost Reduction", roi: "4.2x ROI" }
                      ].map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50">
                          <td className="p-4 font-bold text-slate-808">{item.channel}</td>
                          <td className="p-4 font-mono">{item.ctr}</td>
                          <td className="p-4 text-emerald-600 font-bold">{item.cpa}</td>
                          <td className="p-4 font-bold text-slate-808">{item.roi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Custom Section 3: Conversion Rate Optimization (CRO) Funnels */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-white relative z-10 border-b border-slate-100">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shadow-sm border border-sky-100 mb-4 mx-auto">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900">CRO Framework Strategy</h2>
                  <p className="text-slate-600 text-sm mt-3">How we refine page interactions to simplify signup steps and increase conversions.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Multivariate A/B Testing", desc: "Comparing button placements, color tokens, and headlines to find the highest-converting variations." },
                    { title: "Session Heatmap Audits", desc: "Using telemetry (Hotjar) to map scroll depths and locate layout navigation blocks." },
                    { title: "Checkout Flow Cleanup", desc: "Removing excessive form steps to prevent cart drop-off and optimize sales pipeline speed." }
                  ].map((cro, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col gap-3">
                      <h4 className="text-sm font-bold text-slate-900">{cro.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{cro.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Custom Section 4: High-Authority Organic Lead Capture */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-slate-900 text-white relative z-10 border-b border-slate-950">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl font-black text-white mb-4">Organic Lead Generation Optimization</h2>
                  <p className="text-slate-400 text-sm">We structure metadata markup to guarantee long-term search engine authority.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "Schema Structural Markups", details: "Integrating semantic JSON-LD structures to help search engine crawlers map page elements." },
                    { title: "SEO Taxonomy Engineering", details: "Refining internal page structures and links to build site authority for core keywords." },
                    { title: "High-Authority Backlinks", details: "Conducting outreach campaigns to earn high-impact links from verified corporate domains." }
                  ].map((seo, idx) => (
                    <div key={idx} className="p-8 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col gap-4">
                      <Globe className="w-8 h-8 text-sky-400" />
                      <h3 className="font-extrabold text-base text-white">{seo.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{seo.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Custom Section 5: Implementation Process Roadmap */}
            <section className="py-14 md:py-24 px-6 md:px-12 bg-slate-50 relative z-10 border-b border-slate-200">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest bg-sky-500/10 text-sky-600 border border-sky-500/20">
                    OUR ROADMAP
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 mt-4">
                    Data-Driven Conversion Engine
                  </h2>
                  <p className="text-slate-605 text-sm mt-3">
                    Structuring conversion paths, scaling tracking setups, and executing weekly A/B optimizations to maximize ROI.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    {
                      step: "01",
                      title: "Telemetry & Tracking Setup",
                      desc: "Integrating Google Tag Manager scripts, Meta CAPI routes, and user flow map trackers.",
                      icon: Activity
                    },
                    {
                      step: "02",
                      title: "Landing Page Blueprints",
                      desc: "Developing targeted layout variations customized to capture specific search keyword leads.",
                      icon: Monitor
                    },
                    {
                      step: "03",
                      title: "A/B Conversion Testing",
                      desc: "Comparing spacing layouts, CTA button colors, and form lengths to reduce dropoff.",
                      icon: TrendingUp
                    },
                    {
                      step: "04",
                      title: "ROI & Bid Adjustments",
                      desc: "Auditing live Looker Studio data to adjust advertising budgets and optimize conversion costs.",
                      icon: BarChart2
                    }
                  ].map((proc, idx) => {
                    const ProcIcon = proc.icon;
                    return (
                      <div 
                        key={idx} 
                        className="group p-8 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-sky-500/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100/50 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                              <ProcIcon className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-black text-slate-350 group-hover:text-sky-500 transition-colors duration-300">
                              STEP {proc.step}
                            </span>
                          </div>
                          <h3 className="font-extrabold text-slate-800 text-base mb-2 group-hover:text-slate-900">
                            {proc.title}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {proc.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        );



      default:
        return null;
    }
  };

  // SECTION 6: FAQ Accordion Section (Dynamic layout based on theme color and slug)
  const renderFaqSection = () => {
    const faqs = serviceFaqs[serviceSlug] || [];
    if (faqs.length === 0) return null;

    return (
      <section className="relative z-10 py-24 px-6 md:px-12 bg-white border-b border-slate-100 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none overflow-hidden">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="faq-mesh" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#faq-mesh)" />
          </svg>
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className={`px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest ${theme.accentBg} ${theme.accentText} border ${theme.pillBorder}`}>
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Frequently Asked <span className={theme.accentText}>Questions</span>
            </h2>
            <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
              Get answers to common queries regarding our deployment timeline, technology integrations, and service compliance.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`border rounded-2xl transition-all duration-300 ${
                    isOpen 
                      ? "border-slate-300/80 bg-slate-50/50 shadow-sm" 
                      : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center py-4.5 px-6 text-left focus:outline-none group cursor-pointer"
                  >
                    <span className={`text-base font-bold transition-colors ${
                      isOpen ? theme.accentText : "text-slate-800 group-hover:text-slate-900"
                    }`}>
                      {faq.q}
                    </span>
                    <span className={`ml-4 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-185 " + theme.accentText : "text-slate-400 group-hover:text-slate-500"
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-60 border-t border-slate-100" : "max-h-0"
                    }`}
                  >
                    <div className="pt-3 pb-5 px-6 text-sm text-slate-600 leading-relaxed bg-slate-50/30">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-800">
      
      {/* SECTION 1: Service Hero Banner (Dynamic Layout based on slug) */}
      {renderHeroSection()}

      {/* DYNAMIC BODY SECTIONS (Fully customized per service slug with images, compliance tables, and parameters) */}
      {renderBodySections()}

      {/* SECTION 6: FAQ Accordion Section (State-driven interactive accordion layout) */}
      {renderFaqSection()}

      {/* SECTION 3: Technical Tools Marquee (Dark Slate Background - Shared stack but styled) */}
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
                className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-slate-900 border ${theme.pillBorder} text-slate-200 text-sm font-semibold shadow-md`}
              >
                {getTechIcon(tech)}
                <span>{tech}</span>
              </span>
            ))}

            {/* Replicated once for styling buffer */}
            {service.techStack.map((tech, idx) => (
              <span
                key={`dup-${idx}`}
                className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-slate-900 border ${theme.pillBorder} text-slate-200 text-sm font-semibold shadow-md`}
              >
                {getTechIcon(tech)}
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Shared Consultation Briefing CTA with Custom Background Image & Reduced Height */}
      <section className="relative z-10 py-10 sm:py-12 px-6 md:px-12 bg-slate-950 border-b border-slate-900 text-white overflow-hidden">
        {/* Premium Dark Tech Abstract Background Image */}
        <div className="absolute inset-0 z-0 opacity-35 pointer-events-none select-none">
          <Image 
            src={ctaBgImages[serviceSlug] || "/images/cta_bg_abstract.png"} 
            alt="CTA Background Pattern" 
            fill 
            className="object-cover object-center" 
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-950/60" />
        </div>

        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4 sm:gap-5 relative z-10">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${theme.accentBg} flex items-center justify-center ${theme.accentText} border ${theme.pillBorder} shadow-lg`}>
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Request {service.name} Briefing
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto px-4 sm:px-0">
            Schedule a private session with our deployment leads. We will review your current infrastructure telemetry, security logs, or campaign performance reports to outline optimization steps.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-1 sm:mt-2">
            <Link
              href="/contact"
              className="px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-xl bg-orange-brand hover:bg-orange-brand-hover text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-brand/25 transition-all flex items-center gap-2"
            >
              Start Consulting Session <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
