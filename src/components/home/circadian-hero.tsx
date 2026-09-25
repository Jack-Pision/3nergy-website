"use client";

import React from "react";
import Link from "next/link";
import { useCircadianStore } from "@/store/circadian-store";
import { PRODUCTS } from "@/data/products";
import { ArrowUpRight, Sparkles, Star, ShieldCheck, Clock, Zap, Activity } from "lucide-react";
import { ChronoBottle } from "@/components/visuals/chrono-bottle";

export function CircadianHero() {
  const { phase, setPhase, virtualTime, addToCart, openQuiz } =
    useCircadianStore();

  const activeProduct =
    PRODUCTS.find((p) => p.phase === phase) || PRODUCTS[0];

  return (
    <section className="relative w-full pt-8 pb-20 px-4 sm:px-8 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Hero Card Container with Dynamic Ambient Phase Glow */}
        <div className="relative rounded-[2.5rem] glass-panel-elevated p-6 sm:p-12 lg:p-16 border border-white/15 overflow-hidden shadow-2xl transition-all duration-700">
          
          {/* Subtle Ambient Background Gradient Burst */}
          <div className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-phase opacity-20 rounded-full blur-[120px] pointer-events-none transition-all duration-700" />
          <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-phase opacity-15 rounded-full blur-[100px] pointer-events-none transition-all duration-700" />

          {/* Top Status & Social Proof Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 relative z-10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-mono text-white/80">
                <strong>4.98 / 5.0</strong> Chrono-Rating
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-xs font-mono text-white/50 hidden sm:inline">
                Over 12,400 Diurnal Protocols Active
              </span>
            </div>

            {/* Time of Day Phase Badge */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-phase animate-pulse" />
              <span className="text-white/60">ACTIVE PROTOCOL:</span>
              <span className="text-phase font-semibold">{activeProduct.name}</span>
              <span className="text-white/40">[{activeProduct.timeWindow}]</span>
            </div>
          </div>

          {/* Massive Sculptural Split Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 mb-10">
            <div className="lg:col-span-8">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.95] uppercase">
                Cellular Energy. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-phase">
                  Work Excellent.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-white/70 text-sm sm:text-base leading-relaxed font-sans border-l-2 border-phase/50 pl-4">
                Clean, science-backed chrono-nutrition engineered to sustain your mitochondrial ATP, neuro-focus, and deep delta recovery—without stimulant crashes or synthetic additives.
              </p>
            </div>
          </div>

          {/* Center Stage: Interactive Product & Circadian Dial Viewport */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 my-4">
            
            {/* Left: Product Deep Specs & Quick Actions */}
            <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
              <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-phase">
                  <span>{activeProduct.phaseNumber} {"//"} CURRENT PROTOCOL</span>
                  <span>{activeProduct.timeWindow}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {activeProduct.name}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  {activeProduct.description}
                </p>

                {/* Key Bio-Benefits */}
                <ul className="space-y-1.5 pt-2 text-xs text-white/80 font-sans">
                  {activeProduct.keyBenefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-phase" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-white/40 block">SINGLE PROTOCOL</span>
                    <span className="font-mono text-lg font-bold text-white">${activeProduct.price}</span>
                    <span className="text-[11px] text-white/50 font-mono ml-1">/ 30-Day</span>
                  </div>
                  <button
                    onClick={() => addToCart(activeProduct, 1, "30-day")}
                    className="px-5 py-2.5 rounded-full bg-phase text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-1.5 shadow-lg active:scale-95"
                  >
                    <span>Add to Routine</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Clinical Certification Badge */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs">
                <ShieldCheck className="w-5 h-5 text-phase shrink-0" />
                <div className="text-[11px] text-white/70">
                  <strong>Third-Party Certified:</strong> HPLC Purity Verified & Informed Sport Cleared (&lt;0.01ppm).
                </div>
              </div>
            </div>

            {/* Center: The High-Fidelity ChronoBottle Render (Anti-Slop, Clean, Grounded) */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center relative py-6">
              <div className="relative group transition-transform duration-500 hover:scale-[1.02]">
                
                {/* Clean, Grounded Vector-Crafted Luxury Bottle */}
                <ChronoBottle
                  phase={phase}
                  size="hero"
                  showRestingCapsules={true}
                />

                {/* Floating Bio-Metric Chip */}
                <div className="absolute bottom-6 left-2 sm:-left-8 glass-panel px-3.5 py-2 rounded-2xl border border-white/15 shadow-xl z-20 flex items-center gap-2.5 animate-bounce-subtle">
                  <Activity className="w-4 h-4 text-phase" />
                  <div className="text-[10px] font-mono leading-tight">
                    <span className="text-white/40 block">BIOAVAILABILITY</span>
                    <span className="text-white font-bold">94.6% Uptake (&lt;18 min)</span>
                  </div>
                </div>

                {/* Floating Dosage Chip */}
                <div className="absolute top-6 right-2 sm:-right-8 glass-panel px-3.5 py-2 rounded-2xl border border-white/15 shadow-xl z-20 flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-phase" />
                  <div className="text-[10px] font-mono leading-tight">
                    <span className="text-white/40 block">DOSAGE TIMING</span>
                    <span className="text-white font-bold">{activeProduct.dailyDosage}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Tri-Phase System Selector & Chrono-Dial */}
            <div className="lg:col-span-3 space-y-4 order-3">
              <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-white/50">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-phase" />
                    CHRONO-DIAL
                  </span>
                  <span>{virtualTime}</span>
                </div>

                {/* Phase Selection Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => setPhase("dawn")}
                    className={`w-full p-3 rounded-xl text-left border transition-all text-xs flex items-center justify-between ${
                      phase === "dawn"
                        ? "bg-[#f59e0b]/20 border-[#f59e0b] text-[#fef3c7] font-semibold"
                        : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                    }`}
                  >
                    <span>01 // DAWN RISE</span>
                    <span className="font-mono text-[10px] text-[#f59e0b]">06:00 AM</span>
                  </button>

                  <button
                    onClick={() => setPhase("zenith")}
                    className={`w-full p-3 rounded-xl text-left border transition-all text-xs flex items-center justify-between ${
                      phase === "zenith"
                        ? "bg-[#10b981]/20 border-[#10b981] text-[#d1fae5] font-semibold"
                        : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                    }`}
                  >
                    <span>02 // ZENITH FLOW</span>
                    <span className="font-mono text-[10px] text-[#10b981]">02:00 PM</span>
                  </button>

                  <button
                    onClick={() => setPhase("restore")}
                    className={`w-full p-3 rounded-xl text-left border transition-all text-xs flex items-center justify-between ${
                      phase === "restore"
                        ? "bg-[#6366f1]/20 border-[#6366f1] text-[#e0e7ff] font-semibold"
                        : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                    }`}
                  >
                    <span>03 // RESTORE PRIME</span>
                    <span className="font-mono text-[10px] text-[#6366f1]">09:00 PM</span>
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    onClick={openQuiz}
                    className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-phase" />
                    <span>Find My Exact Rhythm</span>
                  </button>
                </div>
              </div>

              {/* Complete 24H Bundle Card Teaser */}
              <div className="glass-panel p-4 rounded-2xl border border-white/10 bg-phase/5 space-y-2">
                <span className="text-[10px] font-mono text-phase uppercase tracking-wider block">
                  FULL PROTOCOL BUNDLE
                </span>
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-sm text-white">24H Tri-System</h4>
                  <div className="text-right">
                    <span className="text-xs line-through text-white/40 font-mono mr-1.5">$146</span>
                    <span className="text-sm font-bold font-mono text-phase">$118</span>
                  </div>
                </div>
                <Link
                  href="/shop"
                  className="w-full py-2 rounded-lg bg-white text-black font-semibold text-[11px] uppercase tracking-wider hover:bg-phase hover:text-black transition-colors flex items-center justify-center gap-1"
                >
                  <span>Configure Protocol</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

          {/* Bottom CTAs and Quick Links */}
          <div className="pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/shop"
                className="px-6 py-3.5 rounded-full bg-phase text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2 shadow-xl"
              >
                <span>Shop All 3 Protocols</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/science"
                className="px-6 py-3.5 rounded-full glass-pill hover:bg-white/10 text-white font-medium text-xs tracking-wider transition-colors border border-white/10 flex items-center gap-2"
              >
                <span>Read Clinical Dossier</span>
                <ArrowUpRight className="w-4 h-4 text-white/50" />
              </Link>
            </div>

            <div className="flex items-center gap-6 text-xs font-mono text-white/50">
              <span>• Zero Caffeine Jitters</span>
              <span>• Non-Habit Forming</span>
              <span>• 30-Day Money Back</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
