import React, { useEffect, useRef, useState } from "react";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { Outlet, Link } from "react-router-dom";

const categories = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
];

const moreCategories = [
  { name: "Kanzivarma", href: "#" },
  { name: "Sanjana", href: "#" },
  { name: "Tangail", href: "#" },
  { name: "Daraz 420", href: "#" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const userDropdownRef = useRef(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }

      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setUserDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard on dropdown toggle
  const handleDropdownKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setDropdownOpen((prev) => !prev);
    }
    if (e.key === "Escape") {
      setDropdownOpen(false);
    }
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        {/* Mobile Navbar */}
        <div className="flex items-center justify-between px-6 py-4 md:hidden">
          <button
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          <a
            href="/"
            className="text-lg font-bold tracking-wide"
            aria-label="Homepage"
          >
            SHARIYANA by Shahida
          </a>

          <IoCartOutline
            className="text-2xl hover:text-blue-600 cursor-pointer"
            aria-label="Cart"
          />
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
            <ul className="flex flex-col space-y-3 px-6 py-4 text-sm font-medium">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    to={cat.href}
                    className="block hover:text-gray-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}

              {/* Dropdown for Categories */}
              <li ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex items-center justify-between w-full hover:text-gray-600 focus:outline-none"
                >
                  Categories
                  <svg
                    className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <ul className="mt-2 ml-4 border-l border-gray-300 pl-4 space-y-1">
                    {moreCategories.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="block hover:text-gray-600"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setDropdownOpen(false);
                          }}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Divider */}
              <hr className="my-2 border-gray-300" />

              {/* Account Section */}
              <li>
                <span className="text-gray-500 text-xs uppercase">Account</span>
                <ul className="ml-4 space-y-2 mt-1">
                  <li>
                    <a href="/signin" className="block hover:text-gray-600">
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a href="/signup" className="block hover:text-gray-600">
                      Sign Up
                    </a>
                  </li>
                </ul>
              </li>

              {/* Wishlist */}
              <li>
                <a href="/wishlist" className="block hover:text-gray-600">
                  Wishlist
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between w-full h-[70px] px-20">
          {/* Categories */}
          <ul className="flex gap-6 text-sm font-medium" role="menubar">
            {categories.map((cat) => (
              <li
                key={cat.name}
                className={`cursor-pointer hover:text-gray-600 transition-colors duration-200 ${
                  cat.name === "Silk"
                    ? "text-blue-600 font-semibold underline underline-offset-4"
                    : ""
                }`}
                role="menuitem"
                tabIndex={0}
              >
                <Link to={cat.href}>{cat.name}</Link>
              </li>
            ))}

            {/* Dropdown */}
            <li
              className="relative group cursor-pointer"
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              ref={dropdownRef}
              onKeyDown={handleDropdownKey}
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
            >
              <span className="hover:text-gray-600 select-none flex items-center">
                Categories
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <ul
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-10 overflow-hidden"
                  role="menu"
                >
                  {moreCategories.map((item) => (
                    <li key={item.name} className="text-sm" role="none">
                      <a
                        href={item.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Logo */}
          <a
            href="/"
            className="text-lg md:text-xl font-bold tracking-wide"
            aria-label="Homepage"
          >
            SHARIYANA <span className="text-sm italic text-gray-600">by</span>
            <span className="text-gray-600 font-thin"> Shahida</span>
          </a>

          {/* Icons */}
          <ul className="flex gap-6 text-xl">
            <li
              className="relative"
              ref={userDropdownRef}
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={userDropdownOpen}
            >
              <button
                onClick={() => setUserDropdownOpen((prev) => !prev)}
                className="text-xl hover:text-blue-600 focus:outline-none"
                aria-label="User account"
              >
                <FaRegUser />
              </button>

              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 text-xs bg-gray-800 text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none select-none">
                Account
              </span>

              {userDropdownOpen && (
                <ul className="absolute top-full right-0 mt-2 w-36 bg-white shadow-lg rounded-lg border border-gray-200 z-10">
                  <li>
                    <Link
                      to="/signin"
                      onClick={() => setUserDropdownOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      onClick={() => setUserDropdownOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative group">
              <FaRegHeart
                className="cursor-pointer hover:text-blue-600"
                aria-label="Wishlist"
                tabIndex={0}
              />
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 text-xs bg-gray-800 text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none select-none">
                Wishlist
              </span>
            </li>
            <li className="relative group">
              <IoCartOutline
                className="cursor-pointer hover:text-blue-600"
                aria-label="Shopping cart"
                tabIndex={0}
              />
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 text-xs bg-gray-800 text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none select-none">
                Cart
              </span>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
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
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
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
    </>
  );
};

export default Navbar;
