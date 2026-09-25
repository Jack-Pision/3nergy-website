"use client";

import React from "react";
import { CircadianPhase } from "@/types";

interface ChronoBottleProps {
  phase: CircadianPhase;
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
  // Dimension scales
  const scales = {
    sm: { width: 140, height: 210, fontSize: "text-[9px]" },
    md: { width: 220, height: 320, fontSize: "text-[11px]" },
    lg: { width: 280, height: 400, fontSize: "text-xs" },
    hero: { width: 340, height: 480, fontSize: "text-sm" },
  };

  const currentScale = scales[size];

  // Phase-specific configurations
  const config = {
    dawn: {
      number: "01",
      name: "DAWN RISE",
      subtitle: "MITOCHONDRIAL ATP OXIDATION",
      badge: "DAYBREAK FORMULATION",
      capsuleText: "120 VEGAN CAPSULES",
      activeBio: "UBIQUINOL + CORDYCEPS",
      accent: "#f59e0b",
      accentRgb: "245, 158, 11",
      capGradient: "linear-gradient(135deg, #fcd34d 0%, #b45309 35%, #78350f 70%, #d97706 100%)",
      capSheen: "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 30%, rgba(0,0,0,0.5) 70%, rgba(255,255,255,0.2) 100%)",
      glowColor: "rgba(245, 158, 11, 0.25)",
      capsuleFill: "linear-gradient(135deg, rgba(251, 191, 36, 0.9) 0%, rgba(180, 83, 9, 0.9) 100%)",
    },
    zenith: {
      number: "02",
      name: "ZENITH FLOW",
      subtitle: "NEURO-COGNITIVE VELOCITY",
      badge: "MIDDAY FORMULATION",
      capsuleText: "60 VEGAN CAPSULES",
      activeBio: "CITICOLINE + LION'S MANE",
      accent: "#10b981",
      accentRgb: "16, 185, 129",
      capGradient: "linear-gradient(135deg, #6ee7b7 0%, #047857 35%, #064e3b 70%, #059669 100%)",
      capSheen: "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 30%, rgba(0,0,0,0.5) 70%, rgba(255,255,255,0.2) 100%)",
      glowColor: "rgba(16, 185, 129, 0.25)",
      capsuleFill: "linear-gradient(135deg, rgba(52, 211, 153, 0.9) 0%, rgba(4, 120, 87, 0.9) 100%)",
    },
    restore: {
      number: "03",
      name: "RESTORE PRIME",
      subtitle: "GLYMPHATIC RESTORATION & SLEEP",
      badge: "NOCTURNAL FORMULATION",
      capsuleText: "60 VEGAN CAPSULES",
      activeBio: "MAGTEIN® + APIGENIN 98%",
      accent: "#818cf8",
      accentRgb: "129, 140, 248",
      capGradient: "linear-gradient(135deg, #a5b4fc 0%, #4338ca 35%, #1e1b4b 70%, #6366f1 100%)",
      capSheen: "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 30%, rgba(0,0,0,0.5) 70%, rgba(255,255,255,0.2) 100%)",
      glowColor: "rgba(99, 102, 241, 0.25)",
      capsuleFill: "linear-gradient(135deg, rgba(165, 180, 252, 0.9) 0%, rgba(67, 56, 202, 0.9) 100%)",
    },
  }[phase];

