import React from 'react';
import FAQItem from './FAQItem';
import "./FAQ.css"
const FAQPage = () => {
  const faqData = [
    {
      question: "What makes your designer eyewear unique?",
      answer: " we curate a collection of premium designer eyewear with a focus on the latest trends and superior craftsmanship.",
    },
    {
      question: "Do you offer prescription lenses with your eyewear?",
      answer: " Yes, we provide prescription lenses for a wide range of eyewear styles. Our experienced opticians will ensure your lenses are crafted to perfection, meeting your vision needs with precision.",
    },
    {
      question: "What are the shipping options and delivery times?",
      answer: " We offer various shipping options, including standard and expedited shipping. Delivery times may vary based on your location and the shipping method chosen. You can find detailed information during the checkout process.",
    },
    {
      question: " How can I contact customer support?",
      answer: "For any inquiries or assistance, our customer support team is ready to help. You can reach us through our [Contact Us] page, and we'll respond promptly to address your concerns.",
    },
    {
      question: " Are your products covered by a warranty?",
      answer: "Some of our designer eyewear comes with a manufacturer's warranty. The warranty period may vary by brand, so please refer to the product details or contact our customer service for specific information.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQPage;
