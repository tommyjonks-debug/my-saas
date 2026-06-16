"use client";

import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for trying out KnoxGrowth",
    features: [
      "100 AI calls/month",
      "Basic email automation",
      "Lead capture forms",
      "Basic analytics",
      "Email support",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "/month",
    description: "For growing businesses ready to scale",
    features: [
      "1,000 AI calls/month",
      "Full automation suite",
      "CRM integration",
      "Advanced analytics",
      "Calendar booking",
      "Priority support",
      "Custom workflows",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Scale",
    price: "$149",
    period: "/month",
    description: "For teams ready to dominate their market",
    features: [
      "Unlimited AI calls",
      "Everything in Growth",
      "White-label options",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "Team collaboration",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E] via-[#0F172A] to-[#0A0F1E]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass-card p-8 ${
                plan.popular
                  ? "border-2 border-[#2563EB] glow-blue"
                  : ""
              } transition-all duration-300 hover:-translate-y-1`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#2563EB] rounded-full text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-[#10B981] flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "btn-primary"
                    : "btn-outline"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
