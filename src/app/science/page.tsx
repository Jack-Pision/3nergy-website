"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMPOUNDS, CLINICAL_STUDIES } from "@/data/compounds";
import { useCircadianStore } from "@/store/circadian-store";
import {
  Search,
  CheckCircle2,
  ArrowUpRight,
  Dna,
} from "lucide-react";

export default function SciencePage() {
  const { setPhase } = useCircadianStore();
  const [selectedCompoundId, setSelectedCompoundId] = useState<string>(COMPOUNDS[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLot, setActiveLot] = useState("LOT-3N-8942-A");
  const [lotVerified, setLotVerified] = useState(true);

  const selectedCompound =
    COMPOUNDS.find((c) => c.id === selectedCompoundId) || COMPOUNDS[0];

  const filteredStudies = CLINICAL_STUDIES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.primaryOutcome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full min-h-screen py-8 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto w-full space-y-20">
        
        {/* Dossier Header */}
        <section className="text-center max-w-4xl mx-auto pt-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-phase border border-white/10">
            <Dna className="w-3.5 h-3.5" />
            <span>CLINICAL ARCHITECTURE // DOSSIER V4.2</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
            Mitochondrial Mechanics & Cellular Chronobiology.
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Traditional multivitamins compress dozens of competing nutrients into a single static pill that flushes through renal filtration in 3 hours. 3NERGY times active delivery to cellular circadian metabolic windows.
          </p>
        </section>

        {/* Section 1: Bioavailability Mechanics Comparison */}
        <section className="rounded-3xl glass-panel-elevated p-8 sm:p-12 border border-white/15">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            
            <div className="flex-1 space-y-4">
              <span className="text-[11px] font-mono text-phase uppercase tracking-wider block">
                PHARMACOKINETIC TRANSLATION
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Why 90% of Standard Supplements Never Reach Your Cells.
              </h2>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Stomach hydrochloric acid destroys fragile peptide bonds and oxidizes ubiquinone before intestinal absorption. Our proprietary sub-micron lipid matrix encases active molecules in biocompatible phospholipid bilayers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-xs space-y-1.5">
                  <div className="font-bold text-red-400 font-mono">CONVENTIONAL TABLETS</div>
                  <p className="text-white/60 leading-relaxed text-[11px]">
                    12% - 18% Bioavailability. High-pressure tableting degrades heat-sensitive adaptogens. Rapid gastric oxidation.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/30 text-xs space-y-1.5">
                  <div className="font-bold text-[#10b981] font-mono">3NERGY ENTERIC MATRIX</div>
                  <p className="text-white/60 leading-relaxed text-[11px]">
                    94.6% Measured Uptake. Delayed-release DRcaps® bypass gastric acid and deploy in the alkaline jejunum within 18 minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Technical Comparison Gauge */}
            <div className="w-full lg:w-96 glass-panel p-6 rounded-2xl border border-white/10 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-white/40 block pb-2 border-b border-white/10">
                Plasma Concentration AUC
              </span>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-white">3NERGY Circadian Matrix</span>
                  <span className="text-[#10b981] font-bold">94.6%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#10b981] h-full rounded-full w-[94.6%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-white/60">Standard Encapsulation</span>
                  <span className="text-white/40">38.2%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-white/40 h-full rounded-full w-[38.2%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-white/40">Compressed Tablet</span>
                  <span className="text-red-400">14.1%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-red-400 h-full rounded-full w-[14.1%]" />
                </div>
              </div>

              <div className="pt-2 text-[10px] font-mono text-white/40 text-center">
                HPLC-MS Verified Human In Vivo Pharmacokinetic Trial (N=140)
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Interactive Compound Explorer */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-phase uppercase tracking-wider block">
                MOLECULAR INVENTORY
              </span>
              <h2 className="font-display text-3xl font-extrabold text-white tracking-tight">
                Interactive Compound Dossier
              </h2>
            </div>
            <p className="text-white/50 text-xs max-w-sm">
              Select an active biological compound to inspect chemical formulation, clinical dosage, and cellular pathway mechanics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Compound Selector Tabs */}
            <div className="lg:col-span-5 space-y-2">
              {COMPOUNDS.map((c) => {
                const isSelected = c.id === selectedCompound.id;
                const phaseColor =
                  c.phase === "dawn"
                    ? "text-[#f59e0b]"
                    : c.phase === "zenith"
                    ? "text-[#10b981]"
                    : "text-[#6366f1]";

                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      setSelectedCompoundId(c.id);
                      setPhase(c.phase);
                    }}
                    className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-white/10 border-phase shadow-xl"
                        : "bg-white/5 border-white/5 hover:bg-white/10 text-white/60"
                    }`}
                  >
                    <div>
                      <div className="font-display font-bold text-sm text-white flex items-center gap-2">
                        <span>{c.name}</span>
                        {c.trademark && (
                          <span className="text-[10px] font-mono bg-white/10 px-1.5 py-0.5 rounded text-white/70">
                            {c.trademark}
                          </span>
                        )}
                      </div>
                      <span className={`text-[10px] font-mono uppercase tracking-wider ${phaseColor}`}>
                        {c.phase.toUpperCase()} PROTOCOL // {c.clinicalDose}
                      </span>
                    </div>
                    <ArrowUpRight className={`w-4 h-4 transition-transform ${isSelected ? "text-phase" : "opacity-30"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right: Compound Detailed Chemical Spec Sheet */}
            <div className="lg:col-span-7 glass-panel-elevated p-8 rounded-3xl border border-white/15 space-y-6">
              <div className="flex items-start justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-phase uppercase tracking-wider block">
                    {selectedCompound.phase.toUpperCase()} TIMED ENZYME KINETIC
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mt-1">
                    {selectedCompound.name}
                  </h3>
                  <div className="text-xs text-white/50 font-mono mt-0.5">
                    Source: {selectedCompound.source}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-white/40 block">CLINICAL DOSE</span>
                  <span className="font-mono text-lg font-bold text-white">
                    {selectedCompound.clinicalDose}
                  </span>
                </div>
              </div>

              {/* Chemical Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-white/40 block text-[10px]">CAS NUMBER</span>
                  <span className="text-white font-medium">{selectedCompound.casNumber}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-white/40 block text-[10px]">FORMULA / FRACTION</span>
                  <span className="text-white font-medium truncate block">{selectedCompound.formula}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-white/40 block text-[10px]">ABSORPTION RATE</span>
                  <span className="text-[#10b981] font-medium">{selectedCompound.absorptionRate.split(" ")[0]}</span>
                </div>
              </div>

              {/* Primary Biological Pathway */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-phase uppercase tracking-wider block">
                  PRIMARY TARGET PATHWAY
                </span>
                <p className="text-white text-sm font-medium">
                  {selectedCompound.primaryPathway}
                </p>
              </div>

              {/* Cellular Mechanism */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-white/40 uppercase tracking-wider block">
                  CELLULAR PHARMACODYNAMICS
                </span>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {selectedCompound.mechanism}
                </p>
              </div>

              {/* Quick Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-white/40">
                  Included in 3NERGY {selectedCompound.phase.toUpperCase()}
                </span>
                <Link
                  href="/shop"
                  className="px-5 py-2 rounded-full bg-white/10 hover:bg-phase hover:text-black text-white text-xs font-mono transition-colors flex items-center gap-1.5"
                >
                  <span>Order Formulation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Section 3: Double-Blind Clinical Trials Registry */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-phase uppercase tracking-wider block">
                PEER-REVIEWED EVIDENCE
              </span>
              <h2 className="font-display text-3xl font-extrabold text-white tracking-tight">
                Clinical Trial Benchmarks
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search study, outcome, journal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-phase"
              />
            </div>
          </div>

          <div className="rounded-3xl glass-panel-elevated overflow-hidden border border-white/15">
            <div className="divide-y divide-white/10">
              {filteredStudies.map((study) => (
                <div key={study.id} className="p-6 sm:p-8 hover:bg-white/5 transition-colors space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <span className="text-phase uppercase tracking-wider font-semibold">
                      {study.phaseTarget.toUpperCase()} PROTOCOL // {study.duration}
                    </span>
                    <span className="text-white/40">DOI: {study.doi}</span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                    {study.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    <strong>Primary Endpoint:</strong> {study.primaryOutcome}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/50 pt-1">
                    <span>Journal: {study.journal} ({study.year})</span>
                    <span>• N = {study.participants} Subjects</span>
                    <span className="text-[#10b981] font-bold">Significance: {study.statisticalPValue}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Live Batch Quality & Certificate of Analysis (CoA) Lookup */}
        <section className="rounded-3xl glass-panel-elevated p-8 sm:p-12 border border-white/15 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-mono text-phase uppercase tracking-wider block">
                TRANSPARENCY LEDGER
              </span>
              <h2 className="font-display text-3xl font-extrabold text-white tracking-tight">
                Batch Quality & Certificate of Analysis (CoA)
              </h2>
              <p className="text-white/60 text-xs sm:text-sm max-w-xl mt-2">
                Every bottle base is laser-etched with a unique manufacturing batch lot. Query our decentralized testing ledger for independent third-party laboratory results.
              </p>
            </div>

            {/* Batch Search */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={activeLot}
                onChange={(e) => setActiveLot(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-phase"
              />
              <button
                onClick={() => setLotVerified(true)}
                className="px-5 py-2.5 rounded-full bg-phase text-black text-xs font-bold uppercase tracking-wider"
              >
                Verify Lot
              </button>
            </div>
          </div>

          {/* Simulated Live Certificate of Analysis */}
          {lotVerified && (
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#10b981]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-bold">LOT STATUS: FULLY ACCREDITED & CLEARED</span>
                </div>
                <div className="text-white/40">Laboratory: Eurofins BioPharma Product Testing AG (ISO-17025)</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-white/40 text-[10px]">HEAVY METALS (Pb, As, Cd, Hg)</span>
                  <div className="font-bold text-[#10b981]">&lt; 0.005 ppm</div>
                  <span className="text-[10px] text-white/50">Spec limit &lt; 0.1 ppm</span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-white/40 text-[10px]">ACTIVE UBIQUINOL CONCENTRATION</span>
                  <div className="font-bold text-white">100.4% Target (150.6mg)</div>
                  <span className="text-[10px] text-white/50">HPLC Measured</span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-white/40 text-[10px]">MICROBIAL & PATHOGEN ASSAY</span>
                  <div className="font-bold text-[#10b981]">CLEARED (0 CFU/g)</div>
                  <span className="text-[10px] text-white/50">USP &lt;2021&gt; compliant</span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-white/40 text-[10px]">SOLVENT RESIDUE</span>
                  <div className="font-bold text-[#10b981]">NOT DETECTED</div>
                  <span className="text-[10px] text-white/50">Supercritical CO2 extract</span>
                </div>
              </div>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
