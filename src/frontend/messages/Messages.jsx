// import { useState, useEffect, useRef } from "react";
// import { io } from "socket.io-client";
// import { FaRegSmile, FaPaperclip, FaMicrophone } from "react-icons/fa";

// const socket = io("http://localhost:5000"); // Connect to backend

//  const ChatBox= () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [typing, setTyping] = useState(false);
//   const messageEndRef = useRef(null);

//   useEffect(() => {
//     socket.on("message", (message) => {
//       setMessages((prev) => [...prev, message]);
//     });

//     socket.on("typing", (isTyping) => {
//       setTyping(isTyping);
//     });

//     return () => {
//       socket.off("message");
//       socket.off("typing");
//     };
//   }, []);

//   const sendMessage = () => {
//     if (input.trim() === "") return;
//     socket.emit("message", { text: input, sender: "User", timestamp: new Date().toLocaleTimeString() });
//     setInput("");
//   };

//   useEffect(() => {
//     messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="flex flex-col h-screen p-4 bg-white dark:bg-gray-800  text-red-700 dark:text-orange-600">
//       <div className="flex-1 overflow-y-auto space-y-2">
//         {messages.map((msg, index) => (
//           <div key={index} className="p-3 rounded bg-gray-800 flex flex-col">
//             <span className="font-bold">{msg.sender}:</span> {msg.text}
//             <span className="text-gray-400 text-sm mt-1">{msg.timestamp}</span>
//           </div>
//         ))}
//         {typing && <p className="text-gray-400">Someone is typing...</p>}
//         <div ref={messageEndRef} />
//       </div>
//       <div className="flex items-center gap-2 mt-2 p-2 bg-gray-800 rounded">
//         <button className="text-gray-400 hover:text-white">
//           <FaRegSmile size={24} />
//         </button>
//         <button className="text-gray-400 hover:text-white">
//           <FaPaperclip size={24} />
//         </button>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={() => socket.emit("typing", true)}
//           onBlur={() => socket.emit("typing", false)}
//           className="flex-1 p-2 rounded bg-gray-700 text-white"
//           placeholder="Type a message..."
//         />
//         <button onClick={sendMessage} className="px-4 py-2 bg-blue-500 rounded">
//           Send
//         </button>
//         <button className="text-gray-400 hover:text-white">
//           <FaMicrophone size={24} />
//         </button>
//       </div>
//     </div>
//   );
// }
// export default ChatBox


import { useState, useEffect } from "react";
import { FaPaperPlane, FaRegSmile, FaThumbtack } from "react-icons/fa";
import { IoIosAttach } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { motion } from "framer-motion";
// import "tailwindcss/tailwind.css";

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey, how’s the project going?", sender: "John", pinned: false },
    { id: 2, text: "Just added the new UI changes!", sender: "You", pinned: false },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { id: messages.length + 1, text: input, sender: "You" }]);
    setInput("");
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 p-4 border-r border-gray-700">
        <h2 className="text-xl font-bold">Channels</h2>
        <ul>
          <li className="py-2 px-4 bg-gray-700 rounded cursor-pointer"># general</li>
          <li className="py-2 px-4 cursor-pointer"># development</li>
        </ul>
      </div>
      
      {/* Chat Window */}
      <div className="w-3/4 flex flex-col h-full">
        <div className="p-4 bg-gray-800 border-b border-gray-700 flex justify-between">
          <h2 className="text-xl font-bold"># general</h2>
          <BsThreeDotsVertical className="cursor-pointer" />
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg) => (
            <motion.div key={msg.id} className={`p-3 rounded-lg ${msg.sender === "You" ? "bg-blue-500 self-end" : "bg-gray-700"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}>
              <strong>{msg.sender}</strong>
              <p>{msg.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="p-4 bg-gray-800 flex items-center gap-3 border-t border-gray-700">
          <IoIosAttach className="text-2xl cursor-pointer" />
          <input
            type="text"
            className="flex-1 p-2 rounded bg-gray-700 text-white focus:outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <FaRegSmile className="text-2xl cursor-pointer" />
          <button className="p-2 bg-blue-500 rounded text-white" onClick={sendMessage}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
