import React from "react";
import { Navigate } from "react-router-dom";
const AdminProtectedRoute = ({ children }) => {
  let user = JSON.parse(localStorage.getItem("user"));
  return user?.role == "admin" ? children : <Navigate to="/" />;
};

export default AdminProtectedRoute;
