"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#050706] border-t border-white/10 pt-16 pb-12 px-4 sm:px-8 mt-24 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Newsletter & Manifesto Banner */}
        <div className="rounded-3xl glass-panel-elevated p-8 sm:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-phase opacity-10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-mono uppercase tracking-widest text-phase flex items-center gap-2 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                BIOTECHNOLOGY INTELLIGENCE DISPATCH
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Synchronize Your Biology with Real-Time Chrono-Science.
              </h2>
              <p className="text-white/60 text-sm mt-3 max-w-xl leading-relaxed">
                Join over 24,000 bio-hackers, researchers, and high-performers receiving our weekly circadian research briefings, clinical trial pre-prints, and batch reserve drops.
              </p>
            </div>

            <div className="lg:col-span-5">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your clinical email..."
                  required
                  className="flex-1 bg-white/5 border border-white/15 rounded-full px-5 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-phase transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-phase hover:text-black transition-all shadow-lg shrink-0"
                >
                  {subscribed ? "Subscribed ✓" : "Join Protocol"}
                </button>
              </form>
              <p className="text-[11px] text-white/40 mt-2.5 font-mono">
                Zero spam. Strict peer-reviewed research only. Instant 1-click opt-out.
              </p>
            </div>
          </div>
        </div>

        {/* Mid Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl font-extrabold text-white tracking-tight">
                3NERGY<span className="text-phase font-mono text-xs ml-0.5">™</span>
              </span>
            </div>
            <p className="text-white/50 text-xs leading-relaxed mb-4">
              Tripartite Chrono-Nutrition engineered in Zurich & Cambridge. Aligning mitochondrial oxidation, working memory velocity, and slow-wave sleep.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-xs font-mono">
              <ShieldCheck className="w-4 h-4 text-phase" />
              <span>cGMP • ISO-17025 • NSF Clean</span>
            </div>
          </div>

          {/* Tri-System Protocols */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              The 3 Phases
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/shop" className="text-white/70 hover:text-phase transition-colors flex items-center justify-between">
                  <span>01 // Dawn Rise (Mitochondrial)</span>
                  <span className="text-[10px] font-mono text-[#f59e0b]">AMBER</span>
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white/70 hover:text-phase transition-colors flex items-center justify-between">
                  <span>02 // Zenith Flow (Nootropic)</span>
                  <span className="text-[10px] font-mono text-[#10b981]">EMERALD</span>
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white/70 hover:text-phase transition-colors flex items-center justify-between">
                  <span>03 // Restore Prime (Sleep/DNA)</span>
                  <span className="text-[10px] font-mono text-[#6366f1]">INDIGO</span>
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white font-medium hover:text-phase transition-colors pt-1 flex items-center gap-1">
                  <span>Complete 24H Tri-System Bundle</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinical Science */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              Formulation Science
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/science" className="text-white/70 hover:text-white transition-colors">
                  Liposomal Bioavailability Mechanics
                </Link>
              </li>
              <li>
                <Link href="/science" className="text-white/70 hover:text-white transition-colors">
                  Double-Blind Clinical Trials Registry
                </Link>
              </li>
              <li>
                <Link href="/science" className="text-white/70 hover:text-white transition-colors">
                  Certificate of Analysis (CoA) Ledger
                </Link>
              </li>
              <li>
                <Link href="/science" className="text-white/70 hover:text-white transition-colors">
                  Independent Sourcing Transparency
                </Link>
              </li>
            </ul>
          </div>

          {/* System Telemetry & Guarantee */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              Quality Assurance
            </h3>
            <div className="glass-panel p-4 rounded-2xl text-xs space-y-2 border border-white/10">
              <div className="flex items-center justify-between text-white/60">
                <span>Batch Status</span>
                <span className="text-[#10b981] font-mono font-medium">CLEARED (100%)</span>
              </div>
              <div className="flex items-center justify-between text-white/60">
                <span>Heavy Metals</span>
                <span className="text-white/80 font-mono">&lt; 0.005 ppm</span>
              </div>
              <div className="flex items-center justify-between text-white/60">
                <span>30-Day Policy</span>
                <span className="text-white font-medium">Cellular Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Concept Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/40 font-mono">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-phase" />
            <span>© 2026 3NERGY Bio-Technologies AG. Concept portfolio project designed for high-craft UI/UX.</span>
          </div>
          <div className="flex items-center gap-6">
            <span>DISCLAIMER: NOT EVALUATED BY THE FDA. FOR PORTFOLIO DEMONSTRATION PURPOSES.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
