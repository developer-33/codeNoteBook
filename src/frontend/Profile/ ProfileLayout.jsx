import ProfileHeader from "./ProfileHeader";
import ProfileNav from "./ ProfileNav";
import ActivityFeed from "./ ActivityFeed";
import Garage from "./Garage";
import DriftStats from "./DriftStats";
import FriendsList from "./ FriendsList";
import MediaGallery from "./MediaGallery"

import { useState } from "react";

const ProfileLayout = () => {
  const [activeTab, setActiveTab] = useState("timeline");

  return (
    <div className="max-w-5xl mx-auto">
      {/* Profile Header */}
      <ProfileHeader />

      {/* Navigation Tabs */}
      <ProfileNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="mt-6">
        {activeTab === "timeline" && <ActivityFeed />}
        {activeTab === "garage" && <Garage />}
 
        {activeTab === "stats" && <DriftStats />}
        {activeTab === "friends" && <FriendsList />}
        {activeTab === "media" && <MediaGallery />}
      </div>
    </div>
  );
};

export default ProfileLayout;
