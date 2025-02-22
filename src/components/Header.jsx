import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-3 bg-green-800 shadow-md">
      <div className="flex justify-between items-center w-full md:w-auto">
        <span className="font-bold text-xl text-white">Better</span>
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
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
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex md:items-center w-full md:w-auto mt-2 md:mt-0`}
      >
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-white">
          <Link to={'/'} className="block md:inline-block">
            <li className="hover:text-gray-300">Home</li>
          </Link>
          <Link to={'/aboutus'} className="block md:inline-block">
            <li className="hover:text-gray-300">About us</li>
          </Link>
          <Link to={'/Startpage'} className="block md:inline-block">
            <li className="hover:text-gray-300">Start Page</li>
          </Link>
          <Link to={'/calculator'} className="block md:inline-block">
            <li className="hover:text-gray-300">Mortgage Calculator</li>
          </Link>
        </ul>
      </div>

      <div className="hidden md:block">
        <button className="font-bold text-xl px-4 py-1 rounded-2xl hover:bg-white hover:text-black transition-colors duration-300">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;