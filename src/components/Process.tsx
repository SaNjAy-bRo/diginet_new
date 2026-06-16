"use client";

import React from "react";
import { Search, Code2, Rocket, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface StepItem {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    icon: <Search className="h-6 w-6 text-accent-blue" />,
    title: "Discover",
    description: "We learn your goals, challenges, and opportunities.",
  },
  {
    number: "02",
    icon: <Code2 className="h-6 w-6 text-accent-blue" />,
    title: "Plan & Build",
    description: "We design and develop custom solutions that fit.",
  },
  {
    number: "03",
    icon: <Rocket className="h-6 w-6 text-accent-blue" />,
    title: "Launch",
    description: "We deploy, test, and ensure everything runs smoothly.",
  },
  {
    number: "04",
    icon: <TrendingUp className="h-6 w-6 text-accent-blue" />,
    title: "Optimize & Grow",
    description: "We monitor, scale, and drive continuous improvement.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative w-full pt-16 md:pt-24 pb-8 md:pb-10 bg-[#FCFDFE] overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-3">
            Our Process
          </p>
          <h2 className="text-3xl md:text-[40px] font-black tracking-tight text-slate-900 leading-tight font-poppins">
            A proven path to your success
          </h2>
        </div>

        {/* Timeline Grid (Desktop: Horizontal, Mobile: Vertical) */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex flex-col items-center text-center relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Step Circle */}
                <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white border border-slate-200/80 text-accent-blue shadow-md shadow-slate-100/50 transition-all duration-300 group-hover:scale-105">
                  {step.icon}
                </div>

                {/* Step Number */}
                <span className="block text-accent-blue text-sm font-bold tracking-wider mb-2 font-poppins">
                  {step.number}
                </span>

                {/* Step Title */}
                <h3 className="text-lg font-extrabold text-slate-900 mb-2 font-poppins">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-slate-500 leading-relaxed max-w-[240px] mx-auto">
                  {step.description}
                </p>

                {/* Desktop connecting arrow (placed absolutely between columns) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[calc(50%+48px)] top-10 -translate-y-1/2 w-[calc(100%-96px)] z-0 pointer-events-none">
                    <svg className="w-full h-4 text-slate-300" fill="none" viewBox="0 0 100 16" preserveAspectRatio="none">
                      <path
                        d="M0 8 H 92 M 86 3 L 94 8 L 86 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

                {/* Mobile connecting line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden h-8 w-[2px] border-l border-dashed border-slate-300 my-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
