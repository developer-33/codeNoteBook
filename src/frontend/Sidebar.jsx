import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { Home, Settings, Bell, User } from "lucide-react";

const Sidebar = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md bg-white dark:bg-gray-900 fixed top-4 left-4 z-50"
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
        className="fixed top-0 left-0 h-full w-64 bg-red-900 dark:bg-gray-400   text-white p-6 shadow-lg z-50"
      >
        <h2 className="text-xl font-bold mb-4">Sidebar Menu</h2>
        <button onClick={toggleDarkMode} className="text-black dark:text-white text-xl">
              {isDarkMode ? <FiSun /> : <FiMoon />}
            </button>
        <ul className="space-y-3">
          <li>
          <div>
     
            <br />
        <Bell size={24} />
        <User size={24} />
       <Settings size={24}  />
          </div>
            <Link
              to="/"
              className="block px-4 py-2 rounded-md hover:bg-orange-500"
              onClick={() => setIsOpen(false)}
                 
            >   
            
                 <Home size={24} />

          Home
            </Link>
           
          </li>
        
          <li>
            <Link
              to="/profile"
              className="block px-4 py-2 rounded-md hover:bg-orange-500"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Sidebar;
    