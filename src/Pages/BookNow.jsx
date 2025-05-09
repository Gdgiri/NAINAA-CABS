import React, { useState, useEffect } from "react";
import bg from "../assets/carbg.jpg";
import "react-time-picker/dist/TimePicker.css";
import "./BookNow.css";

const BookNow = () => {
  const [time, setTime] = useState("");
  const [amPm, setAmPm] = useState("AM"); // AM/PM state
  const [km, setKm] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropLocation, setDropLocation] = useState("");
  const [dropSuggestions, setDropSuggestions] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  const farePerKm = 25;
  const calculatedFare = km && !isNaN(km) ? km * farePerKm : "";

  const fetchSuggestions = async (query, setSuggestions) => {
    if (query.length < 2) return;
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
      );
      const data = await response.json();
      setSuggestions(data.map((item) => item.display_name));
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const calculateDistance = async (pickup, drop) => {
    if (!pickup || !drop) return;

    const pickupCoordinates = await getCoordinates(pickup);
    const dropCoordinates = await getCoordinates(drop);

    if (pickupCoordinates && dropCoordinates) {
      const { lat: pickupLat, lon: pickupLon } = pickupCoordinates;
      const { lat: dropLat, lon: dropLon } = dropCoordinates;

      const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248a71b43ef8d5e46c5ae743e031954202f&start=${pickupLon},${pickupLat}&end=${dropLon},${dropLat}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.routes && data.routes.length > 0) {
          const distance = data.routes[0].segments[0].distance / 1000;
          const roundedDistance = distance.toFixed(2);
          setKm(roundedDistance);
          console.log(`Calculated Distance: ${roundedDistance} km`);
        } else {
          console.warn("No route found between the selected locations.");
          setKm(""); // Reset km if no route
        }
      } catch (error) {
        console.error("Error calculating distance:", error);
        setKm(""); // Reset km on error
      }
    }
  };

  const getCoordinates = async (location) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${location}`
    );
    const data = await response.json();
    return data.length > 0 ? { lat: data[0].lat, lon: data[0].lon } : null;
  };

  useEffect(() => {
    const now = new Date();
    const currentTime = now.toTimeString().split(" ")[0].slice(0, 5); // Get time in HH:mm format
    setTime(currentTime); // Set current time as default value
  }, []);

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    setTime(selectedTime); // Update time when user selects a new time
  };

  const handleAmPmChange = (event) => {
    setAmPm(event.target.value); // Update AM/PM value
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchSuggestions(dropLocation, setDropSuggestions);
    }, 500);
    return () => clearTimeout(timeout);
  }, [dropLocation]);

  useEffect(() => {
    if (pickupLocation && dropLocation) {
      calculateDistance(pickupLocation, dropLocation);
    }
  }, [pickupLocation, dropLocation]);

  return (
    <section className="relative bg-white py-20">
      <div className="text-center z-20 relative mb-10">
        <h2 className="text-5xl font-semibold text-[#2E709E]">Book Now</h2>
        <div className="w-36 h-1 mx-auto mt-2 bg-[#E6A43B] rounded-full"></div>
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center blur-sm brightness-75 mt-44"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-44">
        <div className="bg-white bg-opacity-30 p-8 rounded-xl shadow-lg backdrop-blur-md max-w-4xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <label className="text-sm font-medium text-gray-800">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-800">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="relative">
              <label className="text-sm font-medium text-gray-800">
                Pickup Location
              </label>
              <input
                type="text"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                placeholder="Enter pickup location"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
              {pickupSuggestions.length > 0 && (
                <ul className="absolute z-50 bg-white border border-gray-300 mt-1 w-full max-h-40 overflow-auto rounded shadow">
                  {pickupSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setPickupLocation(suggestion);
                        setPickupSuggestions([]);
                      }}
                      className="p-2 hover:bg-blue-100 cursor-pointer"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="relative">
              <label className="text-sm font-medium text-gray-800">
                Drop Location
              </label>
              <input
                type="text"
                value={dropLocation}
                onChange={(e) => setDropLocation(e.target.value)}
                placeholder="Enter drop location"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
              {dropSuggestions.length > 0 && (
                <ul className="absolute z-50 bg-white border border-gray-300 mt-1 w-full max-h-40 overflow-auto rounded shadow">
                  {dropSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setDropLocation(suggestion);
                        setDropSuggestions([]);
                      }}
                      className="p-2 hover:bg-blue-100 cursor-pointer"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="col-span-1 md:col-span-2 flex flex-wrap gap-4">
              <label className="text-sm font-medium text-gray-800 relative top-4">
                Pickup Date & Time <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col md:flex-row gap-6 w-full">
                {/* Date Picker */}
                <input
                  type="date"
                  value={currentDate}
                  onChange={(e) => setCurrentDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]} // Disables past dates
                  className="w-[170px] md:w-[400px] mt-1 p-2 border border-gray-300 rounded-md"
                />

                {/* Time Input */}
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    id="pickup-time"
                    value={time}
                    onChange={handleTimeChange}
                    className="time-input w-[120px] md:[200px] mt-1 p-2 border border-gray-300 rounded-md"
                  />

                  {/* AM/PM Dropdown */}
                  <select
                    value={amPm}
                    onChange={handleAmPmChange}
                    className="p-2 border border-gray-300 rounded-md"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-800">
                Trip type <span className="text-red-500">*</span>
              </label>
              <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                <option>Select your Trip type</option>
                <option>One Way</option>
                <option>Round Trip</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-800">
                Estimate Fare
              </label>
              <input
                type="text"
                value={calculatedFare ? `${calculatedFare} Rs` : ""}
                readOnly
                placeholder="25 Rs/km"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>

            <div className="col-span-1 md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="book px-8 py-2 bg-[#2E709E] text-white font-semibold rounded-full "
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
