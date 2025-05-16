import React, { useEffect, useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "./Testimonials.css";
import BookingConfirmation from "../CustomHook/BookingConfirmation";

export default function TestimonialsSection() {
  const { getAllReview, newData, loading } = BookingConfirmation();
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    getAllReview();
  }, []);

  // Function to toggle showing more/less
  const toggleShowMore = () => {
    if (visibleCount === 3) {
      setVisibleCount(newData.length); // show all
    } else {
      setVisibleCount(3); // collapse back
    }
  };

  return (
    <div className="py-12 px-4 bg-white text-center test-data mt-12">
      <h2 className="text-3xl md:text-5xl font-bold text-[#2E709E] mb-10">
        Reviews from our beloved clients
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {loading && <p>Loading reviews...</p>}

        {!loading && newData?.length > 0
          ? newData.slice(0, visibleCount).map((review, i) => (
              <div
                key={i}
                className="relative bg-[#2E709E] text-white rounded-2xl rounded-br-[100px] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] text-left"
              >
                <FaQuoteLeft className="absolute -top-3 -left-3 text-[#E6A43B] text-3xl" />
                <p className="mb-6 text-sm leading-relaxed">{review.text}</p>

                <div className="flex  gap-4 ">
                  <div className="w-10 h-10 rounded-full ring-2 ring-white bg-red-500 ">
                    <h1 className="text-center mt-2">
                      {review.bookingName
                        ? review.bookingName.charAt(0).toUpperCase()
                        : "U"}
                    </h1>
                  </div>
                  <div className="w-3/4">
                    <p className="font-semibold">{review.bookingName}</p>
                    <p className="text-sm text-white/80">
                      {review.comments || "Company"}
                    </p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={14}
                          color={i < review.rating ? "#FFD700" : "#444"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          : !loading && (
              <div className="flex justify-center">
                <p>No reviews available yet.</p>
              </div>
            )}
      </div>

      {newData?.length > 3 && (
        <button
          onClick={toggleShowMore}
          className="mt-10 bg-[#E6A45B] text-white px-6 py-2 rounded-md shadow-md hover:bg-yellow-600 transition"
        >
          {visibleCount === 3 ? "Show More Reviews" : "Show Less Reviews"}
        </button>
      )}
    </div>
  );
}
