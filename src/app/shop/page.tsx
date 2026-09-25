"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { useCircadianStore } from "@/store/circadian-store";
import {
  Check,
  Plus,
  ArrowRight,
  ShieldCheck,
  Star,
  RefreshCw,
  Truck,
  Info,
  X,
} from "lucide-react";
import { ChronoBottle } from "@/components/visuals/chrono-bottle";
import { Product } from "@/types";

export function ShopPage() {
  const { addToCart } = useCircadianStore();
  const [selectedProductDetails, setSelectedProductDetails] = useState<Product | null>(null);
  const [addedId, setAddedId] = useState<string | null>(null);
  const [catalogView, setCatalogView] = useState<"photo" | "spec">("photo");

  // Cadence selections for individual products
  const [cadences, setCadences] = useState<{ [id: string]: "30-day" | "60-day" | "one-time" }>({
    "daily-energy": "30-day",
    "daily-recovery": "30-day",
    "daily-rest": "30-day",
  });

  const setProductCadence = (id: string, cad: "30-day" | "60-day" | "one-time") => {
    setCadences((prev) => ({ ...prev, [id]: cad }));
  };

  const calculatePrice = (base: number, cad: "30-day" | "60-day" | "one-time") => {
    if (cad === "30-day") return (base * 0.85).toFixed(2);
    if (cad === "60-day") return (base * 0.8).toFixed(2);
    return base.toFixed(2);
  };

  const handleAdd = (product: Product, cadence: "30-day" | "60-day" | "one-time") => {
    addToCart(product, 1, cadence);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const handleAddBundle = () => {
    PRODUCTS.forEach((p) => addToCart(p, 1, "30-day"));
    setAddedId("bundle");
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div className="flex flex-col w-full min-h-screen pt-28 pb-16 px-6 sm:px-12 lg:px-16 bg-[#fcfcfb] text-[#141b17]">
      <div className="w-full max-w-[1500px] 2xl:max-w-[1680px] mx-auto space-y-16">
        
        {/* Shop Header */}
        <section className="text-center max-w-3xl mx-auto pt-4 space-y-4">
          <span className="text-xs font-semibold text-[#1f3d2b] block mb-1.5">
            Direct-to-Consumer Wellness
          </span>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#141b17] leading-[1.05]">
            Daily Formulations <br />
            for Optimal Living.
          </h1>

          <p className="text-sm sm:text-base text-[#5a6660] leading-relaxed max-w-xl mx-auto">
            Direct-from-source botanical extracts and active chelated minerals. 30-day risk-free trial with free carbon-neutral shipping on orders over $50.
          </p>
        </section>

        {/* Featured Flagship: Complete Daily Trio Bundle */}
        <section id="trio-bundle" className="rounded-[2.5rem] bg-white p-8 sm:p-12 border border-black/[0.08] shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Lineup: Real Trio Bundle Studio Photography */}
            <div className="lg:col-span-6 flex justify-center py-2">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-black/5 bg-[#f4f6f4] group">
                <Image
                  src="/images/trio_bundle_hero.png"
                  alt="The Complete 3NERGY Daily Trio supplement line on travertine plinth"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>

            {/* Bundle Details & Purchase */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#eaf1ed] text-[#1f3d2b] border border-[#1f3d2b]/15">
                  Best Value • Save $15.00
                </span>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-medium">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>5.0 (4,890 Reviews)</span>
                </div>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#141b17] tracking-tight">
                  The Complete Daily Trio
                </h2>
                <p className="text-xs sm:text-sm text-[#5a6660] mt-2 leading-relaxed">
                  Your complete 24-hour daily routine. Experience clean morning energy, midday resilience, and deep restorative sleep every day. Includes all three core $30 essentials with free express shipping.
                </p>
              </div>

              {/* What's inside list */}
              <div className="space-y-2 text-xs text-[#3d4d42] font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2e593f]" />
                  <span>01 • Daily Energy &amp; Focus (Organic Matcha, B12, CoQ10)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#8b6a3e]" />
                  <span>02 • Daily Recovery &amp; Stamina (Tart Cherry, Magnesium Malate)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#5b4e78]" />
                  <span>03 • Daily Rest &amp; Sleep (Chamomile, L-Theanine, Magnesium Glycinate)</span>
                </div>
              </div>

              {/* Pricing & Add to Cart */}
              <div className="pt-4 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#1f3d2b]">
                      $75.00
                    </span>
                    <span className="text-sm text-gray-400 line-through">$90.00</span>
                    <span className="text-xs text-[#1f3d2b] bg-[#eaf1ed] px-2 py-0.5 rounded-full font-bold">
                      Save 17%
                    </span>
                  </div>
                  <span className="text-[11px] text-[#5a6660] block mt-0.5">
                    Includes Free Express Shipping &amp; 30-Day Money-Back Guarantee
                  </span>
                </div>

                <button
                  onClick={handleAddBundle}
                  className="px-8 py-3.5 rounded-full bg-[#1f3d2b] hover:bg-[#162e20] text-white font-semibold text-xs tracking-wide transition-colors duration-200 flex items-center gap-2 shadow-sm border border-transparent hover:border-white/10 active:opacity-90"
                >
                  {addedId === "bundle" ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <span>Get The Trio • $75.00</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* Individual Formulations Catalog Grid */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/[0.06]">
            <div>
              <span className="text-xs font-semibold text-[#1f3d2b] block mb-1">
                Standalone Formulations
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#141b17]">
                Shop Core Essentials
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <p className="text-[#5a6660] text-xs max-w-xs">
                Each core formulation is purposefully priced at $30 with generous subscriber discounts.
              </p>
              {/* Photo vs Spec Toggle */}
              <div className="flex items-center gap-1 p-1 bg-[#f4f6f4] rounded-full self-start">
                <button
                  type="button"
                  onClick={() => setCatalogView("photo")}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    catalogView === "photo"
                      ? "bg-white text-[#1f3d2b] font-bold shadow-xs"
                      : "text-[#5a6660] hover:text-[#1f3d2b]"
                  }`}
                >
                  Studio Photo
                </button>
                <button
                  type="button"
                  onClick={() => setCatalogView("spec")}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    catalogView === "spec"
                      ? "bg-white text-[#1f3d2b] font-bold shadow-xs"
                      : "text-[#5a6660] hover:text-[#1f3d2b]"
                  }`}
                >
                  Formula Spec
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => {
              const currentCadence = cadences[product.id] || "30-day";
              const currentPrice = calculatePrice(product.price, currentCadence);
              const isAdded = addedId === product.id;

              return (
                <div
                  key={product.id}
                  id={product.id}
                  className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 border transition-colors duration-200 hover:border-black/25 ${product.bgColorClass} ${product.borderColorClass}`}
                >
                  {/* Top Phase Tag & Capsule Count */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-[#1f3d2b] font-bold">
                        {product.phaseNumber} • {product.timeWindow}
                      </span>
                      <span className="text-[#5a6660] text-xs font-medium">{product.capsuleCount} Capsules</span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#141b17]">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#5a6660] mt-1 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Clean Grounded Bottle Visual / Real Studio Packshot */}
                  <div className="my-2 flex items-center justify-center">
                    {catalogView === "photo" ? (
                      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-white/40 border border-black/5 shadow-xs">
                        <Image
                          src={product.image}
                          alt={`${product.name} studio packshot`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="relative w-full h-72 flex items-center justify-center">
                        <ChronoBottle
                          phase={product.phase}
                          size="md"
                          showRestingCapsules={true}
                        />
                      </div>
                    )}
                  </div>

                  {/* Key Active Compounds */}
                  <div className="space-y-2 pt-2 border-t border-black/[0.06] text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#5a6660]">
                        Key Active Ingredients
                      </span>
                      <button
                        onClick={() => setSelectedProductDetails(product)}
                        className="text-[11px] text-[#1f3d2b] font-bold hover:underline flex items-center gap-0.5"
                      >
                        <Info className="w-3 h-3" />
                        <span>View Supplement Facts</span>
                      </button>
                    </div>

                    <ul className="space-y-1.5 text-[#3d4d42]">
                      {product.compounds.slice(0, 3).map((comp, idx) => (
                        <li key={idx} className="flex justify-between items-center text-xs">
                          <span>{comp.name.split("(")[0]}</span>
                          <span className="font-semibold text-[#1f3d2b]">{comp.dose}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cadence Selection for this item */}
                  <div className="space-y-2 pt-1">
                    <div className="grid grid-cols-3 gap-1 bg-white/70 p-1 rounded-xl text-[10px] font-medium border border-black/5">
                      <button
                        onClick={() => setProductCadence(product.id, "30-day")}
                        className={`py-1.5 rounded-lg transition-colors ${
                          currentCadence === "30-day"
                            ? "bg-[#1f3d2b] text-white font-bold shadow-xs"
                            : "text-[#5a6660] hover:text-[#141b17]"
                        }`}
                      >
                        Monthly (-15%)
                      </button>
                      <button
                        onClick={() => setProductCadence(product.id, "60-day")}
                        className={`py-1.5 rounded-lg transition-colors ${
                          currentCadence === "60-day"
                            ? "bg-[#1f3d2b] text-white font-bold shadow-xs"
                            : "text-[#5a6660] hover:text-[#141b17]"
                        }`}
                      >
                        60-Day (-20%)
                      </button>
                      <button
                        onClick={() => setProductCadence(product.id, "one-time")}
                        className={`py-1.5 rounded-lg transition-colors ${
                          currentCadence === "one-time"
                            ? "bg-white text-[#141b17] font-bold shadow-xs"
                            : "text-[#5a6660] hover:text-[#141b17]"
                        }`}
                      >
                        One-Time
                      </button>
                    </div>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-[#141b17]">
                        ${currentPrice}
                      </span>
                      <span className="text-[10px] text-[#5a6660] block">
                        {currentCadence === "one-time" ? "Single Bottle" : "Auto-Delivery"}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAdd(product, currentCadence)}
                      className="px-5 py-2.5 rounded-full bg-[#1f3d2b] hover:bg-[#162e20] text-white font-semibold text-xs transition-colors duration-200 flex items-center gap-1.5 shadow-sm border border-transparent hover:border-white/10 active:opacity-90"
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Guarantees & Commitments */}
        <section className="rounded-3xl bg-white p-8 sm:p-12 border border-black/[0.06] shadow-sm space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-[#1f3d2b] block mb-1">
              Our Promise
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141b17]">
              The 3NERGY Risk-Free Guarantee
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="space-y-2 p-5 rounded-2xl bg-[#fcfcfb] border border-black/5">
              <div className="flex items-center gap-2 text-[#141b17] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#1f3d2b]" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <p className="text-xs text-[#5a6660] leading-relaxed">
                If you don’t feel a noticeable boost in energy, recovery, or sleep quality within 30 days, simply let us know for a full, prompt refund.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-[#fcfcfb] border border-black/5">
              <div className="flex items-center gap-2 text-[#141b17] font-bold text-sm">
                <RefreshCw className="w-4 h-4 text-[#1f3d2b]" />
                <span>Cancel Anytime with One Click</span>
              </div>
              <p className="text-xs text-[#5a6660] leading-relaxed">
                Subscribers have complete control. Swap products, pause deliveries, change intervals, or cancel anytime with zero hidden fees.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-[#fcfcfb] border border-black/5">
              <div className="flex items-center gap-2 text-[#141b17] font-bold text-sm">
                <Truck className="w-4 h-4 text-[#1f3d2b]" />
                <span>Free Carbon-Neutral Shipping</span>
              </div>
              <p className="text-xs text-[#5a6660] leading-relaxed">
                All orders over $50 ship free in recyclable, minimalist packaging with 100% certified carbon offsets on all transport.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Ingredient Facts Modal */}
      {selectedProductDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-black/10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.08]">
              <div>
                <h3 className="font-bold text-xl text-[#141b17]">
                  {selectedProductDetails.name}
                </h3>
                <span className="text-xs text-[#5a6660]">Full Nutritional &amp; Botanical Profile</span>
              </div>
              <button
                onClick={() => setSelectedProductDetails(null)}
                className="p-1.5 rounded-full hover:bg-black/5 text-gray-500 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 pt-4 text-xs">
              <div className="p-3 bg-[#f4f6f4] rounded-xl flex justify-between text-xs font-semibold text-[#141b17]">
                <span>Serving Size: 2 Vegan Capsules</span>
                <span>Servings Per Container: 30</span>
              </div>

              <div className="divide-y divide-black/[0.06] border-y border-black/[0.06]">
                {selectedProductDetails.compounds.map((c, i) => (
                  <div key={i} className="py-2.5 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-[#141b17] block">{c.name}</span>
                      <span className="text-[11px] text-[#5a6660]">{c.function}</span>
                    </div>
                    <span className="font-bold text-xs text-[#1f3d2b] shrink-0 ml-4">{c.dose}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-2 text-[11px] text-[#5a6660]">
                <div><strong>Other Ingredients:</strong> Tapioca vegetable cellulose capsule, organic rice fiber.</div>
                <div><strong>Contains Zero:</strong> Gluten, dairy, soy, artificial colors, magnesium stearate, or silicon dioxide.</div>
              </div>

              <button
                onClick={() => {
                  addToCart(selectedProductDetails, 1, "30-day");
                  setSelectedProductDetails(null);
                }}
                className="w-full mt-4 py-3 rounded-full bg-[#1f3d2b] hover:bg-[#162e20] text-white font-semibold text-xs tracking-wide transition-all shadow-sm"
              >
                Add to Cart • $30.00
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopPage;
