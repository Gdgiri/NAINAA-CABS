import React, { useEffect, useState } from "react";
import Review from "./Review";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import BookingConfirmation from "../CustomHook/BookingConfirmation";

const Bookings = () => {
  const navigate = useNavigate();
  const {
    loading,
    getBookings,
    data,
    confirmBooking,
    code,
    cancelBooking,
    getUserReview,
    reviewData,
  } = BookingConfirmation();
  // const [data, setdata] = useState(null);
  const [reviewCardData, setReviewCardData] = useState(null);
  // const { data } = BookingConfirmation();
  // console.log(data);

  useEffect(() => {
    getBookings();
    getUserReview();
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  const handleClick = async () => {
    if (data) {
      await confirmBooking(data?._id);
    }
  };

  const handleCancel = async () => {
    if (data) {
      await cancelBooking(data?._id);
    }
  };

  const handleReview = async (value) => {
    setReviewCardData(value);
  };

  return (
    <section id="bookings">
      <div className="m-5">
        <button
          className="w-12 h-12 bg-[#2E709E] text-white rounded-full flex items-center justify-center text-4xl hover:bg-[#1d88d4] transition"
          onClick={handleBack}
        >
          <FaLongArrowAltLeft />
        </button>
      </div>

      <div className="py-2 px-6 lg:px-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#2E709E] text-center mt-12 relative bottom-12">
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
              {!data ? (
                <div className="text-center text-gray-500">
                  <img
                    src="https://img.freepik.com/premium-vector/no-data-found-illustration-sites-banner-design-vector-illustration_620585-1690.jpg"
                    alt="no data found"
                    className="w-3/4 relative left-8 md:left-16"
                  />
                </div>
              ) : (
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Name:</strong> {data.name}
                  </p>
                  <p>
                    <strong>Mobile:</strong> {data.mobile}
                  </p>
                  <p>
                    <strong>Pickup:</strong> {data.pickupLocation}
                  </p>
                  <p>
                    <strong>Destination:</strong> {data.dropLocation}
                  </p>
                  <p>
                    <strong>Distance:</strong> {data.distance}
                  </p>
                  <p>
                    <strong>Trip Date:</strong> {data.bookingDate}
                  </p>
                  <p>
                    <strong>Estimated Fare:</strong> {data.totalPrice}
                  </p>
                  <p className="text-red-500 text-sm">
                    Note: The cost is an rough estimate based on the mentioned
                    kilometers and will vary with extra distance travelled.
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    {/* <label>
                      <input type="checkbox" name="whatsappConsent" />I agree to
                      receive booking details on WhatsApp
                    </label> */}

                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transform hover:scale-105 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={handleCancel}
                      disabled={loading || !data}
                    >
                      {loading ? "loading..." : "Cancel"}
                    </button>
                    <button
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transform hover:scale-105 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={handleClick}
                      disabled={loading || !data}
                    >
                      {loading ? "loading..." : "Confirm"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Previous Bookings */}
            <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="font-semibold text-2xl mb-6 text-[#2E709E] text-center">
                Previous Bookings
              </h2>

              {!reviewData ? (
                <div className="text-center text-gray-500">
                  <img
                    src="https://img.freepik.com/premium-vector/no-data-found-illustration-sites-banner-design-vector-illustration_620585-1690.jpg"
                    alt="no data found"
                    className="w-3/4 relative left-16"
                  />
                </div>
              ) : (
                reviewData?.map((booking, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 mb-6 rounded-lg shadow-md hover:shadow-lg transition-all ease-in-out duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">
                          <span className="uppercase">{booking?.name}</span>{" "}
                          <span className="text-sm text-[#2E709E]">
                            {booking?.bookingDate}
                          </span>
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {booking?.pickupLocation}{" "}
                          <span className="text-red-500 font-bold">to</span>{" "}
                          {booking?.dropLocation}
                        </p>
                      </div>
                      <div>
                        {booking?.status === "confirmed" ? (
                          <span className="text-[#2E709E]">
                            waiting for approval
                          </span>
                        ) : booking?.status === "completed" ? (
                          booking?.review !== null ? (
                            <div className="text-yellow-400 flex">
                              {[...Array(5)].map((_, i) =>
                                i < booking?.review?.rating ? (
                                  <FaStar key={i} />
                                ) : (
                                  <FaRegStar key={i} />
                                )
                              )}
                            </div>
                          ) : (
                            <button
                              className="px-5 py-2 bg-[#2E709E] text-white rounded-lg shadow-md hover:bg-[#1d4f72] transition-all duration-300 font-semibold"
                              onClick={() => handleReview(booking)}
                            >
                              Write a Review
                            </button>
                          )
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {reviewCardData && (
          <Review
            send={reviewCardData}
            onClose={() => setReviewCardData(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Bookings;
