"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: string[];
  isTyping?: boolean;
};

type ChatMode = "chat" | "lead_gen";
type LeadStep = "name" | "email" | "phone" | "message" | "done";

// Services definitions for DIGINET
const services = {
  "cybersecurity": {
    slug: "cybersecurity",
    title: "Cybersecurity",
    heroSubtitle: "Zero-Trust Infrastructure Protection & Vulnerability Isolation including cloud VMs, networks, and database endpoints."
  },
  "website-designing": {
    slug: "website-designing",
    title: "Website Designing",
    heroSubtitle: "High-conversion web architectures featuring fluid animations, clean typography, and optimized page speed."
  },
  "mobile-development": {
    slug: "mobile-development",
    title: "Mobile Development",
    heroSubtitle: "Custom mobile applications for iOS & Android built natively or using cross-platform frameworks."
  },
  "application-development": {
    slug: "application-development",
    title: "Application Development",
    heroSubtitle: "High-performance enterprise software, scalable cloud systems, and distributed databases."
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    heroSubtitle: "Results-driven online growth using paid advertising campaigns (Google, Meta, LinkedIn) and technical SEO rankings."
  },
  "social-media-management": {
    slug: "social-media-management",
    title: "Social Media Management",
    heroSubtitle: "Corporate social media management with specialized content strategies and executive thought leadership posting."
  }
};

