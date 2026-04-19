"use client";

import { learnItems } from "@/lib/data";

export default function LearnSection() {
  return (
    <section className="section-fade w-full" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 48,
            alignItems: "flex-start",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: 1.05,
              color: "var(--color-text-primary)",
              flex: "1 1 320px",
              margin: 0,
            }}
          >
            Inside this program you will learn how to...
          </h2>
          <ul
            style={{
              listStyle: "none",
              fontFamily: "var(--font-inter)",
              fontSize: 15,
              lineHeight: 2.4,
              flex: "1 1 320px",
              padding: 0,
              margin: 0,
            }}
          >
            {learnItems.map((item) => (
              <li key={item} style={{ color: "var(--color-text-primary)" }}>
                <span
                  style={{
                    color: "var(--color-success)",
                    marginRight: 12,
                    fontWeight: 700,
                  }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA 2 */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <a href="/sign-up" className="btn-primary" style={{ minWidth: 320 }}>
              Dive In &amp; Start The Program
            </a>
        </div>
      </div>
    </section>
  );
}
