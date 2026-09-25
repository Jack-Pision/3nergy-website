"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCircadianStore } from "@/store/circadian-store";
import { Sun, Sparkles, Moon, ShoppingBag, Activity, Clock, ChevronDown } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { phase, setPhase, virtualTime, isAutoTime, toggleAutoTime, cart, openCart, openQuiz } =
    useCircadianStore();
  const [isDialOpen, setIsDialOpen] = useState(false);

  const cartTotalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { href: "/", label: "Protocol" },
    { href: "/science", label: "Science & Dossier" },
    { href: "/shop", label: "Apothecary & Customizer" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-8 pt-4 pb-2 pointer-events-auto">
      <nav className="max-w-7xl mx-auto rounded-full glass-panel px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-2xl transition-all duration-500 border border-white/10">
        
        {/* Brand Wordmark */}
        <div className="flex items-center gap-6">
          <Link href="/" className="group flex items-center gap-2.5 focus:outline-none">
            <span className="relative flex h-3.5 w-3.5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-phase opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-phase" />
            </span>
            <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-phase transition-colors">
              3NERGY<span className="text-phase font-mono text-xs ml-0.5 tracking-normal">™</span>
            </span>
            <span className="hidden lg:inline-block text-[11px] font-mono tracking-widest text-white/40 uppercase pl-2 border-l border-white/10">
              CHRONO-NUTRITION
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 pl-4 border-l border-white/10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? "text-white bg-white/10 font-semibold shadow-inner"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Circadian Quick Controls & Cart Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Circadian Phase Dropdown / Pill */}
          <div className="relative">
            <button
              onClick={() => setIsDialOpen(!isDialOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono glass-pill hover:bg-white/10 transition-colors border border-white/10"
              title="Change active circadian phase"
            >
              <Clock className="w-3.5 h-3.5 text-phase" />
              <span className="text-white font-medium">{virtualTime}</span>
              <span className="hidden sm:inline-block text-white/50 text-[10px]">
                [{phase.toUpperCase()}]
              </span>
              <ChevronDown className="w-3 h-3 text-white/40 ml-0.5" />
            </button>

            {/* Phase Selector Popover */}
            {isDialOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-2xl glass-panel-elevated p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
                <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 px-3 py-1.5 border-b border-white/10 mb-1">
                  Circadian Lighting Shift
                </div>

                <button
                  onClick={() => {
                    setPhase("dawn");
                    setIsDialOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                    phase === "dawn" ? "bg-[#f59e0b]/20 text-[#fef3c7]" : "text-white/70 hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Sun className="w-3.5 h-3.5 text-[#f59e0b]" />
                    01 Dawn Rise (06:00)
                  </span>
                  <span className="text-[10px] font-mono text-[#f59e0b]">AMBER</span>
                </button>

                <button
                  onClick={() => {
                    setPhase("zenith");
                    setIsDialOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                    phase === "zenith" ? "bg-[#10b981]/20 text-[#d1fae5]" : "text-white/70 hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
                    02 Zenith Flow (14:00)
                  </span>
                  <span className="text-[10px] font-mono text-[#10b981]">EMERALD</span>
                </button>

                <button
                  onClick={() => {
                    setPhase("restore");
                    setIsDialOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                    phase === "restore" ? "bg-[#6366f1]/20 text-[#e0e7ff]" : "text-white/70 hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Moon className="w-3.5 h-3.5 text-[#6366f1]" />
                    03 Restore Prime (21:00)
                  </span>
                  <span className="text-[10px] font-mono text-[#6366f1]">INDIGO</span>
                </button>

                <div className="mt-1 pt-1.5 border-t border-white/10 flex items-center justify-between px-3 py-1">
                  <span className="text-[11px] text-white/50">Sync System Time</span>
                  <button
                    onClick={toggleAutoTime}
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full transition-colors ${
                      isAutoTime ? "bg-phase text-black font-semibold" : "bg-white/10 text-white/70"
                    }`}
                  >
                    {isAutoTime ? "ACTIVE" : "MANUAL"}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Assessment Quiz Trigger */}
          <button
            onClick={openQuiz}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-white/80 hover:text-white glass-pill hover:bg-white/10 transition-colors"
          >
            <Activity className="w-3.5 h-3.5 text-phase" />
            <span>Chrono-Quiz</span>
          </button>

          {/* Cart Drawer Trigger */}
          <button
            onClick={openCart}
            className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white border border-white/10 shadow-lg active:scale-95"
            aria-label="Open Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartTotalCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4.5 min-w-4.5 px-1 items-center justify-center rounded-full bg-phase text-black text-[10px] font-bold font-mono shadow-md">
                {cartTotalCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Subnav */}
      <div className="flex md:hidden items-center justify-center gap-2 mt-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1 rounded-full text-[11px] font-medium tracking-wide transition-all ${
                isActive
                  ? "text-white bg-white/15 font-semibold"
                  : "text-white/60 hover:text-white bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
