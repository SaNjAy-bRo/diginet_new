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
type LeadStep = "name" | "company" | "email" | "phone" | "budget" | "timeline" | "message" | "done";

// Services definitions for DIGINET
const services = {
  "cybersecurity": {
    slug: "cybersecurity",
    title: "Cybersecurity & Zero-Trust Engineering",
    heroSubtitle: "Enterprise Zero-Trust networks, cloud firewall configurations, micro-segmentation, active threat isolation, and rigorous penetration audits aligning with GDPR/DPDPA standards."
  },
  "website-designing": {
    slug: "website-designing",
    title: "Web Architecture & Conversions",
    heroSubtitle: "High-conversion web platforms featuring fluid Framer Motion micro-animations, Tailwind custom styling layouts, optimized script execution, and guaranteed 95+ PageSpeed scores."
  },
  "mobile-development": {
    slug: "mobile-development",
    title: "Native & Hybrid Mobile Apps",
    heroSubtitle: "Custom iOS & Android mobile applications engineered using Swift/Kotlin or high-performance cross-platform SDKs (React Native, Flutter) with native biometrics and offline sync."
  },
  "application-development": {
    slug: "application-development",
    title: "Enterprise Software & Cloud Systems",
    heroSubtitle: "Scalable backend services, custom SaaS development, high-concurrency database setups, APIs integration, and cloud migrations (AWS, GCP, Azure)."
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "PPC Growth & Acquisition Marketing",
    heroSubtitle: "Data-driven performance campaigns across Google, Meta, and LinkedIn with continuous A/B landing page optimization, telemetry analytics tracking, and advanced technical SEO campaigns."
  },
  "social-media-management": {
    slug: "social-media-management",
    title: "Corporate Thought Leadership & Content",
    heroSubtitle: "Comprehensive B2B content strategies, executive thought leadership positioning, and professional social media management to maximize company market share."
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
      { text: "Need corporate IT help?", expression: "focused" as const },
      { text: "Consult our engineering AI!", expression: "happy" as const },
      { text: "Let's align your systems!", expression: "excited" as const },
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
      text: "Welcome to DIGINET Enterprise Portal. I am your Solutions Assistant.\n\nI can provide details on Cybersecurity, Web Architecture, App Engineering, PPC Growth Marketing, or connect you with our engineering desks.",
      options: ["Cybersecurity", "App Eng", "Web Design", "Marketing", "Consultation"],
    },
  ]);
  
  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: "",
    timeline: "",
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
  const validateCompany = (comp: string) => comp.trim().length >= 2;
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,10}$/im;
    return phoneRegex.test(phone.trim());
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    addMessage({ sender: "user", text });
    setInputValue("");
    setIsTyping(true);
    setTimeout(() => processInput(text), 1000 + Math.random() * 800); 
  };

  const generateAIResponse = (text: string) => {
    const lowerText = text.toLowerCase();
    
    // Greetings
    if (/^(hi|hello|hey|greetings)\b/.test(lowerText)) {
      addMessage({
        sender: "bot",
        text: "Hello! How can I assist you with DIGINET capabilities today?",
        options: ["Cybersecurity", "App Eng", "Web Design", "Marketing", "Consultation"],
      });
      return;
    }

    // Contact & Address Info
    if (lowerText.includes("address") || lowerText.includes("location") || lowerText.includes("office") || lowerText.includes("where")) {
      addMessage({
        sender: "bot",
        text: "Our physical locations are:\n\n🇸🇬 **Global HQ**: 7 Temasek Boulevard, #12-07, Suntec Tower 1, Singapore 038987\n\n🇮🇳 **India Branch**: 2nd Floor, Business Bay Centre, Udupi–Manipal Highway, Kunjibettu, Udupi, Karnataka 576102, India\n\nWould you like to schedule an engineering consultation?",
        options: ["Request Consultation", "Main Menu"],
      });
      return;
    }

    if (lowerText.includes("contact") || lowerText.includes("phone") || lowerText.includes("email") || lowerText.includes("number")) {
      addMessage({
        sender: "bot",
        text: "Contact Channels:\n\n🇸🇬 **Singapore HQ Tel**: +65 6460 4000\n🇮🇳 **India Branch Tel**: +91 99863 89444\n📧 **Corporate Mail**: info@diginet.sg\n\nWould you like to initiate a structured inquiry?",
        options: ["Inquire Now", "Main Menu"],
      });
      return;
    }

    // Lead Gen Triggers
    if (lowerText.includes("consultation") || lowerText.includes("connect") || lowerText.includes("schedule") || lowerText.includes("inquire") || lowerText === "yes, connect" || lowerText === "connect now") {
      setMode("lead_gen");
      setCurrentStep("name");
      addMessage({ sender: "bot", text: "Excellent. Let's capture your project requirements. What is your full name?" });
      return;
    }

    // Reset / Main Menu
    if (lowerText.includes("main menu") || lowerText.includes("other services") || lowerText.includes("start over")) {
      addMessage({
        sender: "bot",
        text: "What domain of DIGINET solutions would you like to review?",
        options: ["Cybersecurity", "App Eng", "Web Design", "Marketing", "Consultation"],
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
        text: `**${matchedService.title}**\n\n${matchedService.heroSubtitle}\n\nWould you like to schedule a session with our solutions architects?`,
        options: ["Yes, connect", "Other services"],
      });
      return;
    }

    // --- BROAD CATEGORY CHECKS ---
    if (lowerText.includes("web") || lowerText.includes("site") || lowerText.includes("design")) {
      setSelectedServices(prev => Array.from(new Set([...prev, "Website Designing"])));
      addMessage({
        sender: "bot",
        text: "We design and deploy premium corporate web layouts with optimized Core Web Vitals (Framer Motion, Tailwind, 95+ PageSpeed scores). Do you need a design build or site audit?",
        options: ["Website Designing", "Consultation"],
      });
      return;
    }

    if (lowerText.includes("marketing") || lowerText.includes("ads") || lowerText.includes("seo") || lowerText.includes("social")) {
      setSelectedServices(prev => Array.from(new Set([...prev, "Digital Marketing"])));
      addMessage({
        sender: "bot",
        text: "Our marketing desks run campaigns across search and social channels, integrating full user heatmaps and structured SEO audits to increase lead generation. Which specific service fits your objective?",
        options: ["Digital Marketing", "Social Media Management", "Consultation"],
      });
      return;
    }

    if (lowerText.includes("security") || lowerText.includes("cyber") || lowerText.includes("firewall") || lowerText.includes("compliance")) {
      setSelectedServices(prev => Array.from(new Set([...prev, "Cybersecurity"])));
      addMessage({
        sender: "bot",
        text: "We build zero-trust corporate environments, isolate cloud resources, and run automated intrusion tests. Would you like to review your organization's security posture?",
        options: ["Cybersecurity", "Consultation"],
      });
      return;
    }

    if (lowerText.includes("app") || lowerText.includes("software") || lowerText.includes("dev") || lowerText.includes("code") || lowerText.includes("mobile") || lowerText.includes("android") || lowerText.includes("ios") || lowerText.includes("backend")) {
      setSelectedServices(prev => Array.from(new Set([...prev, "Application Development"])));
      addMessage({
        sender: "bot",
        text: "We build native/hybrid mobile apps (React Native, Flutter) and enterprise backend software with distributed database configurations. What are your architectural requirements?",
        options: ["Application Development", "Mobile Development", "Consultation"],
      });
      return;
    }

    addMessage({
      sender: "bot",
      text: "I am trained to support queries on Cybersecurity, Enterprise App Engineering, Custom Web Architectures, and B2B PPC Marketing. How would you like to proceed?",
      options: ["Cybersecurity", "App Eng", "Web Design", "Marketing", "Consultation"],
    });
  };

  const processLeadGen = async (val: string) => {
    switch (currentStep) {
      case "name":
        if (!validateName(val)) { addMessage({ sender: "bot", text: "Please enter a valid name (at least 2 characters)." }); return; }
        setUserData((prev) => ({ ...prev, name: val }));
        setCurrentStep("company");
        addMessage({ sender: "bot", text: `Pleasure meeting you, ${val}. Which organization or company are you representing?` });
        break;
      case "company":
        if (!validateCompany(val)) { addMessage({ sender: "bot", text: "Please enter a valid company name." }); return; }
        setUserData((prev) => ({ ...prev, company: val }));
        setCurrentStep("email");
        addMessage({ sender: "bot", text: "Thanks! What is your corporate email address?" });
        break;
      case "email":
        if (!validateEmail(val)) { addMessage({ sender: "bot", text: "Please enter a valid corporate email format." }); return; }
        setUserData((prev) => ({ ...prev, email: val }));
        setCurrentStep("phone");
        addMessage({ sender: "bot", text: "Understood. What phone number (including country code) should our engineering desk use to contact you?" });
        break;
      case "phone":
        if (!validatePhone(val)) { addMessage({ sender: "bot", text: "Please enter a valid telephone format." }); return; }
        setUserData((prev) => ({ ...prev, phone: val }));
        setCurrentStep("budget");
        addMessage({ 
          sender: "bot", 
          text: "Perfect. What is your estimated project budget?",
          options: ["< $10,000", "$10,000 - $50,000", "$50,000 - $100,000", "$100,000+"]
        });
        break;
      case "budget":
        setUserData((prev) => ({ ...prev, budget: val }));
        setCurrentStep("timeline");
        addMessage({ 
          sender: "bot", 
          text: "Excellent. What is your target timeline for this project?",
          options: ["Immediate (within 30 days)", "Short Term (1 - 3 months)", "Planning & Research"]
        });
        break;
      case "timeline":
        setUserData((prev) => ({ ...prev, timeline: val }));
        setCurrentStep("message");
        addMessage({ sender: "bot", text: "Lastly, please write a brief description of your key challenges or technical goals:" });
        break;
      case "message":
        const finalData = { ...userData, message: val };
        setUserData(finalData);
        setIsTyping(true);
        
        // Simulate corporate lead submission API client-side
        const result = await new Promise<{ success: boolean }>((resolve) => {
          setTimeout(() => {
            resolve({ success: true });
          }, 1800);
        });

        setIsTyping(false);
        if (result.success) {
          setCurrentStep("done");
          addMessage({ 
            sender: "bot", 
            text: `Thank you, ${userData.name}.\n\nYour inquiry has been logged successfully under ${userData.company}.\n\nBudget: ${userData.budget}\nTimeline: ${val}\n\nA Senior Solutions Architect will coordinate with you via ${userData.email} or call you at ${userData.phone} within 2 business hours.`,
            options: ["Start New Session"]
          });
        } else {
          addMessage({ sender: "bot", text: "Submission pipeline encountered an exception. Please contact our corporate desk directly." });
        }
        break;
      case "done":
        if (val.toLowerCase().includes("session") || val.toLowerCase().includes("start") || val.toLowerCase().includes("new")) {
          setMode("chat");
          setCurrentStep("name");
          setSelectedServices([]);
          setMessages([{
            id: "1",
            sender: "bot",
            text: "Welcome to DIGINET Enterprise Portal. I am your Solutions Assistant.\n\nI can provide details on Cybersecurity, Web Architecture, App Engineering, PPC Growth Marketing, or connect you with our engineering desks.",
            options: ["Cybersecurity", "App Eng", "Web Design", "Marketing", "Consultation"],
          }]);
        } else {
          addMessage({ sender: "bot", text: "Our solutions desks are currently reviewing your parameters. Thank you!" });
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
                  <h3 className="font-bold text-sm text-slate-100 tracking-tight leading-none mb-1">DIGINET Architect AI</h3>
                  <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest leading-none">Enterprise Consultation Desk</p>
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
                  placeholder={mode === "lead_gen" ? "Enter details here..." : "Ask the Solutions Assistant..."}
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
