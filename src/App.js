import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

// Import Pages
import Signup from "./components/Register"; 
import Login from "./components/LoginPage";
import EmailVerify from "./components/EmailVerfiy";
import MainPage from "./components/Main"; 
import GamePage from "./components/GamePage";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import ContactPage from './components/ContactPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import ForgotPassword from './components/ForgotPassword';
import PasswordReset from './components/PasswordReset';
import TermsConditions from './components/TermsConditions';
import RateCard from './components/RateCardModal.js';

function App() {
  const user = localStorage.getItem("token"); // Check for user authentication status

  return (
    <Routes>
      {/* Public Routes - No Authentication Required */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      
      {/* Main (Public) Routes */}
      <Route path="/" element={user ? <MainPage /> : <Navigate to="/login" />} />
      <Route path="/gamepage" element={user ? <GamePage /> : <Navigate to="/login" />} />
      <Route path="/About" element={user ? <About /> : <Navigate to="/login" />} />
      <Route path="/contact" element={user ? <ContactPage /> : <Navigate to="/login" />} />
      <Route path='/privacypolicy' element={user ? <PrivacyPolicy/> : <Navigate to="/login" />} />
      <Route path="/wallet" element={user ? <Dashboard/> : <Navigate to="/login" />} />
      <Route path="/terms" element={user ? <TermsConditions /> : <Navigate to="/login" />} />
      <Route path="/ratecard" element={user ? <RateCard /> : <Navigate to="/login" />} />
      
      
      {/* Catch-all Route: Redirect to login if user is not authenticated */}
      <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
    </Routes>
  );
}

export default App;
