import React from "react";
import { User, Bell, Lock, Moon, Sun } from "lucide-react";

const Setting = () => {
  const [theme, setTheme] = React.useState("light");
  const [notifications, setNotifications] = React.useState(true);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">Settings</h1>
        <p className="text-gray-600 mb-6">
          Manage your preferences and account configurations.
        </p>

        {/* Profile Section */}
        <div className="border-b pb-6 mb-6">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <User className="w-5 h-5" /> Profile
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-500">Username</label>
              <input
                type="text"
                placeholder="CryptoWizard"
                className="w-full p-2 mt-1 border rounded-md bg-gray-50"
                // disabled
              />
            </div>
            <div>
              <label className="text-sm text-gray-500">Email</label>
              <input
                type="email"
                placeholder="crypto@wizard.com"
                className="w-full p-2 mt-1 border rounded-md bg-gray-50"
                // disabled
              />
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="border-b pb-6 mb-6">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5" /> Preferences
          </h2>

          <div className="mb-4">
            <label className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="h-4 w-4"
              />
              <span className="text-sm text-gray-700">
                Enable Notifications
              </span>
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1 flex items-center gap-1">
              <Sun className="w-4 h-4" />
              Theme Mode
            </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full border p-2 rounded-md"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>

        {/* Security Settings */}
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Lock className="w-5 h-5" /> Security
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-500">Change Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
            <div>
              <label className="text-sm text-gray-500">Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter new password"
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
