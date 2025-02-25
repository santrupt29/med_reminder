import React, { useState } from "react";
import { Bell, Plus, Trash2, Moon, Sun, Calendar, PieChart, Clock, Activity, Search, Filter } from "lucide-react";

const SmartMedicineReminder = () => {
  const [medicine, setMedicine] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("daily");
  const [dosage, setDosage] = useState("");
  const [reminders, setReminders] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const categories = ["daily", "weekly", "monthly", "as-needed"];

  const stats = {
    total: reminders.length,
    daily: reminders.filter(r => r.category === "daily").length,
    completion: "85%",
    streak: "5 days"
  };

  const setReminder = () => {
    if (medicine === "" || time === "" || dosage === "") {
      alert("Please fill in all fields.");
      return;
    }
    setReminders([...reminders, { medicine, time, category, dosage, completed: false }]);
    setMedicine("");
    setTime("");
    setDosage("");
  };

  const deleteReminder = (index) => {
    setReminders(reminders.filter((_, i) => i !== index));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const filteredReminders = reminders
    .filter(r => r.medicine.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(r => filterCategory === "all" ? true : r.category === filterCategory);

  return (
    <div className={`min-h-screen w-screen p-6 transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-gray-900' 
        : 'bg-gradient-to-b from-slate-50 to-blue-50'
    }`}>
      {/* Header */}
      <header className={`max-w-6xl mx-auto rounded-lg shadow-md p-4 mb-6 transition-colors duration-200 ${
        isDarkMode 
          ? 'bg-gray-800' 
          : 'bg-white/80 backdrop-blur-sm border border-slate-200'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
            <h1 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
              Medi Remind Pro
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Calendar className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`} />
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-slate-100 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-slate-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Statistics Section */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-lg shadow-md ${
          isDarkMode 
            ? 'bg-gray-800' 
            : 'bg-white/80 backdrop-blur-sm border border-slate-200'
        }`}>
          <div className="p-4 rounded-md bg-blue-50 border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <PieChart className="h-5 w-5 text-blue-500" />
              <h3 className="font-medium text-slate-700">Total Reminders</h3>
            </div>
            <p className="text-2xl font-semibold text-blue-600">{stats.total}</p>
          </div>
          <div className="p-4 rounded-md bg-green-50 border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="h-5 w-5 text-green-500" />
              <h3 className="font-medium text-slate-700">Daily Medicines</h3>
            </div>
            <p className="text-2xl font-semibold text-green-600">{stats.daily}</p>
          </div>
          <div className="p-4 rounded-md bg-purple-50 border border-purple-100">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-purple-500" />
              <h3 className="font-medium text-slate-700">Completion Rate</h3>
            </div>
            <p className="text-2xl font-semibold text-purple-600">{stats.completion}</p>
          </div>
          <div className="p-4 rounded-md bg-orange-50 border border-orange-100">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="h-5 w-5 text-orange-500" />
              <h3 className="font-medium text-slate-700">Current Streak</h3>
            </div>
            <p className="text-2xl font-semibold text-orange-600">{stats.streak}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Add Reminder Form */}
        <div className={`rounded-lg shadow-md transition-colors duration-200 ${
          isDarkMode 
            ? 'bg-gray-800' 
            : 'bg-white/80 backdrop-blur-sm border border-slate-200'
        }`}>
          <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-slate-200'}`}>
            <h2 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
              Add Reminder
            </h2>
          </div>
          <div className="p-4 space-y-4">
            <input
              type="text"
              value={medicine}
              onChange={(e) => setMedicine(e.target.value)}
              placeholder="Medicine Name"
              className={`w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-slate-50 border border-slate-200 text-slate-600 placeholder-slate-400'
              }`}
            />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={`w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-slate-50 border border-slate-200 text-slate-600'
              }`}
            />
            <input
              type="text"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              placeholder="Dosage (e.g., 1 pill)"
              className={`w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-slate-50 border border-slate-200 text-slate-600 placeholder-slate-400'
              }`}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-slate-50 border border-slate-200 text-slate-600'
              }`}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
            <button
              onClick={setReminder}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm"
            >
              <Plus className="h-5 w-5" />
              Add Reminder
            </button>
          </div>
        </div>

        {/* Reminder List */}
        <div className={`md:col-span-2 rounded-lg shadow-md transition-colors duration-200 ${
          isDarkMode 
            ? 'bg-gray-800' 
            : 'bg-white/80 backdrop-blur-sm border border-slate-200'
        }`}>
          <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-slate-200'}`}>
            <h2 className={`text-lg font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
              Upcoming Reminders
            </h2>
            <div className="flex gap-4 mb-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search medicines..."
                  className={`w-full p-2 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-slate-50 border border-slate-200 text-slate-600 placeholder-slate-400'
                  }`}
                />
                <Search className={`h-5 w-5 absolute left-3 top-2.5 ${
                  isDarkMode ? 'text-gray-400' : 'text-slate-400'
                }`} />
              </div>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-slate-50 border border-slate-200 text-slate-600'
                }`}
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {filteredReminders.length === 0 ? (
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                  No reminders found.
                </p>
              ) : (
                filteredReminders.map((reminder, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-3 rounded-md transition-colors duration-200 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600' 
                        : 'bg-slate-50 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Bell className={`h-4 w-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                      <div>
                        <span className={isDarkMode ? 'text-gray-200' : 'text-slate-600'}>
                          {reminder.medicine} - {reminder.time}
                        </span>
                        <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                          {reminder.dosage} • {reminder.category}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteReminder(index)}
                      className={`transition-colors duration-200 ${
                        isDarkMode 
                          ? 'text-gray-400 hover:text-red-400' 
                          : 'text-slate-400 hover:text-red-500'
                      }`}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartMedicineReminder;