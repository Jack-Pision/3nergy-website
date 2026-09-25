"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCircadianStore } from "@/store/circadian-store";
import { ShoppingBag, Search, User, X } from "lucide-react";
import { PRODUCTS } from "@/data/products";

export function Navbar() {
  const pathname = usePathname();
  const { cart, openCart } = useCircadianStore();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const cartTotalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/science", label: "Science" },
    { href: "/#routine", label: "Routine" },
    { href: "/science#ingredients", label: "Ingredients" },
    { href: "/science#faq", label: "FAQ" },
  ];

  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-4 sm:px-8 pt-4 pb-2 transition-all">
        <nav className="max-w-7xl mx-auto rounded-full bg-white/85 backdrop-blur-md px-5 sm:px-8 py-3 flex items-center justify-between shadow-sm border border-black/[0.06]">
          
          {/* Brand Wordmark & Nav Links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="group flex items-center gap-2 focus:outline-none">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1f3d2b] transition-colors">
                3NERGY
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-6 pl-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-xs tracking-wide transition-colors ${
                      isActive
                        ? "text-[#1f3d2b] font-bold"
                        : "text-[#4a554d] hover:text-[#1f3d2b] font-medium"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Action Icons & Shop Button */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-9 h-9 rounded-full bg-[#f2f4f2] hover:bg-[#e6eae6] flex items-center justify-center text-[#2a382f] transition-colors"
              aria-label="Search Products"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={openCart}
              className="relative w-9 h-9 rounded-full bg-[#f2f4f2] hover:bg-[#e6eae6] flex items-center justify-center text-[#2a382f] transition-colors"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartTotalCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 min-w-4 px-1 items-center justify-center rounded-full bg-[#1f3d2b] text-white text-[9px] font-bold">
                  {cartTotalCount}
                </span>
              )}
            </button>

            {/* Account / User Icon */}
            <button
              className="w-9 h-9 rounded-full bg-[#f2f4f2] hover:bg-[#e6eae6] hidden sm:flex items-center justify-center text-[#2a382f] transition-colors"
              aria-label="Account"
            >
              <User className="w-4 h-4" />
            </button>

            {/* Primary Shop Now Pill Button */}
            <Link
              href="/shop"
              className="px-5 py-2 rounded-full bg-[#1f3d2b] hover:bg-[#162e20] text-white text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95 flex items-center gap-1.5"
            >
              <span>Shop Now</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation Row */}
        <div className="flex lg:hidden items-center justify-center gap-4 mt-2 px-4 py-1.5 bg-white/70 backdrop-blur-md rounded-full max-w-sm mx-auto border border-black/[0.04]">
          {navLinks.slice(0, 4).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[11px] ${
                  isActive ? "text-[#1f3d2b] font-bold" : "text-[#5a6660] font-medium"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </header>

      {/* Quick Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 border border-black/10">
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.08]">
              <div className="flex items-center gap-2 text-[#1f3d2b] font-bold text-sm">
                <Search className="w-4 h-4" />
                <span>Search 3NERGY Catalog</span>
              </div>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
                className="w-8 h-8 rounded-full hover:bg-black/5 flex items-center justify-center text-gray-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-4">
              <input
                type="text"
                autoFocus
                placeholder="Search supplements, ingredients, benefits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-[#f4f6f4] text-[#141b17] placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1f3d2b]"
              />
            </div>

            {searchQuery && (
              <div className="mt-4 space-y-2 max-h-60 overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/shop#${p.id}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#f2f6f3] transition-colors"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#141b17]">{p.name}</div>
                        <div className="text-[11px] text-[#5a6660]">{p.tagline}</div>
                      </div>
                      <span className="text-xs font-bold text-[#1f3d2b]">${p.price}.00</span>
                    </Link>
                  ))
                ) : (
                  <div className="text-center py-6 text-xs text-gray-400">
                    No supplements found for &ldquo;{searchQuery}&rdquo;.
                  </div>
                )}
              </div>
            )}

            {!searchQuery && (
              <div className="mt-4 pt-2">
                <div className="text-xs font-medium text-gray-500 mb-2">
                  Popular Searches
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Energy & Focus", "Tart Cherry", "Deep Sleep", "Daily Trio Bundle", "Matcha"].map(
                    (tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="px-3 py-1 rounded-full bg-[#f2f4f2] hover:bg-[#e4eae4] text-xs text-[#2e4033] transition-colors"
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
