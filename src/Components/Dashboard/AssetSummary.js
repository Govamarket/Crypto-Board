import React, { use } from "react";
import { ArrowLeftRight } from "lucide-react";
import { useLocation } from "react-router-dom";
// import profilePic from "../../Asset/profile-pic.jpg"; // Add the correct path to the profile image

const AssetSummary = () => {
  const location = useLocation();
  const liveTradePath = location.pathname === "/live-trade";
  const forumPath = location.pathname === "/forum";
  const reportPath = location.pathname === "/report";
  const settingsPath = location.pathname === "/settings";
  const assetsPath = location.pathname === "/assets";
  if (liveTradePath || forumPath || reportPath || settingsPath || assetsPath) {
    return null; // Do not render AssetSummary in these paths
  }
  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-md text-sm font-medium text-gray-800">
      {/* Trader Profile Section */}
      <h3 className="flex justify-center text-lg font-semibold text-gray-900 mb-2">
        Trader Profile
      </h3>
      <div className="grid grid-cols-1 place-items-center mb-4 space-y-1 place-content-center">
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
        {/* Edit Profile Link */}
        <div className="text-xs text-blue-600 cursor-pointer mb-4 hover:underline">
          Edit Profile
        </div>
      </div>

      {/* Total Assets */}
      <div className="mb-4">
        <p className="text-xs text-gray-400">Accounts</p>
        <p className="text-gray-800 font-medium">Joined</p>
        <p className="text-lg font-bold text-gray-900">$312,800</p>
      </div>

      {/* Assets List */}
      <div className="absolute bottom-0 p-2">
        <h3 className="text-xs text-blue-600 font-semibold mb-3">Assets</h3>
        <div className="space-y-4 mb-4">
          <div className="flex justify-between">
            <span>Bitcoin</span>
            <span className="text-gray-500">
              23.5 <span className="text-xs">BTC</span>
            </span>
          </div>
          <div className="flex space-x-20 justify-between">
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

        <div className="text-xs text-blue-600 cursor-pointer mb-4 hover:underline">
          More assets...
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition bottom-2">
          <ArrowLeftRight size={16} />
          Trade Now
        </button>
      </div>
    </div>
  );
};

export default AssetSummary;
