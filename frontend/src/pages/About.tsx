import { Button } from "../components/ui/button";

// About.tsx
// Tailwind + shadcn/ui based About page for NCIT Software Engineering Department

const labs = [
  {
    id: "se",
    title: "Software Engineering Lab",
    desc: "High‑throughput dev environments, CI/CD, and collaborative engineering projects.",
    img: "lab1.jpg"
  },
  {
    id: "ai",
    title: "AI & Machine Learning Lab",
    desc: "GPU workstations, model prototyping, and applied ML research initiatives.",
    img: "lab3.jpg"
  },
  {
    id: "net",
    title: "Networking & Security Lab",
    desc: "Hands‑on network stacks, security tooling, and ethical hacking practice ranges.",
    img: "lab4.jpg"
  },
  {
    id: "cloud",
    title: "Database & Cloud Systems Lab",
    desc: "Cloud platform experiments, distributed DBs, and performance engineering." ,
    img: "lab2.png"
  },
];

const faculty = [
  { name: "Er. Bhusan Thapa(HOD)", title: "MSc Wireless communication System Engineering,Greenwich, UK", areas: ["Software Engineering", "Systems", "Java"],img:""},
  { name: "Er. Madan Kadariya", title: "MSc IT Engineering, Lappeenranta University of Technology, Finland", areas: ["OS", "Computer Networks"], img:"mk.jpeg" },
  { name: "Dr. Roshan Chitrakar", title: "PhD Information Security, Wuhan University, China", areas: ["Security", "Cloud Systems"], img:"rc.jpg" },
  { name: "Dr. Ashim Khadka", title: "PhD Electronics Engineering, University of Greenwich, UK", areas: ["Electronics", "Research"], img:"ak.jpeg" },
];



const clubs = [
  { 
    name: "Software Committee", 
    desc: "Technical initiatives, project coordination, and software-focused activities." 
  },
  { 
    name: "IEEE", 
    desc: "Professional development, engineering events, and community-driven technical programs." 
  },
  { 
    name: "NOSK", 
    desc: "Open-source development, hackathons, and collaborative coding projects." 
  },
  { 
    name: "NTK", 
    desc: "Friday forum sessions, workshops, and knowledge-sharing events." 
  },
];


const alumni = [
  { name: "Satya Raj Awasthi", role: "Software Engineer — Esewa", img: "/satya.jpeg" },
  { name: "Mukesh Kumar Chaudhary", role: "CTO- Astergaze Tech.", img: "mukesh.webp" },
  { name: "Bibek Dhakal", role: "Founder — Dl.Surf Startup", img: "/bibek.jpeg" },
];


export default function About() {
  return (
    <main className="min-h-screen text-slate-900">
      {/* HERO / INTRO */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-[48px] font-extrabold leading-tight tracking-tight text-[#082B73]">
                About the Software Engineering Department — NCIT
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-2xl">
                A center of excellence dedicated to engineering innovation, advanced computing, and real‑world problem solving. We combine rigorous theory, hands‑on practice, and strong industry ties to prepare students for global technical leadership.
              </p>
              <div className="mt-6 flex gap-3">
                <Button asChild>
                  <a href="#clubs">Explore Clubs</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#research">Research & Labs</a>
                </Button>
              </div>
            </div>

            <div className="hidden md:flex justify-end">
              {/* optional illustrative image - replace with real asset */}
              <div className="w-[420px] h-[260px] rounded-xl overflow-hidden shadow-lg bg-slate-50 flex items-center justify-center">
                <img src="/aboutus.jpg" alt="Faculty" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="w-full bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="grid md:grid-cols-2 gap-8">
            <article className="p-6 border-l-4 border-[#0057B8] bg-white/60 rounded-md">
              <h2 className="text-2xl font-semibold text-[#082B73]">Mission</h2>
              <p className="mt-4 text-base text-slate-700 leading-relaxed">
                To educate and empower students with modern software engineering practices, strong ethical foundations, and the ability to solve complex real‑world problems through collaboration and applied research.
              </p>
            </article>

            <article className="p-6 border-l-4 border-[#0057B8] bg-white/60 rounded-md">
              <h2 className="text-2xl font-semibold text-[#082B73]">Vision</h2>
              <p className="mt-4 text-base text-slate-700 leading-relaxed">
                To be recognized regionally and internationally as a hub for software innovation, research excellence, and industry leadership — producing graduates who drive technological progress and entrepreneurship.
              </p>
            </article>
          </div>
        </div>
      </section>



      {/* RESEARCH & LABS */}
      <section id="research" className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <h3 className="text-3xl font-bold text-[#0057B8]">Research & Labs</h3>
          <p className="mt-3 text-slate-700 max-w-2xl">State of the art labs that support both student projects and faculty research across systems, AI, networks and cloud.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {labs.map((lab) => (
              <div key={lab.id} className="bg-white rounded-lg p-5 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-36 w-full rounded-md bg-slate-50 overflow-hidden flex items-center justify-center mb-4">
                  <img src={`/${lab.img}`} alt={lab.title} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold text-lg text-[#082B73]">{lab.title}</h4>
                <p className="mt-2 text-sm text-slate-700">{lab.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <h3 className="text-3xl font-bold text-[#082B73]">Faculty & Researchers</h3>
          <p className="mt-3 text-slate-700 max-w-2xl">Experienced educators and active researchers mentoring the next generation of engineers.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((f) => (
              <article key={f.name} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-transform hover:scale-[1.02]">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                  <img src={f.img} alt={f.name} className="w-full h-full object-cover" />
                </div>
                <h5 className="mt-4 font-semibold text-[#0B0B0B]">{f.name}</h5>
                <p className="text-sm text-slate-600">{f.title}</p>
                <p className="mt-2 text-xs text-slate-500">{f.areas.join(" • ")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

            {/* STUDENT CLUBS */}
      <section className="w-full bg-[#F4F6F9]" id="clubs">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <h3 className="text-3xl font-bold text-[#082B73]">Student Clubs & Communities</h3>
          <p className="mt-3 text-slate-700 max-w-2xl">Vibrant student organisations powering workshops, competitions and student research.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((c) => (
              <div key={c.name} className="p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-transform hover:-translate-y-1">
                <h4 className="font-semibold">{c.name}</h4>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
                <div className="mt-3 text-xs text-slate-500">Workshops • Projects • Competitions</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ALUMNI SPOTLIGHT */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <h3 className="text-3xl font-bold text-[#082B73]">Alumni Spotlight</h3>
          <p className="mt-3 text-slate-700 max-w-2xl">Career outcomes and success stories from our graduates.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((a) => (
              <article key={a.name} className="p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 flex items-center gap-4">
                <div className="w-20 h-20 rounded-md overflow-hidden bg-slate-100">
                  <img src={a.img} alt={a.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">{a.name}</h4>
                  <div className="text-sm text-slate-600">{a.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>





      {/* FOOTER SPACING */}
      <div className="h-24" />
    </main>
  );
}
