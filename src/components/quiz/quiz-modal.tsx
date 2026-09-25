"use client";

import React, { useState } from "react";
import { useCircadianStore } from "@/store/circadian-store";
import { X, Sparkles, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "@/data/products";

export function QuizModal() {
  const { isQuizOpen, closeQuiz, addToCart } = useCircadianStore();
  const [step, setStep] = useState(1);

  // User selections
  const [bottleneck, setBottleneck] = useState<string>("all-day");
  const [schedule, setSchedule] = useState<string>("classic");
  const [stimulants, setStimulants] = useState<string>("moderate");

  if (!isQuizOpen) return null;

  const handleFinish = () => {
    // Add recommended stack to cart
    if (bottleneck === "all-day") {
      PRODUCTS.forEach((p) => addToCart(p, 1, "30-day"));
    } else if (bottleneck === "morning") {
      addToCart(PRODUCTS[0], 1, "30-day");
    } else if (bottleneck === "afternoon") {
      addToCart(PRODUCTS[1], 1, "30-day");
    } else {
      addToCart(PRODUCTS[2], 1, "30-day");
    }
    closeQuiz();
    setStep(1);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
      {/* Backdrop */}
      <div onClick={closeQuiz} className="fixed inset-0 bg-black/80 backdrop-blur-md" />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl rounded-3xl glass-panel-elevated p-6 sm:p-8 border border-white/15 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-phase/20 text-phase">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="font-display font-bold text-sm sm:text-base text-white">
              Circadian Chronotype Diagnostic
            </span>
          </div>
          <button
            onClick={closeQuiz}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-2 my-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                i <= step ? "bg-phase" : "bg-white/10"
              }`}
            />
          ))}
        </div>

        {/* Step 1: Energy Bottleneck */}
        {step === 1 && (
          <div className="space-y-4">
            <span className="text-[11px] font-mono text-phase uppercase tracking-wider">
              Diagnostic Step 01 / 03
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Where does your cellular vitality degrade most severely?
            </h3>
            <div className="space-y-2.5 pt-2">
              {[
                {
                  id: "morning",
                  label: "Morning Awakening & Cortisol Sluggishness",
                  desc: "Hard to get out of bed, brain fog until high-dose coffee kicks in.",
                },
                {
                  id: "afternoon",
                  label: "Post-Midday Mental Dip & Working Memory Drop",
                  desc: "2:00 PM focus crash, brain lethargy, unable to sustain deep creative state.",
                },
                {
                  id: "night",
                  label: "Restless Somatic Winding & Shallow Sleep",
                  desc: "Mind racing at night, frequent waking, unrefreshed morning recovery.",
                },
                {
                  id: "all-day",
                  label: "Full 24-Hour Rhythm Desynchronization (Recommended)",
                  desc: "Unpredictable energy peaks and valleys throughout the entire circadian day.",
                },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setBottleneck(opt.id)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all ${
                    bottleneck === opt.id
                      ? "bg-phase/15 border-phase text-white shadow-lg"
                      : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="font-semibold text-sm text-white flex items-center justify-between">
                    <span>{opt.label}</span>
                    {bottleneck === opt.id && <Check className="w-4 h-4 text-phase shrink-0" />}
                  </div>
                  <p className="text-xs text-white/50 mt-1">{opt.desc}</p>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full mt-4 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-phase hover:text-black transition-all flex items-center justify-center gap-1.5"
            >
              <span>Next: Chrono-Schedule</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Step 2: Sleep & Wake Windows */}
        {step === 2 && (
          <div className="space-y-4">
            <span className="text-[11px] font-mono text-phase uppercase tracking-wider">
              Diagnostic Step 02 / 03
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              What is your natural sleep-wake window?
            </h3>
            <div className="space-y-2.5 pt-2">
              {[
                {
                  id: "lark",
                  label: "Morning Lark (05:30 Wake // 21:30 Sleep)",
                  desc: "Early biological sunrise synchronization, peak cognitive velocity before noon.",
                },
                {
                  id: "classic",
                  label: "Solar Standard (07:00 Wake // 23:00 Sleep)",
                  desc: "Synchronized to natural circadian day, balanced diurnal metabolism.",
                },
                {
                  id: "nightowl",
                  label: "Nocturnal / Creative Shift (08:30+ Wake // 00:30+ Sleep)",
                  desc: "Shifted biological clock, peak creative velocity in late evening hours.",
                },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSchedule(opt.id)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all ${
                    schedule === opt.id
                      ? "bg-phase/15 border-phase text-white shadow-lg"
                      : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="font-semibold text-sm text-white flex items-center justify-between">
                    <span>{opt.label}</span>
                    {schedule === opt.id && <Check className="w-4 h-4 text-phase shrink-0" />}
                  </div>
                  <p className="text-xs text-white/50 mt-1">{opt.desc}</p>
                </button>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-full bg-white/5 text-white/60 hover:text-white text-xs font-mono transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="w-2/3 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-phase hover:text-black transition-all flex items-center justify-center gap-1.5"
              >
                <span>Next: Stimulant Load</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Stimulant History */}
        {step === 3 && (
          <div className="space-y-4">
            <span className="text-[11px] font-mono text-phase uppercase tracking-wider">
              Diagnostic Step 03 / 03
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              What is your current stimulant intake profile?
            </h3>
            <div className="space-y-2.5 pt-2">
              {[
                {
                  id: "heavy",
                  label: "High Stimulant (>300mg Caffeine / Energy Drinks)",
                  desc: "Desensitized adenosine receptors, frequent tremors and late-day crashes.",
                },
                {
                  id: "moderate",
                  label: "Moderate (1-2 Espressos or Matcha Daily)",
                  desc: "Healthy baseline seeking cleaner, smoother mitochondrial fuel without dependency.",
                },
                {
                  id: "clean",
                  label: "Stimulant-Free / Pure Cellular Bioenergetics",
                  desc: "Zero synthetic stimulants, pure adaptogens and mitochondrial co-factors only.",
                },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setStimulants(opt.id)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all ${
                    stimulants === opt.id
                      ? "bg-phase/15 border-phase text-white shadow-lg"
                      : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="font-semibold text-sm text-white flex items-center justify-between">
                    <span>{opt.label}</span>
                    {stimulants === opt.id && <Check className="w-4 h-4 text-phase shrink-0" />}
                  </div>
                  <p className="text-xs text-white/50 mt-1">{opt.desc}</p>
                </button>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setStep(2)}
                className="w-1/3 py-3 rounded-full bg-white/5 text-white/60 hover:text-white text-xs font-mono transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="w-2/3 py-3 rounded-full bg-phase text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-1.5 shadow-lg"
              >
                <span>Synthesize Protocol</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Results & Custom Protocol Card */}
        {step === 4 && (
          <div className="space-y-5 animate-in fade-in duration-300">
            <div className="text-center py-2">
              <span className="text-[10px] font-mono text-[#10b981] bg-[#10b981]/15 px-2.5 py-1 rounded-full uppercase tracking-wider">
                DIAGNOSTIC COMPLETED // 99.4% CHRONO-MATCH
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-2">
                Your Precision 24H Circadian Protocol
              </h3>
            </div>

            {/* Protocol Timetable */}
            <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-white/40 pb-2 border-b border-white/10">
                <span>PHASE INGESTION SCHEDULE</span>
                <span>BIOLOGICAL TARGET</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                  <strong className="text-white">07:15 AM:</strong> 01 // Dawn Rise (2 Caps)
                </div>
                <span className="font-mono text-[#f59e0b] text-[11px]">ATP Awakening</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                  <strong className="text-white">01:45 PM:</strong> 02 // Zenith Flow (2 Caps)
                </div>
                <span className="font-mono text-[#10b981] text-[11px]">Neuro-Focus</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6366f1]" />
                  <strong className="text-white">10:15 PM:</strong> 03 // Restore Prime (2 Caps)
                </div>
                <span className="font-mono text-[#6366f1] text-[11px]">Delta Sleep / DNA</span>
              </div>
            </div>

            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-xs text-white/60 space-y-1">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-phase" />
                Cellular Rebalancing Trajectory
              </div>
              <p className="text-[11px] leading-relaxed">
                By replacing high-dose stimulants with steady mitochondrial co-factors and Magtein® glymphatic clearance, your adenosine receptor density is projected to recalibrate within 14 days.
              </p>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-4 rounded-full bg-phase text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              <span>Load Prescribed Protocol Into Cart</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
