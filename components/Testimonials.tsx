"use client";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section
      className="section-fade w-full"
      style={{ background: "var(--color-bg-secondary)", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {testimonials.map((q, i) => (
            <div
              key={i}
              style={{
                background: "var(--color-white)",
                borderLeft: "3px solid var(--color-primary)",
                borderRadius: "0 12px 12px 0",
                padding: "28px 24px",
                position: "relative",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 10,
                  left: 14,
                  fontFamily: "Georgia, serif",
                  fontSize: 72,
                  color: "var(--color-primary)",
                  opacity: 0.2,
                  lineHeight: 1,
                }}
              >
                &ldquo;
              </span>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontStyle: "italic",
                  fontSize: 15,
                  color: "var(--color-text-primary)",
                  lineHeight: 1.75,
                  margin: 0,
                  paddingTop: 20,
                }}
              >
                {q}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
