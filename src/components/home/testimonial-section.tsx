"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 bg-white border-t border-black/[0.04]">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        
        {/* Label */}
        <span className="text-xs font-semibold text-[#1f3d2b] block">
          Customer Story
        </span>

        {/* Big Quote */}
        <blockquote className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-[#141b17] leading-relaxed max-w-3xl mx-auto">
          “I’ve been really happy with the quality and overall experience. The product information was clear, the ordering process was simple, and everything arrived exactly as expected. I’ll definitely be coming back for more.”
        </blockquote>

        {/* Rating Stars */}
        <div className="flex items-center justify-center gap-1 text-[#1f3d2b] pt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Customer Profile */}
        <div className="flex flex-col items-center pt-2 space-y-1.5">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#1f3d2b]/20 shadow-sm bg-[#eaf1ed]">
            <Image
              src="/images/testimonial_avatar.png"
              alt="Albert Flores"
              fill
              className="object-cover"
            />
          </div>
          <div className="font-bold text-sm text-[#141b17]">
            Albert Flores
          </div>
          <div className="text-xs text-[#6c7a72]">
            Toronto, Canada
          </div>
        </div>

      </div>
    </section>
  );
}
