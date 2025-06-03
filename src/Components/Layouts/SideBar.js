import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Layouts/Logo";
import Guide from "../Pages/Guide";

import {
  House,
  CassetteTape,
  ChartNoAxesColumnIncreasing,
  ClipboardMinus,
  Settings,
  FileQuestion,
} from "lucide-react";

const SideBar = () => {
  return (
    <div className="block fixed w-64 h-full bg-[#f8f7ff] text-{#ccc} p-4  leading-10">
      <div className="absolute top-1 left-4 mb-4">
        {" "}
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <ul className="mt-10">
        <li className="">
          <Link to="/" className="flex items-center gap-2">
            <House size={20} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="flex items-center gap-2">
            <CassetteTape size={20} />
            Asset
          </Link>
        </li>
        <li>
          <Link to="/live-trade" className="flex items-center gap-2">
            <ChartNoAxesColumnIncreasing size={20} />
            Live Trade
          </Link>
        </li>
        <li>
          <Link to="/forum" className="flex items-center gap-2">
            <ClipboardMinus size={20} />
            Forum
          </Link>
        </li>
        <li>
          <Link to="/report" className="flex items-center gap-2">
            <FileQuestion size={20} />
            Reports
          </Link>
        </li>
        <li>
          <Link to="/settings" className="flex items-center gap-2">
            <Settings size={20} />
            Settings
          </Link>
        </li>
      </ul>

      <div className="absolute bottom-0 left-5 w-full p-4">
        <Guide size={20} />
      </div>
    </div>
  );
};

export default SideBar;
