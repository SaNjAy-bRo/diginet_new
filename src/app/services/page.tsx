"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Monitor, AppWindow, Share2, Megaphone, CheckCircle2, ArrowRight, Smartphone } from "lucide-react";

const services = [
  {
    name: "Digital Marketing",
    slug: "digital-marketing",
    icon: Megaphone,
    desc: "Accelerate your corporate revenue pipelines using data-backed strategies, search engine dominance, and transparent performance intelligence.",
    benefits: [
      "Advanced Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising Campaigns",
      "Lead Generation & Funnel Engineering",
      "Real-time ROI Reporting Dashboards",
    ],
  },
  {
    name: "Social Media Management",
    slug: "social-media-management",
    icon: Share2,
    desc: "Deepen customer engagement and build B2C/B2B brand equity through organic community building and targeted paid social acquisitions.",
    benefits: [
      "Cross-channel Brand Strategy",
      "Creative Content & Video Production",
      "Influencer Outreach & Integration",
      "Paid Acquisition Analytics",
    ],
  },
  {
    name: "Mobile Development",
    slug: "mobile-development",
    icon: Smartphone,
    desc: "Design and engineer custom mobile applications for iOS and Android platforms with advanced system integrations and smooth offline operations.",
    benefits: [
      "Native iOS (Swift) & Android (Kotlin) Dev",
      "Cross-Platform Hybrid Frameworks (React Native / Flutter)",
      "Offline-first Synchronization & Local Cache",
      "App Store & Google Play Publishing Pipelines",
    ],
  },
  {
    name: "Application Development",
    slug: "application-development",
    icon: AppWindow,
    desc: "Architect custom cloud-native software and cross-platform mobile apps structured for speed, API integrity, and extreme scalability.",
    benefits: [
      "Custom Web & Desktop Portals",
      "iOS and Android App Engineering",
      "Robust REST/GraphQL API Logic",
      "AWS & Google Cloud Integrations",
    ],
  },
  {
    name: "Website Designing",
    slug: "website-designing",
    icon: Monitor,
    desc: "Craft custom web architectures combining premium animations, clean typography, responsiveness, and conversion layout optimization.",
    benefits: [
      "Custom Wireframes & UI Prototypes",
      "Fast Core Web Vitals Optimization",
      "Immersive Micro-animations",
      "SEO-ready Structural Layouts",
    ],
  },
  {
    name: "Cybersecurity",
    slug: "cybersecurity",
    icon: Shield,
    desc: "Impenetrable zero-trust corporate protection, security audits, vulnerability monitoring, and custom policy configurations.",
    benefits: [
      "Zero-Trust Access Management",
      "Vulnerability Pen-Testing & Auditing",
      "Continuous Monitoring Operations",
      "Data Compliance Alignment (HIPAA/GDPR)",
    ],
  },
];

export default function Services() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Header Section (Light) */}
      <section className="relative z-10 py-20 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Corporate Capabilities</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Core Service Suite
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            We provide deep technological expertise and targeted digital marketing services. Explore our corporate capabilities below.
          </p>
        </motion.div>
      </section>

      {/* Services List Section (Alternating Light/Dark Sections) */}
      <section className="relative z-10 border-t border-slate-200">
        <div className="flex flex-col">
          {services.map((svc, idx) => {
            const IconComponent = svc.icon;
            const isEven = idx % 2 === 0;
            const bgClass = isEven ? "bg-white text-slate-900 py-24" : "bg-slate-900 text-slate-100 py-24 border-y border-slate-800";
            const descColor = isEven ? "text-slate-600" : "text-slate-300";
            const benefitColor = isEven ? "text-slate-700" : "text-slate-300";
            const cardBg = isEven ? "bg-slate-50 border-slate-200" : "bg-slate-800 border-slate-700";
            const ctaBtn = isEven 
              ? "bg-white border-slate-200 text-slate-700 hover:border-primary/50 hover:bg-slate-50"
              : "bg-slate-800 border-slate-700 text-white hover:border-sky-400/50 hover:bg-slate-750";

            return (
              <div key={svc.slug} className={bgClass}>
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Description Column */}
                    <div className={`lg:col-span-7 flex flex-col gap-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-primary shadow-sm ${
                        isEven ? "bg-slate-50 border border-slate-200" : "bg-slate-800 border border-slate-700"
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h2 className="text-3xl font-extrabold">{svc.name}</h2>
                      <p className={`${descColor} leading-relaxed`}>{svc.desc}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                        {svc.benefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex gap-2 items-center">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span className={`${benefitColor} text-sm font-semibold`}>{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4">
                        <Link
                          href={`/services/${svc.slug}`}
                          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border font-bold transition-all shadow-sm ${ctaBtn}`}
                        >
                          Detailed Capabilities
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Decorative Visual Column */}
                    <div className={`lg:col-span-5 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}>
                      <div className={`aspect-[4/3] rounded-2xl border relative overflow-hidden flex items-center justify-center p-8 group shadow-md ${cardBg}`}>
                        <div className={`w-24 h-24 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isEven 
                            ? "bg-white border-slate-200 text-slate-400 group-hover:text-primary group-hover:border-primary/30"
                            : "bg-slate-900 border-slate-700 text-slate-500 group-hover:text-sky-400 group-hover:border-sky-400/30"
                        } group-hover:scale-110`}>
                          <IconComponent className="w-10 h-10" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
