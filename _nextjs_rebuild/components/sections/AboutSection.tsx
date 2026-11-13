import AnimatedSection from "@/components/AnimatedSection";

const METRICS = [
  { num: "5+",  label: "Titles Competed" },
  { num: "12+", label: "Pro Athletes" },
  { num: "10+", label: "Tournaments" },
  { num: "GUJ", label: "Headquarters" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{ padding: "100px 48px", background: "#0D1017", scrollMarginTop: 68 }}
    >
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 80, alignItems: "center", maxWidth: 1400, margin: "0 auto",
      }}
        className="about-grid"
      >
        {/* Left */}
        <AnimatedSection direction="left">
          <div className="section-tag">Our Vision</div>
          <h2 style={{
            fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
            fontSize: "clamp(36px,5vw,56px)", letterSpacing: 2, textTransform: "uppercase",
            lineHeight: 1, marginBottom: 24,
          }}>
            Built for the Undergods.<br />
            <span style={{ color: "#FF7B00" }}>Driven by the Rise.</span>
          </h2>
          <p style={{ fontSize: 15, color: "#aaa", lineHeight: 1.8, marginBottom: 20 }}>
            At Team AsuraVerse Esports Pvt Ltd, our vision is clear — to become the ultimate launchpad for India&apos;s undergods — the raw, overlooked, and underestimated players who possess the hunger to rise but lack the right opportunities.
          </p>
          <p style={{ fontSize: 15, color: "#aaa", lineHeight: 1.8, marginBottom: 20 }}>
            We believe true talent isn&apos;t limited to big cities or existing fanbases. It exists in every corner of the country — in late-night grinders, small-town dreamers, and creators waiting to be seen.
          </p>
          <p style={{ fontSize: 15, color: "#aaa", lineHeight: 1.8 }}>
            Through advanced training, strategic mentorship, and exposure to high-level tournaments, we bridge the gap between grassroots passion and global recognition.
          </p>
        </AnimatedSection>

        {/* Right */}
        <AnimatedSection direction="right" delay={0.15}>
          {/* Quote card */}
          <div style={{
            background: "#12161F", border: "1px solid rgba(255,255,255,0.07)",
            padding: "36px 40px", position: "relative", overflow: "hidden",
            marginBottom: 2,
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3,
              background: "#FF7B00",
            }} />
            <div style={{
              fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
              fontSize: 26, letterSpacing: 1.5, lineHeight: 1.35, marginBottom: 16, color: "#fff",
            }}>
              &quot;We don&apos;t just create players.<br />
              We create stories of{" "}
              <span style={{ color: "#FF7B00" }}>rise</span>,{" "}
              <span style={{ color: "#FF7B00" }}>impact</span>, and{" "}
              <span style={{ color: "#FF7B00" }}>legacy.</span>&quot;
            </div>
            <p style={{ fontSize: 14, color: "#aaa", lineHeight: 1.8 }}>
              AsuraVerse is not just building a team — we are building a movement where dedication beats background, where skill meets opportunity, and where every underdog gets a fair chance to become a champion.
            </p>
          </div>

          {/* Metrics */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 2, background: "rgba(255,255,255,0.07)",
          }}>
            {METRICS.map((m) => (
              <div key={m.label} style={{
                background: "#12161F", padding: "28px", textAlign: "center",
              }}>
                <div style={{
                  fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                  fontSize: 42, color: "#FF7B00", letterSpacing: 2,
                }}>
                  {m.num}
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "#888", textTransform: "uppercase" }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media (max-width: 480px) { #about { padding: 60px 20px !important; } }
      `}</style>
    </section>
  );
}
