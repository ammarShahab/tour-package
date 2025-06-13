import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./components/Home";
import AddPackage from "./components/packages/AddPackage";
import MyRecipes from "./components/packages/MyPackages";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import AuthLayout from "./layouts/AuthLayout";
import Error404 from "./components/Error404";
import PrilvateRouter from "./components/provider/PrivateRouter";
import PrivateRouter from "./components/provider/PrivateRouter";
import Loading from "./components/Loading";
import RecipeDetails from "./components/PackageDetails";
import PrivacyPolicy from "./components/PrivacyPolicy";
import AllPackages from "./components/packages/AllPackages";
import PackageDetails from "./components/PackageDetails";
import MyPackages from "./components/packages/MyPackages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { index: true, element: <Home></Home> },
      {
        path: "/allPackages",
        /* loader: () => fetch("http://localhost:3000/packages"), */
        Component: AllPackages,
        // hydrateFallbackElement: <Loading></Loading>,
      },
      { path: "/add-package", element: <AddPackage></AddPackage> },
      {
        path: "/packages/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/packages/${params.id}`),
        element: (
          <PrivateRouter>
            <PackageDetails></PackageDetails>
          </PrivateRouter>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/manage-myPackages/:email",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/manage-myPackages/${params.email}`),
        element: (
          <PrivateRouter>
            <MyPackages></MyPackages>
          </PrivateRouter>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },

      { path: "/privacy-policy", Component: PrivacyPolicy },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      { path: "/auth/login", element: <LogIn></LogIn> },
      { path: "/auth/register", element: <Register></Register> },
    ],
  },
  {
    path: "/*",
    Component: Error404,
  },
]);

export default router;
