import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { FiShield, FiTv, FiPackage, FiGlobe } from "react-icons/fi";

const BENEFITS = [
  { icon: FiShield,  label: "Jersey Branding",      sub: "Worn in every match" },
  { icon: FiTv,      label: "Social Reach",          sub: "Instagram & more" },
  { icon: FiPackage, label: "Content Integration",   sub: "Posts, reels & shoutouts" },
  { icon: FiGlobe,   label: "India's Esports Rise",  sub: "Be part of the journey" },
];

export default function PartnersSection() {
  return (
    <section style={{
      padding: "100px 48px", background: "#12161F",
      position: "relative", overflow: "hidden", textAlign: "center",
      scrollMarginTop: 68,
    }}>
      {/* Radial glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(255,123,0,0.05) 0%, transparent 70%)",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
        <AnimatedSection>
          <div className="section-tag" style={{ justifyContent: "center" }}>Sponsorships &amp; Partnerships</div>
          <h2 style={{
            fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
            fontSize: "clamp(44px,7vw,80px)", letterSpacing: 3, textTransform: "uppercase",
            lineHeight: 1, marginBottom: 24,
          }}>
            Partner With <span style={{ color: "#FF7B00" }}>AsuraVerse</span>
          </h2>
          <p style={{ fontSize: 17, color: "#aaa", lineHeight: 1.9, marginBottom: 48 }}>
            We are building India&apos;s next great esports story — one match, one tournament, one milestone at a time. Partner with us and have your brand seen on jerseys, streams, and stages across the country.
          </p>

          {/* Benefits */}
          <div style={{
            display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 0,
            borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)",
            padding: "40px 0", marginBottom: 48,
          }}>
            {BENEFITS.map(({ icon: Icon, label, sub }, i) => (
              <div key={label} style={{
                flex: "1 1 160px",
                padding: "0 32px",
                borderRight: i < BENEFITS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}>
                <Icon size={24} color="#FF7B00" style={{ marginBottom: 10 }} />
                <div style={{
                  fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                  fontSize: 20, letterSpacing: 2, color: "#FF7B00",
                }}>
                  {label}
                </div>
                <div style={{
                  fontFamily: "var(--font-space,'Space Mono',monospace)",
                  fontSize: 10, color: "#888", marginTop: 4, textTransform: "uppercase", letterSpacing: 1.5,
                }}>
                  {sub}
                </div>
              </div>
            ))}
          </div>

          <Link href="/partner-with-us" className="btn-primary" style={{ padding: "18px 56px", fontSize: 15, letterSpacing: 3 }}>
            Partner With Us →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
