import Country from "../API/Country.json";

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 md:px-6 py-10 md:py-16">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mt-[50px] mb-10 md:mb-14">
        Here are the interesting facts
        <br />
        <span className="text-gray-500 text-lg md:text-xl lg:text-2xl mt-2 block">
          we're proud of
        </span>
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 px-2 md:px-4">
        {Country.map((c) => (
          <div key={c.id} className="perspective">
            <div className="relative w-full h-[180px] md:h-[160px] lg:h-[150px] transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
              
              {/* FRONT SIDE */}
              <div className="absolute inset-0 rounded-2xl p-4 md:p-5 lg:p-6
                bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600
                text-white shadow-xl border border-gray-700 backface-hidden
                flex flex-col justify-center">
                
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                  {c.countryName}
                </h3>
                <p className="text-sm text-gray-200 mb-1">
                  <span className="font-medium">Capital:</span> {c.capital}
                </p>
                <p className="text-sm text-gray-300">
                  <span className="font-medium">Population:</span>{" "}
                  {c.population}
                </p>
              </div>

              {/* BACK SIDE */}
              <div className="absolute inset-0 rounded-2xl p-4 md:p-5 lg:p-6
                bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700
                text-white shadow-2xl border border-gray-700 rotate-y-180
                backface-hidden flex items-center justify-center">
                
                <p className="text-sm italic text-gray-200 text-center leading-relaxed">
                  {c.interestingFact}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
