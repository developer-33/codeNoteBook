import { useEffect, useState } from "react";
import axios from "axios";

const ThemedComponent = ({ username }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState({
    color: "#ffffff",
    font: "Arial",
    layout: "flex",
  });

  useEffect(() => {
    const fetchUserSettings = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/${username}`
        );
        setUser(response.data);
        setTheme(response.data.custom_settings);
      } catch (error) {
        console.error("Error fetching user settings:", error);
      }
    };

    fetchUserSettings();
  }, [username]);

  return (
    <div
      className="min-h-screen p-6"
      style={{
        color: theme.color,
        fontFamily: theme.font,
        display: theme.layout === "grid" ? "grid" : "flex",
        gridTemplateColumns: theme.layout === "grid" ? "repeat(3, 1fr)" : "none",
      }}
    >
      {user && (
        <div className="p-4 border rounded-lg shadow-lg bg-gray-800">
          <h1 className="text-2xl font-bold">{user.username}</h1>
          <p>{user.bio}</p>
          <img src={user.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full" />
          <p>Theme: {user.theme}</p>
        </div>
      )}
    </div>
  );
};

export default ThemedComponent;
