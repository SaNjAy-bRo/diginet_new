"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function Privacy() {
  return (
    <div className="relative min-h-screen pt-4">
      {/* Background patterns */}
      <div className="absolute inset-0 tech-grid opacity-[0.08] pointer-events-none z-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 pt-10 md:pt-14 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <Shield className="w-5 h-5" />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-100">Privacy Policy</h1>
          <p className="text-xs text-slate-500 font-mono">Last Updated: June 8, 2026</p>
          
          <div className="flex flex-col gap-8 text-slate-400 text-sm leading-relaxed mt-6">
            <section>
              <h3 className="text-lg font-bold text-slate-200 mb-3">1. Scope of Compliance</h3>
              <p>
                DIGINET operates under strict compliance regimes including GDPR, HIPAA, and CCPA guidelines. This privacy statement details our active logging procedures, data minimization, and endpoint telemetry protocols.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-200 mb-3">2. Data Logging and Telemetry</h3>
              <p>
                When utilizing our secure customer portals or submitting brief forms, we compile minimal logs necessary to execute operational tasks:
              </p>
              <ul className="list-disc pl-6 mt-3 flex flex-col gap-2">
                <li>Corporate identity credentials (organization name, authorized contact email).</li>
                <li>System-level metrics for performance tuning and diagnostic evaluations.</li>
                <li>Temporary cookies configuration strictly utilized for user state validation.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-200 mb-3">3. Security Defenses</h3>
              <p>
                We do not sell, rent, or lease corporate data aggregates to third parties. All stored database files are protected under AES-256 encryption arrays, and active transit paths utilize TLS 1.3 tunnels.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-200 mb-3">4. System Contacts</h3>
              <p>
                For compliance audits or inquiries concerning information purging, coordinate with our Data Protection Officer at:
                <br />
                <span className="text-primary mt-2 block font-mono">compliance@diginet.com</span>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
