import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BookingConfirmation from "../CustomHook/BookingConfirmation";
import Bookings from "./Bookings";

const Review = (props) => {
  const { postReview } = BookingConfirmation();
  const [booking, setBooking] = useState(null);

  const formik = useFormik({
    initialValues: {
      rating: 0,
      reviewText: "",
    },
    validationSchema: Yup.object({
      rating: Yup.number()
        .min(1, "Please give a rating")
        .required("Rating is required"),
      reviewText: Yup.string().required("Review text is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      if (!booking) return;
      // console.log("Submitted Review:", values);
      postReview({
        ...values,
        bookingId: booking?._id,
        rating: values.rating,
        comments: values.reviewText,
      });
      setBooking(null);
      props?.onClose();
      resetForm();
    },
  });
  useEffect(() => {
    setBooking(props?.send || null);
  }, [props?.send]);
  const handleRatingChange = (star) => {
    formik.setFieldValue("rating", star);
    formik.setFieldTouched("rating", true); // ✅ Fixes the issue
  };

  return (
    <div className="relative bottom-12">
      <h1 className="text-5xl text-center font-semibold text-[#2E709E]">
        Review
      </h1>
      <div className="h-1 w-44 bg-orange-500 mx-auto relative top-4 rounded"></div>

      <form
        onSubmit={formik.handleSubmit}
        className="p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto text-center mt-12"
      >
        <h2 className="font-semibold text-xl mb-4">
          Leave a Review for Nainaa Cabs
        </h2>

        {booking && (
          <p>
            {booking?.pickupLocation}
            <span className="text-red-500 font-semibold">&nbsp;to&nbsp;</span>
            {booking?.dropLocation}
          </p>
        )}

        <p className="mt-4">How would you rate working at Nainaa Cabs?</p>

        <div className="flex mb-1 justify-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              onClick={() => handleRatingChange(star)}
              className={`text-5xl transition ${
                star <= formik.values.rating
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            >
              ★
            </button>
          ))}
        </div>

        {formik.errors.rating && formik.touched.rating && (
          <div className="text-red-500 text-sm mb-2">
            {formik.errors.rating}
          </div>
        )}

        <textarea
          name="reviewText"
          rows="4"
          className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          placeholder="Write a review..."
          value={formik.values.reviewText}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.reviewText && formik.touched.reviewText && (
          <div className="text-red-500 text-sm mb-2">
            {formik.errors.reviewText}
          </div>
        )}

        <button
          type="submit"
          className="bg-[#2E709E] text-white px-4 py-2 rounded-lg hover:bg-[#2185cc] cursor-pointer"
        >
          submit review
        </button>
      </form>
    </div>
  );
};

export default Review;
