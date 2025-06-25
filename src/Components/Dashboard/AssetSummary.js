import React from "react";
import { ArrowLeftRight } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useDarkMode } from "../ActivityModals/DarkModeContext"; // Import the dark mode context
import profilePic from "../../Asset/meta.jpg"; // Import the profile picture

const AssetSummary = () => {
  const TraderProfile = [
    {
      profilePic: profilePic,
      name: "Clinton Chidera",
      joinDate: "June 22, 2020",
      assetsTotal: "$312,800",
    },
  ];
  const { darkMode } = useDarkMode(); // Use the dark mode context
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
    <div
      className={`w-64 p-4 rounded-lg shadow-md text-sm font-medium transition-colors duration-200 ${
        darkMode ? "bg-[#232323] text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Trader Profile Section */}
      <h3
        className={`flex justify-center text-lg font-semibold mb-2 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Trader Profile
      </h3>
      <div className="grid grid-cols-1 place-items-center mb-4 space-y-1 place-content-center">
        <div>
          {/* Trader Name and Details */}
          <div className="flex flex-col items-center mb-2">
            <img
              src={TraderProfile[0].profilePic}
              alt="Trader Profile"
              className="w-20 h-20 rounded-full mb-2"
            />
          </div>
          <h4
            className={`text-sm font-semibold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {TraderProfile[0].name}
          </h4>
          <p
            className={`text-xs ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Joined: {TraderProfile[0].joinDate}
          </p>
          <p
            className={`text-xs ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Total Assets: {TraderProfile[0].assetsTotal}
          </p>
        </div>
        {/* Edit Profile Link */}
        <div className="text-xs text-blue-600 cursor-pointer mb-4 hover:underline">
          Edit Profile
        </div>
      </div>

      {/* Total Assets */}
      <div className="mb-4">
        <p
          className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}
        >
          Accounts
        </p>
        <p
          className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
        >
          Joined
        </p>
        <p
          className={`text-lg font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          $312,800
        </p>
      </div>

      {/* Assets List */}
      <div className="absolute bottom-0 p-2">
        <h3 className="text-xs text-blue-600 font-semibold mb-3">Assets</h3>
        <div className="space-y-4 mb-4">
          <div className="flex justify-between">
            <span className={darkMode ? "text-white" : "text-gray-800"}>
              Bitcoin
            </span>
            <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
              23.5 <span className="text-xs">BTC</span>
            </span>
          </div>
          <div className="flex space-x-20 justify-between">
            <span className={darkMode ? "text-white" : "text-gray-800"}>
              Ethereum
            </span>
            <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
              190.45 <span className="text-xs">ETH</span>
            </span>
          </div>
          <div className="flex justify-between">
            <span className={darkMode ? "text-white" : "text-gray-800"}>
              Doge
            </span>
            <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
              239,500 <span className="text-xs">DOGE</span>
            </span>
          </div>
          <div className="flex justify-between">
            <span className={darkMode ? "text-white" : "text-gray-800"}>
              Ripple
            </span>
            <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
              65,100 <span className="text-xs">XRP</span>
            </span>
          </div>
        </div>

        <div className="text-xs text-blue-600 cursor-pointer mb-4 hover:underline">
          More assets...
        </div>
        <Link to="/live-trade">
          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition bottom-2">
            <ArrowLeftRight size={16} />
            Trade Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AssetSummary;
