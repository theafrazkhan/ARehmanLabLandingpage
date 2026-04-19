"use client";
import Image from "next/image";

import { problemCards } from "@/lib/data";

export default function ProblemSection() {
  return (
    <section className="section-fade w-full" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* SPLIT HEADLINE */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            alignItems: "flex-start",
            marginBottom: 48,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(44px, 6vw, 72px)",
              lineHeight: 0.95,
              color: "var(--color-text-primary)",
              flex: "1 1 400px",
              margin: 0,
            }}
          >
            You don&apos;t rise
            <br />
            to the occasion
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 15,
              color: "var(--color-text-secondary)",
              lineHeight: 1.85,
              flex: "1 1 300px",
              maxWidth: 420,
              margin: 0,
            }}
          >
            You fall to the level of preparation... and more importantly, your
            state. And right now, your performance is way dependent on how you
            feel.
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <a href="/sign-up" className="btn-primary">
              Build Your Pre-Performance System &darr;
            </a>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 12,
              color: "var(--color-text-muted)",
              marginTop: 8,
            }}
          >
            Free — Start in 2 minutes
          </p>
        </div>

        {/* 3-CARD GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {problemCards.map((card) => (
            <div
              key={card.label}
              style={{
                background: "var(--color-bg-light)",
                border: "1px solid var(--color-border-light)",
                borderRadius: 12,
                overflow: "hidden",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(0,0,0,0.08)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: 170,
                  overflow: "hidden",
                  background:
                    "linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%)",
                }}
              >
                <Image
                  src={card.img}
                  alt={card.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(26,26,26,0.2)",
                  }}
                />
              </div>
              <div style={{ padding: "18px 20px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 2,
                    color: "var(--color-secondary)",
                    textTransform: "uppercase",
                    margin: "0 0 10px",
                  }}
                >
                  {card.label}
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
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
