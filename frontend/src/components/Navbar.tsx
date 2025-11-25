import { useState, type ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

const NCIT_BLUE = "#0057B8";
const TEXT = "#111111";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const MenuLink = ({ to, children }: { to: string; children: ReactNode }) => (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `block px-3 py-2 text-base md:text-sm font-medium transition underline-offset-4 ${
          isActive ? "text-[#0057B8]" : "text-[#111111] hover:underline"
        }`
      }
      onClick={() => setOpen(false)}
    >
      {children}
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14 md:h-16">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/ncit-logo.webp" alt="Logo" className="w-14 h-12 rounded-sm object-cover" />
          <span className="text-sm md:text-base font-semibold" style={{ color: TEXT }}>
            Software Depatment
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/resources">Resources</MenuLink>
          <MenuLink to="/activities">Activities</MenuLink>
          <MenuLink to="/alumni">Alumni</MenuLink>
          <MenuLink to="/achievements">Achievements</MenuLink>
          <MenuLink to="/contact">Contact</MenuLink>
        </nav>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link
            to="/apply"
            className="hidden md:inline-block px-4 py-2 rounded text-white font-semibold"
            style={{ backgroundColor: NCIT_BLUE }}
          >
            Apply Now
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <svg className="w-6 h-6 text-[#111]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <aside
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                <div className="w-8 h-8 rounded-sm flex items-center justify-center bg-[#0057B8] text-white font-bold">
                  NC
                </div>
                <span className="text-sm font-semibold text-[#111]">NCIT Software Dept.</span>
              </Link>
              <button onClick={() => setOpen(false)}>
                <svg className="w-6 h-6 text-[#111]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile menu links (NO DROPDOWNS) */}
            <nav className="flex flex-col gap-1">
              <MenuLink to="/">Home</MenuLink>
              <MenuLink to="/resources">Resources</MenuLink>
              <MenuLink to="/activities">Activities</MenuLink>
              <MenuLink to="/alumni">Alumni</MenuLink>
              <MenuLink to="/achievements">Achievements</MenuLink>
              <MenuLink to="/contact">Contact</MenuLink>

              <Link
                to="/apply"
                className="mt-4 block px-4 py-2 rounded text-white text-center font-semibold"
                style={{ backgroundColor: NCIT_BLUE }}
                onClick={() => setOpen(false)}
              >
                Apply Now
              </Link>
            </nav>
          </div>
        </aside>
      </div>
    </header>
  );
}
