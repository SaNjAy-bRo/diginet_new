"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/diginetnewlogo.png"
                alt="DIGINET Logo"
                width={130}
                height={36}
                className="h-9 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-all duration-300"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Delivering high-end corporate IT solutions, software engineering, and cybersecurity audits tailored for global organizations and enterprise leaders.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
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
              ].map((social, index) => {
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/50 transition-all duration-300"
                  >
                    {social.svg}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-100 font-bold mb-6 tracking-wide text-sm">Useful Links</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="text-slate-400 text-sm hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 text-sm hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 text-sm hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div>
            <h4 className="text-slate-100 font-bold mb-6 tracking-wide text-sm">Our Services</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/services/digital-marketing" className="text-slate-400 text-sm hover:text-primary transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-management" className="text-slate-400 text-sm hover:text-primary transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services/application-development" className="text-slate-400 text-sm hover:text-primary transition-colors">
                  Application Development
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-slate-400 text-sm hover:text-primary transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/website-designing" className="text-slate-400 text-sm hover:text-primary transition-colors">
                  Website Designing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h4 className="text-slate-100 font-bold tracking-wide text-sm">Contact Details</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Tech Avenue, Corporate Suite 500, Silicon Valley, CA</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+15550199" className="hover:text-primary transition-colors">+1 (555) 0199</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@diginet.com" className="hover:text-primary transition-colors">info@diginet.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-slate-800 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-slate-500 text-xs">
            © {currentYear} DIGINET. All rights reserved. Designed for elite corporate growth.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <a href="#" className="hover:text-primary transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
