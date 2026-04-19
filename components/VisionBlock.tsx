"use client";

import { visionLines } from "@/lib/data";

export default function VisionBlock() {
  return (
    <section
      className="section-fade w-full text-center"
      style={{ padding: "96px 24px" }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(28px, 4vw, 40px)",
            color: "var(--color-text-primary)",
            fontWeight: 400,
            margin: "0 0 36px",
            lineHeight: 1.3,
          }}
        >
          Imagine walking into any high-stakes moment knowing...
        </h2>
        {visionLines.map((line) => (
          <p
            key={line}
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: 22,
              fontWeight: 600,
              color: "var(--color-text-primary)",
              margin: "0 0 8px",
              lineHeight: 2.2,
            }}
          >
            <span
              style={{
                color: "var(--color-secondary)",
                fontSize: 20,
                marginRight: 10,
              }}
            >
              •
            </span>
            {line}
          </p>
        ))}
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontStyle: "italic",
            fontSize: 15,
            color: "var(--color-text-tertiary)",
            margin: "20px 0 44px",
          }}
        >
          Not because of how you feel... but because you&apos;ve trained it.
        </p>

        {/* VALUE STACK */}
        <div
          style={{
            textAlign: "left",
            maxWidth: 480,
            margin: "0 auto 32px",
            fontFamily: "var(--font-inter)",
            fontSize: 15,
            color: "var(--color-text-primary)",
            lineHeight: 2.2,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 700,
              fontSize: 16,
              margin: "0 0 12px",
            }}
          >
            Start free today and get:
          </p>
          <p style={{ margin: "0 0 4px" }}>
            <span style={{ color: "var(--color-success)", marginRight: 10 }}>
              ✓
            </span>
            The full 7-lesson UNIGNORABLE video course
          </p>
          <p style={{ margin: "0 0 4px" }}>
            <span style={{ color: "var(--color-success)", marginRight: 10 }}>
              ✓
            </span>
            The Calm Code Pre-Performance Playbook — your neural operating
            system for every high-pressure moment
          </p>
          <p style={{ margin: "0 0 4px" }}>
            <span style={{ color: "var(--color-success)", marginRight: 10 }}>
              ✓
            </span>
            Access to the ARehman Lab community
          </p>
          <p
            style={{
              fontWeight: 600,
              color: "var(--color-text-secondary)",
              margin: "12px 0 0",
              fontSize: 13,
            }}
          >
            Free. No credit card required.
          </p>
        </div>

        {/* CTA 4 — Final */}
        <a
          href="https://www.arehmanlab.com/lms"
          className="btn-primary btn-primary-lg"
        >
          Let&apos;s Get Started →
        </a>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 12,
            color: "var(--color-text-muted)",
            marginTop: 10,
          }}
        >
          Join 1,000+ high performers already inside.
        </p>
      </div>
    </section>
  );
}
