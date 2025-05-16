import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseResetHook from "../CustomHook/UseResetPasswordHook";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { loading, resetPassword } = UseResetHook();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      await resetPassword(newPassword);
      toast.success("Password reset successful!");

      setTimeout(() => {
        navigate("/success");
      }, 3000);
    } catch (err) {
      console.error(err);
      toast.error("Password reset failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="bg-white rounded-3xl flex flex-col md:flex-row-reverse w-full max-w-4xl overflow-hidden shadow-lg transition-shadow duration-300">
        {/* Right Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://t3.ftcdn.net/jpg/02/90/63/42/360_F_290634295_q41L3Ni6IR9q7i6YNx2XKzpMm5Ym45Ol.jpg"
            alt="Reset Password Illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Left Form Section */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#1f8acd] text-center mb-6">
            Reset Your Password
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Enter a new password below
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* New Password Field */}
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="newPassword"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1f8acd]"
              />
              <span
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1f8acd]"
              />
              <span
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl transition duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-[#2E709E] hover:bg-[#378dca] text-white"
              }`}
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
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
