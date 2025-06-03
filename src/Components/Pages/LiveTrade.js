import React from "react";
import AssetSummary from "../Dashboard/AssetSummary";

const LiveTrade = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <h1 className="text-2xl font-bold mb-4">Live Trade</h1>
        <p className="text-gray-600">
          This is the live trade page where users can view and manage their
          trades.
        </p>
      </div>
    </div>
  );
};

export default LiveTrade;
