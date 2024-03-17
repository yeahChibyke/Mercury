import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Support from "./pages/Support/Support";
import Docs from "./pages/Documentation/Docs";
import AboutUs from "./pages/AboutUs/AboutUs";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
      index: true,
    },
    {
      path: "/support",
      element: <Support />,
    },
    {
      path: "/documentation",
      element: <Docs />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
  ]);
  return routes;
}
