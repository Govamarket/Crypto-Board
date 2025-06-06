import React from "react";
import { Wallet, TrendingUp, ArrowDownRight } from "lucide-react";

const mockAssets = [
  { name: "Bitcoin", symbol: "BTC", amount: 0.5, price: 67000 },
  { name: "Ethereum", symbol: "ETH", amount: 2.3, price: 3400 },
  { name: "Solana", symbol: "SOL", amount: 15, price: 160 },
];

const Asset = () => {
  const totalValue = mockAssets.reduce(
    (acc, asset) => acc + asset.amount * asset.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-1 text-center">
          My Assets
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          View and manage all your crypto holdings.
        </p>

        {/* Portfolio Summary */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6 text-center">
          <h2 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
            <Wallet className="w-5 h-5" /> Portfolio Value
          </h2>
          <p className="text-2xl font-bold text-green-600">
            ${totalValue.toLocaleString()}
          </p>
        </div>

        {/* Asset List */}
        <div className="space-y-4">
          {mockAssets.map((asset, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 p-4 border rounded-lg shadow-sm"
            >
              <div>
                <h3 className="text-lg font-semibold">
                  {asset.name} ({asset.symbol})
                </h3>
                <p className="text-sm text-gray-500">
                  {asset.amount} {asset.symbol}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-700">
                  ${(asset.amount * asset.price).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  1 {asset.symbol} = ${asset.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Asset;
