import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Components/Layout/AppLayout";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Country } from "./Pages/Country";
import { Contact } from "./Pages/Contact";
import { ErrorPage } from "./Pages/ErrorPage";
import CountryDeatails from "./Components/Layout/CountryDeatails";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
         path: "country/:id",
        element: <CountryDeatails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path:"signup",
        element:<SignUp/>,
      },
       {
        path:"login",
        element:<Login/>,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
export default App;
