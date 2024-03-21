import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignUp from "./pages/SignUp/SignUp";
import Docs from "./pages/Documentation/Docs";
import AboutUs from "./pages/AboutUs/AboutUs";
import SignIn from "./pages/SignIn/SignIn";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
      index: true,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/documentation",
      element: <Docs />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);
  return routes;
}
