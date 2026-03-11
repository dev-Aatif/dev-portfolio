"use client";

import { useEffect, useRef } from "react";

// ============================================================
// GLOW ORB — GPU-accelerated cursor follower
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
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      orbX += (mouseX - orbX) * 0.04;
      orbY += (mouseY - orbY) * 0.04;
      // Use translate3d to force GPU layer
      orb.style.transform = `translate3d(${orbX - 300}px, ${orbY - 300}px, 0)`;
      animId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={orbRef}
      className="pointer-events-none fixed top-0 left-0 z-0"
      style={{
        width: 600,
        height: 600,
        borderRadius: "50%",
        opacity: 0.15,
        filter: "blur(120px)",
        background:
          "radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(56,189,248,0.2) 40%, transparent 70%)",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}
