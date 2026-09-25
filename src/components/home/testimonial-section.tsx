"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, Quote, ArrowUpRight, Sparkles } from "lucide-react";
import { useCircadianStore } from "@/store/circadian-store";

export function TestimonialSection() {
  const { openQuiz } = useCircadianStore();
  const [activeTab, setActiveTab] = useState<number>(0);

  const testimonials = [
    {
      quote:
        "Switching from monolithic 400mg caffeine pre-workouts to the 3NERGY circadian protocol transformed my sleep metrics. The Dawn Rise gives clean ATP without the tachycardia, and Restore Prime with Magtein® added 45 minutes of slow-wave sleep on my Whoop band.",
      author: "Dr. Elena Rostova",
      role: "Cognitive Neuroscientist & Human Performance Researcher",
      location: "Cambridge, UK",
      rating: 5,
      metric: "+42% Delta Slow-Wave Sleep",
    },
    {
      quote:
        "In algorithmic trading, an afternoon cognitive dip is unacceptable. Zenith Flow provides sharp, quiet cerebral flow without that agitated caffeine tremor. It feels like your brain simply operates with 0ms latency.",
      author: "Marcus Vance",
      role: "Quantitative Trader & Endurance Triathlete",
      location: "Geneva, Switzerland",
      rating: 5,
      metric: "Zero 2 PM Brain Fog",
    },
    {
      quote:
        "The label transparency is what made me an advocate. Independent HPLC verification, zero synthetic fillers, and micro-encapsulated ubiquinol that actually absorbs. This is pharmaceutical-grade chrono-nutrition.",
      author: "Dr. Jonathan Aris",
      role: "Biochemical Cellular Longevity Fellow",
      location: "San Francisco, CA",
      rating: 5,
      metric: "100% CoA Verified",
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Testimonial Carousel Card */}
        <div className="rounded-3xl glass-panel-elevated p-8 sm:p-14 border border-white/15 relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-phase mb-6">
            <Quote className="w-6 h-6" />
          </div>

          <div className="flex justify-center gap-1 text-amber-400 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          <p className="font-display text-lg sm:text-2xl text-white font-medium leading-relaxed max-w-2xl mx-auto mb-8">
            &ldquo;{testimonials[activeTab].quote}&rdquo;
          </p>

          <div className="space-y-1">
            <div className="font-display font-bold text-base text-white">
              {testimonials[activeTab].author}
            </div>
            <div className="text-xs text-white/50 font-mono">
              {testimonials[activeTab].role} • {testimonials[activeTab].location}
            </div>
            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono text-[#10b981] bg-[#10b981]/15 px-3 py-1 rounded-full border border-[#10b981]/30">
                Verified Clinical Result: {testimonials[activeTab].metric}
              </span>
            </div>
          </div>

          {/* Selector dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeTab === idx ? "w-8 bg-phase" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* High-Impact Bottom Callout */}
        <div className="rounded-[2.5rem] p-10 sm:p-16 border border-white/15 relative overflow-hidden text-center bg-gradient-to-b from-[#111613] to-[#080a09] shadow-2xl">
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-phase opacity-15 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-phase flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              SYNCHRONIZE YOUR 24-HOUR BIOLOGY
            </span>

            <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
              Ready to feel your best throughout the entire day?
            </h3>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Join thousands who trust 3NERGY for clean, science-backed circadian vitality. Zero stimulants, zero afternoon crashes, and verified slow-wave delta sleep.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/shop"
                className="px-8 py-4 rounded-full bg-phase text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2 shadow-2xl"
              >
                <span>Shop All 3 Formulations</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <button
                onClick={openQuiz}
                className="px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/15"
              >
                <span>Take Chrono-Diagnostic</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
