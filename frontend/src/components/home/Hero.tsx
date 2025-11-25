import { Link } from "react-router-dom";
import { Laptop, Users, FlaskConical } from "lucide-react";

export function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
            {/* Decorative SVG shapes - improved for visual appeal */}
            <svg
                className="absolute -top-40 -left-40 w-[520px] h-[520px] opacity-25 blur-sm"
                viewBox="0 0 520 520"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <ellipse cx="260" cy="260" rx="240" ry="200" fill="#2563eb" />
                <ellipse cx="320" cy="180" rx="80" ry="60" fill="#60a5fa" opacity="0.5" />
            </svg>
            <svg
                className="absolute -bottom-40 -right-40 w-[650px] h-[650px] opacity-25 blur-sm"
                viewBox="0 0 650 650"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0,550 Q325,650 650,550 Q500,400 325,450 Q150,500 0,550 Z"
                    fill="#0057B8"
                />
                <circle cx="500" cy="500" r="80" fill="#60a5fa" opacity="0.4" />
            </svg>

            <div className="max-w-7xl mx-auto px-6 md:px-20 py-32 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-[#082B73] leading-tight">
                            Software Engineering at NCIT
                        </h1>
                        <p className="text-lg md:text-xl text-slate-700 max-w-xl">
                            Transforming students into innovative software engineers, researchers, and technology leaders with hands-on experience in coding, AI, and cloud computing.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-6">
                            <Link
                                to="/resources"
                                className="px-6 py-3 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                            >
                                Explore Courses & Labs
                            </Link>

                            <Link
                                to="/activities"
                                className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                            >
                                See Department Activities
                            </Link>
                        </div>
                    </div>

                    {/* Visual Section */}
                    <div className="relative flex justify-center md:justify-end">
                        <div className="w-full max-w-md h-[400px] rounded-xl shadow-xl overflow-hidden bg-gradient-to-br from-blue-100 to-white flex items-center justify-center">
                            {/* Placeholder for college department photo */}
                            <div className="text-blue-700 font-semibold text-center px-4">
                                <span className="block text-xl mb-2">NCIT Software Labs</span>
                                <span className="block text-sm">Students coding, collaborating, and innovating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