// Custom Premium 3D-Styled Full-Body Robot Model (waving and bobbing)
const AnimatedBot = ({ 
  isSpeaking, 
  className, 
  animate = false,
  expression = "happy"
}: { 
  isSpeaking: boolean, 
  className?: string, 
  animate?: boolean,
  expression?: "happy" | "thinking" | "focused" | "excited"
}) => (
  <svg 
    viewBox="18 10 64 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`overflow-visible ${className || "w-10 h-10"}`}
  >
    <defs>
      {/* 3D Sphere Radial Gradient - Polished Silver-White Metal */}
      <radialGradient id="whiteGloss" cx="35%" cy="30%" r="65%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="35%" stopColor="#f8fafc" />
        <stop offset="75%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#94a3b8" />
      </radialGradient>

      {/* Chrome Metallic joints */}
      <linearGradient id="silverMetal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e2e8f0" />
        <stop offset="50%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>

      {/* Blue LED Accent Gradients */}
      <linearGradient id="blueAccent" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>

      {/* Visor Glass Screen */}
      <radialGradient id="visorGlass" cx="30%" cy="20%" r="80%">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="75%" stopColor="#020617" />
        <stop offset="100%" stopColor="#000000" />
      </radialGradient>

      {/* Visor Glass Reflection */}
      <linearGradient id="glassReflect" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
        <stop offset="60%" stopColor="rgba(255, 255, 255, 0.05)" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>

      {/* Blue Neon Glow Filter */}
      <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Drop Shadow for Depth */}
      <filter id="botShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#64748b" floodOpacity="0.2" />
      </filter>
    </defs>

    <style>{`
      @keyframes botBlink {
        0%, 96%, 100% { transform: scaleY(1); }
        98% { transform: scaleY(0.1); }
      }
      @keyframes botHeadTurn3D {
        0%, 100% { transform: perspective(400px) rotateY(0deg); }
        20%, 40% { transform: perspective(400px) rotateY(-22deg); }
        60%, 80% { transform: perspective(400px) rotateY(22deg); }
      }
      @keyframes botFaceParallax {
        0%, 100% { transform: translateX(0px); }
        20%, 40% { transform: translateX(-4.5px); }
        60%, 80% { transform: translateX(4.5px); }
      }
      .bot-head-group {
        animation: botHeadTurn3D 6s ease-in-out infinite;
        transform-origin: 50px 39px;
        transform-style: preserve-3d;
      }
      .bot-face-group {
        animation: botFaceParallax 6s ease-in-out infinite;
        transform-origin: 50px 39px;
      }
      .bot-eye-l {
        animation: botBlink 4.5s ease-in-out infinite;
        transform-origin: 43px 39px;
      }
      .bot-eye-r {
        animation: botBlink 4.5s ease-in-out infinite;
        transform-origin: 57px 39px;
      }
    `}</style>

    {/* Entire Head assembly */}
    <g className={animate ? "bot-head-group" : ""} filter="url(#botShadow)">
      {/* Neck Joint */}
      <rect x="46" y="52" width="8" height="6" rx="2" fill="url(#silverMetal)" />

      {/* Robot Head Capsule */}
      <rect x="28" y="22" width="44" height="34" rx="17" fill="url(#whiteGloss)" stroke="#e2e8f0" strokeWidth="0.5" />

      {/* Antennas (Ears) */}
      {/* Left Ear */}
      <circle cx="28" cy="39" r="4" fill="url(#silverMetal)" />
      <line x1="26" y1="39" x2="21" y2="27" stroke="url(#silverMetal)" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="21" cy="27" r="1.8" fill="#22d3ee" filter="url(#neonGlow)" />
      
      {/* Right Ear */}
      <circle cx="72" cy="39" r="4" fill="url(#silverMetal)" />
      <line x1="74" y1="39" x2="79" y2="27" stroke="url(#silverMetal)" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="79" cy="27" r="1.8" fill="#22d3ee" filter="url(#neonGlow)" />

      {/* Face elements (Visor and Eyes/Mouth) */}
      <g className={animate ? "bot-face-group" : ""}>
        {/* Visor Screen */}
        <rect x="34" y="27" width="32" height="20" rx="9" fill="url(#visorGlass)" />

        {/* Visor Glass Shiny Highlight */}
        <rect x="35" y="28" width="30" height="9" rx="4.5" fill="url(#glassReflect)" pointerEvents="none" />

        {/* Left Eye */}
        {expression === "happy" && (
          <path 
            d="M 40 37 Q 43 34 46 37" 
            fill="none" 
            stroke="#22d3ee" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            className="bot-eye-l"
            filter="url(#neonGlow)" 
          />
        )}
        {expression === "thinking" && (
          <line 
            x1="40" y1="36" x2="46" y2="36" 
            stroke="#22d3ee" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            className="bot-eye-l"
            filter="url(#neonGlow)" 
          />
        )}
        {expression === "focused" && (
          <circle 
            cx="42.5" cy="35.5" r="2.2" 
            fill="#22d3ee" 
            className="bot-eye-l"
            filter="url(#neonGlow)" 
          />
        )}
        {expression === "excited" && (
          <path 
            d="M 39.5 38.5 L 42.5 35 L 45.5 38.5" 
            fill="none" 
            stroke="#22d3ee" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            className="bot-eye-l"
            filter="url(#neonGlow)" 
          />
        )}

        {/* Right Eye */}
        {expression === "happy" && (
          <path 
            d="M 54 37 Q 57 34 60 37" 
            fill="none" 
            stroke="#22d3ee" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            className="bot-eye-r"
            filter="url(#neonGlow)" 
          />
        )}
        {expression === "thinking" && (
          <line 
            x1="54" y1="36" x2="60" y2="36" 
            stroke="#22d3ee" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            className="bot-eye-r"
            filter="url(#neonGlow)" 
          />
        )}
        {expression === "focused" && (
          <circle 
            cx="57.5" cy="35.5" r="2.2" 
            fill="#22d3ee" 
            className="bot-eye-r"
            filter="url(#neonGlow)" 
          />
        )}
        {expression === "excited" && (
          <path 
            d="M 54.5 38.5 L 57.5 35 L 60.5 38.5" 
            fill="none" 
            stroke="#22d3ee" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            className="bot-eye-r"
            filter="url(#neonGlow)" 
          />
        )}

        {/* Mouth */}
        {isSpeaking ? (
          <path 
            d="M 45 42 Q 50 46 55 42" 
            fill="none" 
            stroke="#22d3ee" 
            strokeWidth="1.8" 
            strokeLinecap="round"
            filter="url(#neonGlow)"
          >
            <animate attributeName="d" values="M 45 42 Q 50 46 55 42; M 45 44 Q 50 41 55 44; M 45 42 Q 50 46 55 42" dur="0.5s" repeatCount="indefinite" />
          </path>
        ) : (
          <>
            {expression === "happy" && (
              <path 
                d="M 46 43 Q 50 46 54 43" 
                fill="none" 
                stroke="#22d3ee" 
                strokeWidth="1.8" 
                strokeLinecap="round"
                filter="url(#neonGlow)"
              />
            )}
            {expression === "thinking" && (
              <line 
                x1="46" y1="43" x2="54" y2="43" 
                stroke="#22d3ee" 
                strokeWidth="1.8" 
                strokeLinecap="round"
                filter="url(#neonGlow)"
              />
            )}
            {expression === "focused" && (
              <path 
                d="M 47 43 Q 50 45.5 53 43" 
                fill="none" 
                stroke="#22d3ee" 
                strokeWidth="1.8" 
                strokeLinecap="round"
                filter="url(#neonGlow)"
              />
            )}
            {expression === "excited" && (
              <path 
                d="M 45 42 Q 50 48 55 42 Z" 
                fill="#22d3ee" 
                stroke="#22d3ee" 
                strokeWidth="1" 
                strokeLinejoin="round"
                filter="url(#neonGlow)"
              />
            )}
          </>
        )}
      </g>
    </g>
  </svg>
);

