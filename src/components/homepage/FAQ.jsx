// src/components/FAQ.js
import React, { useState } from 'react';

const faqData = [
  {
    question: "What is your return policy?",
    answer: "You can return any item within 30 days for a full refund.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping usually takes 3-5 business days.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide with additional shipping charges.",
  },
  {
    question: "Can I change my order after it's been placed?",
    answer: "Unfortunately, once an order is placed, we cannot make changes. Please double-check your order before confirming.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-10"data-aos="fade-right">
      <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-2">
            <h3
              className="cursor-pointer text-xl font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </h3>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
