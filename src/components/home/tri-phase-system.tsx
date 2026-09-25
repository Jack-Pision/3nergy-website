"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { useCircadianStore } from "@/store/circadian-store";
import { Plus, ArrowUpRight, Star, Sparkles, ShieldCheck, Check } from "lucide-react";
import { ChronoBottle } from "@/components/visuals/chrono-bottle";

export function TriPhaseSystem() {
  const { addToCart, setPhase } = useCircadianStore();

  return (
    <section className="w-full py-20 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-phase flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              THE TRIPARTITE SYSTEM
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Three Chronobiological Formulations. One Unified Rhythm.
            </h2>
          </div>
          <p className="text-white/60 text-sm max-w-md leading-relaxed">
            Each formulation is dosed for the exact cellular enzyme kinetics of that circadian window. Never take an energy stimulant at night; never take a sedative to fix morning lethargy.
          </p>
        </div>

        {/* 3 Core Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {PRODUCTS.map((product) => {
            const isDawn = product.phase === "dawn";
            const isZenith = product.phase === "zenith";

            const accentBorder = isDawn
              ? "hover:border-[#f59e0b]/50 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
              : isZenith
              ? "hover:border-[#10b981]/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
              : "hover:border-[#6366f1]/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]";

            const badgeBg = isDawn
              ? "bg-[#f59e0b]/15 text-[#f59e0b] border-[#f59e0b]/30"
              : isZenith
              ? "bg-[#10b981]/15 text-[#10b981] border-[#10b981]/30"
              : "bg-[#6366f1]/15 text-[#6366f1] border-[#6366f1]/30";

            return (
              <div
                key={product.id}
                onMouseEnter={() => setPhase(product.phase)}
                className={`group rounded-3xl glass-panel-elevated p-6 border border-white/10 transition-all duration-500 flex flex-col justify-between relative overflow-hidden ${accentBorder}`}
              >
                {/* Top Tags & Time Window */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider border ${badgeBg}`}>
                    PHASE {product.phaseNumber} // {product.timeWindow}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-mono">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                {/* Product Bottle Stage (Anti-Slop Vector-Crafted ChronoBottle) */}
                <div className="relative w-full h-80 my-2 flex items-center justify-center">
                  <ChronoBottle
                    phase={product.phase}
                    size="md"
                    showRestingCapsules={true}
                    className="transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info & Benefits */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                      {product.name}
                    </h3>
                    <span className="font-mono text-xl font-bold text-white">
                      ${product.price}
                    </span>
                  </div>

                  <p className="text-xs text-white/60 font-sans line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>

                  {/* Key Active Compounds Pill */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.compounds.slice(0, 3).map((comp, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-white/70 border border-white/5"
                      >
                        {comp.name.split(" ")[0]} ({comp.dose})
                      </span>
                    ))}
                  </div>

                  {/* Quick Action Button */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => addToCart(product, 1, "30-day")}
                      className="flex-1 py-3 rounded-full bg-white/10 hover:bg-phase hover:text-black text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Routine</span>
                    </button>
                    <Link
                      href="/science"
                      className="p-3 rounded-full glass-pill hover:bg-white/15 text-white/70 hover:text-white transition-colors"
                      title="Inspect clinical dossier"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Formulator & Provenance Banner */}
        <div className="rounded-3xl glass-panel-elevated p-8 sm:p-12 border border-white/15 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-phase flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                CLINICAL PURITY & FORMULATION STANDARDS
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                You shouldn&apos;t need a PhD in biochemistry to know what enters your bloodstream.
              </h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xl">
                Every batch of 3NERGY undergoes triple-redundant chromatography testing for pesticide residues, heavy metals, microbial assays, and active enantiomer concentration.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div>
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-phase">
                    94.6%
                  </span>
                  <span className="text-[11px] font-mono text-white/50 block mt-1">
                    Bioavailability
                  </span>
                </div>
                <div>
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#10b981]">
                    &lt; 0.01
                  </span>
                  <span className="text-[11px] font-mono text-white/50 block mt-1">
                    ppm Purity Assay
                  </span>
                </div>
                <div>
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    100%
                  </span>
                  <span className="text-[11px] font-mono text-white/50 block mt-1">
                    Transparent Label
                  </span>
                </div>
              </div>
            </div>

            {/* Complete Bundle Callout */}
            <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl border border-white/15 space-y-4 bg-gradient-to-br from-white/5 to-phase/10">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-phase font-semibold">ALL-DAY PROTOCOL BUNDLE</span>
                <span className="bg-[#10b981]/20 text-[#10b981] px-2 py-0.5 rounded font-bold">
                  SAVE 20%
                </span>
              </div>
              <h4 className="font-display text-xl font-bold text-white">
                The 24H Full Circadian System
              </h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Includes Dawn Rise (Mitochondrial), Zenith Flow (Nootropic), and Restore Prime (Sleep/DNA repair) with a complimentary titanium travel case.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold text-white">$118.00</span>
                <span className="font-mono text-sm text-white/40 line-through">$146.00</span>
                <span className="text-xs text-white/50 font-mono">/ 30-Day Auto-Sync</span>
              </div>
              <button
                onClick={() => {
                  PRODUCTS.forEach((p) => addToCart(p, 1, "30-day"));
                }}
                className="w-full py-3.5 rounded-full bg-phase text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <span>Add 3-Phase Bundle to Routine</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
