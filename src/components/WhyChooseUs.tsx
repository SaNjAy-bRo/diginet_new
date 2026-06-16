"use client";

import React from "react";
import Image from "next/image";
import { Users2, Monitor, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: BenefitItem[] = [
  {
    icon: <Users2 className="h-5 w-5 text-slate-700" />,
    title: "Experienced Team",
    description: "10+ years delivering impactful solutions.",
  },
  {
    icon: <Monitor className="h-5 w-5 text-slate-700" />,
    title: "Client-First Approach",
    description: "Your success is at the center of everything we do.",
  },
  {
    icon: <Shield className="h-5 w-5 text-slate-700" />,
    title: "Transparent & Reliable",
    description: "Clear communication, honest results.",
  },
  {
    icon: <Zap className="h-5 w-5 text-slate-700" />,
    title: "Future-Ready",
    description: "We use modern tech to future-proof your business.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative w-full py-8 md:py-10 bg-[#F8FAFC] overflow-hidden">
      {/* Background design accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] h-[300px] w-[300px] rounded-full bg-orange-200/5 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-10%] h-[300px] w-[300px] rounded-full bg-accent-blue/5 blur-[100px]" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Unified Card Container */}
        <div className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-sm shadow-slate-100/30 overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Side: Illustration Image */}
            <div className="lg:col-span-5 relative h-[240px] sm:h-[300px] lg:h-[360px] w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
              <Image
                src="/images/why_choose_us.png"
                alt="Why Choose Diginet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>

            {/* Right Side: Brand Statement and 2x2 Benefits Grid */}
            <div className="lg:col-span-7 flex flex-col gap-8 text-left">
              
              {/* Brand Statement */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-2.5">
                  Why Choose Diginet
                </p>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 leading-tight mb-4 font-poppins">
                  Your growth is our mission
                </h2>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                  We go beyond delivering solutions—we become your long-term technology and marketing partner.
                </p>
              </div>

              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="flex flex-col items-start"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Icon Circle */}
                    <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center mb-3 shrink-0 transition-colors duration-300 hover:border-accent-blue/50">
                      {benefit.icon}
                    </div>
                    {/* Title */}
                    <h3 className="text-sm font-bold text-slate-900 mb-1 font-poppins">
                      {benefit.title}
                    </h3>
                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-normal">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
