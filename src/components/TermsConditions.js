// src/components/TermsConditions.js
import React, { useState } from 'react';

const TermsConditions = () => {
  const [language, setLanguage] = useState('en'); // default language: English

  const englishTerms = {
    title: 'Ludo Game Terms & Conditions',
    deposit: 'Deposit: ₹100',
    winning: 'Winning: ₹185',
    deduction: '15% Deduction on every transaction and on every winning prize.',
    gameRules: [
      'Before starting the game, decide the number of rounds with your group and send it to the group.',
      'The second player must agree to the decision for the game to proceed.',
      'After the transaction, you must play at least 2 games. If not, no refund will be provided.',
      'If there is an internet issue, the player will be responsible, and no refund will be given.',
      'If the match ends in a draw, no refund will be given to either player.'
    ],
    tournamentRules: [
      'To join the tournament, pay ₹120.',
      'The tournament will last 1 week.',
      'Final match on Sunday at 8:00 PM will be live.',
    ]
  };

  const hindiTerms = {
    title: 'लूडो खेल की शर्तें और नियम',
    deposit: 'जमा राशि: ₹100',
    winning: 'जीत: ₹185',
    deduction: 'प्रत्येक लेन-देन और प्रत्येक जीतने वाली राशि पर 15% कटौती होगी।',
    gameRules: [
      'खेल शुरू करने से पहले, अपने समूह से राउंड की संख्या तय करें और उसे समूह में भेजें।',
      'दूसरे खिलाड़ी को आपके निर्णय से सहमत होना चाहिए ताकि खेल शुरू हो सके।',
      'लेन-देन के बाद आपको कम से कम 2 खेल खेलना आवश्यक होगा। यदि ऐसा नहीं होता है, तो कोई रिफंड नहीं मिलेगा।',
      'अगर इंटरनेट में कोई समस्या आती है तो खिलाड़ी जिम्मेदार होगा और रिफंड नहीं मिलेगा।',
      'यदि मैच ड्रॉ हो जाता है तो दोनों खिलाड़ियों को रिफंड नहीं मिलेगा।'
    ],
    tournamentRules: [
      'टूर्नामेंट में भाग लेने के लिए ₹120 का भुगतान करें।',
      'टूर्नामेंट 1 सप्ताह तक चलेगा।',
      'अंतिम मैच रविवार को रात 8:00 बजे होगा, और वह लाइव होगा।'
    ]
  };

  const terms = language === 'en' ? englishTerms : hindiTerms;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800">{terms.title}</h1>
      
      <div className="my-4 p-4 bg-gray-50 rounded-lg shadow-sm">
        <p className="text-lg font-medium">{terms.deposit}</p>
        <p className="text-lg font-medium">{terms.winning}</p>
        <p className="text-lg font-medium">{terms.deduction}</p>
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-semibold text-gray-700">Game Play Rules</h2>
        <ul className="list-disc pl-5 space-y-2">
          {terms.gameRules.map((rule, index) => (
            <li key={index} className="text-gray-600">{rule}</li>
          ))}
        </ul>
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-semibold text-gray-700">Tournament Rules</h2>
        <ul className="list-disc pl-5 space-y-2">
          {terms.tournamentRules.map((rule, index) => (
            <li key={index} className="text-gray-600">{rule}</li>
          ))}
        </ul>
      </div>

      <div className="text-center mt-6">
        <button 
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')} 
          className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none"
        >
          Switch to {language === 'en' ? 'Hindi' : 'English'}
        </button>
      </div>
    </div>
  );
};

export default TermsConditions;
