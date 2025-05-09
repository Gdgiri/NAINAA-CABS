import React, { useState, useEffect } from "react";

const VerificationPage = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleCodeChange = (e, index) => {
    const value = e.target.value;

    // Only update the code if the value is a number and it is a single digit
    if (/^[0-9]$/.test(value) || value === "") {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 3) {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };

  const handleResend = () => {
    setTimer(30); // Reset timer for resend
    setCode(["", "", "", ""]); // Clear the code inputs
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-[#2E709E]">
          Verification
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Enter your 4 digits code that you received on your email.
        </p>

        <div className="flex justify-center space-x-4 mt-6">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-input-${index}`}
              type="text" // Keep type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleCodeChange(e, index)}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <div className="flex justify-center items-center mt-4 text-sm text-red-500">
          {timer > 0 ? (
            <span>{`00:${timer < 10 ? `0${timer}` : timer}`}</span>
          ) : (
            <span>Expired</span>
          )}
        </div>

        <button
          disabled={code.some((digit) => digit === "")}
          className="w-full mt-6 bg-[#2E709E] text-white py-3 rounded-xl text-lg font-semibold hover:bg-[#2f87c5] disabled:bg-gray-300"
        >
          CONTINUE
        </button>

        <span className="text-sm ml-2">If you didn’t receive a code!</span>
        <button
          disabled={timer > 0}
          onClick={handleResend}
          className="text-red-500 text-sm hover:text-red-600 mt-2 focus:outline-none relative left-1"
        >
          Resend
        </button>
      </div>
    </div>
  );
};

export default VerificationPage;
