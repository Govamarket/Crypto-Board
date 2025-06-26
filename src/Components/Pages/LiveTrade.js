import React from "react";
import AssetSummary from "../Dashboard/AssetSummary";

const LiveTrade = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-1 text-center">
          Live Trade
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          View live market prices and execute trades in real time.
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Market Section */}
          <div className="col-span-2 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
            <div className="space-y-2">
              {["BTC/USD", "ETH/USD", "SOL/USD"].map((pair, index) => (
                <div
                  key={index}
                  className="flex justify-between bg-white px-4 py-2 rounded shadow-sm"
                >
                  <span className="font-medium">{pair}</span>
                  <span className="text-green-600 font-semibold">
                    ${(Math.random() * 1000 + 1000).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Trade Action Panel */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Trade Panel</h2>
            <form className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">Asset</label>
                <select className="w-full p-2 border rounded">
                  <option>BTC/USD</option>
                  <option>ETH/USD</option>
                  <option>SOL/USD</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600">Amount ($)</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                  Buy
                </button>
                <button
                  type="button"
                  className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
                >
                  Sell
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTrade;
