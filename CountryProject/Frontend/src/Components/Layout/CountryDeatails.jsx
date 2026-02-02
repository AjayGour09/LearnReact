import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountryIndData } from "../../API/postApi";
import { NavLink } from "react-router-dom";

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

  if (!country) return <p className="text-center mt-20">Loading...</p>;

  return (
    <section className="mt-20 px-4 md:px-10">
      <div className="flex flex-col md:flex-row md:gap-10 items-center md:items-start">

        {/* Flag Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={country.flags.png}
            alt={country.flags.alt}
            className="w-full h-auto rounded shadow-lg"
          />
        </div>

        {/* Country Info */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="font-bold text-2xl md:text-3xl mb-4">{country.name.official}</h2>
          
          <p className="text-lg md:text-xl mb-2">
            <span className="font-semibold">Capital:</span> {country.capital ? country.capital[0] : "N/A"}
          </p>
          
          <p className="text-lg md:text-xl mb-2">
            <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
          </p>

          <p className="text-lg md:text-xl mb-2">
            <span className="font-semibold">Region:</span> {country.region}
          </p>

          <div className="flex justify-center md:justify-start mt-6">
            <NavLink
              to="/country"
              className="bg-[var(--color-primary)] text-white p-2 rounded-lg w-48 text-center hover:bg-blue-600 transition-colors"
            >
              Back To Browsing
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
