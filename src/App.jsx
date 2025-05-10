import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AuthTabs from "./Pages/AuthTabs";
import HeroSection from "./Pages/HeroSection";
import About from "./Pages/About";
import BookNow from "./Pages/BookNow";
import CarCard from "./Pages/CarCard";
import TestimonialsSection from "./Pages/Testimonials";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer";
import Pricing from "./Pages/Pricing";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import Bookings from "./Pages/Bookings";
import Review from "./Pages/Review";
import VerificationPage from "./Pages/VerificationPage";
import UpdatePassword from "./Pages/ConfirmPassword";
import PasswordResetSuccess from "./Pages/PasswordResetSuccess";
import Profile from "./Pages/Profile";

const App = () => {
  const location = useLocation();

  // Check if the route is any of the auth-related pages
  const isAuthRoute =
    location.pathname === "/auth" ||
    location.pathname === "/forgot" ||
    location.pathname === "/verify" ||
    location.pathname === "/confirm" ||
    location.pathname === "/success" ||
    location.pathname === "/profile" ||
    location.pathname === "/bookings" ||
    location.pathname.startsWith("/reset");

  return (
    <div>
      {/* Render Navbar only on non-auth routes */}
      {!isAuthRoute && <Navbar />}

      {/* Main routes */}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/auth" element={<AuthTabs />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/verify" element={<VerificationPage />} />
        <Route path="/confirm" element={<UpdatePassword />} />
        <Route path="/success" element={<PasswordResetSuccess />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/reset/:resetToken" element={<ResetPassword />} />
      </Routes>

      {/* Render additional sections only on non-auth routes */}
      {!isAuthRoute && (
        <>
          <About />
          <Pricing />
          <BookNow />
          <CarCard />
          <TestimonialsSection />
          <ContactUs />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
