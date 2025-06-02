import React from "react";
import { Link } from "react-router-dom";
// import { ShieldCheck } from "lucide-react";

const Guide = () => {
  return (
    <div className="flex items-center justify-center bg-purple-500 text-white w-40 h-10 px-4 py-2 rounded">
      <Link to="/dashboard">
        <button className="flex items-center gap-2 text-center w-full">
          <span> {/* <ShieldCheck /> */}📖</span>
          <span>
            <p> Guide</p>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Guide;
