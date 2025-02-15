import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const ChatBox = ({ currentUser, selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);

    newSocket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      newSocket.disconnect(); // Clean up when component unmounts
    };
  }, []);

  const sendMessage = () => {
    if (!socket || message.trim() === "") return;
    const newMessage = { sender: currentUser, receiver: selectedUser, text: message, timestamp: new Date() };
    socket.emit("send-message", newMessage);
    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
  };

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg w-full max-w-md">
      <div className="h-80 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 ${msg.sender === currentUser ? "text-right" : "text-left"}`}>
            <span className={`px-3 py-1 rounded-lg ${msg.sender === currentUser ? "bg-blue-500" : "bg-gray-700"}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          type="text"
          className="flex-1 p-2 text-black rounded-l-lg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="bg-blue-500 px-4 rounded-r-lg" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
