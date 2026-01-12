import { useState, useEffect } from "react";
import { getCountryData } from "../API/postApi.jsx";
import CountryCard from "../Components/Layout/CountryCard.jsx";

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []); // ✅ VERY IMPORTANT

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <ul className="grid grid-cols-4 gap-8 p-12 pl-25 bg-[var(--color-primary)] mt-6 ">
        {countries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>
    </div>
  );
};
