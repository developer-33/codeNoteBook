
import "./ProfileUploader"
import ProfileUploader from "./ProfileUploader";

const ProfileHeader = () => {
    return (
      <div className="relative">
        {/* Cover Photo */}
        <div className="h-48 bg-gray-800"></div>
  
        {/* Profile Info */}
        <div className="flex items-center p-4">
          {/* Profile Image */}
          <div className="-mt-12 ml-4">
          <ProfileUploader />
            <img
              src="/profile-pic.jpg"
              className="w-24 h-24 rounded-full border-4 border-white"
              alt="Profile"
            />
          </div>
  
          {/* User Info */}
          <div className="ml-4">
            <h1 className="text-xl font-bold">Player Name</h1>
            <p className="text-gray-500">Drift King Champion 🏆</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileHeader;
  