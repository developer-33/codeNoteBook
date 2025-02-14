import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { Home, Settings, Bell, User, MessageCircle, UserPlus } from "lucide-react";

const Sidebar = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md bg-white   text-red-700   dark:text-white dark:bg-orange-600 fixed top-4 left-4 z-50"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Background Overlay (Click to Close) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black z-40"
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed top-0 left-0 h-full w-64 bg-red-900 dark:bg-gray-500 dark:text-orange-500 text-white p-6 shadow-lg z-50"
      >
        <h2 className="text-xl font-bold mb-4">Sidebar Menu</h2>
        {/* Dark Mode Toggle Button */}
        <button onClick={toggleDarkMode} className="text-black dark:text-white text-xl mb-4">
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>

        {/* Sidebar Links */}
        <ul className="space-y-3">
          {/* Home Link */}
          <li>
            <Link
              to="/"
              className="block px-4 py-2 rounded-md hover:bg-orange-500"
              onClick={() => setIsOpen(false)}
            >
              <Home size={24} className="inline-block mr-2" />
              Home
            </Link>
          </li>

          {/* Profile Link */}
          <li>
            <Link
              to="/profile"
              className="block px-4 py-2 rounded-md hover:bg-orange-500"
              onClick={() => setIsOpen(false)}
            >
              <User size={24} className="inline-block mr-2" />
              Profile
            </Link>
          </li>

          {/* Messages Link */}
          <li>
            <Link
              to="/messages"
              className="block px-4 py-2 rounded-md hover:bg-orange-500"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle size={24} className="inline-block mr-2" />
              Messages
            </Link>
          </li>

          {/* Friends Link */}
          <li>
            <Link
              to="/friends"
              className="block px-4 py-2 rounded-md hover:bg-orange-500"
              onClick={() => setIsOpen(false)}
            >
              <UserPlus size={24} className="inline-block mr-2" />
              Friends
            </Link>
          </li>

          {/* Notifications Link */}
          <li>
            <Link
              to="/notifications"
              className="block px-4 py-2 rounded-md hover:bg-orange-500"
              onClick={() => setIsOpen(false)}
            >
              <Bell size={24} className="inline-block mr-2" />
              Notifications
            </Link>
          </li>

          {/* Settings Link */}
          <li>
            <Link
              to="/settings"
              className="block px-4 py-2 rounded-md hover:bg-orange-500"
              onClick={() => setIsOpen(false)}
            >
              <Settings size={24} className="inline-block mr-2" />
              Settings
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Sidebar;
