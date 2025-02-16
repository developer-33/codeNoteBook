import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
 
import Wallpaper from "../components/Wallpaper";
import HomePageCards from "../components/HomePageCards";
import LogIn from "../auth/Login";

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-gray-800 overflow-hidden">
      <HomePageCards />
      {/* Gradient Background */}
      <div className="absolute inset-4 "></div>

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
              Sign Up
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
  

      {/* Footer */}
      <footer className="absolute bottom-5 text-gray-500 text-sm z-10 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Burton Creations | All Rights Reserved
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
