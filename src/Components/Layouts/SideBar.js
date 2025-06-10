import { Link } from "react-router-dom";
import Logo from "../Layouts/Logo";
import Guide from "../Pages/Guide";
import { useDarkMode } from "../ActivityModals/DarkModeContext"; // Use the correct relative path to your context
import { Moon, Sun } from "lucide-react";

import {
  House,
  CassetteTape,
  ChartNoAxesColumnIncreasing,
  ClipboardMinus,
  Settings,
  FileQuestion,
} from "lucide-react";

const SideBar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`block fixed w-64 h-full p-4 leading-10 transition-colors duration-200
      ${
        darkMode ? "bg-[#181818] text-[#e5e5e5]" : "bg-[#f8f7ff] text-[#141313]"
      }`}
    >
      <div>
        <div className="absolute top-1 left-4 mb-4">
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </div>
      <ul className="mt-10">
        <li>
          <Link to="/" className="flex items-center gap-2">
            <House size={20} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/assets" className="flex items-center gap-2">
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

      {/* Dark mode toggle button */}

      <div className="absolute bottom-0 left-5 w-full p-4">
        <Guide size={20} />
      </div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold">Theme Mode</p>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-500" />
          ) : (
            <Moon size={20} className="text-gray-500" />
          )}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
