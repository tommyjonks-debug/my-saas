"use client";

import { useEffect, useState } from "react";
import { Play } from "lucide-react";

interface AnimatedStat {
  value: string;
  label: string;
  suffix?: string;
}

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const numericValue = parseFloat(value.replace(/,/g, ""));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), numericValue);
      setDisplayValue(current.toLocaleString());

      if (step >= steps) {
        setDisplayValue(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [numericValue, value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export function Hero() {
  const stats: AnimatedStat[] = [
    { value: "2,400", label: "Calls Automated", suffix: "+" },
    { value: "87", label: "Lead Response Rate", suffix: "%" },
    { value: "3", label: "Revenue Growth", suffix: "x" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#2563EB]/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/5 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-sm text-gray-300">Now with AI-powered lead scoring</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up [animation-delay:100ms]">
          Stop Losing Leads.
          <br />
          <span className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent glow-text">
            Start Closing Deals.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up [animation-delay:200ms]">
          KnoxGrowth automates your calls, follow-ups, and lead pipeline so you
          can focus on running your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up [animation-delay:300ms]">
          <button className="btn-primary text-lg px-8">
            Start Free Trial
          </button>
          <button className="btn-outline flex items-center gap-2 text-lg px-8">
            <Play size={20} />
            Watch Demo
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up [animation-delay:400ms]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card px-8 py-6 text-center group hover:border-[#2563EB]/30 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
