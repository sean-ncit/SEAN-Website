import { useEffect, useRef, useState } from "react";
import {Link }from 'react-router-dom'
import { Pathway } from "../components/home/Pathway";
import OffersSection from "../components/home/Offers";
import { Hero } from "../components/home/Hero";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";


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

const partners = ["Nepal Telecom", "Leapfrog Technologies", "CloudLabs", "Academic Partner X"];

const programs = [
  { title: "Modern Curriculum", desc: "Core CS + modern SE practices: TDD, CI/CD, design patterns, and architecture." },
  { title: "Research‑Oriented Learning", desc: "Undergraduate research tracks, faculty‑led projects, and conference mentorship." },
  { title: "Project‑Based Teaching", desc: "Team projects with industry mentors and real problem statements." },
  { title: "Industry Collaboration", desc: "Internships, joint research, and tech partnerships with employers." },
];


  return (
    <main ref={containerRef} className="text-slate-800">

        <Hero/>
      {/* PARTNERS */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <h3 className="text-2xl font-semibold text-[#082B73]">Collaboration & Partnerships</h3>
          <div className="mt-6 flex items-center gap-6 flex-wrap">
            {partners.map((p) => (
              <div key={p} className="px-4 py-2 rounded-md border border-slate-100 text-sm text-slate-700">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* PROGRAM OVERVIEW */}
      <section id="programs" className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-bold text-[#082B73]">Program Overview</h3>
            <p className="mt-4 text-slate-700 max-w-2xl">Our program blends foundational theory with hands‑on engineering practice, ensuring students graduate ready for both industry and research careers.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <Card key={p.title} className="transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[#0A3B8C]">{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


        <Pathway/>


      {/* ACHIEVEMENTS & MILESTONES */}
      <section className="w-full bg-[#0057B8] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <h3 className="text-3xl font-bold">Achievements & Milestones</h3>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white/10 rounded-lg">
              <div className="text-2xl font-extrabold">500+</div>
              <div className="mt-2 text-sm">Successful Alumni in Global Tech</div>
            </div>
            <div className="p-6 bg-white/10 rounded-lg">
              <div className="text-2xl font-extrabold">120+</div>
              <div className="mt-2 text-sm">Research Papers & Conferences</div>
            </div>
            <div className="p-6 bg-white/10 rounded-lg">
              <div className="text-2xl font-extrabold">75+</div>
              <div className="mt-2 text-sm">Industry Partnerships</div>
            </div>
            <div className="p-6 bg-white/10 rounded-lg">
              <div className="text-2xl font-extrabold">50+</div>
              <div className="mt-2 text-sm">Student Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>
        <OffersSection/>
        

    </main>
  )
}
