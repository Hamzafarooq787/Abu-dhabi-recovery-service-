import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abu Dhabi Recovery Service - Fast & Reliable Vehicle Recovery",
  description: "Professional vehicle recovery and roadside assistance in Musaffah, Abu Dhabi. Towing, off-road recovery, fuel delivery, tyre change, and battery boost available 24/7.",
  keywords: ["Abu Dhabi recovery service", "car recovery Abu Dhabi", "towing service Abu Dhabi", "roadside assistance", "off road recovery", "fuel delivery", "battery boost", "24/7 recovery service"],
  authors: [{ name: "Abu Dhabi Recovery Service" }],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Abu Dhabi Recovery Service - Fast & Reliable Vehicle Recovery",
    description: "Professional vehicle recovery and roadside assistance in Musaffah, Abu Dhabi. Towing, off-road recovery, fuel delivery, tyre change, and battery boost available 24/7.",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 1200,
        alt: "Abu Dhabi Recovery Service Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Dhabi Recovery Service - Fast & Reliable Vehicle Recovery",
    description: "Professional vehicle recovery and roadside assistance in Musaffah, Abu Dhabi. Towing, off-road recovery, fuel delivery, tyre change, and battery boost available 24/7.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jost.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
