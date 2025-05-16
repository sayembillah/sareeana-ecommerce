import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">About Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to SHARIYANA by Shahida, where tradition meets modern elegance.
        We are passionate about bringing you the finest collection of Indian
        silk sarees, crafted with care and designed for the contemporary woman.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Our mission is to celebrate the timeless beauty of silk sarees while
        providing a seamless shopping experience. Each piece in our collection
        is selected for its quality, craftsmanship, and unique story.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Whether you are looking for everyday elegance or a special occasion
        statement, SHARIYANA by Shahida is your destination for exquisite sarees
        that inspire confidence and grace.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Our Values
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Quality craftsmanship and authentic materials</li>
          <li>Customer satisfaction and personalized service</li>
          <li>Respect for tradition with a modern touch</li>
          <li>Commitment to sustainability and ethical sourcing</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
