'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, CalendarCheck, DollarSign } from 'lucide-react';

export default function AdminOverview() {
  const stats = [
    { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: DollarSign, isPositive: true },
    { label: 'Occupancy Rate', value: '85%', change: '+5.4%', icon: TrendingUp, isPositive: true },
    { label: 'Active Bookings', value: '142', change: '-2.1%', icon: CalendarCheck, isPositive: false },
    { label: 'Total Guests', value: '2,405', change: '+12.5%', icon: Users, isPositive: true },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-white mb-2">Dashboard Overview</h1>
        <p className="text-gray-400 text-sm">Welcome back. Here is what is happening at Texas Hotel today.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface border border-white/5 rounded-xl p-6 shadow-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.isPositive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-3xl font-semibold text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-surface border border-white/5 rounded-xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-serif text-white">Recent Bookings</h2>
            <button className="text-sm text-primary hover:underline">View All</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 text-sm">
                  <th className="py-3 font-medium">Guest</th>
                  <th className="py-3 font-medium">Room</th>
                  <th className="py-3 font-medium">Dates</th>
                  <th className="py-3 font-medium">Status</th>
                  <th className="py-3 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-300">
                {[
                  { guest: 'Sarah Jenkins', room: 'Deluxe King - 104', dates: 'Oct 15 - Oct 18', status: 'Confirmed', amount: '$1,050' },
                  { guest: 'Michael Chen', room: 'Presidential - 501', dates: 'Oct 16 - Oct 17', status: 'Pending', amount: '$1,200' },
                  { guest: 'Emma Watson', room: 'Exec Double - 203', dates: 'Oct 14 - Oct 20', status: 'Checked In', amount: '$1,500' },
                  { guest: 'David Miller', room: 'Deluxe King - 105', dates: 'Oct 12 - Oct 14', status: 'Checked Out', amount: '$700' },
                ].map((booking, idx) => (
                  <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="py-4 font-medium text-white">{booking.guest}</td>
                    <td className="py-4">{booking.room}</td>
                    <td className="py-4">{booking.dates}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'Confirmed' ? 'bg-blue-500/10 text-blue-400' :
                        booking.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400' :
                        booking.status === 'Checked In' ? 'bg-green-500/10 text-green-400' :
                        'bg-gray-500/10 text-gray-400'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-4 text-right font-medium">{booking.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / Today's Overview */}
        <div className="bg-surface border border-white/5 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-serif text-white mb-6">Today's Overview</h2>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <div>
                <p className="text-sm text-gray-400 mb-1">Expected Check-ins</p>
                <p className="text-2xl font-semibold text-white">12</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <span className="text-blue-400 font-bold">IN</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <div>
                <p className="text-sm text-gray-400 mb-1">Expected Check-outs</p>
                <p className="text-2xl font-semibold text-white">8</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                <span className="text-orange-400 font-bold">OUT</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400 mb-1">Rooms to Clean</p>
                <p className="text-2xl font-semibold text-white">15</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                <span className="text-purple-400 font-bold">HK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
