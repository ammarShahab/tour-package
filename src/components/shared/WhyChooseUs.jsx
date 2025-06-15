import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChooseUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <section
      className="py-16 mb-32 px-8"
      style={{ backgroundColor: "#6090a6" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center font-bitter text-white mb-12">
          Why Choose TripNest?
        </h2>

        <Slider {...settings} className="slick-slider">
          {/* Slide 1 */}
          <div className="px-2">
            <div
              className="flex flex-col items-center p-6 rounded-lg shadow-md"
              style={{ backgroundColor: "#E6F0FA" }}
            >
              <svg
                className="w-12 h-12 text-blue-800 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Best Price Guarantee
              </h3>
              <p className="text-gray-600 text-center mb-4">
                We offer competitive prices with no hidden fees, ensuring you
                get the best deals on your travel bookings.
              </p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="px-2">
            <div
              className="flex flex-col items-center p-6 rounded-lg shadow-md"
              style={{ backgroundColor: "#FFF4E6" }}
            >
              <svg
                className="w-12 h-12 text-orange-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Wide Range of Destinations
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Explore thousands of destinations worldwide, from exotic beaches
                to vibrant cities, all in one place.
              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="px-2">
            <div
              className="flex flex-col items-center p-6 rounded-lg shadow-md"
              style={{ backgroundColor: "#E6FFF5" }}
            >
              <svg
                className="w-12 h-12 text-green-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                24/7 Customer Support
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Our dedicated team is available around the clock to assist you
                with any travel needs or questions.
              </p>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="px-2">
            <div
              className="flex flex-col items-center p-6 rounded-lg shadow-md"
              style={{ backgroundColor: "#FFE6E6" }}
            >
              <svg
                className="w-12 h-12 text-red-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Easy Booking Process
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Book your trips effortlessly with our user-friendly platform and
                secure payment options.
              </p>
            </div>
          </div>

          {/* Slide 5 */}
          <div className="px-2">
            <div
              className="flex flex-col items-center p-6 rounded-lg shadow-md"
              style={{ backgroundColor: "#F3E8FF" }}
            >
              <svg
                className="w-12 h-12 text-purple-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 1.1-.9 2-2 2s-2-.9-2-2 2-4 2-4 2 2.9 2 4zm0 0c0 1.1.9 2 2 2s2-.9 2-2-2-4-2-4-2 2.9-2 4zm-6 9h12a2 2 0 002-2v-1c0-2.2-3.6-4-8-4s-8 1.8-8 4v1a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Personalized Travel Plans
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Tailor your trips with customized itineraries designed to match
                your preferences and budget.
              </p>
            </div>
          </div>

          {/* Slide 6 */}
          <div className="px-2">
            <div
              className="flex flex-col items-center p-6 rounded-lg shadow-md"
              style={{ backgroundColor: "#FEF3E2" }}
            >
              <svg
                className="w-12 h-12 text-yellow-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18M9 12h6m-3-3v6"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Exclusive Deals & Offers
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Unlock special discounts and promotions available only to
                TripNest users for a memorable travel experience.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default WhyChooseUs;
