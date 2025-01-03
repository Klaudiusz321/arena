import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'; // Dodajemy ikony z react-icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-gray-900 border border-white rounded-lg shadow-md m-4 p-4 font-Realeway">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold self text-white">
              CodeDuel
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link to="/duel" className="text-white hover:text-gray-300">
              Duel
            </Link>
          </div>

          {/* Ikony Social Media */}
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-white rounded-b-lg">
          <Link
            to="/"
            className="block px-4 py-2 text-white hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-white hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/duel"
            className="block px-4 py-2 text-white hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Duel
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
