import { useState, useEffect } from "react";
import { getCountryData } from "../API/postApi.jsx";
import CountryCard from "../Components/Layout/CountryCard.jsx";

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data);
        setFilteredCountries(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);
  const handleSearch = () => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredCountries(filtered);
  };
  const sortAsc = () => {
    const sorted = [...filteredCountries].sort((a, b) =>
      a.name.common.localeCompare(b.name.common),
    );
    setFilteredCountries(sorted);
  };
  const sortDesc = () => {
    const sorted = [...filteredCountries].sort((a, b) =>
      b.name.common.localeCompare(a.name.common),
    );
    setFilteredCountries(sorted);
  };
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="bg-[var(--color-primary)]">
      <div className="flex gap-4 px-12 pt-16">
        <input
          type="text"
          placeholder="Search country..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="px-4 py-2 border rounded"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Search
        </button>
        <button
          onClick={sortAsc}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Country A → Z
        </button>
        <button
          onClick={sortDesc}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Country Z → A
        </button>
      </div>
      <ul className="grid grid-cols-4 gap-8 p-12">
        {filteredCountries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>
    </div>
  );
};
