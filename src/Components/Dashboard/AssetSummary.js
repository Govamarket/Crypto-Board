import React, { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useDarkMode } from "../ActivityModals/DarkModeContext"; // Import the dark mode context
import profilePic from "../../Asset/meta.jpg"; // Import the profile picture
import LiveTrade from "../Pages/LiveTrade";

const AssetSummary = () => {
  const TraderProfile = [
    {
      profilePic: profilePic,
      name: "Clinton Chidera",
      joinDate: "June 22, 2020",
      assetsTotal: "$312,800",
    },
  ];

  const AssetList = [
    {
      name: "Bitcoin",
      amount: "23.5 BTC",
    },
    {
      name: "Ethereum",
      amount: "190.45 ETH",
    },
    {
      name: "Doge",
      amount: "239,500 DOGE",
    },
    {
      name: "Ripple",
      amount: "65,100 XRP",
    },
  ];

  // LiveTrade modal
  const [isLiveTradeOpen, setIsLiveTradeOpen] = useState(false);
  const toggleLiveTrade = () => {
    setIsLiveTradeOpen(!isLiveTradeOpen);
  };

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
    <>
      {/* Only show the sidebar when modal is closed */}
      {!isLiveTradeOpen && (
        <div
          className={`w-64 p-4 rounded-lg shadow-md text-sm font-medium transition-colors duration-200 flex flex-col h-full ${
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
              className={`text-xs ${
                darkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Accounts
            </p>
            <p
              className={`font-medium ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
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

          {/* Assets List - Remove absolute positioning and add flex-1 for remaining space */}
          <div className="flex-1 flex flex-col justify-end space-y-3">
            <ul className="space-y-2">
              {AssetList.map((asset, index) => (
                <li
                  key={index}
                  className={`flex justify-between items-center p-2 rounded-md transition-colors ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span
                    className={`font-medium ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {asset.name}
                  </span>
                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {asset.amount}
                  </span>
                </li>
              ))}
            </ul>

            <div className="text-xs text-blue-600 cursor-pointer mb-4 hover:underline">
              More assets...
            </div>

            <button
              onClick={toggleLiveTrade}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
            >
              <ArrowLeftRight size={16} />
              Trade Now
            </button>
          </div>
        </div>
      )}

      {/* Modal Overlay - Appears in center of dashboard */}
      {isLiveTradeOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={(e) => {
            // Close modal when clicking outside the content
            if (e.target === e.currentTarget) {
              toggleLiveTrade();
            }
          }}
        >
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-5xl w-[95vw] max-h-[90vh] overflow-hidden">
            {/* Close button */}
            <button
              onClick={toggleLiveTrade}
              className="absolute top-3 right-3 z-20 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full w-8 h-8 flex items-center justify-center transition-colors font-bold text-lg"
              title="Close"
            >
              ×
            </button>

            {/* LiveTrade Component Container */}
            <div className="overflow-auto max-h-[90vh]">
              <LiveTrade
                isOpen={isLiveTradeOpen}
                toggleLiveTrade={toggleLiveTrade}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AssetSummary;
