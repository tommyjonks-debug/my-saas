"use client";

import { DashboardSidebar } from "@/components/DashboardSidebar";
import {
  Phone,
  Users,
  DollarSign,
  Calendar,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
} from "lucide-react";

const statsCards = [
  {
    title: "Total Calls Made",
    value: "1,247",
    change: "+12.5%",
    trend: "up",
    icon: Phone,
    color: "#2563EB",
  },
  {
    title: "Leads Converted",
    value: "89",
    change: "+24.3%",
    trend: "up",
    icon: Users,
    color: "#10B981",
  },
  {
    title: "Revenue Tracked",
    value: "$48,392",
    change: "+18.2%",
    trend: "up",
    icon: DollarSign,
    color: "#F59E0B",
  },
  {
    title: "Appointments Booked",
    value: "156",
    change: "-2.4%",
    trend: "down",
    icon: Calendar,
    color: "#8B5CF6",
  },
];

const recentActivity = [
  {
    type: "call",
    message: "AI called Sarah Mitchell - Lead qualified",
    time: "2 min ago",
    status: "success",
  },
  {
    type: "appointment",
    message: "New appointment booked with Marcus Chen",
    time: "15 min ago",
    status: "info",
  },
  {
    type: "email",
    message: "Follow-up email sent to Diana Rodriguez",
    time: "32 min ago",
    status: "success",
  },
  {
    type: "lead",
    message: "New lead captured from website form",
    time: "1 hour ago",
    status: "info",
  },
  {
    type: "call",
    message: "AI call to James Wilson - Voicemail left",
    time: "2 hours ago",
    status: "warning",
  },
  {
    type: "conversion",
    message: "Lead converted: Tech Solutions Inc.",
    time: "3 hours ago",
    status: "success",
  },
];

function StatCard({
  stat,
}: {
  stat: (typeof statsCards)[0];
}) {
  return (
    <div className="glass-card p-6 hover:border-white/20 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)`,
            border: `1px solid ${stat.color}30`,
          }}
        >
          <stat.icon size={24} style={{ color: stat.color }} />
        </div>
        <div
          className={`flex items-center gap-1 text-sm ${
            stat.trend === "up" ? "text-[#10B981]" : "text-[#EF4444]"
          }`}
        >
          {stat.trend === "up" ? (
            <TrendingUp size={16} />
          ) : (
            <TrendingDown size={16} />
          )}
          {stat.change}
        </div>
      </div>
      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
      <div className="text-sm text-gray-400">{stat.title}</div>
    </div>
  );
}

function ActivityItem({
  activity,
}: {
  activity: (typeof recentActivity)[0];
}) {
  const statusColors = {
    success: "bg-[#10B981]/20 text-[#10B981]",
    warning: "bg-[#F59E0B]/20 text-[#F59E0B]",
    info: "bg-[#2563EB]/20 text-[#3B82F6]",
  };

  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
      <div
        className={`w-2 h-2 rounded-full mt-2 ${
          statusColors[activity.status as keyof typeof statusColors]
            ? "bg-current"
            : "bg-gray-500"
        }`}
        style={{
          background:
            activity.status === "success"
              ? "#10B981"
              : activity.status === "warning"
              ? "#F59E0B"
              : "#2563EB",
        }}
      />
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm">{activity.message}</p>
        <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
      </div>
      <ArrowUpRight size={16} className="text-gray-500 flex-shrink-0" />
    </div>
  );
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E]">
      <DashboardSidebar />

      <div className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">
            Welcome back, John
          </h1>
          <p className="text-gray-400">
            Here&apos;s what&apos;s happening with your business today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity Feed */}
          <div className="lg:col-span-2">
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">
                  Recent Activity
                </h2>
                <button className="text-sm text-[#3B82F6] hover:underline">
                  View all
                </button>
              </div>
              <div className="divide-y divide-white/5">
                {recentActivity.map((activity, index) => (
                  <ActivityItem key={index} activity={activity} />
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions / Chart placeholder */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full py-3 px-4 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/30 text-[#3B82F6] font-medium hover:bg-[#2563EB]/30 transition-colors">
                  Start New Campaign
                </button>
                <button className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
                  Import Leads
                </button>
                <button className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
                  View Reports
                </button>
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white mb-4">
                Upcoming Appointments
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 flex items-center justify-center text-[#3B82F6] font-semibold text-sm">
                    SM
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm truncate">
                      Sarah Mitchell
                    </div>
                    <div className="text-gray-500 text-xs">Today, 2:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#10B981]/20 flex items-center justify-center text-[#10B981] font-semibold text-sm">
                    MC
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm truncate">
                      Marcus Chen
                    </div>
                    <div className="text-gray-500 text-xs">Tomorrow, 10:00 AM</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] font-semibold text-sm">
                    DR
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm truncate">
                      Diana Rodriguez
                    </div>
                    <div className="text-gray-500 text-xs">Wed, 3:30 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
