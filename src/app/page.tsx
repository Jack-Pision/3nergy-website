import React from "react";
import { CircadianHero } from "@/components/home/circadian-hero";
import { TriPhaseSystem } from "@/components/home/tri-phase-system";
import { BioTelemetry } from "@/components/home/bio-telemetry";
import { TestimonialSection } from "@/components/home/testimonial-section";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 01: Interactive Circadian Hero with Chrono-Dial */}
      <CircadianHero />

      {/* 02: The 3 Core Formulations Showcase */}
      <TriPhaseSystem />

      {/* 03: Clinical Bio-Telemetry Kinetic Graph */}
      <BioTelemetry />

      {/* 04: Clinical Proof & Testimonials */}
      <TestimonialSection />
    </div>
  );
}
