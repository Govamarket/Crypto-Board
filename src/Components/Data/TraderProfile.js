import React from "react";

const TraderProfile = ({
  name = "Han Ji Pyeong",
  joinDate = "June 15, 2023",
  assetsTotal = "$1,312,456",
  onEdit,
  avatarInitials = "",
}) => {
  return (
    <div>
      <div className="p-4 bg-white shadow rounded-lg">
        <div className="w-20 h-20 bg-gray-200 rounded-full text-2xl font-bold text-gray-600 m-4">
          {avatarInitials}
        </div>
        <div className="">
          <h2 className="text-sm font-semibold">{name}</h2>
          <button
            onClick={onEdit}
            className="ml-auto px-4 py-2  text-blue-500  transition"
          >
            Edit Profile
          </button>
        </div>

        <div>
          <div>
            <h1 className="font-semibold text-xl"> Account</h1>
          </div>
          <div className="flex flex-col space-y-6 mt-2">
            <p className="text-sm text-gray-500 font-semibold">
              Joined: {joinDate}
            </p>
            <p className="text-sm font-semibold text-gray-500">
              Total Assets: ${assetsTotal.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraderProfile;
