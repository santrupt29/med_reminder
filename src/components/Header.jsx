import { Bell, Calendar, Moon, Sun } from "lucide-react";

const Header = ({ isDarkMode, toggleDarkMode }) => (
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
);

export default Header;
