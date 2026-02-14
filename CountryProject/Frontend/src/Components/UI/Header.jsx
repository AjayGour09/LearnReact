import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaGlobeAsia } from "react-icons/fa";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLink = "text-gray-300 hover:text-white transition duration-200";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        {/* LEFT - LOGO */}
  <NavLink to="/" className="flex items-center gap-3 group">

  {/* SVG LOGO MARK */}
  <div className="relative w-10 h-10">

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

      {/* Outer Circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#globeGradient)"
        strokeWidth="6"
        fill="none"
      />

      {/* Longitude Lines */}
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

  {/* BRAND TEXT */}
  <div className="flex flex-col leading-tight">
    <span className="text-white font-bold text-lg tracking-wide">
      Desh-Videsh
    </span>
    <span className="text-indigo-500 text-sm tracking-widest uppercase">
      Darpan
    </span>
  </div>

</NavLink>


        {/* CENTER - NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
          <NavLink to="/" className={navLink}>
            Home
          </NavLink>
          <NavLink to="about" className={navLink}>
            About
          </NavLink>
          <NavLink to="country" className={navLink}>
            Country
          </NavLink>
          <NavLink to="contact" className={navLink}>
            Contact
          </NavLink>
        </nav>

        {/* RIGHT - AUTH */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <NavLink
            to="signup"
            className="px-4 py-2 rounded-md border border-gray-600 
                       text-gray-300 hover:bg-gray-800 transition"
          >
            SignUp
          </NavLink>

          <NavLink
            to="login"
            className="px-4 py-2 rounded-md 
                       bg-indigo-600 hover:bg-indigo-700 
                       text-white transition"
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

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 px-6 pb-6 space-y-4 text-gray-300 text-sm">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="country" onClick={() => setIsOpen(false)}>
            Country
          </NavLink>
          <NavLink to="contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="signup" onClick={() => setIsOpen(false)}>
            SignUp
          </NavLink>
          <NavLink to="login" onClick={() => setIsOpen(false)}>
            Login
          </NavLink>
        </div>
      )}
    </header>
  );
};
