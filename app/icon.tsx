import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: siteConfig.brandColor,
          borderRadius: 12,
          fontSize: 40,
          fontWeight: 900,
          color: "#000",
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
