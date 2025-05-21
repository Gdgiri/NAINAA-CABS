// components/CarRentalBanner.jsx
import React, { useEffect, useState } from "react";
import "../Pages/HeroSection.css";
import { IoCarSportOutline } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
import herocar from "../assets/herocar.png";


const HeroSection = () => {

  return (
    <section id="home" className="relative">
      <div className="relative bg-white overflow-hidden min-h-screen flex items-center justify-center mt-24">
        <div className="mb-32">
          <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-2 items-center  container">
            {/* Left Content */}
            <div className="md:ml-1">
              <h1 className="text-6xl font-bold text-[#2E709e] mb-4 start">
                "Roads Awaits. let's{" "}
                <span className="inline md:hidden">Explore</span> <br />
                <span className="text-[#2E709e]">
                  <span className="hidden sm:inline">Explore</span>{" "}
                  <span className="text-[#E6A43B]">Together</span>."
                </span>
              </h1>
              <p className="text-[#2E709e] mb-6 mt-12 text-xl font-semibold">
                The Road Awaits – Ride in Premium Comfort Planning a road trip?
                Heading out for a business meeting? Or just want the a smooth
                ride without the hassle? Book our premium cabs at unbelievably
                affordable prices.
              </p>
              <a href="#booknow">
                <button className="bg-[#e6a43b] hover:bg-red-600 text-white font-semibold py-2 px-6 rounded shadow-md book mt-12">
                  Book Now
                </button>
              </a>
            </div>

            {/* Right Car Image */}
            {/* Only visible on medium and up screens */}
            <div className="back rounded-2xl hidden md:block">
              <div className="flex justify-center mt-8">
                <img src={herocar} alt="Red Car" className="car" />
              </div>
            </div>
          </div>
          <div className="bg-[#5C91B1] text-white border-4 rounded-tl-[40px] rounded-tr-[40px] rounded-br-[30px] px-6 py-10 mx-auto max-w-6xl flex flex-col md:flex-row justify-around items-center gap-6 shadow-lg testominal">
            {/* Well Maintained Cars */}
            <div className="text-center flex flex-col items-center ">
              <i className="fas fa-award text-4xl mb-2">
                <SlBadge />
              </i>
              <p className="font-bold text-lg">Well Maintained Cars</p>
            </div>

            {/* Happy Clients */}
            <div className="text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold mb-2">200+</h2>
              <p className="font-bold text-lg">Happy Clients</p>
            </div>

            {/* Budget Friendly Trips */}
            <div className="text-center flex flex-col items-center">
              <i className="fas fa-car text-4xl mb-2">
                <IoCarSportOutline />
              </i>
              <p className="font-bold text-lg">Budget Friendly Trips</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
