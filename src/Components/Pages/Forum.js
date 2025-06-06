import React from "react";
import { Search, PlusCircle } from "lucide-react";

const Forum = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Forum Header */}
      <div className="max-w-5xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">Crypto Forum</h1>
        <p className="text-gray-600">
          Discuss market trends, airdrops, trading strategies, and more.
        </p>
      </div>

      {/* Top Bar: Search + Create */}
      <div className="max-w-5xl mx-auto flex items-center justify-between mb-6">
        {/* Search bar */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search topics..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* New Thread Button */}
        <button className="ml-4 flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
          <PlusCircle className="w-5 h-5 mr-2" />
          New Post
        </button>
      </div>

      {/* Forum Threads */}
      <div className="max-w-5xl mx-auto grid gap-4">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              Sample Thread Title #{item}
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              This is a brief preview of the topic discussion to catch user
              interest...
            </p>
            <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
              <span>by @user{item}</span>
              <span>12 replies · 3h ago</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
