import React, { useEffect, useState, useTransition } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getCountryIndData } from "../../API/postApi";

const CountryDetails = () => {
  const { id } = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [id]);

  if (!country)
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Loading...
      </div>
    );

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-6 pt-28 pb-20 animate-fadeIn">

      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Flag Card */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 
                          rounded-3xl p-8 shadow-2xl 
                          hover:shadow-indigo-500/20 transition-all duration-500">

            <img
              src={country.flags.png}
              alt={country.flags.alt}
              className="w-full h-80 object-contain animate-float"
            />
          </div>

          {/* Info Section */}
          <div className="space-y-6">

            <h2 className="text-4xl font-bold tracking-wide">
              {country.name.official}
            </h2>

            <div className="space-y-3 text-lg text-gray-300">
              <p>
                <span className="font-semibold text-white">Capital:</span>{" "}
                {country.capital ? country.capital[0] : "N/A"}
              </p>

              <p>
                <span className="font-semibold text-white">Population:</span>{" "}
                {country.population.toLocaleString()}
              </p>

              <p>
                <span className="font-semibold text-white">Region:</span>{" "}
                {country.region}
              </p>

              <p>
                <span className="font-semibold text-white">Sub Region:</span>{" "}
                {country.subregion}
              </p>
            </div>

            <NavLink
              to="/country"
              className="inline-block mt-8 px-7 py-3 rounded-2xl 
                         bg-gradient-to-r from-indigo-600 to-blue-600
                         hover:from-indigo-500 hover:to-blue-500
                         transition-all duration-300 
                         hover:scale-105 hover:shadow-lg"
            >
              ← Back To Browsing
            </NavLink>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CountryDetails;
