import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Pages/Logo";
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
    <div className="block fixed w-64 h-full bg-[#f8f7ff] text-{#ccc} p-4 leading-10">
      <Logo />
      <ul>
        <li className="">
          <Link to="/" className="flex items-center gap-2">
            <House />
            Home
          </Link>
        </li>
        <li>
          <Link to="/settings" className="flex items-center gap-2">
            <CassetteTape />
            Asset
          </Link>
        </li>
        <li>
          <Link to="/chart" className="flex items-center gap-2">
            <ChartNoAxesColumnIncreasing />
            Chart
          </Link>
        </li>
        <li>
          <Link to="/reports" className="flex items-center gap-2">
            <ClipboardMinus />
            Support
          </Link>
        </li>
        <li>
          <Link to="/help" className="flex items-center gap-2">
            <FileQuestion />
            Reports
          </Link>
        </li>
        <li>
          <Link to="/about" className="flex items-center gap-2">
            <Settings />
            Settings
          </Link>
        </li>
      </ul>

      <div className="absolute bottom-0 left-5 w-full p-4">
        <Guide />
      </div>
    </div>
  );
};

export default SideBar;
