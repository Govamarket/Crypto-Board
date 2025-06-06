import React from "react";
import {
  TrendingUp,
  TrendingDown,
  BarChart2,
  DollarSign,
  ArrowRightLeft,
} from "lucide-react";

const Report = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Trading Report</h1>
        <p className="text-gray-600">
          View your portfolio performance and analytics
        </p>
      </div>

      {/* Metrics */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
          <DollarSign className="text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Total Balance</p>
            <h2 className="text-xl font-semibold">$12,430.00</h2>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
          <TrendingUp className="text-blue-600" />
          <div>
            <p className="text-sm text-gray-500">Profit</p>
            <h2 className="text-xl font-semibold">+ $3,210.00</h2>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
          <TrendingDown className="text-red-600" />
          <div>
            <p className="text-sm text-gray-500">Loss</p>
            <h2 className="text-xl font-semibold">- $560.00</h2>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
          <ArrowRightLeft className="text-purple-600" />
          <div>
            <p className="text-sm text-gray-500">Trades</p>
            <h2 className="text-xl font-semibold">78 total</h2>
          </div>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <BarChart2 className="w-5 h-5" /> Portfolio Performance
          </h2>
          <span className="text-sm text-gray-400">Last 30 days</span>
        </div>
        <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
          [Chart will be rendered here]
        </div>
      </div>

      {/* Recent Trades Placeholder */}
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Trades
        </h2>
        <div className="grid grid-cols-3 text-gray-600 text-sm font-medium border-b pb-2 mb-2">
          <span>Asset</span>
          <span>Action</span>
          <span>Amount</span>
        </div>
        {["BTC", "ETH", "SOL"].map((asset, i) => (
          <div
            key={i}
            className="grid grid-cols-3 text-gray-700 text-sm py-2 border-b last:border-b-0"
          >
            <span>{asset}</span>
            <span>{i % 2 === 0 ? "Buy" : "Sell"}</span>
            <span>${(Math.random() * 3000).toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
