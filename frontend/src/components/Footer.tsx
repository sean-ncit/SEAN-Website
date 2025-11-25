import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-[#082B73] text-white ">

                  {/* CTA Banner */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-slate-800">Join NCIT Software Engineering — Apply Today</h4>
            <p className="text-sm text-slate-600">Programs, research opportunities and community-driven activities.</p>
          </div>
          <div>
            <Link to="/apply" className="px-5 py-2 bg-blue-600 text-white rounded-md hover:shadow-md transition">Apply</Link>
          </div>
        </div>
      </section>


            <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between gap-12 py-4">

                {/* FIND US */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Find Us</h3>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7066.954989375123!2d85.3387379!3d27.6716332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e8af4a5fe3%3A0x963d00cdf478c6b6!2sNepal+College+Of+Information+Technology!5e0!3m2!1sen!2snp!4v1438052450258"
                        height="160"
                        className="w-full rounded-md"
                        style={{ border: 0 }}
                        allowFullScreen
                    ></iframe>
                </div>

                {/* DEPARTMENT NAVIGATION */}
                <div>
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <nav className="flex flex-col gap-2 text-sm text-white/90">
                        <Link to="/" className="hover:underline">Home</Link>
                        <Link to="/resources" className="hover:underline">Resources</Link>
                        <Link to="/activities" className="hover:underline">Activities</Link>
                        <Link to="/about" className="hover:underline">About</Link>
                    </nav>
                </div>
            </div>

            <div className="text-center text-white/60 text-sm mt-12">
                © {new Date().getFullYear()} NCIT — Department of Software Engineering
            </div>
        </footer>
    );
}
