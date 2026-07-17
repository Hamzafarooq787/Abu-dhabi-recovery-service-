import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0b0d10 0%, #2a1200 55%, #FF6A1A 140%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 24,
            background: siteConfig.brandColor,
            color: "#000",
            fontSize: 72,
            fontWeight: 900,
            marginBottom: 32,
          }}
        >
          A
        </div>
        <div style={{ fontSize: 56, fontWeight: 900, textAlign: "center" }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 28, marginTop: 16, color: "#e5e5e5" }}>
          24/7 Vehicle Recovery & Roadside Assistance
        </div>
      </div>
    ),
    { ...size }
  );
}
