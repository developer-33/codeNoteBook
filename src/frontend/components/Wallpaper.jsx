import React from "react";
import backgroundImage from "../../assets/xc.jpg"; // Ensure the correct file path and extension

function Image() {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20  z-[1]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    </div>
  );
}

export default Image;
