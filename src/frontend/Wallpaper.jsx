import React from "react";
import backgroundImage from "./wallpaper/car1.jpg"; // Ensure the correct file path and extension

function Wallpaper() {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    </div>
  );
}

export default Wallpaper;
