import React, { use } from "react";
import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext";

const AddPackage = () => {
  const loggedInUser = use(AuthContext);
  console.log(loggedInUser?.user?.email);
  console.log(loggedInUser?.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const { guide_contact_no, price, ...newAddedPackage } = data;

    newAddedPackage.guide_contact_no = parseInt(guide_contact_no);
    newAddedPackage.price = parseInt(price);
    newAddedPackage.bookingCount = 0;
    const currentDate = Date.now();
    const today = new Date(currentDate);
    newAddedPackage.created_at = today.toLocaleDateString();

    console.log(newAddedPackage);

    fetch("http://localhost:3000/packages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAddedPackage),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("packages added to the dB succesfully", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Your Package Added Successfully",
            icon: "success",
            draggable: true,
          });
          form.reset();
          window.location.reload();
        }
      });
  };
  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-lg sm:max-w-3xl bg-white p-4 sm:p-6 rounded-lg shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
          Add Tour Package
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div className="mb-4">
            <label
              htmlFor="tour_name"
              className="block text-sm font-medium text-gray-700 mb-1 sm:text-base"
            >
              Tour Name
            </label>
            <input
              type="text"
              id="tour_name"
              name="tour_name"
              // value={formData.tour_name}
              // onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe8d02] text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1 sm:text-base"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              /* value={formData.image}
              onChange={handleChange} */
              placeholder="https://example.com/image.jpg"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe8d02] text-sm sm:text-base"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700 mb-1 sm:text-base"
            >
              Duration (e.g. 3 Days 2 Nights)
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              /*  value={formData.duration}
              onChange={handleChange} */
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe8d02] text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="departure_location"
              className="block text-sm font-medium text-gray-700 mb-1 sm:text-base"
            >
              Departure Location
            </label>
            <input
              type="text"
              id="departure_location"
              name="departure_location"
              /*  value={formData.departure_location}
              onChange={handleChange} */
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe8d02] text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="destination"
              className="block text-sm font-medium text-gray-700 mb-1 sm:text-base"
            >
              Destination
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe8d02] text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1 sm:text-base"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              step="0.01"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe8d02] text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="departure_date"
              className="block text-sm font-мedium text-gray-700 mb-1 sm:text-base"
            >
              Departure Date
            </label>
            <input
              type="date"
              id="departure_date"
              name="departure_date"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe8d02] text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="package_details"
              className="block text-sm font-medium text-gray-700 mb-1 sm:text-base"
            >
              Package Details
            </label>
            <textarea
              id="package_details"
              name="package_details"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe8d02] text-sm sm:text-base"
              rows="4"
              required
            />
          </div>

          {/* Guide section */}
          <div className="mb-4">
            <label
              htmlFor="guide_contact_no"
              className="block text-sm font-medium text-gray-700 mb-1 sm:text-base"
            >
              Contact No.
            </label>
            <input
              type="number"
              id="guide_contact_no"
              name="guide_contact_no"
              /* value={formData.guide_contact_no}
              onChange={handleChange} */
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe8d02] text-sm sm:text-base"
              placeholder="+8801XXXXXXXXX"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="guide_name"
              className="block text-sm font-medium text-gray-700 mb-1 sm:text-base"
            >
              Guide Name
            </label>
            <input
              type="text"
              id="guide_name"
              name="guide_name"
              defaultValue={loggedInUser?.user?.displayName}
              // onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe8d02] text-sm sm:text-base"
              readOnly
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="guide_photo"
              className="block text-sm font-medium text-gray-700 mb-1 sm:text-base"
            >
              Guide Photo URL
            </label>
            <input
              type="text"
              id="guide_photo"
              name="guide_photo"
              defaultValue={loggedInUser?.user?.photoURL}
              // onChange={handleChange}
              placeholder="https://example.com/guide.jpg"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe8d02] text-sm sm:text-base"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="guide_email"
              className="block text-sm font-medium text-gray-700 mb-1 sm:text-base"
            >
              Guide Email
            </label>
            <input
              type="text"
              id="guide_email"
              name="guide_email"
              defaultValue={loggedInUser?.user?.email}
              // onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe8d02] text-sm sm:text-base"
              readOnly
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#fe8d02] text-white rounded-md hover:bg-[#fe5602] transition-colors text-base sm:text-lg font-medium"
          >
            Submit Package
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
