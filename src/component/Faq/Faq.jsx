// FAQSection.js
import React from 'react';
import { Collapse } from 'antd';
import './faq.scss'; // Your custom styles

const { Panel } = Collapse;

const FAQSection = () => {
    const faqData = [
        {
          question: 'What makes Vagus Bags stand out from other travel bag brands?',
          answer: 'Vagus Bags are crafted with a perfect blend of style and durability. Our commitment to quality ensures that your travel experience is enhanced with every journey. From innovative designs to functional features, we redefine how you carry your stories.'
        },
        {
          question: 'Where can I purchase Vagus Bags?',
          answer: 'You can explore and purchase Vagus Bags directly from our official website. Our online store provides a seamless shopping experience, ensuring you have access to our latest collections and exclusive offers.'
        },
        {
          question: 'What materials are used in the production of Vagus Bags?',
          answer: 'We prioritize quality materials in the production of Vagus Bags, ensuring they withstand the rigors of travel. Our bags are crafted with precision, using materials that embody durability and style.'
        },
        {
          question: 'Do Vagus Bags come with a warranty?',
          answer: 'Yes, all Vagus Bags are backed by our warranty to guarantee your satisfaction. Our commitment to excellence extends beyond the purchase, ensuring that your Vagus Bag remains a reliable companion on all your adventures.'
        },
        {
          question: 'Can I find Vagus Bags in physical retail stores?',
          answer: 'Vagus Bags are available for purchase exclusively through our online store. This allows us to provide a direct and personalized experience to our customers, ensuring the authenticity of each Vagus Bag.'
        },
        {
          question: 'Are there any upcoming releases or promotions for Vagus Bags?',
          answer: 'Stay connected with us through our newsletter and social media channels to be the first to know about our upcoming releases, exclusive promotions, and travel tips. Elevate your journey with Vagus Bags.'
        },
        // Add more questions and answers as needed
      ];
      
  return (
    <div className="container mx-auto py-8 p-12 drop-shadow-xl" id="faq">
      <h2 className="text-3xl font-bold mb-6 text-[#ff753e] ">Vagus Bags FAQs
    </h2>
       <Collapse accordion>
        {faqData.map((faq, index) => (
          <Panel header={faq.question} key={index.toString()}>
            <p>{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQSection;
