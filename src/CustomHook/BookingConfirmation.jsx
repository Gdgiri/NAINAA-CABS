import React from "react";

const BookingConfirmation = () => {
  let [loading, setLoading] = React.useState(true);
  const getCoordinates = async () => {
    try {
      setLoading(true);
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getCoordinates };
};

export default BookingConfirmation;
