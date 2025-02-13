import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGamepad, FaBell } from 'react-icons/fa';
import img1 from "../components/images/Ludogame.jpeg"
import img2 from "../components/images/callofduty.jpeg"; // New Chess image
import img3 from "../components/images/chess.jpeg";  // New Pool image
import img4 from "../components/images/freefire.jpeg"; // Reused for other games
import img5 from "../components/images/ludoroyal.jpeg"; // Another sample image
import img6 from "../components/images/poolgame.jpeg"; // Another sample image
import img7 from "../components/images/pubg.jpg"; // Another sample image
import img8 from "../components/images/snkaeladder.jpeg"; // Another sample image

const Header = ({ notifications, onToggleNotifications, isNotificationsOpen }) => {
  const unreadCount = notifications.filter((notif) => !notif.read).length;

  return (
    <header className="bg-gradient-to-r from-[#111827] to-[#374151] shadow-md fixed w-full z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <FaGamepad className="text-4xl text-[#4ADE80] animate-pulse" />
          <span className="text-3xl font-bold text-white uppercase tracking-widest">GaminGo</span>
        </div>

        <div className="flex items-center space-x-8 text-lg font-medium">
          <Link to="/" className="text-white hover:text-[#4ADE80] transition-all duration-300">Home</Link>
          <Link to="/about" className="text-white hover:text-[#4ADE80] transition-all duration-300">About</Link>
          <Link to="/dashboard" className="text-white hover:text-[#4ADE80] transition-all duration-300">Wallet</Link>

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

const games = [
  { 
    id: 1, 
    name: 'Play Ludo', 
    description: 'Play a real Ludo game with a real person.', 
    imageUrl: img1,
    isPlayable: true,
    link: 'https://ludoking.com/play/'
  },
  
  { 
    id: 3, 
    name: 'Chess', 
    description: 'Classic Chess game to play with others.', 
    imageUrl: img3, 
    isPlayable: true,
    link: 'https://chess.com/play'
  },
  { 
    id: 4, 
    name: 'Pool', 
    description: 'Play a real Pool game.', 
    imageUrl: img6, 
    isPlayable: true,
    link: 'https://8ballpool.com/en/game'
  },
  
  { 
    id: 6, 
    name: 'Ludo Battle Royale', 
    description: 'A twist on the classic Ludo where players compete in a battle royale-style format.',
    isPlayable: true,
    imageUrl: img5, 
    link: 'https://ludoking.com/play'
  },
  { 
    id: 7, 
    name: 'Snake vs Ladder', 
    description: 'A competitive version of Snake and Ladder with twists and traps.',
    isPlayable: true,
    imageUrl: img8, 
    link: 'https://play.google.com/store/apps/details?id=com.StormwindGames.SnakesandLadders&hl=en-US&pli=1'
  },
  { 
    id: 8, 
    name: 'Pool Master Duel', 
    description: 'A one-on-one Pool game with challenges like 8-ball or 9-ball.',
    isPlayable: true,
    imageUrl: img6, 
    link: 'https://8ballpool.com/en/game'
  },
  { 
    id: 9, 
    name: 'PUBG: Survival Challenge', 
    description: 'A 1v1 PUBG showdown with shrinking maps and survival tactics.',
    isPlayable: true,
    imageUrl: img7, 
    link: 'https://pubg.com/en'
  },
  { 
    id: 10, 
    name: 'Free Fire: Elite 1v1', 
    description: 'Intense one-on-one matches in Free Fire.',
    isPlayable: true,
    imageUrl: img4, 
    link: 'https://play.google.com/store/apps/details?id=com.dts.freefiremax&hl=en-US'
  },
  { 
    id: 11, 
    name: 'Call of Duty: Tactical Duel', 
    description: 'A one-on-one tactical mode with precision and strategy.',
    isPlayable: true,
    imageUrl: img2, 
    link: 'https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter&hl=en-US'
  },
  { 
    id: 12, 
    name: 'Ludo Royale: King’s Challenge', 
    description: 'A multiplayer Ludo variant with real-time gameplay.',
    isPlayable: true,
    imageUrl: img1, 
    link: 'https://play.google.com/store/apps/details?id=com.dn.games.ludo&hl=en-US'
  }
]
const GamePage = () => {
  const [loading, setLoading] = useState(false);

  const handlePlay = (game) => {
    if (game.isPlayable) {
      window.open(game.link, '_blank');
      setLoading(true);
      setTimeout(() => setLoading(false), 1000);
    } else {
      alert("This game is not playable directly. Please check the game details.");
    }
  };

  return (
    <div className="bg-[#2D3748] text-white min-h-screen p-8">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[400px] relative" style={{ backgroundImage: 'url(https://your-image-url.com)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-shadow-lg">Welcome to GaminGo</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="text-center my-8">
        <h2 className="text-4xl font-extrabold text-[#4ADE80]">Explore Our Games</h2>
        <p className="text-lg text-gray-400 mt-4">Choose your favorite game and start playing now!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <div key={game.id} className="bg-[#2D3748] rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <a href={game.link} target="_blank" rel="noopener noreferrer">
              <img 
                src={game.imageUrl} 
                alt={game.name} 
                className="w-full h-48 object-cover rounded-md mb-4 transition-all duration-300 hover:scale-105"
              />
            </a>

            <h3 className="text-2xl text-white font-semibold">{game.name}</h3>
            <p className="text-gray-400 mb-2">{game.description}</p>
            {game.price && <p className="text-gray-500 mb-4">{game.price}</p>}

            <button
              onClick={() => handlePlay(game)}
              className={`w-full py-3 px-5 rounded-full font-semibold text-white transition-all duration-300 ${game.isPlayable ? 'bg-[#4ADE80] hover:bg-[#38B2AC]' : 'bg-gray-600 cursor-not-allowed'}`}
              disabled={!game.isPlayable}
            >
              {game.isPlayable ? 'Play Now' : 'More Info'}
            </button>
          </div>
        ))}
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="bg-[#4ADE80] text-white text-center py-4 mb-8 rounded-lg">
          <p className="font-semibold">Loading your game...</p>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#2D3748] text-white py-12 mt-16 rounded-t-lg">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-sm mb-4">We bring you the best gaming experience. Join GaminGo and explore exciting games, stay updated, and enjoy endless fun!</p>
              <Link to="/about" className="text-[#4ADE80] hover:text-[#38B2AC] transition-all duration-300 text-sm">Learn More</Link>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul>
                <li><Link to="/" className="text-sm hover:text-[#38B2AC] transition-all duration-300">Home</Link></li>
                <li><Link to="/wallet" className="text-sm hover:text-[#38B2AC] transition-all duration-300">Wallet</Link></li>
                <li><Link to="/contact" className="text-sm hover:text-[#38B2AC] transition-all duration-300">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
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
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-gray-400">
            <p>&copy; 2025 GaminGo. All rights reserved.</p>
            <div className="mt-2">
              <Link to="/privacy" className="hover:text-[#38B2AC] transition-all duration-300">Privacy Policy</Link> | 
              <Link to="/terms" className="hover:text-[#38B2AC] transition-all duration-300"> Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GamePage;
