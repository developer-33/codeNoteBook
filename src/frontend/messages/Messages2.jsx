import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";
import { FaRegSmile, FaPaperclip, FaMicrophone, FaUsers } from "react-icons/fa";

const socket = io("http://localhost:5000"); // Connect to backend

export default function ChatBox2() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messageEndRef = useRef(null);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    socket.on("typing", (isTyping) => {
      setTyping(isTyping);
    });

    return () => {
      socket.off("message");
      socket.off("typing");
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() === "") return;
    socket.emit("message", { text: input, sender: "User", timestamp: new Date().toLocaleTimeString() });
    setInput("");
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-16 bg-gray-800 flex flex-col items-center p-2 space-y-4">
        <Link to="/friends" className="text-gray-400 hover:text-white">
          <FaUsers size={28} />
        </Link>
      </div>

      {/* Chat Window */}
      <div className="flex flex-col flex-1 p-4">
        <div className="flex-1 overflow-y-auto space-y-2">
          {messages.map((msg, index) => (
            <div key={index} className="p-3 rounded bg-gray-800 flex flex-col">
              <span className="font-bold">{msg.sender}:</span> {msg.text}
              <span className="text-gray-400 text-sm mt-1">{msg.timestamp}</span>
            </div>
          ))}
          {typing && <p className="text-gray-400">Someone is typing...</p>}
          <div ref={messageEndRef} />
        </div>

        {/* Input Bar */}
        <div className="flex items-center gap-2 mt-2 p-2 bg-gray-800 rounded">
          <button className="text-gray-400 hover:text-white">
            <FaRegSmile size={24} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <FaPaperclip size={24} />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={() => socket.emit("typing", true)}
            onBlur={() => socket.emit("typing", false)}
            className="flex-1 p-2 rounded bg-gray-700 text-white"
            placeholder="Type a message..."
          />
          <button onClick={sendMessage} className="px-4 py-2 bg-blue-500 rounded">
            Send
          </button>
          <button className="text-gray-400 hover:text-white">
            <FaMicrophone size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
