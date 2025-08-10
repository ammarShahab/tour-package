import React, { useEffect, useState } from "react";
import PackageCard from "../shared/PackageCard";

const SkeletonCard = () => (
  <div className="animate-pulse p-4 rounded-lg shadow">
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
  const [sort, setSort] = useState("");

  const fetchPackages = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.append("searchParams", search);

      const res = await fetch(
        `https://b11a11-server-side-ashahab007.vercel.app/packages?${params.toString()}`
      );
      const data = await res.json();

      // Client-side sorting by numeric price
      if (sort === "asc") {
        data.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
      } else if (sort === "desc") {
        data.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
      }

      setTourPackages(data);
    } catch (err) {
      console.error("Failed to fetch packages:", err);
      setTourPackages([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, sort]);

  return (
    <div className="max-w-7xl mx-auto mt-16 sm:mt-20 mb-20 p-2">
      <div className="mb-8">
        <h1 className="text-center text-2xl font-bold mb-2">All Packages</h1>
        <p className="text-center text-sm text-gray-600">
          Adventure is just a click away — discover destinations and packages
          that fit every traveler.
        </p>
      </div>

      {/* Search + Sort */}
      <div className="flex flex-col sm:flex-row items-stretch justify-between gap-4 mb-6">
        <form onSubmit={(e) => e.preventDefault()} className="flex-1">
          <fieldset className="fieldset">
            <legend className="text-sm text-gray-600">
              Search Your Package Here
            </legend>
            <input
              type="text"
              name="search"
              className="input w-full"
              placeholder="Type package name (e.g. Sylhet)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </fieldset>
        </form>

        <div className="w-56">
          <fieldset className="fieldset">
            <legend className="text-sm text-gray-600">Sort By Price</legend>
            <select
              className="select w-full"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Default</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </fieldset>
        </div>
      </div>

      {/* Results */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : tourPackages.length === 0 ? (
        <div className="text-center mt-10 text-gray-500 text-lg">
          No results found{search ? ` for “${search}”` : ""}.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tourPackages.map((pkg) => (
            <PackageCard key={pkg._id} tourPackage={pkg} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPackages;
