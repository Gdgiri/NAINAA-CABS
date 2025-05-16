import React, { useState } from "react";
import AxiosService from "../Common/AxiosService";
import { toast } from "react-toastify";

const UseAdminBookingDataHook = () => {
  const [loading, setLoading] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [bookingData, setBookingData] = useState("");
  const [charLoading, setChartLoading] = useState(false);
  const [chartData, setChartData] = useState(false);
  const [weeklyStats, setWeeklyStats] = useState({});
  const [monthlyStats, setMonthlyStats] = useState([]);
  const [last5years, setLast5Years] = useState([]);

  const getAdminBooks = async () => {
    try {
      setLoading(true);
      const response = await AxiosService.get("/api/admin/getallbooking");
      if (response?.status == 200) {
        setBookingData(response?.data?.bookings);
      }
      // console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const confirmAdminBooks = async (id) => {
    try {
      setConfirmLoading(true);

      const response = await AxiosService.put("/api/admin/confirmbooking", {
        bookingId: id,
      });

      if (response?.status == 200) {
        toast.success(response?.data?.message);
        window.location.reload();
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setConfirmLoading(false);
    }
  };

  const chartHook = async () => {
    try {
      setChartLoading(true);
      const response = await AxiosService.get("/api/admin/filter");

      if (response?.status === 200) {
        setWeeklyStats(response?.data || []);
        // setMonthlyStats(response.data.monthlyStats || []);
        // setLast5Years(response.data.last5Years || []);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setChartLoading(false);
    }
  };

  return {
    loading,
    bookingData,
    getAdminBooks,
    confirmLoading,
    confirmAdminBooks,
    charLoading,
    chartHook,
    weeklyStats,
    monthlyStats,
    last5years,
  };
};

export default UseAdminBookingDataHook;
