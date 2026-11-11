import { ImageResponse } from "next/og";

export const alt = "Pottery Post | For Makers and Admirers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social-share image (Open Graph + Twitter), generated at build time.
export default function Image() {
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
          background: "#5C3D2E",
          color: "#F5F0E8",
        }}
      >
        <div style={{ fontSize: 120, fontWeight: 700, letterSpacing: "0.06em" }}>
          POTTERY POST
        </div>
        <div style={{ fontSize: 42, letterSpacing: "0.32em", marginTop: 28, color: "#E8D5B7" }}>
          FOR MAKERS &amp; ADMIRERS
        </div>
        <div style={{ fontSize: 28, letterSpacing: "0.1em", marginTop: 56, color: "#D4622A" }}>
          potterypost.ca
        </div>
      </div>
    ),
    { ...size }
  );
}
