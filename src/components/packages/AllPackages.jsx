import React, { Suspense, use, useState } from "react";
import RecipeCard from "./RecipeCard";
import AuthContext from "../context/AuthContext";

import PackageCard from "../shared/PackageCard";

const allPackagesPromise = fetch("http://localhost:3000/packages").then((res) =>
  res.json()
);

const AllPackages = () => {
  const { isLoading } = use(AuthContext);
  const tourPackages = use(allPackagesPromise);
  console.log(tourPackages, isLoading);

  /*  const initialRecipes = useLoaderData();
  const [recipes, setRecipes] = useState(initialRecipes); */

  // const { recipes, setRecipes } = use(AuthContext);
  // console.log(recipes);
  return (
    <div className="mt-20 mb-40">
      <h1 className="text-center text-4xl sm:text-5xl font-bold mb-10">
        All Packages
      </h1>
      <div className="flex justify-center">
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-2xl">
            Search Your Package Here
          </legend>
          <input type="text" className="input" placeholder="Type here" />
        </fieldset>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {tourPackages.map((tourPackage) => (
          <Suspense key={tourPackage._id} fallback={isLoading}>
            <PackageCard
              key={tourPackage._id}
              tourPackage={tourPackage}
            ></PackageCard>
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default AllPackages;
