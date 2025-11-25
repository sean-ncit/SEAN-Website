import HexagonCard from "../HexagonCard";

export function Pathway() {
  const stages = [
    {
      title: "Foundation Years (Semester 1–4)",
      skills: "Programming fundamentals, Data Structures, Algorithms, OOP, Database",
      projects: "Web-dev Project",
      outcome: "Strong programming foundation with essential core concepts",
    },
    {
      title: "Specialization Phase (Semester 5–6)",
      skills: "AI, ML, Cloud Computing, Software Architecture, Computer Networks",
      projects: "Minor Project",
      outcome: "Advanced competency in specialized software engineering domains",
    },
    {
      title: "Advanced Topics (Semester 7–8)",
      skills: "DevOps, Advanced Software Engineering",
      projects: "Internship and Major Project",
      outcome: "Transition into a professional software engineer with industry exposure",
    },
  ];

  return (
    <section className="py-20 px-4 relative bg-[#F7FAFC] overflow-hidden">
      {/* Decorative SVG Backgrounds */}
      <svg
        className="absolute -top-20 -left-20 w-[600px] h-[600px] opacity-20"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="300" cy="300" r="300" fill="#D9E4FF" />
        <ellipse cx="450" cy="150" rx="200" ry="100" fill="#0057B8" fillOpacity="0.1" />
        <path
          d="M0 500 Q300 400 600 500"
          stroke="#003C7A"
          strokeWidth="4"
          strokeOpacity="0.05"
          fill="transparent"
        />
      </svg>

      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl font-bold text-[#082B73] text-center mb-4">
          Pathway to Excellence
        </h2>
        <p className="text-center text-[#1E1E1E]/70 mb-12 text-lg">
          Your journey from beginner to professional software engineer
        </p>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#003C7A] via-[#0057B8] to-[#003C7A]"></div>

          {stages.map((stage, index) => (
            <div key={index} className="relative pl-20 pb-12 last:pb-0">
              {/* Timeline Number */}
              <div className="absolute left-3 w-10 h-10 rounded-full bg-[#0057B8] border-4 border-white shadow-lg flex items-center justify-center text-lg font-bold text-white">
                {index + 1}
              </div>

              <HexagonCard className="hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold text-[#082B73] mb-3">{stage.title}</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-[#003C7A]">Skills:</span>{" "}
                    {stage.skills}
                  </p>
                  {stage.projects && (
                    <p>
                      <span className="font-semibold text-[#003C7A]">Projects:</span>{" "}
                      {stage.projects}
                    </p>
                  )}
                  <p>
                    <span className="font-semibold text-[#003C7A]">Outcome:</span>{" "}
                    {stage.outcome}
                  </p>
                </div>
              </HexagonCard>
            </div>
          ))}

          {/* Extra Circle at the Bottom for design balance */}
          <div className="absolute -bottom-10 left-0 w-32 h-32 rounded-full bg-[#0057B8]/20 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
