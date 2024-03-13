import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";

// pages
import Home from "@/pages/Home";
import Drinks from "@/pages/Drinks";
import Drink from "./pages/Drink";
import NotFound404 from "./pages/NotFound404";
import Highlights from "./pages/Highlights";
import Highlight from "./pages/Highlight";

const allRoutes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/drinques", element: <Drinks /> },
      { path: "/drinques/AaZ", element: <Drinks /> },
      { path: "/drinques/martinis", element: <Drinks category="martinis" /> },
      { path: "/drinques/tropicais", element: <Drinks category="tropicais" /> },
      { path: "/drinques/frozen", element: <Drinks category="frozen" /> },
      { path: "/drinques/quentes", element: <Drinks category="quentes" /> },
      { path: "/drinques/shot", element: <Drinks category="shot" /> },
      { path: "/drinques/classicos", element: <Drinks category="classicos" /> },
      { path: "/drinques/semalcool", element: <Drinks category="semalcool" /> },
      {
        path: "/drinques/caipirinhas",
        element: <Drinks category="caipirinhas" />,
      },
      { path: "/drinques/smoothies", element: <Drinks category="smoothies" /> },
      { path: "/destaques/:highlightId", element: <Highlight /> },
      { path: "/destaques", element: <Highlights /> },
      { path: "/drinques/:drinkId", element: <Drink /> },
      { path: "*", element: <NotFound404 /> },
    ],
  },
]);

const AllRoutes = () => <RouterProvider router={allRoutes} />;

export default AllRoutes;
