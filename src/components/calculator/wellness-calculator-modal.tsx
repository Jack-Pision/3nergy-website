"use client";

import React, { useState } from "react";
import { X, Clock, Check, ArrowRight } from "lucide-react";
import { useCircadianStore } from "@/store/circadian-store";
import { PRODUCTS } from "@/data/products";

export function WellnessCalculatorModal() {
  const { isCalculatorOpen, closeCalculator, addToCart } = useCircadianStore();
  const [wakeHour, setWakeHour] = useState("06:30");
  const [bedHour, setBedHour] = useState("22:30");
  const [dailyFocus, setDailyFocus] = useState<"trio" | "energy" | "recovery" | "sleep">("trio");
  const [added, setAdded] = useState(false);

  if (!isCalculatorOpen) return null;

  // Helper to format minutes past midnight into AM/PM
  const formatTime = (minutes: number) => {
    const normalized = (minutes + 1440) % 1440;
    const h24 = Math.floor(normalized / 60);
    const m = normalized % 60;
    const period = h24 >= 12 ? "PM" : "AM";
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    const mStr = m < 10 ? `0${m}` : `${m}`;
    return `${h12}:${mStr} ${period}`;
  };

  const parseMinutes = (timeStr: string) => {
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + m;
  };

  const wakeMins = parseMinutes(wakeHour);
  const bedMins = parseMinutes(bedHour);

  // Chronobiologically accurate milestones
  const morningSunlightTime = formatTime(wakeMins + 15);
  const energyDoseTime = formatTime(wakeMins + 45);
  const recoveryDoseTime = formatTime(wakeMins + 390); // ~6.5 hours post-wake (midday)
  const caffeineCutoffTime = formatTime(bedMins - 540); // 9 hours before bed
  const restDoseTime = formatTime(bedMins - 45); // 45 min before sleep

  const handleAddSelection = () => {
    if (dailyFocus === "trio") {
      PRODUCTS.forEach((p) => addToCart(p, 1, "30-day"));
    } else if (dailyFocus === "energy") {
      addToCart(PRODUCTS[0], 1, "30-day");
    } else if (dailyFocus === "recovery") {
      addToCart(PRODUCTS[1], 1, "30-day");
    } else {
      addToCart(PRODUCTS[2], 1, "30-day");
    }
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
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#141b17]">
                Personalized Circadian Protocol
              </h3>
              <p className="text-[11px] text-[#5a6660]">
                Calibrated to your exact waking hours and nocturnal melatonin onset.
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

        {/* Schedule Inputs */}
        <div className="space-y-5 pt-5">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Wake Time */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#141b17] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#1f3d2b]" />
                <span>Wake-up Time</span>
              </label>
              <select
                value={wakeHour}
                onChange={(e) => setWakeHour(e.target.value)}
                className="w-full px-4 py-2 rounded-2xl bg-[#f4f6f4] text-xs font-semibold text-[#141b17] focus:outline-none focus:ring-2 focus:ring-[#1f3d2b]"
              >
                <option value="05:30">05:30 AM (Early Riser)</option>
                <option value="06:00">06:00 AM</option>
                <option value="06:30">06:30 AM (Standard)</option>
                <option value="07:00">07:00 AM</option>
                <option value="07:30">07:30 AM</option>
                <option value="08:00">08:00 AM (Late Riser)</option>
                <option value="08:30">08:30 AM</option>
              </select>
            </div>

            {/* Bed Time */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#141b17] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#5b4e78]" />
                <span>Target Bedtime</span>
              </label>
              <select
                value={bedHour}
                onChange={(e) => setBedHour(e.target.value)}
                className="w-full px-4 py-2 rounded-2xl bg-[#f4f6f4] text-xs font-semibold text-[#141b17] focus:outline-none focus:ring-2 focus:ring-[#1f3d2b]"
              >
                <option value="21:30">09:30 PM (Early Sleep)</option>
                <option value="22:00">10:00 PM</option>
                <option value="22:30">10:30 PM (Standard)</option>
                <option value="23:00">11:00 PM</option>
                <option value="23:30">11:30 PM (Night Owl)</option>
                <option value="00:00">12:00 AM</option>
              </select>
            </div>
          </div>

          {/* Routine Focus Toggle */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#141b17]">
              Routine Objective
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                onClick={() => setDailyFocus("trio")}
                className={`py-2 px-2.5 rounded-xl text-xs text-center border transition-all ${
                  dailyFocus === "trio"
                    ? "bg-[#1f3d2b] text-white font-bold border-[#1f3d2b] shadow-xs"
                    : "bg-[#fcfcfb] border-black/10 text-[#5a6660]"
                }`}
              >
                Complete Trio
              </button>
              <button
                onClick={() => setDailyFocus("energy")}
                className={`py-2 px-2.5 rounded-xl text-xs text-center border transition-all ${
                  dailyFocus === "energy"
                    ? "bg-[#eaf1ed] text-[#1f3d2b] font-bold border-[#1f3d2b]"
                    : "bg-[#fcfcfb] border-black/10 text-[#5a6660]"
                }`}
              >
                Energy Focus
              </button>
              <button
                onClick={() => setDailyFocus("recovery")}
                className={`py-2 px-2.5 rounded-xl text-xs text-center border transition-all ${
                  dailyFocus === "recovery"
                    ? "bg-[#f7f2ea] text-[#8b6a3e] font-bold border-[#8b6a3e]"
                    : "bg-[#fcfcfb] border-black/10 text-[#5a6660]"
                }`}
              >
                Recovery
              </button>
              <button
                onClick={() => setDailyFocus("sleep")}
                className={`py-2 px-2.5 rounded-xl text-xs text-center border transition-all ${
                  dailyFocus === "sleep"
                    ? "bg-[#f1eff6] text-[#5b4e78] font-bold border-[#5b4e78]"
                    : "bg-[#fcfcfb] border-black/10 text-[#5a6660]"
                }`}
              >
                Sleep Rest
              </button>
            </div>
          </div>

          {/* Computed 24-Hour Circadian Schedule Timeline */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#fcfcfb] border border-black/[0.08] space-y-3">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-black/[0.06]">
              <span className="font-bold text-[#141b17]">Your Chronobiological Timeline</span>
              <span className="text-[#1f3d2b] font-semibold text-[11px]">24-Hour Bio-Synchronized</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start justify-between gap-3 p-2 rounded-xl bg-white border border-black/5">
                <div>
                  <div className="font-bold text-[#141b17]">01 • Cortisol Wake &amp; Energy Window</div>
                  <div className="text-[11px] text-[#5a6660]">Take 2 capsules Daily Energy &amp; Focus with breakfast + morning sunlight ({morningSunlightTime}).</div>
                </div>
                <span className="font-bold text-[#1f3d2b] bg-[#eaf1ed] px-2.5 py-0.5 rounded-full shrink-0">
                  {energyDoseTime}
                </span>
              </div>

              <div className="flex items-start justify-between gap-3 p-2 rounded-xl bg-white border border-black/5">
                <div>
                  <div className="font-bold text-[#141b17]">02 • Post-Workout &amp; Midday Recovery</div>
                  <div className="text-[11px] text-[#5a6660]">Take 2 capsules Daily Recovery &amp; Stamina. Cellular electrolytes + tart cherry for afternoon endurance.</div>
                </div>
                <span className="font-bold text-[#8b6a3e] bg-[#f7f2ea] px-2.5 py-0.5 rounded-full shrink-0">
                  {recoveryDoseTime}
                </span>
              </div>

              <div className="flex items-start justify-between gap-3 p-2 rounded-xl bg-white border border-black/5">
                <div>
                  <div className="font-bold text-[#141b17]">Caffeine Cut-off Threshold</div>
                  <div className="text-[11px] text-[#5a6660]">Stop caffeine intake here to allow full adenosine receptor clearing before sleep.</div>
                </div>
                <span className="font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full shrink-0">
                  {caffeineCutoffTime}
                </span>
              </div>

              <div className="flex items-start justify-between gap-3 p-2 rounded-xl bg-white border border-black/5">
                <div>
                  <div className="font-bold text-[#141b17]">03 • Nocturnal Relaxation &amp; GABA Onset</div>
                  <div className="text-[11px] text-[#5a6660]">Take 2 capsules Daily Rest &amp; Sleep with water 45 minutes before turning off lights.</div>
                </div>
                <span className="font-bold text-[#5b4e78] bg-[#f1eff6] px-2.5 py-0.5 rounded-full shrink-0">
                  {restDoseTime}
                </span>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-2 border-t border-black/[0.06] flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#5a6660] block">Recommended Protocol</span>
                <span className="text-xs font-bold text-[#141b17]">
                  {dailyFocus === "trio" ? "The Complete Daily Trio Bundle" : dailyFocus === "energy" ? "Daily Energy & Focus" : dailyFocus === "recovery" ? "Daily Recovery & Stamina" : "Daily Rest & Sleep"}
                </span>
              </div>
              <button
                onClick={handleAddSelection}
                className="px-5 py-2 rounded-full bg-[#1f3d2b] text-white text-xs font-semibold shadow-sm hover:bg-[#162e20] transition-colors flex items-center gap-1.5"
              >
                {added ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added!</span>
                  </>
                ) : (
                  <>
                    <span>Add Protocol • {dailyFocus === "trio" ? "$75.00" : "$30.00"}</span>
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
