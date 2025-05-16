import { useState } from "react";
import AxiosService from "../Common/AxiosService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useSigninHook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(null);
  const [message, setMessage] = useState("");

  const Signin = async (eop, pass) => {
    try {
      setLoading(true);
      const response = await AxiosService.post("/api/auth/signin", {
        emailOrMobile: eop,
        password: pass,
      });

      // sessionStorage.setItem("token", response.data.token);

      // const { role, username, email, phoneNumber } = response.data.user;
      // localStorage.setItem("role", role);
      // localStorage.setItem("username", username);
      // localStorage.setItem("email", email);
      // localStorage.setItem("phoneNumber", phoneNumber);

      if (response.status === 200) {
        setCode(response.status);
        toast.success(response?.data?.message);
        sessionStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response?.data?.rest));
        navigate("/");
      }

      setCode(response.status);
      setMessage(response?.data?.message);
      
    } catch (error) {
      setCode(error?.response?.data?.statusCode);
      toast.error(error?.response?.data?.message);
      console.error("Error during sign-in:", error);
    } finally {
      setLoading(false);
    }
  };

  return { Signin, loading, code, message, setCode };
};



export default useSigninHook;
