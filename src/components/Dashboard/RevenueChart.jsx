import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

export default function RevenueChart() {
  const data = [
    { month: 'Jan', revenue: 45000, expense: 32000 },
    { month: 'Feb', revenue: 52000, expense: 38000 },
    { month: 'Mar', revenue: 48000, expense: 35000 },
    { month: 'Apr', revenue: 61000, expense: 42000 },
    { month: 'May', revenue: 55000, expense: 40000 },
    { month: 'Jun', revenue: 67000, expense: 45000 },
    { month: 'Jul', revenue: 72000, expense: 48000 },
    { month: 'Aug', revenue: 69000, expense: 46000 },
    { month: 'Sep', revenue: 78000, expense: 52000 },
    { month: 'Oct', revenue: 74000, expense: 50000 },
    { month: 'Nov', revenue: 82000, expense: 55000 },
    { month: 'Dec', revenue: 89000, expense: 58000 },
  ];

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-slate-200/20 p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div>
          <h3 className="text-base sm:text-xl font-bold text-slate-800 dark:text-white">
            Revenue Chart
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Monthly revenue and expenses
          </p>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <span>Revenue</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full"></div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <span>Expenses</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
              <linearGradient id="colorExpense" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#6b7280" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.3} />
            <XAxis dataKey="month" stroke="#64748b" fontSize={10} interval={0} />
            <YAxis
              stroke="#64748b"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                fontSize: '12px',
              }}
              formatter={(value) => [`$${value.toLocaleString()}`, '']}
            />
            <Bar dataKey="revenue" fill="url(#colorRevenue)" radius={[5, 5, 0, 0]} />
            <Bar dataKey="expense" fill="url(#colorExpense)" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}