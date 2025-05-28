import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Setting from "./Pages/Setting";
import Profile from "./Pages/Profile";
import Chart from "./Pages/Chart";
import Help from "./Pages/Help";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Logout from "./Pages/Logout";
import Logo from "./Pages/Logo";
import SideBar from "./Components/SideBar";
import Asset from "./Pages/Asset";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="block md:flex lg:flex h-screen">
                <SideBar />
                <div className="content flex-1 p-4">
                  {/* <h1>Welcome to Crypto Board</h1> */}
                </div>
              </div>
            }
          ></Route>
          <Route path="/" element={<Home />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/help" element={<Help />} />
          <Route path="/" element={<Asset />} />
          <Route path="/about" element={<About />} />
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
