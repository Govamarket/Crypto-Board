import React from "react";
import { TrendingUp, Plus } from "lucide-react";
import TraderProfile from "../Data/TraderProfile";
import ActivityTable from "./ActivityTable";

const AssetCardDetails = ({
  title,
  amount,
  currency = "$",
  profit,
  loss,
  neutral,
  bgColor = "bg-purple-500",
  textColor = "text-white",
  isAddCard = false,
}) => {
  if (isAddCard) {
    return (
      <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center min-h-[200px] border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors cursor-pointer">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3">
          <Plus className="w-6 h-6 text-gray-500" />
        </div>
        <span className="text-gray-600 font-medium">New Asset</span>
      </div>
    );
  }

  return (
    <div
      className={`${bgColor} rounded-2xl p-6 ${textColor} relative overflow-hidden`}
    >
      <div className="absolute right-4 top-4 opacity-30">
        <TrendingUp className="w-16 h-16" />
      </div>
      <div className="relative z-10">
        <h3 className="text-lg font-medium mb-4 opacity-90">{title}</h3>
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-sm opacity-75">{currency}</span>
            <span className="text-3xl font-bold ml-1">
              {amount.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <div className="flex flex-col">
            <span className="opacity-75 mb-1">Profit</span>
            <span className="font-medium text-green-300">+{profit}</span>
          </div>
          <div className="flex flex-col">
            <span className="opacity-75 mb-1">Loss</span>
            <span className="font-medium text-red-300">-{loss}</span>
          </div>
          <div className="flex flex-col">
            <span className="opacity-75 mb-1">Neutral</span>
            <span className="font-medium">{neutral}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 opacity-20">
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
          <path
            d="M0 40C20 30, 40 50, 60 35C80 20, 100 45, 120 30V60H0V40Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

const AssetCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
          {/* Main content area */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>Dashboard/</span>
                <span className="mx-2"></span>
                <span>Home</span>
              </div>

              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">ASSETS</h1>
                <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center">
                  More Assets
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>

            {/* Asset Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AssetCardDetails
                title="Bitcoin"
                amount={1820}
                profit="2.9%"
                loss="0.7%"
                neutral="2.9%"
                bgColor="bg-gradient-to-br from-purple-500 to-purple-600"
              />

              <AssetCardDetails
                title="Ethereum"
                amount={1100}
                profit="4.9%"
                loss="0.1%"
                neutral="7.1%"
                bgColor="bg-gradient-to-br from-gray-100 to-gray-200"
                textColor="text-gray-700"
              />

              <AssetCardDetails isAddCard={true} />
            </div>
          </div>
        </div>
        <div children="max-w-7xl mx-auto mt-8">
          <ActivityTable />
        </div>
      </div>
      {/* TraderProfile on the right side */}
      <div className="lg:w-80 xl:w-96 flex-shrink-0">
        <TraderProfile />
      </div>
    </div>
  );
};

export default AssetCard;
