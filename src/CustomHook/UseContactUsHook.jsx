import React, { useState } from "react";
import { toast } from "react-toastify";
import AxiosService from "../Common/AxiosService";

const UseContactUsHook = () => {
  const [loading, setLoading] = useState(false);
  const sendToMail = async (value) => {
    try {
      setLoading(true);
      const response = await AxiosService.post(
        "/api/bookingreview/sendmail",
        value
      );
      if (response?.status == 200) {
        toast.success("Thanks for reaching us");
      }
    } catch (error) {
      console.log(error);
      toast.error("error occurs");
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendToMail };
};

export default UseContactUsHook;
