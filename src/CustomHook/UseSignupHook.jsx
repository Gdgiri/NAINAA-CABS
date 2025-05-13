import React, { useState } from "react";
import { toast } from "react-toastify";
import AxiosService from "../Common/AxiosService";
import { useNavigate } from "react-router-dom";

const UseSignupHook = () => {
  const navigate = useNavigate();
  const [signUpLoading, setLoading] = useState(false);
  const [signUpCode, setSignUpCode] = useState(null);

  const signUp = async (a) => {
    const { username, email, password, phone } = a;

    try {
      setLoading(true);
      const response = await AxiosService.post("/api/auth/signup", {
        name: username,
        email,
        mobile: phone,
        password,
      });

      if (response.status == 201) {
        toast.success(response?.data?.message);
        setSignUpCode(response?.status);
      }
    } catch (error) {
      setSignUpCode(error?.response?.data?.statusCode);
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { signUpLoading, signUp, signUpCode };
};

export default UseSignupHook;
