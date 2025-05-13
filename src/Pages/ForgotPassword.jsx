import React, { useState } from "react";
import axios from "axios";
import useforgotPassword from "../CustomHook/useForgotHook";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const [messageVisible, setMessageVisible] = useState(true); // To control message visibility
  const [cardShadow, setCardShadow] = useState("shadow-lg shadow-gray-300"); // Default shadow
  const { forgotLoading, forgotPassword } = useforgotPassword();
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessageVisible(true);

    try {
      await forgotPassword(email);
      setCardShadow("shadow-lg shadow-green-500");
      setTimeout(() => {
        setMessageVisible(false);
        setCardShadow("shadow-lg shadow-gray-300");
      }, 3000);
      setEmail("");
    } catch (err) {
      console.error(err);

      setTimeout(() => {
        setMessageVisible(false);
      }, 3000); // Hide message and reset shadow after 3 seconds
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div
        className={`bg-white rounded-3xl ${cardShadow} flex flex-col md:flex-row-reverse w-full max-w-4xl overflow-hidden transition-shadow duration-300`}
      >
        {/* Right Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://t3.ftcdn.net/jpg/02/90/63/42/360_F_290634295_q41L3Ni6IR9q7i6YNx2XKzpMm5Ym45Ol.jpg"
            alt="Forgot Password Illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Left Form Section */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#2E709E]  mb-6">
            Forgot Password
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Enter your email for the verification proccess,we will send 4 digits
            code to your email.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <label htmlFor="" className="text-gray-500 relative top-2 left-2">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1f8acd]"
            />
            {/* {messageVisible  (
              <div
                className={`text-center mt-5 font-medium p-4 rounded-lg transition-all duration-300 ${
                  messageType === "success"
                    ? "bg-green-100 border border-green-400 shadow-lg shadow-green-300 text-green-600"
                    : "bg-red-100 border border-red-400 shadow-lg shadow-red-300 text-red-600"
                }`}
              >
               
              </div>
            )} */}
            <button
              type="submit"
              disabled={forgotLoading}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl transition duration-300 ${
                forgotLoading
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-[#2E709E] hover:bg-[#3ca0e8] text-white"
              }`}
            >
              {forgotLoading && (
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
              {forgotLoading ? "Sending..." : "Continue"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
