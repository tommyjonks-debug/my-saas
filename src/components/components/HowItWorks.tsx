"use client";

import { Link2, Bot, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "Connect your leads",
    description:
      "Import leads from your CRM, website forms, or upload a list. KnoxGrowth integrates with your existing tools in minutes.",
  },
  {
    icon: Bot,
    number: "02",
    title: "Let AI handle outreach",
    description:
      "Our AI makes calls, sends emails, and manages follow-ups automatically — with natural conversations that book appointments.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Close more deals",
    description:
      "Focus on closing while KnoxGrowth fills your calendar with qualified appointments and tracks every interaction.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0F1E] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get started in under 10 minutes with our simple three-step process.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center"
              >
                {/* Step number bubble */}
                <div className="relative inline-flex mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
                    <step.icon size={32} className="text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 text-xs font-bold text-[#2563EB] bg-[#111827] px-2 py-1 rounded-full border border-[#2563EB]/30">
                    {step.number}
                  </span>
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 left-full -translate-y-1/2 ml-4">
                      <ArrowRight size={20} className="text-[#2563EB]/40" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
