"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditionsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="w-full bg-slate-50 overflow-hidden min-h-screen">
      {/* 1. HERO HEADER (Dark gradient background) */}
      <section className="relative w-full bg-[#06142D] pt-[115px] pb-12 overflow-hidden bg-cover bg-center">
        {/* Ambient radial glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] h-[450px] w-[450px] rounded-full bg-blue-600/5 blur-[110px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.06]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mx-auto mb-4">
              <FileText className="w-5 h-5 animate-pulse" />
            </div>
            <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-3 block">
              Terms of Service
            </span>
            <h1 className="text-3xl sm:text-[44px] lg:text-[48px] font-black tracking-tight text-white leading-tight mb-4 font-poppins">
              Terms & Conditions
            </h1>
            <p className="text-xs text-slate-400 font-mono">
              Last Updated: June 17, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. TERMS DOCUMENT SECTION */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl border border-slate-200 bg-slate-50/50 shadow-xl flex flex-col gap-10 text-left">
            
            <p className="text-sm md:text-base text-slate-700 leading-relaxed font-semibold border-b border-slate-200 pb-6">
              Please read these Terms & Conditions carefully before engaging with DIGINET services or utilising our technical deliverables. By commissioning project roadmaps, you agree to comply with these service guidelines.
            </p>

            <section className="flex flex-col gap-3">
              <h3 className="text-lg font-black text-slate-900 font-poppins">1. Engagement and Scope</h3>
              <p className="text-xs md:text-sm text-slate-655 leading-relaxed font-medium">
                DIGINET provides enterprise-level software engineering, cybersecurity audits, cloud system configurations, and performance marketing services. Individual project deliverables, technical scope parameters, and client milestones will be detailed in separate Service Level Agreements (SLAs) or Statements of Work (SOWs) signed by authorized representatives of both parties.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h3 className="text-lg font-black text-slate-900 font-poppins">2. Service Provision and SLA</h3>
              <p className="text-xs md:text-sm text-slate-655 leading-relaxed font-medium">
                We strive to deliver resilient software architectures and infrastructure. Where explicit SLA contracts are active, our systems support teams target a 99.9% operational uptime threshold for managed database clusters and secure API gateways. Temporary service interruptions scheduled for emergency maintenance or system patching will be communicated with prior notice whenever practicable.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h3 className="text-lg font-black text-slate-900 font-poppins">3. Client Obligations</h3>
              <p className="text-xs md:text-sm text-slate-655 leading-relaxed font-medium">
                To execute custom application builds or security audits successfully, client teams agree to provide necessary cooperation, temporary code access parameters, and clear diagnostic objectives. Client organizations remain responsible for maintaining the confidentiality of secure portal credentials and system keys provided by our engineering desks.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h3 className="text-lg font-black text-slate-900 font-poppins">4. Intellectual Property</h3>
              <p className="text-xs md:text-sm text-slate-655 leading-relaxed font-medium">
                Unless explicitly outlined in a signed SOW, all proprietary frameworks, development templates, and custom code modules built by DIGINET prior to or independently of the client engagement remain the sole property of DIGINET. Upon full project payment, clients receive a perpetual, non-exclusive license to run and manage the final software deliverables built for their organization.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h3 className="text-lg font-black text-slate-900 font-poppins">5. Limitation of Liability</h3>
              <p className="text-xs md:text-sm text-slate-655 leading-relaxed font-medium">
                DIGINET will not be liable for indirect, incidental, special, or consequential damages (including business loss, profit loss, or data corruption) arising out of system outages, third-party network bottlenecks, or configuration changes implemented by client teams without engineering authorization.
              </p>
            </section>

            <section className="flex flex-col gap-3 border-t border-slate-200 pt-8 mt-4">
              <h3 className="text-lg font-black text-slate-900 font-poppins">6. Governing Law</h3>
              <p className="text-xs md:text-sm text-slate-655 leading-relaxed font-medium">
                These terms will be governed by and construed in accordance with the laws of the Republic of Singapore. Any disputes arising out of project engagements or SOW agreements will be referred to and resolved by the exclusive jurisdiction of Singapore courts.
              </p>
            </section>

            <section className="flex flex-col gap-3 border-t border-slate-200 pt-8 mt-4">
              <h3 className="text-lg font-black text-slate-900 font-poppins">7. Legal Inquiries</h3>
              <p className="text-xs md:text-sm text-slate-655 leading-relaxed font-medium">
                For questions concerning these service terms, billing structures, or compliance audits, please coordinate with our corporate desk at:
              </p>
              <div className="flex items-center gap-3 mt-4 text-xs sm:text-sm text-cyan-600 bg-cyan-50 border border-cyan-100 py-3 px-6 rounded-2xl w-fit font-bold">
                <Mail className="w-4.5 h-4.5 text-cyan-500 shrink-0" />
                <a href="mailto:info@diginet.sg" className="hover:text-cyan-700 transition-colors">
                  info@diginet.sg
                </a>
              </div>
            </section>

          </div>
        </div>
      </section>

      {/* 3. CTA BANNER (Professional Office cover) */}
      <section 
        className="py-16 md:py-20 px-6 md:px-12 text-white border-t border-slate-900 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/images/why_choose_us_office_bg.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80 z-0" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-3 block">
            Let&apos;s Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-6 font-poppins">
            Are you ready for a better, <br className="hidden sm:inline"/>
            more productive business?
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            Stop worrying about technology problems. Focus completely on your core business goals. Let us provide the technical reliability and support you deserve.
          </p>
          <Link
            href="/contact"
            className="cursor-pointer px-8 py-3.5 rounded-full font-extrabold text-xs sm:text-sm shadow-md transition-all duration-300 bg-cta-blue text-white hover:bg-hover-blue hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 shadow-cyan-500/10"
          >
            Contact us Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
