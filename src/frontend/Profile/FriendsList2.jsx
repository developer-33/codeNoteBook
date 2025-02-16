import { Link } from "react-router-dom";

const friends = [
  { id: 1, name: "Jessica Carroll" },
  { id: 2, name: "Emily Rose" },
  { id: 3, name: "David Bryant" }
];

export default function FriendsList() {
  return (
    <div className="h-screen bg-gray-900 text-white p-6">
      <h1 className="text-xl font-bold mb-4">Friends List</h1>
      <ul className="space-y-3">
        {friends.map((friend) => (
          <li key={friend.id} className="bg-gray-800 p-3 rounded">
            <Link to={`/chat/${friend.id}`} className="hover:text-blue-400">
              {friend.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
