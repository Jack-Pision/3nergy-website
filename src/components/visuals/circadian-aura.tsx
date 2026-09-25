"use client";

import React, { useEffect, useRef } from "react";
import { useCircadianStore } from "@/store/circadian-store";

export function CircadianAura() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { phase } = useCircadianStore();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Target colors based on phase
    const colors = {
      dawn: { r: 245, g: 158, b: 11, a: 0.12 },
      zenith: { r: 16, g: 185, b: 129, a: 0.12 },
      restore: { r: 99, g: 102, b: 241, a: 0.12 },
    };

    let currentR = colors[phase]?.r ?? 245;
    let currentG = colors[phase]?.g ?? 158;
    let currentB = colors[phase]?.b ?? 11;

    // Floating biomorphic particles
    const particleCount = 28;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.8,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    let t = 0;

    const render = () => {
      t += 0.005;

      const target = colors[phase] ?? colors.dawn;
      currentR += (target.r - currentR) * 0.04;
      currentG += (target.g - currentG) * 0.04;
      currentB += (target.b - currentB) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Top ambient atmospheric sun/zenith/moon glow
      const glowX = width * 0.5 + Math.sin(t * 0.8) * (width * 0.15);
      const glowY = height * 0.25 + Math.cos(t * 0.6) * (height * 0.08);
      const glowRadius = Math.max(width, height) * 0.65;

      const radialGrad = ctx.createRadialGradient(
        glowX,
        glowY,
        0,
        glowX,
        glowY,
        glowRadius
      );

      const rgbStr = `${Math.round(currentR)}, ${Math.round(currentG)}, ${Math.round(currentB)}`;
      radialGrad.addColorStop(0, `rgba(${rgbStr}, 0.14)`);
      radialGrad.addColorStop(0.4, `rgba(${rgbStr}, 0.05)`);
      radialGrad.addColorStop(0.8, `rgba(${rgbStr}, 0.01)`);
      radialGrad.addColorStop(1, "rgba(8, 10, 9, 0)");

      ctx.fillStyle = radialGrad;
      ctx.fillRect(0, 0, width, height);

      // Secondary floating counter-balance glow
      const subGlowX = width * 0.8 - Math.sin(t * 0.5) * 100;
      const subGlowY = height * 0.75 + Math.cos(t * 0.4) * 80;
      const subGrad = ctx.createRadialGradient(
        subGlowX,
        subGlowY,
        0,
        subGlowX,
        subGlowY,
        width * 0.4
      );
      subGrad.addColorStop(0, `rgba(${rgbStr}, 0.07)`);
      subGrad.addColorStop(1, "rgba(8, 10, 9, 0)");

      ctx.fillStyle = subGrad;
      ctx.fillRect(0, 0, width, height);

      // Render floating micro-particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgbStr}, ${p.alpha * 0.5})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [phase]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 mix-blend-overlay pointer-events-none" />
    </div>
  );
}
