"use client";
import Image from "next/image";

export default function ClosingSection() {
  return (
    <>
      {/* MANIFESTO */}
      <section
        className="section-fade w-full"
        style={{
          background: "var(--color-bg-dark)",
          padding: "96px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(28px, 5vw, 44px)",
              lineHeight: 1.15,
              color: "var(--color-white)",
              margin: "0 0 28px",
            }}
          >
            Your routine isn&apos;t preparation...
            <br />
            it&apos;s your competitive advantage.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 16,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.9,
              margin: 0,
            }}
          >
            The best in the world are not always more talented. They are more
            consistent. Because they don&apos;t rely on how they feel, they rely
            on what they&apos;ve built.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "40px 24px",
          background: "var(--color-bg-dark)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Image
              src="/logo.webp"
              alt="ArehmanLab Academy"
              width={24}
              height={24}
              style={{ borderRadius: 4 }}
            />
            <span
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: 13,
                fontWeight: 600,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              ArehmanLab Academy
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                color: "rgba(255,255,255,0.3)",
                marginLeft: 4,
              }}
            >
              &times; Speakers Institute Corporate
            </span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 12,
              color: "rgba(255,255,255,0.3)",
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} ArehmanLab Academy. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
