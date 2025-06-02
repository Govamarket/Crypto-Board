import React from "react";

const TraderProfile = ({
  name = "Han Ji Pyeong",
  joinDate = "June 15, 2023",
  assetsTotal = "$1,312,456",
  onEdit,
  avatarInitials = "",
}) => {
  return (
    <div className="p-6 bg-white shadow rounded-lg w-full max-w-md mx-auto">
      {/* Avatar + Name + Edit centered */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600 mb-2">
          {avatarInitials}
        </div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <button
          onClick={onEdit}
          className="mt-2 px-4 py-1 text-sm text-blue-500 border border-blue-500 rounded hover:bg-blue-50 transition"
        >
          Edit Profile
        </button>
      </div>

      {/* Account Info */}
      <div>
        <h3 className="font-semibold text-xl mb-3">Account</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span className="font-semibold">Joined:</span>
            <span>{joinDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Total Asset:</span>
            <span>{assetsTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraderProfile;
