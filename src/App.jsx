import React from "react";
// import OAuth from "./Components/OAuth";
import Navbar from "./Components/Navbar";
import AuthTabs from "./Pages/AuthTabs";
import HeroSection from "./Pages/HeroSection";
import About from "./Pages/About";
import BookNow from "./Pages/BookNow";
import CarCard from "./Pages/CarCard";
import TestimonialsSection from "./Pages/Testimonials";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer";
// import Car360Viewer from "./Pages/ThreeSixty";
// import Manual360Viewer from "./Pages/ManualViewer";
import Pricing from "./Pages/Pricing";
import Message from "./Pages/Message";

const App = () => {
  return (
    <div>
      {/* <OAuth /> */}
      <Navbar />

      {/* <Manual360Viewer /> */}
      <HeroSection />
      <About />
      <Pricing />
      <BookNow />
      <CarCard />
      <TestimonialsSection />
      <ContactUs />

      <Message />
      {/* <Car360Viewer /> */}
      {/* <AuthTabs /> */}
      <Footer />
    </div>
  );
};

export default App;
