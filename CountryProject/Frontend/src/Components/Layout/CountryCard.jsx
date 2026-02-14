import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden 
                   shadow-md hover:shadow-xl hover:-translate-y-1 
                   transition-all duration-300 max-w-sm mx-auto w-full">

      {/* Flag */}
      <div className="bg-slate-800 flex items-center justify-center p-4">
        <img
          src={flags.png}
          alt={flags.alt}
          className="h-32 object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        <h2 className="text-lg font-semibold text-white mb-3">
          {name.common}
        </h2>

        <div className="space-y-1 text-sm text-gray-400">
          <p>
            <span className="text-gray-300 font-medium">Population:</span>{" "}
            {population.toLocaleString()}
          </p>
          <p>
            <span className="text-gray-300 font-medium">Region:</span> {region}
          </p>
          <p>
            <span className="text-gray-300 font-medium">Capital:</span>{" "}
            {capital ? capital[0] : "N/A"}
          </p>
        </div>

        <NavLink
          to={`/country/${name.common}`}
          className="mt-4 block text-center bg-indigo-600 hover:bg-indigo-700 
                     text-white py-2 rounded-lg transition duration-300"
        >
          More Info
        </NavLink>

      </div>
    </li>
  );
};

export default CountryCard;
