import React from "react";
import { Link } from "react-router-dom";

const Guide = () => {
  return (
    <div className="flex items-center justify-center bg-[#7D67FF] text-white w-40 h-10 px-4 py-2 rounded">
      <Link to="/dashboard">
        <button className="text-center w-full">Guide</button>
      </Link>
    </div>
  );
};

export default Guide;
