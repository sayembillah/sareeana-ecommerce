import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full flex justify-between items-center py-4 text-left text-gray-900 font-semibold focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && <div className="pb-4 text-gray-700">{children}</div>}
    </div>
  );
};

const Faq = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        Frequently Asked Questions
      </h1>

      <AccordionItem title="Delivery Charges and Options">
        <p>
          We offer various delivery options including standard and express
          shipping. Delivery charges depend on your location and the selected
          shipping method. Free shipping is available on orders over BDT 5000.
        </p>
      </AccordionItem>

      <AccordionItem title="Privacy Policy">
        <p>
          We respect your privacy and are committed to protecting your personal
          information. We do not share your data with third parties without your
          consent. For more details, please read our full privacy policy on our
          website.
        </p>
      </AccordionItem>

      <AccordionItem title="Terms and Conditions">
        <p>
          By using our website and services, you agree to our terms and
          conditions. Please review them carefully before making a purchase.
        </p>
      </AccordionItem>

      <AccordionItem title="Return Policy">
        <p>
          We accept returns within 14 days of delivery for unused and undamaged
          products. Please contact our support team to initiate a return.
          Refunds will be processed after the returned item is inspected.
        </p>
      </AccordionItem>

      <AccordionItem title="Payment Methods">
        <p>
          We accept multiple payment methods including credit/debit cards,
          mobile payments, and cash on delivery.
        </p>
      </AccordionItem>

      <AccordionItem title="Order Tracking">
        <p>
          After placing your order, you will receive a tracking number via email
          or SMS to monitor your shipment status.
        </p>
      </AccordionItem>
    </div>
  );
};

export default Faq;
