import HexagonCard from "../HexagonCard";


export function Pathway() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-[#0A1A2F] text-center mb-4">
                    Pathway to Excellence
                </h2>
                <p className="text-center text-[#1E1E1E]/70 mb-12 text-lg">
                    Your journey from beginner to professional software engineer
                </p>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0057B8] via-[#3AE9F3] to-[#0057B8]"></div>

                        {[
                            {
                                title: 'Foundation Years (Semester 1–4)',
                                skills: 'Programming fundamentals, Data Structures, Algorithms, OOP, Database',
                                projects: 'Web-dev Projetct',
                                outcome: 'Strong programming foundation with essential core concepts'
                            },
                            {
                                title: 'Specialization Phase (Semester 5–6)',
                                skills: 'AI, ML, Cloud Computing, Software Architecture, Computer Networks',
                                projects: 'Minor Project',
                                outcome: 'Advanced competency in specialized software engineering domains'
                            },
                            {
                                title: 'Advanced Topics (Semester 7–8)',
                                skills: 'DevOps, Advanced Software Engineering',
                                projects: 'Internship and Major Project',
                                outcome: 'Transition into a professional software engineer with industry exposure'
                            }
                        ].map((stage, index) => (
                            <div key={index} className="relative pl-20 pb-12 last:pb-0">
                                <div className="absolute left-4 w-9 h-9 rounded-full bg-[#3AE9F3] border-4 border-white shadow-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">{index + 1}</span>
                                </div>

                                <HexagonCard>
                                    <h3 className="text-xl font-bold text-[#0A1A2F] mb-3">{stage.title}</h3>
                                    <div className="space-y-2 text-sm">
                                        <p>
                                            <span className="font-semibold text-[#0057B8]">Skills:</span> {stage.skills}
                                        </p>

                                        {stage.projects && (
                                            <p>
                                                <span className="font-semibold text-[#0057B8]">Projects:</span> {stage.projects}
                                            </p>
                                        )}

                                        <p>
                                            <span className="font-semibold text-[#0057B8]">Outcome:</span> {stage.outcome}
                                        </p>
                                    </div>
                                </HexagonCard>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}