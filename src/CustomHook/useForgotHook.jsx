import React, { useState } from "react";
import { toast } from "react-toastify";
import AxiosService from "../Common/AxiosService";

const useForgotHook = () => {
  const [forgotLoading, setForgotLoading] = useState(false);

  const forgotPassword = async (email) => {
    try {
      setForgotLoading(true);
      const response = await AxiosService.post("/api/auth/forget", {
        email,
      });
      if (response.status == 200) {
        toast.success(response?.data?.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setForgotLoading(false);
    }
  };
  return { forgotLoading, forgotPassword };
};

export default useForgotHook;
