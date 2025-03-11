"use client";

import { useState } from "react";

function FaqItem({ question, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-gray-100 rounded overflow-hidden animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button
        className="w-full px-3 py-2 flex justify-between items-center text-black hover:text-teal-400 transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left font-medium">{question}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          {isOpen ? (
            // Minus symbol (when open)
            <path
              fillRule="evenodd"
              d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          ) : (
            // Plus symbol (when closed)
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
      <div
        className={`px-4 pb-3 text-gray-300 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="py-2 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const faqItems = [
    "What is cryptocurrency?",
    "How do I start trading on TNC Crypto?",
    "How do I buy cryptocurrency?",
    "What security measures does TNC Crypto implement?",
    "What is a digital wallet?",
    "Can I access TNC Crypto on my mobile device?",
    "Is cryptocurrency safe?",
    "How do I withdraw my funds from TNC Crypto?",
    "Are cryptocurrency transactions anonymous?",
    "What fees are associated with trading on TNC Crypto?",
    "What is blockchain?",
    "Do you offer any educational resources for beginners?",
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-black text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Discover quick answers to common queries in our comprehensive
          Frequently Asked Questions section, providing insights into all
          aspects of TNC Crypto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqItems.map((question, index) => (
            <FaqItem key={index} question={question} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
