"use client";

import { useEffect, useRef } from "react";

// ============================================================
// GLOW ORB — Cursor-tracking gradient orb for hero background
// Adds subtle depth and uniqueness without distraction
// ============================================================

export default function GlowOrb() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let orbX = mouseX;
    let orbY = mouseY;
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth follow with lerp
    const animate = () => {
      orbX += (mouseX - orbX) * 0.05;
      orbY += (mouseY - orbY) * 0.05;
      orb.style.transform = `translate(${orbX - 300}px, ${orbY - 300}px)`;
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={orbRef}
      className="pointer-events-none fixed top-0 left-0 z-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
      style={{
        background:
          "radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(56, 189, 248, 0.3) 40%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
