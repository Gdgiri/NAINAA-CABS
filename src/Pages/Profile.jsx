import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    setUserData({ username, email, phone });
  }, []);

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "?";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        {/* Initial Circle */}
        <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-[#2E709E] text-white text-4xl flex items-center justify-center font-bold">
          {getInitial(userData.username)}
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-semibold mb-2">{userData.username}</h2>
        <p className="text-gray-600 mb-1">
          <strong>Email:</strong> {userData.email}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Phone:</strong> {userData.phone}
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-block bg-[#2E709E] text-white px-6 py-2 rounded-lg hover:bg-[#245d84] transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Profile;
