"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Star, Award } from "lucide-react";
import { ChronoBottle } from "@/components/visuals/chrono-bottle";
import { useCircadianStore } from "@/store/circadian-store";
import { PRODUCTS } from "@/data/products";

export function CircadianHero() {
  const { addToCart } = useCircadianStore();
  const heroProduct = PRODUCTS[0]; // Daily Energy & Focus

  return (
    <section className="relative w-full pt-4 pb-20 sm:pb-32 px-4 sm:px-8 overflow-hidden">
      {/* Outer Sage Green Atmospheric Hero Canvas */}
      <div className="max-w-7xl mx-auto relative rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-[#5c7f6b] via-[#6e917d] to-[#82a490] px-6 sm:px-12 pt-12 sm:pt-16 pb-20 sm:pb-28 text-white shadow-xl">
        
        {/* Soft Background Cloud & Landscape Accents */}
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/15 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

        {/* Top Headline Grid matching Inspiration */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-8 sm:mb-12">
          
          {/* Left: "Feel Good" + Star Reviews */}
          <div className="lg:col-span-4 space-y-3">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-white drop-shadow-sm">
              Feel Good
            </h1>
            
            <div className="pt-2 flex items-center gap-2 text-xs text-white/90">
              <span className="text-white/80">Reviewed on</span>
              <div className="flex items-center text-amber-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-medium ml-1">Latest Blend 5.0 Rating</span>
            </div>
          </div>

          {/* Center: Circular Shop Now Button & Subtext */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4 px-2">
            <p className="text-xs sm:text-sm text-white/95 leading-relaxed max-w-sm">
              Three bio-timed daily formulations aligned with your natural cortisol and melatonin rhythms. Clean morning alertness, steady afternoon stamina, and deep restorative sleep.
            </p>

            {/* Circular Green Shop Button */}
            <Link
              href="/shop"
              className="group w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#1b3a27] hover:bg-[#12281b] text-white flex flex-col items-center justify-center transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 border border-white/20"
            >
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span className="text-[11px] font-semibold tracking-tight mt-0.5">Shop Now</span>
            </Link>
          </div>

          {/* Right: "Work Excellent" */}
          <div className="lg:col-span-4 text-left lg:text-right">
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-white drop-shadow-sm">
              Work <br className="hidden lg:block" />
              Excellent
            </h2>
          </div>

        </div>

        {/* Center Translucent Glass Container with Grounded Bottle */}
        <div className="relative z-10 max-w-4xl mx-auto rounded-[2rem] bg-white/25 backdrop-blur-md border border-white/35 p-6 sm:p-10 shadow-2xl overflow-hidden">

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Feature Pill */}
            <div className="md:col-span-3 flex justify-start order-2 md:order-1">
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-3.5 border border-white/40 shadow-sm flex items-center gap-3">
                <div className="w-8 h-10 rounded-lg bg-[#1a221c] flex items-center justify-center text-white text-[10px] font-bold">
                  3N
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white leading-tight">
                    Daily Wellness Support
                  </div>
                  <div className="text-[10px] text-white/80 font-medium">
                    Energy & focus formula
                  </div>
                </div>
              </div>
            </div>

            {/* Center Bottle Render */}
            <div className="md:col-span-6 flex justify-center order-1 md:order-2 my-2 sm:my-0">
              <div className="relative group cursor-pointer" onClick={() => addToCart(heroProduct)}>
                <ChronoBottle phase="energy" size="hero" showRestingCapsules={true} />
                
                {/* Floating Quick Action Badge */}
                <div className="absolute -bottom-3 inset-x-0 flex justify-center pointer-events-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(heroProduct);
                    }}
                    className="px-5 py-2 rounded-full bg-[#1b3a27] hover:bg-[#12281b] text-white text-xs font-semibold shadow-lg transition-transform active:scale-95 flex items-center gap-1.5"
                  >
                    <span>Quick Add · $30.00</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Clean Label / Clinical Certification Emblem */}
            <div className="md:col-span-3 flex justify-end order-3">
              <div className="flex items-center gap-2.5 text-right bg-white/20 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/30">
                <Award className="w-5 h-5 text-amber-200 shrink-0" />
                <div className="text-xs font-semibold text-white leading-tight">
                  Awarded Clean Label <br />
                  <span className="text-white/80 font-normal">100% Third-Party Tested</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Soft Bottom Mist Bleed Transition into Page */}
        <div className="absolute -bottom-1 inset-x-0 h-16 bg-gradient-to-t from-[#fcfcfb] to-transparent pointer-events-none" />

      </div>
    </section>
  );
}
