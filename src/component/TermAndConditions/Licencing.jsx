import React from "react";
import NavBar from "../Navbar/Navbar";
import Footers from "../Footer/Footers";

function Licensing() {
  return (
    <>
      <NavBar/>
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
          <h1 className="text-3xl font-semibold mb-6 text-[#ff5c2a]">
            Licensing
          </h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              1. Licensing Information
            </h2>
            <p>
              At Vagus Bags, we ensure compliance with industry standards and regulations through our licensing and certifications. Our licenses include:
            </p>
            <ul className="list-disc pl-6">
              <li>[License/Certification Name 1]</li>
              <li>[License/Certification Name 2]</li>
              {/* Add more license/certification names if applicable */}
            </ul>
            <p>
              These licenses and certifications validate our commitment to quality, craftsmanship, and adherence to regulatory requirements in the travel bag industry.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              2. Licensing Compliance
            </h2>
            <p>
              We strictly adhere to the guidelines and standards set forth by regulatory bodies governing the travel bag industry. Compliance with licensing requirements is fundamental to our operations, ensuring the highest level of professionalism and ethical conduct.
            </p>
            {/* Add more content */}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>
              For any inquiries or further information regarding our licensing and certifications, please contact us at{" "}
              <a
                href="mailto:info@vagusbags.ind.in"
                className="text-blue-500"
              >
                info@vagusbags.ind.in
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
}

export default Licensing;
