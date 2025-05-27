import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Pages/Logo";
import Guide from "../Pages/Guide";

const SideBar = () => {
  return (
    <div className="block fixed w-64 h-full bg-[#f8f7ff] text-{#ccc} p-4 leading-10">
      <Logo />
      <ul>
        <li className="">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/settings">Asset</Link>
        </li>
        <li>
          <Link to="/chart">Chart</Link>
        </li>
        <li>
          <Link to="/reports">Support</Link>
        </li>
        <li>
          <Link to="/help">Reports</Link>
        </li>
        <li>
          <Link to="/about">Settings</Link>
        </li>
      </ul>

      <div className="absolute bottom-0 left-5 w-full p-4">
        <Guide />
      </div>
    </div>
  );
};

export default SideBar;
