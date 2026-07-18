"use client";

import Image from "next/image";
import { Phone, PhoneCall, MessageCircle, Mail, Clock, MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <>
    <Header/>
      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-center pt-24 overflow-hidden">
        <Image
          src="/images/roadside-assistance.webp"
          alt="Recovery technician assisting a driver at the roadside in Abu Dhabi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(11,13,16,0.94) 25%, rgba(255,106,26,0.5) 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs sm:text-sm font-semibold mb-6"
            style={{ borderColor: "rgba(255,106,26,0.4)", color: siteConfig.brandColor }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: siteConfig.brandColor }} />
            24/7 Support in {siteConfig.location}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Get in Touch With Abu Dhabi Recovery Service
          </h1>
          <p className="mt-6 text-gray-300 max-w-2xl text-lg">
            Need urgent vehicle recovery or want to schedule a visit?
            Our recovery team is available across Abu Dhabi, day and night.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.links.telLink}
              onClick={() => (window as any).gtag_report_conversion?.(siteConfig.links.telLink)}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-black transition hover:opacity-90"
              style={{ backgroundColor: siteConfig.brandColor }}
            >
              <PhoneCall size={18} />
              Call {siteConfig.phoneDisplay}
            </a>

            <a
              href={siteConfig.links.whatsappLink}
              onClick={() => (window as any).gtag_report_conversion?.(siteConfig.links.whatsappLink)}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold border border-white/20 text-white transition hover:bg-white/10"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Choose How You’d Like to Contact Us
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Fast responses, clear communication, and professional support from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* CALL */}
            <div className="bg-[#12151b] rounded-2xl p-8 border border-white/5 hover:border-[#FF6A1A] transition">
              <Phone className="text-[#FF6A1A]" size={28} />
              <h3 className="mt-6 text-xl font-semibold text-white">Call Us</h3>
              <p className="mt-3 text-gray-400 text-sm">
                Speak directly with our team for immediate recovery assistance or pricing.
              </p>

              <a
                href={siteConfig.links.telLink}
                onClick={() => (window as any).gtag_report_conversion?.(siteConfig.links.telLink)}
                className="inline-flex items-center gap-2 mt-6 text-black bg-[#FF6A1A] px-5 py-3 rounded-full text-sm font-semibold"
              >
                {siteConfig.phoneDisplay} <ArrowRight size={16} />
              </a>
            </div>

            {/* WHATSAPP */}
            <div className="bg-[#12151b] rounded-2xl p-8 border border-white/5 hover:border-[#FF6A1A] transition">
              <MessageCircle className="text-[#FF6A1A]" size={28} />
              <h3 className="mt-6 text-xl font-semibold text-white">WhatsApp</h3>
              <p className="mt-3 text-gray-400 text-sm">
                Message us for quick replies, availability, and location confirmation.
              </p>

              <a
                href={siteConfig.links.whatsappLink}
                onClick={() => (window as any).gtag_report_conversion?.(siteConfig.links.whatsappLink)}
                target="_blank"
                className="inline-flex items-center gap-2 mt-6 text-black bg-[#FF6A1A] px-5 py-3 rounded-full text-sm font-semibold"
              >
                Start Chat <ArrowRight size={16} />
              </a>
            </div>

            {/* EMAIL */}
            <div className="bg-[#12151b] rounded-2xl p-8 border border-white/5 hover:border-[#FF6A1A] transition">
              <Mail className="text-[#FF6A1A]" size={28} />
              <h3 className="mt-6 text-xl font-semibold text-white">Email Us</h3>
              <p className="mt-3 text-gray-400 text-sm">
                Ideal for general enquiries, bookings, or non-urgent requests.
              </p>

              <a
                href={`mailto:${siteConfig.links.email}`}
                className="inline-flex items-center gap-2 mt-6 text-[#FF6A1A] text-sm font-medium"
              >
                {siteConfig.links.email} <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* HOURS & AREA */}
      <section className="py-24 bg-black/95">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* HOURS */}
          <div className="bg-[#12151b] rounded-2xl p-8 border border-white/5">
            <Clock className="text-[#FF6A1A]" size={28} />
            <h3 className="mt-6 text-2xl font-semibold text-white">Service Availability</h3>

            <ul className="mt-6 space-y-3 text-sm text-gray-400">
              <li>Emergency recovery services: <span className="text-white">24/7</span></li>
              <li>Scheduled bookings: <span className="text-white">Flexible times</span></li>
              <li>Phone & WhatsApp support: <span className="text-white">Always available</span></li>
            </ul>
          </div>

          {/* LOCATION */}
          <div className="bg-[#12151b] rounded-2xl p-8 border border-white/5">
            <MapPin className="text-[#FF6A1A]" size={28} />
            <h3 className="mt-6 text-2xl font-semibold text-white">
              Service Coverage
            </h3>

            <p className="mt-4 text-sm text-gray-400">
              We operate as a fully mobile vehicle recovery service, based in {siteConfig.location} and covering
              all of Abu Dhabi and nearby surrounding areas. Wherever you are, we come directly to you.
            </p>

            <p className="mt-4 text-sm text-white">
              Mobile service • On-site recovery • All Abu Dhabi areas
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FF6A1A] py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Need Immediate Vehicle Recovery?
          </h2>
          <p className="mt-4 text-black/80 max-w-2xl mx-auto">
            Don’t wait roadside. Call now and we’ll dispatch a recovery team to your location.
          </p>

          <a
            href={siteConfig.links.telLink}
            onClick={() => (window as any).gtag_report_conversion?.(siteConfig.links.telLink)}
            className="inline-flex items-center gap-2 mt-8 bg-black text-[#FF6A1A] px-8 py-4 rounded-full font-semibold"
          >
            Call Now <ArrowRight size={18} />
          </a>
        </div>
      </section>
      <Footer/>
    </>
  );
}
