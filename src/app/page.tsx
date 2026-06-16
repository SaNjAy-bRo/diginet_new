"use client";

import React from "react";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import IntegratedSolutions from "@/components/IntegratedSolutions";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#F8FAFC]">
      {/* Hero Section */}
      <Hero />

      {/* Client Logos Infinitely Scrolling Marquee */}
      <ClientLogos />

      {/* Services Grid */}
      <Services />

      {/* Integrated Solutions Diagram & Pillars */}
      <IntegratedSolutions />

      {/* Our Process Step-by-Step Path */}
      <Process />

      {/* Why Choose Us Brand Strength Columns */}
      <WhyChooseUs />

      {/* Customer Testimonials Grid / Swipe Slider */}
      <Testimonials />

      {/* Case Studies Visual Grid */}
      <CaseStudies />

      {/* CTA Gradient Call-to-action Banner */}
      <CtaBanner />
    </div>
  );
}
