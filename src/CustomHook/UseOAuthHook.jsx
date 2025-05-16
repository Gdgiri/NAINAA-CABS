import React, { useState } from "react";
import { toast } from "react-toastify";
import AxiosService from "../Common/AxiosService";
import { useNavigate } from "react-router-dom";

const UseOAuthHook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const OAuthAutentication = async (values) => {
    try {
      setLoading(true);
      // console.log("values", values);

      const response = await AxiosService.post("/api/auth/firebase", values);
      if (response.status == 200 || response.status == 201) {
        toast.success(response?.data?.message);
        sessionStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response?.data?.rest));
        navigate("/");
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
  return { loading, OAuthAutentication };
};

export default UseOAuthHook;
