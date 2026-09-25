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

  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomeTransparent = pathname === "/" && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
          isHomeTransparent
            ? "bg-transparent py-5"
            : "bg-white/90 backdrop-blur-md shadow-xs border-b border-black/[0.06] py-3.5"
        }`}
      >
        <div className="w-full max-w-[1500px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between">
          
          {/* Brand Wordmark & Nav Links */}
          <div className="flex items-center gap-6 sm:gap-8">
            <Link href="/" className="group flex items-center gap-2 focus:outline-none">
              <span
                className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                  isHomeTransparent ? "text-white" : "text-[#1f3d2b]"
                }`}
              >
                3NERGY
              </span>
            </Link>

            <span
              className={`hidden lg:inline text-xs font-light select-none ${
                isHomeTransparent ? "text-white/40" : "text-black/15"
              }`}
            >
              |
            </span>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-xs tracking-wide transition-colors ${
                      isHomeTransparent
                        ? isActive
                          ? "text-white font-bold"
                          : "text-white/85 hover:text-white font-medium"
                        : isActive
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
          <div className="flex items-center gap-2 sm:gap-3.5">
            
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                isHomeTransparent
                  ? "bg-white/20 hover:bg-white/30 text-white border border-white/25 backdrop-blur-md"
                  : "bg-[#f2f4f2] hover:bg-[#e6eae6] text-[#2a382f]"
              }`}
              aria-label="Search Products"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={openCart}
              className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                isHomeTransparent
                  ? "bg-white/20 hover:bg-white/30 text-white border border-white/25 backdrop-blur-md"
                  : "bg-[#f2f4f2] hover:bg-[#e6eae6] text-[#2a382f]"
              }`}
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartTotalCount > 0 && (
                <span
                  className={`absolute -top-1 -right-1 flex h-4 min-w-4 px-1 items-center justify-center rounded-full text-[9px] font-bold shadow-xs ${
                    isHomeTransparent
                      ? "bg-white text-[#1f3d2b]"
                      : "bg-[#1f3d2b] text-white"
                  }`}
                >
                  {cartTotalCount}
                </span>
              )}
            </button>

            {/* Account / User Icon */}
            <button
              className={`w-9 h-9 rounded-full hidden sm:flex items-center justify-center transition-all ${
                isHomeTransparent
                  ? "bg-white/20 hover:bg-white/30 text-white border border-white/25 backdrop-blur-md"
                  : "bg-[#f2f4f2] hover:bg-[#e6eae6] text-[#2a382f]"
              }`}
              aria-label="Account"
            >
              <User className="w-4 h-4" />
            </button>

            {/* Primary Shop Now Pill Button */}
            <Link
              href="/shop"
              className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95 flex items-center gap-1.5 ${
                isHomeTransparent
                  ? "bg-[#163522] hover:bg-[#0f2417] text-white border border-white/20 shadow-md"
                  : "bg-[#1f3d2b] hover:bg-[#162e20] text-white"
              }`}
            >
              <span>Shop Now</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div
          className={`flex lg:hidden items-center justify-center gap-4 mt-2 px-4 py-1.5 rounded-full max-w-sm mx-auto transition-colors ${
            isHomeTransparent
              ? "bg-white/20 backdrop-blur-md text-white border border-white/20"
              : "bg-white/80 backdrop-blur-md text-[#5a6660] border border-black/[0.04]"
          }`}
        >
          {navLinks.slice(0, 4).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[11px] ${
                  isActive
                    ? isHomeTransparent
                      ? "text-white font-bold"
                      : "text-[#1f3d2b] font-bold"
                    : isHomeTransparent
                    ? "text-white/85 hover:text-white font-medium"
                    : "text-[#5a6660] font-medium"
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
