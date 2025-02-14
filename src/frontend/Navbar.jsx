import { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const NavBar = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-400 dark:bg-black shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-black dark:text-white">
            MyWebsite
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-black dark:text-white hover:text-gray-500">
              Home
            </a>
            <a href="/notebook" className="text-black dark:text-white hover:text-gray-500">
              Notebook
            </a>
            <a href="/profile" className="text-black dark:text-white hover:text-gray-500">
              Profile
            </a>
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="text-black dark:text-white text-xl">
              {isDarkMode ? <FiSun /> : <FiMoon />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-black dark:text-white text-xl"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4">
            <a href="/" className="text-black dark:text-white text-center hover:text-gray-500">
              Home
            </a>
            <a href="/notebook" className="text-black dark:text-white text-center hover:text-gray-500">
              Notebook
            </a>
            <a href="#" className="text-black dark:text-white text-center hover:text-gray-500">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar