import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const About = () => {
  const [email, setEmail] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for mobile menu
  const navigate = useNavigate();  

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

  const handleContactClick = () => {
    navigate('/contact');  
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the state to show/hide mobile menu
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1A202C] to-[#4A5568] text-white">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#2D3748] to-[#1A202C] text-white py-4 shadow-lg">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#38B2AC] cursor-pointer">GaminGo</h1>
          <nav className={`hidden sm:flex space-x-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}> {/* Mobile menu visibility */}
            <Link to="/" className="text-lg text-gray-300 hover:text-[#38B2AC]">Home</Link>
            <Link to="/about" className="text-lg text-gray-300 hover:text-[#38B2AC]">About</Link>
            <Link to="/games" className="text-lg text-gray-300 hover:text-[#38B2AC]">Games</Link>
            <Link to="/contact" className="text-lg text-gray-300 hover:text-[#38B2AC]">Contact</Link>
          </nav>
        </div>
        {/* Mobile Navigation */}
        <div className="sm:hidden flex justify-between px-6 py-2">
          <button onClick={toggleMobileMenu} className="text-3xl text-white">☰</button> {/* Toggle button */}
        </div>
      </header>

      {/* Main Content */}
      <div className="py-8 px-6 sm:py-16 sm:px-8">
        <div className="max-w-screen-xl mx-auto">
          {/* Introduction Section */}
          <div className="bg-[#1F2937] rounded-lg p-6 sm:p-8 mb-12 shadow-lg text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#38B2AC] mb-4">Welcome to GaminGo</h2>
            <p className="text-base sm:text-lg text-gray-300">
              Your one-stop destination for the best gaming experience. Explore, play, and elevate your gaming journey with us.
            </p>
          </div>

          {/* Who We Are Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#4ADE80] mb-4">Who We Are</h3>
            <p className="text-base sm:text-lg text-gray-200">
              At Gaming Hub, we’re passionate about bringing together gamers from all around the world. Whether you are a
              casual player or a professional gamer, we provide a diverse selection of games to suit every style and level
              of play.
            </p>
            <p className="text-base sm:text-lg text-gray-200 mt-4">
              Our mission is to create a thriving community where players can engage in friendly competition, share their
              experiences, and enjoy unforgettable gaming moments.
            </p>
          </div>

          {/* Featured Games Section */}
          <div className="mt-8 sm:mt-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#4ADE80] mb-6">Featured Games</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#2D3748] p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
                <img src="game-image-1.jpg" alt="Game 1" className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4" />
                <h4 className="text-xl font-bold text-white">Fast and Furious Racing</h4>
                <p className="text-sm sm:text-base text-gray-300">Get ready for high-speed action and thrilling races. Challenge your friends for ultimate victory!</p>
              </div>
              <div className="bg-[#2D3748] p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
                <img src="game-image-2.jpg" alt="Game 2" className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4" />
                <h4 className="text-xl font-bold text-white">Fantasy Adventure Quest</h4>
                <p className="text-sm sm:text-base text-gray-300">Embark on an epic journey across magical lands. Solve puzzles and conquer the ultimate challenges.</p>
              </div>
              <div className="bg-[#2D3748] p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
                <img src="game-image-3.jpg" alt="Game 3" className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4" />
                <h4 className="text-xl font-bold text-white">Mystery Puzzle</h4>
                <p className="text-sm sm:text-base text-gray-300">Put your problem-solving skills to the test and unravel the mystery in this brain-teasing puzzle game.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-8 sm:mt-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#4ADE80] mb-6">Get In Touch</h3>
            <p className="text-base sm:text-lg text-gray-200 mb-6">
              Have questions, feedback, or just want to chat about gaming? Reach out to us anytime, and we’ll be happy to connect.
            </p>
            <button onClick={handleContactClick} className="bg-[#4ADE80] text-white py-2 px-6 rounded-lg hover:bg-[#38B2AC] transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

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

export default About;
