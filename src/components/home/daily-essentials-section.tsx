"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Calculator, ArrowUpRight, Check } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCircadianStore } from "@/store/circadian-store";
import { ChronoBottle } from "@/components/visuals/chrono-bottle";

export function DailyEssentialsSection() {
  const { addToCart, openCalculator } = useCircadianStore();
  const [filter, setFilter] = useState<"all" | "new" | "popular">("popular");
  const [searchTerm, setSearchTerm] = useState("");
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleQuickAdd = (product: typeof PRODUCTS[0]) => {
    addToCart(product, 1, "30-day");
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    if (searchTerm) {
      return (
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (filter === "new") return p.id === "daily-recovery";
    if (filter === "popular") return true;
    return true;
  });

  return (
    <section id="shop" className="w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-16 bg-white border-t border-black/[0.04]">
      <div className="w-full max-w-[1500px] 2xl:max-w-[1680px] mx-auto space-y-20">
        
        {/* Top Header & Search / Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-black/[0.06]">
          <div>
            <span className="text-xs font-semibold text-[#1f3d2b] block mb-1.5">
              Core Formulations
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#141b17] leading-[1.05]">
              Meet Your Daily <br className="hidden sm:block" />
              Essentials
            </h2>
          </div>

          {/* Search & Filter Tabs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-full bg-[#f4f6f4] text-xs text-[#141b17] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f3d2b] w-full sm:w-48 transition-colors duration-200"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-[#f4f6f4] rounded-full self-start">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                  filter === "all"
                    ? "bg-white text-[#1f3d2b] font-bold shadow-sm"
                    : "text-[#5a6660] hover:text-[#1f3d2b]"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("new")}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                  filter === "new"
                    ? "bg-white text-[#1f3d2b] font-bold shadow-sm"
                    : "text-[#5a6660] hover:text-[#1f3d2b]"
                }`}
              >
                New Arrived
              </button>
              <button
                onClick={() => setFilter("popular")}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                  filter === "popular"
                    ? "bg-[#1f3d2b] text-white font-bold shadow-sm"
                    : "text-[#5a6660] hover:text-[#1f3d2b]"
                }`}
              >
                Most Popular
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pastel Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const isAdded = addedId === product.id;
            return (
              <div
                key={product.id}
                className={`group rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 border ${product.bgColorClass} ${product.borderColorClass} hover:border-black/25`}
              >
                {/* Card Top: Price & Quick Add Button */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-bold text-[#141b17] tracking-tight">
                    ${product.price}.00
                  </span>
                  <button
                    onClick={() => handleQuickAdd(product)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 border border-black/5 shadow-sm ${
                      isAdded
                        ? "bg-[#1f3d2b] text-white"
                        : "bg-white/80 hover:bg-[#1f3d2b] text-[#1f3d2b] hover:text-white active:bg-[#14281c]"
                    }`}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    {isAdded ? (
                      <Check className="w-4 h-4 animate-in zoom-in" />
                    ) : (
                      <ShoppingBag className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Card Center: High-Fidelity Bottle Render */}
                <div className="my-6 py-4 flex justify-center relative">
                  <div>
                    <ChronoBottle
                      phase={product.phase}
                      size="md"
                      showRestingCapsules={true}
                    />
                  </div>
                </div>

                {/* Card Bottom: Product Title & Description */}
                <div className="space-y-2 pt-2 border-t border-black/[0.06]">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-[#141b17]">
                      {product.name}
                    </h3>
                    <span className="text-xs text-[#5a6660] font-medium">
                      60 capsules
                    </span>
                  </div>
                  <p className="text-xs text-[#5a6660] leading-relaxed">
                    {product.description}
                  </p>

                  <div className="pt-3 flex items-center justify-between">
                    <Link
                      href={`/shop#${product.id}`}
                      className="text-[11px] font-semibold text-[#1f3d2b] hover:underline flex items-center gap-1"
                    >
                      <span>View Ingredients</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="text-[11px] font-bold text-[#1f3d2b] hover:text-[#162e20] bg-white/70 hover:bg-white px-3 py-1 rounded-full border border-black/5 transition-colors"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Rigor & Sourcing Banner */}
        <div className="rounded-[2.5rem] bg-[#f9faf9] border border-black/[0.06] p-8 sm:p-12 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold text-[#1f3d2b]">
                Clinical Rigor &amp; Honesty
              </span>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#141b17] leading-[1.05]">
                Formulated by Physicians, <br />
                Verified by Clinical Data.
              </h3>

              <p className="text-sm text-[#5a6660] leading-relaxed">
                You shouldn&apos;t need a chemistry degree to understand what&apos;s in your supplements. 3NERGY keeps every formula intentional, transparent, and easy to understand — so you can focus on feeling your best every single day.
              </p>

              {/* 3 Bullet Points with Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#eaf1ed] flex items-center justify-center text-[#1f3d2b]">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-bold text-[#141b17]">
                    Purposeful formulas
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#eaf1ed] flex items-center justify-center text-[#1f3d2b]">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-bold text-[#141b17]">
                    Transparent labels
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#eaf1ed] flex items-center justify-center text-[#1f3d2b]">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-bold text-[#141b17]">
                    Made for consistency
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/shop"
                  className="px-7 py-3 rounded-full bg-[#1f3d2b] hover:bg-[#162e20] text-white text-xs font-semibold tracking-wide transition-colors duration-200 border border-transparent hover:border-white/10 active:opacity-90 shadow-sm flex items-center gap-2"
                >
                  <span>Shop Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={openCalculator}
                  className="px-7 py-3 rounded-full bg-white hover:bg-gray-50 text-[#141b17] border border-black/15 hover:border-black/30 text-xs font-semibold tracking-wide transition-colors duration-200 active:bg-gray-100 shadow-sm flex items-center gap-2"
                >
                  <Calculator className="w-3.5 h-3.5 text-[#1f3d2b]" />
                  <span>Fitness Calculator</span>
                </button>
              </div>
            </div>

            {/* Right Graphic Column: Doctor with Consistency Gauge */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-black/5 bg-[#9dbca9]">
                <Image
                  src="/images/doctor_gauge.png"
                  alt="Doctor with consistency metric"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
