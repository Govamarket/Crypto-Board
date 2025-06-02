import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
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
import Dashboard from "./Components/Dashboard/Dashboard";
import Logout from "./Components/Authentication/Logout";
function App() {
  return (
    <Router>
      <Routes>
        {/* Main Dashboard Layout  ==> Dashboard-protected routes*/}
        <Route element={<Dashboard />}>
          <Route path="/logo" element={<Logo />} />
          <Route index element={<AssetCard />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/traderprofile" element={<TraderProfile />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/help" element={<Help />} />
          <Route path="/assets" element={<AssetCard />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/report" element={<Report />} />
          <Route path="/live-trade" element={<LiveTrade />} />
        </Route>

        {/* Public Routes  No Dashboard*/}
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />

        {/* Fallback Route for 404 Not Found */}
        <Route path="/404" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
