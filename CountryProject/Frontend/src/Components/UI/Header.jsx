import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { SiWebpack } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { CiLogin } from "react-icons/ci";
import logo from "../../assets/logo.png";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-gray-700 shadow">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-3">
        
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="world logo" className="w-12 rounded-full animate-pulse" />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-white font-semibold">
          <NavLink to="/" className="flex items-center gap-1 hover:text-blue-300">
            <AiOutlineHome /> Home
          </NavLink>
          <NavLink to="about" className="flex items-center gap-1 hover:text-blue-300">
            <SiWebpack /> About
          </NavLink>
          <NavLink to="country" className="flex items-center gap-1 hover:text-blue-300">
            <AiOutlineGlobal /> Country
          </NavLink>
          <NavLink to="contact" className="flex items-center gap-1 hover:text-blue-300">
            <IoIosContact /> Contact
          </NavLink>
        </nav>

        {/* Auth Links */}
        <div className="hidden md:flex gap-4 items-center">
          <NavLink to="signup" className="flex items-center gap-1 text-blue-100 hover:text-blue-300">
            <SiGnuprivacyguard /> SignUp
          </NavLink>
          <NavLink to="login" className="flex items-center gap-1 text-red-400 font-bold hover:text-red-500">
            <CiLogin /> Login
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-4 pb-4 space-y-3">
          <NavLink to="/" className="block text-white flex items-center gap-1">
            <AiOutlineHome /> Home
          </NavLink>
          <NavLink to="about" className="block text-white flex items-center gap-1">
            <SiWebpack /> About
          </NavLink>
          <NavLink to="country" className="block text-white flex items-center gap-1">
            <AiOutlineGlobal /> Country
          </NavLink>
          <NavLink to="contact" className="block text-white flex items-center gap-1">
            <IoIosContact /> Contact
          </NavLink>
          <NavLink to="signup" className="block text-white flex items-center gap-1">
            <SiGnuprivacyguard /> SignUp
          </NavLink>
          <NavLink to="login" className="block text-red-400 flex items-center gap-1 font-bold">
            <CiLogin /> Login
          </NavLink>
        </div>
      )}
    </header>
  );
};
