import React from "react";
import wheelImg from "../assets/wheel.png"; // replace with your image path

const WheelSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <img
        src={wheelImg}
        alt="Spinning Wheel"
        // className="w-40 h-40 animate-spinSlow"
        className="w-10 h-10 animate-spinSlow"
      />
    </div>
  );
};

export default WheelSpinner;
