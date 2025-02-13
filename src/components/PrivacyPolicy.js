import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#4ADE80] text-black min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto p-8 bg-[#2D3748] text-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-[#38B2AC] mb-8">Privacy Policy for GamingGo</h1>
        <p className="text-lg text-center mb-6">Effective Date: 11-02-2025 08:54 AM</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#38B2AC] mb-4">1. Introduction</h2>
          <p className="leading-relaxed mb-4 text-sm sm:text-base">
            Welcome to GamingGo. We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website and gaming services, including mobile applications and any other related services (collectively referred to as "Services").
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            By accessing or using our Services, you agree to this Privacy Policy. If you do not agree with the terms of this policy, please do not use our Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#38B2AC] mb-4">2. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li><strong>Personal Information:</strong> When you register on our platform, we may ask for details such as your name, email address, phone number, date of birth, and address.</li>
            <li><strong>Game-Related Information:</strong> This includes user interactions, in-game behavior, scores, performance, rankings, and achievements.</li>
            <li><strong>Device and Log Data:</strong> We may collect information such as your IP address, browser type, operating system, device identifiers, and browsing activity on our platform.</li>
            <li><strong>Payment Information:</strong> If you make any in-game purchases or subscribe to paid services, we may collect your payment details via a secure payment gateway.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#38B2AC] mb-4">3. Use of Information</h2>
          <p className="leading-relaxed mb-4 text-sm sm:text-base">
            The information we collect is used for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>To create and manage your account and profile.</li>
            <li>To enable and improve your gaming experience, including providing personalized recommendations.</li>
            <li>To process payments and provide you with in-game purchases or subscriptions.</li>
            <li>To send you service-related communications, such as account updates, promotions, and customer support responses.</li>
            <li>To monitor and improve our platform’s security, detect fraud, and enforce our terms and conditions.</li>
            <li>To comply with legal obligations, including anti-money laundering (AML) and Know Your Customer (KYC) regulations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#38B2AC] mb-4">4. Sharing of Information</h2>
          <p className="leading-relaxed mb-4 text-sm sm:text-base">
            We do not sell, rent, or trade your personal information. However, we may share information in the following cases:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li><strong>With Third-Party Service Providers:</strong> We may share your information with trusted third-party vendors who perform services on our behalf, such as hosting, payment processing, and marketing.</li>
            <li><strong>With Law Enforcement or Regulatory Authorities:</strong> In compliance with the Information Technology Act, 2000, we may disclose your personal information if required to do so by law or in response to legal processes.</li>
            <li><strong>In the Event of a Merger or Acquisition:</strong> If our business undergoes a merger, acquisition, or asset sale, your personal information may be transferred as part of the transaction.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#38B2AC] mb-4">5. Data Security</h2>
          <p className="leading-relaxed mb-4 text-sm sm:text-base">
            We take appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, or misuse. However, please be aware that no method of data transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#38B2AC] mb-4">6. User Rights</h2>
          <p className="leading-relaxed mb-4 text-sm sm:text-base">
            Under the Information Technology Act, 2000, you have the following rights with regard to your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li><strong>Access:</strong> You have the right to request information about the personal data we hold about you.</li>
            <li><strong>Correction:</strong> You may request corrections to any inaccurate or incomplete data.</li>
            <li><strong>Deletion:</strong> You can request the deletion of your personal information, subject to certain exceptions under the law.</li>
            <li><strong>Opt-out of Marketing:</strong> You may opt out of receiving marketing communications by following the unsubscribe link in the emails or contacting us directly.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#38B2AC] mb-4">7. Compliance with Online Gaming Regulations</h2>
          <p className="leading-relaxed mb-4 text-sm sm:text-base">
            As an online gaming platform, we are committed to complying with the legal frameworks set forth by the Online Gaming (Regulation) Rules under the Information Technology Act, 2000 and other relevant laws in India. These rules require that we:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>Implement age verification checks to ensure users are above the legal age for online gaming.</li>
            <li>Take measures to prevent gambling addiction and adhere to responsible gaming practices.</li>
            <li>Adhere to the guidelines on anti-money laundering (AML) and fraud prevention.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#38B2AC] mb-4">8. Cookies and Tracking Technologies</h2>
          <p className="leading-relaxed mb-4 text-sm sm:text-base">
            We use cookies and similar tracking technologies to enhance your experience and collect usage data. Cookies help us improve the functionality of our platform and provide personalized content. You may set your browser to refuse cookies or alert you when cookies are being sent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#38B2AC] mb-4">9. Changes to This Privacy Policy</h2>
          <p className="leading-relaxed mb-4 text-sm sm:text-base">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make changes, we will update the "Effective Date" at the top of this policy. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#38B2AC] mb-4">10. Contact Us</h2>
          <p className="leading-relaxed mb-4 text-sm sm:text-base">
            If you have any questions or concerns about this Privacy Policy, or if you wish to exercise your rights, please contact us at:
          </p>
          <p className="mb-2 text-sm sm:text-base">Email: <span className="font-semibold text-[#38B2AC]">GaminGosupport@gmail.com</span></p>
          <p className="mb-4 text-sm sm:text-base">WhatsApp: <span className="font-semibold text-[#38B2AC]">7879680488</span></p>
          <Link to='/contact' className="text-[#38B2AC] hover:underline">Contact us</Link>
        </section>
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
                <a href="https://youtube.com/c/YourChannel" target="_blank" rel="noopener noreferrer" className="hover:text-[#38B2AC] transition-all duration-300">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#4ADE80]">Subscribe to Newsletter</h3>
              <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                  type="email"
                  placeholder="Your email"
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

export default PrivacyPolicy;
