import React from 'react';
import Footers from '../Footer/Footers';
import NavBar from '../Navbar/Navbar';

function CookiesPolicy() {
  return (
    <>
      <NavBar/>
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
          <h1 className="text-3xl font-semibold mb-6 text-[#ff5c2a]">Cookies Policy</h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. What are Cookies?</h2>
            <p>Cookies are small pieces of data stored on your device (computer or mobile device) when you visit a website. They are commonly used to make websites work more efficiently, enhance user experience, and provide anonymized tracking data to website owners.</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Types of Cookies We Use</h2>
            <p>We use the following types of cookies on our website:</p>
            <ul className="list-disc pl-6">
              <li>Essential cookies: Necessary for the functioning of the website.</li>
              <li>Analytical/performance cookies: Used to analyze how users interact with the website.</li>
              <li>Functionality cookies: Enable enhanced functionality and personalization.</li>
              {/* Add more types if applicable */}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Managing Cookies</h2>
            <p>You can manage or delete cookies based on your preferences. Most web browsers allow you to control cookies through their settings. Please note that disabling certain cookies may affect the functionality of the website.</p>
            {/* Add more content */}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions or concerns regarding our Cookies Policy, please contact us at{' '}
              <a href="mailto:info@vagusbags.ind.in" className="text-blue-500">info@vagusbags.ind.in</a>.
            </p>
          </div>
        </div>
      </div>
      <Footers/>
    </>
  );
}

export default CookiesPolicy;
