"use client";

import React, { useState } from "react";
import { PRODUCTS } from "@/data/products";
import { useCircadianStore } from "@/store/circadian-store";
import {
  Sparkles,
  Check,
  Plus,
  ArrowRight,
  ShieldCheck,
  Star,
  RefreshCw,
  Truck,
} from "lucide-react";
import { ChronoBottle } from "@/components/visuals/chrono-bottle";

export default function ShopPage() {
  const { addToCart } = useCircadianStore();

  // Cadence selections for individual products
  const [cadences, setCadences] = useState<{ [id: string]: "30-day" | "60-day" | "one-time" }>({
    "dawn-rise": "30-day",
    "zenith-flow": "30-day",
    "restore-prime": "30-day",
  });

  // Bundle cadence
  const [bundleCadence, setBundleCadence] = useState<"30-day" | "60-day" | "one-time">("30-day");

  const setProductCadence = (id: string, cad: "30-day" | "60-day" | "one-time") => {
    setCadences((prev) => ({ ...prev, [id]: cad }));
  };

  const calculatePrice = (base: number, cad: "30-day" | "60-day" | "one-time") => {
    if (cad === "30-day") return (base * 0.85).toFixed(2);
    if (cad === "60-day") return (base * 0.8).toFixed(2);
    return base.toFixed(2);
  };

  const bundlePrice =
    bundleCadence === "30-day"
      ? (118 * 0.9).toFixed(2)
      : bundleCadence === "60-day"
      ? (118 * 0.85).toFixed(2)
      : "118.00";

  return (
    <div className="flex flex-col w-full min-h-screen py-8 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto w-full space-y-16">
        
        {/* Apothecary Header */}
        <section className="text-center max-w-3xl mx-auto pt-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-phase border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE 3NERGY CHRONO-APOTHECARY</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
            Curate Your Diurnal Protocol.
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            Choose the complete 24-hour tripartite circadian rhythm or target specific metabolic windows. All orders include carbon-neutral express dispatch and our 30-day cellular guarantee.
          </p>
        </section>

        {/* Featured Flagship: Complete 24H Tri-System Bundle */}
        <section className="rounded-3xl glass-panel-elevated p-8 sm:p-12 lg:p-14 border border-white/20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-phase opacity-15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Visual Lineup: 3 Grounded Anti-Slop Vector-Crafted ChronoBottles */}
            <div className="lg:col-span-6 flex justify-center py-4">
              <div className="relative w-full max-w-lg flex items-center justify-center gap-2 sm:gap-4">
                <ChronoBottle
                  phase="dawn"
                  size="md"
                  showRestingCapsules={false}
                  className="scale-90 sm:scale-100 transform -rotate-3 hover:rotate-0 transition-transform"
                />
                <ChronoBottle
                  phase="zenith"
                  size="lg"
                  showRestingCapsules={true}
                  className="z-10 scale-100 sm:scale-105 hover:scale-110 transition-transform"
                />
                <ChronoBottle
                  phase="restore"
                  size="md"
                  showRestingCapsules={false}
                  className="scale-90 sm:scale-100 transform rotate-3 hover:rotate-0 transition-transform"
                />
              </div>
            </div>

            {/* Bundle Details & Cadence Config */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/30">
                  RECOMMENDED CHRONO-PROTOCOL // SAVE UP TO 30%
                </span>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-mono">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>4.99 (3,240 Reviews)</span>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  The Complete 24H Tri-System Protocol
                </h2>
                <p className="text-white/60 text-xs sm:text-sm mt-2 leading-relaxed">
                  Synchronizes all three biological metabolic cycles: Morning Mitochondrial Awakening, Afternoon Working Memory Flow, and Evening Glymphatic Sleep Architecture.
                </p>
              </div>

              {/* What's inside list */}
              <div className="space-y-2 text-xs text-white/80 font-mono">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#f59e0b]" />
                  <span>01 // Dawn Rise (120 Caps • Ubiquinol + Cordyceps)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10b981]" />
                  <span>02 // Zenith Flow (60 Caps • Cognizin® + Lion&apos;s Mane)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#6366f1]" />
                  <span>03 // Restore Prime (60 Caps • Magtein® + Apigenin)</span>
                </div>
                <div className="flex items-center gap-2 text-phase">
                  <Sparkles className="w-4 h-4" />
                  <span>BONUS: Precision Matte Black Diurnal Travel Vial ($28 Value)</span>
                </div>
              </div>

              {/* Cadence Selector for Bundle */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 block">
                  Select Dispatch Cadence
                </span>
                <div className="grid grid-cols-3 gap-2 bg-black/40 p-1.5 rounded-2xl text-xs font-mono border border-white/10">
                  <button
                    onClick={() => setBundleCadence("30-day")}
                    className={`py-2 rounded-xl transition-all ${
                      bundleCadence === "30-day"
                        ? "bg-phase text-black font-bold shadow-md"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    30-Day Auto
                  </button>
                  <button
                    onClick={() => setBundleCadence("60-day")}
                    className={`py-2 rounded-xl transition-all ${
                      bundleCadence === "60-day"
                        ? "bg-phase text-black font-bold shadow-md"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    60-Day Auto
                  </button>
                  <button
                    onClick={() => setBundleCadence("one-time")}
                    className={`py-2 rounded-xl transition-all ${
                      bundleCadence === "one-time"
                        ? "bg-white/20 text-white font-bold shadow-md"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    One-Time
                  </button>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-extrabold text-white">
                      ${bundlePrice}
                    </span>
                    <span className="font-mono text-sm text-white/40 line-through">$146.00</span>
                    <span className="text-xs font-mono text-[#10b981] bg-[#10b981]/15 px-2 py-0.5 rounded">
                      SAVE 28%
                    </span>
                  </div>
                  <span className="text-[11px] text-white/40 font-mono block mt-0.5">
                    Free Climate-Neutral Express Shipping Included
                  </span>
                </div>

                <button
                  onClick={() => {
                    PRODUCTS.forEach((p) => addToCart(p, 1, bundleCadence));
                  }}
                  className="px-8 py-4 rounded-full bg-phase text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2 shadow-2xl active:scale-95"
                >
                  <span>Add Full Protocol to Routine</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* Individual Formulations Catalog Grid */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-phase uppercase tracking-wider block">
                STANDALONE CHRONO-FORMULATIONS
              </span>
              <h2 className="font-display text-3xl font-extrabold text-white tracking-tight">
                Targeted Circadian Therapeutics
              </h2>
            </div>
            <p className="text-white/50 text-xs max-w-sm">
              Tailor individual formulation quantities and delivery intervals to your personal lifestyle demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => {
              const currentCadence = cadences[product.id] || "30-day";
              const currentPrice = calculatePrice(product.price, currentCadence);

              return (
                <div
                  key={product.id}
                  className="rounded-3xl glass-panel-elevated p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all duration-300"
                >
                  {/* Top Phase Tag & Capsule Count */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-3">
                      <span className="text-phase font-semibold">
                        PHASE {product.phaseNumber} {"//"} {product.timeWindow}
                      </span>
                      <span className="text-white/40">{product.capsuleCount} Capsules</span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white">
                      {product.name}
                    </h3>
                    <p className="text-xs text-white/60 font-sans mt-1">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Clean Grounded Bottle Visual */}
                  <div className="relative w-full h-80 my-2 flex items-center justify-center">
                    <ChronoBottle
                      phase={product.phase}
                      size="md"
                      showRestingCapsules={true}
                    />
                  </div>

                  {/* Key Active Compounds */}
                  <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">
                      CORE ACTIVE MECHANISMS
                    </span>
                    <ul className="space-y-1.5 text-white/80">
                      {product.compounds.slice(0, 3).map((comp, idx) => (
                        <li key={idx} className="flex justify-between items-center text-[11px] font-mono">
                          <span className="text-white/70">{comp.name.split("(")[0]}</span>
                          <span className="text-phase font-bold">{comp.dose}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cadence Selection for this item */}
                  <div className="space-y-2 pt-2">
                    <div className="grid grid-cols-3 gap-1 bg-black/40 p-1 rounded-xl text-[10px] font-mono border border-white/5">
                      <button
                        onClick={() => setProductCadence(product.id, "30-day")}
                        className={`py-1.5 rounded-lg transition-colors ${
                          currentCadence === "30-day"
                            ? "bg-phase text-black font-bold"
                            : "text-white/50 hover:text-white"
                        }`}
                      >
                        30-Day (-15%)
                      </button>
                      <button
                        onClick={() => setProductCadence(product.id, "60-day")}
                        className={`py-1.5 rounded-lg transition-colors ${
                          currentCadence === "60-day"
                            ? "bg-phase text-black font-bold"
                            : "text-white/50 hover:text-white"
                        }`}
                      >
                        60-Day (-20%)
                      </button>
                      <button
                        onClick={() => setProductCadence(product.id, "one-time")}
                        className={`py-1.5 rounded-lg transition-colors ${
                          currentCadence === "one-time"
                            ? "bg-white/20 text-white font-bold"
                            : "text-white/50 hover:text-white"
                        }`}
                      >
                        One-Time
                      </button>
                    </div>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-2xl font-bold text-white">
                        ${currentPrice}
                      </span>
                      <span className="text-[10px] text-white/40 font-mono block">
                        {currentCadence === "one-time" ? "Single Bottle" : "Auto-Replenish"}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(product, 1, currentCadence)}
                      className="px-5 py-2.5 rounded-full bg-phase text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-1.5 shadow-lg active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Routine</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Guarantees & FAQ */}
        <section className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[11px] font-mono text-phase uppercase tracking-wider">
              FAQ & CELLULAR INTEGRITY
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Risk-Free Chronobiological Guarantee
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="space-y-2 p-5 rounded-2xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 text-phase" />
                <span>30-Day Cellular Refund</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                If your diurnal energy, focus, or sleep metrics do not objectively improve within 30 days, keep the bottles and receive an instant 100% refund.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <RefreshCw className="w-4 h-4 text-phase" />
                <span>Flexible Chrono-Cadence</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Pause, delay, swap formulations, or cancel with a single click inside your subscriber portal. Zero friction, zero locked contracts.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Truck className="w-4 h-4 text-phase" />
                <span>Carbon-Negative Dispatch</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Shipped in 100% compostable mycelium insulated packaging with climate-neutral carbon offset verification for every nautical mile.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
