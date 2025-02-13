import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  // Handle input changes
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  // Submit form data to the API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = "https://gamingo-backend.onrender.com/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/"; // Redirect to the home page after successful login
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message || "An error occurred. Please try again.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  // Check if the form is valid
  const isFormValid = data.email && data.password;

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 flex justify-center items-center p-4">
      <div className="bg-opacity-80 bg-gray-900 p-10 rounded-3xl shadow-xl w-full max-w-lg backdrop-blur-lg">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white text-center mb-6">Login to GameZone</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                className="w-full p-4 pl-12 border border-transparent rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-600 shadow-xl text-white bg-gray-800 placeholder-gray-500"
                required
                aria-label="Email"
              />
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500" />
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                className="w-full p-4 pl-12 border border-transparent rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-600 shadow-xl text-white bg-gray-800 placeholder-gray-500"
                required
                aria-label="Password"
              />
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500" />
            </div>

            {/* Error Message */}
            {error && <div className="text-red-500 text-sm text-center mt-4">{error}</div>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-600 transition duration-200 transform hover:scale-105 focus:outline-none disabled:bg-gray-500"
              disabled={!isFormValid || loading}
            >
              {loading ? "Logging In..." : "Login"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-300">
              New to GameZone?{" "}
              <Link to="/signup" className="text-blue-400 hover:text-blue-600 font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
