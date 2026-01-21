import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountryIndData } from "../../API/postApi";
import { NavLink } from "react-router-dom";

const CountryDeatails = () => {
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

  return (
    <section className="mt-20">
      <div className="flex gap-30 items-center ml-[250px] mb-[30px] mt-20">
        <div>
          <img
            src={country?.flags?.png}
            alt={country?.flags?.alt}
            className="rounded w-[500px]"
          />
        </div>
        <div className="mb-20">
          <h2 className="font-bold text-3xl pb-3">{country?.name?.official}</h2>
          <h2 className="text-xl">
            <span className="font-sans font-semibold text-xl">Capital : </span>{" "}
            {country?.capital}
          </h2>
          <h2>
            {" "}
            <span className="font-sans font-semibold text-xl">
              Population :{" "}
            </span>
            {country?.population}
          </h2>
          <h2>
            {" "}
            <span className="font-sans font-semibold text-xl">Region : </span>
            {country?.region}
          </h2>
          <div className="flex justify-center items-center border  p-2 mt-4 rounded-lg  hover:bg-gray-00  border-gray-700 text-[16px] text-white bg-[var(--color-primary)] w-[200px]">
            <NavLink to={`/country`}>Back To Browsing </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDeatails;
