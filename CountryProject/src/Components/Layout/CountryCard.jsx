import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const {flags, name, population, region, capital} = country;
  return(
    <>
    <li>
      <div>
        <img src={flags.png} alt={flags.alt} />
        <div>
          <p>{name.common.length>10 ? name.common.substring(0,10) + "..." : name.common}</p>
        </div>
        <div>
          <p>population :{population}</p>
        </div>
         <div>
          <p>Region :{region}</p>
        </div>
        <div>
          <p>Capital :{capital[0]}</p>
        </div>
       
      </div>
    </li>
    </>
  )
};

export default CountryCard;
 