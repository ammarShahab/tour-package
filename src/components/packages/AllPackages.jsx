import React, { useEffect, useState } from "react";
import PackageCard from "../shared/PackageCard";
import Loading from "../Loading";

const SkeletonCard = () => (
  <div className="animate-pulse p-4  rounded-lg shadow">
    <div className="h-48 bg-gray-300 rounded mb-4"></div>
    <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
    <div className="h-4 bg-gray-300 rounded mb-1 w-1/2"></div>
    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
  </div>
);

const AllPackages = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tourPackages, setTourPackages] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://b11a11-server-side-ashahab007.vercel.app/packages?searchParams=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTourPackages(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [search]);

  return (
    <div className="mt-20 mb-40">
      <div className="mb-10">
        <h1 className="text-center text-4xl sm:text-5xl font-bold mb-5">
          All Packages
        </h1>
        <p className="text-center">
          Adventure is just a click away — from exotic getaways to weekend
          escapes, discover destinations that inspire and packages that fit
          every traveler.
        </p>
      </div>

      {/* Search */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-center"
      >
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-2xl">
            Search Your Package Here
          </legend>
          <input
            type="text"
            name="search"
            className="input"
            placeholder="Type here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </fieldset>
      </form>

      {/* Loading Skeletons */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <>
          {/* No Results */}
          {tourPackages.length === 0 ? (
            <div className="text-center mt-10 text-gray-500 text-xl">
              No results found for "
              <span className="font-semibold">{search}</span>"
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {tourPackages.map((tourPackage) => (
                <PackageCard key={tourPackage._id} tourPackage={tourPackage} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllPackages;
