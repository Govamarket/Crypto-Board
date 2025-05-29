import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from "./Components/Pages/Home";
import SideBar from "./Components/Layouts/SideBar";
import Logo from "./Components/Layouts/Logo";
import Setting from "./Components/Pages/Setting";
import TraderProfile from "./Components/Data/TraderProfile";
import Chart from "./Components/Data/Chart";
import Help from "./Components/Data/Help";
import AssetCard from "./Components/Dashboard/AssetCard";
import Guide from "./Components/Pages/Guide";
import Forum from "./Components/Pages/Forum";
import Report from "./Components/Pages/Report";
import LiveTrade from "./Components/Pages/LiveTrade";

import Contact from "./Components/Data/Contact";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Dashboard from "./Components/Pages/Dashboard";
import Logout from "./Components/Authentication/Logout";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <SideBar />
                <div className="ml-64 p-4">
                  <AssetCard />
                </div>
              </div>
            }
          />
          <Route path="/logo" element={<Logo />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/traderprofile" element={<TraderProfile />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/help" element={<Help />} />
          <Route path="/assets" element={<AssetCard />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/report" element={<Report />} />
          <Route path="/live-trade" element={<LiveTrade />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/404" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
