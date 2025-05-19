import React, { useState, useEffect } from "react";
import bg from "../assets/carbg.jpg";
import "./BookNow.css";
import { useNavigate } from "react-router-dom";
import bookConfirm from "../CustomHook/BookingConfirmation";
import wheelImg from "../assets/wheel.png";

const BookNow = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [trip, setTrip] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [time, setTime] = useState("");
  const [amPm, setAmPm] = useState("AM");
  const [km, setKm] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropLocation, setDropLocation] = useState("");
  const [dropSuggestions, setDropSuggestions] = useState([]);
  const [pickupCoords, setPickupCoords] = useState(null);
  const [dropCoords, setDropCoords] = useState(null);
  const [fare, setFare] = useState(null);
  const { handleSubmit, bookLoad } = bookConfirm();

  const datas = {
    name,
    mobile,
    pickupLocation,
    dropLocation,
    currentDate,
    time,
    amPm,
    trip,
    km,
    fare,
  };

  let user = JSON.parse(localStorage.getItem("user"));

  const handleSumitForm = async (e) => {
    e.preventDefault();
    await handleSubmit(datas);
  };

  const handlePickup = async (val) => {
    setPickupLocation(val);
    const coords = await getCoordinates(val);
    if (coords) setPickupCoords(coords);
  };

  const handleDrop = async (val) => {
    setDropLocation(val);
    const coords = await getCoordinates(val);
    if (coords) setDropCoords(coords);
  };

  useEffect(() => {
    const now = new Date();
    const currentTime = now.toTimeString().split(" ")[0].slice(0, 5); // Get time in HH:mm format
    setTime(currentTime); // Set current time as default value
    const currentDates = now.toISOString().split("T")[0];
    setCurrentDate(currentDates);
  }, []);

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    setTime(selectedTime); // Update time when user selects a new time
  };

  const handleAmPmChange = (event) => {
    setAmPm(event.target.value); // Update AM/PM value
  };

  // Helper function to get coordinates from location name
  const getCoordinates = async (locationName) => {
    const url = `https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf6248699158897fb4440c86bc8df3aef2a508&text=${encodeURIComponent(
      locationName
    )}&size=1`;
    const res = await fetch(url);
    const data = await res.json();
    if (data?.features?.[0]?.geometry?.coordinates) {
      const [lon, lat] = data.features[0].geometry.coordinates;
      return { lat, lon };
    }
    return null;
  };

  const fetchSuggestions = async (query, setSuggestions) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const url = `https://api.openrouteservice.org/geocode/autocomplete?api_key=5b3ce3597851110001cf6248699158897fb4440c86bc8df3aef2a508&text=${encodeURIComponent(
      query
    )}&size=5`;

    const res = await fetch(url);
    const data = await res.json();

    if (data?.features) {
      const suggestions = data.features.map((f) => f.properties.label);
      setSuggestions(suggestions);
    } else {
      setSuggestions([]);
    }
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchSuggestions(pickupLocation, setPickupSuggestions);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [pickupLocation]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchSuggestions(dropLocation, setDropSuggestions);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [dropLocation]);

  useEffect(() => {
    const calculateDistanceAndFare = async () => {
      if (!pickupCoords || !dropCoords) return;

      const body = {
        coordinates: [
          [pickupCoords.lon, pickupCoords.lat],
          [dropCoords.lon, dropCoords.lat],
        ],
      };

      const response = await fetch(
        "https://api.openrouteservice.org/v2/directions/driving-car",
        {
          method: "POST",
          headers: {
            Authorization:
              "5b3ce3597851110001cf6248699158897fb4440c86bc8df3aef2a508",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();
      const distanceInMeters = data?.routes?.[0]?.summary?.distance;
      if (distanceInMeters) {
        const km = Math.floor(distanceInMeters / 1000) * 2;
        setKm(km);
        if (km > 250) {
          setFare(km * 20);
        } else {
          setFare(km * 10 + 3500);
        }
      }
    };

    calculateDistanceAndFare();
  }, [pickupCoords, dropCoords]);

  return (
    <section className="relative bg-white py-20" id="booknow">
      <div className="text-center z-20 relative mb-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#2E709E] ">
          Book Now
        </h2>
        <div className="w-44 md:w-64 h-1 mx-auto mt-2 bg-[#E6A43B] rounded-full"></div>
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center blur-sm brightness-75 mt-44"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-44">
        <div className="bg-white bg-opacity-30 p-8 rounded-xl shadow-lg backdrop-blur-md max-w-4xl mx-auto">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
            onSubmit={(e) => handleSumitForm(e)}
          >
            <div>
              <label className="text-sm font-semibold text-gray-800">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-800">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="relative">
              <label className="text-sm font-semibold text-gray-800">
                Pickup Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                placeholder="Enter pickup location"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />

              {pickupSuggestions.length > 0 && (
                <ul className="absolute z-50 bg-white border border-gray-300 mt-1 w-full max-h-40 overflow-auto rounded shadow">
                  {pickupSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        handlePickup(suggestion); // ✅ use handlePickup
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
              <label className="text-sm font-semibold text-gray-800">
                Destination Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={dropLocation}
                onChange={(e) => setDropLocation(e.target.value)}
                placeholder="Enter drop location"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
              {dropSuggestions.length > 0 && (
                <ul className="absolute z-50 bg-white border border-gray-300 mt-1 w-full max-h-40 overflow-auto rounded shadow">
                  {dropSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        handleDrop(suggestion);
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
                  onChange={(e) => {
                    setCurrentDate(e.target.value);
                  }}
                  min={new Date().toISOString().split("T")[0]} // Disables past dates
                  className="w-[170px] md:w-[400px] mt-1 p-2 border border-gray-300 rounded-md"
                />

                {/* Time Input */}
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    id="pickup-time"
                    value={time}
                    onChange={(e) => {
                      setTime(e.target.value);
                      handleTimeChange;
                    }}
                    className="time-input w-[120px] md:[200px] mt-1 p-2 border border-gray-300 rounded-md"
                  />

                  {/* AM/PM Dropdown */}
                  <select
                    value={amPm}
                    onChange={(e) => {
                      setAmPm(e.target.value);
                      handleAmPmChange;
                    }}
                    className="p-2 border border-gray-300 rounded-md"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-800">
                Trip type <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                onChange={(e) => {
                  setTrip(e.target.value);
                }}
              >
                {/* <option value="Round Trip">Select your Trip type</option> */}
                <option>Round Trip</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-800">
                Distance (in KM)
              </label>
              <input
                type="text"
                value={km || ""}
                onChange={(e) => {
                  setKm(e.target.value);
                }}
                placeholder="Distance will be calculated"
                readOnly
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-gray-800">
                Estimated Fare
              </label>
              <input
                type="text"
                value={fare ? `${fare} Rs` : ""}
                onChange={(e) => {
                  setFare(e.target.value);
                }}
                readOnly
                placeholder="preview your estimated fare"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>

            <div className="col-span-1 md:col-span-2 text-center mt-4">
              {user?.role !== "admin" && (
                <button
                  type="submit"
                  className={`book px-8 py-2 bg-[#2E709E] mx-auto text-white font-semibold rounded-full hover:bg-blue-900 flex justify-center items-center ${
                    bookLoad
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#2E709E] hover:bg-[#378dca]"
                  }`}
                >
                  {bookLoad ? (
                    <img
                      src={wheelImg}
                      alt="Spinning Wheel"
                      className="w-10 h-10 animate-spin"
                    />
                  ) : (
                    "Book"
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
