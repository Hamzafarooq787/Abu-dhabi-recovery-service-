// src/config/seo.ts

import { siteConfig } from "./site";

export const seoConfig = {
  title: `${siteConfig.name} | 24/7 Vehicle Recovery & Roadside Assistance`,
  description:
    "Fast, reliable vehicle recovery, towing, and roadside assistance in Musaffah, Abu Dhabi. Available 24/7 for breakdowns, off-road recovery, fuel delivery, and more.",
} as const;
