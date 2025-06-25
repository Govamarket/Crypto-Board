import React from "react";
import imagePic from "../../Asset/meta.jpg";

const RightSideBar = () => {
  const imageData = [
    {
      metaData: imagePic,
    },
  ];

  return (
    <div className="w-80 p-6 bg-white shadow-lg rounded-xl text-center space-y-6">
      {/* Profile Picture and Name */}
      <div>
        <img
          src={metaData}
          alt="Profile"
          className="w-20 h-20 mx-auto rounded-full object-cover"
        />
        <h2 className="mt-2 text-lg font-semibold">Han Ji Pyeong</h2>
        <button className="text-sm text-purple-500 hover:underline">
          Edit Profile
        </button>
      </div>

      {/* Account Info */}
      <div className="text-left space-y-2">
        <div>
          <p className="text-gray-500 text-sm">Joined</p>
          <p className="font-medium text-sm">June 22, 2020</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Assets Total</p>
          <p className="font-medium text-sm">$1,312,900</p>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
