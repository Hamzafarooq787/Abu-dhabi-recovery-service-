"use client";

import { siteConfig } from "../config/site";
import FloatingContactIcons from "./FloatingContactIcons";
import ServiceHighlights from "./ServiceHighlights";

export default function Hero() {
  return (
    <>
      {/* HERO */}
<section
  className="relative w-full pt-24 md:pt-32 min-h-[90vh] flex items-center"
  style={{
    background:
      "radial-gradient(circle at 20% 20%, rgba(255,106,26,0.35) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,106,26,0.25) 0%, transparent 50%), linear-gradient(160deg, #0b0d10 0%, #1a1300 60%, #2a1200 100%)",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center text-center w-full">
    
    {/* Vertical spacing wrapper */}
    <div className="w-full flex flex-col items-center pt-4 pb-8 md:pt-8 md:pb-12">
      
      <h1 className="w-full font-black tracking-tight leading-[1.05]">
        
        {/* Main line - Adjusted top spacing */}
        <span className="block text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl mb-2 sm:mb-3 md:mb-4">
          Abu Dhabi Recovery Service
        </span>

        {/* Sub line */}
        <span
          className="block font-black text-[1.8rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl"
          style={{ color: siteConfig.brandColor }}
        >
          Anywhere In Abu Dhabi, Anytime You Need Us.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 sm:mt-8 md:mt-10 text-lg sm:text-xl md:text-2xl font-semibold max-w-2xl text-gray-200 leading-relaxed px-4">
        On-demand vehicle recovery, towing, and roadside assistance across
        Musaffah and Abu Dhabi. Whether you are stranded on the road or off-road,
        we come fully equipped to get you moving safely without delay.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
        <a
          href={siteConfig.links.telLink}
          onClick={() => (window as any).gtag_report_conversion?.(siteConfig.links.telLink)}
          className="px-8 py-4 rounded-full font-bold text-black text-center transition hover:opacity-90 hover:scale-105"
          style={{ backgroundColor: siteConfig.brandColor }}
        >
          Call Now
        </a>

        <a
          href={siteConfig.links.whatsappLink}
          onClick={() => (window as any).gtag_report_conversion?.(siteConfig.links.whatsappLink)}
          className="px-8 py-4 rounded-full font-bold text-center border transition hover:bg-white/10 hover:scale-105"
          style={{
            borderColor: siteConfig.brandColor,
            color: siteConfig.brandColor,
          }}
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Floating Icons (scroll par fixed rahenge) */}
      <FloatingContactIcons />

      {/* FEATURES SECTION (Hero ke neeche) */}
      <ServiceHighlights />
    </>
  );
}
