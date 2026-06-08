"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Monitor, Shield, AppWindow, Share2, Megaphone, Phone, Mail } from "lucide-react";
import Image from "next/image";

const services = [
  {
    name: "Digital Marketing",
    href: "/services/digital-marketing",
    description: "Results-driven online growth and SEO.",
    icon: Megaphone,
    color: "text-cyan-600",
  },
  {
    name: "Social Media Management",
    href: "/services/social-media-management",
    description: "Engage and build your digital community.",
    icon: Share2,
    color: "text-purple-600",
  },
  {
    name: "Application Dev",
    href: "/services/application-development",
    description: "Custom, scalable software & mobile apps.",
    icon: AppWindow,
    color: "text-pink-600",
  },
  {
    name: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Protecting your corporate digital assets.",
    icon: Shield,
    color: "text-emerald-600",
  },
  {
    name: "Website Designing",
    href: "/services/website-designing",
    description: "Stunning, fast, and responsive web design.",
    icon: Monitor,
    color: "text-amber-600",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-sm">
      {/* Top Bar (Contacts & Socials) */}
      <div className="bg-slate-900 text-slate-300 text-[11px] sm:text-xs py-2 px-4 sm:px-6 md:px-12 flex justify-between items-center border-b border-slate-800">
        <div className="flex gap-3 sm:gap-6 items-center">
          <a href="tel:+15550199" className="flex items-center gap-1 hover:text-white transition-colors">
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
            <span className="hidden xs:inline">+1 (555) 0199</span>
            <span className="xs:hidden">+1 (555) 0199</span>
          </a>
          <a href="mailto:info@diginet.com" className="flex items-center gap-1 hover:text-white transition-colors">
            <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
            <span className="hidden xs:inline">info@diginet.com</span>
            <span className="xs:hidden">Email Us</span>
          </a>
        </div>
        
        {/* Right side social links */}
        <div className="flex gap-3 sm:gap-4 items-center">
          {[
            {
              name: "Facebook",
              svg: (
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              )
            },
            {
              name: "Twitter",
              svg: (
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              )
            },
            {
              name: "Linkedin",
              svg: (
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              )
            }
          ].map((item, idx) => (
            <a key={idx} href="#" aria-label={item.name} className="hover:text-white transition-colors">
              {item.svg}
            </a>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/diginetnewlogo.png"
              alt="DIGINET Logo"
              width={130}
              height={36}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                pathname === "/" ? "text-primary" : "text-slate-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                pathname === "/about" ? "text-primary" : "text-slate-600"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-primary cursor-pointer ${
                  pathname.startsWith("/services") ? "text-primary" : "text-slate-600"
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-96 rounded-xl bg-white border border-slate-200 p-4 shadow-xl"
                  >
                    <div className="grid gap-2">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">Our Capabilities</p>
                      {services.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <div className={`p-2 rounded-lg bg-slate-50 ${item.color} group-hover:bg-primary/10 transition-colors`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">
                                {item.name}
                              </h4>
                              <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                pathname === "/contact" ? "text-primary" : "text-slate-600"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg font-bold text-sm shadow-md transition-all bg-orange-brand text-white hover:bg-orange-brand-hover"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all"
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
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-bold transition-colors ${
                    pathname === "/" ? "text-primary" : "text-slate-800"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-bold transition-colors ${
                    pathname === "/about" ? "text-primary" : "text-slate-800"
                  }`}
                >
                  About
                </Link>

                {/* Mobile Services List */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Services</span>
                  <div className="pl-4 border-l border-slate-200 flex flex-col gap-4">
                    {services.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
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
                    pathname === "/contact" ? "text-primary" : "text-slate-800"
                  }`}
                >
                  Contact
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 rounded-lg bg-orange-brand text-white font-bold flex items-center justify-center gap-2 shadow-md hover:bg-orange-brand-hover"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
