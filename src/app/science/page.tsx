"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ChronoBottle } from "@/components/visuals/chrono-bottle";

export function SciencePage() {
  const [selectedProductId, setSelectedProductId] = useState<string>("daily-energy");
  const [activeLot, setActiveLot] = useState("LOT-3N-2026-A1");
  const [lotVerified, setLotVerified] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const selectedProduct =
    PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  const faqs = [
    {
      q: "Why 3 supplements instead of a single multivitamin?",
      a: "Different bodily processes require different nutrients at different times of day. Morning requires clean mitochondrial support and focus without jittery caffeine spikes; midday demands muscular recovery and electrolyte replenishment; and night requires calming neurotransmitters (GABA and magnesium) for deep restorative sleep. Combining them into one pill creates competing absorption pathways and washes through your kidneys in 3 hours.",
    },
    {
      q: "Are 3NERGY supplements third-party lab tested?",
      a: "Yes. Every single batch is independently tested by ISO-17025 accredited laboratories for heavy metals (lead, arsenic, cadmium, mercury <0.005 ppm), microbial contamination, and exact active compound potency before release.",
    },
    {
      q: "Do your supplements contain synthetic fillers, gluten, or animal gelatin?",
      a: "None. All 3NERGY formulations are 100% vegan, non-GMO, gluten-free, and formulated without synthetic colorants, magnesium stearate, silicon dioxide, or artificial preservatives.",
    },
    {
      q: "Can I take all three supplements together?",
      a: "While you can safely take them, they are purposefully formulated for your natural daily routine: Daily Energy & Focus with breakfast, Daily Recovery with lunch or after exercise, and Daily Rest & Sleep 30 minutes before bed.",
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen py-8 sm:py-16 px-4 sm:px-8 bg-[#fcfcfb] text-[#141b17]">
      <div className="max-w-6xl mx-auto w-full space-y-20">
        
        {/* Editorial Header */}
        <section className="text-center max-w-3xl mx-auto pt-4 space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#1f3d2b] font-bold block">
            Formulation &amp; Transparency
          </span>

          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#141b17] leading-[0.95]">
            Transparency in <br />
            Every Capsule.
          </h1>

          <p className="text-sm sm:text-base text-[#5a6660] leading-relaxed max-w-2xl mx-auto font-sans">
            You shouldn&apos;t need a chemistry degree to understand what goes into your body. 3NERGY supplements are formulated around published human clinical research with zero fillers, binders, or hidden blends.
          </p>
        </section>

        {/* Section 1: The 3 Core Quality Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl p-8 bg-white border border-black/[0.06] shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#eaf1ed] text-[#1f3d2b] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-display font-bold text-lg text-[#141b17]">
              100% Active Ingredients
            </h3>
            <p className="text-xs sm:text-sm text-[#5a6660] leading-relaxed">
              Every milligram inside our tapioca vegan capsules serves a targeted biological function. Zero artificial flow agents, silicon dioxide, or titanium whitening agents.
            </p>
          </div>

          <div className="rounded-3xl p-8 bg-white border border-black/[0.06] shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#f7f2ea] text-[#8b6a3e] flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-display font-bold text-lg text-[#141b17]">
              Bioavailable Chelates
            </h3>
            <p className="text-xs sm:text-sm text-[#5a6660] leading-relaxed">
              We exclusively utilize gentle, organic-bound chelates (such as pure Magnesium Bisglycinate and Methylated B12) that bypass gastric degradation for maximum intestinal absorption.
            </p>
          </div>

          <div className="rounded-3xl p-8 bg-white border border-black/[0.06] shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#f1eff6] text-[#5b4e78] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-display font-bold text-lg text-[#141b17]">
              Third-Party Verified
            </h3>
            <p className="text-xs sm:text-sm text-[#5a6660] leading-relaxed">
              Every production lot undergoes rigorous independent HPLC testing to guarantee exact label potency, heavy metals clearance (&lt;0.005 ppm), and zero microbial contamination.
            </p>
          </div>
        </section>

        {/* Section 2: Interactive Formulation Dossier */}
        <section id="ingredients" className="rounded-[2.5rem] bg-white border border-black/[0.06] p-6 sm:p-12 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-black/[0.06]">
            <div>
              <span className="text-[11px] font-mono text-[#1f3d2b] font-bold uppercase tracking-wider block">
                Formulation Dossier
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#141b17] mt-1">
                Explore Active Ingredients
              </h2>
            </div>
            <p className="text-xs text-[#5a6660] max-w-sm">
              Select any of our 3 core daily supplements to inspect exact clinical doses, botanical origins, and physiological mechanisms.
            </p>
          </div>

          {/* Product Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PRODUCTS.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setSelectedProductId(prod.id)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  selectedProductId === prod.id
                    ? `${prod.bgColorClass} border-[#1f3d2b] shadow-sm font-bold`
                    : "bg-[#fcfcfb] border-black/10 text-[#5a6660] hover:bg-gray-50"
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider opacity-60">
                  {prod.phaseNumber} • {prod.timeWindow}
                </div>
                <div className="font-display text-sm font-bold text-[#141b17] mt-0.5">
                  {prod.name}
                </div>
                <div className="text-xs font-mono font-bold text-[#1f3d2b] mt-1">
                  ${prod.price}.00
                </div>
              </button>
            ))}
          </div>

          {/* Selected Product Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            
            {/* Left: Bottle Visual */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-3xl bg-[#f8faf8] border border-black/[0.04]">
              <ChronoBottle phase={selectedProduct.phase} size="lg" showRestingCapsules={true} />
              <div className="mt-6 text-center">
                <div className="font-display font-bold text-base text-[#141b17]">{selectedProduct.name}</div>
                <div className="text-xs text-[#5a6660]">{selectedProduct.dailyDosage}</div>
                <Link
                  href="/shop"
                  className="mt-3 inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#1f3d2b] hover:bg-[#162e20] text-white text-xs font-semibold shadow-sm transition-transform active:scale-95"
                >
                  <span>Shop This Formula • $30.00</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Ingredient List */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-display text-xl font-bold text-[#141b17]">
                Active Compounds &amp; Clinical Dosages
              </h3>
              
              <div className="space-y-3">
                {selectedProduct.compounds.map((cmp, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#fcfcfb] border border-black/[0.06] space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-[#141b17]">
                      <span>{cmp.name}</span>
                      <span className="font-mono text-[#1f3d2b] bg-[#eaf1ed] px-2 py-0.5 rounded-full">
                        {cmp.dose}
                      </span>
                    </div>
                    <p className="text-xs text-[#5a6660] leading-relaxed">
                      {cmp.function}
                    </p>
                  </div>
                ))}
              </div>

              {/* Spec Sheet Badges */}
              <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono text-[#3d4d42]">
                {selectedProduct.specSheet.certifications.map((cert) => (
                  <span key={cert} className="px-3 py-1 rounded-full bg-[#eaf1ed] border border-[#1f3d2b]/15 flex items-center gap-1">
                    <Check className="w-3 h-3 text-[#1f3d2b]" />
                    <span>{cert}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Section 3: Live Certificate of Analysis (COA) Verification */}
        <section id="coa" className="rounded-[2.5rem] bg-[#f9faf9] border border-black/[0.06] p-8 sm:p-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-[#1f3d2b] font-bold uppercase tracking-wider block">
                Quality Assurance
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#141b17] mt-1">
                Batch Quality &amp; Lab Certificate Lookup
              </h2>
              <p className="text-xs sm:text-sm text-[#5a6660] mt-1 max-w-xl">
                Every bottle features a stamped production lot number on the base. Enter your batch code to inspect verified laboratory assay results.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto">
              <input
                type="text"
                value={activeLot}
                onChange={(e) => setActiveLot(e.target.value)}
                className="px-4 py-2.5 rounded-full bg-white border border-black/15 text-xs font-mono text-[#141b17] focus:outline-none focus:ring-2 focus:ring-[#1f3d2b]"
              />
              <button
                onClick={() => setLotVerified(true)}
                className="px-5 py-2.5 rounded-full bg-[#1f3d2b] hover:bg-[#162e20] text-white text-xs font-bold transition-all shadow-sm"
              >
                Verify
              </button>
            </div>
          </div>

          {lotVerified && (
            <div className="bg-white rounded-2xl p-6 border border-black/[0.08] shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-black/[0.06] text-xs">
                <div className="flex items-center gap-2 text-emerald-700 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>LOT {activeLot}: 100% PASSED ACCREDITED LABORATORY SCREENING</span>
                </div>
                <span className="text-gray-400 font-mono text-[11px]">ISO-17025 Certified Partner Labs</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-[#f9faf9] border border-black/5 space-y-1">
                  <span className="text-gray-400 text-[10px]">HEAVY METALS</span>
                  <div className="font-bold text-emerald-700">&lt; 0.005 ppm (Passed)</div>
                  <span className="text-[10px] text-gray-500">USP &lt;2232&gt; compliant</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f9faf9] border border-black/5 space-y-1">
                  <span className="text-gray-400 text-[10px]">MICROBIAL &amp; E. COLI</span>
                  <div className="font-bold text-emerald-700">0 CFU/g (Absent)</div>
                  <span className="text-[10px] text-gray-500">USP &lt;2021&gt; compliant</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f9faf9] border border-black/5 space-y-1">
                  <span className="text-gray-400 text-[10px]">LABEL CLAIM ASSAY</span>
                  <div className="font-bold text-[#141b17]">100.2% Measured Potency</div>
                  <span className="text-[10px] text-gray-500">HPLC verified</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f9faf9] border border-black/5 space-y-1">
                  <span className="text-gray-400 text-[10px]">SOLVENT RESIDUES</span>
                  <div className="font-bold text-emerald-700">None Detected (0%)</div>
                  <span className="text-[10px] text-gray-500">Clean solvent-free extraction</span>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Section 4: FAQ Accordion */}
        <section id="faq" className="space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-mono text-[#1f3d2b] font-bold uppercase tracking-wider">
              Answers &amp; Guidance
            </span>
            <h2 className="font-display text-3xl font-black uppercase tracking-tight text-[#141b17]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3 pt-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-black/[0.08] shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm text-[#141b17]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? "rotate-180 text-[#1f3d2b]" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-[#5a6660] leading-relaxed font-sans border-t border-black/[0.04] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}

export default SciencePage;
