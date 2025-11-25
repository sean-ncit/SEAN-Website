import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
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

  const partners = [
  {
    name: "DL Surf",
    logo: "surf.webp",
  },
  {
    name: "E-sewa",
    logo: "esewa.webp",
  },
  {
    name: "Astergaze",
    logo: "/aster.webp",
  },
  {
    name: "Programiz",
    logo: "programiz.webp",
  },
];


  const programs = [
    { title: "Modern Curriculum", desc: "Core CS + modern SE practices: TDD, CI/CD, AI/ML, design patterns, and architecture." },
    { title: "Research‑Oriented Learning", desc: "Undergraduate research tracks, faculty‑led projects, and conference mentorship." },
    { title: "Project‑Based Teaching", desc: "Team projects with industry mentors and real problem statements." },
    { title: "Industry Collaboration", desc: "Internships, joint research, and tech partnerships with employers." },
  ];


  return (
    <main ref={containerRef} className="text-slate-800">

      <Hero />


{/* PARTNERS */}
<section className="w-full bg-gradient-to-br from-[#F7FAFF] to-[#EAF1FF] border-t border-slate-200/50">
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
    <h3 className="text-3xl font-bold text-[#082B73] tracking-tight">
      Collaboration & Partnerships
    </h3>

    <p className="mt-2 text-slate-600 max-w-xl">
      We collaborate with industry leaders to provide students with real-world
      experience, internships, and research opportunities.
    </p>

    <div className="mt-12 overflow-hidden relative">
      <div className="flex gap-12 items-center w-max animate-[scrollX_15s_linear_infinite]">

        {partners.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-center h-24 w-48 bg-white rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300"
          >
            <img
              src={p.logo}
              alt={p.name}
              className="max-h-14 w-auto object-contain opacity-85 hover:opacity-100 transition"
            />
          </div>
        ))}

        {partners.map((p) => (
          <div
            key={p.name + '-copy'}
            className="flex items-center justify-center h-24 w-48 bg-white rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300"
          >
            <img
              src={p.logo}
              alt={p.name}
              className="max-h-14 w-auto object-contain opacity-85 hover:opacity-100 transition"
            />
          </div>
        ))}

      </div>
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


      <Pathway />

{/* ACHIEVEMENTS & MILESTONES */}
<section className="w-full bg-[#83a0ff] text-white">
  <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
      Achievements & Milestones
    </h3>
    <p className="mt-3 text-base md:text-lg text-white/80 max-w-2xl">
      Our department is shaping global tech leaders, advancing research, and delivering
      real-world projects with impact.
    </p>

    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { num: "500+", label: "Successful Alumni in Global Tech" },
        { num: "120+", label: "Research Papers & Conferences" },
        { num: "75+", label: "Industry Partnerships" },
        { num: "1000+", label: "Student Projects Delivered" },
      ].map((item) => (
        <div
          key={item.num}
          className="p-5 bg-white/10 rounded-xl shadow-md flex flex-col items-center text-center
                     hover:bg-white/20 hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          <div className="text-4xl md:text-5xl font-extrabold">{item.num}</div>
          <div className="mt-1 text-sm md:text-base">{item.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>


      <OffersSection />


    </main>
  )
}
