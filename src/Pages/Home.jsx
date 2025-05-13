import React from "react";

const Home = () => {
  return (
    <div className="flex-1 p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-xl md:text-2xl font-bold">Hello, Soundarajan 👋</h1>
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="rounded-full w-10 h-10"
        />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-4 mb-6">
        <div className="bg-white shadow p-6 rounded text-center flex-1">
          <div className="text-blue-500 text-2xl mb-2">🔁</div>
          <p className="text-gray-600">Total Bookings</p>
          <p className="text-2xl font-bold">200</p>
        </div>
        <div className="bg-white shadow p-6 rounded text-center flex-1">
          <div className="text-blue-500 text-2xl mb-2">🚗</div>
          <p className="text-gray-600">Total Cars</p>
          <p className="text-2xl font-bold">1</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
        <button className="bg-gray-200 px-4 py-2 rounded w-full sm:w-auto">
          🔍 Filters
        </button>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/2"
        />
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded overflow-x-auto">
        {/* Table Header */}
        <div className="grid grid-cols-2 sm:grid-cols-5 font-semibold border-b p-4 min-w-[600px]">
          <div>Customers</div>
          <div>Status</div>
          <div className="hidden sm:block">Pickup</div>
          <div className="hidden sm:block">Destination</div>
          <div className="hidden sm:block">Fare</div>
        </div>

        {/* Table Rows */}
        {[
          {
            name: "John Doe 🇮🇳",
            email: "john.doe@gmail.com",
            status: "Upcoming",
            pickup: "Trichy",
            destination: "Trichy Airport",
            fare: "2000 Rs",
          },
          {
            name: "John Doe 🇮🇳",
            email: "john.doe@gmail.com",
            status: "Completed",
            pickup: "Thiruverumbur",
            destination: "Trichy",
            fare: "2500 Rs",
          },
          {
            name: "John Doe 🇮🇳",
            email: "john.doe@gmail.com",
            status: "Completed",
            pickup: "Trichy",
            destination: "Srirangam",
            fare: "3500 Rs",
          },
        ].map((row, index) => (
          <div
            key={index}
            className="grid grid-cols-2 sm:grid-cols-5 items-center border-b p-4 text-sm min-w-[600px]"
          >
            <div className="flex items-center space-x-2">
              <img
                src="https://i.pravatar.cc/30"
                alt="Avatar"
                className="rounded-full w-8 h-8"
              />
              <div>
                <div className="font-medium">{row.name}</div>
                <div className="text-gray-500 text-xs">{row.email}</div>
              </div>
            </div>
            <div>{row.status}</div>
            <div className="hidden sm:block">{row.pickup}</div>
            <div className="hidden sm:block">{row.destination}</div>
            <div className="hidden sm:block">{row.fare}</div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4">
          <button className="px-4 py-1 bg-gray-200 rounded w-full sm:w-auto">
            Previous
          </button>
          <span>Page 1 of 10</span>
          <button className="px-4 py-1 bg-gray-200 rounded w-full sm:w-auto">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
