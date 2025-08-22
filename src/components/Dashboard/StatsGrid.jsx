import React from 'react';
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, ShoppingCart, Eye } from 'lucide-react';

function StatsGrid() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$124,563",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      textColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      title: "Active Users",
      value: "12,345",
      change: "+5.3%",
      trend: "up",
      icon: Users,
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Total Orders",
      value: "3,210",
      change: "+8.7%",
      trend: "up",
      icon: ShoppingCart,
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      textColor: "text-green-600 dark:text-green-400",
    },
    {
      title: "Page Views",
      value: "45,892",
      change: "-2.1%",
      trend: "down",
      icon: Eye,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      textColor: "text-orange-600 dark:text-orange-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat, index) => (
        <div
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 transition-all duration-300 group"
          key={index}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                {stat.title}
              </p>
              <p className="text-xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-2 sm:mb-4">
                {stat.value}
              </p>
              <div className="flex items-center space-x-1 sm:space-x-2">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="w-3 sm:w-4 h-3 sm:h-4 text-red-500" />
                )}
                <span
                  className={`text-xs sm:text-sm font-semibold ${
                    stat.trend === "up" ? "text-emerald-500" : "text-red-500"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Vs Last
                </span>
              </div>
            </div>
            <div
              className={`p-2 sm:p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-all duration-300`}
            >
              <stat.icon className={`w-5 sm:w-6 h-5 sm:h-6 ${stat.textColor}`} />
            </div>
          </div>
          <div className="mt-2 sm:mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-300`}
              style={{ width: stat.trend === "up" ? "75%" : "45%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsGrid;