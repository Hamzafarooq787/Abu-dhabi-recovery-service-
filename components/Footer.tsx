"use client";

import Link from "next/link";
import Image from "next/image";
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
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Abu Dhabi Recovery Service"
                width={160}
                height={53}
                className="h-10 w-auto"
              />
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
                <Link href="/" className="hover:text-[#7CFC00]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#7CFC00]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#7CFC00]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#7CFC00]">
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
                <Link href="/services/recovery-services" className="hover:text-[#7CFC00]">
                  Recovery Services
                </Link>
              </li>
              <li>
                <Link href="/services/towing-services" className="hover:text-[#7CFC00]">
                  Towing Services
                </Link>
              </li>
              <li>
                <Link href="/services/roadside-assistance" className="hover:text-[#7CFC00]">
                  Roadside Assistance
                </Link>
              </li>
              <li>
                <Link href="/services/fuel-delivery" className="hover:text-[#7CFC00]">
                  Fuel Delivery
                </Link>
              </li>
              <li>
                <Link href="/services/tyre-change" className="hover:text-[#7CFC00]">
                  Tyre Change
                </Link>
              </li>
              <li>
                <Link href="/services/battery-boost" className="hover:text-[#7CFC00]">
                  Battery Boost
                </Link>
              </li>
              <li>
                <Link href="/services/off-road-recovery-services" className="hover:text-[#7CFC00]">
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
                  className="hover:text-[#7CFC00]"
                >
                  {siteConfig.phoneDisplay}
                </Link>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={16} />
                <Link
                  href="/contact"
                  className="hover:text-[#7CFC00]"
                >
                  {siteConfig.links.email}
                </Link>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={16} />
                <Link
                  href="/contact"
                  className="hover:text-[#7CFC00]"
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
