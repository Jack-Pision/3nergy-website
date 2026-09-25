"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export function TestimonialSection() {
  const [activeStory, setActiveStory] = React.useState(0);

  const stories = [
    {
      quote:
        "“I swapped out my second 11:00 AM cold brew for Daily Energy & Focus. The organic matcha and Kaneka CoQ10 deliver calm, steady executive clarity through long strategy reviews without caffeine jitters or the dreaded afternoon slump.”",
      author: "Elena Rostova",
      role: "Product Strategist • Verified 9-Mo Subscriber",
      location: "Seattle, WA",
      product: "Daily Energy & Focus",
      avatar: "/images/testimonial_avatar.png",
    },
    {
      quote:
        "“The tart cherry extract and TRAACS® magnesium malate noticeably cut down my post-workout muscle soreness. I take two capsules with lunch after morning track sessions and wake up ready to train again.”",
      author: "Marcus Vance",
      role: "Endurance Runner • Verified 6-Mo Subscriber",
      location: "Austin, TX",
      product: "Daily Recovery & Stamina",
      avatar: "/images/routine_stress.png",
    },
    {
      quote:
        "“I used to wake up groggy from synthetic melatonin gummies. 3NERGY Rest uses chamomile apigenin and gentle magnesium bisglycinate—it supports natural winding down and I wake up genuinely refreshed.”",
      author: "Dr. Sarah Chen, PT",
      role: "Physical Therapist • Verified 1-Yr Subscriber",
      location: "Chicago, IL",
      product: "Daily Rest & Sleep",
      avatar: "/images/routine_doctor.png",
    },
  ];

  const current = stories[activeStory];

  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-white border-t border-black/[0.04]">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        
        {/* Story Selector Pills */}
        <div className="flex items-center justify-center gap-2 mb-2">
          {stories.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStory(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeStory === idx
                  ? "bg-[#1f3d2b] text-white shadow-xs"
                  : "bg-[#f4f6f4] text-[#5a6660] hover:text-[#141b17]"
              }`}
            >
              {s.product.split("&")[0].trim()}
            </button>
          ))}
        </div>

        {/* Big Quote */}
        <blockquote className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-[#141b17] leading-relaxed max-w-3xl mx-auto min-h-[120px] flex items-center justify-center">
          {current.quote}
        </blockquote>

        {/* Rating Stars */}
        <div className="flex items-center justify-center gap-1 text-[#1f3d2b] pt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Customer Profile */}
        <div className="flex flex-col items-center pt-2 space-y-1">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#1f3d2b]/20 shadow-sm bg-[#eaf1ed]">
            <Image
              src={current.avatar}
              alt={current.author}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div className="font-bold text-sm text-[#141b17]">
            {current.author}
          </div>
          <div className="text-xs text-[#1f3d2b] font-medium">
            {current.role}
          </div>
          <div className="text-[11px] text-[#6c7a72]">
            {current.location}
          </div>
        </div>

      </div>
    </section>
  );
}
