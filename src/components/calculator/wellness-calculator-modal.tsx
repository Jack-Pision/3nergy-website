"use client";

import React, { useState } from "react";
import { X, Calculator, Droplets, Clock, Flame, Check, ArrowRight } from "lucide-react";
import { useCircadianStore } from "@/store/circadian-store";
import { PRODUCTS } from "@/data/products";

export function WellnessCalculatorModal() {
  const { isCalculatorOpen, closeCalculator, addToCart } = useCircadianStore();
  const [wakeHour, setWakeHour] = useState("06:30");
  const [activityLevel, setActivityLevel] = useState<"light" | "moderate" | "high">("moderate");
  const [primaryGoal, setPrimaryGoal] = useState<"energy" | "recovery" | "sleep">("energy");
  const [added, setAdded] = useState(false);

  if (!isCalculatorOpen) return null;

  // Dynamic calculations based on inputs
  const hydrationMultiplier = activityLevel === "high" ? 3.4 : activityLevel === "moderate" ? 2.8 : 2.2;
  const recommendedProduct =
    primaryGoal === "energy"
      ? PRODUCTS[0]
      : primaryGoal === "recovery"
      ? PRODUCTS[1]
      : PRODUCTS[2];

  const handleAddRecommended = () => {
    addToCart(recommendedProduct);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      closeCalculator();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-6 sm:p-8 border border-black/10 relative max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-black/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#eaf1ed] flex items-center justify-center text-[#1f3d2b]">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#141b17]">
                Personalized Fitness & Dosing Calculator
              </h3>
              <p className="text-[11px] text-[#5a6660]">
                Scientifically calibrated to your natural circadian wake rhythm.
              </p>
            </div>
          </div>
          <button
            onClick={closeCalculator}
            className="w-8 h-8 rounded-full hover:bg-black/5 flex items-center justify-center text-gray-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Input Parameters */}
        <div className="space-y-5 pt-5">
          
          {/* Wake Time */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#141b17] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#1f3d2b]" />
              <span>Typical Wake-up Time</span>
            </label>
            <select
              value={wakeHour}
              onChange={(e) => setWakeHour(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-[#f4f6f4] text-xs font-semibold text-[#141b17] focus:outline-none focus:ring-2 focus:ring-[#1f3d2b]"
            >
              <option value="05:30">05:30 AM (Early Riser)</option>
              <option value="06:30">06:30 AM (Standard)</option>
              <option value="07:30">07:30 AM (Standard)</option>
              <option value="08:30">08:30 AM (Late Riser)</option>
            </select>
          </div>

          {/* Activity Level */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#141b17] flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-[#1f3d2b]" />
              <span>Daily Physical Activity</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["light", "moderate", "high"] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setActivityLevel(lvl)}
                  className={`py-2 rounded-xl text-xs font-medium capitalize transition-all ${
                    activityLevel === lvl
                      ? "bg-[#1f3d2b] text-white font-bold shadow-sm"
                      : "bg-[#f4f6f4] text-[#5a6660] hover:text-[#141b17]"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Wellness Goal */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#141b17]">
              Primary Wellness Goal
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setPrimaryGoal("energy")}
                className={`p-2.5 rounded-2xl text-left border transition-all ${
                  primaryGoal === "energy"
                    ? "bg-[#eaf1ed] border-[#1f3d2b] text-[#1f3d2b] font-bold"
                    : "bg-[#fcfcfb] border-black/10 text-[#5a6660]"
                }`}
              >
                <div className="text-xs font-bold">Morning Energy</div>
                <div className="text-[10px] opacity-75">Clean focus & vitality</div>
              </button>

              <button
                onClick={() => setPrimaryGoal("recovery")}
                className={`p-2.5 rounded-2xl text-left border transition-all ${
                  primaryGoal === "recovery"
                    ? "bg-[#f7f2ea] border-[#8b6a3e] text-[#8b6a3e] font-bold"
                    : "bg-[#fcfcfb] border-black/10 text-[#5a6660]"
                }`}
              >
                <div className="text-xs font-bold">Stamina & Repair</div>
                <div className="text-[10px] opacity-75">Post-workout balance</div>
              </button>

              <button
                onClick={() => setPrimaryGoal("sleep")}
                className={`p-2.5 rounded-2xl text-left border transition-all ${
                  primaryGoal === "sleep"
                    ? "bg-[#f1eff6] border-[#5b4e78] text-[#5b4e78] font-bold"
                    : "bg-[#fcfcfb] border-black/10 text-[#5a6660]"
                }`}
              >
                <div className="text-xs font-bold">Deep Rest</div>
                <div className="text-[10px] opacity-75">Non-groggy sleep</div>
              </button>
            </div>
          </div>

          {/* Calculator Output Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#eaf1ed]/60 border border-[#1f3d2b]/15 space-y-3">
            <div className="text-xs font-semibold text-[#1f3d2b]">
              Your Recommended Daily Routine
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-[#1f3d2b]" />
                <div>
                  <div className="text-[10px] text-[#5a6660]">Target Hydration</div>
                  <div className="text-xs font-bold text-[#141b17]">{hydrationMultiplier} Liters/Day</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#1f3d2b]" />
                <div>
                  <div className="text-[10px] text-[#5a6660]">Optimal Dosing Window</div>
                  <div className="text-xs font-bold text-[#141b17]">
                    {primaryGoal === "energy" ? "07:00 AM" : primaryGoal === "recovery" ? "01:30 PM" : "09:30 PM"}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1f3d2b]/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#5a6660] block">Recommended Match</span>
                <span className="text-xs font-bold text-[#141b17]">{recommendedProduct.name}</span>
              </div>
              <button
                onClick={handleAddRecommended}
                className="px-4 py-2 rounded-full bg-[#1f3d2b] text-white text-xs font-semibold shadow-sm hover:bg-[#162e20] transition-colors flex items-center gap-1.5"
              >
                {added ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added!</span>
                  </>
                ) : (
                  <>
                    <span>Add to Cart • $30</span>
                    <ArrowRight className="w-3 h-3" />
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
