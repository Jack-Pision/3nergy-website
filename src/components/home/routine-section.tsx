"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCircadianStore } from "@/store/circadian-store";

function CleanIngredientsIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Angled Capsule */}
      <g transform="rotate(-30 20 18)">
        <rect x="15" y="6" width="10" height="24" rx="5" stroke="#527764" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="15" y1="18" x2="25" y2="18" stroke="#527764" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.5 10C17.5 8.5 18.5 7.5 20 7.5" stroke="#527764" strokeWidth="1.2" strokeLinecap="round" />
      </g>
      {/* Tablet Shape */}
      <ellipse cx="32" cy="34" rx="11" ry="6" transform="rotate(-15 32 34)" stroke="#527764" strokeWidth="1.5" />
      <path d="M23 35L41 30" stroke="#527764" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 2.5" />
    </svg>
  );
}

function ThirdPartyTestedIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Ribbed Bottle Cap */}
      <rect x="18" y="6" width="12" height="5" rx="1" stroke="#527764" strokeWidth="1.5" />
      <line x1="21" y1="8" x2="21" y2="9.5" stroke="#527764" strokeWidth="1" strokeLinecap="round" />
      <line x1="24" y1="8" x2="24" y2="9.5" stroke="#527764" strokeWidth="1" strokeLinecap="round" />
      <line x1="27" y1="8" x2="27" y2="9.5" stroke="#527764" strokeWidth="1" strokeLinecap="round" />

      {/* Bottle Shoulder & Body */}
      <path d="M20 11V14C20 15 18.5 16 17 16.5C15.5 17 14 19 14 21V38C14 40 15.5 41.5 17.5 41.5H30.5C32.5 41.5 34 40 34 38V21C34 19 32.5 17 31 16.5C29.5 16 28 15 28 14V11" stroke="#527764" strokeWidth="1.5" strokeLinecap="round" />

      {/* Label Outline */}
      <rect x="17.5" y="21" width="13" height="15" rx="1.5" stroke="#527764" strokeWidth="1" strokeDasharray="2 2" />

      {/* Clinical Certified Cross Seal */}
      <path d="M24 25V32M20.5 28.5H27.5" stroke="#527764" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ScienceBackedIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Botanical Herbal Leaves */}
      <path d="M25 15C25 11 28.5 8 33 8C33 12.5 29.5 15 25 15Z" stroke="#527764" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 18C21.5 14 18 13 15 14C15 18 18.5 20 23 18Z" stroke="#527764" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 22V14" stroke="#527764" strokeWidth="1.2" strokeLinecap="round" />

      {/* Pestle angled in Mortar */}
      <path d="M32 10L22 25" stroke="#527764" strokeWidth="2" strokeLinecap="round" />

      {/* Mortar Lip */}
      <ellipse cx="24" cy="24" rx="14" ry="3" stroke="#527764" strokeWidth="1.5" />

      {/* Mortar Bowl Body */}
      <path d="M10 24C10 24 11.5 35 24 35C36.5 35 38 24 38 24" stroke="#527764" strokeWidth="1.5" strokeLinecap="round" />

      {/* Footed Base */}
      <path d="M17 35L15 39H33L31 35" stroke="#527764" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RoutineSection() {
  const { openQuiz } = useCircadianStore();

  return (
    <section id="routine" className="w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-16 bg-[#fcfcfb]">
      <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto space-y-24">
        
        {/* Sourcing & Formulation Philosophy */}
        <div className="space-y-12">
          {/* Header Row matching Inspiration */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-10 border-b border-black/[0.06]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#141b17] max-w-3xl leading-[1.3]">
              Clean, science-backed supplements designed to support your energy, recovery, focus, and <span className="text-[#141b17] font-bold">everyday wellness</span> — without the unnecessary extras.
            </h2>
            <Link
              href="/science"
              className="px-6 py-2.5 rounded-full bg-[#183624] hover:bg-[#11271a] text-white text-xs font-semibold tracking-wide transition-all shadow-sm shrink-0 self-start"
            >
              Guidelines
            </Link>
          </div>

          {/* 3 Bespoke Pharmaceutical Line Art Highlights (No AI-slop pastel squares) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-2">
            
            {/* Feature 1 */}
            <div className="space-y-3">
              <div className="h-14 flex items-center text-[#527764]">
                <CleanIngredientsIcon className="w-13 h-13" />
              </div>
              <h3 className="font-bold text-base text-[#141b17]">
                Clean Ingredients
              </h3>
              <p className="text-xs sm:text-sm text-[#5a6660] leading-relaxed max-w-xs">
                Thoughtfully sourced ingredients with nothing unnecessary.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-3">
              <div className="h-14 flex items-center text-[#527764]">
                <ThirdPartyTestedIcon className="w-13 h-13" />
              </div>
              <h3 className="font-bold text-base text-[#141b17]">
                Third-Party Tested
              </h3>
              <p className="text-xs sm:text-sm text-[#5a6660] leading-relaxed max-w-xs">
                Every formula is tested for quality and purity.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-3">
              <div className="h-14 flex items-center text-[#527764]">
                <ScienceBackedIcon className="w-13 h-13" />
              </div>
              <h3 className="font-bold text-base text-[#141b17]">
                Science-Backed
              </h3>
              <p className="text-xs sm:text-sm text-[#5a6660] leading-relaxed max-w-xs">
                Formulated around ingredients with established research.
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
