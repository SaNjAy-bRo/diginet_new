import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Shield, Monitor, AppWindow, Share2, Megaphone, CheckCircle, ArrowRight, Layers, Compass, Check, Smartphone } from "lucide-react";
import React from "react";

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
}> = {
  "cybersecurity": {
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    gradientHero: "from-emerald-950 via-slate-900 to-slate-950",
    themeColor: "emerald",
    pillBorder: "border-emerald-500/20 hover:border-emerald-400/50"
  },
  "website-designing": {
    accentText: "text-cyan-400",
    accentBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    gradientHero: "from-cyan-950 via-slate-900 to-slate-950",
    themeColor: "cyan",
    pillBorder: "border-cyan-500/20 hover:border-cyan-400/50"
  },
  "mobile-development": {
    accentText: "text-indigo-400",
    accentBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    gradientHero: "from-indigo-950 via-slate-900 to-slate-950",
    themeColor: "indigo",
    pillBorder: "border-indigo-500/20 hover:border-indigo-400/50"
  },
  "application-development": {
    accentText: "text-purple-400",
    accentBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    gradientHero: "from-purple-950 via-slate-900 to-slate-950",
    themeColor: "purple",
    pillBorder: "border-purple-500/20 hover:border-purple-400/50"
  },
  "digital-marketing": {
    accentText: "text-sky-400",
    accentBg: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    gradientHero: "from-sky-950 via-slate-900 to-slate-950",
    themeColor: "sky",
    pillBorder: "border-sky-500/20 hover:border-sky-400/50"
  },
  "social-media-management": {
    accentText: "text-violet-400",
    accentBg: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    gradientHero: "from-violet-950 via-slate-900 to-slate-950",
    themeColor: "violet",
    pillBorder: "border-violet-500/20 hover:border-violet-400/50"
  }
};

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    serviceSlug: slug,
  }));
}

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
  const IconComponent = service.icon;

  return (
    <div className="relative min-h-screen bg-white text-slate-800">
      
      {/* SECTION 1: Service Hero Banner (Dark Service Vibe Gradient) */}
      <section className={`relative z-10 pt-32 pb-24 px-6 md:px-12 bg-gradient-to-b ${theme.gradientHero} text-white border-b border-slate-800`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <Link
              href="/services"
              className="text-xs font-bold text-sky-400 hover:text-sky-300 tracking-widest uppercase flex items-center gap-1 self-start transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180" /> Back to Services
            </Link>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${theme.accentBg} mt-2 shadow-lg`}>
              <IconComponent className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none text-white">
              {service.name}
            </h1>
            <p className={`text-xl font-bold tracking-wide ${theme.accentText}`}>
              {service.tagline}
            </p>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
              {service.description}
            </p>
          </div>
          
          {/* Key Metrics Columns inside Hero Section */}
          <div className="lg:col-span-4 grid gap-4">
            {service.metrics.map((metric, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm shadow-md flex justify-between items-center">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">{metric.label}</span>
                <span className={`text-xl font-black ${theme.accentText}`}>{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Key Capabilities Grid & Custom Service Image */}
      <section className="relative z-10 py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Feature List Column */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-12">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-primary bg-sky-50`}>
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Technical Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.features.map((feature, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-slate-200 bg-slate-50 flex gap-4 shadow-sm hover:border-primary/40 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-primary shrink-0 mt-1">
                    <Check className="w-4 h-4 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-xs text-slate-650 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Service Custom Photographic Image Column */}
          <div className="lg:col-span-4">
            <div className="aspect-[4/5] rounded-2xl border border-slate-200 relative overflow-hidden shadow-xl bg-slate-50 p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={serviceImg}
                  alt={service.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
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
                    <p className="text-xs text-slate-500">Corporate pipeline phase {idx + 1}</p>
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
                  <div className="flex gap-2 items-center text-xs text-slate-500">
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
