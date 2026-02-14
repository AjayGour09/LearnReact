import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLink =
    "text-gray-300 hover:text-white transition duration-200";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full transition duration-500 group-hover:rotate-12"
            >
              <defs>
                <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>

              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#globeGradient)"
                strokeWidth="6"
                fill="none"
              />

              <ellipse
                cx="50"
                cy="50"
                rx="25"
                ry="45"
                stroke="url(#globeGradient)"
                strokeWidth="3"
                fill="none"
              />

              <ellipse
                cx="50"
                cy="50"
                rx="45"
                ry="20"
                stroke="url(#globeGradient)"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-lg tracking-wide">
              Desh-Videsh
            </span>
            <span className="text-indigo-500 text-xs tracking-widest uppercase">
              Darpan
            </span>
          </div>
        </NavLink>

        {/* CENTER NAV (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          <NavLink to="/" className={navLink}>Home</NavLink>
          <NavLink to="about" className={navLink}>About</NavLink>
          <NavLink to="country" className={navLink}>Country</NavLink>
          <NavLink to="contact" className={navLink}>Contact</NavLink>
        </nav>

        {/* RIGHT AUTH (Desktop) */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <NavLink
            to="signup"
            className="px-4 py-2 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-800 transition"
          >
            SignUp
          </NavLink>

          <NavLink
            to="login"
            className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition"
          >
            Login
          </NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-slate-900 border-t border-gray-700 shadow-lg animate-slideDown">

          <div className="flex flex-col items-center gap-6 py-6 text-white text-base font-medium">

            <NavLink onClick={() => setIsOpen(false)} to="/">Home</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="about">About</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="country">Country</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="contact">Contact</NavLink>

            <div className="flex gap-4 pt-4 border-t border-gray-700">
              <NavLink
                to="signup"
                className="px-4 py-2 border border-gray-500 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                SignUp
              </NavLink>

              <NavLink
                to="login"
                className="px-4 py-2 bg-indigo-600 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
