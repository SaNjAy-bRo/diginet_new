"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, HelpCircle, Search, Phone, Mail, Filter } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "Security",
    question: "Are free Anti-Virus software any good?",
    answer: "First and foremost, you never want to go without security protection on your computer. Free Anti-virus has very low detection rates. Dynamic Anti-Virus will be happy to show you of the risk of security software which are free and standard. We have clients for over 8 years, 99.9% uptime and zero compromise."
  },
  {
    category: "Services",
    question: "What exactly are Managed IT Services?",
    answer: "Simply put, Diginet Managed IT Services represents taking over of your entire information technology requirement. We manage all your hardware and software sourcing, installation, technical support, and IT staffing needs. It also means highly active, your platform security and support team, providing scheduled maintenance and upgrading of your system, along with emergency services. It is having a partner to support keeping your business running."
  },
  {
    category: "Cloud & Backup",
    question: "What is cloud backup?",
    answer: "Cloud backup also known as Online Backup is a process where your profile backup data is transferred via internet network each night. The backup servers are located in a secure data centre in Singapore. Cloud Backup replaces the need for someone to take a backup tape/drive home, it is a clean, secure, reliable and easy to manage environment."
  },
  {
    category: "SLA & Support",
    question: "What kind of response times can I expect?",
    answer: "We work with each client to establish service expectations. Our measurable service levels target guarantees you for SLA living up to agreed-upon expectations."
  },
  {
    category: "Contracts & Billing",
    question: "How long is a Managed Services Contract For?",
    answer: "Managed IT Service Contracts vary by provider. Some providers offer month-to-month programs, while others require a multi-year contract. In Singapore, many providers ask for a minimum 12-month agreement. Dynamic IT Network Contract is customizable to adapt to customer requirements. Within the budget."
  },
  {
    category: "Support & Help",
    question: "What should I do before I call for help?",
    answer: "When possible, write down any information about error messages and take screen shots your issue. Next, attempt to recreate the issue. Often times, it helps to close the program and restart the computer to clear system memory, and possibly resolve the problem."
  },
  {
    category: "Contracts & Billing",
    question: "What does having Managed IT Services cost?",
    answer: "Our service model uses a flat monthly fee, which is based on the size and complexity of your particular network. Once contracted, your Managed IT Services will cover maintenance and support for every component of your network, providing you with peace of mind and the ability to accurately forecast your IT maintenance costs."
  },
  {
    category: "Services",
    question: "What if we already have an internal IT department?",
    answer: "No problem. We offer co-managed services that can be tailored to meet your unique needs. Whether you need a co-package of managed IT services and consulting, security solutions or 24/7 desktop support, Diginet works in tandem with your IT team to customize the standard services packages."
  },
  {
    category: "Contracts & Billing",
    question: "How does a flat rate billing save me money?",
    answer: "With technology, you are vulnerable to outages your IT system can experience. In fact, many companies have experienced. With traditional break/fix models you pay when you need security, so you only pay for what you need. Diginet works on a flat rate basis, so you only pay for a fixed managed IT services needs. And we don't like flat monthly cost – we Don't Profit from your Pain!"
  },
  {
    category: "Compatibility",
    question: "What types of systems do you support?",
    answer: "We pride ourselves on being 'ecosystem agnostic' whether you run Microsoft Apps or Office, macOS or Linux, Android or iOS, we will support your team. Need security, data backups, cloud systems, active directory services? We can support you. Need to transition from one ecosystem to another? We'll be there for you."
  }
];

const categories = [
  "All",
  "Services",
  "Security",
  "Cloud & Backup",
  "SLA & Support",
  "Contracts & Billing",
  "Support & Help",
  "Compatibility"
];

