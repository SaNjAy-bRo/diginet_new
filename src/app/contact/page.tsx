"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown, Building2, Clock, Globe } from "lucide-react";

interface OfficeInfo {
  id: string;
  branchName: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  hours: string;
  mapEmbedUrl: string;
}

const offices: OfficeInfo[] = [
  {
    id: "singapore",
    branchName: "Singapore (HQ)",
    address: "7 Temasek Boulevard, #12-07, Suntec Tower 1, Singapore 038987",
    phone: "+6564604000",
    phoneDisplay: "+65 6460 4000",
    email: "info@diginet.sg",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM (SGT)",
    mapEmbedUrl: "https://maps.google.com/maps?q=7%20Temasek%20Boulevard,%20%2312-07,%20Suntec%20Tower%201,%20Singapore%20038987&t=&z=14&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: "india",
    branchName: "India Branch",
    address: "2nd Floor, Business Bay Centre, Udupi–Manipal Highway, Kunjibettu, Udupi, Karnataka 576102, India",
    phone: "+919986389444",
    phoneDisplay: "+91 99863 89444",
    email: "hello@clevercrow.in",
    hours: "Monday - Saturday: 9:30 AM - 6:30 PM (IST)",
    mapEmbedUrl: "https://maps.google.com/maps?q=Clever%20Crow%20Strategies%20LLP,%20Kunjibettu,%20Udupi,%20Karnataka%20576102&t=&z=14&ie=UTF8&iwloc=&output=embed"
  }
];

export default function Contact() {
  const [activeTab, setActiveTab] = useState("singapore");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "cybersecurity",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const activeOffice = offices.find((o) => o.id === activeTab) || offices[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API pipeline transmission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", service: "cybersecurity", message: "" });
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. HERO HEADER (Dark space theme banner) */}
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
            className="max-w-4xl mx-auto"
          >
            <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-3 block animate-pulse">
              Connect Globally
            </span>
            <h1 className="text-3xl sm:text-[44px] lg:text-[48px] font-black tracking-tight text-white leading-tight mb-5 font-poppins">
              Let&apos;s build something secure & scalable
            </h1>
            <p className="text-[14px] md:text-[16px] text-slate-300 leading-relaxed max-w-[750px] mx-auto font-medium">
              Connect with our system engineers and growth consultants to explore custom application builds, security protocols, or performance marketing strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT LAYOUT */}
      <section className="py-16 px-6 md:px-12 bg-white relative z-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50 shadow-xl relative overflow-hidden">
                <div className="mb-6">
                  <h2 className="text-xl font-medium text-slate-900 font-poppins">Send a Query</h2>
                  <p className="text-xs text-slate-500 mt-1 font-semibold">Our system operations leads will reach back shortly.</p>
                </div>

                <AnimatePresence mode="wait">
                  {status !== "success" ? (
                    <motion.form
                      key="contact-form"
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div>
                        <label htmlFor="name" className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                          Your Name / Organization
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-xs font-semibold transition-all shadow-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                          Corporate Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-xs font-semibold transition-all shadow-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                          Service of Interest
                        </label>
                        <div className="relative">
                          <select
                            id="service"
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-xs font-semibold appearance-none cursor-pointer transition-all shadow-sm"
                          >
                            <option value="cybersecurity">Cybersecurity Solutions</option>
                            <option value="website-designing">Website Designing</option>
                            <option value="application-development">Application Development</option>
                            <option value="digital-marketing">Digital Marketing</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                          Project Brief / Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Briefly describe your goals or system parameters..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-xs font-semibold transition-all resize-none shadow-sm"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full py-3.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50 transition-all flex items-center justify-center gap-2 font-bold text-xs shadow-md cursor-pointer border border-slate-800"
                      >
                        {status === "submitting" ? (
                          <span>Processing Pipeline...</span>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-message"
                      className="flex flex-col items-center justify-center text-center py-12 px-4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 mb-2 font-poppins">Transmission Success</h3>
                      <p className="text-slate-550 text-xs leading-relaxed max-w-sm font-semibold">
                        Your message has bypassed threat filtering and is in our pipeline. An engineer will coordinate with you shortly.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-8 px-6 py-2.5 border border-slate-200 rounded-xl text-slate-600 text-xs font-bold hover:bg-slate-100 transition-all cursor-pointer shadow-sm"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column: Address, Tabs & Google Maps */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Tab Switcher */}
              <div className="flex gap-2 p-1.5 bg-slate-100 rounded-2xl w-fit">
                {offices.map((office) => {
                  const isActive = activeTab === office.id;
                  return (
                    <button
                      key={office.id}
                      onClick={() => setActiveTab(office.id)}
                      className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                        isActive
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      {office.branchName}
                    </button>
                  );
                })}
              </div>

              {/* Office details card */}
              <div className="p-6 rounded-3xl border border-slate-200 bg-slate-50 shadow-md">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeOffice.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-4 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 mt-1 shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-extrabold text-cyan-600 uppercase tracking-widest mb-1">Office Location</h4>
                        <p className="text-xs sm:text-sm text-slate-800 font-bold leading-relaxed">{activeOffice.address}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 mt-1 shrink-0">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-extrabold text-cyan-600 uppercase tracking-widest mb-1">Direct Line</h4>
                          <a href={`tel:${activeOffice.phone}`} className="text-xs sm:text-sm text-slate-800 font-bold hover:text-cyan-600 transition-colors">
                            {activeOffice.phoneDisplay}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 mt-1 shrink-0">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-extrabold text-cyan-600 uppercase tracking-widest mb-1">Working Hours</h4>
                          <p className="text-xs text-slate-655 font-semibold leading-relaxed">{activeOffice.hours}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Responsive Google Map Iframe */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-slate-200 shadow-md">
                <AnimatePresence mode="wait">
                  <motion.iframe
                    key={activeOffice.id}
                    src={activeOffice.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-full h-full"
                  />
                </AnimatePresence>
              </div>

            </div>

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
            Partner with us
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-6 font-poppins">
            Ready to secure and accelerate <br className="hidden sm:inline"/>
            your business operations?
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            Contact our engineering desks today. Let us build the resilient software platform your team deserves to maximize operational output.
          </p>
          <a
            href="mailto:info@diginet.sg"
            className="cursor-pointer px-8 py-3.5 rounded-full font-extrabold text-xs sm:text-sm shadow-md transition-all duration-300 bg-cta-blue text-white hover:bg-hover-blue hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 shadow-cyan-500/10"
          >
            Email Corporate Desk
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
