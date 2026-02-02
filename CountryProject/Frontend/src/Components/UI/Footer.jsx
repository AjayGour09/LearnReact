import footercontact from "../../API/FooterApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

export const Footer = () => {
  const footericon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="bg-gray-950 text-white mt-10">
      {/* Contact Cards */}
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {footercontact.map((currdata, index) => {
            const { icon, title, details } = currdata;

            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-gray-900 text-white 
                           shadow-md hover:shadow-xl hover:scale-105 transition-all"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full 
                                bg-blue-600 text-xl flex-shrink-0">
                  {footericon[icon]}
                </div>

                {/* Text */}
                <div>
                  <p className="text-lg font-semibold">{title}</p>
                  <p className="text-sm text-gray-300 mt-1">{details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-sm md:text-[16px] text-blue-500">
          © {new Date().getFullYear()} WorldTour.in. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
