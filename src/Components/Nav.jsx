import React, { useState } from "react";
import {
  FaPhone,
  FaChartLine,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa"; // Import the cross (close) icon

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile toggle

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile top navbar with toggle */}
      <div className="md:hidden bg-gray-800 text-white flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Admin</h1>
        <button onClick={toggleNav}>
          {/* Toggle between bars and times (cross) icon */}
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar or Dropdown Nav */}
      <div
        className={`bg-gray-800 text-white w-64 min-h-screen p-4 md:block ${
          isOpen ? "block" : "hidden"
        } md:relative absolute z-10`}
      >
        <h1 className="text-2xl font-bold mb-10 hidden md:block">Admin</h1>
        <nav className="flex flex-col space-y-4">
          <button className="flex items-center space-x-2 hover:text-gray-300">
            <FaPhone />
            <span>Bookings</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-gray-300">
            <FaChartLine />
            <span>Earning Report</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-gray-300">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Nav;
