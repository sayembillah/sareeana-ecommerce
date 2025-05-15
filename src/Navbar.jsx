import React, { useState, useRef, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

const categories = [
  { name: "Silk", href: "#" },
  { name: "Georgette", href: "#" },
  { name: "Cotton", href: "#" },
  { name: "Organza", href: "#" },
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
  const dropdownRef = useRef(null);

  // Close dropdown if click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
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

        <div className="relative group">
          <FaRegUser
            className="text-xl cursor-pointer hover:text-blue-600"
            aria-label="User account"
            tabIndex={0}
          />
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 text-xs bg-gray-800 text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none select-none">
            Account
          </span>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col space-y-3 px-6 py-4 text-sm font-medium">
            {categories.map((cat) => (
              <li key={cat.name}>
                <a
                  href={cat.href}
                  className="block hover:text-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {cat.name}
                </a>
              </li>
            ))}

            <li
              ref={dropdownRef}
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onKeyDown={handleDropdownKey}
              className="relative"
            >
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center justify-between w-full hover:text-gray-600 focus:outline-none"
              >
                More
                <svg
                  className={`ml-2 h-4 w-4 transition-transform duration-200 ${
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
              <a href={cat.href}>{cat.name}</a>
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
              More
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
          <li className="relative group">
            <FaRegUser
              className="cursor-pointer hover:text-blue-600"
              aria-label="User account"
              tabIndex={0}
            />
            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 text-xs bg-gray-800 text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none select-none">
              Account
            </span>
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
  );
};

export default Navbar;
