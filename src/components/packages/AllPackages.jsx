import React, { Suspense, use, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import PackageCard from "../shared/PackageCard";

/* const allPackagesPromise = fetch("http://localhost:3000/packages").then((res) =>
  res.json()
); */

const AllPackages = () => {
  const { isLoading } = use(AuthContext);
  const [tourPackages, setTourPackages] = useState([]);
  const [search, setSearch] = useState("");

  // console.log(search);

  useEffect(() => {
    // fetch(`http://localhost:3000/packages?searchParams=${search}`)
    fetch(
      `https://b11a11-server-side-ashahab007.vercel.app/packages?searchParams=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTourPackages(data);
      });
  }, [search]);

  // const tourPackages = use(allPackagesPromise);
  // console.log(tourPackages, isLoading);

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
          <input
            type="text"
            name="search"
            className="input"
            placeholder="Type here"
            onChange={(e) => setSearch(e.target.value)}
          />
        </fieldset>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {tourPackages.map((tourPackage) => (
          <Suspense key={tourPackage._id} fallback={isLoading}>
            <PackageCard
              key={tourPackage._id}
              tourPackage={tourPackage}
              search={search}
            ></PackageCard>
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default AllPackages;
