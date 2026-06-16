"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp, MapPin, Phone, Mail } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterCategory {
  title: string;
  links: FooterLink[];
}

const categories: FooterCategory[] = [
  {
    title: "Useful Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Social Media Management", href: "/services/social-media-management" },
      { label: "Mobile Development", href: "/services/mobile-development" },
      { label: "Application Development", href: "/services/application-development" },
      { label: "Website Designing", href: "/services/website-designing" },
      { label: "Cybersecurity", href: "/services/cybersecurity" },
    ],
  },
];

export default function Footer() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const currentYear = new Date().getFullYear();

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <footer className="relative w-full bg-[#06142D] border-t border-slate-800 text-slate-350 pt-12 pb-8 overflow-hidden z-10">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-10 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <Link href="/" className="flex items-center group mb-5">
              <Image
                src="/images/diginetnewlogo.png"
                alt="DIGINET Logo"
                width={130}
                height={36}
                className="h-8.5 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 max-w-sm">
              Delivering high-end corporate IT solutions, software engineering, and cybersecurity audits tailored for global organizations and enterprise leaders.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { 
                  name: "Facebook",
                  href: "#",
                  svg: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  )
                },
                { 
                  name: "Twitter",
                  href: "#",
                  svg: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                    </svg>
                  )
                },
                { 
                  name: "Instagram",
                  href: "#",
                  svg: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  )
                },
                { 
                  name: "Linkedin",
                  href: "#",
                  svg: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  )
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-accent-blue hover:border-accent-blue/45 transition-all duration-350"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Links Directories (Desktop: Grid, Mobile: Accordion handled below) */}
          <div className="hidden lg:grid lg:col-span-5 grid-cols-2 gap-8 text-left">
            {categories.map((cat) => (
              <div key={cat.title} className="flex flex-col">
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5 font-poppins">
                  {cat.title}
                </h4>
                <div className="flex flex-col gap-3.5">
                  {cat.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 flex flex-col text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5 font-poppins">
              Contact Details
            </h4>
            <div className="flex flex-col gap-4 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-blue shrink-0" />
                <span>123 Tech Avenue, Corporate Suite 500, Silicon Valley, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-blue shrink-0" />
                <a href="tel:+15550199" className="hover:text-white transition-colors">+1 (555) 0199</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-blue shrink-0" />
                <a href="mailto:info@diginet.com" className="hover:text-white transition-colors">
                  info@diginet.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Accordion block */}
        <div className="lg:hidden flex flex-col gap-4 border-b border-slate-800 pb-6 mb-6">
          {categories.map((cat, idx) => {
            const isExpanded = expandedSection === idx;
            return (
              <div key={cat.title} className="border-b border-slate-800/60 pb-3 text-left">
                <button
                  onClick={() => toggleSection(idx)}
                  className="w-full flex items-center justify-between text-xs font-bold text-white uppercase tracking-wider font-poppins py-1"
                >
                  <span>{cat.title}</span>
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {isExpanded && (
                  <div className="flex flex-col gap-3 mt-3 pl-1">
                    {cat.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center text-xs text-slate-500 font-medium">
          <p>&copy; {currentYear} DIGINET. All rights reserved. Designed for elite corporate growth.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
