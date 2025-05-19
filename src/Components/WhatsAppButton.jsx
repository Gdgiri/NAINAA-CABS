// src/components/ContactButtons.jsx
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";

const ContactButtons = () => {
  const phoneNumber = "919715424895"; // Your phone number with country code
  const message = "Hello, can I get a fare estimate?";

  const [isWhatsAppBouncing, setIsWhatsAppBouncing] = useState(false);
  const [isCallBouncing, setIsCallBouncing] = useState(false);

  const handleWhatsAppClick = () => {
    setIsWhatsAppBouncing(true);
    setTimeout(() => setIsWhatsAppBouncing(false), 500);
  };

  const handleCallClick = () => {
    setIsCallBouncing(true);
    setTimeout(() => setIsCallBouncing(false), 500);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <a
        href={`tel:+${phoneNumber}`}
        onClick={handleCallClick}
        className={`bg-blue-600 hover:bg-blue-700 rounded-full w-12 h-12 flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-110 ${
          isCallBouncing ? "animate-bounce" : ""
        }`}
        title="Call us"
        aria-label="Call us"
      >
        <span className="text-white text-xl">
          {" "}
          <IoCall />
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className={`bg-green-500 hover:bg-green-600 rounded-full w-12 h-12 flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-110 ${
          isWhatsAppBouncing ? "animate-bounce" : ""
        }`}
        title="Chat with us on WhatsApp"
        aria-label="Chat with us on WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
};

export default ContactButtons;
