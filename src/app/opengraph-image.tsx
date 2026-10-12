import { ImageResponse } from "next/og";

export const alt = "Clipperie — Un live de deux heures devient trente clips verticaux";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const ticks = Array.from({ length: 30 }, (_, i) => i);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f1e7",
          padding: "70px",
          color: "#141210",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 40, fontWeight: 800 }}>
          Clipperie
          <div
            style={{ width: 16, height: 16, borderRadius: 8, background: "#e8412c", marginLeft: 10 }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>
          <span>Un live de deux heures devient</span>
          <span style={{ color: "#e8412c" }}>trente clips verticaux.</span>
        </div>
        <div
          style={{
            display: "flex",
            height: 64,
            border: "2px solid #d8cfbe",
            borderRadius: 10,
            background: "#fffcf6",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "0 10px",
          }}
        >
          {ticks.map((i) => (
            <div key={i} style={{ width: 14, height: 36, borderRadius: 3, background: "#e8412c" }} />
          ))}
        </div>
      </div>
    ),
    size,
  );
}
