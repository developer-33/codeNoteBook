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



import { useState } from "react";
import { FaRegComments, FaUserFriends, FaCog } from "react-icons/fa";
import ChatBox2 from "./Messages2";
import FriendsList from "../Profile/FriendsList2";

const chatList = [
  { id: 1, name: "Jessica Carroll", message: "Work Inquiry - UI Designer", time: "1h ago" },
  { id: 2, name: "Emily Rose", message: "Invitation: Board Game Night", time: "2h ago" },
  { id: 3, name: "David Bryant", message: "New App Design", time: "3h ago" },
];

export default function Messenger() {
  const [activeChat, setActiveChat] = useState(null);
  const [showFriends, setShowFriends] = useState(false);

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <div className="w-16 bg-blue-600 flex flex-col items-center p-4 space-y-6 text-white">
        <FaRegComments size={24} className="cursor-pointer" onClick={() => { setShowFriends(false); setActiveChat(null); }} />

        {/* Friends List Button - Toggles friends list panel */}
        <FaUserFriends 
          size={24} 
          className="cursor-pointer" 
          onClick={() => { setShowFriends(true); setActiveChat(null); }} 
        />

        <FaCog size={24} className="cursor-pointer" />
      </div>

      {/* Friends List Panel */}
      {showFriends && (
        <div className="w-80 bg-white border-r p-4 transition-all">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-xl font-semibold">Friends List</h2>
            <button 
              className="text-gray-500 hover:text-gray-700" 
              onClick={() => setShowFriends(false)}
            >
              Back
            </button>
          </div>
          <FriendsList />
        </div>
      )}

      {/* Chat List (only show if friends list is NOT active) */}
      {!showFriends && (
        <div className={`w-80 bg-white border-r p-4 transition-all ${activeChat ? "hidden md:block" : "block"}`}>
          <h2 className="text-xl font-semibold mb-4">Chats</h2>
          {chatList.map((chat) => (
            <div
              key={chat.id}
              className="p-3 border-b cursor-pointer hover:bg-gray-100"
              onClick={() => setActiveChat(chat)}
            >
              <h3 className="font-bold">{chat.name}</h3>
              <p className="text-gray-500 text-sm">{chat.message}</p>
              <span className="text-gray-400 text-xs">{chat.time}</span>
            </div>
          ))}
        </div>
      )}

      {/* Chat Window */}
      {activeChat && (
        <div className="flex-1 flex flex-col bg-white">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-bold">{activeChat.name}</h2>
            <button onClick={() => setActiveChat(null)} className="text-gray-500 md:hidden">
              Back
            </button>
          </div>
          <ChatBox2 />
        </div>
      )}
    </div>
  );
}
