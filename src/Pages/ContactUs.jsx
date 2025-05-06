import React from "react";
import contact from "../assets/contact.jpg";

const ContactUs = () => {
  return (
    <div className="text-center z-20 relative bottom-6 ">
      <h2 className="text-4xl font-semibold text-[#2E709E]">Contact Us</h2>
      <div className="w-36 h-1 mx-auto mt-2 bg-[#E6A43B] rounded-full"></div>

      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-white shadow-md rounded-lg max-w-5xl w-full flex flex-col md:flex-row overflow-hidden">
          {/* Left: Contact Form */}
          <div className="w-full md:w-1/2 p-8 mb-24">
            <h2 className="text-center text-xl font-semibold text-blue-800 mb-2">
              Feel free to connect with us
            </h2>
            <form className="space-y-4 mt-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Mobile Number*"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email*"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="bg-[#E6A43B] hover:bg-yellow-600 text-white py-2 px-6 rounded shadow-md transition duration-300"
              >
                Send A Message
              </button>
            </form>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2">
            <img
              src={contact}
              alt="Contact Illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
