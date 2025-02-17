import React from "react";
import CarxImage from "../../assets/CarxStrrrrrt.jpg"; // Import the image correctly

const ImageComponent = ({ src = CarxImage, alt = "Image", className = "", onClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-lg shadow-md ${className}`}
      onClick={onClick}
    />
  );
};

export default ImageComponent;
