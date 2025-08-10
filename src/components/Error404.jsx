import React from "react";
import error404 from "../assets/animation/Error 404 animated.gif";
import { Link } from "react-router";

const Error404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <img
          src={error404}
          alt="404 Error"
          className="mx-auto w-72 md:w-96 mb-6"
        />
        {/* <h1 className="text-5xl font-bold text-gray-800 mb-3">404</h1> */}
        <p className="text-2xl font-bold text-gray-600 mb-6">
          Oops! You seems lost in Himalayas
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-[#fe8d02] hover:bg-yellow-500  text-white rounded-lg  transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