export default function FAQPage() {
  const { openBooking } = useBooking();
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleFaq = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  // Filter FAQ items based on search term and category
  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="w-full bg-slate-50 overflow-hidden min-h-screen">
      {/* 1. HERO SECTION (Dark gradient background) */}
      <section className="relative w-full bg-[#06142D] pt-[115px] pb-12 overflow-hidden bg-cover bg-center">
        {/* Ambient grids & radial glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-10%] h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[130px]" />
          <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.06]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-3 block animate-pulse">
              Support Center
            </span>
            <h1 className="text-3xl sm:text-[44px] lg:text-[48px] font-black tracking-tight text-white leading-tight mb-5 font-poppins">
              What are you looking for?
            </h1>
            <p className="text-[14px] md:text-[16px] text-slate-300 leading-relaxed max-w-[700px] mx-auto font-medium">
              Find answers and solutions to common IT issues. If you can&apos;t find an answer, contact us and we&apos;ll be happy to help.
            </p>

            {/* Search Input */}
            <div className="relative max-w-2xl mx-auto mt-8 shadow-2xl">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search common IT questions or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-slate-900/60 border border-slate-700/60 rounded-full text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder-slate-400"
              />
            </div>

            {/* Telephone and Email Bar */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-8 text-xs text-slate-350 bg-slate-900/40 backdrop-blur-md border border-white/5 py-3 px-6 rounded-full max-w-xl mx-auto">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call us: <a href="tel:+6567880099" className="font-bold text-white hover:text-cyan-400 transition-colors">+65 6788-0099</a></span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Email: <a href="mailto:enquiry@diginet.com" className="font-bold text-white hover:text-cyan-400 transition-colors">enquiry@diginet.com</a></span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FILTER & ACCORDION GRID */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-white relative">
        <div className="max-w-[1280px] mx-auto">
          
          {/* Category Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpenQuestion(null); // Close opened accordion on filter change
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-350 border cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-900/10"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* FAQ 2-Column Grid */}
          <div className="max-w-5xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                {filteredFaqs.map((faq) => {
                  const isOpen = openQuestion === faq.question;
                  return (
                    <motion.div
                      layout
                      key={faq.question}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`rounded-2xl border transition-all duration-300 bg-slate-50 overflow-hidden ${
                        isOpen
                          ? "border-cyan-400/40 shadow-[0_8px_20px_rgba(6,182,212,0.05)] bg-white"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(faq.question)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                      >
                        <div className="flex items-start gap-4">
                          <HelpCircle className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[9px] font-extrabold text-cyan-600 uppercase tracking-widest bg-cyan-500/10 px-2.5 py-0.5 rounded-full block w-fit mb-2">
                              {faq.category}
                            </span>
                            <span className="text-sm md:text-base font-extrabold text-slate-900 leading-snug">
                              {faq.question}
                            </span>
                          </div>
                        </div>
                        <div className={`p-1.5 rounded-lg border shrink-0 ml-4 transition-colors duration-250 ${
                          isOpen ? "bg-cyan-50 border-cyan-200 text-cyan-600" : "bg-white border-slate-200 text-slate-500"
                        }`}>
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-1 pl-15 border-t border-slate-200/50 bg-white">
                              <p className="text-xs md:text-sm text-slate-655 leading-relaxed font-semibold">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-500 text-sm font-semibold">No questions match your filter criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 text-xs font-bold text-cyan-600 hover:text-cyan-700 underline cursor-pointer"
                >
                  Clear search filters
                </button>
              </div>
            )}
          </div>

          {/* Bottom Callout banner */}
          <div className="mt-16 text-center">
            <p className="text-xs text-slate-500 font-semibold">
              Couldn&apos;t find your answer?{" "}
              <button
                onClick={openBooking}
                className="text-cyan-600 font-bold hover:underline cursor-pointer"
              >
                Ask a question
              </button>
            </p>
          </div>

        </div>
      </section>

      {/* 3. CTA BANNER (Professional Office photo background) */}
      <section 
        className="py-16 md:py-20 px-6 md:px-12 text-white border-t border-slate-900 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/images/why_choose_us_office_bg.png')` }}
      >
        {/* Dark gradient overlay to ensure readable typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80 z-0" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-400 mb-3 block">
            Let&apos;s Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 font-poppins">
            Are you ready for a better, <br className="hidden sm:inline"/>
            more productive business?
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            Stop worrying about technology problems. Focus completely on your core business goals. Let us provide the technical reliability and support you deserve.
          </p>
          <button
            onClick={openBooking}
            className="cursor-pointer px-8 py-3.5 rounded-full font-extrabold text-xs sm:text-sm shadow-md transition-all duration-300 bg-cta-blue text-white hover:bg-hover-blue hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 shadow-cyan-500/10"
          >
            Contact us Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  );
}
