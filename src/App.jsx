import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Pages/HeroSection";
import About from "./Pages/About";
import BookNow from "./Pages/BookNow";
import CarCard from "./Pages/CarCard";
import TestimonialsSection from "./Pages/Testimonials";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer";
// import Car360Viewer from "./Pages/ThreeSixty";
// import Manual360Viewer from "./Pages/ManualViewer";

const App = () => {
  return (
    <div>
      <Navbar />

      {/* <Manual360Viewer /> */}
      <HeroSection />
      <About />
      <BookNow />
      <CarCard />
      <TestimonialsSection />
      <ContactUs />
      {/* <Car360Viewer /> */}

      <Footer />
    </div>
  );
};

export default App;
