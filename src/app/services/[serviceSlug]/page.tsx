import { notFound } from "next/navigation";
import { Shield, Monitor, AppWindow, Megaphone, Smartphone } from "lucide-react";
import React from "react";
import ServiceDetailClient from "./ServiceDetailClient";

// Static data structure for service details
const serviceDetails: Record<string, {
  name: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  features: { title: string; desc: string }[];
  techStack: string[];
  workflow: string[];
  metrics: { label: string; value: string }[];
}> = {
  "digital-marketing": {
    name: "Digital Marketing",
    tagline: "Data-Driven Marketing Engineered for Corporate Expansion",
    icon: Megaphone,
    description: "Our digital marketing suite moves away from generic reach metrics. We focus on search engine dominance, high-intent lead conversion, and real-time revenue pipeline integration.",
    features: [
      { title: "Enterprise SEO", desc: "Rigorous technical site audit, structured semantic markup, and high-impact industry backlinks." },
      { title: "Precision PPC", desc: "Custom acquisition funnels utilizing targeted search networks and localized demographics." },
      { title: "Conversion Engineering", desc: "A/B testing, heatmaps analysis, and site layout modifications to maximize user signup rates." },
      { title: "Analytics Integration", desc: "Custom telemetry dashboard connecting digital actions to your enterprise CRM systems." }
    ],
    techStack: ["Google Analytics 4", "Semrush Enterprise", "HubSpot CRM", "Hotjar", "Google Ads Network", "ActiveCampaign", "Zapier Automation"],
    workflow: ["Discovery & Audience Audit", "Pipeline Design & Budgeting", "Campaign Deployment", "Telemetry & Optimization"],
    metrics: [
      { label: "Average ROI Increase", value: "+140%" },
      { label: "Cost Per Acquisition Reduce", value: "-30%" },
      { label: "Active Lead Pipelines", value: "850+" }
    ]
  },

  "mobile-development": {
    name: "Mobile Development",
    tagline: "Premium Native iOS & Android Apps & High-Fidelity Cross-Platform Solutions",
    icon: Smartphone,
    description: "We design and build top-tier mobile apps that integrate seamlessly with your backend architecture. From swift native coding to cost-effective cross-platform solutions, we deliver responsive, highly performant apps.",
    features: [
      { title: "Native Engineering", desc: "Custom Swift and Kotlin applications optimized for OS performance and platform integration." },
      { title: "Cross-Platform Scaling", desc: "Utilize React Native and Flutter to build single-codebase products without compromising on design." },
      { title: "Offline-First Sync", desc: "Ensure app functionality remains uninterrupted with local-first databases and queued sync systems." },
      { title: "App Store Distribution", desc: "Complete handling of certificates, provisioning profiles, store listing optimization, and reviews." }
    ],
    techStack: ["Swift / iOS SDK", "Kotlin / Android SDK", "React Native", "Flutter", "SQLite / Realm", "Firebase Suite", "App Store Connect", "Play Console"],
    workflow: ["UI/UX Mobile Design", "Core Native Development", "Offline Sync Integration", "Store Publishing & Launch"],
    metrics: [
      { label: "App Load Time Reduction", value: "-45%" },
      { label: "Crash-Free Sessions Ratio", value: "99.9%" },
      { label: "Active Store Downloads", value: "2.4M+" }
    ]
  },
  "cybersecurity": {
    name: "Cybersecurity Solutions",
    tagline: "Zero-Trust Infrastructure Protection & Vulnerability Isolation",
    icon: Shield,
    description: "Protecting your corporate digital assets requires continuous defense. We perform extensive penetration testing, build secure access arrays, and configure threat isolation firewalls.",
    features: [
      { title: "Zero-Trust Network Access", desc: "Implement micro-segmentation, role-based privileges, and hardware key verifications." },
      { title: "Vulnerability Assessments", desc: "White-box and black-box penetration testing to locate and patch architecture leaks." },
      { title: "Active Firewall Arrays", desc: "Intrusion prevention protocols, DNS protection systems, and automated mitigation scripts." },
      { title: "Corporate Compliance", desc: "Standard alignment for HIPAA, GDPR, PCI-DSS, and SOC2 reporting structures." }
    ],
    techStack: ["WireGuard VPN", "Wazuh SIEM", "Cloudflare Zero Trust", "Kali Linux Suite", "OWASP Security Framework", "Nessus Threat Scanner", "Wireshark Network Audit"],
    workflow: ["Network Topology Auditing", "Threat Analysis & Simulation", "Defense Array Implementation", "24/7/365 Monitor Lock"],
    metrics: [
      { label: "Threat Blocking Ratio", value: "99.98%" },
      { label: "Active Firewall Mitigations", value: "140K+" },
      { label: "Data Leak Ratio", value: "0.0%" }
    ]
  },
  "web-development": {
    name: "Web Development",
    tagline: "Elite Web Architectures & Custom Full-Stack Solutions",
    icon: Monitor,
    description: "We engineer custom web platforms, scalable SaaS architectures, and high-performance frontends. We focus on clean code, optimized Core Web Vitals, headless CMS, and secure APIs.",
    features: [
      { title: "Full-Stack Development", desc: "Robust and scalable web platforms built with React, Next.js, and modern backend frameworks." },
      { title: "Headless CMS Integration", desc: "Flexible content schemas using Sanity, Strapi, or Contentful to empower marketing teams." },
      { title: "Speed & Performance", desc: "Optimizing Core Web Vitals, edge CDN caching, and server-side rendering for instant loads." },
      { title: "API & System Integration", desc: "Secure REST/GraphQL API connections syncing web actions to your database and CRM." }
    ],
    techStack: ["Next.js Framework", "React / TypeScript", "Tailwind CSS", "Node.js / Express", "Headless CMS (Sanity/Strapi)", "Vercel Edge Network", "PostgreSQL / Prisma"],
    workflow: ["UX Strategy & Wireframing", "System & API Architecture", "Frontend & Full-Stack Coding", "SEO & Launch Optimization"],
    metrics: [
      { label: "Google PageSpeed Score", value: "99/100" },
      { label: "Bounce Rate Reduction", value: "-30%" },
      { label: "Average Load Time", value: "0.8s" }
    ]
  }
};

