const FriendsList = () => {
    const friends = ["DriftKing47", "JDM_Legend", "TokyoSlider"];
  
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Friends</h2>
        <ul>
          {friends.map((friend, index) => (
            <li key={index} className="bg-white p-2 rounded shadow mb-2">
              {friend}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FriendsList;
  