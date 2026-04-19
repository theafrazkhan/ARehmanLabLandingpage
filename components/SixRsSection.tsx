"use client";
import { trustFramework } from "@/lib/data";

export default function TrustFrameworkSection() {
  return (
    <section
      className="section-fade w-full"
      style={{ background: "var(--color-bg-secondary)", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* HEADLINE */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(40px, 5vw, 56px)",
              lineHeight: 0.95,
              color: "var(--color-text-primary)",
              margin: "0 0 20px",
            }}
          >
            The T.R.U.S.T. Framework
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 15,
              color: "var(--color-text-secondary)",
              lineHeight: 1.8,
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            The exact 5-step brain-body system used to eliminate freezing, own
            any room, and communicate with unshakeable confidence.
          </p>
        </div>

        {/* 5-CARD GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {trustFramework.map((item, i) => (
            <div
              key={`${item.letter}-${i}`}
              style={{
                background: "var(--color-white)",
                border: "1px solid var(--color-border-light)",
                borderRadius: 12,
                padding: "32px 24px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(0,0,0,0.08)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: 48,
                  color: "var(--color-secondary)",
                  lineHeight: 1,
                  display: "block",
                  marginBottom: 8,
                }}
              >
                {item.letter}
              </span>
              <p
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  margin: "0 0 10px",
                  letterSpacing: 0.5,
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 14,
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
