import React from "react";
import { ArrowLeftRight } from "lucide-react"; // optional icon

const AssetSummary = () => {
  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-md text-sm font-medium text-gray-800">
      <h3 className="text-xs text-purple-500 font-semibold mb-3">Assets</h3>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Bitcoin</span>
          <span className="text-gray-500">
            23.5 <span className="text-xs">BTC</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span>Ethereum</span>
          <span className="text-gray-500">
            190.45 <span className="text-xs">ETH</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span>Doge</span>
          <span className="text-gray-500">
            239,500 <span className="text-xs">DOGE</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span>Ripple</span>
          <span className="text-gray-500">
            65,100 <span className="text-xs">XRP</span>
          </span>
        </div>
      </div>

      <div className="text-xs text-purple-600 cursor-pointer mb-4 hover:underline">
        More assets...
      </div>

      <button className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition">
        <ArrowLeftRight size={16} />
        Trade Now
      </button>
    </div>
  );
};

export default AssetSummary;
