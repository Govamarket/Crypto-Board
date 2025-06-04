import { useLocation } from "react-router-dom";
import SideBar from "../Layouts/SideBar";
import AssetSummary from "./AssetSummary";
import ActivityTable from "./ActivityTable";

const Dashboard = ({ children }) => {
  const location = useLocation();
  const hideAssetSummary = [
    "/live-trade",
    "/forum",
    "/report",
    "/settings",
    "/assets",
  ].includes(location.pathname);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - always visible */}
      <SideBar />

      {/* Main Content Area */}
      <div
        className={`flex-1 p-6 ${hideAssetSummary ? "ml-64" : "ml-64 mr-72"}`}
      >
        {/* Asset Cards (children) */}
        {children}

        {/* Activity Table - only show when AssetSummary is visible */}
        {!hideAssetSummary && (
          <div className="mt-8 flex-shrink-0">
            <ActivityTable />
          </div>
        )}
      </div>

      {/* Right Sidebar (Trader Profile/Asset Summary) - conditionally rendered */}
      {!hideAssetSummary && (
        <div className="w-72 p-4 bg-white shadow-md fixed right-0 h-full">
          <AssetSummary />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
