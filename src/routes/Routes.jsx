import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PetSupply from "../pages/PetSupply";
import PetAdoption from "../pages/PetAdoption";
import PetFood from "../pages/PetFood";
import PetCare from "../pages/PetCare";
import Accessories from "../pages/Accessories";


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
      },
      {
        path: "pet-supply",
        element: <PetSupply></PetSupply>
      },
      {
        path: "pet-adoption",
        element: <PetAdoption></PetAdoption>,
        loader: () => fetch('http://localhost:3000/pet-adoption')
      },
      {
        path: "pet-food",
        element: <PetFood></PetFood>,
        loader: () =>fetch('http://localhost:3000/foods')
      },
      {
        path: "pet-care",
        element: <PetCare></PetCare>,
        loader: () => fetch('http://localhost:3000/care')
      },
      {
        path: "accessories",
        element: <Accessories></Accessories>,
        loader: () => fetch('http://localhost:3000/acc')
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