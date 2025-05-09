import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#2E709E] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={logo}
              alt="Nainaa Cabs"
              className="w-16 h-16 object-cover rounded-full"
            />
            <h2 className="text-2xl font-bold">
              <span className="text-[#E6A43B]">N</span>AINAA{" "}
              <span className="text-[#E6A43B]">C</span>ABS
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            At Nainaa Cabs, we provide premium, comfortable and affordable Cab
            Services for every journey – driven by a passion for travel,
            customer satisfaction, and unmatched service quality.
          </p>
        </div>

        {/* Links */}
        <div className="ml-24">
          <h3 className="font-semibold text-lg mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Booking
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cars
              </a>
            </li>
          </ul>
        </div>

        {/* Guides */}
        <div className="ml-14">
          <h3 className="font-semibold text-lg mb-3">Guides</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Connect Us
              </a>
            </li>

            <li>
              <a href="#" className="hover:underline">
                Help
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="ml-14">
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-sm">Soundarrajan R</p>
          <p className="text-sm">21/A, Raghavendrapuram, </p>
          <p className="text-sm">Srirangam,Thiruchirapalli,</p>
          <p className="text-sm">India, Tamilnadu.</p>
          <p className="text-sm mt-2">Phone: +91 88077 18563</p>
          <p className="text-sm ml-[47px]">+91 93600 55963</p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            {[FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-white text-[#2E709E] p-2 rounded-full hover:scale-105 transition-transform"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-white pt-4 text-center text-sm">
        © 2025 Nainaa Cabs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
