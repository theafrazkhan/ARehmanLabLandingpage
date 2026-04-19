"use client";

import { forWhoItems } from "@/lib/data";

export default function ForWhoSection() {
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
            This program is for high performers who...
          </h2>
          <ol
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
            {forWhoItems.map((item, i) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  color: "var(--color-text-primary)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-secondary)",
                    fontWeight: 700,
                    minWidth: 22,
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  {i + 1}.
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        {/* CTA 3 — outlined */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <a href="/sign-up" className="btn-outline">
              I&apos;m Ready To Prepare Like A High Performer →
            </a>
        </div>
      </div>
    </section>
  );
}
