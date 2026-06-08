"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "cybersecurity",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", service: "cybersecurity", message: "" });
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-800">
      {/* Background patterns */}
      <div className="absolute inset-0 tech-grid opacity-[0.05] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Get In Touch</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Let&apos;s build something secure & scalable.
              </h1>
              <p className="text-slate-600 leading-relaxed">
                Connect with our system engineers and growth consultants to explore custom application builds, security protocols, or performance marketing strategies.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-800 font-bold text-sm">Global HQ</h4>
                  <p className="text-slate-500 text-xs mt-1">123 Tech Avenue, Corporate Suite 500, Silicon Valley, CA</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-800 font-bold text-sm">Direct Phone</h4>
                  <a href="tel:+15550199" className="text-slate-500 text-xs mt-1 block hover:text-primary transition-colors">+1 (555) 0199</a>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                <Mail className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-800 font-bold text-sm">Corporate Email</h4>
                  <a href="mailto:info@diginet.com" className="text-slate-500 text-xs mt-1 block hover:text-primary transition-colors">info@diginet.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-2xl border border-slate-200 bg-slate-50 shadow-xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status !== "success" ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Your Name / Organization
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-850 placeholder:text-slate-400 focus:outline-none focus:border-primary text-sm transition-colors shadow-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Corporate Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-850 placeholder:text-slate-400 focus:outline-none focus:border-primary text-sm transition-colors shadow-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Service of Interest
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-850 focus:outline-none focus:border-primary text-sm appearance-none cursor-pointer transition-colors shadow-sm"
                        >
                          <option value="cybersecurity">Cybersecurity Solutions</option>
                          <option value="website-designing">Website Designing</option>
                          <option value="application-development">Application Development</option>
                          <option value="digital-marketing">Digital Marketing</option>
                          <option value="social-media-management">Social Media Management</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Project Brief / Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your goals or system parameters..."
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-850 placeholder:text-slate-400 focus:outline-none focus:border-primary text-sm transition-colors resize-none shadow-sm"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-4 rounded-lg bg-primary text-white font-bold hover:bg-primary-hover disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <span>Processing System Node...</span>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
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
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Transmitted Successfully</h3>
                    <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                      Your message has bypassed threat filtering and is in our pipeline. An engineer will coordinate with you within 2-4 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-8 px-6 py-2 border border-slate-200 rounded-lg text-slate-600 text-xs font-bold hover:bg-slate-100 transition-all cursor-pointer shadow-sm"
                    >
                      Send Another Transmission
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
