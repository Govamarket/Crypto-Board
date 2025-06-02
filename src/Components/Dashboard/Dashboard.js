import { Outlet } from "react-router-dom";
import SideBar from "../Layouts/SideBar";

const Dashboard = () => {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div className="ml-64 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
