import { useState, type ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'

const CHARCOAL = '#111111'
const NCIT_BLUE = '#0057B8'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [openResources, setOpenResources] = useState(false)
  const [openActivities, setOpenActivities] = useState(false)

  const MenuLink = ({ to, children }: { to: string; children: ReactNode }) => (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `block px-3 py-2 text-base md:text-sm font-medium transition underline-offset-4 ${
          isActive ? 'text-[#0057B8]' : 'text-[#111111] hover:underline'
        }`
      }
      onClick={() => setOpen(false)}
    >
      {children}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14 md:h-16">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <div className="w-10 h-10 rounded-sm flex items-center justify-center bg-[#0057B8] text-white font-bold">NC</div>
              <span className="text-sm md:text-base font-semibold text-[#111111]">NCIT</span>
            </Link>
          </div>

          {/* Center / Links (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" end className={({ isActive }) => `text-[${CHARCOAL}] font-medium ${isActive ? 'text-[#0057B8]' : 'hover:underline'}`}>
              Home
            </NavLink>
            <NavLink to="/resources" className={({ isActive }) => `text-[${CHARCOAL}] font-medium ${isActive ? 'text-[#0057B8]' : 'hover:underline'}`}>
              Resources
            </NavLink>
            <NavLink to="/activities" className={({ isActive }) => `text-[${CHARCOAL}] font-medium ${isActive ? 'text-[#0057B8]' : 'hover:underline'}`}>
              Activities
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `text-[${CHARCOAL}] font-medium ${isActive ? 'text-[#0057B8]' : 'hover:underline'}`}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `text-[${CHARCOAL}] font-medium ${isActive ? 'text-[#0057B8]' : 'hover:underline'}`}>
              Contact
            </NavLink>
          </nav>

          {/* Right: CTA + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to="/apply"
              className="hidden md:inline-block px-4 py-2 rounded text-white font-semibold"
              style={{ backgroundColor: NCIT_BLUE }}
            >
              Apply Now
            </Link>

            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
            >
              <svg className="w-6 h-6 text-[#111111]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile slide-in menu */}
        <div
          className={`fixed inset-0 z-40 transition-transform duration-300 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
          aria-hidden={!open}
        >
          {/* overlay */}
          <div
            className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setOpen(false)}
          />

          <aside
            className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
            role="dialog"
            aria-modal="true"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center bg-[#0057B8] text-white font-bold">NC</div>
                  <span className="text-sm font-semibold text-[#111111]">NCIT</span>
                </Link>
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <svg className="w-6 h-6 text-[#111111]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                <MenuLink to="/">Home</MenuLink>

                <div>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2 text-left text-[#111111] hover:underline"
                    onClick={() => setOpenResources((s) => !s)}
                    aria-expanded={openResources}
                    aria-controls="resources-submenu"
                  >
                    <span>Resources</span>
                    <svg className={`w-4 h-4 transition-transform ${openResources ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div id="resources-submenu" className={`mt-1 pl-4 flex flex-col gap-1 ${openResources ? '' : 'hidden'}`}>
                    <MenuLink to="/resources/sem1">Semester 1</MenuLink>
                    <MenuLink to="/resources/sem2">Semester 2</MenuLink>
                    <MenuLink to="/resources/sem3">Semester 3</MenuLink>
                  </div>
                </div>

                <div>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2 text-left text-[#111111] hover:underline"
                    onClick={() => setOpenActivities((s) => !s)}
                    aria-expanded={openActivities}
                    aria-controls="activities-submenu"
                  >
                    <span>Activities</span>
                    <svg className={`w-4 h-4 transition-transform ${openActivities ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div id="activities-submenu" className={`mt-1 pl-4 flex flex-col gap-1 ${openActivities ? '' : 'hidden'}`}>
                    <MenuLink to="/activities/featured">Featured</MenuLink>
                    <MenuLink to="/activities/news">News</MenuLink>
                  </div>
                </div>

                <MenuLink to="/about">About</MenuLink>
                <MenuLink to="/contact">Contact</MenuLink>

                <div className="mt-4">
                  <Link
                    to="/apply"
                    className="block px-4 py-2 rounded text-white text-center font-semibold"
                    style={{ backgroundColor: NCIT_BLUE }}
                    onClick={() => setOpen(false)}
                  >
                    Apply Now
                  </Link>
                </div>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </header>
  )
}
