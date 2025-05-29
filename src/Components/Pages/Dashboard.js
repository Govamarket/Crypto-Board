import React from "react";
import AssetCard from "../Dashboard/AssetCard";
import SideBar from "../Layouts/SideBar";
// Compare this snippet from dash-board/src/Components/Dashboard/Sidebar.js:

const Dashboard = () => {
  return (
    <div>
      <SideBar />
      <AssetCard />
    </div>
  );
};

export default Dashboard;
