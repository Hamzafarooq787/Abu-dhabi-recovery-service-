"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Wrench, Clock, Users, Truck } from "lucide-react";

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white">

        {/* HERO */}
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
              About Abu Dhabi Recovery Service
            </h1>
            <p className="mt-6 text-lg text-black/80 max-w-2xl">
              A modern vehicle recovery service built around speed, convenience, and
              professional workmanship — delivered directly to your location
              anywhere in Abu Dhabi.
            </p>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Abu Dhabi Recovery Service was created to remove the stress and
                inconvenience of being stranded on the road. We provide on-site
                recovery services for drivers who value time, safety, and reliability.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Whether you are parked at home, at work, or dealing with an
                unexpected breakdown, our recovery team comes fully equipped
                to resolve your issue on the spot anywhere in Abu Dhabi.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Every service is handled with care, precision, and a clear focus
                on customer satisfaction.
              </p>
            </div>

            <div
              className="relative rounded-3xl overflow-hidden border border-white/10 h-[500px] flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #0b0d10 0%, #2a1200 55%, #FF6A1A 130%)",
              }}
            >
              <Truck className="text-black/20" size={160} strokeWidth={1.2} />
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="py-24 bg-[#0b0d12]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">What We Do</h2>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                End-to-end vehicle recovery solutions designed for safety, efficiency,
                and complete peace of mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Recovery & Towing
                </h3>
                <p className="text-gray-400">
                  We recover and tow vehicles from your location using professional-grade
                  equipment, ensuring safe loading, transport, and drop-off.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Emergency Assistance
                </h3>
                <p className="text-gray-400">
                  For breakdowns, flat tyres, or dead batteries, our rapid-response
                  team gets you moving again quickly and safely.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Off-Road Recovery
                </h3>
                <p className="text-gray-400">
                  From desert sand to rough terrain, our technicians
                  handle specialist off-road recovery with precision.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Roadside Support
                </h3>
                <p className="text-gray-400">
                  Comprehensive roadside support covering Abu Dhabi and nearby
                  areas, available day and night.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

            <h2 className="text-3xl font-bold text-center mb-16">
              Our Commitment to You
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

              <div className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(255,106,26,0.15)" }}>
                  <ShieldCheck className="text-[#FF6A1A]" />
                </div>
                <h4 className="font-semibold mb-2">Reliability</h4>
                <p className="text-gray-400 text-sm">
                  Consistent, dependable service you can trust every time.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(255,106,26,0.15)" }}>
                  <Wrench className="text-[#FF6A1A]" />
                </div>
                <h4 className="font-semibold mb-2">Professional Standards</h4>
                <p className="text-gray-400 text-sm">
                  Skilled technicians using approved equipment and methods.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(255,106,26,0.15)" }}>
                  <Clock className="text-[#FF6A1A]" />
                </div>
                <h4 className="font-semibold mb-2">Fast Response</h4>
                <p className="text-gray-400 text-sm">
                  Efficient arrival times designed around urgent situations.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(255,106,26,0.15)" }}>
                  <Users className="text-[#FF6A1A]" />
                </div>
                <h4 className="font-semibold mb-2">Customer First</h4>
                <p className="text-gray-400 text-sm">
                  Clear communication and service focused on your convenience.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-24"
          style={{ backgroundColor: "#FF6A1A" }}
        >
          <div className="max-w-3xl mx-auto px-6 text-center text-black">
            <h2 className="text-3xl font-bold mb-4">
              Experience a Better Recovery Service
            </h2>
            <p className="mb-8">
              Professional vehicle recovery across Abu Dhabi. One call is all it
              takes to get expert help at your location.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href={siteConfig.links.telLink}
                className="bg-black text-white px-6 py-3 rounded-full font-semibold"
              >
                Call {siteConfig.phoneDisplay}
              </a>

              <a
                href={siteConfig.links.whatsappLink}
                className="border border-black px-6 py-3 rounded-full font-semibold"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
