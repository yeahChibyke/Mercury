import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
      index: true,
    },
  ]);
  return routes;
}
