import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserFriends, FaBell, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Toggle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-red-700 text-white   dark:text-red-700  dark:bg-gray-600 fixed top-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        
        {/* Left Section - Logo */}
        <Link to="/" className="text-2xl font-bold  text-white   dark:text-orange-600 ">
          Car X Street Underground
        </Link>

        {/* Center Section - Search Bar (Hidden on Small Screens) */}
        <div className="hidden md:flex bg-gray-800 dark:bg-gray-700 rounded-full px-4 py-1 w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none text-white px-2 w-full"
          />
        </div>

        {/* Right Section - Icons & Dark Mode Toggle */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-xl hover:text-cyan-400"><FaHome /></Link>
          <Link to="/friends" className="text-xl hover:text-gray-400"><FaUserFriends /></Link>
          {/* <Link to="/notifications" className="text-xl hover:text-cyan-400"><FaBell /></Link> */}
          <Link to="/notebook" className="text-xl hover:text-cyan-400"><FaBell /></Link>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className=" flex items-center gap-2">
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl text-black dark:text-white focus:outline-none">
              <FaUserCircle />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 dark:bg-gray-700 shadow-md rounded-lg">
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-700">Profile</Link>
                <Link to="/settings" className="block px-4 py-2 hover:bg-gray-700">Settings</Link>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-700">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu - Hidden on Desktop */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-white py-4 px-6 absolute top-0 left-0 w-full z-40">
          <Link to="/" className="block py-2">Home</Link>
          <Link to="/friends" className="block py-2">Friends</Link>
                                                                                                           */}
          <Link to="/profile" className="block py-2">Profile</Link>
          {/* <Link to="/settings" className="block py-2">Settings</Link> */}
          <Link to="/notebooks" className="block py-2">Settings</Link>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="flex items-right gap-2 py-2">
            {isDarkMode ? <FiSun /> : <FiMoon />}
        
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
