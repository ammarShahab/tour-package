import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router";

const PackageDetails = () => {
  const tourPackage = useLoaderData();
  // console.log(recipe);
  const {
    destination,
    departure_date,
    departure_location,
    bookingCount,
    package_details,
    price,
    duration,
    guide_contact_no,
    guide_photo,
    guide_name,
    tour_name,
    image,
  } = tourPackage;
  // const [islikes, setIsLikes] = useState(likes);
  // const [isLiked, setIsLiked] = useState(false);

  /* const toggleLike = () => {
    setIsLiked(true);
    
  }; */

  return (
    <div className="w-full max-w-5xl mx-auto my-5 border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="w-full">
        <img
          src={image}
          alt="Tour Image"
          className="w-full h-auto max-h-[400px] object-cover"
        />
      </div>
      <div className="p-5">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          {tour_name}
        </h2>
        <div className="flex items-center mb-4">
          <img
            src={guide_photo}
            alt="Guide Image"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover mr-4"
          />
          <div className="flex items-center justify-between w-full">
            <h4 className="text-sm md:text-xl font-semibold text-gray-700 mr-2">
              {guide_name}
            </h4>
            <p className="text-gray-600 text-sm md:text-xl font-semibold">
              <span className="font-semibold">Contact:</span> +
              {guide_contact_no}
            </p>
          </div>
        </div>
        <div className="text-gray-700 text-sm md:text-lg space-y-2">
          <p>
            <span className="font-semibold">Duration:</span> {duration}
          </p>
          <p>
            <span className="font-semibold">Price:</span> {price} Tk/Person
          </p>
          <p>
            <span className="font-semibold">Booking Count:</span> {bookingCount}
            <span> Bookings</span>
          </p>
          <p>
            <span className="font-semibold">Departure Location:</span>{" "}
            {departure_location}
          </p>
          <p>
            <span className="font-semibold">Departure Date:</span>{" "}
            {departure_date}
          </p>
          <p>
            <span className="font-semibold">Destination:</span> {destination}
          </p>
        </div>
        <div className="mt-4 text-gray-600text-sm md:text-lg">
          <h3 className="font-bold text-gray-700 ">Package Deatails:</h3>

          <p className="mt-2 text-gray-700 ">{package_details}</p>
        </div>
        <a
          href="#book"
          className="block w-full max-w-xs mx-auto mt-5 py-3 bg-green-600 text-white text-center rounded-md font-semibold text-sm md:text-base hover:bg-green-700 transition-colors"
        >
          Book Now
        </a>
      </div>
    </div>
  );

  /* <div className="flex justify-center items-center w-full min-h-screen bg-gray-100 mb-0">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-8xl overflow-hidden m-4">
        <img
          src={image}
          alt="Fluffy Pancakes"
          className="w-full h-64 object-cover"
        />
        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <div className="flex justify-between text-gray-600 text-sm mb-3">
            <span>Cuisine: {cuisine}</span>
            <span>Preparation Time: {prepTime} min</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {isChecked?.map((tag) => (
              <span
                key={tag}
                className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Ingredients
            </h3>
            <ul className="list-disc pl-5 text-gray-600 text-sm">
              {ingredients}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Instructions
            </h3>
            <p className="text-gray-600 text-sm">{instructions}</p>
          </div>
          <button
            onClick={toggleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded text-white text-sm font-medium ${
              isLiked
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            } transition-colors`}
          >
            <FaHeart className="text-white" />
            {isLiked ? "Liked" : "Like"}
          </button>
          <div className="text-gray-600 text-sm mt-2">Likes: {likes}</div>
        </div>
      </div>
    </div> */
};

export default PackageDetails;
