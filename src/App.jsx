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
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import AdminNav from "./Components/AdminNav";
// import AdminFooter from "./Components/AdminFooter";
import Earning from "./Pages/Earning";
import WheelSpinner from "./Components/WheelSpinner";
import AdminProtectedRoute from "./Components/AdminProtectedRoute";
import WhatsAppButton from "./Components/WhatsAppButton";

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
    location.pathname === "/admin" ||
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
        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <Bookings />
            </ProtectedRoute>
          }
        />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
        <Route
          path="/admin"
          element={
            <div>
              {/* <Nav />
              <Home /> */}
              <ProtectedRoute>
                <AdminProtectedRoute>
                  <AdminNav />
                  <div className="mb-12">
                    <Home />
                    <Earning />
                    {/* <WheelSpinner /> */}
                  </div>
                  {/* <AdminFooter /> */}
                </AdminProtectedRoute>
              </ProtectedRoute>
            </div>
          }
        />

        <Route path="/admins" element={<Bookings />} />
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
          <ScrollToTopButton />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
};

export default App;
