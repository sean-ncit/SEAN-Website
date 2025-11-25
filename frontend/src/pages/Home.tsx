import { useEffect, useRef, useState } from "react";
import {Link }from 'react-router-dom'
import { Pathway } from "../components/home/Pathway";
import OffersSection from "../components/home/Offers";
import { Hero } from "../components/home/Hero";
export function Home() {
  const containerRef = useRef<HTMLElement | null>(null);

useEffect(() => {
  const root = containerRef.current;
  if (!root) return;

  const targets = Array.from(
    root.querySelectorAll("[data-animate]")
  ) as HTMLElement[];

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-x-0");
          el.classList.remove("opacity-0", "translate-x-6");

          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((t) => {
    t.classList.add(
      "opacity-0",
      "translate-x-6",
      "transition-all",
      "duration-700",
      "ease-out"
    );
    obs.observe(t);
  });

  return () => obs.disconnect();
}, []);

  return (
    <main ref={containerRef} className="text-slate-800">

        <Hero/>

        <Pathway/>

        <OffersSection/>
        

    </main>
  )
}
