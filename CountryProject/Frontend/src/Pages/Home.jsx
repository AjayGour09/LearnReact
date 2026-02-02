import { GoArrowRight } from "react-icons/go";
import iimg from "../assets/iimg.jpg";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-around px-4 md:px-8 py-10">
      
      {/* Left Section */}
      <div className="text-center lg:text-left lg:w-1/2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Explore the world, One <br />
          Country at a Time
        </h2>

        <p className="text-base md:text-lg mt-5 text-gray-700">
          Discover the History, Culture and beauty of every nation, Sort,
          Search and 
          <span>filter through Countries to find the details you need.</span>
        </p>

        <div className="mt-6 flex justify-center lg:justify-start">
          <NavLink to="/country">
            <div className="flex gap-3 border border-blue-900 px-4 py-2 rounded-2xl animate-pulse text-red-900 items-center">
              <button className="hover:cursor-pointer">
                Start Exploring
              </button>
              <GoArrowRight className="mt-1" />
            </div>
          </NavLink>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-3/4 lg:w-[550px] rounded-2xl mb-10 mt-[60px] lg:mb-0">
        <img src={iimg} alt="world Image" className="w-full h-auto rounded-3xl" />
      </div>
    </div>
  );
};
