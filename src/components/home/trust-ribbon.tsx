"use client";

import React from "react";
// Bespoke clinical & biochemical iconography — zero AI-slop stock icons
function CleanLabelIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21" strokeOpacity="0.4" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  );
}

function CircadianIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      {/* 24-hour diurnal chronobiology curve */}
      <path d="M4.5 12c2.2-3.5 5.3-3.5 7.5 0s5.3 3.5 7.5 0" />
      <circle cx="8.2" cy="7.8" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IsoLabIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Analytical laboratory volumetric flask */}
      <path d="M10 2.5h4M10 2.5v5.5L4.8 17.2A2.5 2.5 0 0 0 7 21h10a2.5 2.5 0 0 0 2.2-3.8L14 8V2.5" />
      <path d="M8.5 14h3M9 11h2M8 17h4.5" strokeOpacity="0.75" />
    </svg>
  );
}

function BotanicalPurityIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Pure botanical sprig without chemical binders */}
      <path d="M12 21.5V5.5" />
      <path d="M12 5.5c0-2.8 2-4.5 4.8-4.5 0 2.4-1.4 4.5-4.8 4.5z" />
      <path d="M12 10.5c0-2.5-2-4-4.8-4 0 2 1.4 4 4.8 4z" />
      <path d="M12 15c0-2 1.8-3.5 4.2-3.5 0 1.8-1.2 3.5-4.2 3.5z" />
    </svg>
  );
}

function ChelateMineralIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Hexagonal molecular coordination chelate ring */}
      <polygon points="12,2.5 19.8,7 19.8,16 12,20.5 4.2,16 4.2,7" />
      {/* Coordinate bond links converging to mineral ion */}
      <line x1="12" y1="2.5" x2="12" y2="8.8" />
      <line x1="19.8" y1="16" x2="14.5" y2="13.2" />
      <line x1="4.2" y1="16" x2="9.5" y2="13.2" />
      {/* Central chelated mineral atom */}
      <circle cx="12" cy="11.5" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GuaranteeAssuranceIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Circular return & assurance cycle */}
      <path d="M21 12a9 9 0 1 1-2.6-6.4L21 8" />
      <path d="M21 3v5h-5" />
      <path d="m8.5 12 2.5 2.5 4.5-4.5" />
    </svg>
  );
}

export function TrustRibbon() {
  const items = [
    {
      icon: CleanLabelIcon,
      text: "100% Clean Label Certified",
    },
    {
      icon: CircadianIcon,
      text: "Bio-Timed Circadian Delivery",
    },
    {
      icon: IsoLabIcon,
      text: "ISO-17025 Third-Party Tested",
    },
    {
      icon: BotanicalPurityIcon,
      text: "Zero Chemical Binders or Fillers",
    },
    {
      icon: ChelateMineralIcon,
      text: "High-Absorption Chelated Minerals",
    },
    {
      icon: GuaranteeAssuranceIcon,
      text: "30-Day Risk-Free Money Back Guarantee",
    },
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-[#152e1f] text-white py-3 border-y border-black/15 shadow-sm relative z-20 select-none">
      <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
        {marqueeItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2.5 text-xs tracking-wider font-semibold text-white/90 uppercase"
            >
              <IconComponent className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>{item.text}</span>
              <span className="text-white/25 text-xs ml-7">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
