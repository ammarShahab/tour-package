import React from "react";
import tourismBanner_1 from "../../assets/images/tourism banner_1.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <>
      <div className="relative w-full h-[80vh] bg-gray-800 sm:mt-18">
        {/* Background Image */}
        <img
          src={tourismBanner_1}
          alt="Banner Image"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-bitter px-4">
          <h1 className="text-3xl mt-10 md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Discover Your Next Adventure
          </h1>

          <p className="text-sm md:text-sm text-white max-w-2xl drop-shadow-md">
            Explore breathtaking destinations and unforgettable experiences.
            Book the perfect tour package for your next journey—all in one
            place.
          </p>

          <div className="mt-5 sm:mt-24 md:mt-10">
            <Link to="/allPackages">
              <button className="bg-[#fe8d02] hover:bg-yellow-500 text-black text-xs sm:text-2xl md:text-[16px] font-medium sm:font-semibold py-3 px-6 rounded-full transition duration-300">
                Explore All Packages
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="relative w-full min-h-full bg-gray-800">
        <img
          src={tourismBanner_1}
          alt="Banner Image"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-bitter">
          <h1 className="text-3xl mt-10 md:text-6xl font-bold text-white mb-4 ">
            Discover Your Next Adventure
          </h1>

          <p className="text-sm md:text-xl text-white max-w-2xl">
            Explore breathtaking destinations and unforgettable experiences.
            Book the perfect tour package for your next journey—all in one
            place.
          </p>
          <div className="mt-5 sm:mt-24">
            <Link to="/allPackages">
              <button className="bg-[#fe8d02] hover:bg-yellow-500 text-black text-xs sm:text-2xl font-medium sm:font-semibold py-3 px-6 rounded-full transition duration-300">
                Explore All Packages
              </button>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Banner;
