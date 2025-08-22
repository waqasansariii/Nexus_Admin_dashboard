import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function SalesChart() {
  const data = [
    { name: 'Electronics', value: 45, color: '#3b82f6' },
    { name: 'Clothing', value: 30, color: '#8b5cf6' },
    { name: 'Books', value: 15, color: '#10b981' },
    { name: 'Other', value: 10, color: '#f59e0b' },
  ];

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-slate-200/20">
      <div className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
          Sales by Category
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Product Distribution
        </p>
      </div>
      <div className="h-40 sm:h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                fontSize: '12px',
              }}
              formatter={(value, name) => [`${value}%`, name]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-2 sm:space-y-3">
        {data.map((item, index) => (
          <div className="flex items-center justify-between" key={index}>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{item.name}</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-white">{item.value}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}