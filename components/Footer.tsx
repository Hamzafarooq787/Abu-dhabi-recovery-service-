"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../config/site";

export default function Footer() {
  return (
    <footer className="bg-[#0b0d10] text-gray-400 pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-black text-black"
                style={{ backgroundColor: siteConfig.brandColor }}
              >
                A
              </span>
              <span className="text-base font-bold text-white">
                Abu Dhabi Recovery Service
              </span>
            </Link>

            <p className="mt-4 text-sm leading-relaxed">
              Professional vehicle recovery and roadside assistance
              providing fast, on-site help across Musaffah, Abu Dhabi and
              nearby areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#FF6A1A]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF6A1A]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF6A1A]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF6A1A]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services (ALL linked to Services page) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/recovery-services" className="hover:text-[#FF6A1A]">
                  Recovery Services
                </Link>
              </li>
              <li>
                <Link href="/services/towing-services" className="hover:text-[#FF6A1A]">
                  Towing Services
                </Link>
              </li>
              <li>
                <Link href="/services/roadside-assistance" className="hover:text-[#FF6A1A]">
                  Roadside Assistance
                </Link>
              </li>
              <li>
                <Link href="/services/fuel-delivery" className="hover:text-[#FF6A1A]">
                  Fuel Delivery
                </Link>
              </li>
              <li>
                <Link href="/services/tyre-change" className="hover:text-[#FF6A1A]">
                  Tyre Change
                </Link>
              </li>
              <li>
                <Link href="/services/battery-boost" className="hover:text-[#FF6A1A]">
                  Battery Boost
                </Link>
              </li>
              <li>
                <Link href="/services/off-road-recovery-services" className="hover:text-[#FF6A1A]">
                  Off-Road Recovery Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info (ALL linked to Contact page) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Information</h4>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} />
                <Link
                  href="/contact"
                  className="hover:text-[#FF6A1A]"
                >
                  {siteConfig.phoneDisplay}
                </Link>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={16} />
                <Link
                  href="/contact"
                  className="hover:text-[#FF6A1A]"
                >
                  {siteConfig.links.email}
                </Link>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={16} />
                <Link
                  href="/contact"
                  className="hover:text-[#FF6A1A]"
                >
                  {siteConfig.location} and surrounding areas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>
            © 2026 {siteConfig.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
