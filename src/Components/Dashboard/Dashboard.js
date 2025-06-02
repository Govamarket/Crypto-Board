import React from "react";
import SideBar from "../Layouts/SideBar";
import AssetSummary from "./AssetSummary";
import ActivityTable from "./ActivityTable";

const Dashboard = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content Area */}
      <div className="flex-1 p-6 ml-16">
        {/* Asset Cards (children) */}
        {children}

        {/* Activity Table */}
        <div className="mt-8">
          <ActivityTable />
        </div>
      </div>

      {/* Right Sidebar (Trader Profile/Asset Summary) */}
      <div className="w-72 p-4 bg-white shadow-md">
        <AssetSummary />
      </div>
    </div>
  );
};

export default Dashboard;
