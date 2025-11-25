import { Link } from "react-router-dom"

export function Hero(){
    return(
    
      <section className="bg-white/90 max-w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-animate className="space-y-6">
              <h1 className="font-extrabold text-[40px] md:text-[64px] leading-tight tracking-tight">
                Software Engineering at NCIT
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-xl">
                Shaping innovators, researchers, and leaders in computing and technology.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <Link to="/resources" className="px-5 py-3 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  Explore Resources
                </Link>

                <Link to="/activities" className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200">
                  See Activities
                </Link>
              </div>
            </div>

            <div data-animate className="flex justify-center md:justify-end">
              <div className="w-full max-w-md h-64 rounded-lg shadow-md overflow-hidden bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                {/* Placeholder for department photo or abstract graphic */}
                <div className="text-blue-700 font-semibold">Department Photo / Abstract Graphic</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}