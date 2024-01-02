import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={toggleAnswer}>
      <h3>{question}</h3>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

export default FAQItem;
