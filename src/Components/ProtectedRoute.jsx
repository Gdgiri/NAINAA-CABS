// components/ProtectedRoute.js
import { Navigate, useNavigate } from "react-router-dom";
import AxiosService from "../Common/AxiosService";
import { useState } from "react";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [code, setCode] = useState(null);
  const verify = async () => {
    try {
      let res = await AxiosService.get("/api/auth/verify");
      setCode(res.status);
    } catch (error) {
      console.log(error);
    }
  };
  const token = sessionStorage.getItem("token");

  verify();

  if (!token && code !== 200) {
    navigate("/auth");
  }

  return token ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;
