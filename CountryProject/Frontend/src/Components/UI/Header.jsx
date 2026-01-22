import { NavLink } from "react-router-dom";
import SignUp from "../../Pages/SignUp";
import { AiOutlineHome } from "react-icons/ai";
import { SiWebpack } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { CiLogin } from "react-icons/ci";
import logo from "../../assets/logo.png";
export const Header = () => {
  return (
    <>
      <div className="flex items-center justify-around bg-gray-700 p-3 shadow fixed top-0 left-0 right-0 z-10">
        <div>
          <NavLink to="/">
           <img src={logo} alt="world Image" className="w-12 rounded-4xl animate-pulse" />
          </NavLink>
        </div>
        <div className="text-white">
          <ul className="flex gap-12 ">
            <li>
              <NavLink
                to="/"
                className="flex items-center gap-1 text-blue-100 font-semibold"
              >
                <AiOutlineHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className="flex items-center gap-1 text-blue-100 font-semibold"
              >
                <SiWebpack /> About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="country"
                className="flex items-center gap-1 text-blue-100 font-semibold"
              >
                <AiOutlineGlobal /> Country
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className="flex items-center gap-1 text-blue-100 font-semibold"
              >
                <IoIosContact /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-amber-50 flex items-center gap-4">
            <li>
              <NavLink
                to="signup"
                className="flex items-center gap-1 text-blue-100 font-semibold"
              >
                <SiGnuprivacyguard /> SignUp
              </NavLink>
            </li>
             <li>
              <NavLink
                to="login"
                className="flex items-center gap-1 text-red-400 font-bold"
              >
                <CiLogin /> Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
