import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/modules/Home";
import Login from "@/modules/Login";
import Dashboard from "@/modules/Dashboard";

function Mainroute() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
