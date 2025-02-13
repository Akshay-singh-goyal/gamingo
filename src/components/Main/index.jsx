import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGamepad, FaSignOutAlt, FaSearch, FaBell, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube, FaBars } from "react-icons/fa";
import axios from "axios";
import gaminGoLogo from '../images/logo.png'; // Adjust the path according to your directory structure
import RateCardModal from "../RateCardModal.js";
import SupportButton from "../SupportButton.js";

// Navbar Component
const Navbar = ({ notifications, onLogout, onToggleNotifications, isNotificationsOpen, onMarkAsRead, isMobileMenuOpen, onToggleMobileMenu }) => {
  const unreadCount = useMemo(() => notifications.filter((notif) => !notif.read).length, [notifications]);

  return (
    <nav className="bg-gradient-to-r from-[#111827] to-[#374151] shadow-md fixed w-full z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-4">
          <img src={gaminGoLogo} alt="GaminGo Logo" className="w-12 h-12" />
          <span className="text-3xl font-bold text-white uppercase tracking-widest">GaminGo</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
          <Link to="/" className="text-white hover:text-[#4ADE80] transition-all duration-300">Home</Link>
          <Link to="/about" className="text-white hover:text-[#4ADE80] transition-all duration-300">About</Link>
          <Link to="/wallet" className="text-white hover:text-[#4ADE80] transition-all duration-300">Wallet</Link>

          <div className="relative">
            <button onClick={onToggleNotifications} className="flex items-center space-x-2 text-white hover:text-[#4ADE80]">
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
                      onClick={() => onMarkAsRead(notif.id)}
                    >
                      {notif.message}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button
            className="bg-[#4ADE80] text-white px-4 py-2 rounded-md mt-6 w-auto transform hover:scale-105 transition-all duration-300"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={onToggleMobileMenu} className="text-white">
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#111827] text-white text-lg">
          <Link to="/" className="block py-4 text-center hover:bg-[#4ADE80] transition-all duration-300">Home</Link>
          <Link to="/about" className="block py-4 text-center hover:bg-[#4ADE80] transition-all duration-300">About</Link>
          <Link to="/wallet" className="block py-4 text-center hover:bg-[#4ADE80] transition-all duration-300">Wallet</Link>
          <div className="relative py-4 text-center">
            <button onClick={onToggleNotifications} className="flex items-center justify-center space-x-2 text-white hover:text-[#4ADE80]">
              <FaBell className="text-2xl" />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#4ADE80] text-white text-xs rounded-full px-2 py-1">
                  {unreadCount}
                </span>
              )}
            </button>
             {/* Logout Button in Mobile Menu */}
          <button
            className="bg-[#4ADE80] text-white px-4 py-2 rounded-md mt-6 w-auto transform hover:scale-105 transition-all duration-300 mx-auto block"
            onClick={onLogout}
          >
            Logout
          </button>

            {isNotificationsOpen && (
              <div className="absolute top-12 left-0 w-full bg-[#1F2937] text-white rounded-lg shadow-lg">
                <div className="py-2 px-4 font-semibold text-lg">Notifications</div>
                <ul className="max-h-56 overflow-y-auto">
                  {notifications.map((notif) => (
                    <li
                      key={notif.id}
                      className={`px-4 py-2 ${notif.read ? "bg-[#2D3748]" : "bg-[#1F2937]"} hover:bg-[#4ADE80] cursor-pointer`}
                      onClick={() => onMarkAsRead(notif.id)}
                    >
                      {notif.message}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

// TransitionMessage Component
const TransitionMessage = ({ username, handleShare }) => (
  <div className="transition-message-container bg-gradient-to-r from-[#4ADE80] to-[#38B2AC] py-4 mt-20">
    <div className="transition-message text-center font-semibold text-white text-lg">
      <span>
        Welcome, {username}! Latest updates: Join our WhatsApp group for the latest news. Follow us on Instagram for winner announcements!
        <br />
        <span className="mt-2 text-sm font-normal">
          स्वागत है, {username}! नवीनतम अपडेट: हमारे व्हाट्सएप ग्रुप से जुड़ें। विजेता की घोषणा के लिए इंस्टाग्राम पर हमें फॉलो करें!
        </span>
      </span>

      {/* Join WhatsApp Group Button */}
      <button
        className="mt-4 bg-white text-[#4ADE80] py-2 px-6 rounded-lg flex items-center justify-center mx-auto hover:bg-[#38B2AC] transition-all duration-300"
        onClick={() => window.open("https://chat.whatsapp.com/KCwLBp6RVn9FgyX9xDvJdN", "_blank")}
      >
        <FaWhatsapp className="mr-2" /> Join WhatsApp Group
      </button>

      <button
        className="mt-4 bg-[#4ADE80] text-white py-2 px-6 rounded-lg flex items-center justify-center mx-auto hover:bg-[#38B2AC] transition-all duration-300"
        onClick={handleShare}
      >
        Share this page
      </button>
    </div>
  </div>
);

// MainPage Component
const MainPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [logoutConfirmation, setLogoutConfirmation] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New game added to the library!", read: false },
    { id: 2, message: "Special offer ends today!", read: false },
  ]);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [username, setUsername] = useState("Sari");
  const [email, setEmail] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const response = await axios.get('https://gamingo-backend.onrender.com/api/auth', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsername(response.data.username);
        setEmail(response.data.email);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleNewsletterSubscription = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email address!");
      return;
    }
    try {
      await axios.post("https://gamingo-backend.onrender.com/api/subscribe", { email });
      alert("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("An error occurred while subscribing. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleSearchChange = useCallback((e) => setSearchQuery(e.target.value), []);
  const fetchSearchResults = useCallback(async () => {
    if (searchQuery.trim()) {
      try {
        const response = await axios.get(`/api/games/search?q=${searchQuery}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  }, [searchQuery]);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "GamingGo Updates",
        text: `Welcome, ${username}! Latest updates: Join our WhatsApp group for the latest news. Follow us on Instagram for winner announcements!`,
        url: window.location.href,
      })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      alert("Share feature not supported in your browser.");
    }
  };

  const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);
  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="bg-[#1A202C] text-white min-h-screen flex flex-col">
      <Navbar
        notifications={notifications}
        onLogout={handleLogout}
        onToggleNotifications={toggleNotifications}
        isNotificationsOpen={isNotificationsOpen}
        onMarkAsRead={markAsRead}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
      />

      <TransitionMessage username={username} handleShare={handleShare} />

      <section className="relative bg-gradient-to-r from-[#4ADE80] to-[#38B2AC] py-24 mt-16">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Welcome to GamingGo</h2>
          <p className="text-xl text-white mb-6">Explore the best games, join the fun, and get ready to play!</p>
          <Link to="/gamepage" className="inline-block bg-white text-[#4ADE80] text-lg py-3 px-8 rounded-lg hover:bg-[#38B2AC] transition-all duration-300">
            Explore Now
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#111827] to-[#374151]">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">Find Your Favorite Games</h2>
          <div className="flex justify-center items-center space-x-4 flex-col sm:flex-row">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="bg-[#2D3748] text-white p-4 rounded-lg w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-[#4ADE80] transition-all duration-300"
              placeholder="Search for games..."
            />
            <button
              onClick={fetchSearchResults}
              className="bg-[#4ADE80] text-white p-4 rounded-lg mt-4 sm:mt-0 hover:bg-[#38B2AC] transition-all duration-300"
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </section>
  <RateCardModal/>
  <SupportButton/>
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
                  {/* YouTube Link */}
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
                    <Link to="/privacypolicy" className="hover:text-yellow-300 transition-all duration-300">Privacy Policy</Link> | 
                    <Link to="/terms" className="hover:text-yellow-300 transition-all duration-300"> Terms of Service</Link>
                  </div>
                </div>
        </footer> 
    </div>
  );
};

export default MainPage;
