import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

function Mainroute({ about, project, archive }) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home about={about} project={project} archive={archive} />,
    },
    {
      path: "/admin",
      element: <Login />,
    },
    {
      path: "/admin/dashboard",
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Mainroute;
