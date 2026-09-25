"use client";

import React from "react";
import { ShieldCheck, Sparkles, FlaskConical, Leaf, Award, CheckCircle } from "lucide-react";

export function TrustRibbon() {
  const items = [
    {
      icon: ShieldCheck,
      text: "100% Clean Label Certified",
    },
    {
      icon: Sparkles,
      text: "Bio-Timed Circadian Delivery",
    },
    {
      icon: FlaskConical,
      text: "ISO-17025 Third-Party Tested",
    },
    {
      icon: Leaf,
      text: "Zero Chemical Binders or Fillers",
    },
    {
      icon: Award,
      text: "High-Absorption Chelated Minerals",
    },
    {
      icon: CheckCircle,
      text: "30-Day Risk-Free Money Back Guarantee",
    },
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-[#152e1f] text-white py-3.5 border-y border-black/15 shadow-sm relative z-20 select-none">
      <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
        {marqueeItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 text-xs tracking-wider font-semibold text-white/90 uppercase"
            >
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-emerald-300 shrink-0 border border-white/10">
                <IconComponent className="w-3.5 h-3.5" />
              </div>
              <span>{item.text}</span>
              <span className="text-white/30 text-sm ml-6">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
