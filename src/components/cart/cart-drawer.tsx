"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCircadianStore } from "@/store/circadian-store";
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles, Check } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ChronoBottle } from "@/components/visuals/chrono-bottle";

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    updateCadence,
    addToCart,
    clearCart,
  } = useCircadianStore();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isCartOpen) return null;

  // Calculate pricing & discounts
  const subtotal = cart.reduce((sum, item) => {
    let itemPrice = item.product.price;
    if (item.cadence === "30-day") itemPrice *= 0.85; // 15% discount
    if (item.cadence === "60-day") itemPrice *= 0.8; // 20% discount
    return sum + itemPrice * item.quantity;
  }, 0);

  const freeShippingThreshold = 75;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      setTimeout(() => {
        setOrderComplete(false);
        clearCart();
        closeCart();
      }, 3500);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-auto">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0c0f0d] border-l border-white/10 shadow-2xl flex flex-col h-full">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg text-white">Chrono-Apothecary</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                {cart.length} {cart.length === 1 ? "Protocol" : "Protocols"}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Shipping Progress Bar */}
          <div className="px-6 py-3 bg-white/5 border-b border-white/5 text-xs">
            <div className="flex justify-between items-center mb-1.5 text-white/70">
              {subtotal >= freeShippingThreshold ? (
                <span className="text-[#10b981] font-medium flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Free Carbon-Neutral Express Shipping Unlocked
                </span>
              ) : (
                <span>
                  Add <strong className="text-white font-mono">${(freeShippingThreshold - subtotal).toFixed(2)}</strong> for Free Express Dispatch
                </span>
              )}
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-phase h-full rounded-full transition-all duration-500"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderComplete ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#10b981]/20 text-[#10b981] mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Chrono-Order Confirmed</h3>
                <p className="text-xs text-white/60 font-mono max-w-xs mx-auto">
                  Batch allocation reserved. Your precision formulations are being packed in sterile climate-controlled vials.
                </p>
                <div className="glass-panel p-3 rounded-xl max-w-xs mx-auto text-left text-xs font-mono space-y-1">
                  <div className="text-white/40">Tracking ID: 3N-CHRONO-2026-X8</div>
                  <div className="text-white/40">Dispatch: Today at 15:00 UTC</div>
                </div>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-12 h-12 rounded-full bg-white/5 mx-auto flex items-center justify-center text-white/30">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">Your Routine Is Empty</h3>
                <p className="text-xs text-white/50 max-w-xs mx-auto">
                  Select your core circadian phase formulations or start with the Complete 24H Tri-System Protocol.
                </p>
                <button
                  onClick={() => {
                    const dawn = PRODUCTS[0];
                    if (dawn) addToCart(dawn, 1, "30-day");
                  }}
                  className="px-5 py-2.5 rounded-full bg-phase text-black font-semibold text-xs transition-transform active:scale-95"
                >
                  Quick Add 01 // Dawn Rise ($48)
                </button>
              </div>
            ) : (
              cart.map((item) => {
                const isSub = item.cadence !== "one-time";
                const unitPrice = isSub
                  ? item.cadence === "30-day"
                    ? item.product.price * 0.85
                    : item.product.price * 0.8
                  : item.product.price;

                return (
                  <div
                    key={item.product.id}
                    className="glass-panel rounded-2xl p-4 border border-white/10 space-y-3 relative overflow-hidden"
                  >
                    <div className="flex gap-4 items-center">
                      {/* Product Visual */}
                      <div className="w-16 h-20 rounded-xl bg-white/5 relative overflow-hidden shrink-0 border border-white/10 flex items-center justify-center">
                        <ChronoBottle
                          phase={item.product.phase}
                          size="sm"
                          showRestingCapsules={false}
                          className="scale-[0.55] origin-center"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-phase">
                            {item.product.phaseNumber} {"//"} {item.product.timeWindow}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-white/30 hover:text-red-400 transition-colors p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <h4 className="font-display font-bold text-sm text-white truncate">
                          {item.product.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-mono text-sm font-semibold text-white">
                            ${(unitPrice * item.quantity).toFixed(2)}
                          </span>
                          {isSub && (
                            <span className="text-[10px] font-mono text-[#10b981] bg-[#10b981]/15 px-1.5 py-0.5 rounded">
                              {item.cadence === "30-day" ? "SAVE 15%" : "SAVE 20%"}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Cadence Selection */}
                    <div className="grid grid-cols-3 gap-1 bg-black/40 p-1 rounded-xl text-[10px] font-mono">
                      <button
                        onClick={() => updateCadence(item.product.id, "30-day")}
                        className={`py-1 rounded-lg transition-colors ${
                          item.cadence === "30-day"
                            ? "bg-phase text-black font-bold"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        30-Day (-15%)
                      </button>
                      <button
                        onClick={() => updateCadence(item.product.id, "60-day")}
                        className={`py-1 rounded-lg transition-colors ${
                          item.cadence === "60-day"
                            ? "bg-phase text-black font-bold"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        60-Day (-20%)
                      </button>
                      <button
                        onClick={() => updateCadence(item.product.id, "one-time")}
                        className={`py-1 rounded-lg transition-colors ${
                          item.cadence === "one-time"
                            ? "bg-white/20 text-white font-bold"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        One-Time
                      </button>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between pt-1 text-xs">
                      <span className="text-white/40 text-[11px] font-mono">
                        {item.product.capsuleCount} capsules / bottle
                      </span>
                      <div className="flex items-center gap-2 bg-white/5 rounded-full px-2 py-0.5 border border-white/10">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="text-white/50 hover:text-white p-1"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-xs font-semibold text-white px-1">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="text-white/50 hover:text-white p-1"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}

            {/* Smart Protocol Upsell if user only has 1 or 2 items */}
            {cart.length > 0 && cart.length < 3 && !orderComplete && (
              <div className="p-4 rounded-2xl bg-phase/10 border border-phase/30 space-y-2">
                <div className="flex items-center gap-1.5 text-phase text-xs font-mono font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  COMPLETE THE 24H PROTOCOL
                </div>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  Add all 3 circadian phases to unlock the complete metabolic rhythm and receive a complimentary luxury travel vial.
                </p>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="text-xs text-white font-semibold underline underline-offset-4 hover:text-phase transition-colors inline-block"
                >
                  View Bundle in Apothecary &rarr;
                </Link>
              </div>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && !orderComplete && (
            <div className="p-6 border-t border-white/10 bg-[#090b0a] space-y-4">
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-white/60">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Chrono-Dispatch</span>
                  <span className="text-[#10b981]">
                    {subtotal >= freeShippingThreshold ? "FREE" : "$6.00"}
                  </span>
                </div>
                <div className="flex justify-between text-white font-semibold text-sm pt-2 border-t border-white/10">
                  <span>Total Due</span>
                  <span className="text-phase">
                    ${(subtotal + (subtotal >= freeShippingThreshold ? 0 : 6)).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3.5 rounded-full bg-phase text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <span>Securing Batch Allocation...</span>
                ) : (
                  <>
                    <span>Begin Circadian Protocol</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-white/40 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-phase" />
                <span>30-Day Cellular Efficacy Guarantee • Cancel Anytime</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
