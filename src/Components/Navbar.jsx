import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for toggle
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import "../Components/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false); // To manage dropdown visibility
  const navigate = useNavigate();

  // Check if user is logged in on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLoginClick = () => {
    navigate("/auth");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) setShowDropdown(true); // Desktop only
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) setShowDropdown(false); // Desktop only
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    setUsername(null);
    setShowDropdown(false); // Close dropdown on logout
    navigate("/"); // Redirect to home page after logout
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev); // Toggle dropdown visibility
  };

  return (
    <div className="bg-white nav sticky top-0 z-50">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 py-4 ">
        {/* Logo */}
        <div className="logo-wrapper relative group h-30 w-20 sm:h-24 sm:w-24 md:h-30 md:w-44 overflow-hidden flex items-center justify-center bg-white ml-2 sm:ml-4 md:ml-8 lg:ml-12 logo">
          <a href="#">
            <img
              src={logo}
              alt="Nainaa-logo"
              className="h-full w-full object-cover z-10 logo-image"
            />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-[#2E709E] toogle"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12 lg:gap-20 mr-4 md:mr-12 lg:mr-20">
          <div className="flex items-center gap-8 menus">
            {["Home", "About", "Booking", "Cars", "Contacts"].map((text) => (
              <a
                key={text}
                href="#"
                className="text-[#2E709E] font-extrabold hover:text-[#2a6e9e] hover:decoration-2 menus-link"
              >
                {text}
              </a>
            ))}
          </div>

          {/* Conditional render of login or username circle */}
          {username ? (
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={toggleDropdown}
                className="text-white rounded-xl w-auto h-12 bg-[#2E709E] flex items-center justify-center font-bold "
              >
                <div className="flex items-center gap-2 ">
                  <span className="text-2xl text-white rounded-full w-10 h-10 bg-[#2E709E] flex items-center justify-center font-bold">
                    <MdOutlineAccountCircle />
                  </span>
                  <span className="relative right-3">
                    {username.charAt(0).toUpperCase() +
                      username.slice(1).toLowerCase()}
                  </span>
                  <span className="relative right-3">
                    {showDropdown ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                </div>
              </button>

              {/* Dropdown menu */}
              {showDropdown && (
                <div className="absolute right-0  bg-white border  shadow-lg h-auto  rounded-2xl p-2 ">
                  <button
                    onClick={handleProfileClick}
                    className="block text-[#2E709E] py-1 px-4 hover:bg-[#f0f0f0] rounded-md"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogoutClick}
                    className="block text-[#2E709E] py-1 px-4 hover:bg-red-500 hover:text-white rounded-md"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="text-white px-6 py-2 rounded-lg login"
              onClick={handleLoginClick}
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 pb-6 md:hidden">
          {["Home", "About", "Booking", "Cars", "Contacts"].map((text) => (
            <a
              key={text}
              href="#"
              className="text-[#2E709E] font-extrabold hover:text-[#2E709E] hover:decoration-2 menus-link"
            >
              {text}
            </a>
          ))}
          {username ? (
            <div className="relative">
              <button
                onClick={toggleDropdown} // Toggle dropdown on click
                className="text-white rounded-xl w-auto h-12 bg-[#2E709E] flex items-center justify-center font-bold"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-white rounded-full w-10 h-10 bg-[#2E709E] flex items-center justify-center font-bold">
                    <MdOutlineAccountCircle />
                  </span>
                  <span className="relative right-3">
                    {" "}
                    {username.charAt(0).toUpperCase() +
                      username.slice(1).toLowerCase()}
                  </span>{" "}
                  <span className="relative right-3">
                    {showDropdown ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                </div>
              </button>

              {/* Dropdown menu */}
              {showDropdown && (
                <div className="relative right-0 mt-2 bg-white border border-[#2E709E] shadow-lg rounded-md p-2  ">
                  <button
                    onClick={handleProfileClick}
                    className="block text-[#2E709E] py-1 px-4 hover:bg-[#f0f0f0] rounded-md"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogoutClick}
                    className="block text-[#2E709E] py-1 px-4 hover:bg-[#f0f0f0] rounded-md"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 shadow-xl login"
              onClick={handleLoginClick}
            >
              Login
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
