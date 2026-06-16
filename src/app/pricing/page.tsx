import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for trying out KnoxGrowth",
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "/month",
    description: "For growing businesses ready to scale",
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Scale",
    price: "$149",
    period: "/month",
    description: "For teams ready to dominate their market",
    cta: "Contact Sales",
    popular: false,
  },
];

const featureCategories = [
  {
    name: "AI Calling",
    features: [
      { name: "AI calls per month", starter: "100", growth: "1,000", scale: "Unlimited" },
      { name: "Voice customization", starter: false, growth: true, scale: true },
      { name: "Call recording", starter: false, growth: true, scale: true },
      { name: "Transcription", starter: false, growth: true, scale: true },
      { name: "Multi-language support", starter: false, growth: false, scale: true },
    ],
  },
  {
    name: "Automation",
    features: [
      { name: "Email sequences", starter: "Basic", growth: "Advanced", scale: "Advanced" },
      { name: "SMS automation", starter: false, growth: true, scale: true },
      { name: "Custom workflows", starter: false, growth: true, scale: true },
      { name: "Lead scoring", starter: false, growth: true, scale: true },
      { name: "Appointment booking", starter: false, growth: true, scale: true },
    ],
  },
  {
    name: "Integrations",
    features: [
      { name: "CRM integrations", starter: "1", growth: "10+", scale: "50+" },
      { name: "Calendar sync", starter: false, growth: true, scale: true },
      { name: "Zapier", starter: false, growth: true, scale: true },
      { name: "API access", starter: false, growth: false, scale: true },
      { name: "Webhooks", starter: false, growth: false, scale: true },
    ],
  },
  {
    name: "Analytics & Reporting",
    features: [
      { name: "Basic analytics", starter: true, growth: true, scale: true },
      { name: "Conversion tracking", starter: false, growth: true, scale: true },
      { name: "Revenue attribution", starter: false, growth: true, scale: true },
      { name: "Custom reports", starter: false, growth: false, scale: true },
      { name: "Team performance", starter: false, growth: false, scale: true },
    ],
  },
  {
    name: "Support & Account",
    features: [
      { name: "Email support", starter: true, growth: true, scale: true },
      { name: "Priority support", starter: false, growth: true, scale: true },
      { name: "Dedicated account manager", starter: false, growth: false, scale: true },
      { name: "White-label option", starter: false, growth: false, scale: true },
      { name: "SLA guarantee", starter: false, growth: false, scale: true },
    ],
  },
];

function FeatureValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check size={18} className="text-[#10B981]" />
    ) : (
      <X size={18} className="text-gray-600" />
    );
  }
  return <span className="text-gray-300 text-sm">{value}</span>;
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E]">
      <Header />

      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Pricing Plans
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include a
              14-day free trial.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative glass-card p-8 ${
                  plan.popular ? "border-2 border-[#2563EB] glow-blue" : ""
                }`}
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
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Feature comparison table */}
          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-gray-400 font-medium">
                      Features
                    </th>
                    <th className="text-center p-6 text-white font-semibold">
                      Starter
                    </th>
                    <th className="text-center p-6 text-white font-semibold bg-[#2563EB]/10">
                      Growth
                    </th>
                    <th className="text-center p-6 text-white font-semibold">
                      Scale
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featureCategories.map((category, catIndex) => (
                    <>
                      <tr
                        key={`cat-${catIndex}`}
                        className="bg-white/5"
                      >
                        <td
                          colSpan={4}
                          className="px-6 py-3 text-[#2563EB] font-semibold text-sm uppercase tracking-wide"
                        >
                          {category.name}
                        </td>
                      </tr>
                      {category.features.map((feature, featIndex) => (
                        <tr
                          key={`feat-${catIndex}-${featIndex}`}
                          className="border-b border-white/5 hover:bg-white/5 transition-colors"
                        >
                          <td className="px-6 py-4 text-gray-300 text-sm">
                            {feature.name}
                          </td>
                          <td className="text-center p-4">
                            <FeatureValue value={feature.starter} />
                          </td>
                          <td className="text-center p-4 bg-[#2563EB]/5">
                            <FeatureValue value={feature.growth} />
                          </td>
                          <td className="text-center p-4">
                            <FeatureValue value={feature.scale} />
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ or CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-6">
              Our team is here to help you find the perfect plan.
            </p>
            <button className="btn-outline">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
