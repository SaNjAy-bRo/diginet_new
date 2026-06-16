"use client";

import React, { useState } from "react";
import { X, Calendar, User, Building, Mail, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "software",
    date: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "software",
      date: "",
      notes: "",
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#06142D]/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-[500px] rounded-3xl bg-[#0A1F47] border border-slate-700/80 p-8 shadow-2xl z-10 overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Glow accent */}
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-accent-blue/20 blur-[60px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white font-poppins mb-2">
                    Book a Consultation
                  </h3>
                  <p className="text-sm text-slate-400">
                    Schedule a 30-minute growth auditing session with our principal architects.
                  </p>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-[#06142D]/60 border border-slate-700/60 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-blue"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-500" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-[#06142D]/60 border border-slate-700/60 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-blue"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Company Name</label>
                  <div className="relative">
                    <Building className="absolute left-4.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Enterprise Corp"
                      className="w-full bg-[#06142D]/60 border border-slate-700/60 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent-blue"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Interested Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#06142D] border border-slate-700/60 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-blue appearance-none"
                  >
                    <option value="software">Software Engineering</option>
                    <option value="it">Managed IT & Cybersecurity</option>
                    <option value="marketing">Digital Marketing Growth</option>
                    <option value="audit">Comprehensive Tech Audit</option>
                  </select>
                </div>

                {/* Calendar Date */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-500" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#06142D]/60 border border-slate-700/60 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-accent-blue"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-cta-blue hover:bg-hover-blue transition-colors shadow-lg shadow-cta-blue/20"
                >
                  Confirm Reservation
                </button>
              </form>
            ) : (
              <motion.div
                className="text-center py-12 flex flex-col items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white font-poppins mb-2">
                    Booking Request Sent!
                  </h3>
                  <p className="text-sm text-slate-400 max-w-sm">
                    Thank you, <strong className="text-white">{formData.name}</strong>. We've reserved a session for <strong className="text-white">{formData.date}</strong> and sent a confirmation link to <span className="text-sky-400">{formData.email}</span>.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="mt-4 inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-300 border border-slate-700 bg-white/5 hover:bg-white/10 hover:text-white transition-all"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
