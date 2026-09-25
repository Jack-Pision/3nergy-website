"use client";

import React, { useState } from "react";
import { useCircadianStore } from "@/store/circadian-store";
import { Activity, CheckCircle } from "lucide-react";

export function BioTelemetry() {
  const { setPhase } = useCircadianStore();
  const [activeHour, setActiveHour] = useState<number>(14);
  const [viewMode, setViewMode] = useState<"comparison" | "3nergy-only">("comparison");

  const hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

  const get3nergyValue = (h: number) => {
    if (h <= 9) return 40 + (h - 6) * 16;
    if (h <= 17) return 88 - (h - 9) * 0.8;
    if (h <= 21) return 81.6 - (h - 17) * 9;
    return 45.6 - (h - 21) * 7;
  };

  const getCaffeineValue = (h: number) => {
    if (h <= 7) return 30;
    if (h <= 9) return 30 + (h - 7) * 34;
    if (h <= 13) return 98 - (h - 9) * 16;
    if (h <= 15) return 20;
    if (h <= 17) return 20 + (h - 15) * 25;
    if (h <= 21) return 70 - (h - 17) * 10;
    return 45;
  };

  const svgWidth = 800;
  const svgHeight = 280;
  const paddingX = 40;
  const paddingY = 40;
  const plotWidth = svgWidth - paddingX * 2;
  const plotHeight = svgHeight - paddingY * 2;

  const points3nergy = hours.map((h, i) => {
    const x = paddingX + (i / (hours.length - 1)) * plotWidth;
    const val = get3nergyValue(h);
    const y = svgHeight - paddingY - (val / 100) * plotHeight;
    return { x, y, h, val };
  });

  const pointsCaffeine = hours.map((h, i) => {
    const x = paddingX + (i / (hours.length - 1)) * plotWidth;
    const val = getCaffeineValue(h);
    const y = svgHeight - paddingY - (val / 100) * plotHeight;
    return { x, y, h, val };
  });

  const createSplinePath = (pts: { x: number; y: number }[]) => {
    return pts.reduce((acc, pt, i, arr) => {
      if (i === 0) return `M ${pt.x},${pt.y}`;
      const prev = arr[i - 1];
      const cx = (prev.x + pt.x) / 2;
      return `${acc} C ${cx},${prev.y} ${cx},${pt.y} ${pt.x},${pt.y}`;
    }, "");
  };

  const path3nergy = createSplinePath(points3nergy);
  const pathCaffeine = createSplinePath(pointsCaffeine);

  const current3nergy = get3nergyValue(activeHour);
  const currentCaffeine = getCaffeineValue(activeHour);

  const formatHour = (h: number) => {
    const period = h >= 12 && h < 24 ? "PM" : "AM";
    const display = h % 12 === 0 ? 12 : h % 12;
    return `${display}:00 ${period}`;
  };

  return (
    <section className="w-full py-20 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-phase mb-3 border border-white/10">
              <Activity className="w-3.5 h-3.5" />
              <span>CLINICAL BIO-TELEMETRY LAB</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Sustained Cellular Bioenergetics vs. Adrenal Spikes.
            </h2>
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
              Standard high-stimulant drinks flood the brain with synthetic caffeine, depleting adrenal reserves and triggering severe afternoon adenosine rebound. 3NERGY fuels mitochondrial respiration smoothly across the full 24-hour cycle.
            </p>
          </div>

          {/* Toggle view mode */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 self-start md:self-auto text-xs font-mono">
            <button
              onClick={() => setViewMode("comparison")}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                viewMode === "comparison"
                  ? "bg-phase text-black font-semibold shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Protocol vs Stimulants
            </button>
            <button
              onClick={() => setViewMode("3nergy-only")}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                viewMode === "3nergy-only"
                  ? "bg-phase text-black font-semibold shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              3NERGY Pure Plateau
            </button>
          </div>
        </div>

        {/* Graph Display Card */}
        <div className="rounded-3xl glass-panel-elevated p-6 sm:p-10 border border-white/15 relative overflow-hidden">
          
          {/* Top Live Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 mb-6 border-b border-white/10">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                Scrubber Time
              </span>
              <div className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>{formatHour(activeHour)}</span>
                <span className="text-[10px] font-mono text-phase px-2 py-0.5 rounded bg-phase/10 border border-phase/20">
                  {activeHour < 11 ? "DAWN" : activeHour < 17 ? "ZENITH" : "RESTORE"}
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#10b981]">
                3NERGY ATP Yield
              </span>
              <div className="font-display text-xl sm:text-2xl font-bold text-[#10b981] flex items-center gap-1.5">
                <span>{current3nergy.toFixed(1)}%</span>
                <span className="text-xs font-mono font-normal text-white/50">Optimal</span>
              </div>
            </div>

            {viewMode === "comparison" && (
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-red-400">
                  High-Stimulant Spike/Crash
                </span>
                <div className="font-display text-xl sm:text-2xl font-bold text-red-400 flex items-center gap-1.5">
                  <span>{currentCaffeine.toFixed(1)}%</span>
                  <span className="text-xs font-mono font-normal text-white/50">
                    {currentCaffeine < 35 ? "Crash Valley" : currentCaffeine > 80 ? "Tremor Peak" : "Turbulent"}
                  </span>
                </div>
              </div>
            )}

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                Adenosine Modulation
              </span>
              <div className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-phase" />
                <span className="text-sm font-mono text-white/80">Protected Receptor</span>
              </div>
            </div>
          </div>

          {/* Interactive SVG Kinetic Curve */}
          <div className="relative w-full h-[300px] sm:h-[360px] select-none">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="energyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                </linearGradient>

                <linearGradient id="crashGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[25, 50, 75].map((lvl) => {
                const y = svgHeight - paddingY - (lvl / 100) * plotHeight;
                return (
                  <line
                    key={lvl}
                    x1={paddingX}
                    y1={y}
                    x2={svgWidth - paddingX}
                    y2={y}
                    stroke="rgba(255,255,255,0.06)"
                    strokeDasharray="4 4"
                  />
                );
              })}

              {/* Conventional Stimulant Curve */}
              {viewMode === "comparison" && (
                <>
                  <path
                    d={`${pathCaffeine} L ${svgWidth - paddingX},${svgHeight - paddingY} L ${paddingX},${svgHeight - paddingY} Z`}
                    fill="url(#crashGrad)"
                  />
                  <path
                    d={pathCaffeine}
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2.5"
                    strokeDasharray="6 4"
                    className="opacity-70"
                  />
                </>
              )}

              {/* 3NERGY Spline Area & Line */}
              <path
                d={`${path3nergy} L ${svgWidth - paddingX},${svgHeight - paddingY} L ${paddingX},${svgHeight - paddingY} Z`}
                fill="url(#energyGrad)"
              />
              <path
                d={path3nergy}
                fill="none"
                stroke="var(--phase-accent)"
                strokeWidth="3.5"
                className="transition-all duration-300 filter drop-shadow-[0_0_10px_var(--phase-glow)]"
              />

              {/* Active Scrubber */}
              {(() => {
                const index = hours.indexOf(activeHour);
                const x = paddingX + (index / (hours.length - 1)) * plotWidth;
                const pt3 = points3nergy[index];
                const ptC = pointsCaffeine[index];

                return (
                  <g key="scrubber">
                    <line
                      x1={x}
                      y1={paddingY}
                      x2={x}
                      y2={svgHeight - paddingY}
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1.5"
                    />

                    <circle
                      cx={x}
                      cy={pt3.y}
                      r="6"
                      fill="var(--phase-accent)"
                      stroke="#080a09"
                      strokeWidth="2"
                      className="filter drop-shadow-[0_0_8px_var(--phase-accent)]"
                    />

                    {viewMode === "comparison" && (
                      <circle
                        cx={x}
                        cy={ptC.y}
                        r="5"
                        fill="#ef4444"
                        stroke="#080a09"
                        strokeWidth="2"
                      />
                    )}
                  </g>
                );
              })()}
            </svg>
          </div>

          {/* Time Scrubber Slider Controls */}
          <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-white/50">
              <span>06:00 AM (Sunrise)</span>
              <span>12:00 PM (Solar Peak)</span>
              <span>18:00 PM (Sunset)</span>
              <span>24:00 PM (Delta Sleep)</span>
            </div>

            <input
              type="range"
              min={6}
              max={24}
              step={1}
              value={activeHour}
              onChange={(e) => {
                const val = Number(e.target.value);
                setActiveHour(val);
                if (val < 11) setPhase("dawn");
                else if (val < 17) setPhase("zenith");
                else setPhase("restore");
              }}
              className="w-full accent-phase cursor-pointer h-2 bg-white/10 rounded-lg appearance-none"
            />

            {/* Quick Phase Teleport Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-white/40">Inspect Phase:</span>
                <button
                  onClick={() => {
                    setActiveHour(8);
                    setPhase("dawn");
                  }}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-[#f59e0b]/15 text-[#fef3c7] hover:bg-[#f59e0b]/25 transition-colors border border-[#f59e0b]/30"
                >
                  08:00 (Dawn Rise)
                </button>
                <button
                  onClick={() => {
                    setActiveHour(14);
                    setPhase("zenith");
                  }}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-[#10b981]/15 text-[#d1fae5] hover:bg-[#10b981]/25 transition-colors border border-[#10b981]/30"
                >
                  14:00 (Zenith Flow)
                </button>
                <button
                  onClick={() => {
                    setActiveHour(21);
                    setPhase("restore");
                  }}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-[#6366f1]/15 text-[#e0e7ff] hover:bg-[#6366f1]/25 transition-colors border border-[#6366f1]/30"
                >
                  21:00 (Restore Prime)
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-white/70">
                  <span className="w-2.5 h-2.5 rounded-full bg-phase" />
                  <span>3NERGY Cellular Plateau</span>
                </div>
                {viewMode === "comparison" && (
                  <div className="flex items-center gap-1.5 text-white/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span>Conventional Energy Drinks</span>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
