import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">SAREEANA</h2>
          <p className="text-sm">
            Elegant and timeless collections tailored for the modern woman.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-white">
                Cart
              </a>
            </li>
            <li>
              <a href="/checkout" className="hover:text-white">
                Checkout
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/faq" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/shipping" className="hover:text-white">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social / Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Stay Connected
          </h3>
          <p className="text-sm mb-3">
            Follow us on social media for updates and offers.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              🌐
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              📸
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              🐦
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white">
              ▶️
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} SareeStyle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
