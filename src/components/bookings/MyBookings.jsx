import React, { use, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = use(AuthContext);

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3000/my-bookings/${user?.email}`)
      .then((data) => {
        console.log(data?.data);
        setBookings(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  console.log(bookings);

  const [tourData, setTourData] = useState(bookings);

  const handleConfirmBooking = (bookingId) => {
    console.log(bookingId);

    axios
      .patch(`http://localhost:3000/bookings/${bookingId}`, {
        status: "completed",
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Your Booking has been Confirmed.",
            icon: "success",
            draggable: true,
          });

          //   window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        My Booking Information
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
              <th className="py-3 px-6 text-left">Sl. No.</th>
              <th className="py-3 px-6 text-left">Tour Name</th>
              <th className="py-3 px-6 text-left">Guide Name & Contact</th>
              <th className="py-3 px-6 text-left">Departure Date</th>
              <th className="py-3 px-6 text-left">Departure Location</th>
              <th className="py-3 px-6 text-left">Destination</th>
              <th className="py-3 px-6 text-left">Special Note</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {bookings.map((booking, index) => (
              <tr
                key={booking._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">{booking.tourName}</td>
                <td className="py-3 px-6">
                  {booking.guideName}
                  <br />+{booking.guideContactNumber}
                </td>
                <td className="py-3 px-6">{booking.departureDate}</td>
                <td className="py-3 px-6">{booking.departureLocation}</td>
                <td className="py-3 px-6">{booking.destination}</td>
                <td className="py-3 px-6">{booking.specialNote}</td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => {
                      handleConfirmBooking(booking._id);
                      booking.status === "completed";
                    }}
                    disabled={booking.status === "completed"}
                    className={`font-bold py-2 px-4 rounded ${
                      booking.status === "completed"
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-700 text-white"
                    }`}
                  >
                    {booking.status === "completed" ? "Confirmed" : "Confirm"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
