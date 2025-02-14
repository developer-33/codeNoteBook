import { useState } from "react";
import axios from "axios";

const  CLOUDINARY_URL=cloudinary://<237619458164859>:<your_api_secret>@dortdgvro
const CLOUDINARY_UPLOAD_PRESET = "YOUR_UPLOAD_PRESET"; // Set this in Cloudinary settings

const ProfileUploader = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

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
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await axios.post(CLOUDINARY_URL, formData);
      setImageUrl(response.data.secure_url);
      alert("Upload successful!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed!");
    }
    setUploading(false);
  };

  return (
    <div className="p-4">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" className="w-32 h-32 rounded-full mt-2" />}
      <button 
        onClick={handleUpload} 
        disabled={uploading} 
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {imageUrl && (
        <div className="mt-4">
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="Profile" className="w-32 h-32 rounded-full" />
        </div>
      )}
    </div>
  );
};

export default ProfileUploader;
