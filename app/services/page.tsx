"use client";

import Link from "next/link";
import {
  Phone,
  Clock,
  ShieldCheck,
  Wrench,
  CheckCircle,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function ServicesPage() {
  const services = [
    {
      title: "Recovery Services",
      text: "Professional vehicle recovery completed at your home, workplace, or roadside location.",
      background: "linear-gradient(135deg, #0b0d10 0%, #331a00 55%, #FF6A1A 140%)",
      href: "/services/recovery-services",
    },
    {
      title: "Towing Services",
      text: "Safe towing for cars, vans, and light commercial vehicles to your chosen destination.",
      background: "radial-gradient(circle at 25% 30%, rgba(255,106,26,0.5) 0%, transparent 55%), linear-gradient(160deg, #0b0d10 0%, #1a1000 100%)",
      href: "/services/towing-services",
    },
    {
      title: "Roadside Assistance",
      text: "Rapid assistance when driving is unsafe due to a breakdown or emergency.",
      background: "linear-gradient(150deg, #0b0d10 0%, #2a1200 60%, #FF7A29 150%)",
      href: "/services/roadside-assistance",
    },
    {
      title: "Fuel Delivery",
      text: "Run out of fuel? We deliver directly to your location without the hassle of a tow.",
      background: "radial-gradient(circle at 75% 25%, rgba(255,106,26,0.45) 0%, transparent 55%), linear-gradient(170deg, #0b0d10 0%, #1f1400 100%)",
      href: "/services/fuel-delivery",
    },
    {
      title: "Tyre Change",
      text: "Round-the-clock support for punctures and tyre problems across Abu Dhabi.",
      background: "linear-gradient(140deg, #0b0d10 0%, #2e1400 55%, #FF6A1A 145%)",
      href: "/services/tyre-change",
    },
    {
      title: "Battery Boost",
      text: "Jump-starts and battery replacement to get you moving again quickly.",
      background: "radial-gradient(circle at 30% 70%, rgba(255,122,41,0.5) 0%, transparent 55%), linear-gradient(160deg, #0b0d10 0%, #1a1300 100%)",
      href: "/services/battery-boost",
    },
    {
      title: "Off-Road Recovery Services",
      text: "Specialist recovery for vehicles stuck in sand, mud, or rough terrain.",
      background: "linear-gradient(145deg, #0b0d10 0%, #331a00 50%, #FF6A1A 135%)",
      href: "/services/off-road-recovery-services",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#0b0d10] text-white">
        {/* ================= HERO ================= */}
        <section className="relative min-h-[70vh] flex items-center">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: siteConfig.brandColor,
              opacity: 0.85,
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-black max-w-3xl">
              Vehicle Recovery Services Across Abu Dhabi
            </h1>

            <p className="mt-6 text-lg text-black/80 max-w-2xl">
              Professional on-site recovery services delivered wherever you are.
              From emergencies to off-road recovery, we bring the solution to you.
            </p>
          </div>
        </section>

        {/* ================= SERVICES GRID ================= */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Complete Service Range
              </h2>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Reliable vehicle recovery solutions for cars, vans, and light commercial
                vehicles across Abu Dhabi.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((item, i) => (
                <div
                  key={i}
                  className="group bg-[#12151b] rounded-2xl overflow-hidden
                  border border-white/5 transition-all duration-300
                  hover:-translate-y-2 hover:border-[#FF6A1A]"
                >
                  {/* Visual */}
                  <div className="relative overflow-hidden">
                    <div
                      className="h-64 md:h-72 transition-transform duration-500 group-hover:scale-110"
                      style={{ background: item.background }}
                    />
                    <div className="absolute inset-0 bg-black/30" />

                    {/* Icon */}
                    <div
                      className="absolute bottom-4 left-4 w-12 h-12 rounded-full
                      flex items-center justify-center shadow-xl"
                      style={{ backgroundColor: siteConfig.brandColor }}
                    >
                      <Wrench size={18} className="text-black" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{item.title}</h3>

                    <p className="mt-3 text-sm text-gray-400">
                      {item.text}
                    </p>

                    <div className="mt-5">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold
                        transition-all duration-300 group-hover:gap-3"
                        style={{ color: siteConfig.brandColor }}
                      >
                        Learn more <span className="text-lg">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHAT’S INCLUDED ================= */}
        <section className="py-20 bg-[#0f1217]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">
              What’s Included With Every Service
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
              {[
                { icon: <ShieldCheck />, text: "Professional Installation" },
                { icon: <CheckCircle />, text: "Quality Assured" },
                { icon: <Clock />, text: "Fast Response" },
                { icon: <Wrench />, text: "Safety Inspections" },
              ].map((item, i) => (
                <div key={i}>
                  <div
                    className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: siteConfig.brandColor }}
                  >
                    <div className="text-black">{item.icon}</div>
                  </div>
                  <p className="text-sm text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section
          className="py-20 text-center"
          style={{ backgroundColor: siteConfig.brandColor }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Ready to Book Your Recovery Service?
          </h2>

          <p className="mt-4 text-black/80">
            Call now for immediate assistance or schedule your service today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={siteConfig.links.telLink}
              className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold"
            >
              <Phone size={18} />
              Call {siteConfig.phoneDisplay}
            </a>

            <a
              href={siteConfig.links.whatsappLink}
              className="flex items-center gap-3 border border-black px-8 py-4 rounded-full font-semibold text-black hover:bg-black hover:text-white transition"
            >
              WhatsApp Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
