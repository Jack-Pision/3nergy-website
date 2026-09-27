"use client";

import React, { useState } from "react";
import { useCircadianStore } from "@/store/circadian-store";
import { X, Sparkles, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "@/data/products";

export function QuizModal() {
  const { isQuizOpen, closeQuiz, addToCart } = useCircadianStore();
  const [step, setStep] = useState(1);

  // User selections
  const [primaryGoal, setPrimaryGoal] = useState<string>("all-around");
  const [energyDip, setEnergyDip] = useState<string>("afternoon");
  const [sleepQuality, setSleepQuality] = useState<string>("fair");

  if (!isQuizOpen) return null;

  const handleFinish = () => {
    if (primaryGoal === "all-around") {
      PRODUCTS.forEach((p) => addToCart(p, 1, "30-day"));
    } else if (primaryGoal === "morning") {
      addToCart(PRODUCTS[0], 1, "30-day");
    } else if (primaryGoal === "recovery") {
      addToCart(PRODUCTS[1], 1, "30-day");
    } else {
      addToCart(PRODUCTS[2], 1, "30-day");
    }
    closeQuiz();
    setStep(1);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-black/45 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 border border-black/10 shadow-2xl z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-black/[0.08]">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#eaf1ed] text-[#1f3d2b]">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="font-bold text-base text-[#141b17]">
              Find Your 3NERGY Routine
            </span>
          </div>
          <button
            onClick={closeQuiz}
            className="p-1.5 rounded-full hover:bg-black/5 text-gray-500 hover:text-black transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="flex items-center gap-2 my-5">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`flex-1 h-1 rounded-full transition-colors duration-300 ${
                i <= step ? "bg-[#1f3d2b]" : "bg-black/[0.08]"
              }`}
            />
          ))}
        </div>

        {/* Step 1: Primary Goal */}
        {step === 1 && (
          <div className="space-y-4">
            <span className="text-xs text-[#1f3d2b] font-semibold">
              Step 01 of 03
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#141b17]">
              What is your primary wellness goal right now?
            </h3>
            <div className="space-y-2.5 pt-2">
              {[
                {
                  id: "morning",
                  label: "Clean Morning Energy & Focus",
                  desc: "Wake up energized and ready to tackle deep work without caffeine jitters.",
                },
                {
                  id: "recovery",
                  label: "Post-Workout Recovery & Stamina",
                  desc: "Speed up muscle repair, stay hydrated, and maintain endurance all day.",
                },
                {
                  id: "sleep",
                  label: "Deeper, More Restful Sleep",
                  desc: "Calm an active mind, sleep soundly, and wake up genuinely refreshed.",
                },
                {
                  id: "all-around",
                  label: "The Complete Daily Trio (All-in-One)",
                  desc: "Synchronize all 24 hours: morning energy, afternoon stamina, and evening rest.",
                },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setPrimaryGoal(opt.id)}
                  className={`w-full p-4 rounded-2xl text-left border transition-colors duration-200 ${
                    primaryGoal === opt.id
                      ? "bg-[#eaf1ed] border-[#1f3d2b] text-[#141b17] shadow-sm"
                      : "bg-[#fcfcfb] border-black/10 text-[#5a6660] hover:bg-[#f4f6f4]"
                  }`}
                >
                  <div className="font-bold text-sm text-[#141b17] flex items-center justify-between">
                    <span>{opt.label}</span>
                    {primaryGoal === opt.id && <Check className="w-4 h-4 text-[#1f3d2b] shrink-0" />}
                  </div>
                  <p className="text-xs text-[#5a6660] mt-1">{opt.desc}</p>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full mt-4 py-3 rounded-full bg-[#1f3d2b] hover:bg-[#162e20] text-white font-semibold text-xs tracking-wide transition-colors duration-200 flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Next: Daily Rhythm</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Step 2: Energy Dip */}
        {step === 2 && (
          <div className="space-y-4">
            <span className="text-xs text-[#1f3d2b] font-semibold">
              Step 02 of 03
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#141b17]">
              When do you experience your biggest energy slump?
            </h3>
            <div className="space-y-2.5 pt-2">
              {[
                {
                  id: "morning",
                  label: "Right after waking (Morning fog)",
                  desc: "Takes 1-2 hours and heavy coffee to feel mentally alert and functioning.",
                },
                {
                  id: "afternoon",
                  label: "Mid-afternoon dip (2:00 – 4:00 PM)",
                  desc: "Post-lunch brain fog, difficulty focusing, craving afternoon sugar or caffeine.",
                },
                {
                  id: "evening",
                  label: "Late afternoon workout or commute",
                  desc: "Physically depleted before workouts, sluggish and drained by evening.",
                },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setEnergyDip(opt.id)}
                  className={`w-full p-4 rounded-2xl text-left border transition-colors duration-200 ${
                    energyDip === opt.id
                      ? "bg-[#eaf1ed] border-[#1f3d2b] text-[#141b17] shadow-sm"
                      : "bg-[#fcfcfb] border-black/10 text-[#5a6660] hover:bg-[#f4f6f4]"
                  }`}
                >
                  <div className="font-bold text-sm text-[#141b17] flex items-center justify-between">
                    <span>{opt.label}</span>
                    {energyDip === opt.id && <Check className="w-4 h-4 text-[#1f3d2b] shrink-0" />}
                  </div>
                  <p className="text-xs text-[#5a6660] mt-1">{opt.desc}</p>
                </button>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-full bg-[#f4f6f4] text-[#5a6660] hover:text-black text-xs font-semibold transition-colors duration-200"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="w-2/3 py-3 rounded-full bg-[#1f3d2b] hover:bg-[#162e20] text-white font-semibold text-xs tracking-wide transition-colors duration-200 flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Next: Sleep Habits</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}


        {/* Step 3: Sleep Quality */}
        {step === 3 && (
          <div className="space-y-4">
            <span className="text-xs text-[#1f3d2b] font-semibold">
              Step 03 of 03
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#141b17]">
              How would you describe your typical night&apos;s rest?
            </h3>
            <div className="space-y-2.5 pt-2">
              {[
                {
                  id: "restless",
                  label: "Restless or hard to fall asleep",
                  desc: "Mind spins with thoughts; tossing and turning takes over 45 minutes.",
                },
                {
                  id: "waking",
                  label: "Wake up frequently during the night",
                  desc: "Wake up at 3:00 AM thirsty or alert, struggling to get back into deep sleep.",
                },
                {
                  id: "groggy",
                  label: "Sleep 7+ hours but wake up feeling unrefreshed",
                  desc: "Feel like you never entered deep restorative delta recovery stages.",
                },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSleepQuality(opt.id)}
                  className={`w-full p-4 rounded-2xl text-left border transition-colors duration-200 ${
                    sleepQuality === opt.id
                      ? "bg-[#eaf1ed] border-[#1f3d2b] text-[#141b17] shadow-sm"
                      : "bg-[#fcfcfb] border-black/10 text-[#5a6660] hover:bg-[#f4f6f4]"
                  }`}
                >
                  <div className="font-bold text-sm text-[#141b17] flex items-center justify-between">
                    <span>{opt.label}</span>
                    {sleepQuality === opt.id && <Check className="w-4 h-4 text-[#1f3d2b] shrink-0" />}
                  </div>
                  <p className="text-xs text-[#5a6660] mt-1">{opt.desc}</p>
                </button>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setStep(2)}
                className="w-1/3 py-3 rounded-full bg-[#f4f6f4] text-[#5a6660] hover:text-black text-xs font-semibold transition-colors duration-200"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="w-2/3 py-3 rounded-full bg-[#1f3d2b] hover:bg-[#162e20] text-white font-semibold text-xs tracking-wide transition-colors duration-200 flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Generate My Routine</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Personalized Plan Result */}
        {step === 4 && (
          <div className="space-y-5 animate-in fade-in duration-300">
            <div className="text-center py-1">
              <span className="text-xs text-[#1f3d2b] bg-[#eaf1ed] px-3.5 py-1 rounded-full font-semibold">
                Routine Formulated
              </span>
              <h3 className="text-2xl font-bold text-[#141b17] mt-2.5">
                Your Recommended 3NERGY Daily Habit
              </h3>
            </div>

            {/* Schedule Overview */}
            <div className="p-4 rounded-2xl bg-[#f4f6f4] border border-black/5 space-y-2.5">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-black/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2e593f]" />
                  <strong className="text-[#141b17]">07:30 AM:</strong> Daily Energy &amp; Focus
                </div>
                <span className="text-[11px] text-[#2e593f] font-semibold">Clean Vitality</span>
              </div>

              <div className="flex items-center justify-between text-xs pb-2 border-b border-black/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8b6a3e]" />
                  <strong className="text-[#141b17]">01:30 PM:</strong> Daily Recovery &amp; Stamina
                </div>
                <span className="text-[11px] text-[#8b6a3e] font-semibold">Cellular Repair</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#5b4e78]" />
                  <strong className="text-[#141b17]">10:00 PM:</strong> Daily Rest &amp; Sleep
                </div>
                <span className="text-[11px] text-[#5b4e78] font-semibold">Deep Rest</span>
              </div>
            </div>

            <div className="p-3 bg-[#eaf1ed] rounded-2xl border border-[#1f3d2b]/15 text-xs text-[#2e4033] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#1f3d2b] shrink-0" />
              <span>
                Includes 30-day money-back guarantee. No questions asked.
              </span>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 rounded-full bg-[#1f3d2b] hover:bg-[#162e20] text-white font-semibold text-xs tracking-wide transition-colors duration-200 flex items-center justify-center gap-2 shadow-md active:opacity-90 border border-transparent hover:border-white/10"
            >
              <span>Add Recommended Routine to Cart</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
