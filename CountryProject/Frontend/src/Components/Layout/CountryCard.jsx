import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <>
      <li className="border bg-[var(--color-background)] p-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-gray-400 duration-300">
        <div>
          <img src={flags.png} alt={flags.alt} className="w-80 h-30 rounded" />
          <div>
            <p className="font-bold text-[24px] pt-1.5">
              {name.common.length > 10
                ? name.common.substring(0, 10) + "..."
                : name.common}
            </p>
          </div>
          <div>
            <p>
              {" "}
              <b className="text-[16px] text-gray-600">Population :</b>{" "}
              {population}
            </p>
          </div>
          <div>
            <p>
              <b className="text-[16px] text-gray-600">Region :</b> {region}
            </p>
          </div>
          <div>
            <p>
              <b className="text-[16px] text-gray-600">Capital :</b>{" "}
              {capital[0]}
            </p>
          </div>
          <div className="flex justify-center border m-2 p-2 mt-4 rounded-lg  hover:bg-gray-00  border-gray-700 text-[18px] text-white bg-[var(--color-primary)]">
            <NavLink to={`/country/${name.common}`}>More Info</NavLink>
          </div>
        </div>
      </li>
    </>
  );
};

export default CountryCard;
