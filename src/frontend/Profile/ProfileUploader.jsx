import { useState } from "react";
import axios from "axios";

const ProfileUploader = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(""); // Store uploaded image URL

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData);
      setImageUrl(response.data.imageUrl); // Save uploaded image URL
      setFile(null); // Reset file
      setPreview(null); // Clear preview
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed!");
    }
    setUploading(false);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      {imageUrl ? (
        // If an image is uploaded, show the profile picture
        <img src={imageUrl} alt="Profile" className="w-32 h-32 rounded-full border-2 border-gray-400" />
      ) : (
        // Otherwise, show the file input
        <>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {preview && <img src={preview} alt="Preview" className="w-32 h-32 rounded-full mt-2" />}
          <button 
            onClick={handleUpload} 
            disabled={uploading} 
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </>
      )}
    </div>
  );
};

export default ProfileUploader;
