import React from "react";

interface BrandItem {
  name: string;
  sub: string;
  svg: React.ReactNode;
}

const brands: BrandItem[] = [
  {
    name: "apex",
    sub: "SYSTEMS",
    svg: (
      <svg className="h-5 w-5 text-rose-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2L2 22h20L12 2z" />
        <path d="M12 8l-6 10h12l-6-10z" />
      </svg>
    )
  },
  {
    name: "NEXORA",
    sub: "TECHNOLOGIES",
    svg: (
      <svg className="h-5 w-5 text-accent-blue shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M9 17V7l6 10V7" />
      </svg>
    )
  },
  {
    name: "BrightLine",
    sub: "SYSTEMS",
    svg: (
      <svg className="h-5.5 w-5.5 text-accent-blue shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    )
  },
  {
    name: "CloudWave",
    sub: "SOLUTIONS",
    svg: (
      <svg className="h-5.5 w-5.5 text-accent-blue shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42 0-.82.07-1.21.2A7 7 0 0 0 2 13a4.5 4.5 0 0 0 4.5 4.5" />
      </svg>
    )
  },
  {
    name: "PIVOT",
    sub: "DIGITAL",
    svg: (
      <svg className="h-5.5 w-5.5 text-accent-blue shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M4 12h16M12 4l8 8-8 8" />
      </svg>
    )
  },
  {
    name: "VORTEX",
    sub: "MEDIA",
    svg: (
      <svg className="h-5.5 w-5.5 text-purple-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 6a6 6 0 1 0 6 6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  },
  {
    name: "ZENITH",
    sub: "LABS",
    svg: (
      <svg className="h-5.5 w-5.5 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 3l8 4v10l-8 4-8-4V7l8-4z" />
        <path d="M12 3v18M12 12h8M12 12H4" />
      </svg>
    )
  },
  {
    name: "QUANTUM",
    sub: "TECH",
    svg: (
      <svg className="h-5.5 w-5.5 text-cyan-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  },
  {
    name: "STELLAR",
    sub: "GLOBAL",
    svg: (
      <svg className="h-5.5 w-5.5 text-amber-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    )
  },
  {
    name: "NOVUS",
    sub: "ANALYTICS",
    svg: (
      <svg className="h-5.5 w-5.5 text-indigo-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    )
  }
];

export default function ClientLogos() {
  return (
    <div className="relative w-full z-20 px-6 md:px-10">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Overlapping Card - half in dark hero, half in light services section */}
      <div className="max-w-[1280px] mx-auto bg-white border border-slate-100 rounded-2xl md:rounded-[20px] shadow-xl shadow-slate-900/5 py-8 md:py-10 -mt-14 md:-mt-16 relative overflow-hidden">
        
        {/* Side fading gradient masks for premium entry/exit */}
        <div className="absolute top-0 bottom-0 left-0 w-12 md:w-24 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10 rounded-l-2xl md:rounded-l-[20px]" />
        <div className="absolute top-0 bottom-0 right-0 w-12 md:w-24 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10 rounded-r-2xl md:rounded-r-[20px]" />

        <div className="text-center mb-6 px-8">
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            Trusted by Industry Leaders Worldwide
          </p>
        </div>

        {/* Logos Marquee Container */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee-track">
            
            {/* Set 1 */}
            <div className="flex items-center gap-12 md:gap-16 pr-12 md:pr-16 shrink-0">
              {brands.map((brand, idx) => (
                <div
                  key={`brand-1-${idx}`}
                  className="flex items-center gap-2.5 text-slate-400 font-poppins font-extrabold text-base md:text-lg tracking-tight hover:text-slate-800 transition-colors select-none cursor-default shrink-0"
                >
                  {brand.svg}
                  <div className="flex flex-col leading-none">
                    <span className="text-base md:text-lg font-extrabold">{brand.name}</span>
                    <span className="text-[7px] font-semibold text-slate-400 tracking-[0.12em] uppercase">{brand.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Set 2 (Duplicate for Seamless Loop) */}
            <div className="flex items-center gap-12 md:gap-16 pr-12 md:pr-16 shrink-0">
              {brands.map((brand, idx) => (
                <div
                  key={`brand-2-${idx}`}
                  className="flex items-center gap-2.5 text-slate-400 font-poppins font-extrabold text-base md:text-lg tracking-tight hover:text-slate-800 transition-colors select-none cursor-default shrink-0"
                >
                  {brand.svg}
                  <div className="flex flex-col leading-none">
                    <span className="text-base md:text-lg font-extrabold">{brand.name}</span>
                    <span className="text-[7px] font-semibold text-slate-400 tracking-[0.12em] uppercase">{brand.sub}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
