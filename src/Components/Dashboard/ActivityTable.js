import React from "react";
import { ArrowRight } from "lucide-react";
import { useDarkMode } from "../ActivityModals/DarkModeContext"; // Import the dark mode context

const transactions = [
  {
    icon: "ETH",
    title: "Ethereum Purchased",
    amount: "0.0154 ETH",
    total: "USD $10",
    status: "Pending",
    date: "February 21, 2021",
  },
  {
    icon: "BTC",
    title: "Bitcoin Purchased",
    amount: "0.3 BTC",
    total: "USD $140",
    status: "Done",
    date: "February 14, 2021",
  },
  {
    icon: "BTC",
    title: "Bitcoin Purchased",
    amount: "0.025 BTC",
    total: "USD $56",
    status: "Done",
    date: "January 14, 2021",
  },
];

const ActivityTable = () => {
  const { darkMode } = useDarkMode(); // Use the dark mode context

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2
          className={`text-xl font-semibold transition-colors duration-200 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          ACTIVITY
        </h2>
        <div className="text-sm text-blue-600 hover:underline cursor-pointer flex items-center gap-1">
          More Activity <ArrowRight size={14} />
        </div>
      </div>

      <div className="p-0 overflow-hidden rounded-lg shadow-md">
        <table className="w-full text-sm text-left">
          <thead className="bg-blue-600 text-white">
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
                className={`border-b transition-colors ${
                  darkMode
                    ? "bg-[#2a2a2a] border-gray-600 hover:bg-[#333333]"
                    : "bg-purple-50 border-purple-100 hover:bg-purple-100"
                }`}
              >
                <td className="flex items-center gap-2 px-4 py-3">
                  <span
                    className={`font-semibold ${
                      darkMode ? "text-blue-400" : "text-black-600"
                    }`}
                  >
                    {tx.icon}
                  </span>
                  <span className={darkMode ? "text-white" : "text-gray-800"}>
                    {tx.title}
                  </span>
                </td>
                <td
                  className={`px-4 py-3 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {tx.amount}
                </td>
                <td
                  className={`px-4 py-3 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {tx.total}
                </td>
                <td
                  className={`px-4 py-3 ${
                    tx.status === "Pending" ? "text-blue-500" : "text-green-600"
                  }`}
                >
                  {tx.status}
                </td>
                <td
                  className={`px-4 py-3 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {tx.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className={`flex justify-between items-center text-sm p-4 rounded-lg shadow-md transition-colors duration-200 ${
          darkMode ? "text-gray-300 bg-[#2a2a2a]" : "text-gray-700 bg-white"
        }`}
      >
        <div>
          <p
            className={`text-xs ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Cryptocoin
          </p>
          <p className={darkMode ? "text-white" : "text-gray-700"}>
            Bitcoin (BTC)
          </p>
        </div>
        <div>
          <p
            className={`text-xs ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Updated
          </p>
          <p className={darkMode ? "text-white" : "text-gray-700"}>
            1 minute ago
          </p>
        </div>
        <div>
          <p
            className={`text-xs ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Change
          </p>
          <p className="text-red-500">↓ 2.64%</p>
        </div>
        <div>
          <p
            className={`text-xs ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Price
          </p>
          <p className={darkMode ? "text-white" : "text-gray-700"}>$12,729</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityTable;
