import { useLocation, Link } from "react-router-dom";
import SideBar from "../Layouts/SideBar";
import AssetSummary from "./AssetSummary";
import ActivityTable from "./ActivityTable";

const Dashboard = ({ children }) => {
  const location = useLocation();
  const liveTradePath = location.pathname == "/live-trade";
  const forumPath = location.pathname == "/forum";
  const reportPath = location.pathname === "/report";
  const settingsPath = location.pathname === "/settings";
  const assetsPath = location.pathname === "/assets";
  if (liveTradePath || forumPath || reportPath || settingsPath || assetsPath) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content Area */}
        <div className="flex-1 p-6 ml-64">
          {/* Asset Cards (children) */}
          {children}
        </div>

        {/* Right Sidebar (Trader Profile/Asset Summary) */}
        <div className="w-72 p-4 bg-white shadow-md">
          <AssetSummary />
        </div>
      </div>
    );
  }
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content Area */}
      <div className="flex-1 p-6 ml-64">
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
