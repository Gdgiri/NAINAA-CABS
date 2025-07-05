import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for toggle
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import "../Components/AdminNav.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import wheelImg from "../assets/wheel.png";

const AdminNav = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false); // To manage dropdown visibility

  // Check if user is logged in on component mount
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    // console.log(user.firstName);
    setUsername(user?.name);
  }, []);

  const handleLoginClick = () => {
    navigate("/auth");
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) setShowDropdown(true); // Desktop only
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) setShowDropdown(false); // Desktop only
  };

  const handleLogoutClick = () => {
    sessionStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout successful");
    setUsername(null);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev); // Toggle dropdown visibility
  };

  return (
    <div className="bg-white nav sticky top-0 z-50 ">
      {/*AdminNav */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12   ">
        {/* Logo */}

        <div className="logo-wrapper relative group h-30 w-20 sm:h-24 sm:w-24 md:h-30 md:w-44 overflow-hidden flex items-center justify-center bg-white ml-2 sm:ml-4 md:ml-8 lg:ml-12 logo">
          <a href="/admin">
            <img
              src={logo}
              alt="anandham-logo"
              className="h-full w-full object-cover z-10 logo-image"
            />
          </a>
        </div>
        <div className="mr-20 md:mr-24">
          <h1 className="text-sm md:text-xl font-semibold text-[#2E709E]">
            <span className="wave">👋</span> Hello, Admin
          </h1>
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
        <div className="hidden md:flex items-center gap-12 lg:gap-20 mr-4 md:mr-12 lg:ml-[10px]">
          <div className="flex items-center gap-8 menus ">
            {[
              { label: "Home", isRoute: true },
              { label: "Booking", id: "book" }, // Mark as a route
              { label: "Earning Report", id: "earn" },
            ].map(({ label, id, isRoute }) =>
              isRoute ? (
                <a
                  key={id}
                  href="/" // Navigate to /bookings page for Booking
                  className="text-[#2E709E] font-extrabold hover:text-[#2a6e9e] hover:decoration-2 menus-link"
                >
                  {label}
                </a>
              ) : (
                <a
                  key={id}
                  href={`#${id}`} // Keep other links as anchor links for sections
                  className="text-[#2E709E] font-extrabold hover:text-[#2a6e9e] hover:decoration-2 menus-link "
                >
                  {label}
                </a>
              )
            )}
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
                <div className="absolute right-0  bg-white border  shadow-lg h-auto  rounded-2xl p-2 w-full ">
                  <button
                    onClick={handleLogoutClick}
                    className="block text-[#2E709E] py-1 px-4 hover:bg-red-500 hover:text-white rounded-md w-full font-semibold"
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
          {[
            { label: "Home", id: "home" },
            { label: "Booking", id: "bookings", isRoute: true },
            { label: "Earning Reports", id: "earn" },
          ].map(({ label, id, isRoute }) =>
            isRoute ? (
              <a
                key={id}
                href="/bookings" // Navigate to /bookings page for Booking
                className="text-[#2E709E] font-extrabold hover:text-[#2a6e9e] hover:decoration-2 menus-link"
              >
                {label}
              </a>
            ) : (
              <a
                key={id}
                href={`#${id}`} // Keep other links as anchor links for sections
                className="text-[#2E709E] font-extrabold hover:text-[#2a6e9e] hover:decoration-2 menus-link "
              >
                {label}
              </a>
            )
          )}
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

export default AdminNav;
