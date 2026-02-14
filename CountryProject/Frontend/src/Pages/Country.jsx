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
      country.name.common.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const sortAsc = () => {
    const sorted = [...filteredCountries].sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
    setFilteredCountries(sorted);
  };

  const sortDesc = () => {
    const sorted = [...filteredCountries].sort((a, b) =>
      b.name.common.localeCompare(a.name.common)
    );
    setFilteredCountries(sorted);
  };

  if (loading) return <h1>Loading...</h1>;
return (
  <div className="min-h-screen bg-slate-950 text-white px-6">

    <div className="max-w-7xl mx-auto pt-28 pb-12">

      {/* Search + Buttons */}
      <div className="flex flex-col lg:flex-row items-center gap-5 mb-16">

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search country..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full lg:flex-1 px-6 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleSearch}
            className="px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Search
          </button>

          <button
            onClick={sortAsc}
            className="px-5 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition"
          >
            A → Z
          </button>

          <button
            onClick={sortDesc}
            className="px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition"
          >
            Z → A
          </button>
        </div>

      </div>

      {/* Countries Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredCountries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>

    </div>
  </div>
);

};
