import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignUp from "./pages/SignUp/SignUp";
import Docs from "./pages/Documentation/Docs";
import AboutUs from "./components/AboutUs/AboutUs";
import SignIn from "./pages/SignIn/SignIn";
import Account from "./pages/Account/Account";
import ProtectedRoute from "./components/ProtectedRoute";

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
    {
      path: "/account",
      element: (
        <ProtectedRoute>
          <Account />
        </ProtectedRoute>
      ),
    },
  ]);
  return routes;
}
