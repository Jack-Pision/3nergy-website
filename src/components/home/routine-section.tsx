"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Pill, ShieldCheck, Sparkles } from "lucide-react";
import { useCircadianStore } from "@/store/circadian-store";

export function RoutineSection() {
  const { openQuiz } = useCircadianStore();

  return (
    <section id="routine" className="w-full py-16 sm:py-24 px-4 sm:px-8 bg-[#fcfcfb]">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Sourcing & Formulation Philosophy */}
        <div className="space-y-12">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-black/[0.06]">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#141b17] max-w-3xl leading-snug">
              Consistency compounds.{" "}
              <span className="text-[#6c7a72] font-normal">Daily nutrition engineered around how human biology actually functions across morning, midday, and night.</span>
            </h2>
            <Link
              href="/science"
              className="self-start md:self-center px-6 py-2 rounded-full bg-[#1f3d2b] hover:bg-[#162e20] text-white text-xs font-semibold tracking-wide transition-all shadow-sm shrink-0"
            >
              Our Standards
            </Link>
          </div>

          {/* 3 Outline Icon Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
            
            {/* Feature 1 */}
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#eaf1ed] flex items-center justify-center text-[#1f3d2b]">
                <Pill className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-bold text-base text-[#141b17]">
                Clean Ingredients
              </h3>
              <p className="text-xs sm:text-sm text-[#5a6660] leading-relaxed">
                Thoughtfully sourced ingredients with nothing unnecessary. 100% active compounds, zero chemical fillers or artificial flow agents.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#f7f2ea] flex items-center justify-center text-[#8b6a3e]">
                <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-bold text-base text-[#141b17]">
                Third-Party Tested
              </h3>
              <p className="text-xs sm:text-sm text-[#5a6660] leading-relaxed">
                Every formula is independently tested for potency, heavy metals, and microbiological safety across ISO-17025 certified laboratories.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#f1eff6] flex items-center justify-center text-[#5b4e78]">
                <Sparkles className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-bold text-base text-[#141b17]">
                Science-Backed
              </h3>
              <p className="text-xs sm:text-sm text-[#5a6660] leading-relaxed">
                Formulated around clinical human trials with verified bioavailable delivery to ensure your body actually absorbs what is on the label.
              </p>
            </div>

          </div>
        </div>

        {/* Section 2: "Your Routine Starts Here." */}
        <div className="space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141b17] leading-[1.05]">
              Your Routine <br />
              Starts Here.
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-xs sm:text-sm text-[#5a6660] max-w-xs leading-relaxed">
                Simple formulas. Purposeful ingredients. Better daily habits.
              </p>
              <button
                onClick={openQuiz}
                className="px-6 py-2.5 rounded-full bg-[#1f3d2b] hover:bg-[#162e20] text-white text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95 shrink-0"
              >
                Take the quiz
              </button>
            </div>
          </div>

          {/* 3 High-Fidelity Routine Lifestyle Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Built for Daily Flow (Couple) */}
            <div className="group rounded-3xl bg-white p-5 border border-black/[0.06] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-[#eaf1ed]">
                <Image
                  src="/images/routine_couple.png"
                  alt="Built for Daily Flow - Couple Morning Routine"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-[#141b17]">
                  Built For Daily Flow
                </h3>
                <p className="text-xs text-[#5a6660] leading-relaxed">
                  Elevate your shared wellness goals with clean, intentional morning nutrition that supports natural vitality and shared healthy habits.
                </p>
              </div>
            </div>

            {/* Card 2: Stress Less, Do More (Man with Bottle) */}
            <div className="group rounded-3xl bg-[#eaf1ed]/50 p-5 border border-[#1f3d2b]/15 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-[#dbe8df]">
                <Image
                  src="/images/routine_stress.png"
                  alt="Stress Less, Do More"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-[#141b17]">
                  Stress Less, Do More
                </h3>
                <p className="text-xs text-[#5a6660] leading-relaxed">
                  Reclaim your energy and mental clarity with clean adaptogenic herbs and minerals engineered to smooth out midday cognitive fatigue.
                </p>
              </div>
            </div>

            {/* Card 3: Expert Formulated (Doctor) */}
            <div className="group rounded-3xl bg-white p-5 border border-black/[0.06] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-[#f1eff6]">
                <Image
                  src="/images/routine_doctor.png"
                  alt="Expert Formulated Supplements"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-[#141b17]">
                  Expert Formulated
                </h3>
                <p className="text-xs text-[#5a6660] leading-relaxed">
                  Backed by nutritional science and formulated in collaboration with clinical preventative wellness physicians and biochemical researchers.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
