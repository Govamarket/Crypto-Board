import { useLocation } from "react-router-dom";
import { useState } from "react";
import SideBar from "../Layouts/SideBar";
import AssetSummary from "./AssetSummary";
import ActivityTable from "./ActivityTable";
import { useDarkMode } from "../ActivityModals/DarkModeContext";

const Dashboard = ({ children }) => {
  const { darkMode } = useDarkMode();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [assetSummaryOpen, setAssetSummaryOpen] = useState(false);

  const hideAssetSummary = [
    "/live-trade",
    "/forum",
    "/report",
    "/settings",
    "/assets",
  ].includes(location.pathname);

  return (
    <div
      className={`flex min-h-screen transition-colors duration-200 ${
        darkMode ? "bg-[#121212] text-white" : "bg-gray-50 text-black"
      }`}
    >
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`lg:hidden fixed top-2 left-2 z-50 p-2 rounded-md ${
          darkMode ? "bg-[#232323] text-white" : "bg-white text-gray-800"
        } shadow-lg`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Asset Summary Toggle Button */}
      {!hideAssetSummary && (
        <button
          onClick={() => setAssetSummaryOpen(!assetSummaryOpen)}
          className={`lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md ${
            darkMode ? "bg-[#232323] text-white" : "bg-white text-gray-800"
          } shadow-lg`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>
      )}

      {/* Mobile Overlay */}
      {(sidebarOpen || assetSummaryOpen) && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => {
            setSidebarOpen(false);
            setAssetSummaryOpen(false);
          }}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <SideBar />
      </div>

      {/* Main Content Area */}
      <div
        className={`
        flex-1 min-w-0 transition-all duration-300
        ${/* Mobile spacing */ ""}
        px-4 py-16 lg:py-6 lg:px-6
        ${/* Desktop spacing based on asset summary visibility */ ""}
        ${hideAssetSummary ? "lg:ml-0" : "lg:mr-0 xl:mr-10"}
      `}
      >
        {/* Asset Cards (children) */}
        <div className="w-full">{children}</div>

        {/* Activity Table - only show when AssetSummary is visible */}
        {!hideAssetSummary && (
          <div className="mt-8 w-full overflow-x-auto">
            <ActivityTable />
          </div>
        )}
      </div>

      {/* Right Sidebar (Trader Profile/Asset Summary) - conditionally rendered */}
      {!hideAssetSummary && (
        <div
          className={`
          fixed inset-y-0 right-0 z-40 w-72 transform transition-transform duration-300 ease-in-out
          ${
            assetSummaryOpen
              ? "translate-x-0"
              : "translate-x-full xl:translate-x-0"
          }
          xl:static xl:transform-none
          ${darkMode ? "bg-[#232323] text-white" : "bg-white text-black"}
          shadow-md p-4 overflow-y-auto
        `}
        >
          <AssetSummary />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
