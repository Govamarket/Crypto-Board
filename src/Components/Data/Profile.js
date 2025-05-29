import { Edit } from "lucide-react";
import React from "react";

const Profile = () => {
  const profileData = {
    name: "Han Ji Pyeong",
    joinedDate: "June 22, 2020",
    assetsTotal: "$1,312,900",
    Edit: <Edit className="w-4 h-4 text-gray-500 cursor-pointer" />,
    profilePicture: "https://via.placeholder.com/80",
  };
  return (
    <div>
      <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
        <img
          src={profileData.profilePicture}
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{profileData.name}</h2>
          <p className="text-gray-600">Joined: {profileData.joinedDate}</p>
          <p className="text-gray-800 font-bold">
            Total Assets: {profileData.assetsTotal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
