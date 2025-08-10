import React, { use } from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import AuthContext from "../context/AuthContext";
import PackageCard from "./PackageCard";
import FeaturedPackageCard from "./FeaturedPackageCard";
import TextAnimation from "../animation/TextAnimation";

const FeaturedPackages = ({ featuredPackagesPromise }) => {
  const { setIsLoading, theme } = use(AuthContext);
  // const [topfeaturedPackages, setTopfeaturedPackages] = useState([]);
  // console.log(theme);
  const featuredPackages = use(featuredPackagesPromise);
  // console.log(featuredPackages);

  const handleViewDetails = (id) => {
    setIsLoading(false);
    // console.log(id);
  };

  return (
    <div
      className={` px-4 pt-6 pb-20 p-4 ${
        theme ? "dark" : ""
      }  dark:bg-zinc-600`}
    >
      <div className="max-w-7xl mx-auto mt-20">
        <h1 className="mb-4 sm:mb-6 font-bitter text-center text-[#DCC6E0] dark:text-white">
          <TextAnimation></TextAnimation>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {featuredPackages.map((tourPackage) => (
            <FeaturedPackageCard
              key={tourPackage._id}
              tourPackage={tourPackage}
              handleViewDetails={handleViewDetails}
            ></FeaturedPackageCard>
          ))}
        </div>
        <Link to="/allPackages">
          <button className="block mx-auto mt-6 bg-[#d9cab3] text-black px-6 py-3 rounded-md text-sm hover:bg-[#ff8d03] transition font-semibold">
            See All Packages
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPackages;
