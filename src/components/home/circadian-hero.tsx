"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star, ShieldCheck } from "lucide-react";
import { ChronoBottle } from "@/components/visuals/chrono-bottle";
import { useCircadianStore } from "@/store/circadian-store";
import { PRODUCTS } from "@/data/products";

export function CircadianHero() {
  const { addToCart } = useCircadianStore();
  const [heroVisual, setHeroVisual] = useState<"photo" | "spec">("photo");
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState(0);
  const heroProduct = PRODUCTS[selectedPhaseIndex];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#557864] via-[#678b75] to-[#7f9f8c] text-white pt-28 sm:pt-36 pb-16 sm:pb-24">
      
      {/* Soft Background Cloud & Landscape Accents */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl pointer-events-none" />

      {/* Main Wide Content Canvas */}
      <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        {/* Top Headline Grid matching Inspiration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 sm:mb-16">
          
          {/* Left: "Feel Good" + Star Reviews */}
          <div className="lg:col-span-4 space-y-3">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[9.5rem] font-bold tracking-tight leading-[0.88] text-white drop-shadow-sm">
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
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-5 px-4">
            <p className="text-xs sm:text-sm text-white/95 leading-relaxed max-w-md">
              Three bio-timed daily formulations aligned with your natural cortisol and melatonin rhythms. Clean morning alertness, steady afternoon stamina, and deep restorative sleep.
            </p>

            {/* Circular Green Shop Button */}
            <Link
              href="/shop"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1b3a27] hover:bg-[#102417] text-white flex flex-col items-center justify-center transition-colors duration-200 shadow-lg border border-white/20 hover:border-white/35"
            >
              <ArrowUpRight className="w-5 h-5 text-white/90 transition-colors" />
              <span className="text-[11px] font-semibold tracking-tight mt-0.5">Shop Now</span>
            </Link>
          </div>

          {/* Right: "Work Excellent" */}
          <div className="lg:col-span-4 text-left lg:text-right">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[9.5rem] font-bold tracking-tight leading-[0.88] text-white drop-shadow-sm">
              Work <br className="hidden lg:block" />
              Excellent
            </h2>
          </div>

        </div>

        {/* Center Translucent Glass Container with Grounded Bottle */}
        <div className="relative z-10 max-w-6xl xl:max-w-7xl 2xl:max-w-[1560px] mx-auto rounded-[2.5rem] bg-white/20 backdrop-blur-md border border-white/30 p-8 sm:p-12 lg:p-14 shadow-2xl overflow-visible">

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Feature Pill & Phase Switcher */}
            <div className="md:col-span-3 flex flex-col justify-center items-start order-2 md:order-1 space-y-3">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/30 shadow-sm flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#18261d] flex items-center justify-center text-white text-[11px] font-bold shrink-0">
                  {heroProduct.phaseNumber}
                </div>
                <div className="leading-snug">
                  <div className="text-xs font-bold text-white">
                    {heroProduct.name}
                  </div>
                  <div className="text-[11px] text-white/80 font-medium">
                    {heroProduct.timeWindow}
                  </div>
                </div>
              </div>

              {/* 3-Phase Navigation Switcher */}
              <div className="flex items-center gap-1 p-1 bg-black/20 backdrop-blur-md rounded-2xl border border-white/20 text-xs">
                {PRODUCTS.map((prod, idx) => (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => setSelectedPhaseIndex(idx)}
                    className={`flex-1 py-1.5 px-2.5 rounded-xl text-[11px] font-semibold transition-colors duration-200 ${
                      selectedPhaseIndex === idx
                        ? "bg-white text-[#1b3a27] shadow-sm"
                        : "text-white/75 hover:text-white"
                    }`}
                  >
                    {prod.phaseNumber} {prod.phase === "energy" ? "Dawn" : prod.phase === "recovery" ? "Midday" : "Rest"}
                  </button>
                ))}
              </div>
            </div>

            {/* Center Bottle Render / Centerpiece Photography */}
            <div className="md:col-span-6 flex flex-col items-center justify-center order-1 md:order-2 my-4 sm:my-0 space-y-4">
              
              {/* Visual Mode Toggle */}
              <div className="flex items-center justify-center gap-1 bg-black/20 backdrop-blur-md p-1 rounded-full border border-white/25 text-[11px] font-medium z-20">
                <button
                  type="button"
                  onClick={() => setHeroVisual("photo")}
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-colors duration-200 ${
                    heroVisual === "photo"
                      ? "bg-white text-[#1b3a27] shadow-sm"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Editorial Still
                </button>
                <button
                  type="button"
                  onClick={() => setHeroVisual("spec")}
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-colors duration-200 ${
                    heroVisual === "spec"
                      ? "bg-white text-[#1b3a27] shadow-sm"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Formula Spec
                </button>
              </div>

              {heroVisual === "photo" ? (
                <div
                  className="relative cursor-pointer"
                  onClick={() => addToCart(heroProduct)}
                >
                  {/* Photo Container: Matches 3:4 Aspect Ratio Perfectly with ZERO Cropping */}
                  <div className="relative w-[280px] sm:w-[320px] md:w-[340px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/40 bg-[#f4efe8]">
                    <Image
                      key={heroProduct.id}
                      src={heroProduct.image}
                      alt={`${heroProduct.name} studio packshot on travertine plinth`}
                      fill
                      sizes="(max-width: 768px) 300px, 340px"
                      className="object-contain animate-in fade-in"
                      priority
                    />
                  </div>

                  {/* Floating Quick Action Badge: Anchored cleanly below container with zero text obstruction */}
                  <div className="absolute -bottom-4 inset-x-0 flex justify-center pointer-events-auto z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(heroProduct);
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#1b3a27] hover:bg-[#102417] text-white text-xs font-semibold shadow-lg transition-colors duration-200 flex items-center gap-1.5 border border-white/30 hover:border-white/40 backdrop-blur-md active:opacity-90"
                    >
                      <span>Quick Add · ${heroProduct.price}.00</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative cursor-pointer" onClick={() => addToCart(heroProduct)}>
                  <ChronoBottle phase={heroProduct.phase} size="hero" showRestingCapsules={true} />
                  
                  {/* Floating Quick Action Badge */}
                  <div className="absolute -bottom-4 inset-x-0 flex justify-center pointer-events-auto z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(heroProduct);
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#1b3a27] hover:bg-[#102417] text-white text-xs font-semibold shadow-lg transition-colors duration-200 flex items-center gap-1.5 border border-white/30 hover:border-white/40 backdrop-blur-md active:opacity-90"
                    >
                      <span>Quick Add · ${heroProduct.price}.00</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Clean Label / Clinical Certification Emblem */}
            <div className="md:col-span-3 flex justify-start md:justify-end items-center order-3">
              <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/30 shadow-sm flex items-center gap-3 text-left md:text-right">
                <div className="order-2 md:order-1 leading-snug">
                  <div className="text-xs font-bold text-white">
                    Clean Label Certified
                  </div>
                  <div className="text-[11px] text-white/80 font-medium">
                    100% Third-Party Tested
                  </div>
                </div>
                <div className="order-1 md:order-2 w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-emerald-300 shrink-0 border border-white/20">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