export default function Chatbot() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<ChatMode>("chat");
  const [currentStep, setCurrentStep] = useState<LeadStep>("name");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  let currentExpression: "happy" | "thinking" | "focused" | "excited" = "happy";
  if (isTyping) {
    currentExpression = "thinking";
  } else if (currentStep === "done") {
    currentExpression = "excited";
  } else if (mode === "lead_gen") {
    currentExpression = "focused";
  }

  const [bubbleText, setBubbleText] = useState<string | null>(null);
  const [isTriggerSpeaking, setIsTriggerSpeaking] = useState(false);
  const [bubbleExpression, setBubbleExpression] = useState<"happy" | "thinking" | "focused" | "excited">("happy");

  useEffect(() => {
    if (isOpen) {
      setBubbleText(null);
      setIsTriggerSpeaking(false);
      return;
    }

    const speakMessages = [
      { text: "Hi! 👋", expression: "excited" as const },
      { text: "Need any help?", expression: "focused" as const },
      { text: "Ask me anything!", expression: "happy" as const },
      { text: "Let's connect!", expression: "excited" as const },
    ];

    // Show initial bubble after 3 seconds
    const initialTimeout = setTimeout(() => {
      const msg = speakMessages[Math.floor(Math.random() * speakMessages.length)];
      setBubbleText(msg.text);
      setBubbleExpression(msg.expression);
      setIsTriggerSpeaking(true);

      // Stop speaking and hide bubble after 3 seconds
      setTimeout(() => {
        setBubbleText(null);
        setIsTriggerSpeaking(false);
      }, 3000);
    }, 3000);

    // Periodic loop: 3 seconds visible, 3 seconds hidden -> triggers every 6 seconds!
    const interval = setInterval(() => {
      const msg = speakMessages[Math.floor(Math.random() * speakMessages.length)];
      setBubbleText(msg.text);
      setBubbleExpression(msg.expression);
      setIsTriggerSpeaking(true);

      // Stop speaking and hide bubble after 3 seconds
      setTimeout(() => {
        setBubbleText(null);
        setIsTriggerSpeaking(false);
      }, 3000);
    }, 6000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isOpen]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hi! I'm the DIGINET AI.\n\nAsk me about Cybersecurity, Software Development, Web Design, or Digital Marketing.",
      options: ["Cybersecurity", "App Dev", "Web Design", "Marketing", "Connect"],
    },
  ]);
  
  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev);
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("toggle-chat", handleToggle);
    window.addEventListener("open-chat", handleOpen);
    return () => {
      window.removeEventListener("toggle-chat", handleToggle);
      window.removeEventListener("open-chat", handleOpen);
    };
  }, []);

  const addMessage = (message: Omit<Message, "id">) => {
    setMessages((prev) => [
      ...prev,
      { ...message, id: Date.now().toString() + Math.random().toString() },
    ]);
  };

  const validateName = (name: string) => name.trim().length >= 2;
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return phoneRegex.test(phone.trim());
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    addMessage({ sender: "user", text });
    setInputValue("");
    setIsTyping(true);
    setTimeout(() => processInput(text), 1500 + Math.random() * 1000); 
  };

  const generateAIResponse = (text: string) => {
    const lowerText = text.toLowerCase();
    
    // Greetings
    if (/^(hi|hello|hey)\b/.test(lowerText)) {
      addMessage({
        sender: "bot",
        text: "Hello! How can I help you today?",
        options: ["Cybersecurity", "App Dev", "Web Design", "Marketing", "Connect"],
      });
      return;
    }

    // Contact & Address Info
    if (lowerText.includes("address") || lowerText.includes("location") || lowerText.includes("office") || lowerText.includes("where")) {
      addMessage({
        sender: "bot",
        text: "Our Global HQ is located at:\n\n**7 Temasek Boulevard, #12-07, Suntec Tower 1, Singapore 038987**\n\nAnd our India branch is located at:\n\n**2nd Floor, Business Bay Centre, Udupi–Manipal Highway, Kunjibettu, Udupi, Karnataka 576102, India**\n\nWould you like to schedule a call or request consultation?",
        options: ["Schedule Call", "Main Menu"],
      });
      return;
    }

    if (lowerText.includes("contact") || lowerText.includes("phone") || lowerText.includes("email") || lowerText.includes("number")) {
      addMessage({
        sender: "bot",
        text: "You can reach us at:\n\n📞 **+65 6460 4000** (Singapore HQ)\n📞 **+91 99863 89444** (India Branch)\n📧 **info@diginet.sg**\n\nOr I can collect your details and have our team call you?",
        options: ["Connect Now", "Main Menu"],
      });
      return;
    }

    // Lead Gen Triggers
    if (lowerText.includes("connect") || lowerText.includes("schedule") || lowerText === "yes, connect" || lowerText === "connect now" || lowerText === "schedule call") {
      setMode("lead_gen");
      setCurrentStep("name");
      addMessage({ sender: "bot", text: "Great! Let's get some details. What's your name?" });
      return;
    }

    // Reset / Main Menu
    if (lowerText.includes("main menu") || lowerText.includes("other services") || lowerText.includes("start over")) {
      addMessage({
        sender: "bot",
        text: "I'm here to help with IT, development, and marketing capabilities. What would you like to explore?",
        options: ["Cybersecurity", "App Dev", "Web Design", "Marketing", "Connect"],
      });
      return;
    }

    // --- CHECK FOR SPECIFIC SERVICES FIRST ---
    const matchedService = Object.values(services).find(s => 
      lowerText.includes(s.title.toLowerCase()) || 
      lowerText.includes(s.slug.replace("-", " "))
    );

    if (matchedService) {
      setSelectedServices(prev => Array.from(new Set([...prev, matchedService.title])));
      addMessage({
        sender: "bot",
        text: `${matchedService.title}: ${matchedService.heroSubtitle}\n\nShall we connect?`,
        options: ["Yes, connect", "Other services"],
      });
      return;
    }

    // --- BROAD CATEGORY CHECKS ---
    if (lowerText.includes("web") || lowerText.includes("site")) {
      setSelectedServices(prev => Array.from(new Set([...prev, "Website Designing"])));
      addMessage({
        sender: "bot",
        text: "We design and build high-performance custom corporate websites. Interested in a build or audit?",
        options: ["Website Designing", "Connect"],
      });
      return;
    }

    if (lowerText.includes("marketing") || lowerText.includes("ads") || lowerText.includes("seo") || lowerText.includes("social")) {
      setSelectedServices(prev => Array.from(new Set([...prev, "Digital Marketing"])));
      addMessage({
        sender: "bot",
        text: "We specialize in Google Ads, Meta campaigns, SEO rankings, and Social Media Management. Which do you need?",
        options: ["Digital Marketing", "Social Media Management", "Connect"],
      });
      return;
    }

    if (lowerText.includes("security") || lowerText.includes("cyber") || lowerText.includes("compliance")) {
      setSelectedServices(prev => Array.from(new Set([...prev, "Cybersecurity"])));
      addMessage({
        sender: "bot",
        text: "We provide Zero-Trust network engineering, security penetration audits, and active threat monitoring. Shall we discuss your security posture?",
        options: ["Cybersecurity", "Connect"],
      });
      return;
    }

    if (lowerText.includes("app") || lowerText.includes("software") || lowerText.includes("dev") || lowerText.includes("code") || lowerText.includes("mobile") || lowerText.includes("android") || lowerText.includes("ios")) {
      setSelectedServices(prev => Array.from(new Set([...prev, "Application Development"])));
      addMessage({
        sender: "bot",
        text: "We develop native mobile apps (iOS & Android) and high-concurrency enterprise software. What are you building?",
        options: ["Application Development", "Mobile Development", "Connect"],
      });
      return;
    }

    addMessage({
      sender: "bot",
      text: "I'm here to help with Cybersecurity, App Development, Web Design, and Marketing. What can I do for you?",
      options: ["Cybersecurity", "App Dev", "Web Design", "Marketing", "Connect"],
    });
  };

  const processLeadGen = async (val: string) => {
    switch (currentStep) {
      case "name":
        if (!validateName(val)) { addMessage({ sender: "bot", text: "Please enter a valid name." }); return; }
        setUserData((prev) => ({ ...prev, name: val }));
        setCurrentStep("email");
        addMessage({ sender: "bot", text: `Hi ${val}! What is your email address?` });
        break;
      case "email":
        if (!validateEmail(val)) { addMessage({ sender: "bot", text: "Please enter a valid email." }); return; }
        setUserData((prev) => ({ ...prev, email: val }));
        setCurrentStep("phone");
        addMessage({ sender: "bot", text: "Great! And your phone number?" });
        break;
      case "phone":
        if (!validatePhone(val)) { addMessage({ sender: "bot", text: "Please enter a valid number." }); return; }
        const finalData = { ...userData, phone: val, message: selectedServices.join(", ") || "General Interest" };
        setUserData(finalData);
        setIsTyping(true);
        
        // Simulate lead submission client-side
        const result = await new Promise<{ success: boolean }>((resolve) => {
          setTimeout(() => {
            resolve({ success: true });
          }, 1500);
        });

        setIsTyping(false);
        if (result.success) {
          setCurrentStep("done");
          addMessage({ 
            sender: "bot", 
            text: "Thank you! Your inquiry has been sent to our team. We will connect you shortly.",
            options: ["Start New Chat"]
          });
        } else {
          addMessage({ sender: "bot", text: "Oops, something went wrong. Could you please try again or contact us via phone?" });
        }
        break;
      case "done":
        if (val.toLowerCase().includes("new chat") || val.toLowerCase().includes("start")) {
          setMode("chat");
          setCurrentStep("name");
          setSelectedServices([]);
          setMessages([{
            id: "1",
            sender: "bot",
            text: "Hi! I'm the DIGINET AI.\n\nAsk me about Cybersecurity, Software Development, Web Design, or Digital Marketing.",
            options: ["Cybersecurity", "App Dev", "Web Design", "Marketing", "Connect"],
          }]);
        } else {
          addMessage({ sender: "bot", text: "We have received your inquiry. Thank you!" });
        }
        break;
    }
  };

  const processInput = (text: string) => {
    setIsTyping(false);
    const val = text.trim();
    if (mode === "chat") generateAIResponse(val);
    else processLeadGen(val);
  };

  const handleOptionClick = (option: string) => handleSend(option);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="fixed bottom-[80px] left-4 right-4 sm:left-auto sm:bottom-[100px] sm:right-6 z-[9999] w-auto sm:w-[340px] md:w-[380px] max-w-[calc(100vw-2rem)] h-[70dvh] sm:h-[32rem] md:h-[36rem] max-h-[650px] flex flex-col rounded-3xl bg-slate-950/90 backdrop-blur-xl border border-slate-800/80 shadow-[0_25px_60px_rgba(15,23,42,0.3)] overflow-hidden font-sans text-white"
          >
            {/* Cybernetic Aura Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[-10%] left-[-20%] w-[160px] h-[160px] bg-sky-400/5 rounded-full blur-[65px]" />
              <div className="absolute bottom-[-10%] right-[-20%] w-[180px] h-[180px] bg-orange-400/5 rounded-full blur-[80px]" />
            </div>

            {/* Header - Compact High Tech Glass */}
            <div className="relative p-4 flex justify-between items-center bg-slate-900/60 backdrop-blur-md border-b border-slate-800/60 z-10">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center">
                  <AnimatedBot isSpeaking={isTyping} className="w-10 h-10" expression={currentExpression} />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-950 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-100 tracking-tight leading-none mb-1">DIGINET AI</h3>
                  <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest leading-none">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 border border-slate-850 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
            
            {/* Chat Area */}
            <div className="relative flex-1 overflow-y-auto p-4 space-y-4 bg-transparent z-10 scrollbar-hide">
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} items-end gap-2`}
                >
                  <div
                    className={`px-4 py-2.5 text-sm leading-relaxed font-semibold ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl rounded-tr-sm shadow-sm"
                        : "bg-slate-850 border border-slate-800 text-slate-100 rounded-2xl rounded-tl-sm shadow-sm"
                    }`}
                    style={{ maxWidth: '88%' }}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start items-end gap-2">
                  <div className="px-4 py-3 bg-slate-850 border border-slate-800 rounded-2xl rounded-tl-sm flex items-center">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <div 
                          key={i} 
                          className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce" 
                          style={{ animationDelay: `${i * 0.15}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {!isTyping && messages[messages.length - 1]?.options && messages[messages.length - 1].sender === "bot" && (
                <div className="flex flex-wrap gap-2 mt-2 z-10 relative">
                  {messages[messages.length - 1].options?.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(opt)}
                      className="text-xs font-bold bg-slate-800/50 border border-slate-700/80 hover:border-orange-500/50 hover:bg-orange-500 hover:text-white text-slate-200 px-3.5 py-2 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input - Compact Glass */}
            <div className="relative p-3 bg-slate-900/80 backdrop-blur-md border-t border-slate-800/60 z-10">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }} className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isTyping}
                  placeholder="Type a message..."
                  className="w-full pl-4 pr-12 py-3 bg-slate-950 border border-slate-800 rounded-full text-xs sm:text-sm font-semibold focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 text-slate-100 placeholder-slate-500 transition-all"
                />
                <button 
                  type="submit" 
                  disabled={!inputValue.trim() || isTyping} 
                  className="absolute right-1.5 top-1.5 w-9 h-9 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center disabled:opacity-30 transition-transform active:scale-90 shadow-sm cursor-pointer"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[10000] flex items-center justify-end">
        {/* Periodic Speak Message Bubble */}
        <AnimatePresence>
          {bubbleText && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20, y: "-50%" }}
              animate={{ opacity: 1, scale: 1, x: 0, y: "-50%" }}
              exit={{ opacity: 0, scale: 0.8, x: 20, y: "-50%" }}
              className="absolute right-[112px] sm:right-[132px] top-1/2 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-[0_8px_25px_rgba(15,23,42,0.08)] px-4 py-2.5 rounded-2xl rounded-br-none text-slate-800 text-xs sm:text-sm font-bold whitespace-nowrap z-[10001] pointer-events-none select-none"
            >
              {bubbleText}
              {/* Tooltip Arrow pointing to the Chatbot trigger button */}
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-b border-slate-200/80 rotate-[-45deg] z-[10002]" />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center transition-all duration-500 hover:scale-110 focus:outline-none rounded-full relative cursor-pointer ${
            isOpen 
              ? "w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] bg-slate-900 border border-slate-800 shadow-lg" 
              : "w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] bg-transparent border-transparent"
          }`}
        >
          {isOpen ? (
            <X size={24} className="text-slate-400 hover:text-white" />
          ) : (
            <div className="relative flex items-center justify-center w-[84px] h-[84px] sm:w-[102px] sm:h-[102px] p-0">
              <AnimatedBot isSpeaking={isTriggerSpeaking} className="w-full h-full" animate={true} expression={bubbleExpression} />
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)] z-20"></span>
            </div>
          )}
        </button>
      </div>
    </>
  );
}
