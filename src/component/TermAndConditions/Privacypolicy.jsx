import { Footer } from 'antd/es/layout/layout';
import React from 'react';
import Footers from '../Footer/Footers';
import NavBar from '../Navbar/Navbar';

function PrivacyPolicy() {
  return (
    <>
      <NavBar/>
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
          <h1 className="text-3xl font-semibold mb-6 text-[#ff5c2a]">Privacy Policy</h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
            <p>We collect personal information from You in various ways, including:</p>
            <ul className="list-disc pl-6 text-gray-500">
              <li>Information You provide when using Our website or services.</li>
              <li>Information collected automatically when You interact with Our website.</li>
              <li>Information provided by third parties with whom You have authorized the sharing of Your personal information.</li>
            </ul>
            {/* Add more content */}
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Use of Personal Information</h2>
            <p>We may use Your personal information for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-500">
              <li>Provide and improve Our services, including travel arrangements and reservations.</li>
              <li>Communicate with You regarding bookings, travel updates, and personalized offers.</li>
              {/* Add more content */}
            </ul>
            {/* Add more content */}
          </div>

          {/* Add more sections like '3. Disclosure of Personal Information', '4. Data Security', '5. Your Choices and Rights', etc. */}

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className='text-gray-500'>
              If You have any questions or concerns about this Privacy Policy or Our privacy practices, please contact Us at{' '}
              <a href="mailto:info@vagusbags.ind.in" className="text-blue-500">info@vagusbags.ind.in</a>
            </p>
          </div>
        </div>
      </div>
      <Footers/>
    </>
  );
}

export default PrivacyPolicy;
