import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div>
      <Link to="/dashboard">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Guide
        </button>
      </Link>
    </div>
  );
};

export default Help;
