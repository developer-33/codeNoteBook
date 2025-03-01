import { FaHome, FaCar, FaChartBar, FaUserFriends, FaImage } from "react-icons/fa";

const ProfileNav = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: "Timeline", key: "timeline", icon: <FaHome /> },
    { name: "Garage", key: "garage", icon: <FaCar /> },
    { name: "Stats", key: "stats", icon: <FaChartBar /> },
    { name: "Friends", key: "friends", icon: <FaUserFriends /> },
    { name: "Media", key: "media", icon: <FaImage /> },
  ];

  return (
    <div className="flex justify-center border-b bg-gray-400 dark:bg-black dark:text-orange-600 shadow-md rounded-md overflow-hidden">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`flex items-center px-6 py-3 transition-all duration-300 ease-in-out 
            ${
              activeTab === tab.key
                ? "bg-gradient-to-r from-red-500 to-red-600 via-red-700 dark:from-orange-500 dark:via-orange-600 dark:to-orange-700 text-white font-semibold"
                : "text-gray-600 hover:bg-gray-100 hover:text-blue-500"
            }`}
          aria-label={`Go to ${tab.name} section`}
        >
          <span className="mr-2">{tab.icon}</span>
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default ProfileNav;
