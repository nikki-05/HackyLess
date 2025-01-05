import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hackyless</h1>
        
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#events" className="hover:underline">Events</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        {/* Mobile Menu */}
        <div className={`absolute top-16 left-0 w-full bg-blue-600 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#events" className="hover:underline">Events</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
