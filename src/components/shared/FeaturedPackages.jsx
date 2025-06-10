import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import AuthContext from "../context/AuthContext";

const FeaturedPackages = ({ featuredPackagesPromise }) => {
  const { setIsLoading, theme } = use(AuthContext);
  // const [topfeaturedPackages, setTopfeaturedPackages] = useState([]);
  // console.log(theme);
  const featuredPackages = use(featuredPackagesPromise);
  console.log(featuredPackages);

  /*  useEffect(() => {
    fetch("http://localhost:3000/top-featuredPackages")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTopfeaturedPackages(data);
        setIsLoading(false);
      });
  }, [setIsLoading]); */

  // console.log(topfeaturedPackages);

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
        {featuredPackages.map((featuredPackage) => (
          <div
            key={featuredPackage._id}
            className={`bg-white rounded-lg shadow-md overflow-hidden text-center p-4 ${
              theme ? "dark" : ""
            }  dark:bg-zinc-400`}
          >
            <img
              src={featuredPackage.image}
              className="w-full h-48 object-cover bg-gray-200 rounded-lg"
            />
            <h3 className="text-lg text-left font-semibold text-gray-800 mt-3 dark:text-white">
              {featuredPackage.tour_name}
            </h3>
            <div className="flex items-center gap-4 mt-3">
              <p className="text-gray-600 dark:text-white">
                <img
                  className="w-8 rounded-full"
                  src={featuredPackage.guide_photo}
                />
              </p>
              <p className="text-gray-600 dark:text-white">
                {featuredPackage.guide_name}
              </p>
            </div>
            <div className="text-left mt-3 space-y-2">
              <h4>
                <span className="font-semibold"> Duration:</span>{" "}
                {featuredPackage.duration}
              </h4>
              <h4>
                <span className="font-semibold"> Departure Date:</span>{" "}
                {featuredPackage.departure_date}
              </h4>
              <h4>
                <span className="font-semibold"> Price:</span>
                <span className="pl-2">{featuredPackage.price} Tk/person</span>
              </h4>
            </div>
            <Link to={`/featuredPackage/${featuredPackage._id}`}>
              <button
                onClick={() => handleViewDetails(featuredPackage._id)}
                className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/allfeaturedPackages">
        <button className="block mx-auto mt-6 bg-green-500 text-white px-6 py-3 rounded-md text-lg hover:bg-green-600 transition">
          See All Packages
        </button>
      </Link>
    </div>
  );
};

export default FeaturedPackages;
