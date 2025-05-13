import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import UseResetHook from "../CustomHook/UseResetPasswordHook";
import { toast } from "react-toastify";
const ResetPassword = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { loading, resetPassword } = UseResetHook();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
    }

    try {
      await resetPassword(newPassword);

      setTimeout(() => {
        navigate("/success"); // Redirect to login page after successful reset
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div
        className={`bg-white rounded-3xl  flex flex-col md:flex-row-reverse w-full max-w-4xl overflow-hidden transition-shadow duration-300`}
      >
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
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1f8acd]"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1f8acd]"
            />
            {/* {message && (
              <div
                className={`text-center mb-4 font-medium p-4 rounded-lg transition-all duration-300 ${
                  messageType === "success"
                    ? "bg-green-100 border border-green-400 shadow-lg shadow-green-300 text-green-600"
                    : "bg-red-100 border border-red-400 shadow-lg shadow-red-300 text-red-600"
                }`}
              >
                {message}
              </div>
            )} */}
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
