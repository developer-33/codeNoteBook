import React, { useState } from "react";
import { FaUserPlus, FaUserMinus } from "react-icons/fa";

const friendsData = [
  { id: 1, name: "Ash Ketchum", avatar: "https://via.placeholder.com/50", isFriend: true },
  { id: 2, name: "Misty Waterflower", avatar: "https://via.placeholder.com/50", isFriend: false },
  { id: 3, name: "Brock Slate", avatar: "https://via.placeholder.com/50", isFriend: true },
  { id: 4, name: "Serena Yvonne", avatar: "https://via.placeholder.com/50", isFriend: false },
];

function FriendsPage() {
  const [friends, setFriends] = useState(friendsData);
  const [search, setSearch] = useState("");

  // Handle adding or removing a friend
  const toggleFriend = (id) => {
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === id ? { ...friend, isFriend: !friend.isFriend } : friend
      )
    );
  };

  // Filter friends based on search input
  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-600 text-red-700   dark:text-white  dark:bg-gray-500 p-6">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Friends</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search friends..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 mt-4 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
        />

        {/* Friends List */}
        <ul className="mt-6 space-y-4">
          {filteredFriends.map((friend) => (
            <li key={friend.id} className="flex items-center justify-between bg-gray-200 dark:bg-gray-700 p-3 rounded-lg">
              <div className="flex items-center space-x-4">
                <img src={friend.avatar} alt={friend.name} className="w-12 h-12 rounded-full" />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">{friend.name}</span>
              </div>
              <button
                onClick={() => toggleFriend(friend.id)}
                className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                  friend.isFriend
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                {friend.isFriend ? <FaUserMinus /> : <FaUserPlus />}
                {friend.isFriend ? "Remove" : "Add"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FriendsPage;
