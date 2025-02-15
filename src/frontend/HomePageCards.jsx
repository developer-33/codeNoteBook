import React from 'react'
import { motion } from "framer-motion"; 
import { FaUserShield, FaComments, FaTrophy } from "react-icons/fa";
const HomePageCards = () => {
  return (
    <div>
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
    </div>
  )
}

export default HomePageCards