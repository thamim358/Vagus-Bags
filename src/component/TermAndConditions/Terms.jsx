
import React, { useEffect } from "react";
import WOW from "wow.js";
import NavBar from "../Navbar/Navbar";
import Footers from "../Footer/Footers";

export const Terms = () => {


  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);



  return (
    <>
      <NavBar/>
      <section id="terms">
        <div
          className="section pb-10 min-h-screen p-6"
          id="terms"
          style={{ textAlign: "justify", textJustify: "auto" }}
        >
          <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
            <p className="text-4xl sm:text-4xl lg:text-5xl text-[#ff5c2a] font-Achi font-bold text-center wow fadeInUp pt-4 ">
              Terms And Conditions
            </p>
            <div className="">
              <p className="mt-6 text-gray-500 text-base  wow fadeInUp">
                Welcome to Vagus Bags, your trusted provider of travel bags and accessories. By using our services, you agree to comply with and be bound by the following terms and conditions:
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">1. Acceptance of Terms</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                By accessing or using the services provided by Vagus Bags, you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">2. Services</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Vagus Bags offers a range of travel bags and accessories. The specific details, including pricing, availability, and delivery, will be outlined in the product listings or order confirmations.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">3. Customer Responsibilities</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Customers are responsible for providing accurate and up-to-date information when placing orders. Delays in providing necessary information may affect order processing and delivery timelines.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">4. Payment</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Payment terms will be outlined during the checkout process. Customers are required to adhere to the payment terms specified at the time of purchase. Failure to make timely payments may result in order cancellation or delay.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">5. Intellectual Property</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                All designs, logos, and other materials created by Vagus Bags are the intellectual property of Vagus Bags. Customers are granted a non-exclusive license to use the products for personal use only. Unauthorized use, reproduction, or distribution of our designs is strictly prohibited.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">6. Confidentiality</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Vagus Bags agrees to keep all customer information confidential. We will not disclose any sensitive information to third parties without the customer's explicit consent.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">7. Changes to Terms</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Vagus Bags reserves the right to make changes to these terms and conditions at any time without prior notice. Customers will be notified of any significant changes that may affect their rights or obligations.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">8. Dispute Resolution</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Any disputes arising from or relating to these terms and conditions will be resolved through arbitration in accordance with the laws of [Your Jurisdiction] before resorting to litigation.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">9. Limitation of Liability</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Vagus Bags is not liable for any indirect, incidental, or consequential damages arising from the use of our services or products. Our total liability for any claim shall not exceed the total amount paid by the customer for the specific order.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">10. Governing Law</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction].
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">11. Contact Information</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                If you have any questions or concerns regarding these terms and conditions, please contact us at{" "}
                <a href="mailto:info@vagusbags.ind.in">info@vagusbags.ind.in</a>.
              </p>

              <p>These terms and conditions were last updated on 2024.</p>
            </div>
          </div>
        </div>
      </section>
      <Footers/>
    </>
  );
};

export default Terms;
