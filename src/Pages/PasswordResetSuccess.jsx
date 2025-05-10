import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordResetSuccess = () => {
  const [showCheck, setShowCheck] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowCheck(true), 1000); // Show tick after circle animation
    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    navigate("/auth");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      {/* Circle animation */}
      <div className="w-24 h-24 rounded-full border-4 border-blue-200 flex items-center justify-center animate-spin-once relative">
        {showCheck && (
          <svg
            className="w-10 h-10 text-[#2E709E] animate-fade-in absolute"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>

      <h1 className="text-3xl font-semibold text-[#2E709E] mt-6">
        Successfully
      </h1>
      <p className="text-gray-500 mt-2 mb-10 text-center">
        Your password has been reset successfully
      </p>
      <button
        onClick={handleContinue}
        className="bg-[#2E709E] hover:bg-[#378dca] text-white font-semibold py-3 px-8 rounded-md shadow-md"
      >
        CONTINUE
      </button>
    </div>
  );
};

export default PasswordResetSuccess;
