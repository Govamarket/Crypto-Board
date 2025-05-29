import React from "react";

const TraderProfile = ({
  name = "",
  joinDate = "",
  assetsTotal = 0,
  onEdit,
  avatarInitials = "",
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Trader Profile</h1>
        {onEdit && (
          <button
            onClick={onEdit}
            className="px-4 py-2 text-sm text-blue-600 font-semibold rounded-full border border-blue-600 hover:bg-blue-50 transition-colors"
          >
            Edit Profile
          </button>
        )}
      </div>

      <div className="flex items-center space-x-4 mb-8">
        <div className="flex-shrink-0">
          <div className="h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-gray-600">
            {avatarInitials ||
              (name
                ? name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                : "")}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        </div>
      </div>

      <div className="space-y-4">
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-medium text-gray-500 mb-2">Account</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-500">Joined</p>
              <p className="text-base font-normal text-gray-800">{joinDate}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Assets Total</p>
              <p className="text-2xl font-bold text-gray-800">
                ${assetsTotal.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraderProfile;
