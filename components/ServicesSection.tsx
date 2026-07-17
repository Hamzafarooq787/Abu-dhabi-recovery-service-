"use client";

import Link from "next/link";
import { siteConfig } from "../config/site";

const services = [
  {
    title: "Recovery Services",
    desc: "Fast, professional vehicle recovery wherever you are stranded across Abu Dhabi.",
    background: "linear-gradient(135deg, #0b0d10 0%, #331a00 55%, #FF6A1A 140%)",
    href: "/services/recovery-services",
  },
  {
    title: "Towing Services",
    desc: "Safe towing for cars, vans, and light commercial vehicles to your destination of choice.",
    background: "radial-gradient(circle at 25% 30%, rgba(255,106,26,0.5) 0%, transparent 55%), linear-gradient(160deg, #0b0d10 0%, #1a1000 100%)",
    href: "/services/towing-services",
  },
  {
    title: "Roadside Assistance",
    desc: "Round-the-clock roadside support for breakdowns and emergencies, day or night.",
    background: "linear-gradient(150deg, #0b0d10 0%, #2a1200 60%, #FF7A29 150%)",
    href: "/services/roadside-assistance",
  },
  {
    title: "Fuel Delivery",
    desc: "Run out of fuel? We deliver directly to your location so you can get back on the road.",
    background: "radial-gradient(circle at 75% 25%, rgba(255,106,26,0.45) 0%, transparent 55%), linear-gradient(170deg, #0b0d10 0%, #1f1400 100%)",
    href: "/services/fuel-delivery",
  },
  {
    title: "Tyre Change",
    desc: "Quick, on-site tyre changes carried out by experienced professionals.",
    background: "linear-gradient(140deg, #0b0d10 0%, #2e1400 55%, #FF6A1A 145%)",
    href: "/services/tyre-change",
  },
  {
    title: "Battery Boost",
    desc: "Flat battery? We jump-start or replace it on the spot to get you moving again.",
    background: "radial-gradient(circle at 30% 70%, rgba(255,122,41,0.5) 0%, transparent 55%), linear-gradient(160deg, #0b0d10 0%, #1a1300 100%)",
    href: "/services/battery-boost",
  },
  {
    title: "Off-Road Recovery Services",
    desc: "Specialist recovery for vehicles stuck off-road in sand, mud, or rough terrain.",
    background: "linear-gradient(145deg, #0b0d10 0%, #331a00 50%, #FF6A1A 135%)",
    href: "/services/off-road-recovery-services",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#0b0d10] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Recovery Services
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Professional vehicle recovery services delivered directly to your
            location across Abu Dhabi, designed for speed, safety, and convenience.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-2 sm:px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                max-w-[380px]
                mx-auto
                bg-[#12151b]
                rounded-2xl
                overflow-hidden
                border border-white/5
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(255,106,26,0.15)]
                hover:border-[#FF6A1A]
              "
            >
              {/* Visual */}
              <div className="overflow-hidden">
                <div
                  className="
                    h-64 sm:h-72
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                  style={{ background: service.background }}
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3
                  className="
                    text-lg font-semibold text-white
                    transition-colors duration-300
                    group-hover:text-[#FF6A1A]
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-3 text-sm text-gray-400
                    transition-colors duration-300
                    group-hover:text-gray-300
                  "
                >
                  {service.desc}
                </p>

                {/* Learn more */}
                <div className="mt-5">
                  <Link href={service.href}>
                    <span
                      className="
        inline-block text-sm font-semibold cursor-pointer
        transition-all duration-300
        group-hover:text-[#FF6A1A]
        group-hover:tracking-wide
      "
                      style={{ color: siteConfig.brandColor }}
                    >
                      Learn more →
                    </span>
                  </Link>
                </div>


              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
