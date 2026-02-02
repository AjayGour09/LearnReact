import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 text-center mb-4">
        Ooop....! An error occurred.
      </h1>

      {error && (
        <p className="text-center text-gray-700 mb-6 md:px-8">
          {error.data || "Unknown error"}
        </p>
      )}

      <NavLink to="/">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded w-full md:w-auto">
          Go Home
        </button>
      </NavLink>
    </div>
  );
};
