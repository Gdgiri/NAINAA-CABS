import React from "react";
import { TiTick } from "react-icons/ti";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-1">
        Our Pricing
      </h2>
      <div className="h-1 w-20 bg-orange-500 mx-auto mb-12 rounded"></div>

      {/* Row with both cards */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10">
        {/* Below 250 KM card */}
        <div className="bg-white border rounded-lg shadow-lg w-72 h-[470px] transform translate-y-4">
          <div className="mt-5 ml-4">
            <h1 className="text-2xl font-bold text-gray-700">Below</h1>
          </div>
          <div className="p-6 text-center">
            <h1 className="text-4xl font-bold mb-4">250 KM</h1>
            <div className="ali">
              <ul className="space-y-4 text-sm font-medium text-gray-700 ml-10">
                <li className="flex items-center gap-2">
                  <div className="border-2 border-green-500 rounded-full h-6 w-6 gap-2 flex items-center justify-center">
                    <span className="w-6 flex justify-center text-green-500 relative  ">
                      <TiTick />
                    </span>
                  </div>
                  <span>Day Rental 3500 Rs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="border-2 border-green-500 rounded-full h-6 w-6 gap-2 flex items-center justify-center">
                    <span className="w-6 flex justify-center text-green-500 relative  ">
                      <TiTick />
                    </span>
                  </div>
                  <span>10 Rs Per KM</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="border-2 border-green-500 rounded-full h-6 w-6 gap-2 flex items-center justify-center">
                    <span className="w-6 flex justify-center text-green-500 relative  ">
                      <TiTick />
                    </span>
                  </div>
                  <span>Toll Free</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="border-2 border-green-500 rounded-full h-6 w-6 gap-2 flex items-center justify-center">
                    <span className="w-6 flex justify-center text-green-500 relative  ">
                      <TiTick />
                    </span>
                  </div>
                  <span>Permit Free</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="border-2 border-green-500 rounded-full h-6 w-6 gap-2 flex items-center justify-center">
                    <span className="w-6 flex justify-center text-green-500 relative  ">
                      <TiTick />
                    </span>
                  </div>
                  <span>Hill Diesel Free</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="border-2 border-green-500 rounded-full h-6 w-6 gap-2 flex items-center justify-center">
                    <span className="w-6 flex justify-center text-green-500 relative  ">
                      <TiTick />
                    </span>
                  </div>
                  <span>Parking Free</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="border-2 border-green-500 rounded-full h-6 w-6 gap-2 flex items-center justify-center">
                    <span className="w-6 flex justify-center text-green-500 relative  ">
                      <TiTick />
                    </span>
                  </div>
                  <span>No Driver Beta</span>
                </li>
              </ul>
            </div>
            <button className="mt-6 w-full bg-gray-100 text-gray-800 py-2 rounded hover:bg-gray-200">
              Book Now
            </button>
          </div>
        </div>

        {/* Above 250 KM card - shifted up */}
        <div className="bg-white border rounded-lg shadow-2xl w-72 h-[470px] transform -translate-y-4 sm-mt-4">
          <div className="mt-5 ml-4">
            <h3 className="text-2xl font-bold text-yellow-500">Above</h3>
          </div>
          <div className="p-6 text-center">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">250 KM</h1>
            <ul className="space-y-4 text-sm font-medium text-gray-700 ml-10">
              <li className="flex items-center gap-2">
                <div className="border-2 border-green-500 rounded-full h-6 w-6 gap-2 flex items-center justify-center">
                  <span className="w-6 flex justify-center text-green-500 relative  ">
                    <TiTick />
                  </span>
                </div>
                <span>Day Rental 
                ₹3500/- </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="border-2 border-green-500 rounded-full h-6 w-6 gap-2 flex items-center justify-center">
                  <span className="w-6 flex justify-center text-green-500 relative  ">
                    <TiTick />
                  </span>
                </div>
                <span>10 Rs Per KM</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="border-2 border-green-500 rounded-full h-6 w-6 gap-2 flex items-center justify-center">
                  <span className="w-6 flex justify-center text-green-500 relative  ">
                    <TiTick />
                  </span>
                </div>
                <span>Toll Free</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="border-2 border-green-500 rounded-full h-6 w-6 gap-2 flex items-center justify-center">
                  <span className="w-6 flex justify-center text-green-500 relative  ">
                    <TiTick />
                  </span>
                </div>
                <span>Permit Free</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="border-2 border-green-500 rounded-full h-6 w-6 gap-2 flex items-center justify-center">
                  <span className="w-6 flex justify-center text-green-500 relative  ">
                    <TiTick />
                  </span>
                </div>
                <span>Hill Diesel Free</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="border-2 border-green-500 rounded-full h-6 w-6 gap-2 flex items-center justify-center">
                  <span className="w-6 flex justify-center text-green-500 relative  ">
                    <TiTick />
                  </span>
                </div>
                <span>Parking Free</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="border-2 border-green-500 rounded-full h-6 w-6 gap-2 flex items-center justify-center">
                  <span className="w-6 flex justify-center text-green-500 relative  ">
                    <TiTick />
                  </span>
                </div>
                <span>No Driver Beta</span>
              </li>
            </ul>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
