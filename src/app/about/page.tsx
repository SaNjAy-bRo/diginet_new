"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Award, CheckCircle } from "lucide-react";

const values = [
  {
    title: "Uncompromising Integrity",
    desc: "We adhere to the highest standards of code quality, absolute privacy security, and transparency.",
    icon: Shield,
  },
  {
    title: "Forward Innovation",
    desc: "We continuously scan emerging fields (AI, Zero-Trust security, edge networks) to deploy early solutions.",
    icon: Eye,
  },
  {
    title: "Client Centricity",
    desc: "Your key systems uptime and growth funnels are our ultimate metrics. We win when you scale.",
    icon: Award,
  },
];

const team = [
  { name: "Julian Sterling", role: "Chief Executive Officer & Founder", bio: "Former Infrastructure Director at Cloudflare. 15+ years scaling global IT networks." },
  { name: "Devon Carter", role: "VP of Enterprise Cybersecurity", bio: "Ex-NSA security expert and principal author of several modern corporate firewall frameworks." },
  { name: "Clara Vance", role: "Head of Software Engineering", bio: "Specializes in high-performance application architectures and distributed web engines." },
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Header Banner (Light) */}
      <section className="relative z-10 py-20 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Corporate Profile</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Architecting the Future of Enterprise IT
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            DIGINET is a premier IT consulting, software engineering, and digital growth agency. Established in 2015, we bridge the gap between technical complexity and business performance.
          </p>
        </motion.div>
      </section>

      {/* History and Mission (Dark Slate Background for Contrast) */}
      <section className="relative z-10 py-16 px-6 md:px-12 border-t border-slate-800 bg-slate-900 text-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl font-extrabold text-white">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed">
              We empower modern enterprises to operate at maximum efficiency while maintaining impregnable security defenses. We do this by custom-designing web platforms, executing data-led growth marketing, and maintaining end-to-end security protocols.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm font-semibold">Deploying Zero-Trust protocols across all active endpoints</span>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm font-semibold">Automating growth loops and data tracking arrays</span>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm font-semibold">Maintaining low network latencies and scalable cloud configurations</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border border-slate-700 bg-slate-800 relative"
          >
            <h3 className="text-xl font-bold text-white mb-4">A Note From Our Founders</h3>
            <p className="text-slate-300 italic text-sm leading-relaxed mb-6">
              &ldquo;We founded DIGINET because we realized that traditional IT service agencies treat software design and cybersecurity as separate items. We united software engineering, infrastructure reliability, and aggressive market acquisition under a single corporate service array.&rdquo;
            </p>
            <div className="flex items-center gap-3 border-t border-slate-700 pt-4">
              <span className="w-10 h-10 rounded-full bg-sky-950 border border-sky-800 flex items-center justify-center font-bold text-sky-400">JS</span>
              <div>
                <p className="text-sm font-bold text-white">Julian Sterling</p>
                <p className="text-xs text-slate-400">CEO & Founder, DIGINET</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values (Light) */}
      <section className="relative z-10 py-24 px-6 md:px-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Core Principles</h2>
            <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => {
              const IconComponent = v.icon;
              return (
                <div key={idx} className="p-8 rounded-xl bg-slate-50 border border-slate-200 hover:border-primary/50 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary mb-6 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section (Dark) */}
      <section className="relative z-10 py-24 px-6 md:px-12 border-t border-slate-800 bg-slate-950 text-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white">Executive Leadership</h2>
            <p className="text-slate-400 text-sm font-semibold mt-3">The engineers and operators guiding the corporate vision.</p>
            <div className="h-1 w-20 bg-sky-400 mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between shadow-md">
                <div>
                  <h4 className="text-lg font-bold text-white">{member.name}</h4>
                  <span className="text-xs font-bold text-sky-400 block mt-1 uppercase tracking-wider">{member.role}</span>
                  <p className="text-sm text-slate-350 mt-6 leading-relaxed">{member.bio}</p>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full mt-8 overflow-hidden">
                  <div className="h-full bg-sky-400 w-[80%]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
