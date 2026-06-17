"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CaseItem {
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const cases: CaseItem[] = [
  {
    tag: "IT INFRASTRUCTURE",
    title: "Secure Cloud Migration Improves Uptime by 99.99%",
    description: "We helped a growing enterprise migrate to the cloud with zero downtime and enhanced security.",
    imageSrc: "/images/case_cloud.png",
    href: "#contact",
  },
  {
    tag: "SOFTWARE DEVELOPMENT",
    title: "Custom Web Platform Boosts Efficiency by 160%",
    description: "A tailored web application that automated workflows and improved team productivity.",
    imageSrc: "/images/case_platform.png",
    href: "#contact",
  },
  {
    tag: "DIGITAL MARKETING",
    title: "SEO & Paid Campaigns Increase Leads by 210%",
    description: "Data-driven strategies that scaled visibility, generated quality leads, and maximized ROI.",
    imageSrc: "/images/case_marketing.png",
    href: "#contact",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative w-full pt-8 md:pt-10 pb-8 md:pb-10 bg-white overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div className="max-w-xl text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-3">
              Case Studies
            </p>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 leading-tight font-poppins">
              Real results. Real impact.
            </h2>
          </div>
          <div className="mt-4 sm:mt-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-xs md:text-sm font-bold text-accent-blue hover:text-hover-blue transition-colors group"
            >
              View all case studies
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c, index) => (
            <motion.div
              key={c.title}
              className="group bg-white rounded-3xl border border-slate-200/60 p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-row items-center justify-between gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Left Column (Text) */}
              <div className="flex-1 flex flex-col text-left">
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-accent-blue mb-1.5">
                  {c.tag}
                </span>
                
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug font-poppins mb-1.5 group-hover:text-accent-blue transition-colors">
                  {c.title}
                </h3>
                
                <p className="hidden sm:block text-[10px] sm:text-xs text-slate-500 leading-relaxed mb-3">
                  {c.description}
                </p>

                <a
                  href={c.href}
                  className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-accent-blue hover:text-hover-blue transition-colors group/link"
                >
                  View case study
                  <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>

              {/* Right Column (Image Thumbnail) */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                <Image
                  src={c.imageSrc}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
