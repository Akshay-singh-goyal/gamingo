import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Updated import

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Updated hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/forgot-password", { email });
      setMessage("Check your email for the reset link.");
      setError("");
      navigate("/login"); // Updated navigation
    } catch (err) {
      setError("An error occurred. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ForgotPassword;