  return (
    <div
      className={`relative flex flex-col items-center justify-center select-none group ${className}`}
      style={{ width: currentScale.width, height: currentScale.height }}
    >
      {/* Dynamic Ambient Back-Glow */}
      <div
        className="absolute top-1/4 w-3/4 h-3/4 rounded-full blur-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-60 pointer-events-none"
        style={{ backgroundColor: config.accent }}
      />

      {/* Main Bottle Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-end pb-4">
        
        {/* === THE CAP (Clean, unprinted, brushed luxury metal finish) === */}
        <div className="relative w-1/2 h-[16%] flex flex-col items-center">
          {/* Cap Top Chamfer */}
          <div
            className="w-full h-2 rounded-t-lg shadow-sm"
            style={{
              background: config.capGradient,
            }}
          />
          {/* Cap Main Cylinder */}
          <div
            className="w-full flex-1 rounded-sm shadow-md relative overflow-hidden border-t border-white/30"
            style={{
              background: config.capGradient,
            }}
          >
            {/* Realistic Brushed Sheen Overlay (NO TEXT ON CAP) */}
            <div
              className="absolute inset-0 opacity-60 mix-blend-overlay"
              style={{ background: config.capSheen }}
            />
            {/* Subtle Horizontal Machined Hairline Ribs */}
            <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.5)_3px)]" />
          </div>
          {/* Deep Neck Shadow */}
          <div className="w-[88%] h-1.5 bg-[#050605] shadow-inner" />
        </div>

        {/* === THE BOTTLE BODY (Matte Dark Obsidian with silk-screened vector label) === */}
        <div
          className="relative w-4/5 h-[76%] rounded-t-3xl rounded-b-2xl shadow-2xl flex flex-col items-center overflow-hidden border border-white/10"
          style={{
            background:
              "linear-gradient(90deg, #090b0a 0%, #171b19 22%, #222825 45%, #181d1a 75%, #0b0d0c 100%)",
            boxShadow: `0 25px 45px -10px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.15), inset 1px 0 2px rgba(255,255,255,0.08)`,
          }}
        >
          {/* Subtle Glass Rim Reflection Highlight */}
          <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 left-3 w-1 bg-gradient-to-r from-white/15 to-transparent pointer-events-none" />

          {/* === BOTTLE SILK-SCREENED LABEL (Pure Razor-Sharp Vector Typography) === */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between py-5 px-4 text-center">
            
            {/* Top Brand Wordmark */}
            <div className="pt-2">
              <span className="font-display font-black text-white tracking-widest text-lg sm:text-xl block drop-shadow-md">
                3NERGY
              </span>
              <span
                className="text-[8px] font-mono tracking-widest uppercase block mt-0.5 font-semibold"
                style={{ color: config.accent }}
              >
                CHRONO-NUTRITION
              </span>
            </div>

            {/* Center Product Info */}
            <div className="space-y-1.5 my-auto">
              {/* Thin Accent Rule */}
              <div
                className="w-8 h-[1.5px] mx-auto rounded-full"
                style={{ backgroundColor: config.accent }}
              />

              <div className="font-display font-extrabold text-white tracking-tight text-sm sm:text-base leading-tight">
                {config.name}
              </div>

              <div className="text-[8px] sm:text-[9px] font-mono text-white/60 tracking-wider uppercase leading-tight max-w-[90%] mx-auto">
                {config.subtitle}
              </div>
            </div>

            {/* Bottom Dosage & Batch Registry */}
            <div className="pb-1 border-t border-white/10 pt-2 space-y-0.5 text-[8px] font-mono">
              <div className="text-white/80 font-medium">
                {config.activeBio}
              </div>
              <div className="text-white/40 tracking-wider">
                {config.capsuleText} • BATCH #2026-X
              </div>
            </div>

          </div>
        </div>

        {/* Realistic Tabletop Contact Shadow */}
        <div
          className="w-[90%] h-3 rounded-full blur-md opacity-80 mt-[-4px]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, transparent 75%)",
          }}
        />

        {/* Resting Capsules on Tabletop (Naturally placed, resting horizontally with soft contact shadows) */}
        {showRestingCapsules && (
          <div className="absolute -bottom-2 -right-4 flex items-center gap-1.5 z-20 pointer-events-none">
            {/* Capsule 1: Lying flat on surface */}
            <div className="relative w-8 h-3.5 rounded-full shadow-lg border border-white/20 overflow-hidden transform -rotate-12 bg-white/5 backdrop-blur-sm">
              <div
                className="absolute inset-0 opacity-85"
                style={{ background: config.capsuleFill }}
              />
              <div className="absolute top-0.5 inset-x-1 h-1 bg-white/40 rounded-full blur-[0.5px]" />
            </div>

            {/* Capsule 2: Resting slightly angled */}
            <div className="relative w-8 h-3.5 rounded-full shadow-lg border border-white/20 overflow-hidden transform rotate-20 translate-y-1 bg-white/5 backdrop-blur-sm">
              <div
                className="absolute inset-0 opacity-85"
                style={{ background: config.capsuleFill }}
              />
              <div className="absolute top-0.5 inset-x-1 h-1 bg-white/40 rounded-full blur-[0.5px]" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
