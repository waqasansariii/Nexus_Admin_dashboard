import React from 'react';
import { Clock, User, ShoppingCart, CreditCard, Settings, Bell } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'user',
    icon: User,
    title: 'New User Registered',
    description: 'John Smith created an account',
    time: '2 minutes ago',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    id: 2,
    type: 'order',
    icon: ShoppingCart,
    title: 'New Order Received',
    description: 'Order #3847',
    time: '5 minutes ago',
    color: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
  },
  {
    id: 3,
    type: 'payment',
    icon: CreditCard,
    title: 'Payment Processed',
    description: 'Payment of $1,999 completed',
    time: '10 minutes ago',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    id: 4,
    type: 'system',
    icon: Settings,
    title: 'System Update',
    description: 'Database backup completed',
    time: '1 hour ago',
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
  },
  {
    id: 5,
    type: 'notification',
    icon: Bell,
    title: 'Low Stock Alert',
    description: 'iPhone 15 Pro stock is low',
    time: '2 hours ago',
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
  },
];

function ActivityFeed() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-slate-200/20">
      <div className="p-4 sm:p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
              Activity Feed
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Recent System Activities
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium transition-colors">
            View All
          </button>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <div className="space-y-4">
          {activities.map((activity) => {
            const ActivityIcon = activity.icon;
            return (
              <div
                key={activity.id}
                className="flex items-start space-x-3 sm:space-x-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                  <ActivityIcon className={`w-4 sm:w-5 h-4 sm:h-5 ${activity.color}`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                    {activity.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 truncate">
                    {activity.description}
                  </p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Clock className="w-3 sm:w-4 h-3 sm:h-4 text-slate-400" />
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;