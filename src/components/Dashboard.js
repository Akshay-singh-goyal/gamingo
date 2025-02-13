import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import img1 from "../components/images/scan.png"; // QR code image for payment
import { ToastContainer, toast } from 'react-toastify';  // Importing toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Importing the CSS

const TicketPurchaseCenter = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: 50,  // Minimum amount for the ticket
  });

  const [totalPrice, setTotalPrice] = useState(50);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [countdown, setCountdown] = useState(10); // Countdown timer state
  const [ticketId, setTicketId] = useState(null); // Ticket ID state for payment confirmation
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  const ticketPriceINR = 35 * 74; // Example ticket price conversion from USD to INR

  useEffect(() => {
    setTotalPrice(formData.amount);
  }, [formData.amount]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'amount'
        ? Math.min(Math.max(50, value), 10000)  // Ensure amount is between 50 and 10000
        : value,
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.amount) {
      setErrorMessage('Please fill in all fields.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage('Please enter a valid email.');
      return false;
    }
    if (formData.amount < 50 || formData.amount > 10000) {
      setErrorMessage('Amount must be between ₹50 and ₹10,000.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const ticketData = {
      ticketId: `TICKET-${Date.now()}`,
      ...formData,
      totalPrice,
    };

    try {
      const response = await fetch('https://gamingo-backend.onrender.com/api/tickets/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ticketData),
      });

      if (!response.ok) throw new Error('Failed to purchase ticket.');

      const data = await response.json();
      setTicketId(data.ticket.ticketId);  // Store the ticketId received from response
      setPaymentComplete(true);
      setSuccessMessage('Ticket purchased successfully! Proceed to payment.');
      setErrorMessage('');
      toast.success('Ticket purchased successfully! Proceed to payment.');
    } catch (error) {
      setErrorMessage(error.message);
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmPayment = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://gamingo-backend.onrender.com/api/tickets/confirm-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          ticketId: ticketId,
          userName: formData.name, // User's name from form data
          eventName: 'GaminGo Event', // Replace with the actual event name
          totalPrice: totalPrice,
        }),
      });

      if (!response.ok) throw new Error('Payment confirmation failed.');

      const data = await response.json();
      setPaymentComplete(true);
      setSuccessMessage('Payment confirmed! A confirmation email has been sent.');
      setErrorMessage('');
      toast.success('Payment confirmed! A confirmation email has been sent.');

      startCountdown(); // Redirect user after a countdown

    } catch (error) {
      setErrorMessage(error.message);
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const startCountdown = () => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          navigate('/');
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu state
  };

  return (
    <div className="font-sans bg-[#1F2937] text-white min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#4ADE80] to-[#38B2AC] py-4 shadow-lg">
        <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-white">GaminGo</Link>
          <button className="text-3xl sm:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <nav className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="space-x-6 sm:flex sm:space-x-12">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/wallet" className="hover:text-gray-300">Wallet</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Ticket Purchase Section */}
      <div className="ticket-purchase-center bg-[#1F2937] text-white p-8 rounded-lg shadow-xl max-w-md mx-auto mt-12">
        {!paymentComplete ? (
          <form onSubmit={handleSubmit} className="ticket-form bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Buy Ticket</h2>
            <label className="block mb-4 text-lg">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-700 p-4 rounded-lg w-full"
              />
            </label>
            <label className="block mb-4 text-lg">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-gray-700 p-4 rounded-lg w-full"
              />
            </label>
            <label className="block mb-4 text-lg">
              Amount (₹):
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                min="50"
                max="10000"
                required
                className="bg-gray-700 p-4 rounded-lg w-full"
              />
            </label>
            <p className="text-xl font-semibold mb-4">Total Price: ₹ {totalPrice.toFixed(2)}</p>
            <button
              type="submit"
              disabled={loading}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg w-full transform hover:scale-105 transition-all duration-300"
            >
              {loading ? 'Processing...' : 'Proceed to Payment'}
            </button>
            {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
            {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
          </form>
        ) : (
          <div className="payment bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Complete Your Payment</h2>
            <p className="mb-4">Please scan the QR code or visit the payment link:</p>
            <img src={img1} alt="Payment QR Code" className="payment-image mb-4" />
            <p className="mb-4">Total Price: ₹ {totalPrice.toFixed(2)}</p>
            <button onClick={handleConfirmPayment} className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg w-full">
              Confirm Payment
            </button>
            <p className="mt-4 text-center text-yellow-500">
              Page will redirect in {countdown} seconds...<br />
              If not, <Link to="/" className="text-teal-500">click here</Link> to go back to Home.
            </p>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <footer className="bg-[#1F2937] text-white py-12 mt-8">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Footer Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#4ADE80]">About Us</h3>
              <p className="text-sm mb-4 text-gray-300">
                We bring you the best gaming experience. Join GaminGo and explore exciting games, stay updated, and enjoy endless fun!
              </p>
              <Link to="/about" className="text-[#4ADE80] hover:text-[#38B2AC] transition-all duration-300 text-sm">
                Learn More
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#4ADE80]">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-sm hover:text-[#38B2AC] transition-all duration-300">Home</Link></li>
                <li><Link to="/wallet" className="text-sm hover:text-[#38B2AC] transition-all duration-300">Wallet</Link></li>
                <li><Link to="/contact" className="text-sm hover:text-[#38B2AC] transition-all duration-300">Contact</Link></li>
                <li><Link to="/shop" className="text-sm hover:text-[#38B2AC] transition-all duration-300">Shop</Link></li>
                <li><Link to="/blog" className="text-sm hover:text-[#38B2AC] transition-all duration-300">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#4ADE80]">Follow Us</h3>
              <div className="flex space-x-6 text-2xl">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#38B2AC] transition-all duration-300">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#38B2AC] transition-all duration-300">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#38B2AC] transition-all duration-300">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#38B2AC] transition-all duration-300">
                  <FaLinkedinIn />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#38B2AC] transition-all duration-300">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default TicketPurchaseCenter;
