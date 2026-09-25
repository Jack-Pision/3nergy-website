"use client";

import React from "react";
import { ProductPhase } from "@/types";

interface ChronoBottleProps {
  phase: ProductPhase | "dawn" | "zenith" | "restore";
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  showRestingCapsules?: boolean;
}

export function ChronoBottle({
  phase,
  size = "md",
  className = "",
  showRestingCapsules = true,
}: ChronoBottleProps) {
  // Normalize phase name
  const normalizedPhase: ProductPhase =
    phase === "dawn" ? "energy" : phase === "zenith" ? "recovery" : phase === "restore" ? "rest" : phase;

  // Dimension scales
  const scales = {
    sm: { width: 140, height: 210 },
    md: { width: 220, height: 320 },
    lg: { width: 280, height: 400 },
    hero: { width: 340, height: 480 },
  };

  const currentScale = scales[size];

  // Phase-specific styling matching the 3 inspiration bottles
  const config = {
    energy: {
      number: "01",
      name: "DAILY ENERGY & FOCUS",
      subtitle: "ORGANIC MATCHA + B-COMPLEX",
      badge: "MORNING VITALITY",
      capsuleText: "60 VEGAN CAPSULES",
      activeBio: "MATCHA + COQ10 + B12",
      accent: "#2e593f",
      bottleGradient: "linear-gradient(90deg, #121814 0%, #1f2a23 30%, #29382f 50%, #1c2720 75%, #101512 100%)",
      bottleBorder: "rgba(255, 255, 255, 0.12)",
      capGradient: "linear-gradient(135deg, #b0b8b2 0%, #7d8881 35%, #5a635d 70%, #9aa39d 100%)",
      capSheen: "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 30%, rgba(0,0,0,0.3) 70%, rgba(255,255,255,0.3) 100%)",
      capsuleColor1: "linear-gradient(135deg, #3d6a4f 0%, #1a3826 100%)", // forest green
      capsuleColor2: "linear-gradient(135deg, #c47c50 0%, #7d3f1d 100%)", // copper bronze
      glowColor: "rgba(46, 89, 63, 0.15)",
    },
    recovery: {
      number: "02",
      name: "DAILY RECOVERY",
      subtitle: "TART CHERRY + ELECTROLYTES",
      badge: "POST-WORKOUT REPAIR",
      capsuleText: "60 VEGAN CAPSULES",
      activeBio: "TART CHERRY + MAGNESIUM",
      accent: "#b39263",
      bottleGradient: "linear-gradient(90deg, #c7ad89 0%, #e0ceb1 30%, #ebdcc5 50%, #d8c3a1 75%, #ba9f79 100%)",
      bottleBorder: "rgba(139, 106, 62, 0.2)",
      capGradient: "linear-gradient(135deg, #ecd8a5 0%, #c49c4f 35%, #8c6a28 70%, #dfb867 100%)",
      capSheen: "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 30%, rgba(0,0,0,0.2) 70%, rgba(255,255,255,0.4) 100%)",
      capsuleColor1: "linear-gradient(135deg, #2e593f 0%, #153420 100%)", // deep green
      capsuleColor2: "linear-gradient(135deg, #c47c50 0%, #87411c 100%)", // shiny copper
      glowColor: "rgba(180, 140, 90, 0.15)",
      isLightBottle: true,
    },
    rest: {
      number: "03",
      name: "DAILY REST & SLEEP",
      subtitle: "L-THEANINE + CHAMOMILE",
      badge: "RESTORATIVE SLEEP",
      capsuleText: "60 VEGAN CAPSULES",
      activeBio: "CHAMOMILE + MAGNESIUM",
      accent: "#8b7bb0",
      bottleGradient: "linear-gradient(90deg, #322642 0%, #4c3b61 30%, #5d4975 50%, #443457 75%, #2a2037 100%)",
      bottleBorder: "rgba(255, 255, 255, 0.12)",
      capGradient: "linear-gradient(135deg, #e3cf9d 0%, #ba9c54 35%, #80682c 70%, #d6ba6d 100%)",
      capSheen: "linear-gradient(90deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 30%, rgba(0,0,0,0.3) 70%, rgba(255,255,255,0.3) 100%)",
      capsuleColor1: "linear-gradient(135deg, #5b4b73 0%, #2f2240 100%)", // purple
      capsuleColor2: "linear-gradient(135deg, #c47c50 0%, #7d3f1d 100%)", // copper
      glowColor: "rgba(91, 75, 115, 0.18)",
    },
  }[normalizedPhase];

  const textColor = config.isLightBottle ? "text-[#3d2e1b]" : "text-white";
  const subTextColor = config.isLightBottle ? "text-[#5e492e]" : "text-white/70";
  const lineBg = config.isLightBottle ? "#8b6a3e" : "#ffffff";

  return (
    <div
      className={`relative flex flex-col items-center justify-center select-none group ${className}`}
      style={{ width: currentScale.width, height: currentScale.height }}
    >
      {/* Soft Ambient Tabletop Glow */}
      <div
        className="absolute top-1/4 w-3/4 h-3/4 rounded-full blur-2xl opacity-50 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: config.glowColor }}
      />

      {/* Main Bottle Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-end pb-4">
        
        {/* === CAP (Clean, unprinted, brushed satin luxury finish) === */}
        <div className="relative w-1/2 h-[15%] flex flex-col items-center">
          {/* Cap Top Chamfer */}
          <div
            className="w-full h-2 rounded-t-lg shadow-sm"
            style={{ background: config.capGradient }}
          />
          {/* Cap Cylinder */}
          <div
            className="w-full flex-1 rounded-sm shadow-md relative overflow-hidden border-t border-white/30"
            style={{ background: config.capGradient }}
          >
            {/* Satin Brushed Sheen (ZERO TEXT ON CAP) */}
            <div
              className="absolute inset-0 opacity-70 mix-blend-overlay"
              style={{ background: config.capSheen }}
            />
            {/* Subtle Machined Hairline Ribs */}
            <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.5)_3px)]" />
          </div>
          {/* Deep Neck Shadow */}
          <div className="w-[90%] h-1.5 bg-black/60 shadow-inner" />
        </div>

        {/* === BOTTLE BODY === */}
        <div
          className="relative w-4/5 h-[76%] rounded-t-3xl rounded-b-2xl shadow-xl flex flex-col items-center overflow-hidden"
          style={{
            background: config.bottleGradient,
            border: `1px solid ${config.bottleBorder}`,
            boxShadow: `0 20px 35px -8px rgba(0,0,0,0.25), inset 0 1px 2px rgba(255,255,255,0.2)`,
          }}
        >
          {/* Studio Reflection Highlight */}
          <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 left-3 w-1 bg-gradient-to-r from-white/15 to-transparent pointer-events-none" />

          {/* === SILK-SCREENED LABEL === */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between py-5 px-4 text-center">
            
            {/* Brand Wordmark */}
            <div className="pt-2">
              <span className={`font-display font-black tracking-widest text-lg sm:text-xl block ${textColor} drop-shadow-sm`}>
                3NERGY
              </span>
              <span
                className="text-[8px] font-mono tracking-widest uppercase block mt-0.5 font-semibold opacity-75"
                style={{ color: config.isLightBottle ? "#6d4f29" : "#a2b4a8" }}
              >
                DAILY NUTRITION
              </span>
            </div>

            {/* Center Product Title */}
            <div className="space-y-1.5 my-auto">
              <div
                className="w-7 h-[1.5px] mx-auto rounded-full opacity-60"
                style={{ backgroundColor: lineBg }}
              />

              <div className={`font-display font-extrabold tracking-tight text-xs sm:text-sm leading-tight ${textColor}`}>
                {config.name}
              </div>

              <div className={`text-[8px] sm:text-[9px] font-sans tracking-wide uppercase leading-tight max-w-[90%] mx-auto opacity-75 ${subTextColor}`}>
                {config.subtitle}
              </div>
            </div>

            {/* Bottom Capsule Count & Batch */}
            <div className="pb-1 border-t border-black/10 pt-2 space-y-0.5 text-[8px] font-mono">
              <div className={`font-medium ${textColor}`}>
                {config.activeBio}
              </div>
              <div className={`tracking-wider opacity-60 ${subTextColor}`}>
                {config.capsuleText} • BATCH #2026
              </div>
            </div>

          </div>
        </div>

        {/* Realistic Tabletop Contact Shadow */}
        <div
          className="w-[90%] h-3 rounded-full blur-md opacity-40 mt-[-4px]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 75%)",
          }}
        />

        {/* Grounded Floating / Resting Capsules */}
        {showRestingCapsules && (
          <div className="absolute -bottom-1 -right-3 flex items-center gap-1.5 z-20 pointer-events-none">
            {/* Capsule 1: Clean green */}
            <div className="relative w-8 h-3.5 rounded-full shadow-md border border-white/30 overflow-hidden transform -rotate-12">
              <div
                className="absolute inset-0"
                style={{ background: config.capsuleColor1 }}
              />
              <div className="absolute top-0.5 inset-x-1 h-1 bg-white/40 rounded-full blur-[0.5px]" />
            </div>

            {/* Capsule 2: Shiny metallic copper */}
            <div className="relative w-8 h-3.5 rounded-full shadow-md border border-white/30 overflow-hidden transform rotate-20 translate-y-1">
              <div
                className="absolute inset-0"
                style={{ background: config.capsuleColor2 }}
              />
              <div className="absolute top-0.5 inset-x-1 h-1 bg-white/50 rounded-full blur-[0.5px]" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
