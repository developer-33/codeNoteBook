// import { useState } from "react";
// import { FaRegComments, FaUserFriends, FaCog } from "react-icons/fa";
// import { IoMdSend } from "react-icons/io";
// import {Link} from "react-router-dom"
// import ChatBox from "./Messages";
// import ChatBox2 from "./Messages2";
// import FriendsList from "../Profile/FriendsList2";
// import { Chat } from "@mui/icons-material";
// const chatList = [
//   { id: 1, name: "Jessica Carroll", message: "Work Inquiry - UI Designer", time: "1h ago" },
//   { id: 2, name: "Emily Rose", message: "Invitation: Board Game Night", time: "2h ago" },
//   { id: 3, name: "David Bryant", message: "New App Design", time: "3h ago" },
// ];

// export default function Messenger() {
//   const [activeChat, setActiveChat] = useState(null);

//   return (
//     <div className="flex h-screen bg-gray-200">
//       {/* Sidebar */}
//       <div className="w-16 bg-blue-600 flex flex-col items-center p-4 space-y-6 text-white">
//         <FaRegComments size={24} className="cursor-pointer" />
//         <div>
//         <div
//             key={frinedss}
//             className="p-3 border-b cursor-pointer hover:bg-gray-100"
//             onClick={() => FriendsList }
//           >
//                 <FaUserFriends size={24} Link to="/friends"  className="cursor-pointer" />
//            </div>
//         </div>
    
//         <FaCog size={24} className="cursor-pointer" />
//       </div>

//       {/* Chat List */}
//       <div className={`w-80 bg-white border-r p-4 transition-all ${activeChat ? "hidden md:block" : "block"}`}>
//         <h2 className="text-xl font-semibold mb-4">Chats</h2>
//         {chatList.map((chat) => (
//           <div
//             key={chat.id}
//             className="p-3 border-b cursor-pointer hover:bg-gray-100"
//             onClick={() => setActiveChat(chat)}
//           >
//             <h3 className="font-bold">{chat.name}</h3>
//             <p className="text-gray-500 text-sm">{chat.message}</p>
//             <span className="text-gray-400 text-xs">{chat.time}</span>
//           </div>
//         ))}
//       </div>

//       {/* Chat Window */}
//       {activeChat && (
//         <div className="flex-1 flex flex-col bg-white">
//         {/* <ChatBox /> */}
//         <ChatBox2 />
//           {/* <div className="p-4 border-b flex justify-between items-center">
//             <h2 className="text-lg font-bold">{activeChat.name}</h2>
//             <button onClick={() => setActiveChat(null)} className="text-gray-500 md:hidden">Back</button>
//           </div>

//           <div className="flex-1 p-4 overflow-y-auto">
//             <p className="bg-gray-100 p-3 rounded-lg inline-block">Hello, how can I help?</p>
//           </div>

//           <div className="p-3 border-t flex items-center">
//             <input type="text" className="flex-1 p-2 border rounded" placeholder="Type a message..." />
//             <button className="ml-2 bg-blue-600 text-white p-2 rounded"><IoMdSend size={20} /></button>
//           </div> */}
//         </div>
//       )}
//     </div>
//   );
// }


// import { useState } from "react";
// import { FaRegComments, FaUserFriends, FaCog } from "react-icons/fa";
// import { IoMdSend } from "react-icons/io";
// import { Link } from "react-router-dom";
// import ChatBox2 from "./Messages2";
// import FriendsList from "../Profile/FriendsList2";

// const chatList = [
//   { id: 1, name: "Jessica Carroll", message: "Work Inquiry - UI Designer", time: "1h ago" },
//   { id: 2, name: "Emily Rose", message: "Invitation: Board Game Night", time: "2h ago" },
//   { id: 3, name: "David Bryant", message: "New App Design", time: "3h ago" },
// ];

// export default function Messenger() {
//   const [activeChat, setActiveChat] = useState(null);

//   return (
//     <div className="flex h-screen bg-gray-200">
//       {/* Sidebar */}
//       <div className="w-16 bg-blue-600 flex flex-col items-center p-4 space-y-6 text-white">
//         <FaRegComments size={24} className="cursor-pointer" />
        
//         {/* Friends List Link */}
//         {/* <Link to="/friends">
//           <FaUserFriends size={24} className="cursor-pointer" />
//         </Link> */}
        
//         <FaCog size={24} className="cursor-pointer" />
//       </div>

//       {/* Chat List */}
//       <div className={`w-80 bg-white border-r p-4 transition-all ${activeChat ? "hidden md:block" : "block"}`}>
//         <h2 className="text-xl font-semibold mb-4">Chats</h2>
//         {chatList.map((chat) => (
//           <div
//             key={chat.id}
//             className="p-3 border-b cursor-pointer hover:bg-gray-100"
//             onClick={() => setActiveChat(chat)}
//           >
//             <h3 className="font-bold">{chat.name}</h3>
//             <p className="text-gray-500 text-sm">{chat.message}</p>
//             <span className="text-gray-400 text-xs">{chat.time}</span>
//           </div>
//         ))}
//       </div>

//       {/* Chat Window */}
//       {activeChat && (
//         <div className="flex-1 flex flex-col bg-white">
//           <div className="p-4 border-b flex justify-between items-center">
//             <h2 className="text-lg font-bold">{activeChat.name}</h2>
//             <button onClick={() => setActiveChat(null)} className="text-gray-500 md:hidden">
//               Back
//             </button>
//           </div>
          
//           <ChatBox2 />
//         </div>
//       )}
//     </div>
//   );
// }



