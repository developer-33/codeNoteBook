import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // For smooth animations
import { FaUserShield, FaComments, FaTrophy } from "react-icons/fa"; // Icons for features

function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-gradient-to-b from-black via-gray-900 to-gray-800 opacity-70"></div>
        <div className="absolute w-full h-full animate-pulse bg-[radial-gradient(circle_at_top_right,_#00ffff33,_transparent)]"></div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-extrabold text-cyan-400 neon-text drop-shadow-lg">
          Welcome to CyberNet
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-xl mx-auto">
          Experience the next-gen platform where technology meets community. Customize, compete, and connect like never before.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Link to="/login">
            <button className="px-6 py-2 text-lg font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 shadow-lg glow-btn">
              Get Started
            </button>
          </Link>
          <Link to="/about">
            <button className="px-6 py-2 text-lg font-semibold rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-lg">
              Learn More
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3 max-w-5xl z-10"
      >
        <div className="feature-card">
          <FaUserShield className="text-4xl text-cyan-300 mb-2" />
          <h3 className="text-xl font-semibold text-cyan-300">🔥 Custom Profiles</h3>
          <p className="text-gray-400 mt-2">Personalize your space with themes, avatars, and unique status updates.</p>
        </div>

        <div className="feature-card">
          <FaComments className="text-4xl text-cyan-300 mb-2" />
          <h3 className="text-xl font-semibold text-cyan-300">🌐 Community Chats</h3>
          <p className="text-gray-400 mt-2">Join topic-based chatrooms and connect in real time.</p>
        </div>

        <div className="feature-card">
          <FaTrophy className="text-4xl text-cyan-300 mb-2" />
          <h3 className="text-xl font-semibold text-cyan-300">🚀 Leaderboards</h3>
          <p className="text-gray-400 mt-2">Compete for badges and climb to the top.</p>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-5 text-gray-500 text-sm z-10">
        &copy; {new Date().getFullYear()} CyberNet | All Rights Reserved
      </footer>

      {/* Extra Styles */}
      <style>
        {`
          .neon-text {
            text-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.6);
          }
          .glow-btn {
            box-shadow: 0 0 8px rgba(0, 255, 255, 0.8);
          }
          .feature-card {
            background: rgba(40, 40, 40, 0.8);
            padding: 20px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
            text-align: center;
            box-shadow: 0 0 8px rgba(0, 255, 255, 0.5);
            transition: transform 0.3s ease-in-out;
          }
          .feature-card:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
}

export default Home;
