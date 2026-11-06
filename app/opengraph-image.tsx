import { ImageResponse } from "next/og";

export const alt = "Fantômes — abonnements oubliés";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F6F1E7",
          color: "#1B1A17",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 40, color: "#1F4D3A", fontWeight: 700 }}>Fantômes</div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1, marginTop: 24 }}>
          Trouve les abonnements que tu paies sans t’en servir.
        </div>
        <div style={{ fontSize: 34, color: "#D9541E", marginTop: 32 }}>
          Gratuit pour commencer
        </div>
      </div>
    ),
    size
  );
}
