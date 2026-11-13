"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { FiCalendar, FiUsers, FiZap } from "react-icons/fi";
import { GiTrophy } from "react-icons/gi";
import Link from "next/link";

const FEATURES = [
  {
    icon: FiCalendar,
    title: "Competitive Tournaments",
    desc: "From local LAN events to national online championships — we're building a full calendar of BGMI, Valorant & Free Fire tournaments.",
  },
  {
    icon: FiUsers,
    title: "Team Scrims",
    desc: "Regular organised scrims for teams of all levels. Register your squad, get match-made, and grind with the best.",
  },
  {
    icon: FiZap,
    title: "Cash Prizes & Recognition",
    desc: "Real stakes. Real rewards. Our events feature prize pools, trophies, and visibility for teams looking to make their name.",
  },
  {
    icon: GiTrophy,
    title: "Pathway to Pro",
    desc: "Top performers from our tournaments get scouted for AsuraVerse rosters. It's not just a tournament — it's your tryout.",
  },
];

export default function TournamentsSection() {
  return (
    <section id="tournaments" style={{ padding: "100px 48px", background: "#0D1017", scrollMarginTop: 68 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <AnimatedSection>
          <div className="section-tag">Coming Soon</div>
          <h2 style={{
            fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
            fontSize: "clamp(36px,5vw,56px)", letterSpacing: 2, textTransform: "uppercase",
            lineHeight: 1, marginBottom: 16,
          }}>
            Tournaments <span style={{ color: "#FF7B00" }}>&amp; Scrims</span>
          </h2>
          <p style={{ fontSize: 16, color: "#aaa", maxWidth: 580, marginBottom: 60, lineHeight: 1.8 }}>
            AsuraVerse is expanding beyond competing — we&apos;re about to start <strong style={{ color: "#f0f0f0" }}>organising</strong>. Expect structured tournaments, regular scrim nights, and a grassroots esports ecosystem built for India.
          </p>
        </AnimatedSection>

        {/* Feature cards */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 2, background: "rgba(255,255,255,0.07)", marginBottom: 60,
        }}>
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.1}>
              <div style={{
                background: "#090B10", padding: "36px 32px",
                height: "100%",
                borderTop: "3px solid #FF7B00",
                transition: "background 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "#0e1117")}
                onMouseLeave={e => (e.currentTarget.style.background = "#090B10")}
              >
                <div style={{
                  width: 48, height: 48,
                  background: "rgba(255,123,0,0.1)",
                  border: "1px solid rgba(255,123,0,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20,
                }}>
                  <Icon size={22} color="#FF7B00" />
                </div>
                <div style={{
                  fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                  fontSize: 22, letterSpacing: 2, color: "#fff", marginBottom: 12,
                }}>
                  {title}
                </div>
                <p style={{ fontSize: 14, color: "#888", lineHeight: 1.8 }}>{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA banner */}
        <AnimatedSection>
          <div style={{
            background: "rgba(255,123,0,0.06)",
            border: "1px solid rgba(255,123,0,0.25)",
            padding: "40px 48px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 24,
          }}>
            <div>
              <div style={{
                fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                fontSize: 28, letterSpacing: 2, color: "#fff", marginBottom: 8,
              }}>
                Register for Early Access
              </div>
              <p style={{ fontSize: 14, color: "#aaa" }}>
                Be the first to know when our tournament registrations open.
              </p>
            </div>
            <Link href="/#contact" className="btn-primary">Notify Me</Link>
          </div>
        </AnimatedSection>
      </div>
      <style>{`@media(max-width:480px){#tournaments{padding:60px 20px!important}}`}</style>
    </section>
  );
}
