import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import lalogo from "../assets/la.jpg";
import logo from "../assets/logo.jpg";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/profile.php?id=61576027919599",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/nainaa_cabs/",
    },
    {
      icon: FaWhatsapp,
      url: "https://wa.me/919360055963",
    },
    {
      icon: FaEnvelope,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=nainaacabs@gmail.com",
    },
  ];

  return (
    <footer className="bg-[#2E709E] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 text-center md:text-left">
        {/* Company Info */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
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
        <div className="md:ml-24">
          <h3 className="font-semibold text-lg mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/bookings" className="hover:underline">
                Booking
              </a>
            </li>
            <li>
              <a href="#cars" className="hover:underline">
                Cars
              </a>
            </li>
          </ul>
        </div>

        {/* Guides */}
        <div className="md:ml-14">
          <h3 className="font-semibold text-lg mb-3">Guides</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#contact" className="hover:underline">
                Connect Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:ml-14">
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-sm">Soundarrajan R</p>
          <p className="text-sm">21/A, Raghavendrapuram,</p>
          <p className="text-sm">Srirangam, Thiruchirapalli,</p>
          <p className="text-sm">India, Tamilnadu.</p>
          <p className="text-sm mt-2">Phone: +91 93600 55963</p>
          <p className="text-sm md:ml-[50px]">
            +91 88077 <span className="md:ml-[4px]">15963</span>
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5 justify-center md:justify-start">
            {socialLinks.map(({ icon: Icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#2E709E] p-2 rounded-full hover:scale-105 transition-transform"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-white pt-4 text-center text-sm text-white">
        © 2025 LeastAction. All rights reserved. Powered by{" "}
        <img
          src={lalogo}
          alt="LeastAction Logo"
          className="inline h-6 align-middle ml-1 rounded-full"
        />
      </div>
    </footer>
  );
};

export default Footer;
