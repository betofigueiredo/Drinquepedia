import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";

// pages
import Home from "@/pages/Home";
import Drinks from "@/pages/Drinks";
import Drink from "./pages/Drink";

const allRoutes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/drinques", element: <Drinks /> },
      { path: "/drinques/:drinkId", element: <Drink /> },
    ],
  },
]);

const AllRoutes = () => <RouterProvider router={allRoutes} />;

export default AllRoutes;
