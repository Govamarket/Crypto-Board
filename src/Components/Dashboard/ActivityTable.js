import React from "react";
import { ArrowRight } from "lucide-react";
import pic from "../../Asset/pic.png"; // Ensure this is the correct path to your icon

const transactions = [
  {
    icon: pic,
    title: "Ethereum Purchased",
    amount: "0.0154 ETH",
    total: "USD $10",
    status: "Pending",
    date: "February 21, 2021",
  },
  {
    icon: pic,
    title: "Bitcoin Purchased",
    amount: "0.3 BTC",
    total: "USD $140",
    status: "Done",
    date: "February 14, 2021",
  },
  {
    icon: pic,
    title: "Bitcoin Purchased",
    amount: "0.025 BTC",
    total: "USD $56",
    status: "Done",
    date: "January 14, 2021",
  },
];

const ActivityTable = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">ACTIVITY</h2>
        <div className="text-sm text-purple-600 hover:underline cursor-pointer flex items-center gap-1">
          More Activity <ArrowRight size={14} />
        </div>
      </div>

      <div className="p-0 overflow-hidden rounded-lg shadow-md">
        <table className="w-full text-sm text-left">
          <thead className="bg-purple-500 text-white">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">Transactions</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 rounded-tr-lg">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr
                key={idx}
                className="bg-purple-50 border-b border-purple-100 hover:bg-purple-100 transition-colors"
              >
                <td className="flex items-center gap-2 px-4 py-3">
                  <img
                    src={tx.icon}
                    alt="icon"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-gray-800">{tx.title}</span>
                </td>
                <td className="px-4 py-3 text-gray-600">{tx.amount}</td>
                <td className="px-4 py-3 text-gray-600">{tx.total}</td>
                <td
                  className={`px-4 py-3 ${
                    tx.status === "Pending"
                      ? "text-purple-600"
                      : "text-green-600"
                  }`}
                >
                  {tx.status}
                </td>
                <td className="px-4 py-3 text-gray-600">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-700 bg-white p-4 rounded-lg shadow-md">
        <div>
          <p className="text-xs text-gray-400">Cryptocoin</p>
          <p>Bitcoin (BTC)</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Updated</p>
          <p>1 minute ago</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Change</p>
          <p className="text-red-500">↓ 2.64%</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Price</p>
          <p>$12,729</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityTable;
