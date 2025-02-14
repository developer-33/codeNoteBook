import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import { FaUserShield, FaComments, FaTrophy } from "react-icons/fa"; 
import Wallpaper from "./Wallpaper";

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-700 to-black dark:from-black dark:via-gray-800 dark:to-gray-900"></div>

      {/* Wallpaper Component */}
      <Wallpaper />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-extrabold text-white dark:text-gray-300 neon-text">
          Welcome to CarX Street Underground
        </h1>
        <p className="text-lg text-gray-300 dark:text-gray-400 mt-4 max-w-xl mx-auto">
          The ultimate underground racing community. Tune, race, and dominate.
        </p>
        
        <div className="mt-6 flex gap-4 justify-center">
          <Link to="/login">
            <button className="px-6 py-3 text-lg font-semibold rounded-lg bg-red-600 hover:bg-red-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg glow-btn">
              Get Started
            </button>
          </Link>
          <Link to="/about">
            <button className="px-6 py-3 text-lg font-semibold rounded-lg border border-white text-white hover:bg-white hover:text-black dark:border-gray-400 dark:text-gray-300 dark:hover:bg-gray-400 dark:hover:text-black transition-all duration-300 shadow-lg">
              Learn More
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3 max-w-5xl z-10"
      >
        {/* Feature Cards */}
        {[
          { icon: <FaUserShield className="text-4xl text-red-400 dark:text-gray-400" />, title: "Custom Profiles", desc: "Personalize your space with themes and avatars." },
          { icon: <FaComments className="text-4xl text-pink-400 dark:text-gray-400" />, title: "Community Chats", desc: "Join topic-based chatrooms and connect in real-time." },
          { icon: <FaTrophy className="text-4xl text-yellow-400 dark:text-gray-400" />, title: "Leaderboards", desc: "Compete for top ranks and exclusive rewards." }
        ].map((feature, index) => (
          <div key={index} className="feature-card dark:feature-card-dark">
            {feature.icon}
            <h3 className="text-xl font-semibold mt-2">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-5 text-gray-500 text-sm z-10 dark:text-gray-400">
        &copy; {new Date().getFullYear()} CyberNet | All Rights Reserved
      </footer>

      {/* Extra Styles */}
      <style>
        {`
         .neon-text {
            text-shadow: 0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6);
         }
         .glow-btn {
            box-shadow: 0 0 8px rgba(255, 0, 0, 0.8);
         }
         .feature-card {
            background: rgba(255, 200, 200, 0.8);
            padding: 20px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
            text-align: center;
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
            transition: transform 0.3s ease-in-out;
         }
         .feature-card:hover {
            transform: scale(1.05);
         }

         /* Dark Mode */
         .dark .neon-text {
            text-shadow: 0 0 10px rgba(150, 150, 150, 0.8), 0 0 20px rgba(150, 150, 150, 0.6);
         }
         .dark .glow-btn {
            box-shadow: 0 0 8px rgba(150, 150, 150, 0.8);
         }
         .dark .feature-card {
            background: rgba(40, 40, 40, 0.8);
            box-shadow: 0 0 10px rgba(150, 150, 150, 0.3);
         }
        `}
      </style>
    </div>
  );
}

export default Home;
