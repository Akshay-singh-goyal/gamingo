import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSearch, FaEnvelope, FaWhatsapp, FaUserCircle, FaBell, FaGamepad, FaBars, FaTimes, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ notifications, onToggleNotifications, isNotificationsOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const unreadCount = notifications.filter((notif) => !notif.read).length;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-gradient-to-r from-[#111827] to-[#374151] shadow-md fixed w-full z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <FaGamepad className="text-4xl text-[#4ADE80] animate-pulse" />
          <span className="text-3xl font-bold text-white uppercase tracking-widest">GaminGo</span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className={`lg:flex items-center space-x-8 text-lg font-medium ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <Link to="/" className="text-white hover:text-[#4ADE80] transition-all duration-300">Home</Link>
          <Link to="/about" className="text-white hover:text-[#4ADE80] transition-all duration-300">About</Link>
          <Link to="/dashboard" className="text-white hover:text-[#4ADE80] transition-all duration-300">Wallet</Link>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={onToggleNotifications}
              className="flex items-center space-x-2 text-white hover:text-[#4ADE80] focus:outline-none"
              aria-label="Toggle Notifications"
            >
              <FaBell className="text-2xl" />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#4ADE80] text-white text-xs rounded-full px-2 py-1">
                  {unreadCount}
                </span>
              )}
            </button>

            {isNotificationsOpen && (
              <div className="absolute right-0 w-72 mt-2 bg-[#1F2937] text-white rounded-lg shadow-lg">
                <div className="py-2 px-4 font-semibold text-lg">Notifications</div>
                <ul className="max-h-56 overflow-y-auto">
                  {notifications.map((notif) => (
                    <li
                      key={notif.id}
                      className={`px-4 py-2 ${notif.read ? "bg-[#2D3748]" : "bg-[#1F2937]"} hover:bg-[#4ADE80] cursor-pointer`}
                    >
                      {notif.message}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

const HelpAndContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issueType: 'gameplay',
    message: '',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [username, setUsername] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('https://gamingo-backend.onrender.com/api/auth');
        const data = await response.json();
        setUsername(data.username);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('https://gamingo-backend.onrender.com/api/tickets/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Ticket created successfully!');
        setFormData({ name: '', email: '', issueType: 'gameplay', message: '' });
      } else {
        setErrorMessage(data.error || 'Failed to create ticket. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubscription = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    // Add logic to handle email subscription here
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen p-8">
      {/* Header */}
      <Header notifications={[]} onToggleNotifications={() => {}} isNotificationsOpen={false} />

      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-[#4ADE80]">Help Center</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FaUserCircle className="text-2xl text-[#4ADE80]" />
            <span>Hello {username}!</span>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="mb-8 max-w-screen-md mx-auto">
        <div className="relative">
          <input
            type="text"
            className="w-full p-4 pl-12 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-[#4ADE80] focus:border-[#4ADE80]"
            placeholder="Search for help"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Ticket Issue Form */}
      <div className="max-w-screen-md mx-auto mb-12">
        <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Create a Ticket</h3>
          <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            {['name', 'email', 'message'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-lg font-semibold text-white">{`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-4 mt-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-[#4ADE80] focus:border-[#4ADE80]"
                  placeholder={`Enter your ${field}`}
                  required
                />
              </div>
            ))}

            {/* Issue Type Select */}
            <div>
              <label htmlFor="issueType" className="block text-lg font-semibold text-white">Issue Type</label>
              <select
                id="issueType"
                name="issueType"
                value={formData.issueType}
                onChange={handleChange}
                className="w-full p-4 mt-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-[#4ADE80] focus:border-[#4ADE80]"
                required
              >
                <option value="gameplay">Gameplay Issue</option>
                <option value="payment">Payment Issue</option>
                <option value="technical">Technical Issue</option>
                <option value="account">Account Issue</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-5 rounded-full font-semibold text-white bg-[#4ADE80] hover:bg-[#38B2AC] transition-all duration-300 focus:ring-4 focus:ring-[#4ADE80] focus:ring-opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Create Ticket'}
            </button>
          </form>

          {/* Success and Error Messages */}
          {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-12 max-w-screen-md mx-auto">
        <h3 className="text-2xl font-semibold text-[#4ADE80] mb-4">How Can We Help?</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <FaWhatsapp className="text-xl text-[#4ADE80]" />
            <span>+91 7879680488</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-xl text-[#4ADE80]" />
            <span>GaminGosupport@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#111827] to-[#374151] text-white py-12 mt-8">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
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
                <li>
                  <Link to="/" className="text-sm hover:text-[#38B2AC] transition-all duration-300">Home</Link>
                </li>
                <li>
                  <Link to="/wallet" className="text-sm hover:text-[#38B2AC] transition-all duration-300">Wallet</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm hover:text-[#38B2AC] transition-all duration-300">Contact</Link>
                </li>
                <li>
                  <Link to="/shop" className="text-sm hover:text-[#38B2AC] transition-all duration-300">Shop</Link>
                </li>
                <li>
                  <Link to="/blog" className="text-sm hover:text-[#38B2AC] transition-all duration-300">Blog</Link>
                </li>
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
                <a href="https://youtube.com/c/YourChannel" target="_blank" rel="noopener noreferrer" className="hover:text-[#38B2AC] transition-all duration-300">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#4ADE80]">Subscribe to Newsletter</h3>
              <form onSubmit={handleNewsletterSubscription} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-4 py-2 text-black rounded-md"
                />
                <button type="submit" className="bg-[#4ADE80] text-black px-6 py-2 rounded-md">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>&copy; 2025 GaminGo. All rights reserved.</p>
          <div className="mt-2">
            <Link to="/privacypolicy" className="hover:text-yellow-300 transition-all duration-300">Privacy Policy</Link> |{' '}
            <Link to="/termsandconditions" className="hover:text-yellow-300 transition-all duration-300">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HelpAndContactPage;
