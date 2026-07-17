"use client";

import { siteConfig } from "../config/site";

const reviews = [
  {
    name: "Ahmed K.",
    text: "Called late evening after my car broke down in Musaffah and the recovery team arrived quicker than expected. Very professional and efficient service.",
  },
  {
    name: "Sara M.",
    text: "Booked while at work and the team came directly to my office car park. Vehicle towed smoothly with no hassle at all.",
  },
  {
    name: "David C.",
    text: "Got stuck off-road in the desert. Clear pricing, quick response, and great workmanship. Would definitely use again.",
  },
  {
    name: "Fatima R.",
    text: "Explained everything clearly and completed the battery boost at my home. Friendly and reliable service.",
  },
  {
    name: "Mohammed A.",
    text: "Emergency roadside assistance during the night and they actually showed up fast. Very impressed with the response time.",
  },
  {
    name: "Layla J.",
    text: "Easy booking, confirmation received quickly, and fuel delivered the same day. Smooth experience from start to finish.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-[#0b0d10] py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Customers Say About Us
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Feedback from drivers who trust our vehicle recovery service for
            fast, on-site assistance.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="
                bg-[#12151b]
                border border-white/5
                rounded-2xl
                p-6
                max-w-[380px]
                mx-auto
                transition-all duration-300
                hover:-translate-y-2
                hover:border-[#FF6A1A]
                hover:shadow-[0_0_25px_rgba(255,106,26,0.12)]
              "
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    style={{ color: siteConfig.brandColor }}
                    className="text-sm"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-gray-300 leading-relaxed">
                “{review.text}”
              </p>

              {/* Name */}
              <div className="mt-4 text-sm font-semibold text-white">
                {review.name}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="
              inline-flex items-center gap-2
              text-sm font-semibold
              transition-colors duration-300
              hover:text-[#FF6A1A]
            "
            style={{ color: siteConfig.brandColor }}
          >
            View more reviews
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