const serviceImages: Record<string, string> = {
  "cybersecurity": "/images/service_cyber.png",
  "web-development": "/images/service_design.png",
  "mobile-development": "/images/service_mobile_mockup.png",
  "digital-marketing": "/images/service_marketing.png",
};

// Vibe mapping according to service slug
const serviceThemes: Record<string, {
  accentText: string;
  accentBg: string;
  gradientHero: string;
  themeColor: string;
  pillBorder: string;
  glowColor: string;
}> = {
  "cybersecurity": {
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    gradientHero: "from-emerald-950 via-slate-900 to-slate-950",
    themeColor: "emerald",
    pillBorder: "border-emerald-500/20 hover:border-emerald-400/50",
    glowColor: "#10b981"
  },
  "web-development": {
    accentText: "text-cyan-400",
    accentBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    gradientHero: "from-cyan-950 via-slate-900 to-slate-950",
    themeColor: "cyan",
    pillBorder: "border-cyan-500/20 hover:border-cyan-400/50",
    glowColor: "#06b6d4"
  },
  "mobile-development": {
    accentText: "text-indigo-400",
    accentBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    gradientHero: "from-indigo-950 via-slate-900 to-slate-950",
    themeColor: "indigo",
    pillBorder: "border-indigo-500/20 hover:border-indigo-400/50",
    glowColor: "#6366f1"
  },
  "digital-marketing": {
    accentText: "text-sky-400",
    accentBg: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    gradientHero: "from-sky-950 via-slate-900 to-slate-950",
    themeColor: "sky",
    pillBorder: "border-sky-500/20 hover:border-sky-400/50",
    glowColor: "#0ea5e9"
  },
};

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const resolvedParams = await params;
  const service = serviceDetails[resolvedParams.serviceSlug];

  if (!service) {
    notFound();
  }

  const theme = serviceThemes[resolvedParams.serviceSlug] || serviceThemes["cybersecurity"];
  const serviceImg = serviceImages[resolvedParams.serviceSlug] || "/images/service_cyber.png";

  const { icon, ...serializableService } = service;

  return (
    <ServiceDetailClient
      serviceSlug={resolvedParams.serviceSlug}
      service={serializableService}
      theme={theme}
      serviceImg={serviceImg}
    />
  );
}

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    serviceSlug: slug,
  }));
}
