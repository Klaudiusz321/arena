import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-800 via-black to-gray-900 text-white min-h-screen  flex flex-col items-center justify-center">
      {/* Nagłówek */}
      <h1 className="text-5xl font-bold tracking-wider text-center mb-8">
        CODE <span className="text-gray-400">DUEL</span>
      </h1>

      {/* Opis */}
      <p className="text-gray-300 text-lg text-center max-w-2xl mb-12">
        Welcome to the ultimate coding battle arena. Test your skills, challenge your friends, and rise to the top of the leaderboard!
      </p>

      {/* Przycisk akcji */}
      <div className="flex space-x-4">
        <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-lg shadow-md transition">
          Home
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-lg shadow-md transition">
          About Us
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-lg shadow-md transition">
          Duel
        </button>
      </div>

      {/* Ikony Social Media */}
      <div className="flex space-x-4 mt-12">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400"
        >
          <FaTwitter size={32} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600"
        >
          <FaLinkedin size={32} />
        </a>
      </div>
    </section>
  );
};

export default Home;
