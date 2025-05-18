import React, { useEffect, useState } from "react";
import AxiosService from "../Common/AxiosService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [bookLoad, setBookLoad] = useState(false);
  const [reviewLoading, setReviewLoading] = useState(false);
  const [data, setData] = useState(null);
  const [reviewData, setReviewData] = useState(null);
  const [newData, setNewData] = useState(null);
  const [code, setCode] = useState(null);

  const handleSubmit = async (e) => {
    try {
      setBookLoad(true);
      setData((pre) => ({ ...pre, ...e }));
      const response = await AxiosService.post("/api/bookingreview/create", e);

      if (response?.status == 201) {
        toast.success(response?.data?.message);
        navigate("/bookings");
      }

      // console.log(data);
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      if (error?.response?.status == 401 || error?.response?.status == 403) {
        navigate("/auth");
      }
    } finally {
      setBookLoad(false);
    }
  };

  const getBookings = async () => {
    try {
      setLoading(true);
      const response = await AxiosService.get("/api/bookingreview/getpending");
      if (response.status == 200) {
        toast.success(response?.data?.message);
        setData(response?.data?.latestBooking);
        // console.log(response?.data);
      }
    } catch (error) {
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const confirmBooking = async (id) => {
    try {
      setLoading(true);
      const response = await AxiosService.put("/api/bookingreview/confirm", {
        bookingId: id,
      });
      if (response?.status == 201) {
        toast.success(response?.data?.message);
        setData("");
        window.location.reload();
      }
      setCode(response?.status);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async (id) => {
    try {
      setLoading(true);
      const response = await AxiosService.delete(
        `/api/bookingreview/cancelbooking/${id}`,
        {
          bookingId: id,
        }
      );

      if (response?.status == 200) {
        toast.success(response?.data?.message);
        setData("");
        window.location.reload();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getUserReview = async () => {
    try {
      const response = await AxiosService.get("/api/bookingreview/getreview");
      if (response?.status === 200) {
        setReviewData(response?.data?.latestBooking);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    getUserReview(); // Call it immediately
    const interval = setInterval(getUserReview, 15000); // Then repeatedly

    return () => clearInterval(interval); // Clean up interval
  }, []);

  const postReview = async (id) => {
    try {
      setLoading(true);
      const response = await AxiosService.post(
        "/api/bookingreview/createreview",
        id
      );
      if (response?.status == 201) {
        toast.success(response?.data?.message);
        await getUserReview();
        window.location.reload();
        setData("");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const getAllReview = async () => {
    try {
      setLoading(true);
      const response = await AxiosService("/api/bookingreview/getallreview");
      if (response?.status == 200) {
        setNewData(response?.data?.reviews);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    bookLoad,
    handleSubmit,
    data,
    getBookings,
    confirmBooking,
    code,
    postReview,
    cancelBooking,
    getUserReview,
    reviewData,
    getAllReview,
    newData,
  };
};

export default BookingConfirmation;
