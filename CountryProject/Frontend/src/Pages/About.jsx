import Country from "../API/Country.json";

export const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          Interesting Facts
          <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mt-3 text-xl sm:text-2xl lg:text-3xl">
            We're Proud Of
          </span>
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {Country.map((c) => (
          <div key={c.id} className="group perspective">
            
            <div className="relative w-full h-56 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              
              {/* FRONT */}
              <div className="absolute inset-0 rounded-2xl p-6
                bg-white/10 backdrop-blur-xl border border-white/20
                shadow-2xl backface-hidden flex flex-col justify-center">

                <h3 className="text-xl font-semibold mb-3 text-indigo-400">
                  {c.countryName}
                </h3>

                <p className="text-sm text-gray-300 mb-2">
                  <span className="font-medium text-white">Capital:</span>{" "}
                  {c.capital}
                </p>

                <p className="text-sm text-gray-400">
                  <span className="font-medium text-white">Population:</span>{" "}
                  {c.population}
                </p>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-2xl p-6
                bg-gradient-to-br from-indigo-600 to-cyan-600
                shadow-2xl border border-white/20
                rotate-y-180 backface-hidden flex items-center justify-center text-center">

                <p className="text-sm sm:text-base italic leading-relaxed">
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
