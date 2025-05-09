import React, { useState } from "react";

const Bookings = () => {
  const [bookingData, setBookingData] = useState({
    name: "Ravikumar",
    mobile: "+91 9003241548",
    pickup: "Dharapuram , Tamilnadu, India",
    drop: "Aloft, Singanallur, Coimbatore,Tamilnadu, India",
    distance: "83.60 KM",
    price: "2089.99 Rs",
  });

  const previousBookings = [
    { name: "Ravikumar", route: "Coimbatore to Chennai", rating: 4 },
    { name: "Anbu", route: "Chennai to Bangalore", rating: 4 },
    { name: "Ravikumar", route: "Coimbatore to Chennai", rating: 5 },
  ];

  return (
    <div className="py-24 px-6 lg:px-20">
      <h1 className="text-5xl font-semibold text-[#2E709E] text-center mt-12 relative bottom-12">
        Booking
      </h1>
      <div className="h-1 w-44 bg-orange-500 mx-auto relative bottom-8 rounded"></div>
      <div className="flex justify-center items-center min-h-screen p-6 relative bottom-12">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Confirm Booking */}
          <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="font-semibold text-2xl mb-6 text-[#2E709E] text-center">
              Confirm Your Booking
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Name:</strong> {bookingData.name}
              </p>
              <p>
                <strong>Mobile:</strong> {bookingData.mobile}
              </p>
              <p>
                <strong>Pickup:</strong> {bookingData.pickup}
              </p>
              <p>
                <strong>Drop:</strong> {bookingData.drop}
              </p>
              <p>
                <strong>Distance:</strong> {bookingData.distance}
              </p>
              <p>
                <strong>Price:</strong> {bookingData.price}
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transform hover:scale-105 transition duration-300">
                Cancel
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transform hover:scale-105 transition duration-300">
                Confirm
              </button>
            </div>
          </div>

          {/* Previous Bookings */}
          <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="font-semibold text-2xl mb-6 text-[#2E709E] text-center">
              Previous Bookings
            </h2>
            {previousBookings.map((booking, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 mb-6 rounded-lg shadow-md hover:shadow-lg transition-all ease-in-out duration-300"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {booking.name}
                    </h3>
                    <p className="text-gray-600">{booking.route}</p>
                  </div>
                  <div>
                    <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
