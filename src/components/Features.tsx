"use client";

import {
  Phone,
  Mail,
  Users,
  Calendar,
  BarChart3,
  Database,
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "AI Call Automation",
    description:
      "Let AI handle your outreach calls with natural conversations, follow-up scheduling, and lead qualification — 24/7.",
    color: "#2563EB",
  },
  {
    icon: Mail,
    title: "Smart Follow-Ups",
    description:
      "Automated email and SMS sequences that adapt based on lead behavior and engagement patterns.",
    color: "#10B981",
  },
  {
    icon: Users,
    title: "Lead Pipeline",
    description:
      "Visual pipeline management with AI-powered lead scoring and automated stage progression.",
    color: "#F59E0B",
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description:
      "Self-service booking calendar with automated reminders and calendar sync for all major platforms.",
    color: "#8B5CF6",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Real-time insights on call performance, conversion rates, and revenue attribution.",
    color: "#EF4444",
  },
  {
    icon: Database,
    title: "CRM Integration",
    description:
      "Seamless sync with Salesforce, HubSpot, Pipedrive and 50+ other platforms.",
    color: "#06B6D4",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">
              Scale Your Sales
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Powerful automation tools designed specifically for small businesses
            ready to grow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 group hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                  border: `1px solid ${feature.color}30`,
                }}
              >
                <feature.icon
                  size={24}
                  style={{ color: feature.color }}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
