import React from "react";
import { CircadianHero } from "@/components/home/circadian-hero";
import { TrustRibbon } from "@/components/home/trust-ribbon";
import { RoutineSection } from "@/components/home/routine-section";
import { DailyEssentialsSection } from "@/components/home/daily-essentials-section";
import { TestimonialSection } from "@/components/home/testimonial-section";
import { GreenCtaSection } from "@/components/home/green-cta-section";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#fcfcfb]">
      {/* 01: Hero with Sage Gradient, "FEEL GOOD", "WORK EXCELLENT" and Hero Bottle */}
      <CircadianHero />

      {/* 02: Trust Ribbon Marquee (replaces blurry bottom transition with crisp trust proofing) */}
      <TrustRibbon />

      {/* 03: Routine Starts Here (3 Icons, Philosophy, and 3 Photo Cards) */}
      <RoutineSection />

      {/* 03: Meet Your Daily Essentials (3 Pastel Product Cards & Doctor Clinical Proof) */}
      <DailyEssentialsSection />

      {/* 04: Editorial Customer Testimonial */}
      <TestimonialSection />

      {/* 05: Dark Green Call to Action & Newsletter Subscription */}
      <GreenCtaSection />
    </div>
  );
}
