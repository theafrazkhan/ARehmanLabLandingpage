"use client";
import { steps } from "@/lib/data";

export default function StepsStrip() {
  return (
    <section
      className="section-fade w-full"
      style={{ background: "var(--color-bg-light)", padding: "80px 24px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "stretch",
            gap: 0,
          }}
        >
          {steps.map((s, i) => (
            <div
              key={s.step}
              style={{
                display: "flex",
                alignItems: "center",
                flex: "1 1 220px",
              }}
            >
              <div
                style={{
                  flex: 1,
                  background: "var(--color-white)",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: 10,
                  padding: "24px 20px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "var(--color-secondary)",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    margin: "0 0 12px",
                  }}
                >
                  {s.step}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    color: "var(--color-text-secondary)",
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  {s.body}
                </p>
              </div>
              {i < steps.length - 1 && (
                <span
                  className="step-arrow"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px",
                    color: "var(--color-primary)",
                    fontSize: 22,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
