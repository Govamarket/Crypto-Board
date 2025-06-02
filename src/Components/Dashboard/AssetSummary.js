import React from "react";
import { ArrowLeftRight } from "lucide-react";
// import profilePic from "../../Asset/profile-pic.jpg"; // Add the correct path to the profile image

const AssetSummary = () => {
  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-md text-sm font-medium text-gray-800">
      {/* Trader Profile Section */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Trader Profile
      </h3>
      <div className="flex items-center mb-4">
        <img
          // src={profilePic}
          alt="Trader"
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <p className="text-gray-800 font-medium">Han Ji Pyeong</p>
          <p className="text-xs text-gray-500">
            Joined <span className="text-gray-700">June 22, 2020</span>
          </p>
        </div>
      </div>

      {/* Edit Profile Link */}
      <div className="text-xs text-purple-600 cursor-pointer mb-4 hover:underline">
        Edit Profile
      </div>

      {/* Total Assets */}
      <div className="mb-4">
        <p className="text-xs text-gray-400">Accounts</p>
        <p className="text-gray-800 font-medium">Joined</p>
        <p className="text-lg font-bold text-gray-900">$312,800</p>
      </div>

      {/* Assets List */}
      <h3 className="text-xs text-purple-500 font-semibold mb-3">Assets</h3>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Bitcoin</span>
          <span className="text-gray-500">
            23.5 <span className="text-xs">BTC</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span>Ethereum</span>
          <span className="text-gray-500">
            190.45 <span className="text-xs">ETH</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span>Doge</span>
          <span className="text-gray-500">
            239,500 <span className="text-xs">DOGE</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span>Ripple</span>
          <span className="text-gray-500">
            65,100 <span className="text-xs">XRP</span>
          </span>
        </div>
      </div>

      <div className="text-xs text-purple-600 cursor-pointer mb-4 hover:underline">
        More assets...
      </div>

      <button className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition">
        <ArrowLeftRight size={16} />
        Trade Now
      </button>
    </div>
  );
};

export default AssetSummary;
