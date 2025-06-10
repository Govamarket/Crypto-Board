import { TrendingUp, Plus } from "lucide-react";
import { useDarkMode } from "../ActivityModals/DarkModeContext";

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
  const { darkMode } = useDarkMode(); // Use dark mode context

  if (isAddCard) {
    return (
      <div
        className={`rounded-2xl p-6 flex flex-col items-center justify-center min-h-[200px] border-2 border-dashed transition-colors cursor-pointer ${
          darkMode
            ? "bg-[#2a2a2a] border-gray-600 hover:border-gray-500"
            : "bg-gray-50 border-gray-300 hover:border-gray-400"
        }`}
      >
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
            darkMode ? "bg-gray-600" : "bg-gray-200"
          }`}
        >
          <Plus
            className={`w-6 h-6 ${
              darkMode ? "text-gray-300" : "text-gray-500"
            }`}
          />
        </div>
        <span
          className={`font-medium ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          New Asset
        </span>
      </div>
    );
  }

  return (
    <div
      className={`${bgColor} rounded-2xl p-6 ${textColor} relative overflow-hidden shadow-lg`}
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
  const { darkMode } = useDarkMode();

  return (
    <div>
      <div className="min-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-0">
          <div
            className={`flex items-center text-sm mb-4 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <span>Dashboard</span>/<span className="mx-2"></span>
            <span>Home</span>
          </div>

          <div className="flex items-center justify-between">
            <h1
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              ASSETS
            </h1>
            <button className="text-blue-500 hover:text-blue-700 font-medium text-sm flex items-center">
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
            bgColor="bg-gradient-to-br from-purple-500 to-blue-600"
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
  );
};

export default AssetCard;
