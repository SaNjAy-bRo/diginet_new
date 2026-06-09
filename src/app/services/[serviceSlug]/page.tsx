import { notFound } from "next/navigation";
import { Shield, Monitor, AppWindow, Share2, Megaphone, Smartphone } from "lucide-react";
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
  "social-media-management": {
    name: "Social Media Management",
    tagline: "Build B2B/B2C Brand Equity and Deepen Community Engagement",
    icon: Share2,
    description: "Social media for corporate entities is about building thought leadership, community trust, and organic acquisition paths. We design corporate-level campaign assets and manage cross-channel profiles.",
    features: [
      { title: "Brand Identity Design", desc: "Consolidated media kits, tone-of-voice alignment, and high-end graphic assets." },
      { title: "Content Sequencing", desc: "Pre-scheduled thematic sequences across LinkedIn, Twitter, and other corporate touchpoints." },
      { title: "Community Moderation", desc: "Automated alert configurations and professional customer engagement vectors." },
      { title: "Ad Campaign Design", desc: "Targeted B2B campaigns to capture decision-makers and C-suite executives." }
    ],
    techStack: ["Sprout Social", "Figma Design System", "Adobe Creative Suite", "Meta Business Suite", "LinkedIn Ads Manager", "Canva Enterprise", "Trello Boards"],
    workflow: ["Brand Voice Alignment", "Content Calendar Architecture", "Asset Creation", "Engagement Tracking"],
    metrics: [
      { label: "Audience Engagement Rate", value: "+4.8%" },
      { label: "B2B Lead Acquisition", value: "3.2x" },
      { label: "Total Impressions Generated", value: "12M+" }
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
  "application-development": {
    name: "Application Development",
    tagline: "High-Performance Cloud-Native Software & Distributed Mobile Apps",
    icon: AppWindow,
    description: "We engineer custom software, web platforms, and mobile apps built to survive high concurrent loads. We focus on clean REST/GraphQL APIs, zero-latency server states, and database safety.",
    features: [
      { title: "Custom Web Applications", desc: "Scalable corporate portals and SaaS structures using React, Next.js, and TypeScript." },
      { title: "Mobile Engineering", desc: "High-performance native apps for iOS (Swift) and Android (Kotlin) or cross-platform framework arrays." },
      { title: "Database Architecture", desc: "Optimized SQL/NoSQL schemas with high concurrency capability and automated backups." },
      { title: "Cloud Integration", desc: "Automated scaling policies, secure IAM configs, and load balancing on AWS/GCP." }
    ],
    techStack: ["TypeScript / Node.js", "React / Next.js", "PostgreSQL / Redis", "Amazon Web Services (AWS)", "Docker & Kubernetes", "GitHub Actions CI/CD", "GraphQL API Schema"],
    workflow: ["Requirement Specification", "Architecture Mockups", "Agile Coding & Iterations", "CI/CD Pipeline Deployment"],
    metrics: [
      { label: "Database Response Rate", value: "8.4ms" },
      { label: "Build Delivery Time", value: "-40%" },
      { label: "Concurrent User Capability", value: "50K+" }
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
  "website-designing": {
    name: "Website Designing",
    tagline: "Elite UI/UX Design Meeting High-End Engineering Standards",
    icon: Monitor,
    description: "Your corporate website is your brand's digital headquarters. We design bespoke, fast websites that combine interactive micro-animations with excellent readability and accessibility (WCAG).",
    features: [
      { title: "UI/UX Prototyping", desc: "Sleek wireframes and interactive mockups constructed in Figma before a single line of code is written." },
      { title: "Responsive Layouts", desc: "Fluid animations and content grid adjustments across desktop, tablet, and mobile displays." },
      { title: "Speed Engineering", desc: "Optimized core web vitals, compressed assets delivery, and server-side static rendering." },
      { title: "Interactive Mechanics", desc: "Modern micro-animations, glassmorphic accents, and seamless view-transitions." }
    ],
    techStack: ["Figma Design", "Framer Motion", "Tailwind CSS", "Next.js Framework", "Vercel Edge Network", "Lottie Animations", "A11y Compliance Engine"],
    workflow: ["UX Strategy & Wireframing", "UI System Designing", "Front-end Development", "Performance Optimization"],
    metrics: [
      { label: "Google PageSpeed Core Score", value: "99/100" },
      { label: "Bounce Rate Reduce", value: "-25%" },
      { label: "Mobile Conversion Rate", value: "+38%" }
    ]
  }
};

const serviceImages: Record<string, string> = {
  "cybersecurity": "/images/service_cyber.png",
  "website-designing": "/images/service_design.png",
  "mobile-development": "/images/service_mobile.png",
  "application-development": "/images/service_appdev.png",
  "digital-marketing": "/images/service_marketing.png",
  "social-media-management": "/images/service_social.png",
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
  "website-designing": {
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
  "application-development": {
    accentText: "text-purple-400",
    accentBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    gradientHero: "from-purple-950 via-slate-900 to-slate-950",
    themeColor: "purple",
    pillBorder: "border-purple-500/20 hover:border-purple-400/50",
    glowColor: "#a855f7"
  },
  "digital-marketing": {
    accentText: "text-sky-400",
    accentBg: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    gradientHero: "from-sky-950 via-slate-900 to-slate-950",
    themeColor: "sky",
    pillBorder: "border-sky-500/20 hover:border-sky-400/50",
    glowColor: "#0ea5e9"
  },
  "social-media-management": {
    accentText: "text-violet-400",
    accentBg: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    gradientHero: "from-violet-950 via-slate-900 to-slate-950",
    themeColor: "violet",
    pillBorder: "border-violet-500/20 hover:border-violet-400/50",
    glowColor: "#8b5cf6"
  }
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
