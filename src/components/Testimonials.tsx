"use client";

import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialItem {
  id: number;
  text: string;
  name: string;
  role: string;
  avatarUrl: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 0,
    text: "Diginet Solutions transformed our digital presence and streamlined our systems. Their team is responsive, professional, and truly invested in our success.",
    name: "Sarah Johnson",
    role: "CEO, BrightLine Systems",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 1,
    text: "Their IT support is exceptional. We've seen improved uptime, stronger security, and a team that always has our back.",
    name: "Michael Patel",
    role: "CTO, Nexora Technologies",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 2,
    text: "The marketing campaigns delivered measurable results—more traffic, better leads, and higher conversions. Highly recommended!",
    name: "Emily Carter",
    role: "Marketing Director, Apex Systems",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold && activeIndex < testimonials.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (info.offset.x > swipeThreshold && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section id="testimonials" className="relative w-full pt-16 md:pt-24 pb-8 md:pb-10 bg-white overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Header */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 flex flex-col items-start text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-3">
              What Our Clients Say
            </p>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 leading-tight font-poppins">
              Trusted by businesses that scale
            </h2>
          </div>

          {/* Right Column: Cards & Slider */}
          <div className="lg:col-span-9 flex flex-col gap-8">
            
            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-3 gap-6 items-center">
              {testimonials.map((t) => {
                const isActive = activeIndex === t.id;
                return (
                  <div
                    key={t.id}
                    onClick={() => setActiveIndex(t.id)}
                    className={`bg-white border p-6 rounded-2xl flex flex-col justify-between shadow-sm transition-all duration-500 relative min-h-[265px] cursor-pointer ${
                      isActive
                        ? "opacity-100 scale-100 border-accent-blue/40 shadow-lg shadow-accent-blue/5 ring-1 ring-accent-blue/5"
                        : "opacity-40 scale-[0.97] border-slate-200/60 hover:opacity-70"
                    }`}
                  >
                    <div>
                      {/* Double Quote Symbol */}
                      <span className={`text-3xl font-serif font-black leading-none block mb-1 transition-colors duration-500 ${
                        isActive ? "text-accent-blue" : "text-slate-300"
                      }`}>
                        “
                      </span>
                      {/* Testimonial Text */}
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 font-normal">
                        {t.text}
                      </p>
                    </div>

                    <div>
                      {/* Stars below text */}
                      <div className="flex gap-1 text-amber-400 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-current stroke-current" />
                        ))}
                      </div>

                      {/* User profile */}
                      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                        <img
                          src={t.avatarUrl}
                          alt={t.name}
                          className="h-10 w-10 rounded-full object-cover shrink-0 bg-slate-100"
                        />
                        <div>
                          <h4 className="font-bold text-slate-950 text-xs md:text-sm font-poppins leading-tight">
                            {t.name}
                          </h4>
                          <p className="text-[10px] md:text-xs text-slate-400 leading-normal">
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative flex flex-col items-center">
              <div className="w-full overflow-hidden py-2">
                <motion.div
                  className="flex cursor-grab active:cursor-grabbing"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                  animate={{ x: `-${activeIndex * (100 / testimonials.length)}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{ width: `${testimonials.length * 100}%` }}
                >
                  {testimonials.map((t) => (
                    <div key={t.id} className="px-3 shrink-0" style={{ width: `${100 / testimonials.length}%` }}>
                      <div className="bg-white border border-slate-200/60 p-7 rounded-2xl flex flex-col justify-between shadow-sm min-h-[260px] relative">
                        <div>
                          <span className="text-3xl font-serif text-accent-blue font-black leading-none block mb-1">
                            “
                          </span>
                          <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            {t.text}
                          </p>
                        </div>

                        <div>
                          <div className="flex gap-1 text-amber-400 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3.5 w-3.5 fill-current stroke-current" />
                            ))}
                          </div>

                          <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                            <img
                              src={t.avatarUrl}
                              alt={t.name}
                              className="h-10 w-10 rounded-full object-cover shrink-0 bg-slate-100"
                            />
                            <div>
                              <h4 className="font-bold text-slate-950 text-sm font-poppins leading-tight">
                                {t.name}
                              </h4>
                              <p className="text-[10px] text-slate-400">
                                {t.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Slider Dots (visible on all screen sizes to match slider mockup UI) */}
            <div className="flex gap-2 justify-center lg:justify-start lg:pl-2">
              {testimonials.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIndex(t.id)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === t.id ? "w-5 bg-accent-blue" : "w-2 bg-slate-200"
                  }`}
                  aria-label={`Go to slide ${t.id + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
