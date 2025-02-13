// src/components/RateCardModal.js
import React, { useState } from 'react';
import { FaInfoCircle, FaTimes, FaWhatsapp } from 'react-icons/fa'; // Import the necessary icons

const RateCardModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative">
      {/* Button with Icon */}
      <button
        onClick={toggleModal}
        className="fixed bottom-6 right-6 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 focus:outline-none z-50"
      >
        <FaInfoCircle size={28} />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed bottom-16 right-6 z-40">
          {/* Modal Content */}
          <div className="bg-gradient-to-r from-indigo-600 to-teal-600 w-80 rounded-lg p-6 shadow-xl relative">
            {/* Close Icon */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
            >
              <FaTimes />
            </button>
            <h2 className="text-center text-2xl font-semibold text-white mb-4">Rate Card & Information</h2>
            <div className="text-center mb-4 text-white">
              <p className="text-lg font-medium mb-2">💰 Deposit: ₹100</p>
              <p className="text-lg font-medium mb-2">🏆 Winning: ₹185</p>
              <p className="text-sm mb-2">📉 15% Deduction on Transaction & Winning Prize</p>
              <p className="text-md mt-4">For more details and support, join our WhatsApp group:</p>
              <div className="flex justify-center items-center mt-4">
                <a
                  href="https://chat.whatsapp.com/KCwLBp6RVn9FgyX9xDvJdN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-green-600"
                >
                  <FaWhatsapp size={24} />
                  <span>Join WhatsApp Group</span>
                </a>
              </div>
            </div>

            {/* Terms and Conditions Link */}
            <div className="text-center mt-4 text-sm text-white">
              <p>
                By using the service, you agree to our{' '}
                <a
                  href="/terms-conditions" // You can replace this with the actual path of your Terms and Conditions page
                  className="underline hover:text-teal-400"
                >
                  Terms and Conditions
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RateCardModal;
