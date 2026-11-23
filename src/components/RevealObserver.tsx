"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!targets.length) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el, idx) => {
      el.style.setProperty("--i", String(idx % 4));
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
