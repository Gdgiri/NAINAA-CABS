import React from "react";
import car from "../assets/car1.jpg";
import aboutcar from "../assets/aboutcar.png";
const About = () => {
  return (
    <section className=" py-16 px-6 lg:px-20" id="about">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#2E709E] relative inline-block head">
          About Us
          <span className="block w-25 h-1 bg-orange-500 mt-1"></span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-extrabold text-[#2E709E]">
            NAINAA CABS
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Based in Trichy, Nainaa Cabs offers the services listed below. If
            necessary, we may offer both a one-way and a round-trip. By offering
            the greatest service at the most affordable price, you can get in
            touch with our customer care with any questions.
          </p>
          <ul className="text-gray-600 space-y-2 text-base">
            <li>
              <strong>Reliability:</strong> The taxi service will be dependable
              and arrive on time.
            </li>
            <li>
              <span className="text-[#2E709E] font-semibold">• Safety:</span>{" "}
              Nainaa Cabs will have a clean and well-maintained fleet of
              vehicles and experienced drivers.
            </li>
            <li>
              <span className="text-[#2E709E] font-semibold">
                • Affordability:
              </span>{" "}
              Nainaa Cabs will offer competitive pricing and transparent rates.
            </li>
            <li>
              <span className="text-[#2E709E] font-semibold">
                • Convenience:
              </span>{" "}
              Nainaa Cabs will be available when you need it, and you should be
              able to book a ride easily.
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative hidden md:block">
          <div className="absolute -bottom-6 right-32 w-3/4 h-full bg-[#6a9dc0] -z-10 rounded-md"></div>
          <img
            src={aboutcar} // Replace with your actual image URL
            alt="Nainaa Cabs Car"
            className="w-3/4 h-auto object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
