import { Outlet } from "react-router-dom";
import SideBar from "../Layouts/SideBar";
import ActivityTable from "./ActivityTable";

const Dashboard = () => {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div className="ml-64 p-1">
        <Outlet />
        <ActivityTable />
      </div>
    </div>
  );
};

export default Dashboard;
