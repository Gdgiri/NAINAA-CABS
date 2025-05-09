import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for toggle
import "../Components/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/auth");
  };

  return (
    <div className="bg-white nav">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 py-4 ">
        {/* Logo */}
        {/* <div className="flex items-center gap-2 rounded-full ml-2 sm:ml-4 md:ml-8 lg:ml-12 logo">
          <a href="#">
            <img
              src={logo}
              alt="Nainaa-logo"
              className="h-16 w-32 sm:w-36 md:w-44 object-contain "
            />
          </a>
        </div> */}

        <div className="logo-wrapper relative group h-30 w-20 sm:h-24 sm:w-24 md:h-30 md:w-44 overflow-hidden flex items-center justify-center bg-white ml-2 sm:ml-4 md:ml-8 lg:ml-12 logo">
          <a href="#">
            <img
              src={logo}
              alt="Nainaa-logo"
              className="h-full w-full object-cover z-10 logo-image"
            />
          </a>
          <div className="smoke-effect absolute z-0"></div>
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
                className="text-[#2E709E] font-extrabold hover:text-[#2a6e9e]  hover:decoration-2 menus-link"
              >
                {text}
              </a>
            ))}
          </div>
          <button
            className=" text-white px-6 py-2 rounded-lg  login"
            onClick={handleClick}
          >
            Login
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 pb-6 md:hidden">
          {["Home", "About", "Booking", "Cars", "Contacts"].map((text) => (
            <a
              key={text}
              href="#"
              className="text-[#2E709E] font-extrabold hover:text-[#2E709E]  hover:decoration-2 menus-link "
            >
              {text}
            </a>
          ))}
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 shadow-xl login">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
