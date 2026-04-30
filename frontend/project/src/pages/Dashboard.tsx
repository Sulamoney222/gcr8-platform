import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { TrendingUp, Users, DollarSign, Play, ArrowUpRight, ArrowDownRight, Calendar } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-display font-bold text-gcr8-purple-950 dark:text-white">Creator Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Welcome back, your performance is up 12% this week.</p>
        </div>
        <Button variant="secondary" className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Last 30 Days
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard 
          label="Total Revenue" 
          value="$12,450.00" 
          change="+15.4%" 
          trend="up" 
          icon={<DollarSign className="w-5 h-5" />}
        />
        <StatCard 
          label="Total Reach" 
          value="84.2k" 
          change="+8.2%" 
          trend="up" 
          icon={<TrendingUp className="w-5 h-5" />}
        />
        <StatCard 
          label="New Fans" 
          value="1,240" 
          change="-2.1%" 
          trend="down" 
          icon={<Users className="w-5 h-5" />}
        />
        <StatCard 
          label="Stream Hours" 
          value="48.5h" 
          change="+24%" 
          trend="up" 
          icon={<Play className="w-5 h-5" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Chart Mockup */}
        <Card className="lg:col-span-2 p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-lg">Audience Growth</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-xs font-medium">
                <div className="w-3 h-3 rounded-full bg-gcr8-purple-600"></div>
                Current
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-white/10"></div>
                Previous
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end gap-2 md:gap-4 pt-4">
            {[40, 60, 45, 90, 65, 80, 55, 75, 45, 95, 70, 85].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div 
                  className="w-full bg-gcr8-purple-950/5 dark:bg-white/5 rounded-t-lg relative overflow-hidden" 
                  style={{ height: '100%' }}
                >
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-gcr8-purple-600 rounded-t-lg transition-all duration-500 group-hover:bg-gcr8-purple-400" 
                    style={{ height: `${h}%` }}
                  ></div>
                </div>
                <span className="text-[10px] text-gray-400 font-medium">M</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-8">
          <h3 className="font-bold text-lg mb-6">Recent Activity</h3>
          <div className="space-y-6">
            <ActivityItem 
              title="Payout successful" 
              time="2 hours ago" 
              desc="Transferred $450.00 to bank" 
              color="text-green-500"
            />
            <ActivityItem 
              title="New Milestone" 
              time="5 hours ago" 
              desc="Reached 10k total followers!" 
              color="text-purple-500"
            />
            <ActivityItem 
              title="New Sale" 
              time="Yesterday" 
              desc="Pack #4 sold to @jdoe" 
              color="text-blue-500"
            />
            <ActivityItem 
              title="Live Stream ended" 
              time="Yesterday" 
              desc="45 min session, 1.2k views" 
              color="text-gray-500"
            />
          </div>
          <Button variant="ghost" className="w-full mt-6 text-sm text-gcr8-purple-600">View All activity</Button>
        </Card>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: string; change: string; trend: 'up' | 'down'; icon: React.ReactNode }> = ({ label, value, change, trend, icon }) => (
  <Card className="p-6">
    <div className="flex justify-between items-start mb-4">
      <div className="w-10 h-10 rounded-xl bg-gcr8-purple-950/5 dark:bg-white/5 flex items-center justify-center text-gcr8-purple-600">
        {icon}
      </div>
      <div className={`flex items-center gap-1 text-xs font-bold ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
        {trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
        {change}
      </div>
    </div>
    <div className="text-2xl font-display font-bold text-gcr8-purple-950 dark:text-white mb-1">{value}</div>
    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</div>
  </Card>
);

const ActivityItem: React.FC<{ title: string; time: string; desc: string; color: string }> = ({ title, time, desc, color }) => (
  <div className="relative pl-6 border-l-2 border-gray-50 dark:border-white/5 pb-1 last:pb-0">
    <div className={`absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-current ${color}`}></div>
    <div className="text-sm font-bold mb-0.5">{title}</div>
    <div className="text-xs text-gray-400 mb-1">{time}</div>
    <div className="text-xs text-gray-500 dark:text-gray-400">{desc}</div>
  </div>
);
