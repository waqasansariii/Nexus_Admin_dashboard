import React from 'react';
import { Menu, Search, Filter, Plus, Bell, Settings, ChevronDown } from 'lucide-react';

function Header({ onToggleSidebar }) {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-4 sm:px-6 py-3 sm:py-4 shadow-lg shadow-slate-200/20">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            className="p-2 sm:p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={onToggleSidebar}
            aria-label="Toggle sidebar"
          >
            <Menu className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>
          <div className="hidden sm:block">
            <h1 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">
              Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Welcome back, Alex! Here's what's happening today
            </p>
          </div>
        </div>
        {/* Center */}
        <div className="hidden md:flex flex-1 max-w-xs sm:max-w-md mx-4 sm:mx-8">
          <div className="relative w-full">
            <Search className="w-4 sm:w-5 h-4 sm:h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search Anything"
              className="w-full pl-9 sm:pl-10 pr-9 sm:pr-10 py-2 sm:py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-white placeholder-slate-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 sm:p-1.5 text-slate-400 hover:text-slate-800 dark:hover:text-slate-300 transition-colors"
              aria-label="Filter search"
            >
              <Filter className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Quick Action */}
          <button className="hidden lg:flex items-center space-x-1 sm:space-x-2 py-1.5 sm:py-2 px-2 sm:px-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
            <Plus className="w-4 sm:w-5 h-4 sm:h-5" />
            <span className="text-xs sm:text-sm font-medium">New</span>
          </button>
          {/* Notifications */}
          <button
            className="relative p-2 sm:p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="View notifications"
          >
            <Bell className="w-5 sm:w-6 h-5 sm:h-6" />
            <span className="absolute -top-1 -right-1 w-4 sm:w-5 h-4 sm:h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
              5
            </span>
          </button>
          {/* Settings */}
          <button
            className="p-2 sm:p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Open settings"
          >
            <Settings className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>
          {/* User Profile */}
          <div className="flex items-center space-x-2 sm:space-x-3 pl-2 sm:pl-3 border-l border-slate-200 dark:border-slate-700">
            <img
              src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2"
              alt="User profile"
              className="w-7 sm:w-8 h-7 sm:h-8 rounded-full ring-2 ring-blue-500"
            />
            <div className="hidden md:block">
              <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-white">Alex Johnson</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Administrator</p>
            </div>
            <button className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Open user menu">
              <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;