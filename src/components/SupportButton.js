// src/components/SupportButton.js
import React, { useState } from 'react';
import { FaHeadset } from 'react-icons/fa'; // Support/Help icon (headset)

const SupportButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative">
      {/* Support Icon Button */}
      <button
        onClick={toggleModal}
        className="fixed bottom-28 right-6 bg-gradient-to-r from-cyan-400 to-teal-500 text-white p-5 rounded-full shadow-xl hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-600 focus:outline-none z-50 transition duration-300 transform hover:scale-110"
      >
        <FaHeadset size={28} />
      </button>

      {/* Modal for Support */}
      {isModalOpen && (
        <div className="fixed bottom-36 right-6 bg-gradient-to-r from-indigo-600 to-cyan-600 shadow-2xl rounded-lg w-96 p-8 z-40 transition transform duration-300 ease-in-out">
          <div className="relative">
            {/* Close Icon */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-white text-3xl hover:text-gray-300"
            >
              ✖️
            </button>
            <h2 className="text-center text-3xl font-bold text-white mb-5">Need Support?</h2>
            <div className="text-center text-white">
              <p className="mb-6 text-lg">We're here to help! Reach out for any assistance you need. We will get back to you as soon as possible.</p>
              <p className="text-lg mt-5">To contact us, click below:</p>
              <div className="flex justify-center items-center mt-6">
                <a
                  href="/contact" // Link to your contact page
                  className="bg-teal-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300 transform hover:scale-105"
                >
                  Go to Contact Page
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportButton;
