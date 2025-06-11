import React, { use } from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import AuthContext from "../context/AuthContext";
import PackageCard from "./PackageCard";

const FeaturedPackages = ({ featuredPackagesPromise }) => {
  const { setIsLoading, theme } = use(AuthContext);
  // const [topfeaturedPackages, setTopfeaturedPackages] = useState([]);
  // console.log(theme);
  const featuredPackages = use(featuredPackagesPromise);
  console.log(featuredPackages);

  const handleViewDetails = (id) => {
    setIsLoading(false);
    // console.log(id);
  };

  return (
    <div
      className={`max-w-7xl mx-auto px-4 py-6 mt-10 mb-20 bg-lime-100 p-4 rounded-2xl ${
        theme ? "dark" : ""
      }  dark:bg-zinc-600`}
    >
      <h1 className="text-5xl font-bold mb-6 font-bitter text-center text-amber-950 dark:text-white">
        Our
        <Typewriter
          words={[
            " Featured Packages",
            /* " Tastes to Try",
            " Culinary Picks",
            " Dish Delights",
            " featuredPackages", */
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        ></Typewriter>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {featuredPackages.map((tourPackage) => (
          <PackageCard
            key={tourPackage._id}
            tourPackage={tourPackage}
            handleViewDetails={handleViewDetails}
          ></PackageCard>
        ))}
      </div>
      <Link to="/allPackages">
        <button className="block mx-auto mt-6 bg-green-500 text-white px-6 py-3 rounded-md text-lg hover:bg-green-600 transition">
          See All Packages
        </button>
      </Link>
    </div>
  );
};

export default FeaturedPackages;
