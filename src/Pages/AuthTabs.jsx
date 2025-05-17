import React, { useState, useEffect } from "react";
import axios from "axios";
import OAuth from "../Components/OAuth";
import logo from "../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import wheelImg from "../assets/wheel.png";
import register from "../assets/register.jpg";
import login from "../assets/login.jpg";
import useSIgnInHook from "../CustomHook/UseSigninHook";
import useSignUp from "../CustomHook/UseSignupHook";

import "../Pages/AuthTabs.css";
import { toast } from "react-toastify";

const AuthTabs = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });
  const { code, loading, Signin, message, setCode } = useSIgnInHook();
  const { signUp, signUpLoading, signUpCode } = useSignUp();
  const [messageVisible, setMessageVisible] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const switchTab = () => {
    setActiveTab("login");
  };

  useEffect(() => {
    if (signUpCode == 201) {
      switchTab();
    }
  }, [signUpCode]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setFormData({
      emailOrPhone: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmpassword: "",
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setMessageVisible(true);
    try {
      await Signin(formData.emailOrPhone, formData.password);

      if (code == 200) {
        setMessageVisible(false);
        setCode(null);
        navigate("/");
      }
      clearForm();
      // console.log(res.data);
    } catch (err) {
      console.error(err);

      setTimeout(() => {
        setMessageVisible(false);
      }, 3000); // Hide message and reset shadow after 3 seconds
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
   
    setMessageVisible(true);
    try {
      if (formData.password !== formData.confirmpassword) {
        toast.warning("Password and Confirm Password do not match");
        return;
      }
      await signUp(formData);

      clearForm();
    } catch (err) {
      console.error(err);

      setTimeout(() => {
        setMessageVisible(false);
      }, 3000); // Hide message and reset shadow after 3 seconds
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div
        className={`bg-white rounded-3xl shadow-lg ${
          code === 400 || code === 404
            ? "border border-red-400 "
            : code === 200 || code === 201
            ? "border border-green-400 "
            : "border border-gray-300 "
        } w-full max-w-5xl flex flex-col md:flex-row ${
          activeTab === "register" ? "md:flex-row-reverse" : ""
        } overflow-hidden transition-shadow duration-300`}
      >
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <div className="text-center mb-6 justify-center flex items-center">
            <img src={logo} alt="logo" className="w-44" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            {activeTab === "login" ? (
              <>
                Welcome Back <span className="wave">👋</span>
              </>
            ) : (
              <>Join Us Today!</>
            )}
          </h2>

          <OAuth
            buttonText={
              activeTab === "login"
                ? "Login with Google"
                : "Create Account with Google"
            }
          />
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-600">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="flex mb-6 rounded-xl overflow-hidden">
            <button
              onClick={() => {
                setActiveTab("login");
              }}
              className={`w-1/2 py-2 text-lg font-semibold transition-all duration-300 ${
                activeTab === "login"
                  ? "bg-[#2E709E] text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setActiveTab("register");
              }}
              className={`w-1/2 py-2 text-lg font-semibold transition-all duration-300 ${
                activeTab === "register"
                  ? "bg-[#2E709E] text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              disabled={loading}
            >
              Register
            </button>
          </div>

          {/* Display message */}
          {messageVisible && message && (
            <div
              className={`text-center mb-4 font-medium p-4 rounded-lg transition-all duration-300 ${
                code === 400 || code === 404
                  ? "bg-red-100 border border-red-400 shadow-lg shadow-red-300 text-red-600"
                  : "bg-green-100 border border-green-400 shadow-lg shadow-green-300 text-green-600"
              }`}
            >
              {message}
            </div>
          )}

          {activeTab === "login" ? (
            <form onSubmit={handleLogin} className="space-y-5">
              <input
                type="text"
                name="emailOrPhone" // Changed from emailorphone to emailOrPhone
                placeholder="Email or Phone Number"
                value={formData.emailOrPhone} // Update state reference to match
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"} // Toggle between text and password
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <span
                  onClick={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}{" "}
                  {/* Toggle between eye and eye-slash */}
                </span>
              </div>
              <button
                type="submit"
                className="w-full bg-[#2E709E] text-white py-3 rounded-xl hover:bg-[#3891d0] transition duration-300 flex justify-center items-center gap-2"
                disabled={loading} // optional but prevents double submit
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                )}
                {loading ? "Loading..." : "Login"}
              </button>

              <Link
                to="/forgot"
                className="text-blue-500 hover:text-blue-700 text-sm font-semibold relative top-2"
                title="Click to reset your password"
              >
                Forgot your password?
              </Link>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-5">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"} // Toggle between text and password
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <span
                  onClick={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}{" "}
                  {/* Toggle between eye and eye-slash */}
                </span>
              </div>

              <div className="relative">
                <input
                  type={confirmPasswordVisible ? "text" : "password"} // Toggle between text and password
                  name="confirmpassword"
                  placeholder="confirm Password"
                  value={formData.confirmpassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <span
                  onClick={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  } // Toggle password visibility
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}{" "}
                  {/* Toggle between eye and eye-slash */}
                </span>
              </div>
              {/* <div className="relative">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  value={formData.confirmpassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
                />
                <span
                  onClick={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div> */}
              <button
                type="submit"
                className="w-full bg-[#2E709E] text-white py-3 rounded-xl hover:bg-[#3891d0] transition duration-300 flex justify-center items-center gap-2"
                disabled={signUpLoading} // optional: disables button while loading
              >
                {signUpLoading && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                )}
                {signUpLoading ? "Loading..." : "Register"}
              </button>
            </form>
          )}
        </div>

        {/* Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={activeTab === "login" ? `${login}` : `${register}`}
            alt="Auth Background"
            className="w-full h-full object-cover rounded-r-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthTabs;
