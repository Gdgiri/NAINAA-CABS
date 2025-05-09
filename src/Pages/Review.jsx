import React, { useState } from "react";

const Review = () => {
  const [reviewData, setReviewData] = useState({
    rating: 0,
    firstName: "",
    lastName: "",
    tripExperience: "",
    reviewText: "",
  });

  const handleRatingChange = (rating) => {
    setReviewData({ ...reviewData, rating });
  };

  return (
    <div className="relative bottom-24">
      <h1 className="text-5xl text-center font-semibold text-[#2E709E]">
        Review
      </h1>
      <div className="h-1 w-44 bg-orange-500 mx-auto relative top-4 rounded"></div>
      <div className="p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto text-center mt-12">
        <h2 className="font-semibold text-xl mb-4">
          Leave a Review for Nainaa Cabs
        </h2>
        <p>How would you rate working at Nainaa Cabs?</p>
        <div className="flex mb-4 text-center justify-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className={`text-5xl ${
                star <= reviewData.rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => handleRatingChange(star)}
            >
              ★
            </button>
          ))}
        </div>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          rows="4"
          placeholder="Write a review..."
          value={reviewData.reviewText}
          onChange={(e) =>
            setReviewData({ ...reviewData, reviewText: e.target.value })
          }
        />
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          placeholder="First Name"
          value={reviewData.firstName}
          onChange={(e) =>
            setReviewData({ ...reviewData, firstName: e.target.value })
          }
        />
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          placeholder="Last Name"
          value={reviewData.lastName}
          onChange={(e) =>
            setReviewData({ ...reviewData, lastName: e.target.value })
          }
        />
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          placeholder="Your Trip Experience"
          value={reviewData.tripExperience}
          onChange={(e) =>
            setReviewData({ ...reviewData, tripExperience: e.target.value })
          }
        />
        <button className="bg-[#2E709E] text-white px-4 py-2 rounded-lg hover:bg-[#2185cc]">
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default Review;
