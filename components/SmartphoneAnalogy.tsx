"use client";

export default function SmartphoneAnalogy() {
  return (
    <section
      className="section-fade w-full"
      style={{
        background: "var(--color-bg-dark)",
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(22px, 3.5vw, 32px)",
            color: "var(--color-white)",
            lineHeight: 1.6,
            margin: "0 0 28px",
          }}
        >
          Your brain works like a smartphone.
        </p>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 16,
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.9,
            margin: "0 0 28px",
          }}
        >
          Open too many heavy apps at once and it overheats. It freezes. You
          can&apos;t tap any buttons.
        </p>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 16,
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.9,
            margin: "0 0 36px",
          }}
        >
          Under pressure, your brain does the exact same thing — it crashes your
          operating system to protect you.
        </p>
        <p
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: 18,
            fontWeight: 700,
            color: "var(--color-primary)",
            letterSpacing: 1,
            margin: 0,
          }}
        >
          The T.R.U.S.T. Framework is the reboot sequence.
        </p>
      </div>
    </section>
  );
}
