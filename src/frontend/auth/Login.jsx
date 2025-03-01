// import React, { useState } from "react";
// import { userLogin } from "../index";
// import { Navigate } from "react-router-dom";

// function LogIn() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(null);
//     const [toProfile, setToProfile] = useState(false);

//     async function handleSubmit(event) {
//         event.preventDefault();
//         const response = await userLogin(username, password);
//         sessionStorage.setItem("token", response.data.token);

//         if (response.success) {
//             console.log(response.success);
//             return <Navigate to="/" />;
//         } else {
//             setError(response.error);
//             console.error(error);
//         }
//     }

//     return (
//         <div className="flex min-h-screen items-center justify-center bg-gray-900">
//             <div className="w-full max-w-md p-8 bg-gray-400 bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-bold text-center text-white mb-4">Log In</h2>

//                 {error && <p className="text-red-500 text-center">{error}</p>}

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                         <label className="block text-gray-300">Username</label>
//                         <input
//                             type="text"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                         />
//                         <p className={`text-sm mt-1 ${username.length < 8 ? 'text-red-400' : 'text-green-400'}`}>
//                             {username.length < 8 ? "Username must be at least 8 characters" : "Username is good to go"}
//                         </p>
//                     </div>

//                     <div>
//                         <label className="block text-gray-300">Password</label>
//                         <input
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full p-2 mt-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                         />
//                     </div>

//                     <button className="w-full p-2 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default LogIn;




import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import ImageComponent from "../components/Iamge2";
function LogIn() {

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
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-white dark:bg-gray-600 dark:text-orange-600 text-red-700
      bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-6 w-full max-w-md text-center z-10 
                  dark:bg-opacity-50"
    >
      <h2 className="text-3xl font-bold text-red-700 dark:text-orange-600 neon-text">Sign In</h2>
      <p className="text-red-300 dark:text-gray-600 mt-2">Join the underground racing scene!</p>
   <button onClick={toggleDarkMode} className=" flex items-center gap-2">
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
      <form className="mt-4 space-y-4">
        {/* Username Field */}
        <div className="relative">
          <FaUser className="absolute left-3 top-3 text-red-700" />
          <input
            type="text"
            placeholder="Username"
            className="w-full pl-10 p-3 rounded-lg bg-gray-900 bg-opacity-40 text-red-700 border border-gray-500 
                       focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:border-gray-400"
          />
        </div>

        {/* Password Field */}
        <div className="relative">
          <FaLock className="absolute left-3 top-3 text-red-700" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 p-3 rounded-lg bg-gray-900 bg-opacity-40 text-red-700 border border-gray-500 
                       focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:border-gray-400"
          />
        </div>

        {/* Login Button */}
        <button className="w-full py-3 mt-4 rounded-lg bg-red-600 hover:bg-red-700 text-lg font-semibold 
                          text-white transition-all duration-300 glow-btn">
          Log In
        </button>
      </form>

      {/* Extra Links */}
      <div className="mt-4">
        <a href="/forgot-password" className="text-red-700 hover:text-gray-600 dark:text-gray-400 dark:hover:text-orange-600">
          Forgot Password?
        </a>
        <br />
        <a href="/forgot-password" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-orange-600">
          Sign Up
        </a>
        <ImageComponent />
      </div>

      {/* Styles */}
      <style>
        {`
         .neon-text {
            text-shadow: 0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6);
         }
         .glow-btn {
            box-shadow: 0 0 8px rgba(255, 0, 0, 0.8);
         }
        `}
      </style>
    </motion.div>
  );
}

export default LogIn;
