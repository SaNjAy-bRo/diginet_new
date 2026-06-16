"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Monitor, Shield, AppWindow, Share2, Megaphone, Phone, Mail, Smartphone } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

const services = [
  {
    name: "Digital Marketing",
    href: "/services/digital-marketing",
    description: "Results-driven online growth and SEO.",
    icon: Megaphone,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    name: "Social Media Management",
    href: "/services/social-media-management",
    description: "Engage and build your digital community.",
    icon: Share2,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    name: "Mobile Development",
    href: "/services/mobile-development",
    description: "Native iOS & Android apps and cross-platform arrays.",
    icon: Smartphone,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    name: "Application Dev",
    href: "/services/application-development",
    description: "Custom, scalable software & mobile apps.",
    icon: AppWindow,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    name: "Website Designing",
    href: "/services/website-designing",
    description: "Stunning, fast, and responsive web design.",
    icon: Monitor,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    name: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Protecting your corporate digital assets.",
    icon: Shield,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    const base = "text-[13px] font-semibold transition-all duration-200 py-2 relative group";
    
    if (isScrolled || isOpen) {
      return `${base} hover:text-white ${isActive ? "text-white font-bold" : "text-slate-300"}`;
    }
    return `${base} hover:text-white ${isActive ? "text-white font-bold" : "text-white/80"}`;
  };

  const getDropdownClass = () => {
    const isActive = pathname.startsWith("/services");
    const base = "flex items-center gap-1 text-[13px] font-semibold transition-all duration-200 cursor-pointer py-2";
    
    if (isScrolled || isOpen) {
      return `${base} hover:text-white ${isActive ? "text-white font-bold" : "text-slate-300"}`;
    }
    return `${base} hover:text-white ${isActive ? "text-white font-bold" : "text-white/80"}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar (Contacts & Socials) */}
      <div className="bg-[#040d1e] text-slate-450 text-[10px] sm:text-xs py-2 px-6 sm:px-8 md:px-12 flex justify-between items-center border-b border-white/5 select-none">
        <div className="flex gap-4 sm:gap-6 items-center">
          <a href="tel:+15550199" className="flex items-center gap-1.5 hover:text-white text-slate-400 transition-colors">
            <Phone className="w-3 h-3 text-accent-blue" />
            <span>+1 (555) 0199</span>
          </a>
          <a href="mailto:info@diginet.com" className="flex items-center gap-1.5 hover:text-white text-slate-400 transition-colors">
            <Mail className="w-3 h-3 text-accent-blue" />
            <span>info@diginet.com</span>
          </a>
        </div>
        
        {/* Right side social links */}
        <div className="flex gap-3 sm:gap-4 items-center">
          {[
            {
              name: "Facebook",
              svg: (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              )
            },
            {
              name: "Twitter",
              svg: (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              )
            },
            {
              name: "Linkedin",
              svg: (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              )
            }
          ].map((item, idx) => (
            <a key={idx} href="#" aria-label={item.name} className="text-slate-400 hover:text-white transition-colors">
              {item.svg}
            </a>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 py-3.5 ${
        (isScrolled || isOpen)
          ? "bg-[#06142D]/95 backdrop-blur-md border-b border-white/5 shadow-md" 
          : "bg-transparent border-b border-transparent"
      }`}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <Image
              src="/images/diginetnewlogo.png"
              alt="DIGINET Logo"
              width={130}
              height={36}
              className="h-8.5 w-auto object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            <Link href="/" className={getLinkClass("/")}>
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-blue transition-all duration-300 ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
            <Link href="/about" className={getLinkClass("/about")}>
              About
              <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-blue transition-all duration-300 ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className={getDropdownClass()}>
                Services
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-[440px] rounded-2xl bg-[#06142D] border border-white/10 p-4 shadow-xl z-50 backdrop-blur-md"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest col-span-2 px-2.5 mb-1 select-none">Our Capabilities</p>
                      {services.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group"
                          >
                            <div className={`p-2 rounded-lg ${item.bg} ${item.color} shrink-0`}>
                              <IconComponent className="w-4.5 h-4.5" />
                            </div>
                            <div className="text-left">
                              <h4 className="text-[12px] font-bold text-white group-hover:text-accent-blue transition-colors leading-tight">
                                {item.name}
                              </h4>
                              <p className="text-[10px] text-slate-400 mt-1 leading-normal">{item.description}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className={getLinkClass("/contact")}>
              Contact
              <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-blue transition-all duration-300 ${pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block shrink-0">
            <button
              onClick={openBooking}
              className="cursor-pointer px-5 py-2.5 rounded-full font-bold text-xs shadow-md transition-all duration-300 bg-cta-blue text-white hover:bg-hover-blue hover:scale-[1.02] active:scale-[0.98] shadow-cta-blue/20"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#06142D] border-b border-white/5 overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-5 text-left">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-bold transition-colors ${
                    pathname === "/" ? "text-accent-blue" : "text-slate-200 hover:text-white"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-bold transition-colors ${
                    pathname === "/about" ? "text-accent-blue" : "text-slate-200 hover:text-white"
                  }`}
                >
                  About
                </Link>

                {/* Mobile Services List */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest select-none">Services</span>
                  <div className="pl-3 border-l border-white/10 flex flex-col gap-3">
                    {services.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                        >
                          <IconComponent className={`w-4 h-4 ${item.color}`} />
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-bold transition-colors ${
                    pathname === "/contact" ? "text-accent-blue" : "text-slate-200 hover:text-white"
                  }`}
                >
                  Contact
                </Link>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    openBooking();
                  }}
                  className="w-full text-center py-3 rounded-xl bg-cta-blue text-white font-bold flex items-center justify-center gap-2 shadow-md hover:bg-hover-blue transition-colors cursor-pointer"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
