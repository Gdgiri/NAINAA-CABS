import React, { useState } from "react";
import AxiosService from "../Common/AxiosService";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const UseResetPasswordHook = () => {
  const [loading, setLoading] = useState(false);
  const { resetToken } = useParams();

  const resetPassword = async (newPassword) => {
    try {
      setLoading(true);
      const response = await AxiosService.post(
        `/api/auth/reset/${resetToken}`,
        { newPassword }
      );

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
      setLoading(false);
    }
  };

  return { loading, resetPassword };
};

export default UseResetPasswordHook;
