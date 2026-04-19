"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="section-fade w-full"
      style={{
        position: "relative",
        overflow: "hidden",
        paddingBottom: 100,
        background:
          "linear-gradient(180deg, var(--color-white) 0%, var(--color-bg-light) 100%)",
      }}
    >
      {/* SPACETIME GRID LINES — fading decorative background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Vertical lines */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${8 + i * 8}%`,
              width: 1,
              background: `linear-gradient(180deg, transparent 0%, rgba(249,100,0,0.04) 30%, rgba(250,179,2,0.06) 60%, transparent 100%)`,
            }}
          />
        ))}
        {/* Horizontal lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: `${12 + i * 12}%`,
              height: 1,
              background: `linear-gradient(90deg, transparent 0%, rgba(249,100,0,0.04) 20%, rgba(250,179,2,0.06) 50%, rgba(249,100,0,0.04) 80%, transparent 100%)`,
            }}
          />
        ))}
        {/* Radial fade at bottom to blend into next section */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 200,
            background:
              "linear-gradient(to bottom, transparent 0%, var(--color-bg-light) 100%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* LOGO BAR — ArehmanLabs branding */}
        <div style={{ textAlign: "center", padding: "32px 24px 8px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 6,
            }}
          >
            <Image
              src="/logo.webp"
              alt="ArehmanLab Academy"
              width={32}
              height={32}
              style={{ borderRadius: 6 }}
            />
            <span
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: 14,
                fontWeight: 700,
                color: "var(--color-text-primary)",
                letterSpacing: 1,
              }}
            >
              ArehmanLab Academy
            </span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 3,
              color: "var(--color-text-muted)",
              textTransform: "uppercase",
              marginTop: 2,
            }}
          >
            Neuroleadership Speaking Institute
          </p>
        </div>

        {/* UNIGNORABLE BADGE */}
        <div style={{ textAlign: "center", padding: "24px 24px 0" }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-montserrat)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 4,
              color: "var(--color-white)",
              background: "var(--color-secondary)",
              padding: "8px 24px",
              borderRadius: 4,
              textTransform: "uppercase",
            }}
          >
            UNIGNORABLE
          </span>
        </div>

        {/* MAIN HEADLINE */}
        <div style={{ textAlign: "center", padding: "36px 24px 40px" }}>
          <h1
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(48px, 9vw, 88px)",
              lineHeight: 0.95,
              color: "var(--color-secondary)",
              letterSpacing: 3,
              margin: "0 auto 28px",
            }}
          >
            YOUR BRAIN DIDN&apos;T FREEZE.
            <br />
            IT WAS HIJACKED.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 16,
              color: "var(--color-text-secondary)",
              maxWidth: 600,
              margin: "0 auto 28px",
              lineHeight: 1.8,
            }}
          >
            In high-pressure moments — interviews, presentations, high-stakes
            meetings — your amygdala floods your body with cortisol and shuts
            down the logical part of your brain. You don&apos;t need more
            practice. You need to hack your biology.
          </p>

          <a href="https://www.arehmanlab.com/lms" className="btn-primary">
            Learn the T.R.U.S.T. Framework — Free
          </a>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 12,
              color: "var(--color-text-muted)",
              marginTop: 10,
            }}
          >
            Free. No credit card. Start in 2 minutes.
          </p>
        </div>

        {/* HERO BANNER IMAGE */}
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 7",
              borderRadius: 16,
              overflow: "hidden",
              background:
                "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
              alt="UNIGNORABLE — Decode Contagious Trust Communication"
              fill
              sizes="(max-width: 768px) 100vw, 1100px"
              style={{ objectFit: "cover" }}
              priority
            />
            {/* GRADIENT OVERLAY */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(26,26,26,0.2) 0%, rgba(26,26,26,0.75) 100%)",
              }}
            />
            {/* TEXT ON IMAGE */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: 32,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(28px, 5vw, 52px)",
                  color: "white",
                  letterSpacing: 3,
                  margin: "0 0 12px",
                  lineHeight: 1.05,
                }}
              >
                DECODE CONTAGIOUS TRUST COMMUNICATION
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(13px, 1.6vw, 17px)",
                  color: "rgba(255,255,255,0.85)",
                  maxWidth: 460,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                The neuroscience-backed system to eliminate freezing, own any
                room, and communicate with unshakeable confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
