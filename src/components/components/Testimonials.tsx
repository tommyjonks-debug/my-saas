"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Owner, Mitchell Real Estate",
    image: "/testimonials/sarah.jpg",
    quote:
      "KnoxGrowth completely transformed our lead follow-up process. We went from missing 60% of leads to responding to every single one within minutes. Our closings increased by 40% in just 3 months.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Founder, Chen Financial Services",
    image: "/testimonials/marcus.jpg",
    quote:
      "The AI call automation is unreal. It books appointments on my calendar while I'm in meetings. I used to spend 4 hours a day on phones — now I spend that time with clients.",
    rating: 5,
  },
  {
    name: "Diana Rodriguez",
    role: "CEO, Rodriguez Home Care",
    image: "/testimonials/diana.jpg",
    quote:
      "As a small business owner, I was drowning in admin work. KnoxGrowth automated our entire intake and follow-up process. It's like having an extra team member that never sleeps.",
    rating: 5,
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="glass-card p-6 hover:border-white/20 transition-all duration-300">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-[#F59E0B] text-[#F59E0B]"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-300 leading-relaxed mb-6">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center text-white font-semibold">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <div className="font-semibold text-white">{testimonial.name}</div>
          <div className="text-sm text-gray-400">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">
              Small Business Owners
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how businesses like yours are growing with KnoxGrowth.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Trust logos placeholder */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-6">
            Trusted by 500+ small businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
            {["Realty", "Financial", "Healthcare", "Legal", "Construction"].map(
              (industry) => (
                <div
                  key={industry}
                  className="text-gray-400 text-sm font-medium"
                >
                  {industry}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
