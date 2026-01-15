import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountryIndData } from "../../API/postApi";

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
      <div>
        <h2>{country?.name?.official}</h2>
      </div>
    </section>
  );
};

export default CountryDeatails;
