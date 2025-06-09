import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./components/Home";
import AllRecipes from "./components/AllRecipes";
import AddRecipe from "./components/AddRecipe";
import MyRecipes from "./components/MyRecipes";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import AuthLayout from "./layouts/AuthLayout";
import Error404 from "./components/Error404";
import PrilvateRouter from "./components/provider/PrivateRouter";
import PrivateRouter from "./components/provider/PrivateRouter";
import Loading from "./components/Loading";
import RecipeDetails from "./components/RecipeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { index: true, element: <Home></Home> },
      {
        path: "/allrecipes",
        loader: () => fetch("http://localhost:3000/recipes"),
        element: <AllRecipes></AllRecipes>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      { path: "/addrecipes", element: <AddRecipe></AddRecipe> },
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
