import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="border bg-[var(--color-background)] p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 ">
      
      {/* Flag Image */}
      <img
        src={flags.png}
        alt={flags.alt}
        className="w-full h-48 md:h-40 object-cover rounded mt-5"
      />

      {/* Country Name */}
      <p className="font-bold text-lg md:text-xl pt-2">
        {name.common.length > 12
          ? name.common.substring(0, 12) + "..."
          : name.common}
      </p>

      {/* Country Details */}
      <p className="text-sm text-gray-600 mt-1">
        <b>Population:</b> {population.toLocaleString()}
      </p>
      <p className="text-sm text-gray-600">
        <b>Region:</b> {region}
      </p>
      <p className="text-sm text-gray-600">
        <b>Capital:</b> {capital ? capital[0] : "N/A"}
      </p>

      {/* More Info Button */}
      <div className="flex justify-center mt-4">
        <NavLink
          to={`/country/${name.common}`}
          className="w-full text-center bg-[var(--color-primary)] text-white p-2 rounded-lg 
                     hover:bg-blue-600 transition-colors duration-300"
        >
          More Info
        </NavLink>
      </div>
    </li>
  );
};

export default CountryCard;
