import React, { useEffect, useState } from "react";
import UseAdminBookingDataHook from "../CustomHook/UseAdminBookingDataHook";
import BookingConfirmation from "../CustomHook/BookingConfirmation";

const Home = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 10;
  const [filterStatus, setFilterStatus] = useState("");

  const {
    getAdminBooks,
    bookingData,
    loading,
    confirmLoading,
    confirmAdminBooks,
  } = UseAdminBookingDataHook();
  const { cancelBooking } = BookingConfirmation();

  const [bookings, setBookings] = useState([]);
  // const bookings = bookingData;

  useEffect(() => {
    getAdminBooks();
  }, []);
  useEffect(() => {
    setBookings(bookingData);
  }, [bookingData]);

  // console.log(bookingData);
  let filtered;
  let totalPages;
  let currentBookings;
  if (bookings?.length > 0) {
    filtered = filterStatus
      ? bookings?.filter((booking) => booking.status === filterStatus)
      : bookings;

    totalPages = Math.ceil(filtered.length / bookingsPerPage);
    currentBookings = filtered.slice(
      (currentPage - 1) * bookingsPerPage,
      currentPage * bookingsPerPage
    );
  }

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleApprove = async (row) => {
    await confirmAdminBooks(row);
  };

  const handleReject = async (reject) => {
    await cancelBooking(reject);
  };

  return (
    <div className="flex-1 p-4 md:p-8 bg-gray-50 overflow-auto" id="book">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-6">
        {/* Total Bookings */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-md p-6 rounded-2xl flex flex-col items-center hover:shadow-lg transition duration-300">
          <div className="text-blue-600 text-4xl mb-3">🔁</div>
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Total Bookings
          </p>
          <p className="text-3xl font-bold text-blue-800 mt-1">
            {bookings?.length}
          </p>
        </div>

        {/* Total Cars */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 shadow-md p-6 rounded-2xl flex flex-col items-center hover:shadow-lg transition duration-300">
          <div className="text-green-600 text-4xl mb-3">🚗</div>
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Total Cars
          </p>
          <p className="text-3xl font-bold text-green-800 mt-1">1</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row justify-between  mb-12">
        <select
          value={filterStatus}
          onChange={(e) => {
            setFilterStatus(e.target.value);
            setCurrentPage(1); // Reset page when filter changes
          }}
          className="bg-gray-200 px-4 py-2 rounded w-full sm:w-auto"
        >
          <option value="">🔍 Filter by Status</option>
          <option value="confirmed">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <div className="mx-auto me-auto text-2xl md:text-4xl  font-semibold text-[#2E709E]">
          {" "}
          <h1>Nainaa Cabs Booking History </h1>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded sm:overflow-hidden">
        <table className="table w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-center">
            <tr>
              <th className="px-4 py-3 hidden sm:table-cell">#</th>
              <th className="px-4 py-3 hidden sm:table-cell">Customers</th>
              <th className="px-4 py-3 hidden sm:table-cell">Status</th>
              <th className="px-4 py-3 hidden sm:table-cell">Date</th>
              <th className="px-4 py-3 hidden sm:table-cell">Pickup</th>
              <th className="px-4 py-3 hidden sm:table-cell">Destination</th>
              <th className="px-4 py-3 hidden sm:table-cell">Estimated Fare</th>
              <th className="px-4 py-3 hidden sm:table-cell">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {currentBookings?.map((row, index) => (
              <tr
                key={index}
                className="border-t cursor-pointer hover:bg-gray-100 "
                onClick={() => handleRowClick(row)}
              >
                <td className="px-4 py-3 hidden sm:table-cell">
                  {(currentPage - 1) * bookingsPerPage + index + 1}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="leading-tight">
                    <div className="font-medium">{row.name}</div>
                    <div className="text-[#2E709E] text-xs">{row.mobile}</div>
                  </div>
                </td>
                <td
                  className={`px-4 py-3 hidden sm:table-cell ${
                   row?.status == "confirmed" || row?.status == "pending"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {row?.status == "confirmed" || row?.status == "pending"
                    ? "pending"
                    : "completed"}
                </td>
                <td className="px-4 py-3 hidden sm:table-cell text-center">
                  <span className="text-[#2E709E] font-semibold">
                    {row?.bookingDate?.slice(0, 10)}
                  </span>
                </td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  {row?.pickupLocation?.length > 20
                    ? row.pickupLocation.slice(0, 20) + "..."
                    : row.pickupLocation}
                </td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  {row?.dropLocation?.length > 20
                    ? row.dropLocation.slice(0, 20) + "..."
                    : row.dropLocation}
                </td>
                <td className="px-4 py-3 hidden sm:table-cell text-center">
                  ₹
                  <span className="text-[#2E709E]  font-semibold">
                    {" "}
                    {row?.totalPrice}
                  </span>
                </td>
                <td className="px-4 py-3 flex justify-end sm:table-cell ">
                  {row?.status !== "completed" ? (
                    <div className="flex gap-6 relative md:left-10">
                      <button
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition "
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApprove(row?._id);
                        }}
                        disabled={confirmLoading}
                      >
                        ✔
                      </button>
                      <button
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReject(row?._id);
                        }}
                        disabled={loading}
                      >
                        ✖
                      </button>
                    </div>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4">
          <button
            onClick={goToPreviousPage}
            className="px-4 py-1 bg-gray-200 rounded w-full sm:w-auto"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            className="px-4 py-1 bg-gray-200 rounded w-full sm:w-auto"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedRow && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
            <h2 className="text-xl font-bold mb-4">Booking Details</h2>
            <p>
              <strong>Name:</strong> {selectedRow.name}
            </p>
            <p>
              <strong>Mobile:</strong> {selectedRow.mobile}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {selectedRow.status == "confirmed" ? "pending" : "completed"}
            </p>
            <p>
              <strong>Pickup:</strong> {selectedRow.pickupLocation}
            </p>
            <p>
              <strong>Destination:</strong> {selectedRow.dropLocation}
            </p>
            <p>
              <strong>Fare:</strong> {selectedRow.totalPrice}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-[#2E709E] text-white px-4 py-2 rounded hover:bg-[#348fcf]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
