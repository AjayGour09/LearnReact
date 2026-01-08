import { GoArrowRight } from "react-icons/go";
import iimg from "../assets/iimg.jpg";
export const Home = () => {

  return (
    <>
     <div className="flex items-center justify-around ">
      <div>
        <h2 className="text-4xl">Explore the world, One <br />Country at a Time</h2>
        <h2></h2>
        <p className="text-[18px] mt-4">Discover the History,Culture and beauty of every nation, Sort, Search and <br /> <span>filter through Countries to find the details you need.</span></p>
        <div className="flex gap-3 border border-gray-700 w-[160px] p-3 mt-4 rounded-2xl">
          <button>Start Exploring</button>
         <p className="mt-1.5"> <GoArrowRight /></p>
        </div>
      </div>
      <div className="w-[550px] rounded-3xl mt-20">
        <img src={iimg} alt="world Image" />
      </div>
     </div>
    </>
  );
};
