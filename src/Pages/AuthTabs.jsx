import React, { useState } from "react";
import axios from "axios";
import OAuth from "../Components/OAuth";

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      alert("Login successful!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      alert("Registration successful!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-blue-200 p-6">
      <div
        className={`bg-white rounded-3xl shadow-2xl w-full max-w-5xl flex flex-col md:flex-row ${
          activeTab === "register" ? "md:flex-row-reverse" : ""
        } overflow-hidden`}
      >
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <OAuth
            buttonText={
              activeTab === "login"
                ? "Login with Google"
                : "Create Account with Google"
            }
          />
          <p className="text-center">or</p>
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
            {activeTab === "login" ? "Welcome Back!" : "Join Us Today!"}
          </h2>
          <div className="flex mb-6 rounded-xl overflow-hidden">
            <button
              onClick={() => setActiveTab("login")}
              className={`w-1/2 py-2 text-lg font-semibold transition-all duration-300 ${
                activeTab === "login"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`w-1/2 py-2 text-lg font-semibold transition-all duration-300 ${
                activeTab === "register"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Register
            </button>
          </div>

          {activeTab === "login" ? (
            <form onSubmit={handleLogin} className="space-y-5">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300"
              >
                Login
              </button>
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
                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition duration-300"
              >
                Register
              </button>
            </form>
          )}
        </div>

        {/* Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={
              activeTab === "login"
                ? "https://www.rxnt.com/wp-content/uploads/biometric-authentication-blog-v2.jpg"
                : "https://designwebkit.com/wp-content/uploads/2021/09/Biometric-authentification.jpg"
            }
            alt="Auth Visual"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthTabs;
