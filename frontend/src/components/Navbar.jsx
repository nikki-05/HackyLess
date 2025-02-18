import React, { useState } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define base styles for light/dark modes
  const headerStyles = darkMode 
    ? "bg-gray-900 text-gray-100"
    : "bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 text-white";

  const mobileMenuStyles = darkMode
    ? "bg-gray-900 text-gray-100"
    : "bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 text-white";

  const linkHoverStyles = darkMode
    ? "hover:text-gray-300"
    : "hover:text-indigo-200";

  return (
    <header className={`sticky top-0 shadow-lg z-50 ${headerStyles}`}>
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <h1 className="text-3xl font-extrabold tracking-wide">Hackyless</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#features"
            className={`text-lg font-semibold transition duration-300 ${linkHoverStyles}`}
          >
            Features
          </a>
          <a
            href="#events"
            className={`text-lg font-semibold transition duration-300 ${linkHoverStyles}`}
          >
            Events
          </a>
          <a
            href="#contact"
            className={`text-lg font-semibold transition duration-300 ${linkHoverStyles}`}
          >
            Contact
          </a>
        </nav>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`ml-4 px-4 py-2 rounded-lg border font-semibold transition-all duration-300 ${
            darkMode
              ? "bg-black text-white border-gray-300 hover:bg-gray-800"
              : "bg-white text-black border-white hover:bg-gray-200"
          }`}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full md:hidden transition-transform transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } ${mobileMenuStyles}`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6">
          <li>
            <a
              href="#features"
              className={`text-xl font-medium transition duration-300 ${linkHoverStyles}`}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#events"
              className={`text-xl font-medium transition duration-300 ${linkHoverStyles}`}
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`text-xl font-medium transition duration-300 ${linkHoverStyles}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;