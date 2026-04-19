"use client";
import Image from "next/image";
import { sixRs } from "@/lib/data";

export default function SixRsSection() {
  return (
    <section
      className="section-fade w-full"
      style={{ background: "var(--color-bg-secondary)", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 48,
            alignItems: "flex-start",
          }}
        >
          {/* LEFT — HEADLINE */}
          <div style={{ flex: "1 1 280px", maxWidth: 360 }}>
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(40px, 5vw, 56px)",
                lineHeight: 0.95,
                color: "var(--color-text-primary)",
                margin: "0 0 20px",
              }}
            >
              The 6R&apos;s of world-class performance
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 15,
                color: "var(--color-text-secondary)",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              This is the exact structure used by elite performers in business,
              military, real-time leadership and keynote speakers.
            </p>
          </div>

          {/* RIGHT — 2x3 IMAGE CARD GRID */}
          <div
            className="sixrs-grid"
            style={{
              flex: "1 1 500px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
            }}
          >
            {sixRs.map((r) => (
              <div
                key={r.title}
                style={{
                  position: "relative",
                  aspectRatio: "4 / 3",
                  borderRadius: 12,
                  overflow: "hidden",
                  cursor: "default",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  background:
                    "linear-gradient(135deg, #d0d0d0 0%, #b0b0b0 100%)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(0,0,0,0.12)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Image
                  src={r.img}
                  alt={r.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 220px"
                  style={{ objectFit: "cover" }}
                />
                {/* GRADIENT OVERLAY */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.05) 60%)",
                  }}
                />
                {/* TEXT */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    padding: "14px 14px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: 20,
                      color: "white",
                      margin: 0,
                      letterSpacing: 1,
                    }}
                  >
                    {r.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 11,
                      color: "rgba(255,255,255,0.7)",
                      margin: "2px 0 0",
                    }}
                  >
                    {r.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
