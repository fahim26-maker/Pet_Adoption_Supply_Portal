import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomeLayouts></HomeLayouts>
      },
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/*",
        element: <h1>error page</h1>
      }
    ]
  },
  {

        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
        ],
  },
]);

export default router;