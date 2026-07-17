"use client";

import { CheckCircle2, Clock, MapPin, Phone, PhoneCall, ShieldCheck } from "lucide-react";
import { siteConfig } from "../config/site";
import FloatingContactIcons from "./FloatingContactIcons";
import ServiceHighlights from "./ServiceHighlights";

const trustPoints = [
  "Licensed & Insured",
  "24/7 Availability",
  "All Vehicle Types",
];

const stats = [
  { icon: Clock, label: "Avg. Response", value: "30 min" },
  { icon: MapPin, label: "Coverage", value: "All Abu Dhabi" },
  { icon: ShieldCheck, label: "Available", value: "24/7" },
];

export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full pt-28 md:pt-36 pb-16 md:pb-24"
        style={{
          background:
            "radial-gradient(circle at 15% 15%, rgba(255,106,26,0.18) 0%, transparent 40%), linear-gradient(160deg, #0b0d10 0%, #14100a 55%, #1a1300 100%)",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">

            {/* Left: Copy */}
            <div className="text-center lg:text-left">
              {/* Eyebrow */}
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs sm:text-sm font-semibold"
                style={{ borderColor: "rgba(255,106,26,0.4)", color: siteConfig.brandColor }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: siteConfig.brandColor }}
                />
                24/7 Vehicle Recovery in {siteConfig.location}
              </div>

              <h1 className="mt-6 font-extrabold tracking-tight leading-[1.1] text-4xl sm:text-5xl lg:text-6xl">
                Abu Dhabi Recovery Service
              </h1>

              <p
                className="mt-3 font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight"
                style={{ color: siteConfig.brandColor }}
              >
                Fast, Professional Vehicle Recovery
              </p>

              <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                On-demand recovery, towing, and roadside assistance across
                Musaffah and Abu Dhabi. Whether you are stranded on the road
                or off-road, we arrive fully equipped to get you moving
                safely, without delay.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={siteConfig.links.telLink}
                  onClick={() => (window as any).gtag_report_conversion?.(siteConfig.links.telLink)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-black text-center transition hover:opacity-90"
                  style={{ backgroundColor: siteConfig.brandColor }}
                >
                  <PhoneCall size={18} />
                  Call Now
                </a>

                <a
                  href={siteConfig.links.whatsappLink}
                  onClick={() => (window as any).gtag_report_conversion?.(siteConfig.links.whatsappLink)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-center border border-white/20 text-white transition hover:bg-white/10"
                >
                  WhatsApp Us
                </a>
              </div>

              {/* Trust points */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={16} style={{ color: siteConfig.brandColor }} />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quick-contact panel */}
            <div className="w-full max-w-md mx-auto lg:max-w-none">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8">
                <h2 className="text-lg font-bold text-white">Need Help Right Now?</h2>
                <p className="mt-2 text-sm text-gray-400">
                  Call or WhatsApp us directly — our team is standing by.
                </p>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {stats.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/10 bg-black/30 p-3 text-center"
                    >
                      <Icon size={18} className="mx-auto" style={{ color: siteConfig.brandColor }} />
                      <div className="mt-2 text-sm font-bold text-white">{value}</div>
                      <div className="text-[11px] text-gray-500 leading-tight">{label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={siteConfig.links.telLink}
                  onClick={() => (window as any).gtag_report_conversion?.(siteConfig.links.telLink)}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-black transition hover:opacity-90"
                  style={{ backgroundColor: siteConfig.brandColor }}
                >
                  <Phone size={18} />
                  {siteConfig.phoneDisplay}
                </a>

                <div className="mt-4 text-center text-xs text-gray-500">
                  Direct line, no call centers.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Floating Icons */}
      <FloatingContactIcons />

      {/* FEATURES SECTION */}
      <ServiceHighlights />
    </>
  );
}
