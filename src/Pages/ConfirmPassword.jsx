import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(""); // Clear error when typing
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError(""); // Clear error when typing
  };

  const handleSubmit = () => {
    if (password === confirmPassword) {
      setError("");
      // Replace this with real password update logic
      alert("Password updated successfully!");
      setPassword("");
      setConfirmPassword("");
    } else {
      setError("Passwords must match.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-[#2E709E] text-center">
          New Password
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Set the new password for your account so you can login and access all
          features.
        </p>

        {/* Password Input */}
        <div className="mt-6">
          <label
            htmlFor="new-password"
            className="block text-sm font-medium text-gray-700"
          >
            Enter new password
          </label>
          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              id="new-password"
              name="new-password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="New Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-4 text-gray-500"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="mt-6">
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm password
          </label>
          <div className="relative mt-1">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="w-full p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm Password"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 top-4 text-gray-500"
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Update Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-[#2E709E] text-white py-3 rounded-xl text-lg font-semibold hover:bg-[#398dc9] disabled:bg-gray-300"
          disabled={password === "" || confirmPassword === ""}
        >
          UPDATE PASSWORD
        </button>
      </div>
    </div>
  );
};

export default UpdatePassword;
