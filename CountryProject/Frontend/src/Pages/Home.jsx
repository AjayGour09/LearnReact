import { GoArrowRight } from "react-icons/go";
import iimg from "../assets/iimg.jpg";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      
      <section className="min-h-screen flex items-center">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 w-full flex flex-col-reverse lg:flex-row items-center gap-14">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug">
              Explore the World
              <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                One Country at a Time
              </span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-lg mx-auto lg:mx-0">
              Discover history, culture and beauty of every nation.
              Search, filter and explore countries instantly with
              clean structured data.
            </p>

            <div className="flex justify-center lg:justify-start pt-4">
              <NavLink to="/country">
                <button className="group relative inline-flex items-center gap-3 px-7 py-3 rounded-xl text-base font-medium bg-indigo-600 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  
                  {/* Glow Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></span>

                  <span className="relative flex items-center gap-2">
                    Start Exploring
                    <GoArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                  </span>

                </button>
              </NavLink>
            </div>

          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center relative">

            {/* Glow */}
            <div className="absolute w-72 h-72 bg-indigo-600 opacity-20 blur-3xl rounded-full animate-pulse"></div>

            <img
              src={iimg}
              alt="World"
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-3xl shadow-2xl object-cover transition-transform duration-700 hover:scale-105 hover:rotate-1"
            />
          </div>

        </div>

      </section>
    </div>
  );
};

