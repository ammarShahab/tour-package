import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./components/Home";
import AddPackage from "./components/packages/AddPackage";
import MyRecipes from "./components/packages/MyRecipes";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import AuthLayout from "./layouts/AuthLayout";
import Error404 from "./components/Error404";
import PrilvateRouter from "./components/provider/PrivateRouter";
import PrivateRouter from "./components/provider/PrivateRouter";
import Loading from "./components/Loading";
import RecipeDetails from "./components/RecipeDetails";
import PrivacyPolicy from "./components/PrivacyPolicy";
import AllPackages from "./components/packages/AllPackages";

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
        path: "/myrecipes/:email",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/recipes-email/${params.email}`),
        element: (
          <PrivateRouter>
            <MyRecipes></MyRecipes>
          </PrivateRouter>
        ),
      },
      {
        path: "/recipe/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/recipes/${params.id}`),
        element: (
          <PrivateRouter>
            <RecipeDetails></RecipeDetails>
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
