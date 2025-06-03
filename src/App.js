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
import Asset from "./Components/Pages/Asset";

function App() {
  return (
    <Router>
      <Routes>
        {/* Dashboard Routes with Explicit Children */}
        <Route
          path="/logo"
          element={
            <Dashboard>
              <Logo />
            </Dashboard>
          }
        />
        <Route
          path="/"
          element={
            <Dashboard>
              <AssetCard />
            </Dashboard>
          }
        />
        <Route
          path="/assets"
          element={
            <Dashboard>
              <Asset />
            </Dashboard>
          }
        />
        <Route
          path="/settings"
          element={
            <Dashboard>
              <Setting />
            </Dashboard>
          }
        />
        <Route
          path="/traderprofile"
          element={
            <Dashboard>
              <TraderProfile />
            </Dashboard>
          }
        />
        <Route
          path="/chart"
          element={
            <Dashboard>
              <Chart />
            </Dashboard>
          }
        />
        <Route
          path="/help"
          element={
            <Dashboard>
              <Help />
            </Dashboard>
          }
        />
        <Route
          path="/assets"
          element={
            <Dashboard>
              <AssetCard />
            </Dashboard>
          }
        />
        <Route
          path="/guide"
          element={
            <Dashboard>
              <Guide />
            </Dashboard>
          }
        />
        <Route
          path="/forum"
          element={
            <Dashboard>
              <Forum />
            </Dashboard>
          }
        />
        <Route
          path="/report"
          element={
            <Dashboard>
              <Report />
            </Dashboard>
          }
        />
        <Route
          path="/live-trade"
          element={
            <Dashboard>
              <LiveTrade />
            </Dashboard>
          }
        />

        {/* Public Routes (No Dashboard) */}
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
