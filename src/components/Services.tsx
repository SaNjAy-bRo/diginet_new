"use client";

import React from "react";
import { Code, Cloud, Megaphone, Check } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  colorClass: string;
  hoverGlow: string;
}

const services: ServiceItem[] = [
  {
    icon: <Code className="h-6 w-6 text-white" />,
    title: "Software Development",
    description: "Custom web and mobile applications built for performance, scalability, and growth.",
    features: [
      "Web & Mobile Development",
      "Custom Applications",
      "API & System Integrations",
      "Product Engineering"
    ],
    colorClass: "bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-lg shadow-blue-500/20",
    hoverGlow: "group-hover:shadow-blue-500/5 hover:border-blue-200"
  },
  {
    icon: <Cloud className="h-6 w-6 text-white" />,
    title: "IT Solutions",
    description: "Secure, reliable, and future-ready IT solutions that keep your business running at its best.",
    features: [
      "Cloud Infrastructure",
      "Cybersecurity",
      "IT Support & Helpdesk",
      "Managed Services"
    ],
    colorClass: "bg-gradient-to-tr from-sky-500 to-blue-500 shadow-lg shadow-sky-500/20",
    hoverGlow: "group-hover:shadow-sky-500/5 hover:border-sky-200"
  },
  {
    icon: <Megaphone className="h-6 w-6 text-white" />,
    title: "Digital Marketing",
    description: "Data-driven strategies that build your brand, generate leads, and drive real results.",
    features: [
      "SEO & Performance Marketing",
      "Social Media Marketing",
      "Content & Creative",
      "Analytics & Reporting"
    ],
    colorClass: "bg-gradient-to-tr from-orange-500 to-red-500 shadow-lg shadow-orange-500/20",
    hoverGlow: "group-hover:shadow-orange-500/5 hover:border-orange-200"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full pt-20 pb-16 md:pt-[100px] md:pb-[100px] bg-[#F8FAFC] overflow-hidden">
      {/* Decorative background visual elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] h-[350px] w-[350px] rounded-full bg-sky-200/20 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] h-[350px] w-[350px] rounded-full bg-blue-200/20 blur-[100px]" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-blue mb-3">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 leading-tight mb-4 font-poppins">
            End-to-end solutions that drive real results
          </h2>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed">
            We combine technology, infrastructure, and marketing expertise to build, optimize, and scale your business with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`group relative flex flex-col rounded-2xl md:rounded-[20px] border border-slate-200/80 bg-white p-8 md:p-9 shadow-lg shadow-slate-100/50 hover:scale-[1.01] hover:-translate-y-1.5 transition-all duration-300 ${service.hoverGlow}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                {/* Icon and Title Row */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`inline-flex items-center justify-center p-3 rounded-xl shrink-0 ${service.colorClass}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 font-poppins">
                    {service.title}
                  </h3>
                </div>

                {/* Card Description */}
                <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullet List */}
                <div className="flex flex-col gap-3.5">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full border border-sky-100 bg-sky-50/70 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-accent-blue stroke-[3px]" />
                      </div>
                      <span className="text-sm md:text-base font-medium text-slate-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