// import { useState } from "react";
// import { FaRegComments, FaUserFriends, FaCog } from "react-icons/fa";
// import ChatBox2 from "./Messages2";
// import FriendsList from "../Profile/FriendsList2";

// const chatList = [
//   { id: 1, name: "Jessica Carroll", message: "Work Inquiry - UI Designer", time: "1h ago" },
//   { id: 2, name: "Emily Rose", message: "Invitation: Board Game Night", time: "2h ago" },
//   { id: 3, name: "David Bryant", message: "New App Design", time: "3h ago" },
// ];

// export default function Messenger() {
//   const [activeChat, setActiveChat] = useState(null);
//   const [showFriends, setShowFriends] = useState(false);

//   return (
//     <div className="flex h-screen bg-gray-200">
//       {/* Sidebar */}
//       <div className="w-16 bg-blue-600 flex flex-col items-center p-4 space-y-6 text-white">
//         <FaRegComments size={24} className="cursor-pointer" onClick={() => { setShowFriends(false); setActiveChat(null); }} />

//         {/* Friends List Button - Toggles friends list panel */}
//         <FaUserFriends 
//           size={24} 
//           className="cursor-pointer" 
//           onClick={() => { setShowFriends(true); setActiveChat(null); }} 
//         />

//         <FaCog size={24} className="cursor-pointer" />
//       </div>

//       {/* Friends List Panel */}
//       {showFriends && (
//         <div className="w-80 bg-white border-r p-4 transition-all">
//           <div className="flex justify-between items-center border-b pb-2">
//             <h2 className="text-xl font-semibold">Friends List</h2>
//             <button 
//               className="text-gray-500 hover:text-gray-700" 
//               onClick={() => setShowFriends(false)}
//             >
//               Back
//             </button>
//           </div>
//           <FriendsList />
//         </div>
//       )}

//       {/* Chat List (only show if friends list is NOT active) */}
//       {!showFriends && (
//         <div className={`w-80 bg-white border-r p-4 transition-all ${activeChat ? "hidden md:block" : "block"}`}>
//           <h2 className="text-xl font-semibold mb-4">Chats</h2>
//           {chatList.map((chat) => (
//             <div
//               key={chat.id}
//               className="p-3 border-b cursor-pointer hover:bg-gray-100"
//               onClick={() => setActiveChat(chat)}
//             >
//               <h3 className="font-bold">{chat.name}</h3>
//               <p className="text-gray-500 text-sm">{chat.message}</p>
//               <span className="text-gray-400 text-xs">{chat.time}</span>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Chat Window */}
//       {activeChat && (
//         <div className="flex-1 flex flex-col bg-white">
//           <div className="p-4 border-b flex justify-between items-center">
//             <h2 className="text-lg font-bold">{activeChat.name}</h2>
//             <button onClick={() => setActiveChat(null)} className="text-gray-500 md:hidden">
//               Back
//             </button>
//           </div>
//           <ChatBox2 />
//         </div>
//       )}
//     </div>
//   );
// }
import { useState } from "react";
import { FaPaperPlane, FaRegSmile, FaThumbtack } from "react-icons/fa";
import { IoIosAttach } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey, how’s the project going?", sender: "John", pinned: false },
    { id: 2, text: "Just added the new UI changes!", sender: "You", pinned: false },
  ]);
  const [input, setInput] = useState("");
  const [pinnedMessages, setPinnedMessages] = useState([]);

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([
      ...messages,
      { id: messages.length + 1, text: input, sender: "You", pinned: false },
    ]);
    setInput("");
  };

  const togglePinMessage = (messageId) => {
    const updatedMessages = messages.map((msg) => {
      if (msg.id === messageId) {
        msg.pinned = !msg.pinned;
      }
      return msg;
    });
    setMessages(updatedMessages);
    setPinnedMessages(updatedMessages.filter((msg) => msg.pinned));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-800 p-4 border-r border-gray-700">
        <h2 className="text-xl font-bold mb-4">Channels</h2>
        <ul>
          <li className="py-2 px-4 bg-gray-700 rounded cursor-pointer mb-2"># general</li>
          <li className="py-2 px-4 cursor-pointer"># development</li>
        </ul>
      </div>
      
      {/* Chat Window */}
      <div className="w-full md:w-3/4 flex flex-col h-full">
        <div className="p-4 bg-gray-800 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-bold"># general</h2>
          <BsThreeDotsVertical className="cursor-pointer" />
        </div>

        {/* Pinned Messages */}
        {pinnedMessages.length > 0 && (
          <div className="p-4 bg-gray-700 border-t border-gray-600">
            <h3 className="text-lg font-semibold mb-2">Pinned Messages</h3>
            <ul>
              {pinnedMessages.map((msg) => (
                <motion.li
                  key={msg.id}
                  className="flex justify-between items-center p-2 mb-2 bg-gray-600 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-sm">{msg.text}</p>
                  <FaThumbtack
                    className="cursor-pointer text-yellow-400"
                    onClick={() => togglePinMessage(msg.id)}
                  />
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              className={`p-3 rounded-lg ${msg.sender === "You" ? "bg-blue-500 self-end" : "bg-gray-700"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex justify-between">
                <strong>{msg.sender}</strong>
                {msg.sender !== "You" && (
                  <FaThumbtack
                    className={`cursor-pointer text-yellow-400 ${msg.pinned ? "text-yellow-600" : ""}`}
                    onClick={() => togglePinMessage(msg.id)}
                  />
                )}
              </div>
              <p>{msg.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Message Input */}
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
