"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useBooking } from "@/context/BookingContext";

export default function CtaBanner() {
  const { openBooking } = useBooking();
  return (
    <section id="cta" className="relative w-full pt-6 md:pt-8 pb-12 md:pb-16 bg-white overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Banner Box */}
        <motion.div
          className="relative rounded-3xl bg-gradient-to-r from-accent-blue via-cta-blue to-indigo-700 p-8 md:p-12 overflow-hidden shadow-xl shadow-accent-blue/10"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Image and Overlays */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <Image
              src="/images/cta_bg.png"
              alt="Technology Network Background"
              fill
              className="object-cover opacity-20 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/40 via-transparent to-black/20" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text column */}
            <div className="max-w-2xl text-center lg:text-left flex flex-col">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white mb-4 font-poppins">
                Ready to build, scale, and grow together?
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-sky-100 leading-relaxed font-medium">
                Let's create technology and marketing solutions that drive real growth for your business.
              </p>
            </div>

            {/* Button column */}
            <div className="w-full lg:w-auto shrink-0 flex justify-center">
              <button
                onClick={openBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-accent-blue bg-white hover:bg-sky-50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/10 cursor-pointer"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
