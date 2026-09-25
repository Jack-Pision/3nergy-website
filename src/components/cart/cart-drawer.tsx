"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCircadianStore } from "@/store/circadian-store";
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles, Check, ShoppingBag } from "lucide-react";
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
    if (item.cadence === "30-day") itemPrice *= 0.85; // 15% subscriber discount
    if (item.cadence === "60-day") itemPrice *= 0.8; // 20% subscriber discount
    return sum + itemPrice * item.quantity;
  }, 0);

  const freeShippingThreshold = 50;
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
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-auto">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-8">
        <div className="w-screen max-w-md bg-white border-l border-black/10 shadow-2xl flex flex-col h-full text-[#141b17]">
          
          {/* Header */}
          <div className="p-6 border-b border-black/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#1f3d2b]" />
              <span className="font-bold text-lg text-[#141b17]">Your Cart</span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#f4f6f4] text-[#5a6660]">
                {cart.length} {cart.length === 1 ? "item" : "items"}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-full hover:bg-black/5 text-gray-500 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Shipping Progress Bar */}
          <div className="px-6 py-3.5 bg-[#fcfcfb] border-b border-black/[0.06] text-xs">
            <div className="flex justify-between items-center mb-1.5 text-[#5a6660]">
              {subtotal >= freeShippingThreshold ? (
                <span className="text-[#1f3d2b] font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Free Standard Shipping Unlocked!
                </span>
              ) : (
                <span>
                  Add <strong className="text-[#141b17] font-bold">${(freeShippingThreshold - subtotal).toFixed(2)}</strong> more for Free Shipping
                </span>
              )}
            </div>
            <div className="w-full bg-[#e8eae8] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#1f3d2b] h-full rounded-full transition-all duration-500"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderComplete ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#eaf1ed] text-[#1f3d2b] mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#141b17]">Order Placed!</h3>
                <p className="text-xs text-[#5a6660] max-w-xs mx-auto leading-relaxed">
                  Thank you for your order. Your fresh 3NERGY supplements are being packed and prepared for express dispatch.
                </p>
                <div className="bg-[#f4f6f4] p-3.5 rounded-2xl max-w-xs mx-auto text-left text-xs space-y-1 border border-black/5">
                  <div className="text-[#5a6660]">Order #3N-2026-8842</div>
                  <div className="text-[#5a6660]">Status: Processing • Same Day Dispatch</div>
                </div>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#f4f6f4] mx-auto flex items-center justify-center text-gray-400">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#141b17]">Your Cart is Empty</h3>
                <p className="text-xs text-[#5a6660] max-w-xs mx-auto leading-relaxed">
                  Explore our core daily essentials designed to support your energy, recovery, and sleep.
                </p>
                <button
                  onClick={() => {
                    const firstProduct = PRODUCTS[0];
                    if (firstProduct) addToCart(firstProduct, 1, "30-day");
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#1f3d2b] hover:bg-[#162e20] text-white font-semibold text-xs transition-all shadow-sm"
                >
                  Add Daily Energy &amp; Focus ($30.00)
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
                    className="rounded-2xl p-4 border border-black/[0.08] bg-[#fcfcfb] space-y-3 relative shadow-xs"
                  >
                    <div className="flex gap-4 items-center">
                      {/* Product Visual */}
                      <div className="w-16 h-20 rounded-xl bg-[#f4f6f4] relative overflow-hidden shrink-0 border border-black/5">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#1f3d2b] font-semibold">
                            {item.product.phaseNumber} • {item.product.timeWindow}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <h4 className="font-bold text-sm text-[#141b17] truncate">
                          {item.product.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm font-bold text-[#141b17]">
                            ${(unitPrice * item.quantity).toFixed(2)}
                          </span>
                          {isSub && (
                            <span className="text-[10px] text-[#1f3d2b] bg-[#eaf1ed] px-2 py-0.5 rounded-full font-bold">
                              {item.cadence === "30-day" ? "Save 15%" : "Save 20%"}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Cadence Selection */}
                    <div className="grid grid-cols-3 gap-1 bg-[#f4f6f4] p-1 rounded-xl text-[10px] font-medium">
                      <button
                        onClick={() => updateCadence(item.product.id, "30-day")}
                        className={`py-1 rounded-lg transition-colors ${
                          item.cadence === "30-day"
                            ? "bg-white text-[#1f3d2b] font-bold shadow-xs"
                            : "text-[#5a6660] hover:text-[#141b17]"
                        }`}
                      >
                        Monthly (-15%)
                      </button>
                      <button
                        onClick={() => updateCadence(item.product.id, "60-day")}
                        className={`py-1 rounded-lg transition-colors ${
                          item.cadence === "60-day"
                            ? "bg-white text-[#1f3d2b] font-bold shadow-xs"
                            : "text-[#5a6660] hover:text-[#141b17]"
                        }`}
                      >
                        60-Day (-20%)
                      </button>
                      <button
                        onClick={() => updateCadence(item.product.id, "one-time")}
                        className={`py-1 rounded-lg transition-colors ${
                          item.cadence === "one-time"
                            ? "bg-white text-[#141b17] font-bold shadow-xs"
                            : "text-[#5a6660] hover:text-[#141b17]"
                        }`}
                      >
                        One-Time
                      </button>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between pt-1 text-xs">
                      <span className="text-[#5a6660] text-[11px]">
                        {item.product.capsuleCount} capsules per bottle
                      </span>
                      <div className="flex items-center gap-2 bg-white rounded-full px-2 py-0.5 border border-black/10 shadow-xs">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="text-gray-500 hover:text-black p-1"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-[#141b17] px-1">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-black p-1"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}

            {/* Complete The Trio Upsell if only 1 or 2 items */}
            {cart.length > 0 && cart.length < 3 && !orderComplete && (
              <div className="p-4 rounded-2xl bg-[#eaf1ed] border border-[#1f3d2b]/15 space-y-2">
                <div className="flex items-center gap-1.5 text-[#1f3d2b] text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Complete the Daily Trio</span>
                </div>
                <p className="text-[11px] text-[#334639] leading-relaxed">
                  Add all 3 daily essentials to synchronize morning energy, recovery, and deep sleep. Bundle price: $75 (saves $15).
                </p>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="text-xs text-[#1f3d2b] font-bold underline underline-offset-2 hover:opacity-80 transition-opacity inline-block"
                >
                  View Bundle in Shop &rarr;
                </Link>
              </div>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && !orderComplete && (
            <div className="p-6 border-t border-black/[0.08] bg-[#fcfcfb] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#5a6660]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#141b17]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#5a6660]">
                  <span>Shipping</span>
                  <span className="font-bold text-[#1f3d2b]">
                    {subtotal >= freeShippingThreshold ? "FREE" : "$5.00"}
                  </span>
                </div>
                <div className="flex justify-between text-[#141b17] font-bold text-sm pt-2 border-t border-black/[0.06]">
                  <span>Total</span>
                  <span className="text-base font-bold text-[#1f3d2b]">
                    ${(subtotal + (subtotal >= freeShippingThreshold ? 0 : 5)).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3.5 rounded-full bg-[#1f3d2b] hover:bg-[#162e20] text-white font-semibold text-xs tracking-wide transition-colors duration-200 flex items-center justify-center gap-2 shadow-md active:opacity-90 disabled:opacity-50 border border-transparent hover:border-white/10"
              >
                {isCheckingOut ? (
                  <span>Processing Checkout...</span>
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#5a6660]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1f3d2b]" />
                <span>30-Day Money-Back Guarantee • Cancel Anytime</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
