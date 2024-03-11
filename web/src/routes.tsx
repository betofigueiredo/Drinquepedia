import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";

// pages
import Home from "@/pages/Home";
import Drinks from "@/pages/Drinks";
import Drink from "./pages/Drink";
import NotFound404 from "./pages/NotFound404";

const allRoutes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/drinques", element: <Drinks /> },
      { path: "/drinques/AaZ", element: <Drinks /> },
      { path: "/drinques/martinis", element: <Drinks /> },
      { path: "/drinques/tropicais", element: <Drinks /> },
      { path: "/drinques/tropicais/pag/:page", element: <Drinks /> },
      { path: "/drinques/frozen", element: <Drinks /> },
      { path: "/drinques/quentes", element: <Drinks /> },
      { path: "/drinques/shot", element: <Drinks /> },
      { path: "/drinques/classicos", element: <Drinks /> },
      { path: "/drinques/semalcool", element: <Drinks /> },
      { path: "/drinques/caipirinhas", element: <Drinks /> },
      { path: "/drinques/smoothies", element: <Drinks /> },
      { path: "/drinques/:drinkId", element: <Drink /> },
      { path: "*", element: <NotFound404 /> },
    ],
  },
]);

const AllRoutes = () => <RouterProvider router={allRoutes} />;

export default AllRoutes;
