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


function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {/* Public Routes - No Authentication Required */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />

      {/* Main (Public) Routes */}
      <Route path="/" element={<MainPage />} />
      <Route path="/gamepage" element={<GamePage />} />
      <Route path="/About" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
	  <Route path="/wallet" element={<Dashboard/>}/>


      {/* Catch-all Route: Redirect to login if user is not authenticated */}
      <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
    </Routes>
  );
}

export default App;
