"use client";

export default function InstructorBio() {
  return (
    <section className="section-fade w-full" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(36px, 5vw, 52px)",
            lineHeight: 1,
            color: "var(--color-text-primary)",
            textAlign: "center",
            margin: "0 0 56px",
          }}
        >
          Meet Your Instructor
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 48,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* PHOTO PLACEHOLDER */}
          <div
            style={{
              flex: "0 0 280px",
              height: 340,
              borderRadius: 16,
              background:
                "linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 13,
                color: "var(--color-text-muted)",
                textAlign: "center",
                padding: 20,
              }}
              role="img"
              aria-label="Dr. Attiq ur Rehman — Neuroleadership Speaking Institute"
            >
              [Photo: Dr. Attiq ur Rehman]
            </span>
          </div>

          {/* BIO TEXT */}
          <div style={{ flex: "1 1 400px", maxWidth: 560 }}>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 15,
                color: "var(--color-text-secondary)",
                lineHeight: 1.9,
                margin: "0 0 20px",
              }}
            >
              Dr. Attiq ur Rehman did not learn to communicate under pressure in
              a classroom. He commanded military units through some of the most
              dangerous terrain imaginable — snipers, IEDs, steep mountains.
              Panic was not an option. He regulated his nervous system to keep
              his team alive.
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 15,
                color: "var(--color-text-secondary)",
                lineHeight: 1.9,
                margin: "0 0 28px",
              }}
            >
              Today, as founder of the Neuroleadership Speaking Institute and
              ARehman Lab, he teaches young adults and leaders the exact same
              brain-body science — so you never freeze again.
            </p>

            {/* CREDENTIAL BADGES */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <span
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--color-secondary)",
                  border: "1px solid var(--color-secondary)",
                  borderRadius: 6,
                  padding: "6px 14px",
                  letterSpacing: 0.5,
                }}
              >
                Founder, Neuroleadership Speaking Institute
              </span>
              <span
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--color-secondary)",
                  border: "1px solid var(--color-secondary)",
                  borderRadius: 6,
                  padding: "6px 14px",
                  letterSpacing: 0.5,
                }}
              >
                Founder, ARehman Lab
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
